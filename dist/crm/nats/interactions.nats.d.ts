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
 * Interaction Type Enum
 */
export declare enum InteractionType {
    EMAIL = "EMAIL",
    CALL = "CALL",
    SMS = "SMS",
    IN_PERSON = "IN_PERSON",
    CHAT = "CHAT",
    SOCIAL_MEDIA = "SOCIAL_MEDIA",
    BOOKING = "BOOKING",
    FEEDBACK = "FEEDBACK",
    COMPLAINT = "COMPLAINT",
    INQUIRY = "INQUIRY"
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
 * Customer Interaction Response
 */
export interface CustomerInteractionNatsResponse {
    id: string;
    tenantId: string;
    customerId: string;
    type: InteractionType;
    subject?: string;
    description: string;
    channel: string;
    status: string;
    priority?: string;
    assignedTo?: string;
    metadata?: Record<string, any>;
    createdAt: string | Date;
    updatedAt: string | Date;
    notes?: string;
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