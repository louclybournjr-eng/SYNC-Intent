# SYNC Intent

**Portable, independently verifiable human authority for exact consequential actions.**

SYNC Intent creates sealed authorization receipts that preserve:

- what a person intended to authorize
- the exact action being authorized
- the evidence the person reviewed
- the decision state relied upon
- when the decision was made
- the device-based authorization ceremony that sealed it

Receipts are sealed locally, portable across systems, and independently verifiable.

**No account. No upload. No backend custody required.**

## Human Authority

SYNC establishes the human-authority side of a consequential action.

```text
Intent
  ↓
Evidence
  ↓
Decision State
  ↓
Exact Action
  ↓
Human Authorization
  ↓
Portable Proof
```

The receipt preserves what the human authorized and the material context under which that authorization was made.

Exact-action identity alone does not imply that the decision remains valid if material decision state changes.

## Independent Verification

SYNC receipts can be independently checked through **OpenVerifier.org**.

OpenVerifier is a local-first verification surface designed to preserve attribution rather than collapse distinct claims into a single “verified” result.

It can distinguish between:

- content integrity
- signer recognition
- human authorization
- evidence and decision-state binding
- exact-action identity
- machine-side records, when present
- external or provider evidence, when present
- outcome evidence, when present
- residual indeterminacy

Each assertion remains attributable to the system or evidence source that produced it.

## Boundary

SYNC proves human authorization.

It does **not** by itself claim that an action was admitted, executed, settled, or completed.

Those are separate machine-side and outcome assertions.

This separation allows a SYNC authorization artifact to compose with independent consequence-control systems without either system claiming the other’s role.

```text
Human Authority
      ↓
Portable Proof
      ↓
Machine Admission
      ↓
Consequence
      ↓
Outcome Evidence
      ↓
Independent Verification
```

## Design Principle

A consequential system should be able to answer independently:

- What did the human authorize?
- What evidence and decision state did that authorization depend on?
- What exact action was authorized?
- What did the machine admit and execute?
- What actually happened?
- What can the available evidence establish — and what remains indeterminate?

SYNC provides the portable human-authority artifact for that chain.

## Repository Scope

This repository documents the SYNC human-authorization architecture, receipt model, verification boundaries, interoperability work, examples, and public research materials.

The production SYNC Intent iOS application is distributed separately through the Apple App Store.

SYNC is designed so that portable authorization evidence can remain useful independently of the originating application, vendor infrastructure, cloud services, or organizational boundary.

## Verification

**OpenVerifier.org**

Local-first verification.

**No account. No upload. No backend custody.**

**What you meant. Sent.**