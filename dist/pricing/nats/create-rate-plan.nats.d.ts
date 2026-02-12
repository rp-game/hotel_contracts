/**
 * Create Rate Plan NATS Contract
 *
 * NATS Pattern: pricing.rate-plan.create
 * Handler: pricing-service
 * Called by: api-gateway
 *
 * @updated 2026-02-12 - Aligned with actual BASE/DERIVED implementation
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Rate plan type enum - BASE or DERIVED
 */
export declare enum RatePlanTypeEnum {
    BASE = "BASE",
    DERIVED = "DERIVED"
}
/**
 * Derivation type for DERIVED rate plans
 */
export declare enum DerivationTypeEnum {
    PERCENTAGE = "PERCENTAGE",
    AMOUNT = "AMOUNT"
}
/**
 * NATS request to create a rate plan
 * Used for both NATS messages and REST API
 */
export declare class CreateRatePlanRequest {
    tenantId: string;
    hotelId: string;
    name: string;
    type: RatePlanTypeEnum;
    parentRatePlanId?: string;
    derivationType?: DerivationTypeEnum;
    derivationValue?: number;
    description?: string;
}
/**
 * NATS response after creating rate plan
 */
export declare class CreateRatePlanResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    type: RatePlanTypeEnum;
    parentRatePlanId?: string;
    derivationType?: DerivationTypeEnum;
    derivationValue?: number;
    description?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type CreateRatePlanNatsResponse = NatsResponse<CreateRatePlanResponse>;
//# sourceMappingURL=create-rate-plan.nats.d.ts.map