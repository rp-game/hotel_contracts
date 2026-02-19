/**
 * Interactions NATS Contracts
 *
 * Patterns:
 * - crm.interaction.create
 * - crm.interaction.findAll
 * - crm.interaction.findOne
 * - crm.interaction.update
 * - crm.interaction.remove
 *
 * Handler: crm-service (InteractionsController)
 * Called by: api-gateway (CrmController)
 */

import { NatsResponse } from '../../common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Interaction Type Enum
 */
export enum InteractionType {
  EMAIL = 'EMAIL',
  CALL = 'CALL',
  SMS = 'SMS',
  IN_PERSON = 'IN_PERSON',
  CHAT = 'CHAT',
  SOCIAL_MEDIA = 'SOCIAL_MEDIA',
  BOOKING = 'BOOKING',
  FEEDBACK = 'FEEDBACK',
  COMPLAINT = 'COMPLAINT',
  INQUIRY = 'INQUIRY',
}

/**
 * Create Interaction Request
 * Pattern: crm.interaction.create
 */
export interface CreateInteractionNatsRequest {
  tenantId: string;
  customerId: string;
  type: InteractionType;
  subject?: string;
  description: string;
  channel: string;
  status?: string;
  priority?: string;
  assignedTo?: string;
  metadata?: Record<string, any>;
}

/**
 * Update Interaction Request
 * Pattern: crm.interaction.update
 */
export interface UpdateInteractionNatsRequest {
  tenantId: string;
  interactionId: string;
  updateDto: Partial<CreateInteractionNatsRequest>;
}

/**
 * Attachment Response
 */
export class AttachmentNatsResponse {
  @ApiProperty({ description: 'Attachment ID' })
  id!: string;

  @ApiProperty({ description: 'Original filename' })
  filename!: string;

  @ApiProperty({ description: 'File URL or path' })
  url!: string;

  @ApiProperty({ description: 'File MIME type' })
  mimeType!: string;

  @ApiProperty({ description: 'File size in bytes' })
  size!: number;

  @ApiPropertyOptional({ description: 'File description' })
  description?: string;

  @ApiProperty({ description: 'Upload timestamp' })
  uploadedAt!: string;
}

/**
 * Customer Interaction Response (Extended for API Gateway compatibility)
 */
export class CustomerInteractionNatsResponse {
  @ApiProperty({ description: 'Interaction ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;

  @ApiProperty({ description: 'Customer ID' })
  customerId!: string;

  @ApiProperty({
    description: 'Interaction type',
    enum: ['INQUIRY', 'COMPLAINT', 'COMPLIMENT', 'BOOKING', 'CANCELLATION', 'SUPPORT', 'FEEDBACK', 'FOLLOW_UP']
  })
  interactionType!: string;

  @ApiProperty({
    description: 'Interaction channel',
    enum: ['EMAIL', 'PHONE', 'IN_PERSON', 'WEBSITE', 'SOCIAL_MEDIA', 'CHAT', 'MOBILE_APP']
  })
  channel!: string;

  @ApiProperty({ description: 'Interaction date (ISO string)' })
  interactionDate!: string;

  @ApiProperty({ description: 'Interaction subject' })
  subject!: string;

  @ApiPropertyOptional({ description: 'Detailed notes about the interaction' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Staff member ID who handled the interaction' })
  staffId?: string;

  @ApiPropertyOptional({ description: 'Staff member name' })
  staffName?: string;

  @ApiPropertyOptional({
    description: 'Customer satisfaction rating (1-5 scale)',
    minimum: 1,
    maximum: 5
  })
  satisfactionRating?: number;

  @ApiProperty({ description: 'Whether follow-up is required' })
  followUpRequired!: boolean;

  @ApiPropertyOptional({ description: 'Follow-up date (ISO string)' })
  followUpDate?: string;

  @ApiProperty({
    description: 'Resolution status',
    enum: ['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'],
    default: 'OPEN'
  })
  resolutionStatus!: string;

  @ApiPropertyOptional({ description: 'Resolution notes' })
  resolutionNotes?: string;

  @ApiPropertyOptional({ description: 'Tags associated with the interaction', type: [String] })
  tags?: string[];

  @ApiPropertyOptional({ description: 'File attachments', type: [AttachmentNatsResponse] })
  attachments?: AttachmentNatsResponse[];

  @ApiProperty({ description: 'Creation timestamp (ISO string)', type: String })
  createdAt!: string | Date;

  @ApiProperty({ description: 'Last update timestamp (ISO string)', type: String })
  updatedAt!: string | Date;

  @ApiPropertyOptional({ description: 'Created by user ID' })
  createdBy?: string;

  @ApiPropertyOptional({ description: 'Updated by user ID' })
  updatedBy?: string;

  // Legacy fields for backward compatibility
  @ApiProperty({ enum: InteractionType, description: 'Interaction type (legacy)' })
  type!: InteractionType;

  @ApiPropertyOptional({ description: 'Description (legacy)' })
  description?: string;

  @ApiProperty({ description: 'Status (legacy)' })
  status!: string;

  @ApiPropertyOptional({ description: 'Priority level (legacy)' })
  priority?: string;

  @ApiPropertyOptional({ description: 'Assigned to user ID (legacy)' })
  assignedTo?: string;

  @ApiPropertyOptional({ description: 'Metadata (legacy)' })
  metadata?: Record<string, any>;
}

/**
 * Interactions List Response (for CRM customer interactions endpoint)
 */
export class InteractionsListNatsResponse {
  @ApiProperty({ description: 'List of customer interactions', type: [CustomerInteractionNatsResponse] })
  data!: CustomerInteractionNatsResponse[];

  @ApiProperty({ description: 'Total number of interactions' })
  total!: number;

  @ApiProperty({ description: 'Current page number' })
  page!: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit!: number;
}

/**
 * Create Interaction Response
 */
export type CreateInteractionNatsResponse = NatsResponse<CustomerInteractionNatsResponse>;

/**
 * Find All Interactions Request
 * Pattern: crm.interaction.findAll
 */
export interface FindAllInteractionsNatsRequest {
  tenantId: string;
  customerId?: string;
  type?: InteractionType;
  status?: string;
  page?: number;
  limit?: number;
}

/**
 * Find All Interactions Response
 */
export type FindAllInteractionsNatsResponse = NatsResponse<{
  data: CustomerInteractionNatsResponse[];
  total: number;
  page: number;
  limit: number;
}>;

/**
 * Find One Interaction Request
 * Pattern: crm.interaction.findOne
 */
export interface FindOneInteractionNatsRequest {
  tenantId: string;
  interactionId: string;
}

/**
 * Find One Interaction Response
 */
export type FindOneInteractionNatsResponse = NatsResponse<CustomerInteractionNatsResponse>;

/**
 * Update Interaction Response
 */
export type UpdateInteractionNatsResponse = NatsResponse<CustomerInteractionNatsResponse>;

/**
 * Remove Interaction Request
 * Pattern: crm.interaction.remove
 */
export interface RemoveInteractionNatsRequest {
  tenantId: string;
  interactionId: string;
}

/**
 * Remove Interaction Response
 */
export type RemoveInteractionNatsResponse = NatsResponse<{ success: boolean }>;
