# Examples

This directory contains example SYNC receipt exports and supporting documentation.

The examples are intended to demonstrate the portable receipt format, verification workflow, trust boundaries, and interoperability model implemented by the SYNC reference implementation.

These examples are provided for documentation, testing, and educational purposes.

---

# Directory

```
examples/

├── README.md
├── basic-receipt.json
├── ai-authorization-receipt.json
├── evidence-manifest.json
├── canonical-payload.json
├── verification.md
├── verification-output.md
├── receipt-anatomy.md
├── tampered-receipt.json
├── interoperability.md
├── export-vc-jwt.md
└── export-vc-json.md
```

---

# Example Contents

## basic-receipt.json

Demonstrates the minimum portable receipt structure.

Includes:

- Receipt identifier
- Schema version
- Intent
- Authorization
- Timestamp
- Cryptographic proof

---

## ai-authorization-receipt.json

Example receipt for an AI-assisted action.

Illustrates how human authorization can be preserved before an AI-assisted workflow proceeds.

---

## evidence-manifest.json

Example evidence manifest describing attached evidence without requiring cloud custody.

Shows:

- Evidence metadata
- SHA-256 hashes
- File information
- Integrity references

---

## canonical-payload.json

Illustrates the canonical receipt payload used during signature generation.

Useful for understanding receipt integrity and verification behavior.

---

## receipt-anatomy.md

Visual explanation of the receipt format.

Describes:

- Intent
- Evidence
- Authorization
- Time
- Proof
- Receipt metadata

---

## verification.md

Walkthrough of the verification process.

Verification performs the following operations:

1. Parse receipt
2. Reconstruct canonical payload
3. Recompute SHA-256 digest
4. Validate digital signature
5. Validate receipt metadata
6. Report verification results

Verification is performed locally.

No upload required.

No backend required.

---

## verification-output.md

Example successful verification report.

Illustrates independent verification results including:

- Content integrity
- Signature validation
- Receipt integrity
- Evidence manifest validation
- Receipt structure validation
- Chain metadata evaluation

---

## tampered-receipt.json

Example of a modified receipt.

Demonstrates that changing protected receipt content invalidates verification.

Provided for testing and educational purposes.

---

## export-vc-jwt.md

Example Verifiable Credential JWT export.

Documents portable export behavior and expected verification workflow.

---

## export-vc-json.md

Example Verifiable Credential JSON export.

Illustrates portable receipt serialization.

---

## interoperability.md

Demonstrates how SYNC receipts may compose with external authorization systems while maintaining independent trust boundaries.

Human review evidence and execution authority remain intentionally separated.

Independent receipt systems may bind to the same underlying action through cryptographic digest relationships while remaining independently verifiable.

---

# Design Principles

The examples are designed to demonstrate the engineering goals of SYNC.

- Portable human authorization
- Local-first custody
- Independent verification
- Cryptographic integrity
- Human-readable evidence
- Interoperability

Each example is intentionally vendor-neutral and suitable for technical evaluation, implementation guidance, and interoperability testing.

---

# Repository Scope

These examples document the behavior of the SYNC reference implementation.

They are intended to assist developers, security reviewers, auditors, researchers, and organizations evaluating portable human-authorization receipts and independent verification workflows.

The production iOS application remains the primary implementation of the SYNC architecture.

---

**What you meant. Sent.**