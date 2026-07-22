# SYNC Receipt Specification

Version: 1.0

## Overview

A SYNC receipt is a portable cryptographically signed record describing a human authorization event.

The format is designed for independent verification and long-term portability.

---

## Receipt Structure

Each receipt contains:

- Receipt ID
- Creation timestamp
- Schema version
- Human intent
- Evidence manifest
- Authorization metadata
- Cryptographic proof
- Receipt chain metadata

---

## Intent

Intent records the action approved by the human.

Intent is included within the signed payload.

---

## Evidence

Evidence is represented through metadata and cryptographic hashes.

Evidence files remain under user control unless shared separately.

---

## Authorization

Authorization records:

- Device authentication
- Authorization timestamp
- Policy context
- Signing metadata

---

## Proof

Proof binds the receipt into a single signed object.

Verification reconstructs the canonical payload before signature validation.

---

## Verification Requirements

A conforming verifier should:

- Reconstruct the canonical payload
- Recompute the SHA-256 digest
- Validate the digital signature
- Verify receipt metadata
- Report verification results independently

Verification should fail whenever protected receipt content has been modified.

---

## Portability

Receipts are intended to remain independently verifiable regardless of:

- Vendor infrastructure
- Cloud services
- Application availability
- Organizational boundaries