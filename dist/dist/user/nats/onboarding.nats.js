"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnboardingStatsDto = exports.CreateTimelineEventDto = exports.UpdateDocumentStatusDto = exports.CreateOnboardingDocumentDto = exports.AssignReviewerDto = exports.UpdateOnboardingStatusDto = exports.CreateOnboardingApplicationDto = exports.FindTimelineByApplicationPayload = exports.DeleteOnboardingDocumentPayload = exports.UpdateOnboardingDocumentStatusPayload = exports.RejectOnboardingDocumentPayload = exports.VerifyOnboardingDocumentPayload = exports.UploadOnboardingDocumentPayload = exports.FindDocumentsByApplicationPayload = exports.AssignOnboardingReviewerPayload = exports.RejectOnboardingApplicationPayload = exports.ApproveOnboardingApplicationPayload = exports.UpdateOnboardingApplicationStatusPayload = exports.FindOnboardingApplicationByIdPayload = exports.DocumentType = exports.DocumentStatus = exports.OnboardingStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ============= Enums =============
var OnboardingStatus;
(function (OnboardingStatus) {
    OnboardingStatus["DRAFT"] = "DRAFT";
    OnboardingStatus["SUBMITTED"] = "SUBMITTED";
    OnboardingStatus["UNDER_REVIEW"] = "UNDER_REVIEW";
    OnboardingStatus["APPROVED"] = "APPROVED";
    OnboardingStatus["REJECTED"] = "REJECTED";
    OnboardingStatus["ONBOARDED"] = "ONBOARDED";
})(OnboardingStatus || (exports.OnboardingStatus = OnboardingStatus = {}));
var DocumentStatus;
(function (DocumentStatus) {
    DocumentStatus["PENDING"] = "PENDING";
    DocumentStatus["UPLOADED"] = "UPLOADED";
    DocumentStatus["VERIFIED"] = "VERIFIED";
    DocumentStatus["REJECTED"] = "REJECTED";
})(DocumentStatus || (exports.DocumentStatus = DocumentStatus = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType["BUSINESS_LICENSE"] = "BUSINESS_LICENSE";
    DocumentType["TAX_CERTIFICATE"] = "TAX_CERTIFICATE";
    DocumentType["TOURISM_LICENSE"] = "TOURISM_LICENSE";
    DocumentType["INSURANCE_CERTIFICATE"] = "INSURANCE_CERTIFICATE";
    DocumentType["FIRE_SAFETY_CERTIFICATE"] = "FIRE_SAFETY_CERTIFICATE";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
// ============= NATS Payload Classes =============
class FindOnboardingApplicationByIdPayload {
    id;
}
exports.FindOnboardingApplicationByIdPayload = FindOnboardingApplicationByIdPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application ID' }),
    __metadata("design:type", String)
], FindOnboardingApplicationByIdPayload.prototype, "id", void 0);
class UpdateOnboardingApplicationStatusPayload {
    id;
    status;
    performedBy;
    notes;
}
exports.UpdateOnboardingApplicationStatusPayload = UpdateOnboardingApplicationStatusPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application ID' }),
    __metadata("design:type", String)
], UpdateOnboardingApplicationStatusPayload.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New status' }),
    __metadata("design:type", String)
], UpdateOnboardingApplicationStatusPayload.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who performed the action' }),
    __metadata("design:type", String)
], UpdateOnboardingApplicationStatusPayload.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes for status change' }),
    __metadata("design:type", String)
], UpdateOnboardingApplicationStatusPayload.prototype, "notes", void 0);
class ApproveOnboardingApplicationPayload {
    id;
    performedBy;
}
exports.ApproveOnboardingApplicationPayload = ApproveOnboardingApplicationPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application ID' }),
    __metadata("design:type", String)
], ApproveOnboardingApplicationPayload.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who performed the approval' }),
    __metadata("design:type", String)
], ApproveOnboardingApplicationPayload.prototype, "performedBy", void 0);
class RejectOnboardingApplicationPayload {
    id;
    reason;
    performedBy;
}
exports.RejectOnboardingApplicationPayload = RejectOnboardingApplicationPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application ID' }),
    __metadata("design:type", String)
], RejectOnboardingApplicationPayload.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rejection reason' }),
    __metadata("design:type", String)
], RejectOnboardingApplicationPayload.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who performed the rejection' }),
    __metadata("design:type", String)
], RejectOnboardingApplicationPayload.prototype, "performedBy", void 0);
class AssignOnboardingReviewerPayload {
    id;
    reviewerId;
    assignedBy;
}
exports.AssignOnboardingReviewerPayload = AssignOnboardingReviewerPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application ID' }),
    __metadata("design:type", String)
], AssignOnboardingReviewerPayload.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reviewer user ID' }),
    __metadata("design:type", String)
], AssignOnboardingReviewerPayload.prototype, "reviewerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who performed the assignment' }),
    __metadata("design:type", String)
], AssignOnboardingReviewerPayload.prototype, "assignedBy", void 0);
class FindDocumentsByApplicationPayload {
    applicationId;
}
exports.FindDocumentsByApplicationPayload = FindDocumentsByApplicationPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application ID' }),
    __metadata("design:type", String)
], FindDocumentsByApplicationPayload.prototype, "applicationId", void 0);
class UploadOnboardingDocumentPayload {
    applicationId;
    documentType;
    fileName;
    fileBuffer; // Buffer - binary data, not typed to avoid @types/node dependency
    mimeType;
}
exports.UploadOnboardingDocumentPayload = UploadOnboardingDocumentPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application ID' }),
    __metadata("design:type", String)
], UploadOnboardingDocumentPayload.prototype, "applicationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Document type' }),
    __metadata("design:type", String)
], UploadOnboardingDocumentPayload.prototype, "documentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Original filename' }),
    __metadata("design:type", String)
], UploadOnboardingDocumentPayload.prototype, "fileName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File binary data' }),
    __metadata("design:type", Object)
], UploadOnboardingDocumentPayload.prototype, "fileBuffer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File MIME type' }),
    __metadata("design:type", String)
], UploadOnboardingDocumentPayload.prototype, "mimeType", void 0);
class VerifyOnboardingDocumentPayload {
    id;
    verifiedBy;
}
exports.VerifyOnboardingDocumentPayload = VerifyOnboardingDocumentPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Document ID' }),
    __metadata("design:type", String)
], VerifyOnboardingDocumentPayload.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who verified the document' }),
    __metadata("design:type", String)
], VerifyOnboardingDocumentPayload.prototype, "verifiedBy", void 0);
class RejectOnboardingDocumentPayload {
    id;
    reason;
    verifiedBy;
}
exports.RejectOnboardingDocumentPayload = RejectOnboardingDocumentPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Document ID' }),
    __metadata("design:type", String)
], RejectOnboardingDocumentPayload.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rejection reason' }),
    __metadata("design:type", String)
], RejectOnboardingDocumentPayload.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who rejected the document' }),
    __metadata("design:type", String)
], RejectOnboardingDocumentPayload.prototype, "verifiedBy", void 0);
class UpdateOnboardingDocumentStatusPayload {
    id;
    status;
    verifiedBy;
    notes;
}
exports.UpdateOnboardingDocumentStatusPayload = UpdateOnboardingDocumentStatusPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Document ID' }),
    __metadata("design:type", String)
], UpdateOnboardingDocumentStatusPayload.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New status' }),
    __metadata("design:type", String)
], UpdateOnboardingDocumentStatusPayload.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who performed the action' }),
    __metadata("design:type", String)
], UpdateOnboardingDocumentStatusPayload.prototype, "verifiedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes for status change' }),
    __metadata("design:type", String)
], UpdateOnboardingDocumentStatusPayload.prototype, "notes", void 0);
class DeleteOnboardingDocumentPayload {
    id;
}
exports.DeleteOnboardingDocumentPayload = DeleteOnboardingDocumentPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Document ID' }),
    __metadata("design:type", String)
], DeleteOnboardingDocumentPayload.prototype, "id", void 0);
class FindTimelineByApplicationPayload {
    applicationId;
}
exports.FindTimelineByApplicationPayload = FindTimelineByApplicationPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application ID' }),
    __metadata("design:type", String)
], FindTimelineByApplicationPayload.prototype, "applicationId", void 0);
// ============= DTOs =============
class CreateOnboardingApplicationDto {
    tenantId;
    status = OnboardingStatus.DRAFT;
    currentStep = 1;
}
exports.CreateOnboardingApplicationDto = CreateOnboardingApplicationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID to create application for' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOnboardingApplicationDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Initial status', enum: OnboardingStatus, default: OnboardingStatus.DRAFT }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(OnboardingStatus),
    __metadata("design:type", String)
], CreateOnboardingApplicationDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Initial step', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateOnboardingApplicationDto.prototype, "currentStep", void 0);
class UpdateOnboardingStatusDto {
    status;
    reason;
    performedBy;
}
exports.UpdateOnboardingStatusDto = UpdateOnboardingStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: OnboardingStatus, description: 'New status for the application' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(OnboardingStatus),
    __metadata("design:type", String)
], UpdateOnboardingStatusDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reason for status change (required for rejection)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateOnboardingStatusDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID performing the action' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateOnboardingStatusDto.prototype, "performedBy", void 0);
class AssignReviewerDto {
    reviewerId;
    performedBy;
}
exports.AssignReviewerDto = AssignReviewerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reviewer user ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AssignReviewerDto.prototype, "reviewerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID performing the assignment' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AssignReviewerDto.prototype, "performedBy", void 0);
class CreateOnboardingDocumentDto {
    applicationId;
    documentType;
    filePath;
    fileName;
    mimeType;
    fileSize;
}
exports.CreateOnboardingDocumentDto = CreateOnboardingDocumentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application ID this document belongs to' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOnboardingDocumentDto.prototype, "applicationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: DocumentType, description: 'Type of document' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(DocumentType),
    __metadata("design:type", String)
], CreateOnboardingDocumentDto.prototype, "documentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File path where document is stored' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnboardingDocumentDto.prototype, "filePath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Original filename' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnboardingDocumentDto.prototype, "fileName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File MIME type' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOnboardingDocumentDto.prototype, "mimeType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File size in bytes' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOnboardingDocumentDto.prototype, "fileSize", void 0);
class UpdateDocumentStatusDto {
    status;
    rejectionReason;
    verifiedBy;
}
exports.UpdateDocumentStatusDto = UpdateDocumentStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: DocumentStatus, description: 'New document status' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(DocumentStatus),
    __metadata("design:type", String)
], UpdateDocumentStatusDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reason for rejection (required when rejecting)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDocumentStatusDto.prototype, "rejectionReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID performing the action' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateDocumentStatusDto.prototype, "verifiedBy", void 0);
class CreateTimelineEventDto {
    applicationId;
    eventType;
    description;
    performedBy;
    metadata;
}
exports.CreateTimelineEventDto = CreateTimelineEventDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application ID this event belongs to' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateTimelineEventDto.prototype, "applicationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of event' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTimelineEventDto.prototype, "eventType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Event description' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTimelineEventDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who performed the action' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateTimelineEventDto.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateTimelineEventDto.prototype, "metadata", void 0);
class OnboardingStatsDto {
    totalApplications;
    submittedApplications;
    underReviewApplications;
    approvedApplications;
    rejectedApplications;
    onboardedApplications;
}
exports.OnboardingStatsDto = OnboardingStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of applications' }),
    __metadata("design:type", Number)
], OnboardingStatsDto.prototype, "totalApplications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of submitted applications' }),
    __metadata("design:type", Number)
], OnboardingStatsDto.prototype, "submittedApplications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of applications under review' }),
    __metadata("design:type", Number)
], OnboardingStatsDto.prototype, "underReviewApplications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of approved applications' }),
    __metadata("design:type", Number)
], OnboardingStatsDto.prototype, "approvedApplications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rejected applications' }),
    __metadata("design:type", Number)
], OnboardingStatsDto.prototype, "rejectedApplications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of onboarded applications' }),
    __metadata("design:type", Number)
], OnboardingStatsDto.prototype, "onboardedApplications", void 0);
//# sourceMappingURL=onboarding.nats.js.map