/**
 * Room Move Pricing NATS Contracts
 *
 * NATS Patterns:
 * - room-move.pricing.calculate
 * - room-move.pricing.quick-estimate
 * Handler: pricing-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMovePricingDetails } from '../types';
/**
 * Calculate Room Move Pricing Request
 * Pattern: room-move.pricing.calculate
 */
export declare class CalculateRoomMovePricingRequest {
    bookingId: string;
    currentRoomId: string;
    targetRoomId: string;
    checkInDate?: string;
    checkOutDate?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type CalculateRoomMovePricingNatsResponse = NatsResponse<RoomMovePricingDetails>;
/**
 * Quick Room Move Pricing Estimate Request
 * Pattern: room-move.pricing.quick-estimate
 * Faster calculation with fewer details
 */
export declare class QuickRoomMovePricingEstimateRequest {
    currentRoomId: string;
    targetRoomId: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type QuickRoomMovePricingEstimateNatsResponse = NatsResponse<RoomMovePricingDetails>;
//# sourceMappingURL=room-move-pricing.nats.d.ts.map