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
/**
 * Interaction Type Enum — unified across all layers
 */
export declare enum InteractionType {
    NOTE = "NOTE",
    INQUIRY = "INQUIRY",
    COMPLAINT = "COMPLAINT",
    FEEDBACK = "FEEDBACK",
    STAY = "STAY",
    SERVICE_USAGE = "SERVICE_USAGE",
    LOYALTY_ACTION = "LOYALTY_ACTION",
    MARKETING_ENGAGEMENT = "MARKETING_ENGAGEMENT"
}
/**
 * Interaction Channel Enum — unified across all layers
 */
export declare enum InteractionChannel {
    PHONE_CALL = "PHONE_CALL",
    EMAIL = "EMAIL",
    WALK_IN = "WALK_IN",
    IN_PERSON = "IN_PERSON",
    CHAT = "CHAT",
    SOCIAL_MEDIA = "SOCIAL_MEDIA",
    SMS = "SMS"
}
/**
 * Create Interaction Request
 * Pattern: crm.interaction.create
 */
export declare class CreateInteractionNatsRequest {
    tenantId: string;
    hotelId?: string;
    customerId: string;
    interactionType: InteractionType;
    channel: InteractionChannel;
    interactionDate?: string;
    subject?: string;
    notes?: string;
    staffId?: string;
    staffName?: string;
    satisfactionRating?: number;
    resolutionStatus?: string;
    followUpRequired?: boolean;
    followUpDate?: string;
    tags?: string[];
    createdBy?: string;
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
export declare class AttachmentNatsResponse {
    id: string;
    filename: string;
    url: string;
    mimeType: string;
    size: number;
    description?: string;
    uploadedAt: string;
}
/**
 * Customer Interaction Response
 * Matches CustomerInteraction entity in crm-service
 */
export declare class CustomerInteractionNatsResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    customerId: string;
    interactionType: InteractionType;
    channel: InteractionChannel;
    interactionDate: Date;
    subject: string;
    notes?: string;
    staffId?: string;
    staffName?: string;
    satisfactionRating?: number;
    followUpRequired: boolean;
    followUpDate?: Date;
    resolutionStatus: string;
    resolutionNotes?: string;
    tags?: string[];
    createdAt: Date;
    updatedAt: Date;
    createdBy?: string;
    updatedBy?: string;
}
/**
 * Interactions List Response (for CRM customer interactions endpoint)
 */
export declare class InteractionsListNatsResponse {
    data: CustomerInteractionNatsResponse[];
    total: number;
    page: number;
    limit: number;
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
export type RemoveInteractionNatsResponse = NatsResponse<{
    success: boolean;
}>;
//# sourceMappingURL=interactions.nats.d.ts.map