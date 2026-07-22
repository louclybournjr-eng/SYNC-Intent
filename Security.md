# SECURITY

## Overview

SYNC is a local-first reference implementation for portable human authorization.

The security model is intentionally simple:

- Humans author intent.
- Humans review evidence.
- Device-bound authentication authorizes the decision.
- Receipts are cryptographically signed.
- Verification is performed independently.

Receipt creation and verification do not require cloud custody.

---

## Security Goals

SYNC is designed to provide:

- Content integrity
- Receipt authenticity
- Tamper detection
- Device-bound authorization
- Independent verification
- Portable evidence

SYNC preserves authorization evidence. It does not perform execution-time enforcement.

---

## Local-First Architecture

Receipts are created entirely on the user's device.

Evidence remains under user control by default.

Receipt exports can be shared directly between parties without requiring a backend service.

Supported receipts can be verified locally using OpenVerifier.

---

## Cryptographic Model

SYNC receipts bind together:

- Human intent
- Evidence metadata
- Authorization event
- Receipt identity
- Timestamp
- Receipt chain metadata

Verification reconstructs the canonical signed payload before signature validation.

Any modification to protected receipt content invalidates verification.

---

## Trust Boundaries

SYNC does not prove:

- Organizational authority
- Identity proofing
- Regulatory compliance
- Legal validity
- Execution of an external action

SYNC proves that a portable receipt was created, authorized, and cryptographically preserved according to the receipt specification.

Higher-level trust decisions remain the responsibility of the relying party.

---

## Responsible Disclosure

Security reports may be submitted privately to:

louclybournjr@gmail.com