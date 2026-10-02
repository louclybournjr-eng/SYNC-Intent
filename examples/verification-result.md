# SYNC Receipt Verification Result

## Artifact

**Public Receipt ID:** `SYNC-6A27C41D696E`

**Receipt file:** `sync-receipt-SYNC-6A27C41D696E.vc.json`

**Receipt type:** `human_authorization_origin_receipt`

This is a production SYNC human-authorization receipt used as a public interoperability fixture.

The artifact preserves human-authorization evidence.

It is not itself a machine-admission, execution, settlement, or outcome record.

---

## Independent Reproduction

An independent implementation in the public EMILIA Protocol repository reproduces the SYNC production signing profile without relying on OpenVerifier as a trusted component.

The reproduced signing profile uses:

- Swift `JSONEncoder`
- sorted keys
- `withoutEscapingSlashes`
- UTF-8 canonical bytes
- SHA-256
- ES256
- P-256
- ANSI X9.62 DER-encoded signature material

The independent verifier reconstructs the protected signing payload, reproduces the disclosed digest, and validates the signature against the disclosed P-256 public key.

---

## Verification Model

The public interoperability fixture evaluates four distinct cases:

| Vector | Expected Result | Result |
|---|---|---|
| Production receipt | PASS | PASS |
| Visible-content mutation | REFUSE | REFUSE |
| Changed / forged public key | REFUSE | REFUSE |
| Missing neighboring chain record or trusted checkpoint | INDETERMINATE | INDETERMINATE |

These results preserve the distinction between successful cryptographic verification, explicit refusal, and unresolved evidence.

---

## Positive Vector

The production receipt reproduces successfully.

The verifier:

1. reads the exported SYNC receipt;
2. reconstructs the protected signing payload;
3. resolves the transient `createdAt` value through the pinned authorization-time window;
4. requires exactly one matching payload digest;
5. recomputes SHA-256 over the canonical payload;
6. compares the result with the disclosed signed-payload digest; and
7. validates the DER-encoded ES256 signature against the disclosed P-256 public key.

**Result: PASS**

The positive result establishes that the independently reconstructed payload, disclosed digest, and cryptographic signature agree.

---

## Visible-Content Mutation

The human intent is materially changed while the original cryptographic proof remains unchanged.

The independently reconstructed payload no longer agrees with the original protected signing evidence.

The mutation therefore cannot inherit the original receipt's valid proof.

**Result: REFUSE**

This demonstrates that protected human-authorization content cannot be materially changed while retaining the original valid verification result.

---

## Changed-Key Vector

The receipt's disclosed public key is replaced with an unrelated P-256 public key while the original signature remains unchanged.

The signature does not verify under the substituted key.

**Result: REFUSE**

This demonstrates that public-key substitution does not preserve the original authorization proof.

---

## Receipt-Chain Context

The exported receipt contains receipt-chain metadata including:

- chain index
- current receipt hash
- previous receipt hash
- chain head
- chain schema version

However, the exported artifact does not include the neighboring receipt or an independently trusted chain checkpoint sufficient to establish complete continuity from the artifact alone.

The verifier therefore does not promote the presence of chain metadata into proof of complete receipt-chain continuity.

**Result: INDETERMINATE**

For the independent machine-side interoperability fixture, unresolved required chain context remains fail-closed for consequential-effect admission.

---

## Consequence Boundary

A verified SYNC human-authorization receipt does not by itself prove that an external consequential action occurred.

The interoperability model intentionally separates:

```text
Human Authorization
        ≠
Machine Admission
        ≠
Execution
        ≠
Outcome
        ≠
Settlement
```

Each layer requires its own evidence.

SYNC establishes the human-authority artifact.

An independent machine-side system establishes its own admission and consequence-control records.

A native provider or execution system establishes its own execution or outcome evidence.

Verification preserves those boundaries rather than collapsing them into one generic result.

---

## Exact Action and Decision State

Exact-action identity and decision-state continuity are separate properties.

Exact action asks:

> Is this the same consequential action?

Decision state asks:

> Are the material conditions relied upon when the human authorized that action still the relevant conditions when consequence is attempted?

A valid exact-action binding does not automatically establish unchanged decision state.

A machine-side system may independently evaluate whether required state remains admissible before consequence.

This distinction preserves the meaning of human authorization across system boundaries.

---

## Interoperability Result

The public interoperability work demonstrates that an independent implementation can:

- ingest a production SYNC receipt;
- reconstruct the protected signing payload;
- independently reproduce its cryptographic digest;
- validate its ES256 / P-256 signature;
- refuse material visible-content mutation;
- refuse public-key substitution;
- preserve indeterminacy when required evidence is incomplete; and
- carry verified human-authority evidence toward an independent machine-side admission boundary.

The human-authority system and machine-side consequence system remain independently implemented.

Neither system absorbs the other's trust model.

Neither system acquires ownership of the other's assertions merely because their artifacts compose successfully.

---

## Public Evidence Trail

The corresponding independent machine-side interoperability materials are maintained in the public EMILIA Protocol repository:

`https://github.com/emiliaprotocol/emilia-protocol`

Relevant public paths include:

- `docs/EP-SYNC-INTEROP.md`
- `examples/scitt/sync-emilia-fixture.mjs`
- `examples/scitt/fixtures/sync-emilia-vectors.v1.json`
- `examples/scitt/fixtures/sync-receipt-SYNC-6A27C41D696E.vc.json`

The production SYNC receipt is therefore represented on both sides of the interoperability boundary.

The SYNC repository preserves the human-authority artifact and documentation.

The independent machine-side repository preserves its own reproduction, hostile vectors, and admission-boundary evaluation.

---

## OpenVerifier Boundary

OpenVerifier provides an independent public verification surface for supported SYNC artifacts.

The machine-side interoperability fixture does not silently treat an OpenVerifier result as its own reproduced result.

Instead, the production SYNC signing profile is independently reconstructed and evaluated.

This preserves the distinction between:

```text
External Verification Claim
        ↓
Independent Reproduction
        ↓
Machine-Side Admission Decision
```

One result does not automatically become another.

---

## Claim Boundary

This verification record does not claim:

- organizational authority;
- identity proofing;
- legal validity;
- regulatory compliance;
- complete receipt-chain continuity;
- machine admission solely from the SYNC receipt;
- external execution;
- settlement;
- provider outcome; or
- physical consequence.

It records only what the available public evidence supports.

---

## Summary

```text
Production SYNC Receipt
        ↓
Independent Payload Reconstruction
        ↓
SHA-256 Digest Reproduction
        ↓
ES256 / P-256 Signature Verification
        ↓
Production Receipt → PASS
        ↓
Content Mutation → REFUSE
        ↓
Changed Key → REFUSE
        ↓
Missing Chain Context → INDETERMINATE
        ↓
Human-Authority Evidence Preserved
        ↓
Independent Machine-Side Boundary Remains Separate
```

**Production receipt: PASS**

**Visible-content mutation: REFUSE**

**Changed / forged key: REFUSE**

**Missing chain context: INDETERMINATE**

**SYNC proves what the human authorized. Machine admission, execution, and outcome remain separate evidence-bearing events.**