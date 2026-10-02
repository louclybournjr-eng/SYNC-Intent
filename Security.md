# SYNC Security Model

## Overview

SYNC is a local-first reference architecture for portable human authorization.

The security model separates human authorization from machine admission, execution, provider outcome, and later relying-party decisions.

SYNC is designed so that verification does not require cloud custody or trust in the originating application.

## Security Goals

SYNC is designed to provide:

- content integrity
- tamper detection
- receipt authenticity
- device-mediated authorization evidence
- evidence-manifest integrity
- decision-state binding
- exact-action binding
- independent verification
- portable evidence
- attribution preservation

SYNC preserves human-authorization evidence.

It does not perform execution-time enforcement.

## Human-Authorization Model

A protected receipt may bind:

- human intent
- evidence metadata
- decision-state references
- exact-action identity
- authorization event
- receipt identity
- timestamp
- chain metadata
- policy context
- cryptographic proof

Verification reconstructs the protected receipt material before cryptographic validation.

Modification of protected content must invalidate verification.

## Decision State and Exact Action

Exact-action identity answers:

**What exact action was authorized?**

Decision-state evidence answers:

**Under what material state was that authorization made?**

These questions are intentionally separate.

The same action identity may exist under a changed decision state.

A downstream consequence-control system may independently determine whether required state remains admissible at execution time.

## Independent Verification

Supported receipts can be verified locally using OpenVerifier.

Verification does not require:

- a SYNC account
- evidence upload
- access to a SYNC backend
- access to the originating iOS application
- privileged access to a machine-side execution system

## Attribution

Verification should preserve the origin of each assertion.

A human-authorization claim should remain attributable to the human-authority artifact.

A machine-admission claim should remain attributable to the machine-side system that produced it.

Provider and outcome evidence should remain attributable to their respective evidence sources.

Verification of one claim must not silently establish another.

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

Higher-level trust and acceptance decisions remain the responsibility of the relying party.

## Failure Semantics

Where required evidence cannot be established, verification should refuse unsupported conclusions or report indeterminacy rather than manufacture certainty.

A single generic “verified” result should not be used to imply claims beyond the available evidence.

## Local-First Architecture

Receipts are created on the user’s device.

Evidence remains under user control by default.

Receipt exports may be shared directly between parties without requiring backend custody.

## Responsible Disclosure

Security reports may be submitted privately to:

louclybournjr@gmail.com