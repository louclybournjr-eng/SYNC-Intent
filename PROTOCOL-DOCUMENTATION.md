# SYNC Protocol Documentation

## What You Meant. Sent.

**Portable, independently verifiable human authority for exact consequential actions.**

SYNC is a local-first human-authorization architecture designed to preserve what a person intended to authorize, the evidence and decision state relied upon, the exact action being authorized, and the device-based authorization ceremony that sealed the resulting receipt.

The resulting artifact is portable across systems and independently verifiable outside the originating application.

**No account. No upload. No backend custody required.**

---

## Purpose

Modern systems can authenticate users, issue credentials, evaluate policy, invoke tools, execute transactions, and record logs.

Those functions do not necessarily answer the human-authority question:

> What exactly did this person intend to authorize, based on what evidence and decision state, and what portable proof exists that the authorization occurred?

SYNC exists to preserve that answer.

---

## Core Model

```text
Human Intent
      ↓
Evidence
      ↓
Decision State
      ↓
Exact Action
      ↓
Device Authorization
      ↓
Portable Receipt
      ↓
Independent Verification
```

SYNC establishes the human-authority side of a consequential action.

It does not by itself establish machine admission, external execution, settlement, or outcome.

Those remain separate assertions requiring their own evidence.

---

## Design Goals

### Portable Human Authority

Authorization evidence should survive application and organizational boundaries.

The receipt is intended to remain useful independently of the software that originally created it.

### Local-First Custody

Receipt creation should not require centralized cloud infrastructure.

Evidence remains under user control unless intentionally shared.

### Independent Verification

Verification should not require trust in the issuing application.

A relying party should be able to evaluate supported artifacts independently.

### Exact-Action Binding

Human authority should be capable of binding to the exact consequential action being authorized.

Exact-action identity remains separate from execution and outcome.

### Decision-State Binding

The exact same action may exist under materially different decision conditions.

SYNC therefore treats the evidence and decision state relied upon by the human as independently meaningful.

Exact-action identity alone does not imply that an authorization remains valid after material state changes.

### Attribution Preservation

Different systems may contribute different facts to a complete consequential-action chain.

Verification should preserve who asserted what rather than collapsing distinct claims into one generic result.

### Human Readability

The evidence should remain understandable by people as well as machines.

Cryptographic verification should support human review rather than replace it.

---

## Human-Authority Artifact

A SYNC receipt may preserve:

- human intent
- evidence manifest
- decision-state references
- exact-action identity
- device authorization
- authorization time
- receipt identity
- policy context
- chain metadata
- cryptographic proof

The receipt is designed to establish what the human authorized and the context under which that authorization was made.

---

## Decision State

Decision state and exact-action identity answer different questions.

Exact action asks:

> What exact action was authorized?

Decision state asks:

> Under what material conditions was that authorization made?

A downstream machine-side system may independently determine whether required state remains admissible when consequence is attempted.

SYNC preserves the human-side evidence needed to make that comparison possible.

---

## Verification

Supported SYNC artifacts may be checked through OpenVerifier.org.

OpenVerifier is a local-first public verification surface.

Verification does not require:

- a SYNC account
- evidence upload
- backend custody
- privileged access to the originating application
- privileged access to an execution system

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

A verified human-authority artifact does not automatically establish machine admission, execution, settlement, or outcome.

---

## Interoperability

SYNC is intentionally designed to compose with independent machine-side authorization and consequence-control systems.

```text
Human Authority
      ↓
Portable Proof
      ↓
Independent Machine Admission
      ↓
Consequence Control
      ↓
Native System / Provider
      ↓
Outcome Evidence
      ↓
Independent Verification
```

The human-authority system does not absorb the machine-consequence system.

The machine-consequence system does not absorb the human-authority system.

The native provider remains responsible for its own domain facts.

Each assertion remains independently attributable.

---

## Trust Boundaries

SYNC does not by itself prove:

- organizational authority
- identity proofing
- regulatory compliance
- legal validity
- machine admission
- external execution
- settlement
- provider outcome

Those conclusions require independent evidence and relying-party evaluation.

---

## Repository Scope

This repository documents:

- the SYNC human-authorization architecture
- receipt structure
- verification boundaries
- decision-state and exact-action concepts
- interoperability work
- public examples
- security model
- research materials

The production SYNC Intent iOS application is distributed separately through the Apple App Store.

---

## Philosophy

Technology increasingly determines what happens.

SYNC preserves evidence of what a person meant to authorize before consequence.

Portable.

Local-first.

Independently verifiable.

**What you meant. Sent.**