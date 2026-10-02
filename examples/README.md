# Examples

This directory contains public examples and documentation for the SYNC receipt model.

Examples are intended to demonstrate the structure, verification boundaries, interoperability model, and refusal semantics of portable human-authorization evidence.

Only files actually present in this directory should be treated as published examples.

## What the Examples Demonstrate

SYNC examples may demonstrate:

- human intent
- evidence manifests
- decision-state references
- exact-action binding
- device authorization metadata
- canonical receipt payloads
- cryptographic verification
- tamper refusal
- signer or key substitution refusal
- chain-context handling
- interoperability with independent machine-side systems
- attribution-preserving verification
- indeterminate results when evidence is incomplete

## Verification Model

A verifier evaluates the evidence actually present in an artifact.

Verification should distinguish between:

- content integrity
- signer recognition
- human authorization
- evidence integrity
- decision-state binding
- exact-action identity
- machine-side evidence, when present
- provider or external evidence, when present
- outcome evidence, when present
- residual indeterminacy

A valid human-authorization receipt does not by itself prove that an external action was admitted, executed, settled, or completed.

## Interoperability

SYNC receipts are designed to compose with external authorization and consequence-control systems while preserving independent trust boundaries.

```text
Human Intent
      ↓
Evidence
      ↓
Decision State
      ↓
Exact Action
      ↓
Human Authorization
      ↓
Portable Receipt
      ↓
Independent Machine System
      ↓
Consequence / Outcome Evidence
      ↓
Independent Verification
```

Participating systems remain separately attributable.

One system should not claim another system’s role merely because their artifacts compose successfully.

## Local-First Verification

Supported SYNC artifacts may be checked through OpenVerifier.org.

Verification is designed to occur without:

- a user account
- evidence upload
- cloud custody
- privileged access to the originating system

## Repository Scope

This directory supports technical review, interoperability testing, research, and documentation of the SYNC human-authorization model.

The production SYNC Intent iOS application is distributed separately.

**What you meant. Sent.**