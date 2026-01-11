/**
 * Loyalty Tiers NATS Contracts
 *
 * Patterns:
 * - crm.loyalty_tier.findOneById
 *
 * Handler: crm-service (LoyaltyTiersController)
 * Called by: api-gateway (CrmController)
 */
import { NatsResponse } from '../../common';
/**
 * Tier Benefits
 */
export interface TierBenefitsNatsResponse {
    roomUpgrade?: boolean;
    lateCheckout?: boolean;
    discountPercentage?: string;
    freeServices?: string[];
    prioritySupport?: boolean;
    welcomeGift?: boolean;
    airportTransfer?: boolean;
    maxGuests?: number;
}
/**
 * Loyalty Tier Response
 */
export interface LoyaltyTierNatsResponse {
    id: string;
    programId: string;
    name: string;
    description?: string;
    minPoints: number;
    maxPoints?: number;
    benefits?: TierBenefitsNatsResponse;
    pointsMultiplier?: number;
    multiplier?: number;
    tierOrder: number;
    color?: string;
    icon?: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Find One Tier By Id Request
 * Pattern: crm.loyalty_tier.findOneById
 */
export interface FindOneTierByIdNatsRequest {
    tierId: string;
    tenantId: string;
}
/**
 * Find One Tier By Id Response
 */
export type FindOneTierByIdNatsResponse = NatsResponse<LoyaltyTierNatsResponse>;
//# sourceMappingURL=loyalty-tiers.nats.d.ts.map