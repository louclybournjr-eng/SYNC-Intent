// SPDX-License-Identifier: Apache-2.0
//
// SYNC Reference Verifier
//
// Minimal, dependency-free reproduction of the current production
// SYNC human-authorization signing profile.
//
// This verifier establishes cryptographic properties of the portable
// human-authority artifact. It does not establish machine admission,
// execution, settlement, provider outcome, legal validity, or compliance.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

const receiptPath = path.join(
  here,
  '..',
  'examples',
  'sync-receipt-SYNC-6A27C41D696E.vc.json',
);

const PROFILE = 'sync.intent_evidence_payload.current.v1';

const EXPECTED_DIGEST =
  'j-WPS0kb26WTLG4hY5J95uoD-wGY5rxqKWfFevT5VqI';

const FORGED_PUBLIC_KEY =
  'BKQ1tu+x7AhPVnKMOtZ9KtnwtI18jUdRepL8kqDfk3H1NaicRQh1crB68jkoKt1dfJx6MEzkHBW5UBMkmf1Un80=';

const MUTATED_INTENT =
  'Authorize this receipt for the SYNC × EMILIA conformance example with a different material purpose.';

function canonicalize(value) {
  if (value === null || value === undefined) {
    return JSON.stringify(value);
  }

  if (Array.isArray(value)) {
    return `[${value.map(canonicalize).join(',')}]`;
  }

  if (typeof value === 'object') {
    return `{${Object.keys(value)
      .sort()
      .map(
        (key) =>
          `${JSON.stringify(key)}:${canonicalize(value[key])}`,
      )
      .join(',')}}`;
  }

  return JSON.stringify(value);
}

function decodeBase64Url(value) {
  return Buffer.from(
    value.replace(/-/g, '+').replace(/_/g, '/') +
      '='.repeat((4 - (value.length % 4)) % 4),
    'base64',
  );
}

function sha256Label(value) {
  return `SHA-256:${crypto
    .createHash('sha256')
    .update(value)
    .digest('hex')}`;
}

function publicKeyFromRawB64(value) {
  const raw = Buffer.from(value, 'base64');

  // SubjectPublicKeyInfo wrapper for:
  // id-ecPublicKey + prime256v1 / secp256r1.
  const prefix = Buffer.from(
    '3059301306072a8648ce3d020106082a8648ce3d030107034200',
    'hex',
  );

  if (raw.length !== 65 || raw[0] !== 0x04) {
    throw new Error(
      'SYNC public key is not an uncompressed P-256 point',
    );
  }

  return crypto.createPublicKey({
    key: Buffer.concat([prefix, raw]),
    format: 'der',
    type: 'spki',
  });
}

function buildSigningPayload(subject, createdAt) {
  return {
    schema: PROFILE,
    intent: subject.intent,
    intentSha256: subject.intentHash,
    evidence: subject.evidence,
    policyContext: subject.policyContext.labels,
    createdAt,
  };
}

function payloadCandidate(subject, createdAt) {
  const payload = buildSigningPayload(subject, createdAt);

  const canonicalBytes = Buffer.from(
    canonicalize(payload),
    'utf8',
  );

  const digestB64Url = crypto
    .createHash('sha256')
    .update(canonicalBytes)
    .digest('base64url');

  return {
    createdAt,
    payload,
    canonicalBytes,
    digestB64Url,
  };
}

function createdAtCandidates(anchor, beforeSeconds = 5, afterSeconds = 5) {
  const anchorMs = Date.parse(anchor);

  if (!Number.isFinite(anchorMs)) {
    throw new Error('Invalid authorization timestamp');
  }

  const values = [];

  for (
    let offset = -beforeSeconds;
    offset <= afterSeconds;
    offset += 1
  ) {
    values.push(
      new Date(anchorMs + offset * 1000)
        .toISOString()
        .replace('.000Z', 'Z'),
    );
  }

  return values;
}

function verifyProductionProfile(subject) {
  const auth = subject.authorization;

  const candidates = createdAtCandidates(
    auth.created_at,
    5,
    5,
  ).map((createdAt) =>
    payloadCandidate(subject, createdAt),
  );

  const matches = candidates.filter(
    (candidate) =>
      candidate.digestB64Url ===
      auth.signed_payload_digest_b64url,
  );

  const failures = [];

  if (subject.intentHash !== sha256Label(subject.intent)) {
    failures.push(
      'visible intent does not match intentHash',
    );
  }

  if (matches.length !== 1) {
    failures.push(
      matches.length === 0
        ? 'no createdAt candidate reproduces the signed payload digest'
        : 'multiple createdAt candidates reproduce the signed payload digest',
    );
  }

  const selected =
    matches.length === 1 ? matches[0] : null;

  if (
    selected &&
    selected.digestB64Url !== EXPECTED_DIGEST
  ) {
    failures.push(
      'reproduced digest does not match the pinned production vector',
    );
  }

  if (
    selected &&
    selected.digestB64Url !==
      auth.signed_payload_digest_b64url
  ) {
    failures.push(
      'canonical payload digest does not match disclosed signed digest',
    );
  }

  if (selected) {
    try {
      const publicKey = publicKeyFromRawB64(
        auth.public_key_b64,
      );

      const signature = decodeBase64Url(
        auth.signature_b64url,
      );

      const signatureValid = crypto.verify(
        'sha256',
        selected.canonicalBytes,
        publicKey,
        signature,
      );

      if (!signatureValid) {
        failures.push(
          'ES256 signature does not verify over reconstructed payload',
        );
      }
    } catch (error) {
      failures.push(
        `signature verification error: ${error.message}`,
      );
    }
  }

  return {
    status:
      failures.length === 0 ? 'PASS' : 'REFUSE',

    selectedCreatedAt:
      selected?.createdAt ?? null,

    digest:
      selected?.digestB64Url ?? null,

    detail:
      failures.length === 0
        ? 'canonical payload, SHA-256 digest, and DER ES256 signature agree'
        : failures.join('; '),
  };
}

function clone(value) {
  return structuredClone(value);
}

function run() {
  const receipt = JSON.parse(
    fs.readFileSync(receiptPath, 'utf8'),
  );

  const subject = receipt.credentialSubject;

  // --------------------------------------------------
  // 1. Production receipt
  // --------------------------------------------------

  const production =
    verifyProductionProfile(subject);

  // --------------------------------------------------
  // 2. Visible-content mutation
  // --------------------------------------------------

  const mutatedSubject = clone(subject);

  mutatedSubject.intent = MUTATED_INTENT;

  const mutation =
    verifyProductionProfile(mutatedSubject);

  // --------------------------------------------------
  // 3. Changed / forged public key
  // --------------------------------------------------

  const forgedSubject = clone(subject);

  forgedSubject.authorization.public_key_b64 =
    FORGED_PUBLIC_KEY;

  const forged =
    verifyProductionProfile(forgedSubject);

  // --------------------------------------------------
  // 4. Receipt-chain context
  // --------------------------------------------------

  const chain =
    subject.receiptChain ?? {};

  const chainStatus =
    chain.previousReceiptHash
      ? 'INDETERMINATE'
      : 'REFUSE';

  const chainDetail =
    chain.previousReceiptHash
      ? 'previousReceiptHash is present, but no neighboring receipt or independently trusted checkpoint is supplied with this fixture'
      : 'previousReceiptHash is missing';

  // --------------------------------------------------
  // Public result
  // --------------------------------------------------

  const results = [
    {
      vector: 'production-receipt',
      expected: 'PASS',
      actual: production.status,
      detail: production.detail,
    },
    {
      vector: 'visible-content-mutation',
      expected: 'REFUSE',
      actual: mutation.status,
      detail: mutation.detail,
    },
    {
      vector: 'changed-public-key',
      expected: 'REFUSE',
      actual: forged.status,
      detail: forged.detail,
    },
    {
      vector: 'missing-chain-context',
      expected: 'INDETERMINATE',
      actual: chainStatus,
      detail: chainDetail,
    },
  ];

  const allExpected =
    results.every(
      (result) =>
        result.expected === result.actual,
    );

  const report = {
    verifier:
      'SYNC Portable Human Authority Reference Verifier',

    receipt:
      subject.publicReceiptID,

    profile:
      PROFILE,

    boundary: {
      establishes: [
        'protected-content integrity',
        'intent-hash agreement',
        'production payload reproduction',
        'ES256 / P-256 signature verification',
        'hostile mutation refusal',
        'changed-key refusal',
      ],

      doesNotEstablish: [
        'organizational authority',
        'machine admission',
        'execution',
        'settlement',
        'provider outcome',
        'legal validity',
        'regulatory compliance',
      ],
    },

    results,

    overall:
      allExpected
        ? 'EXPECTED_RESULTS_REPRODUCED'
        : 'UNEXPECTED_RESULT',

    note:
      'Human authorization, machine admission, execution, and outcome remain separate evidence-bearing events.',
  };

  console.log(
    JSON.stringify(report, null, 2),
  );

  if (!allExpected) {
    process.exitCode = 1;
  }
}

run();