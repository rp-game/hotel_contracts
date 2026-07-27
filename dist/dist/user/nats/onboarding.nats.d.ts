/**
 * Onboarding NATS Contracts
 *
 * Patterns:
 * - onboarding.applications.* (findAll, findById, create, updateStatus, approve, reject, assignReviewer)
 * - onboarding.documents.* (findByApplication, upload, verify, reject, updateStatus, delete)
 * - onboarding.timeline.* (findByApplication, create)
 * - onboarding.stats.get
 *
 * Handler: user-service (OnboardingController)
 * Called by: api-gateway (PlatformController)
 */
export declare enum OnboardingStatus {
    DRAFT = "DRAFT",
    SUBMITTED = "SUBMITTED",
    UNDER_REVIEW = "UNDER_REVIEW",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    ONBOARDED = "ONBOARDED"
}
export declare enum DocumentStatus {
    PENDING = "PENDING",
    UPLOADED = "UPLOADED",
    VERIFIED = "VERIFIED",
    REJECTED = "REJECTED"
}
export declare enum DocumentType {
    BUSINESS_LICENSE = "BUSINESS_LICENSE",
    TAX_CERTIFICATE = "TAX_CERTIFICATE",
    TOURISM_LICENSE = "TOURISM_LICENSE",
    INSURANCE_CERTIFICATE = "INSURANCE_CERTIFICATE",
    FIRE_SAFETY_CERTIFICATE = "FIRE_SAFETY_CERTIFICATE"
}
export declare class FindOnboardingApplicationByIdPayload {
    id: string;
}
export declare class UpdateOnboardingApplicationStatusPayload {
    id: string;
    status: string;
    performedBy?: string;
    notes?: string;
}
export declare class ApproveOnboardingApplicationPayload {
    id: string;
    performedBy?: string;
}
export declare class RejectOnboardingApplicationPayload {
    id: string;
    reason: string;
    performedBy?: string;
}
export declare class AssignOnboardingReviewerPayload {
    id: string;
    reviewerId: string;
    assignedBy?: string;
}
export declare class FindDocumentsByApplicationPayload {
    applicationId: string;
}
export declare class UploadOnboardingDocumentPayload {
    applicationId: string;
    documentType: string;
    fileName: string;
    fileBuffer: any;
    mimeType: string;
}
export declare class VerifyOnboardingDocumentPayload {
    id: string;
    verifiedBy?: string;
}
export declare class RejectOnboardingDocumentPayload {
    id: string;
    reason: string;
    verifiedBy?: string;
}
export declare class UpdateOnboardingDocumentStatusPayload {
    id: string;
    status: string;
    verifiedBy?: string;
    notes?: string;
}
export declare class DeleteOnboardingDocumentPayload {
    id: string;
}
export declare class FindTimelineByApplicationPayload {
    applicationId: string;
}
export declare class CreateOnboardingApplicationDto {
    tenantId: string;
    status?: OnboardingStatus;
    currentStep?: number;
}
export declare class UpdateOnboardingStatusDto {
    status: OnboardingStatus;
    reason?: string;
    performedBy?: string;
}
export declare class AssignReviewerDto {
    reviewerId: string;
    performedBy?: string;
}
export declare class CreateOnboardingDocumentDto {
    applicationId: string;
    documentType: DocumentType;
    filePath: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
}
export declare class UpdateDocumentStatusDto {
    status: DocumentStatus;
    rejectionReason?: string;
    verifiedBy?: string;
}
export declare class CreateTimelineEventDto {
    applicationId: string;
    eventType: string;
    description: string;
    performedBy?: string;
    metadata?: Record<string, unknown>;
}
export declare class OnboardingStatsDto {
    totalApplications: number;
    submittedApplications: number;
    underReviewApplications: number;
    approvedApplications: number;
    rejectedApplications: number;
    onboardedApplications: number;
}
//# sourceMappingURL=onboarding.nats.d.ts.map