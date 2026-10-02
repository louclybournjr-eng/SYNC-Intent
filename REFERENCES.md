# SYNC Public References

This document identifies the public evidence surfaces relevant to SYNC's portable human-authority architecture, independent verification model, and interoperability work.

The purpose is to make the evidence trail inspectable across independently maintained systems without collapsing their separate implementations, ownership, or trust boundaries.

---

## SYNC Intent

**Public repository**

https://github.com/louclybournjr-eng/SYNC-Intent

SYNC provides the portable human-authority layer.

The public repository documents:

- human intent
- reviewed evidence
- decision state
- exact-action binding
- device-mediated authorization
- portable receipt structure
- cryptographic proof
- independent verification boundaries
- interoperability boundaries
- attribution between independently produced claims

SYNC establishes evidence of what a human authorized.

A valid SYNC human-authorization artifact does not by itself establish machine admission, execution, settlement, provider outcome, legal validity, or regulatory compliance.

---

## Portable Human Authority

SYNC's core model is:

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

Exact action and decision state remain distinct.

Exact action asks:

> Is this the same consequential action?

Decision state asks:

> Are the material conditions relied upon by the human still the conditions under which that authority is being used?

Preserving both allows human authority to remain specific without treating an unchanged action identifier as proof that the material basis of the decision also remained unchanged.

---

## OpenVerifier

**Public verification surface**

https://openverifier.org

OpenVerifier provides local-first verification for supported artifacts.

Verification is designed to occur without requiring:

- a SYNC account
- evidence upload
- backend custody
- access to the originating iOS application
- privileged access to the human-authority system
- privileged access to an external execution system

OpenVerifier preserves distinctions between independently supported claims, including:

- content integrity
- signer recognition
- human authorization
- evidence binding
- decision-state binding
- exact-action identity
- machine-side records, when present
- provider or external evidence, when present
- outcome evidence, when present
- residual indeterminacy

OpenVerifier does not perform the consequential action it verifies.

Verification of one layer does not automatically establish another.

---

## Production SYNC Artifact

**Public Receipt ID**

`SYNC-6A27C41D696E`

**Internal Receipt ID**

`82F6AB81-EE0B-43D0-A13C-6A27C41D696E`

**Receipt type**

`human_authorization_origin_receipt`

The production artifact was created by SYNC and subsequently used as a public interoperability fixture.

The receipt preserves human-authorization evidence and associated cryptographic material.

It is not itself a machine-admission, execution, settlement, or outcome record.

---

## Independent Machine-Side Interoperability

**EMILIA Protocol public repository**

https://github.com/emiliaprotocol/emilia-protocol

The independently maintained repository contains machine-side interoperability material associated with the production SYNC receipt.

The interoperability work preserves the distinction between the SYNC human-authority artifact and independently produced machine-side admission and consequence-control records.

### Interoperability Profile

**Path**

`docs/EP-SYNC-INTEROP.md`

**Public source**

https://github.com/emiliaprotocol/emilia-protocol/blob/main/docs/EP-SYNC-INTEROP.md

The interoperability profile documents the boundary between the exported SYNC human-authorization presentation and independent machine-side admission semantics.

It explicitly preserves the distinction between presentation evidence, authorization, chain continuity, machine admission, and physical or external outcome.

---

### Runnable Independent Fixture

**Path**

`examples/scitt/sync-emilia-fixture.mjs`

**Public source**

https://github.com/emiliaprotocol/emilia-protocol/blob/main/examples/scitt/sync-emilia-fixture.mjs

The runnable fixture independently reconstructs the SYNC production signing profile.

The reproduced profile includes:

- Swift `JSONEncoder` semantics
- sorted keys
- `withoutEscapingSlashes`
- UTF-8
- SHA-256
- ES256
- P-256
- ANSI X9.62 DER signature encoding

The independent fixture does not silently convert an OpenVerifier result into its own verification result.

It reconstructs and evaluates the production SYNC signing profile independently.

---

### Public Conformance Vectors

**Path**

`examples/scitt/fixtures/sync-emilia-vectors.v1.json`

**Public source**

https://github.com/emiliaprotocol/emilia-protocol/blob/main/examples/scitt/fixtures/sync-emilia-vectors.v1.json

The public vector set defines four principal cases:

| Vector | Expected Result |
|---|---|
| Production receipt | PASS |
| Visible-content mutation | REFUSE |
| Changed / forged public key | REFUSE |
| Missing or insufficient chain context | INDETERMINATE |

The distinction between `PASS`, `REFUSE`, and `INDETERMINATE` is intentional.

Missing evidence is not silently converted into either success or failure when the available evidence cannot support that conclusion.

---

### Mirrored Production Fixture

**Path**

`examples/scitt/fixtures/sync-receipt-SYNC-6A27C41D696E.vc.json`

**Public source**

https://github.com/emiliaprotocol/emilia-protocol/blob/main/examples/scitt/fixtures/sync-receipt-SYNC-6A27C41D696E.vc.json

This is the production SYNC receipt used by the independent interoperability harness.

The same receipt identifier can therefore be inspected from both sides of the interoperability boundary.

---

## Independent Verification Results

The public interoperability work demonstrates the following behavior.

### Production Receipt

The protected signing payload can be independently reconstructed.

The disclosed SHA-256 digest and DER-encoded ES256 signature agree with the independently reconstructed payload and disclosed P-256 public key.

**Result: PASS**

### Visible-Content Mutation

Material human-intent content is changed while the original cryptographic proof remains unchanged.

The reconstructed payload no longer agrees with the protected signing evidence.

**Result: REFUSE**

### Changed / Forged Key

The disclosed public key is replaced while the original signature remains unchanged.

The original proof does not verify under the substituted key.

**Result: REFUSE**

### Missing Chain Context

The exported receipt contains chain metadata and a previous-receipt hash, but the neighboring record or independently trusted checkpoint required to establish complete continuity is not supplied with the artifact.

Complete chain continuity is therefore not asserted.

**Result: INDETERMINATE**

---

## Public Evidence Relationship

The public evidence surfaces can be understood as:

```text
SYNC
Human-Authority Artifact
        ↓
Production Receipt
        ↓
Independent Machine-Side Repository
Payload Reconstruction + Hostile Vectors
        ↓
Machine-Side Admission Boundary
        ↓
OpenVerifier
Independent Human-Readable Verification Surface
```

These systems remain independently maintained.

The existence of interoperability does not merge their implementations or trust models.

---

## Attribution

Composition does not transfer ownership of assertions.

Human-authorization evidence remains attributable to the human-authority system that produced it.

Machine-admission and consequence-control records remain attributable to the machine-side system that produced them.

Provider evidence remains attributable to the relevant provider or external evidence source.

Outcome evidence remains attributable to the source capable of establishing the outcome.

A verifier may present those records together without claiming that one system produced another system's facts.

---

## Claim Separation

The public evidence should be interpreted according to the following boundaries:

```text
Content Integrity ≠ Signer Recognition

Signer Recognition ≠ Human Authorization

Human Authorization ≠ Machine Admission

Machine Admission ≠ Execution

Execution ≠ Outcome

Outcome ≠ Settlement

Cryptographic Integrity ≠ Legal Determination

Policy Context ≠ Compliance Determination
```

Each claim requires evidence appropriate to that claim.

Successful verification at one layer must not silently promote another layer to verified status.

---

## Human Authority and Machine Consequence

SYNC and independent machine-side consequence systems solve different problems.

SYNC preserves portable evidence of:

- what the human intended
- what evidence was reviewed
- what decision state supported the decision
- what exact action was authorized
- when authorization occurred
- what device-mediated authorization ceremony sealed the artifact

Independent machine-side systems determine whether authority and evidence are sufficient to admit a consequential action at their own boundary.

Native providers perform domain-specific execution.

Provider and outcome evidence establish what occurred according to their respective evidence sources.

Neither side replaces the other.

---

## Decision-State Continuity

Exact-action continuity alone does not establish decision-state continuity.

A consequential action may remain identical while material conditions change.

Examples may include:

- reference price
- market quote
- collateral valuation
- account state
- policy state
- exchange rate
- block height
- risk input
- external evidence version

SYNC preserves the state relied upon by the human as independently meaningful evidence.

A downstream system may independently determine whether required state remains admissible when consequence is attempted.

This preserves the distinction between:

> the same action

and:

> the same decision.

---

## Verification Philosophy

A consequential system should ultimately allow relying parties to answer independently:

> What did the human intend to authorize?

> What evidence did the human review?

> What decision state gave that authorization its meaning?

> What exact action was authorized?

> What did the machine independently admit?

> Was the relevant authority consumed correctly?

> What consequence actually occurred?

> Which system produced each assertion?

> What can the available evidence establish?

> What remains unresolved?

The purpose of the public evidence trail is to make those questions independently inspectable.

---

## Boundary Summary

```text
Portable Human Authority
        ↓
Exact Action + Decision State
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

SYNC owns and establishes its human-authority evidence.

Independent machine-side systems own and establish their machine-side records.

Native providers own and establish their domain-specific facts.

Independent verification determines what the available artifacts actually support.

**Portable Human Authority.**