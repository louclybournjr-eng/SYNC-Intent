# SYNC Receipt Specification

Version: 1.1

## Overview

A SYNC receipt is a portable, cryptographically protected record describing a human authorization event.

The format is designed for independent verification, long-term portability, exact-action binding, and preservation of the decision context relied upon by the human.

## Receipt Structure

A SYNC receipt may contain:

- Receipt ID
- Creation timestamp
- Schema version
- Human intent
- Evidence manifest
- Decision-state references
- Exact-action identity
- Authorization metadata
- Policy context
- Cryptographic proof
- Receipt chain metadata

## Intent

Intent records what the human meant to authorize.

Intent is protected as part of the receipt payload.

## Evidence

Evidence is represented through metadata, cryptographic hashes, and references.

Evidence files remain under user control unless intentionally shared separately.

The receipt preserves evidence identity without requiring cloud custody of the underlying evidence.

## Decision State

Decision state represents material state relied upon when the authorization was made.

Decision-state evidence is distinct from exact-action identity.

The same exact action may appear under materially different decision states.

A receipt may therefore bind decision-state references independently from the exact action.

A downstream system may independently determine whether required decision state remains current or admissible before consequence.

## Exact Action

Exact-action identity identifies the specific consequential action being authorized.

Where an external canonical action identifier or action digest is present, the receipt may bind that identifier or digest as part of the protected authorization evidence.

Exact-action identity does not by itself establish execution, admission, settlement, or outcome.

## Authorization

Authorization records the device-mediated authorization ceremony associated with sealing the receipt.

Authorization metadata may include:

- device authentication method
- authorization timestamp
- signing metadata
- policy context
- user-presence or device-authorization claims

## Proof

Proof cryptographically binds the protected receipt contents into a single verifiable object.

Verification reconstructs the protected payload before signature validation.

Protected content modification must invalidate verification.

## Verification Requirements

A conforming verifier should:

- reconstruct the protected payload
- recompute required cryptographic digests
- validate applicable digital signatures
- evaluate receipt structure
- evaluate evidence-manifest integrity
- evaluate exact-action bindings when present
- evaluate decision-state bindings when present
- preserve attribution between independent evidence sources
- distinguish unsupported or indeterminate conclusions from established ones

Verification must not infer machine admission, execution, settlement, or outcome solely from a valid human-authorization receipt.

## Attribution

A verifier should preserve the source of each assertion.

Human-authorization evidence, machine-side records, provider evidence, and outcome evidence remain separately attributable.

Verification of one layer must not automatically promote another layer to verified status.

## Portability

Receipts are intended to remain independently useful regardless of:

- vendor infrastructure
- cloud services
- originating application availability
- organizational boundaries
- jurisdiction
- later machine-side implementation

## Boundary

SYNC establishes portable human-authorization evidence.

SYNC does not by itself establish:

- organizational authority
- machine admission
- execution
- settlement
- provider outcome
- legal validity
- regulatory compliance

Those conclusions require their own evidence and relying-party evaluation.

## Independent Verification

Supported receipts may be checked through OpenVerifier.org.

Verification is local-first and does not require an account, upload, or SYNC backend.