# SYNC Architecture

## Overview

SYNC is a local-first reference architecture for portable, independently verifiable human authority.

Its purpose is to preserve what a human intended to authorize, the evidence and decision state relied upon, the exact action being authorized, and the device-based authorization ceremony that sealed the resulting receipt.

Receipt creation and receipt verification remain intentionally separate.

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
Receipt Generation
      ↓
Portable Export
      ↓
Independent Verification
```

## Core Principles

- Local-first
- Portable
- Independently verifiable
- Exact-action bound
- Decision-state aware
- Attribution preserving
- Backend optional
- Platform independent at the receipt boundary

## Human-Authority Boundary

SYNC establishes evidence of human authorization.

A SYNC receipt may preserve:

- human intent
- reviewed evidence
- decision state
- exact-action identity
- device authorization
- time
- receipt identity
- cryptographic proof
- chain metadata
- policy context

The receipt does not by itself establish that an external action was admitted, executed, settled, or completed.

Those remain separate machine-side and outcome assertions.

## Decision State

Exact-action identity and decision-state continuity are separate questions.

Two systems may refer to the same exact action while relying on materially different state.

SYNC therefore treats the state relied upon by the human decision as independently meaningful evidence.

A downstream system may independently determine whether that state remains admissible when consequence is attempted.

## Receipt Components

A receipt may contain:

- Intent
- Evidence manifest
- Decision-state references
- Exact-action identity
- Authorization metadata
- Time
- Cryptographic proof
- Receipt chain metadata
- Policy context

## Independent Verification

Verification is intentionally independent from receipt creation.

A verifier should not require:

- a SYNC account
- cloud custody
- access to the originating application
- access to vendor infrastructure
- privileged access to an execution system

OpenVerifier provides a local-first public verification surface for supported SYNC artifacts.

Verification preserves attribution between distinct claim sources rather than collapsing all evidence into a single result.

## Composition

SYNC is designed to compose with independent machine-side systems.

```text
SYNC
Human Authority
      ↓
Portable Proof
      ↓
Independent Machine Admission
      ↓
Consequence Control
      ↓
Provider / External Outcome
      ↓
Independent Verification
```

The human-authority system does not absorb the machine-consequence system.

The machine-consequence system does not absorb the human-authority system.

Each remains independently attributable and independently verifiable according to the evidence it produces.

## Design Philosophy

Portable authority should survive application boundaries.

A relying party should be able to determine:

- what the human authorized
- what evidence and decision state supported that authorization
- what exact action was authorized
- which system asserted each later machine-side fact
- what evidence supports the outcome
- what remains indeterminate

The purpose of SYNC is to preserve the human-authority artifact for that chain.