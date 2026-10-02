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

## Independent Interoperability

A production SYNC human-authorization receipt is used as a public interoperability fixture by a separately maintained machine-side implementation.

**Public Receipt ID:** `SYNC-6A27C41D696E`

The independent implementation reconstructs the SYNC production signing profile and evaluates the production artifact without treating SYNC, OpenVerifier, or the originating application as a trusted machine-side verifier.

The public interoperability work includes:

- independent reconstruction of the protected signing payload
- SHA-256 digest reproduction
- ES256 / P-256 signature verification
- visible-content mutation testing
- changed / forged public-key testing
- incomplete chain-context handling
- independent machine-side admission semantics
- explicit preservation of human-authority and machine-consequence trust boundaries

The published vectors produce:

| Vector | Result |
|---|---|
| Production SYNC receipt | **PASS** |
| Visible-content mutation | **REFUSE** |
| Changed / forged public key | **REFUSE** |
| Missing required chain context | **INDETERMINATE** |

The human-authority implementation and machine-side implementation remain separately maintained.

Neither implementation absorbs the other’s trust model.

Neither system acquires ownership of the other system’s assertions merely because their artifacts compose successfully.

See:

- [`INTEROPERABILITY.md`](INTEROPERABILITY.md)
- [`REFERENCES.md`](REFERENCES.md)
- [`examples/`](examples/)
- [`reference-verifier/`](reference-verifier/)

## Runnable Reference Verifier

This repository includes a minimal, dependency-free JavaScript reference verifier:

`reference-verifier/verify.mjs`

The verifier operates against the checked-in production SYNC receipt:

`examples/sync-receipt-SYNC-6A27C41D696E.vc.json`

It independently exercises the current public production verification profile using Node.js built-in cryptography.

The verifier evaluates:

```text
Production Receipt
        ↓
Protected Payload Reconstruction
        ↓
SHA-256 Digest Reproduction
        ↓
ES256 / P-256 Signature Verification
        ↓
Hostile Mutation Testing
        ↓
Explicit Verification Result
```

The checked-in vectors distinguish:

```text
PASS
REFUSE
INDETERMINATE
```

rather than collapsing incomplete evidence into a generic successful result.

### Run locally

From the repository root:

```bash
node reference-verifier/verify.mjs
```

No third-party runtime dependencies are required.

The reference verifier establishes only the cryptographic and structural properties supported by the artifact.

It does not establish machine admission, execution, settlement, provider outcome, legal validity, or regulatory compliance.

## Public Production Artifact

The repository contains the production human-authorization artifact used by the public interoperability work:

[`examples/sync-receipt-SYNC-6A27C41D696E.vc.json`](examples/sync-receipt-SYNC-6A27C41D696E.vc.json)

Its associated public verification record is available at:

[`examples/verification-result.md`](examples/verification-result.md)

The same production receipt is independently mirrored and exercised by the separately maintained machine-side interoperability implementation identified in [`REFERENCES.md`](REFERENCES.md).

This creates a public evidence trail across independently maintained implementations rather than requiring a relying party to accept a single repository’s description of the result.

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
Independent Machine Admission
      ↓
Consequence Control
      ↓
Native Execution
      ↓
Outcome Evidence
      ↓
Independent Verification
```

A successful result at one layer does not automatically establish another.

```text
Content Integrity ≠ Signer Recognition

Signer Recognition ≠ Human Authorization

Human Authorization ≠ Machine Admission

Machine Admission ≠ Execution

Execution ≠ Outcome

Outcome ≠ Settlement
```

## Exact Action and Decision State

SYNC treats exact-action identity and decision-state continuity as separate properties.

Exact action asks:

> **Is this still the same consequential action?**

Decision state asks:

> **Are the material conditions relied upon by the human still the conditions under which that authority is being used?**

A consequential action may remain identical while material decision state changes.

Therefore:

```text
Same Action ≠ Same Decision
```

SYNC preserves the human-side evidence required to keep those concepts distinct.

A downstream machine-side system may independently determine whether required state remains admissible when consequence is attempted.

## Design Principle

A consequential system should be able to answer independently:

- What did the human intend to authorize?
- What evidence did the human review?
- What decision state gave that authorization its meaning?
- What exact action was authorized?
- What did the machine independently admit?
- What consequence actually occurred?
- Which system produced each assertion?
- What can the available evidence establish?
- What remains indeterminate?

SYNC provides the portable human-authority artifact for that chain.

## Repository Scope

This repository publicly contains:

- the SYNC human-authorization architecture
- receipt specification
- security and trust boundaries
- exact-action and decision-state model
- production human-authorization artifact
- public verification results
- runnable reference verification code
- interoperability documentation
- independent implementation references
- research materials

The production SYNC Intent iOS application is distributed separately through the Apple App Store.

The complete production iOS sealing implementation is not represented here as a full public application source release.

The public reference verifier exists so that the cryptographic properties of the checked-in production artifact can be reproduced without requiring access to the production application.

SYNC is designed so that portable authorization evidence can remain useful independently of the originating application, vendor infrastructure, cloud services, or organizational boundary.

## Verification

**OpenVerifier.org**

Local-first verification.

**No account. No upload. No backend custody.**

## Evidence Trail

```text
Portable Human Authority
        ↓
Production SYNC Receipt
        ↓
Runnable Local Reference Verification
        ↓
Independent External Reproduction
        ↓
Hostile Conformance Vectors
        ↓
Independent Machine-Side Admission Boundary
        ↓
Attribution-Preserving Verification
```

The public evidence is intentionally distributed across independently maintained surfaces.

That separation is part of the architecture, not a missing ownership claim.

**Portable Human Authority.**

**What you meant. Sent.**