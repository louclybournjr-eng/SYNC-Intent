# Architecture

## Overview

SYNC is a local-first reference implementation for portable human authorization.

Its purpose is to preserve what a human reviewed before authorizing an important decision or AI-assisted action.

The architecture separates receipt creation from receipt verification.

```
Human Intent
      │
      ▼
Evidence Selection
      │
      ▼
Device Authorization
(Face ID / Touch ID)
      │
      ▼
Receipt Generation
      │
      ▼
Portable Export
      │
      ▼
Independent Verification
```

---

## Core Principles

- Local-first
- Portable
- Cryptographically verifiable
- Platform independent
- Backend optional

---

## Receipt Components

Every receipt contains:

- Intent
- Evidence metadata
- Authorization
- Time
- Cryptographic proof

Optional metadata may include receipt chain information and policy context.

---

## Verification

Verification is intentionally independent from receipt creation.

A verifier should not require:

- User accounts
- Cloud services
- Vendor infrastructure
- Application availability

This allows receipts to remain portable across organizations, jurisdictions, and time.

---

## Design Philosophy

SYNC preserves what a human reviewed.

Verification determines whether that preserved record has remained cryptographically intact.