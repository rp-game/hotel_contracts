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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, IsNumber, Min, Max } from 'class-validator';

// ============= Enums =============

export enum OnboardingStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  ONBOARDED = 'ONBOARDED',
}

export enum DocumentStatus {
  PENDING = 'PENDING',
  UPLOADED = 'UPLOADED',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
}

export enum DocumentType {
  BUSINESS_LICENSE = 'BUSINESS_LICENSE',
  TAX_CERTIFICATE = 'TAX_CERTIFICATE',
  TOURISM_LICENSE = 'TOURISM_LICENSE',
  INSURANCE_CERTIFICATE = 'INSURANCE_CERTIFICATE',
  FIRE_SAFETY_CERTIFICATE = 'FIRE_SAFETY_CERTIFICATE',
}

// ============= NATS Payload Classes =============

export class FindOnboardingApplicationByIdPayload {
  @ApiProperty({ description: 'Application ID' })
  id: string;
}

export class UpdateOnboardingApplicationStatusPayload {
  @ApiProperty({ description: 'Application ID' })
  id: string;

  @ApiProperty({ description: 'New status' })
  status: string;

  @ApiPropertyOptional({ description: 'User who performed the action' })
  performedBy?: string;

  @ApiPropertyOptional({ description: 'Notes for status change' })
  notes?: string;
}

export class ApproveOnboardingApplicationPayload {
  @ApiProperty({ description: 'Application ID' })
  id: string;

  @ApiPropertyOptional({ description: 'User who performed the approval' })
  performedBy?: string;
}

export class RejectOnboardingApplicationPayload {
  @ApiProperty({ description: 'Application ID' })
  id: string;

  @ApiProperty({ description: 'Rejection reason' })
  reason: string;

  @ApiPropertyOptional({ description: 'User who performed the rejection' })
  performedBy?: string;
}

export class AssignOnboardingReviewerPayload {
  @ApiProperty({ description: 'Application ID' })
  id: string;

  @ApiProperty({ description: 'Reviewer user ID' })
  reviewerId: string;

  @ApiPropertyOptional({ description: 'User who performed the assignment' })
  assignedBy?: string;
}

export class FindDocumentsByApplicationPayload {
  @ApiProperty({ description: 'Application ID' })
  applicationId: string;
}

export class UploadOnboardingDocumentPayload {
  @ApiProperty({ description: 'Application ID' })
  applicationId: string;

  @ApiProperty({ description: 'Document type' })
  documentType: string;

  @ApiProperty({ description: 'Original filename' })
  fileName: string;

  @ApiProperty({ description: 'File binary data' })
  fileBuffer: any; // Buffer - binary data, not typed to avoid @types/node dependency

  @ApiProperty({ description: 'File MIME type' })
  mimeType: string;
}

export class VerifyOnboardingDocumentPayload {
  @ApiProperty({ description: 'Document ID' })
  id: string;

  @ApiPropertyOptional({ description: 'User who verified the document' })
  verifiedBy?: string;
}

export class RejectOnboardingDocumentPayload {
  @ApiProperty({ description: 'Document ID' })
  id: string;

  @ApiProperty({ description: 'Rejection reason' })
  reason: string;

  @ApiPropertyOptional({ description: 'User who rejected the document' })
  verifiedBy?: string;
}

export class UpdateOnboardingDocumentStatusPayload {
  @ApiProperty({ description: 'Document ID' })
  id: string;

  @ApiProperty({ description: 'New status' })
  status: string;

  @ApiPropertyOptional({ description: 'User who performed the action' })
  verifiedBy?: string;

  @ApiPropertyOptional({ description: 'Notes for status change' })
  notes?: string;
}

export class DeleteOnboardingDocumentPayload {
  @ApiProperty({ description: 'Document ID' })
  id: string;
}

export class FindTimelineByApplicationPayload {
  @ApiProperty({ description: 'Application ID' })
  applicationId: string;
}

// ============= DTOs =============

export class CreateOnboardingApplicationDto {
  @ApiProperty({ description: 'Tenant ID to create application for' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Initial status', enum: OnboardingStatus, default: OnboardingStatus.DRAFT })
  @IsOptional()
  @IsEnum(OnboardingStatus)
  status?: OnboardingStatus = OnboardingStatus.DRAFT;

  @ApiPropertyOptional({ description: 'Initial step', default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  currentStep?: number = 1;
}

export class UpdateOnboardingStatusDto {
  @ApiProperty({ enum: OnboardingStatus, description: 'New status for the application' })
  @IsNotEmpty()
  @IsEnum(OnboardingStatus)
  status: OnboardingStatus;

  @ApiPropertyOptional({ description: 'Reason for status change (required for rejection)' })
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiPropertyOptional({ description: 'User ID performing the action' })
  @IsOptional()
  @IsUUID()
  performedBy?: string;
}

export class AssignReviewerDto {
  @ApiProperty({ description: 'Reviewer user ID' })
  @IsNotEmpty()
  @IsUUID()
  reviewerId: string;

  @ApiPropertyOptional({ description: 'User ID performing the assignment' })
  @IsOptional()
  @IsUUID()
  performedBy?: string;
}

export class CreateOnboardingDocumentDto {
  @ApiProperty({ description: 'Application ID this document belongs to' })
  @IsNotEmpty()
  @IsUUID()
  applicationId: string;

  @ApiProperty({ enum: DocumentType, description: 'Type of document' })
  @IsNotEmpty()
  @IsEnum(DocumentType)
  documentType: DocumentType;

  @ApiProperty({ description: 'File path where document is stored' })
  @IsNotEmpty()
  @IsString()
  filePath: string;

  @ApiProperty({ description: 'Original filename' })
  @IsNotEmpty()
  @IsString()
  fileName: string;

  @ApiProperty({ description: 'File MIME type' })
  @IsNotEmpty()
  @IsString()
  mimeType: string;

  @ApiProperty({ description: 'File size in bytes' })
  @IsNotEmpty()
  @IsNumber()
  fileSize: number;
}

export class UpdateDocumentStatusDto {
  @ApiProperty({ enum: DocumentStatus, description: 'New document status' })
  @IsNotEmpty()
  @IsEnum(DocumentStatus)
  status: DocumentStatus;

  @ApiPropertyOptional({ description: 'Reason for rejection (required when rejecting)' })
  @IsOptional()
  @IsString()
  rejectionReason?: string;

  @ApiPropertyOptional({ description: 'User ID performing the action' })
  @IsOptional()
  @IsUUID()
  verifiedBy?: string;
}

export class CreateTimelineEventDto {
  @ApiProperty({ description: 'Application ID this event belongs to' })
  @IsNotEmpty()
  @IsUUID()
  applicationId: string;

  @ApiProperty({ description: 'Type of event' })
  @IsNotEmpty()
  @IsString()
  eventType: string;

  @ApiProperty({ description: 'Event description' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiPropertyOptional({ description: 'User who performed the action' })
  @IsOptional()
  @IsUUID()
  performedBy?: string;

  @ApiPropertyOptional({ description: 'Additional metadata' })
  @IsOptional()
  metadata?: Record<string, unknown>;
}

export class OnboardingStatsDto {
  @ApiProperty({ description: 'Total number of applications' })
  totalApplications: number;

  @ApiProperty({ description: 'Number of submitted applications' })
  submittedApplications: number;

  @ApiProperty({ description: 'Number of applications under review' })
  underReviewApplications: number;

  @ApiProperty({ description: 'Number of approved applications' })
  approvedApplications: number;

  @ApiProperty({ description: 'Number of rejected applications' })
  rejectedApplications: number;

  @ApiProperty({ description: 'Number of onboarded applications' })
  onboardedApplications: number;
}
