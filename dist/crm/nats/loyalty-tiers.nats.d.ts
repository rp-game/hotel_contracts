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
export declare class TierBenefitsNatsResponse {
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
export declare class LoyaltyTierNatsResponse {
    id: string;
    tenantId: string;
    programId: string;
    name: string;
    minimumPoints: number;
    pointsMultiplier: number;
    multiplier?: number;
    benefits?: TierBenefitsNatsResponse;
    order: number;
    isActive: boolean;
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
/**
 * Find All Loyalty Tiers Response DTO
 * Used for both NATS messaging and REST API responses
 */
export declare class FindAllLoyaltyTiersDto {
    tiers: LoyaltyTierNatsResponse[];
    total: number;
}
//# sourceMappingURL=loyalty-tiers.nats.d.ts.map