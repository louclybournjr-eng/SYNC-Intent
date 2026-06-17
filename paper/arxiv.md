Intent-to-Hardware Binding:
A Receipt Primitive for AI-Assisted Human Decisions
Louis Thomas Clybourn Jr.
Aurifex Inc.
SYNC Runtime Project
Version 1.1 preprint draft | May 18, 2026
Abstract
AI systems produce outputs, recommendations, summaries, plans, classifications, and decisions at
high speed. The missing primitive in consequential AI workflows is not another answer. It is a clean
record showing what a human meant, what evidence was present, what AI-assisted context was relied
upon, and that the human authorized the record at the moment of consequence.
Authentication systems prove access. Digital signatures prove that a key authorized a message or
transaction. AI logs prove system activity. Audit dashboards organize review. None of these objects,
standing alone, create a complete receipt that binds human intent, evidence artifacts, AI-assisted
context, device-level authorization, and receipt integrity into one reviewable record.
This paper defines Intent-to-Hardware Binding: a computer-implemented record ceremony
in which a user states intent, attaches or references evidence, receives AI-assisted context, invokes
device-level user authorization, and obtains a sealed receipt/proof trail. The resulting object is
the device-authorized intent receipt. It is designed to be human-readable at the surface and
machine-verifiable underneath.
SYNC is presented as the reference iOS runtime implementation of this primitive. In its minimal
product loop, the user states intent, attaches evidence, saves the record, authorizes with Face ID, Touch
ID, passcode, or equivalent user-presence confirmation, and receives a receipt with proof metadata.
The result is a reviewable record suitable for legal, medical, financial, enterprise, regulatory, digital
asset, and professional decision contexts.
Keywords: Intent-to-HardwareBinding; device-authorizedintentreceipt; AIgovernance; receiptintegrity;
evidence binding; device authorization; human oversight; auditability; SYNC.
Central claim. AI-assisted human decisions require a new record primitive: a device-authorized
receipt that binds what a human meant, what evidence was present, what AI-assisted context was
relied upon, and when the human authorized the record.
Conceptual phrase. The formal term is Intent-to-Hardware Binding. The phrase “intent
bound to silicon” is used only as conceptual shorthand: human intent bound to a device and
hardware-mediated authorization surface, not merely written into a chat transcript.
Claim boundary. This paper defines a technical record primitive. It does not claim that any
implementation automatically satisfies any statute, regulation, evidence rule, industry standard, or
professional duty. It also does not claim that biometric templates are exported, stored, or disclosed
by SYNC. In the reference implementation, Face ID, Touch ID, passcode, or equivalent device-owner
authentication are treated as system-mediated user-presence/user-authorization events.
Intent -> Evidence -> Device Authorization -> Receipt
Intent + Evidence + Device Authorization + Receipt = Defensible AI-Assisted Decision Record
1
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
1 Introduction: The Missing Record in AI-Assisted Decisions
AI answers are easy to generate but hard to stand behind. A model can summarize a contract, draft a
memo, compare documents, classify risk, describe a medical note, inspect a financial record, or explain a
tokenized asset. But after the answer appears, a harder institutional question remains:
Who meant what, based on which evidence, under what context, at what time, and with what
authorization?
Current AI workflows often fail to prove:
• what the human intended;
• what evidence was present;
• whether the user reviewed the context;
• whether the action was deliberate;
• when the decision record was created;
• whether the record changed afterward.
The missing object is not another answer. The missing object is a receipt.
The companion foundation paper, The Laws of Physics in Computation, frames computation as bounded
execution: geometry, time, declared envelopes, continuity, receipts, replay, evidence boundaries, refusal
semantics, and runtime proof surfaces. It positions SYNC as a receipt-complete iOS runtime where
canonicalization, admissibility checks, evidence binding, refusal semantics, export packets, and replay
belong to the product boundary rather than to future engineering wishes. This paper narrows that
foundation into a product-clear category primitive for AI-assisted human decisions: Intent-to-Hardware
Binding.
2 From Access Authentication to Consequence Authorization
Most authentication systems answer a narrow question: should this user gain access to this account,
application, key, device, credential, or transaction surface? That question is important, but it is not the
same as asking whether a human authorized a consequential record with specific evidence and AI-assisted
context.
Category inversion. Existing systems authenticate access. Intent-to-Hardware Binding authenti-
cates consequence.
The distinction is central. Access says: “this person, device, credential, or key may enter.” Consequence
says: “this human meant this, saw or supplied this evidence, considered this AI-assisted context, and
authorized this record now.”
A user may be correctly authenticated and still lack a defensible record of what they meant to do. A key
may correctly sign a transaction and still fail to prove that the user reviewed the evidence and AI-assisted
context around the action. A chat log may show words and timestamps but still fail to bind intent,
evidence, local authorization, and receipt integrity as a coherent record object.
2 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
Access authentication vs. consequence authorization
Dimension Access Authentication Consequence Authorization
Primary question Object proved Typical surface Failure mode Can this user access the system? Identity, credential possession, de-
vice access, or session validity.
Login, passkey, sessiontoken, wallet
prompt, role-based access control.
Unauthorized access or session mis-
use.
Did this human authorize this con-
sequential record?
Intent, evidence state, AI context,
authorization event, time, and re-
ceipt integrity.
Device-authorized intent receipt
with human-readable and machine-
verifiable layers.
Ambiguous responsibility, missing
evidence trail, unverifiable AI re-
liance, or disputed intent.
3 Definition: Intent-to-Hardware Binding
Intent-to-Hardware Binding is a computer-implemented record ceremony that binds six elements into
a single reviewable object:
1. Human intent - what the user meant to record, verify, approve, review, or decide.
2. Evidence artifacts - documents, files, sources, screenshots, data, contracts, records, hashes, or
references.
3. AI-assisted context - the answer, recommendation, summary, classification, comparison, or analysis
being relied upon.
4. Device-level authorization - Face ID, Touch ID, passcode, hardware-backed secure element flow,
local authentication, or equivalent user-presence/user-authorization confirmation.
5. Receipt metadata - timestamp, record identifier, evidence state, authorization state, proof state,
model/context metadata, and export status.
6. Optional proof anchors - cryptographic digest, trusted timestamp authority, transparency log,
blockchain anchor, server-side audit log, enterprise system of record, or export packet.
Intent + Evidence + Device Authorization + Receipt
=
Defensible AI-Assisted Decision Record
3.1 Formal symbolic model
Let:
• I = declared human intent;
• E = evidence set;
• C = AI-assisted context;
3 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
• A = device authorization event;
• T = timestamp or external time anchor;
• H = hash or integrity digest;
• R = receipt.
The receipt can be expressed as:
R = Seal(I, E, C, A, T, H)
The point of this model is not mathematical ornament. It states the minimum record boundary. If any
major term is missing, the object may still be useful, but it is no longer a complete device-authorized
intent receipt.
3.2 The receipt ceremony
A receipt ceremony is the procedural moment in which a consequential AI-assisted record becomes
deliberate, bounded, and inspectable.
User Intent Evidence Attachment
Canonical
Record Payload Device Authorization
Receipt Seal Proof Trail / Export
3.3 What this is not
Intent-to-Hardware Binding is not merely:
• a chat log;
• a login event;
• a file upload;
• a digital signature alone;
• an AI compliance dashboard;
• a generic audit log;
• a wallet transaction;
• a policy checklist.
It is a receipt ceremony around human intent in AI-assisted work.
4 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
4 The Device-Authorized Intent Receipt
The core record object is the device-authorized intent receipt. It has two surfaces:
1. Human receipt first - a simple surface that a normal user, executive, reviewer, regulator, attorney,
doctor, financial operator, or auditor can understand quickly.
2. Technical receipt underneath - a structured payload that preserves hashes, evidence state, autho-
rization state, timestamps, proof status, model-context references, export metadata, and verification
logic.
Human-readable receipt
Record sealed. Intent verified. Evidence attached. Authorization confirmed on this
device. Proof available.
Machine-verifiable receipt
Record ID, canonicalized intent, evidence manifest, AI-context digest, local autho-
rization metadata, timestamp, receipt hash, anchor status, export packet status.
4.1 Required receipt states
A receipt should distinguish between at least four states:
State Meaning
Draft Ready to seal Sealed Externally anchored Intent exists, but evidence or authorization may be incomplete.
Intent and required evidence are present, but device authorization has not
occurred.
Device authorization has occurred and a receipt hash/proof state has been
generated.
The receipt hash or export digest has been anchored to a trusted external
time or audit surface.
4.2 Core proof rule
The receipt must prove enough to answer a reviewer without turning the user interface into a forensic
console:
What was intended? What was attached? What AI-assisted context was relied on? Who or
what authorized the record? When did the authorization occur? Has the receipt changed?
5 Receipt Schema and Proof Surface
A technical receipt may use JSON, CBOR, protocol buffers, signed envelopes, or another canonical
serialization format. JSON is used below because it is readable.
5 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
Listing 1: Illustrative technical receipt schema.
{
"receipt_type": "device_authorized_intent_receipt",
"record_id": "...",
"intent": "...",
"evidence": [
{
"name": "resume.pdf",
"type": "application/pdf",
"attached_at": "...",
"hash": "optional"
}
],
"ai_context": {
"summary": "...",
"model_output_hash": "optional"
},
"authorization": {
"method": "device_user_presence",
"local_auth": "confirmed",
"device": "iPhone",
"authorized_at": "..."
},
"timestamp": {
"device_time": "...",
"external_anchor": "pending_or_verified"
},
"proof": {
"receipt_hash": "...",
"status": "sealed",
"export_available": true
}
}
The user-facing receipt should be dramatically simpler:
Record sealed
Intent: Verified
Evidence: Attached
Authorization: Confirmed on this device
Time: [timestamp]
Proof: Available
This split is not cosmetic. It is product architecture. A user should not need to understand hashes,
model-output digests, anchor policies, or canonical serialization to know that a record is sealed. A
reviewer should be able to inspect those details when the record becomes consequential.
5.1 Proof surface requirements
A complete implementation should provide:
• stable record identifiers;
• canonicalized intent text;
• evidence manifest and attachment state;
6 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
• optional evidence hashes where artifacts are available;
• AI-context digest or model-output hash where appropriate;
• local device authorization metadata without exporting biometric templates;
• device timestamp and optional external anchor;
• receipt hash;
• export packet for review.
6 Reference Implementation: SYNC
SYNC implements Intent-to-Hardware Binding as an iOS-native receipt workflow:
State intent Attach evidence Save record Authorize on device Generate receipt
6.1 Minimal MVP loop
The public MVP loop is intentionally small:
Intent -> Evidence -> Face ID / User Presence -> Receipt
The product does not need to expose every internal collector, policy object, cryptographic field, or proof
artifact in the main chat surface. The primary user-visible action is: Save the record. Everything else
supports that moment.
6.2 Runtime boundary
In the reference implementation, SYNC should treat the following as product-boundary obligations:
• canonicalize the user’s intent into a durable record payload;
• bind evidence artifacts or references to that payload;
• preserve the AI-assisted answer, summary, recommendation, or analysis being relied upon;
• request local device authorization only when a record is being sealed;
• generate a receipt and receipt hash;
• show a calm human receipt first;
• provide an inspection/export path for technical proof.
This is where the older foundation paper matters. Receipt-complete execution, replayable continuity,
evidence binding, envelope honesty, refusal semantics, and export packets become concrete product
boundaries. SYNC is not merely a chat app with logs. It is a governed receipt runtime with a consumer-
simple surface.
7 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
6.3 UX principle
The user should experience the primitive as a familiar record action:
I have stated what I mean. I have attached what matters. I have reviewed the AI-assisted
context. I have authorized this record on this device. I now have a receipt.
The interface should not feel like a compliance dashboard by default. The governance should be inspectable,
not noisy.
7 Timestamp Integrity and External Anchoring
A device timestamp alone provides useful local ordering, but it can be challenged if the device clock
is manipulated, if the device is offline, or if the record later becomes part of litigation, audit, custody,
payment, regulatory, or professional review.
The stronger posture is:
Device-created. Externally anchored when available.
For stronger evidentiary posture, the system may optionally anchor the receipt hash to:
• a trusted timestamp authority;
• a server-side timestamp service;
• a transparency log;
• a blockchain;
• an enterprise audit log;
• an institutional system of record.
The external anchor should not replace the local receipt. It should strengthen the time and integrity
posture of the receipt by proving that a particular digest existed at or before a particular time under an
independent service, ledger, or audit environment.
Timestamp posture ladder
Level Evidentiary posture
Device time Server time Trusted timestamp
authority
Transparency log /
ledger
Enterprise audit log Useful local ordering. Vulnerable to clock-manipulation challenge.
Stronger ordering under service-controlled infrastructure.
Cryptographic time-stamp token generated by a trusted third party.
Public or semi-public append-only proof that a receipt hash existed by a
given point.
Institutional continuity, access control, retention, and compliance workflow
integration.
The core implementation should remain honest about anchor status. “Pending”, “verified”, “failed”, and
“not available” are better than false certainty.
8 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
8 Regulatory and Institutional Relevance
Intent-to-Hardware Binding should not be described as automatic legal compliance. It is more precise to
describe it as a record primitive that can help satisfy common institutional needs:
• human oversight;
• documentation;
• logging;
• traceability;
• evidence preservation;
• accountability;
• auditability;
• reviewability.
This matters because many AI governance regimes do not merely ask whether an AI system can answer.
They ask whether the system can be documented, monitored, reviewed, audited, and operated under
human oversight. The EU AI Act, for example, places requirements around technical documentation,
record-keeping, transparency, human oversight, accuracy, robustness, and cybersecurity for high-risk AI
systems. Intent-to-Hardware Binding does not itself equal compliance with those requirements, but it
creates a record object that can support review and traceability in workflows where AI-assisted outputs
influence consequential human decisions.
8.1 Institutional use cases
Potential use cases include:
• legal review of AI-assisted contract analysis;
• medical note review and patient-document summarization;
• financial underwriting or investment memo authorization;
• enterprise policy decisions;
• human resources or credential-review workflows;
• procurement approvals;
• regulated professional review;
• incident response and post-market monitoring;
• board or committee decision trails.
The point is not to automate accountability away from humans. The point is to make human accountability
visible, deliberate, and reviewable.
9 Digital Assets and RWA Decision Receipts
Digital assets make the primitive especially clear. Crypto wallets prove that a key signed a transaction.
That is powerful, but it is not the same as proving the human context around the transaction.
9 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
Wallet signatures prove execution. Intent receipts prove deliberation.
A wallet transaction may prove that a private key produced a valid signature. An Intent-to-Hardware
Binding receipt can add a different layer:
I intended this transfer. I reviewed this evidence. I understood the AI-assisted context. I
authorized this record on this device. Here is the receipt.
Use cases include:
• tokenized real-world asset review;
• DAO voting;
• stablecoin redemption;
• investment memo authorization;
• asset purchase approval;
• custody transfer;
• smart contract execution review;
• treasury policy approvals;
• collateral packet review;
• on-chain/off-chain evidence linkage.
In tokenized real-world asset workflows, the receipt may bind off-chain evidence - appraisals, invoices,
contracts, insurance documents, audits, UCC filings, custody statements, or board approvals - to the
human authorization event that preceded a transaction or governance action. The result is not merely a
transaction record. It is a deliberation record.
10 Contributions and Category Claims
This paper makes seven bounded contributions:
1. Defines Intent-to-Hardware Binding as a receipt primitive for AI-assisted human decisions.
2. Distinguishes authorization of access from authorization of consequence. The user may be
authenticated to a system without having authorized a specific consequential record.
3. Introduces the device-authorized intent receipt as the core record object that binds intent,
evidence, AI-assisted context, device authorization, timestamp state, and proof metadata.
4. Provides an MVP implementation path using iOS device-owner authentication or equivalent
device-level user-presence confirmation.
5. Defines a two-layer receipt structure: human-readable at the surface and machine-verifiable
underneath.
6. Establishes regulatory relevance without claiming automatic compliance. The primitive
supports logging, traceability, human oversight, reviewability, and evidence preservation, but legal
sufficiency remains workflow- and jurisdiction-specific.
10 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
7. Shows applicability across AI governance, digital assets, RWA tokenization, professional
review, enterprise decision records, and high-risk workflows.
The contribution is not a new model architecture. It is a missing record object for the moment when
AI-assisted information becomes a human-authorized consequence.
11 Prior Art and Differentiation
The proposed primitive is adjacent to several mature domains. It should be positioned respectfully and
precisely.
Prior art surface What it proves well Differentiation of Intent-to-Hardware
Binding
Login authentication Access to an account, application,
device, or session.
WebAuthn / passkeys Strong public-key authentication
scoped to a relying party and au-
thenticator.
Digital signatures Document e-signature
tools
Notarization / times-
tamping
Integrity of signed data and iden-
tity/control of a signing key.
Consent or agreement to a docu-
ment or envelope.
Existence of a document or digest
at or before a time.
Audit logs System activity, events, and oper-
ational traces.
AI compliance dash-
boards
Overview of policies, metrics,
risks, or model behavior.
Wallet signing / typed
data
Cryptographic authorization of
transactions or structured mes-
sages.
The primitive binds intent, evidence,
AI context, authorization, and re-
ceiptintegrityaroundaconsequential
record.
WebAuthn helps authenticate users;
the proposed receipt ceremony
records what was meant, evidenced,
reviewed, and authorized in an
AI-assisted workflow.
A signature may seal a payload; the
primitive defines the human-intent
payload that should be sealed.
The primitive focuses on AI-assisted
decision context, evidence state, and
device-authorized receipt metadata.
Timestamping can anchor the re-
ceipt hash; it does not replace
the intent/evidence/AI-context cere-
mony.
The primitive creates a user-centered
record of deliberate human authoriza-
tion, not merely background system
events.
Dashboards organize governance; the
primitive creates a transaction-like
receipt for a specific human decision
record.
The primitive adds evidence and AI-
assisted deliberation context around
the wallet or asset action.
11 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
These systems authenticate identity, access, documents, or transactions. Intent-to-Hardware Binding
binds human intent, evidence, AI context, device authorization, and receipt integrity into one
reviewable record.
12 Limitations
A serious primitive must state its limits.
1. A receipt does not prove truth. It proves that a record was created, authorized, and preserved
under the declared process. False evidence can still be attached; bad analysis can still be relied upon.
2. Device authorization is not universal identity. Local user-presence confirmation shows that
the device-mediated authorization event occurred. It does not automatically prove all legal identity
claims.
3. Device time can be challenged. Device-created timestamps are useful, but stronger posture may
require external anchoring.
4. AI context may be probabilistic. The receipt can preserve the output or digest, but it does
not make the model deterministic unless the model/runtime environment also supports replayable
conditions.
5. Evidence availability matters. Hashing a local file proves integrity only if the file was actually
available and correctly hashed at record time.
6. Compliance is jurisdiction-specific. A receipt primitive can support governance and auditability,
but legal sufficiency depends on the governing jurisdiction, facts, workflow, and implementation
details.
7. Privacy and retention must be designed. Binding evidence and intent can create sensitive
records; encryption, access control, minimization, retention, and export policy are necessary.
The strongest posture is not to overclaim. It is to make the receipt boundary explicit and then let the
institution, reviewer, court, regulator, or counterparty inspect what was actually created.
13 Future Work
Important extensions include:
1. Canonical serialization. Define a stable canonical receipt format with deterministic hashing.
2. Externalanchoringadapters. Supporttrustedtimestampauthorities, transparencylogs, blockchain
anchors, enterprise audit logs, and institutional record systems.
3. Evidence manifests. Expand attachment schemas for documents, screenshots, APIs, sources,
contracts, image data, media artifacts, and structured business records.
4. Receipt verification tools. Provide open-source verifier utilities for receipt hashes, anchor status,
evidence manifests, and export packets.
5. Policy-aware receipt types. Define receipt profiles for legal, medical, financial, enterprise, HR,
procurement, digital assets, and public-sector workflows.
12 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
6. Multi-party ceremonies. Extend single-user receipts into board approvals, committee signoffs,
co-signed memos, DAO governance, and multi-agent workflows.
7. Privacy-preserving proof. Explore zero-knowledge or selective disclosure approaches so a record
can prove integrity without exposing sensitive contents unnecessarily.
8. Runtime replay. Where feasible, preserve enough model, prompt, source, and environment metadata
to support replay or bounded reconstruction of the AI-assisted context.
14 Conclusion
AI does not merely need smarter answers. Consequential AI needs better records.
Intent-to-Hardware Binding defines the missing record primitive: a device-authorized receipt that binds
human intent, evidence, AI-assisted context, device authorization, timestamp state, and proof metadata
into a reviewable object. It shifts the center of gravity from model output to human consequence.
The core claim is simple:
Existing systems authenticate access.
Intent-to-Hardware Binding authenticates consequence.
The primitive does not replace signatures, passkeys, audit logs, notarization, wallet signing, AI governance
dashboards, or compliance systems. It composes with them. It gives them a missing object to protect:
the human-intent record at the moment of consequential AI use.
In the reference implementation, SYNC makes the primitive concrete through an iOS-native workflow:
state intent, attach evidence, save the record, authorize on device, generate a receipt, and inspect the
proof trail. The formal category is Intent-to-Hardware Binding. The product feeling is even simpler:
intent bound to silicon.
13 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
A
Reference Implementation Checklist
A minimal SYNC MVP should demonstrate:
• a user can create a record with a declared intent;
• evidence can be attached or referenced;
• the record can be saved;
• the user can invoke device-level authorization;
• a human-readable receipt appears;
• a technical receipt exists underneath;
• the receipt includes a stable record ID and timestamp;
• a receipt hash or proof state is generated;
• an export path exists;
• the UI does not confuse a draft with a sealed record.
B
References
[1] Louis Thomas Clybourn Jr., The Laws of Physics in Computation: A First-Principles Foundation for
Deterministic Execution, Aurifex Inc., SYNC Runtime Project foundation paper.
[2] Leslie Lamport, “Time, Clocks, and the Ordering of Events in a Distributed System,” Communications
of the ACM, 21(7):558-565, 1978.
[3] Martin Leucker and Christian Schallhart, “A Brief Account of Runtime Verification,” Journal of Logic
and Algebraic Programming, 78(5):293-303, 2009.
[4] Nancy G. Leveson, Engineering a Safer World: Systems Thinking Applied to Safety, MIT Press, 2011.
[5] AppleDeveloperDocumentation,Local Authentication. https://developer.apple.com/documentation/
localauthentication
[6] Apple Developer Documentation, LAPolicy.deviceOwnerAuthentication. https://developer.apple.
com/documentation/LocalAuthentication/LAPolicy/deviceOwnerAuthentication
[7] Regulation (EU) 2024/1689 of the European Parliament and of the Council, Artificial Intelligence
Act. https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng
[8] W3C, Web Authentication: An API for Accessing Public Key Credentials Level 2. https://www.w3.
org/TR/webauthn-2/
[9] National Institute of Standards and Technology, FIPS 186-5: Digital Signature Standard. https:
//csrc.nist.gov/pubs/fips/186-5/final
[10] IETF RFC 3161, Internet X.509 Public Key Infrastructure Time-Stamp Protocol. https://www.ietf.
org/rfc/rfc3161.txt
14 of 15
Intent-to-Hardware Binding Aurifex Inc. / SYNC Runtime Project
[11] Ethereum Improvement Proposals, EIP-712: Typed structured data hashing and signing. https:
//eips.ethereum.org/EIPS/eip-712
[12] arXiv, Submission Version Availability. [13] arXiv, arXiv License Information. https://info.arxiv.org/help/versions.html
https://info.arxiv.org/help/license/index.html
15 of 15