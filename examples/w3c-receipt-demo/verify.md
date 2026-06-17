{
  "@context" : [
    "https://www.w3.org/ns/credentials/v2",
    {
      "@version" : 1.1,
      "HumanAuthorizationOriginReceipt" : "sync:HumanAuthorizationOriginReceipt",
      "SYNCAuthorizationReceipt" : "sync:SYNCAuthorizationReceipt",
      "canonicalReceiptHash" : "sync:canonicalReceiptHash",
      "chainHeadB64Url" : "sync:chainHeadB64Url",
      "evidenceManifestHashB64Url" : "sync:evidenceManifestHashB64Url",
      "exportMetadata" : "sync:exportMetadata",
      "intentHashB64Url" : "sync:intentHashB64Url",
      "policyContext" : "sync:policyContext",
      "receiptID" : "sync:receiptID",
      "receiptSealHashB64Url" : "sync:receiptSealHashB64Url",
      "receiptType" : "sync:receiptType",
      "sync" : "urn:sync:vocab:v1.1:"
    }
  ],
  "credentialSubject" : {
    "activePolicyModules" : [
      "gdpr.posture.v1",
      "eu_ai_act.posture.v1",
      "traiga.posture.v1"
    ],
    "authorization" : {
      "algorithm" : "ES256",
      "created_at" : "2026-06-14T03:16:41Z",
      "key_id" : "9c96bea0e905554b04690e25f709aed3edf4c4b20b8326bcbcfe80c62a464182",
      "key_scheme" : "P256-SecureEnclave",
      "payload_digest_algorithm" : "SHA-256",
      "proof_source" : "secure_enclave",
      "public_key_b64" : "BPv/r89KI6Dx99By7szNyXDY6ZMeylRsXIqCEMF5anr/E/s4Aw8ZO/4yUEHEOO8o6D0cr39NIfx84hE3pQuxRLQ=",
      "receipt_seal_hash_b64url" : "TKpyoLNskxzL2mcIp4Xb3tsTEay5cErvaJv-cGFTqHg",
      "signature_b64url" : "MEUCIQDHjV6fz4D6jc51v9_5WIaF6-XjqHZ2Uzu2vpA9pz5kxQIgE4dBos0a1lDSJBSP5HFfZ42l3eHRSdv-DyrhxAT0J8Q",
      "signature_encoding" : "ecdsa_x962_der_b64url",
      "signed_payload_digest_b64url" : "iLyGYxGoam-oopFnvtFPa_oi7QAl2yOtE_MLjDto6Qc",
      "verification_mode" : "offline_public_key_signature_check"
    },
    "canonicalPayloadHashB64Url" : "IF-wY2u8uO-XogqlZp9vOAPUEdj2srWF4lBDJ4We-3Y",
    "canonicalReceiptHash" : "SHA-256:205fb0636bbcb8ef97a20aa5669f6f3803d411d8f6b2b585e2504327859efb76",
    "canonicalReceiptSchemaVersion" : "sync.canonical_receipt_envelope.v1.1",
    "chainHeadB64Url" : "iRijEOUHysy7X_MpD7jnZKJenCykseBCO1aCa9r_ocs",
    "evidence" : [
      {
        "attachedAt" : "2026-06-14T03:16:37Z",
        "byteLength" : 3870,
        "evidenceStorage" : "hash_only_no_central_upload",
        "hashNormalization" : "digest",
        "id" : "AC0A88D5-5305-40AE-BCA2-145FD1E48658",
        "kind" : "pdf",
        "mimeType" : "application/pdf",
        "name" : "sync_demo_contractor_review_evidence.pdf",
        "sealedBeforeAuthorization" : true,
        "sha256" : "SHA-256:edbab75ee67c0d4d853d76be73d727ddcd95a8982639c96fee5e2cb4b6b4105f"
      }
    ],
    "evidenceManifestHashB64Url" : "OQs4-vA9J1_wYVCVFc9ebW5vZrZKlUpl0bN78zlgM50",
    "evidenceStorage" : "hash_only_no_central_upload",
    "exportMetadata" : {
      "biometricAvailable" : true,
      "biometricTemplateExported" : false,
      "biometricType" : "FaceID",
      "exportAuthorizationAt" : "2026-06-14T03:18:51Z",
      "exportAuthorizationKeyID" : "9c96bea0e905554b04690e25f709aed3edf4c4b20b8326bcbcfe80c62a464182",
      "exportAuthorizationMethod" : "local_biometric_or_device_passcode",
      "exportAuthorizationPayloadDigestB64Url" : "XXofpXK8jAD0d5CP6NNll-DYcGtKdkAvBP1AdaJOeS8",
      "exportAuthorizationResult" : "success",
      "exportFormat" : "vc_json",
      "exportSchemaVersion" : "sync.export_authorization.v1.1",
      "exportedAt" : "2026-06-14T03:18:51Z",
      "exportedReceiptID" : "780B567C-2CDF-4EDC-9CB9-0FCA2FCBCFBD"
    },
    "id" : "urn:sync:human-authorization:780B567C-2CDF-4EDC-9CB9-0FCA2FCBCFBD",
    "intent" : "Approve $10M contractor review",
    "intentHash" : "SHA-256:0396d1c9c1e846986e4d36a66f1adcd9e1354d3f6ffafc6dce331083dbcdf7b6",
    "intentHashB64Url" : "A5bRycHoRphuTTambxrc2eE1TT9v-vxtzjMQg9vN97Y",
    "policyContext" : {
      "activePolicyModules" : [
        "gdpr.posture.v1",
        "eu_ai_act.posture.v1",
        "traiga.posture.v1"
      ],
      "complianceDetermination" : "not_provided_by_sync",
      "disclaimer" : "Policy context is included for governance and audit reference only. SYNC does not provide legal advice or determine compliance.",
      "labels" : [
        "GDPR",
        "EU AI Act",
        "TRAIGA"
      ],
      "legalDetermination" : "not_provided_by_sync",
      "mode" : "governance_context_v1"
    },
    "policyContextDisplay" : "GDPR · EU AI Act · TRAIGA",
    "policyContextLabels" : [
      "GDPR",
      "EU AI Act",
      "TRAIGA"
    ],
    "proofSource" : "secure_enclave_p256",
    "publicReceiptID" : "SYNC-0FCA2FCBCFBD",
    "receiptChain" : {
      "chainHead" : "SHA-256:8918a310e507caccbb5ff3290fb8e764a25e9c2ca4b1e0423b56826bdaffa1cb",
      "currentReceiptHash" : "SHA-256:daa17f4507ba84d3b4eb9d5b03f9678fc0964a7899f7508aea1f2e5dd59ebe39",
      "deletionSemantics" : "deletion_should_use_tombstone_records_to_preserve_chain_continuity",
      "index" : 135,
      "linkedAt" : "2026-06-14T03:16:41Z",
      "previousReceiptHash" : "SHA-256:81f2fe15762b0b9fbe6050f297fa985e5a58574e35801eb0229f33470060e198",
      "schemaVersion" : "sync.local_receipt_chain.v1",
      "storageMode" : "local_append_only_metadata"
    },
    "receiptID" : "780B567C-2CDF-4EDC-9CB9-0FCA2FCBCFBD",
    "receiptSealHashB64Url" : "TKpyoLNskxzL2mcIp4Xb3tsTEay5cErvaJv-cGFTqHg",
    "receiptType" : "human_authorization_origin_receipt"
  },
  "id" : "urn:sync:receipt:780B567C-2CDF-4EDC-9CB9-0FCA2FCBCFBD",
  "issuer" : "did:key:zDnaehPfWUUXnaoUmjhk75osXjsf2ZFNAnoDjubHjEiFzw8ea",
  "type" : [
    "VerifiableCredential",
    "SYNCAuthorizationReceipt",
    "HumanAuthorizationOriginReceipt"
  ],
  "validFrom" : "2026-06-14T03:16:41Z"
}