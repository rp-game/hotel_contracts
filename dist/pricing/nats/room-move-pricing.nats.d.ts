/**
 * Room Move Pricing NATS Contracts
 *
 * Handles pricing calculations for room moves, upgrades, and downgrades.
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * NATS Pattern: room-move.pricing.calculate
 */
export interface CalculateMovePricingRequest {
    tenantId: string;
    hotelId: string;
    bookingId: string;
    currentRoomId: string;
    currentRoomTypeId: string;
    targetRoomId: string;
    targetRoomTypeId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    nights: number;
    moveRequestId: string;
    reason?: string;
    priority?: string;
}
export interface MovePricingResult {
    moveRequestId: string;
    currentRoomPricing: any;
    targetRoomPricing: any;
    priceDifference: number;
    totalPriceDifference: number;
    isUpgrade: boolean;
    isDowngrade: boolean;
    requiresPayment: boolean;
    refundAmount: number;
    additionalCharges: number;
    breakdown: {
        currentRoomTotal: number;
        targetRoomTotal: number;
        rateDifference: number;
        perNightDifference: number;
        adjustments: any;
    };
    recommendations: {
        requiresGuestApproval: boolean;
        shouldChargeGuest: boolean;
        shouldOfferCompensation: boolean;
        recommendedAction: string;
    };
}
export interface CalculateMovePricingResponse {
    data: MovePricingResult;
}
export type CalculateMovePricingNatsResponse = NatsResponse<MovePricingResult>;
/**
 * NATS Pattern: room-move.pricing.quick-estimate
 */
export interface QuickPricingEstimateRequest {
    tenantId: string;
    hotelId: string;
    currentRoomTypeId: string;
    targetRoomTypeId: string;
    checkIn: string;
    checkOut: string;
    nights: number;
    guests?: number;
}
export interface QuickPricingEstimate {
    currentRoomRate: number;
    targetRoomRate: number;
    priceDifference: number;
    isUpgrade: boolean;
    estimatedAdditionalCharge: number;
    estimatedRefund: number;
}
export interface QuickPricingEstimateResponse {
    data: QuickPricingEstimate;
}
export type QuickPricingEstimateNatsResponse = NatsResponse<QuickPricingEstimate>;
/**
 * NATS Pattern: room-move.pricing.validate
 */
export interface ValidateMovePricingRequest {
    moveRequestId: string;
    tenantId: string;
    hotelId: string;
    expectedAmount?: number;
}
export interface ValidateMovePricingResult {
    isValid: boolean;
    reason?: string;
}
export interface ValidateMovePricingResponse {
    data: ValidateMovePricingResult;
}
export type ValidateMovePricingNatsResponse = NatsResponse<ValidateMovePricingResult>;
/**
 * NATS Pattern: room-move.pricing.compensation
 */
export interface CalculateCompensationRequest {
    moveRequestId: string;
    tenantId: string;
    hotelId: string;
    moveType: 'upgrade' | 'downgrade';
    compensationType?: 'refund' | 'credit' | 'none';
}
export interface CompensationCalculation {
    moveType: 'upgrade' | 'downgrade';
    compensationType: 'refund' | 'credit' | 'none';
    amount: number;
    currency: string;
    breakdown: {
        baseAmount: number;
        adjustments: Array<{
            type: string;
            amount: number;
            reason: string;
        }>;
    };
    recommendations: {
        suggestedCompensationType: 'refund' | 'credit' | 'none';
        reasoning: string;
    };
}
export interface CalculateCompensationResponse {
    data: CompensationCalculation;
}
export type CalculateCompensationNatsResponse = NatsResponse<CompensationCalculation>;
/**
 * NATS Pattern: room-move.pricing.history
 */
export interface GetMovePricingHistoryRequest {
    tenantId: string;
    hotelId: string;
    bookingId?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export interface MovePricingHistoryEntry {
    id: string;
    moveRequestId: string;
    bookingId: string;
    tenantId: string;
    hotelId: string;
    currentRoomTypeId: string;
    targetRoomTypeId: string;
    priceDifference: number;
    moveType: 'upgrade' | 'downgrade' | 'lateral';
    createdAt: string;
    appliedAt?: string;
}
export interface GetMovePricingHistoryResponse {
    data: MovePricingHistoryEntry[];
    total: number;
    page: number;
    limit: number;
}
export type GetMovePricingHistoryNatsResponse = NatsResponse<GetMovePricingHistoryResponse>;
//# sourceMappingURL=room-move-pricing.nats.d.ts.map