# SYNC Interoperability

## Human Authority Meets Machine Consequence

SYNC provides portable human-authorization evidence.

Independent machine-side systems may consume that evidence when deciding whether an exact consequential action may proceed.

The systems remain separately owned, separately implemented, independently attributable, and independently verifiable.

Neither replaces the other.

The complete authorization-to-consequence property exists through composition.

---

## Composition

```text
SYNC
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
Portable Human-Authority Receipt
      ↓
────────────────────────────────
      ↓
Independent Machine System
      ↓
Admission
      ↓
Current-State Evaluation
      ↓
Single-Use Consequence Control
      ↓
Native Provider / Execution System
      ↓
Outcome Evidence
      ↓
────────────────────────────────
      ↓
OpenVerifier
Independent Verification
```

SYNC establishes what the human authorized.

The independent machine-side system determines whether that authority is sufficient for the machine action presented at the consequence boundary.

The native provider or execution system remains responsible for its own domain facts.

OpenVerifier can present supported evidence from these independent layers without pretending that one system produced another system's assertions.

---

## Exact Action

Human authorization may bind to an exact external action identity or digest.

The purpose is to prevent authority for one material action from silently being reused for another.

Exact-action identity answers:

> Is this still the same action?

It does not answer:

> Are the material conditions under which the human authorized it still the same?

That is a separate decision-state question.

---

## Decision-State Continuity

A consequential action may remain identical while the state material to the human decision changes.

Examples may include:

- reference price
- market quote
- collateral valuation
- account state
- policy state
- block height
- exchange rate
- risk input
- external evidence version

SYNC treats the decision state relied upon by the human as independently meaningful evidence.

A machine-side system may independently evaluate whether required state remains admissible before consequence.

If material state changes, an earlier authorization must not silently acquire a new meaning merely because the action identity remained unchanged.

---

## Independent Trust Boundaries

The composed architecture intentionally separates:

- human authorization
- evidence
- decision state
- exact-action identity
- machine admission
- execution authority
- provider entry
- execution
- outcome
- settlement
- verification

A successful result in one layer does not automatically establish another.

```text
VERIFIED ≠ AUTHORIZED
AUTHORIZED ≠ ADMITTED
ADMITTED ≠ EXECUTED
EXECUTED ≠ SETTLED
```

Where required evidence is incomplete or an outcome cannot yet be established, the correct result may be indeterminate rather than successful or failed.

---

## Runnable SYNC × EMILIA Interoperability

Public interoperability work connects production SYNC human-authorization evidence to independent exact-action admission and consequence-control semantics.

The interoperability work demonstrates:

- a production SYNC human-authorization receipt
- independent reconstruction of the SYNC signing profile
- reconstruction of protected signing material
- SHA-256 digest verification
- ES256 / P-256 signature verification
- signer-key binding
- visible-content mutation refusal
- changed-key refusal
- preservation of indeterminacy when required chain context is incomplete
- composition with independent exact-action machine admission

The systems remain independently implemented and independently verifiable.

The interoperability layer does not merge their trust models.

SYNC proves what the human authorized.

The machine-side system governs what the machine may do with that authority.

---

## Attribution

Composition does not transfer ownership of assertions.

Human-authority evidence remains attributable to the human-authority system.

Machine admission and consequence-control records remain attributable to the machine-side system that produced them.

Provider evidence remains attributable to the relevant provider or external evidence source.

Outcome claims remain limited to what the available evidence actually establishes.

OpenVerifier preserves those distinctions rather than collapsing the complete chain into a single generic verification result.

---

## OpenVerifier

OpenVerifier provides a public, local-first verification surface for supported artifacts.

A relying party should be able to inspect the available evidence without needing:

- a SYNC account
- evidence upload
- backend custody
- privileged access to the human-authority system
- privileged access to the machine-side system
- access to a vendor-controlled verification dashboard

OpenVerifier is designed to show what each artifact establishes, who produced the relevant assertion, and what remains indeterminate.

---

## Native Systems

The machine-consequence layer may connect to native infrastructure through its own provider and system adapters.

That means the complete architecture does not require enterprises to abandon the systems they already use.

Existing infrastructure can remain existing infrastructure.

Examples of native environments may include:

- cloud infrastructure
- source-control systems
- payment systems
- databases
- orchestration platforms
- enterprise workflow systems
- agent runtimes
- execution providers
- physical or software actuators

SYNC does not need to become those systems.

Its role is to supply portable human authority capable of composing with consequence-control infrastructure that reaches them.

---

## Why This Matters

A consequential system should be able to reconstruct the chain:

```text
What did the human mean?
      ↓
What evidence did they rely upon?
      ↓
What decision state supported the authorization?
      ↓
What exact action did they authorize?
      ↓
Did the machine receive and admit that same action?
      ↓
Did the relevant state remain admissible?
      ↓
Was authority consumed correctly?
      ↓
What consequence occurred?
      ↓
What does independent evidence actually establish?
```

The goal is not to create one vendor that claims every fact.

The goal is to allow independently controlled systems to compose without losing:

- attribution
- authority boundaries
- state continuity
- exact-action identity
- uncertainty
- independent verification

---

## Composition Without Substitution

SYNC and an independent machine-consequence system solve different problems.

SYNC cannot honestly replace machine-side consequence control.

A machine-side consequence-control system cannot honestly replace the human authorization ceremony and portable human-authority evidence supplied by SYNC.

Their interoperability is therefore complementary rather than substitutive.

The complete chain exists because both roles remain distinct and interoperable.

---

## Summary

SYNC provides the human-authority artifact.

Independent machine-side infrastructure governs consequence.

Native providers perform domain-specific execution.

OpenVerifier allows relying parties to independently understand what the resulting evidence establishes.

```text
Human Authority
      ↓
Decision-State + Exact-Action Continuity
      ↓
Machine Consequence
      ↓
Outcome Evidence
      ↓
Independent Verification
```

**Human Authority → Machine Consequence → Independent Verification**