/**
 * Promotions NATS Contracts - Centralized
 *
 * IMPORTANT: These are the SINGLE SOURCE OF TRUTH for NATS messaging
 * - Used by pricing-service NATS handlers
 * - Used by API Gateway NATS clients
 * - All classes have validators for runtime safety
 *
 * @verified_date 2026-02-13
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { PromotionDto, PromotionsPaginatedResponseDto, PromotionStatus, PromotionConditionsDto } from '../types';
/**
 * Get promotions request with pagination and filtering
 */
export declare class GetPromotionsRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
    checkIn?: string;
    checkOut?: string;
    promoCode?: string;
    status?: PromotionStatus;
    isActive?: boolean;
    discountType?: 'PERCENTAGE' | 'FIXED';
    search?: string;
    page?: number;
    limit?: number;
}
/**
 * Create promotion request
 */
export declare class CreatePromotionRequest {
    tenantId: string;
    hotelId: string;
    name: string;
    code: string;
    description?: string;
    startDate: string;
    endDate: string;
    discountType: 'PERCENTAGE' | 'FIXED';
    discountValue: number;
    applicableRoomTypes?: string[];
    applicableChannels?: string[];
    minimumStay?: number;
    maximumStay?: number;
    minimumAdvanceBookingDays?: number;
    maximumAdvanceBookingDays?: number;
    blackoutDates?: string[];
    usageLimit?: number;
    conditions?: PromotionConditionsDto;
    isActive?: boolean;
}
/**
 * Update promotion request
 * All fields optional except ID
 */
export declare class UpdatePromotionRequest {
    id: string;
    tenantId: string;
    name?: string;
    code?: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    discountType?: 'PERCENTAGE' | 'FIXED';
    discountValue?: number;
    applicableRoomTypes?: string[];
    applicableChannels?: string[];
    minimumStay?: number;
    maximumStay?: number;
    minimumAdvanceBookingDays?: number;
    maximumAdvanceBookingDays?: number;
    blackoutDates?: string[];
    usageLimit?: number;
    conditions?: PromotionConditionsDto;
    isActive?: boolean;
}
/**
 * Delete promotion request
 */
export declare class DeletePromotionRequest {
    id: string;
    tenantId: string;
}
/**
 * Validate promotion code request
 */
export declare class ValidatePromotionRequest {
    tenantId: string;
    hotelId: string;
    promotionCode: string;
    roomTypeId: string;
    checkIn: string;
    checkOut: string;
    bookingAmount: number;
}
/**
 * Validate promotion response
 */
export declare class ValidatePromotionResponse {
    isValid: boolean;
    promotionId?: string;
    promoCode: string;
    discountType?: 'PERCENTAGE' | 'FIXED';
    discountValue?: number;
    message?: string;
    applicableAmount?: number;
    finalAmount?: number;
}
/**
 * Delete promotion response
 */
export declare class DeletePromotionResponse {
    success: boolean;
    message?: string;
}
export type GetPromotionsNatsResponse = NatsResponse<PromotionsPaginatedResponseDto>;
export type GetPromotionByIdNatsResponse = NatsResponse<PromotionDto>;
export type CreatePromotionNatsResponse = NatsResponse<PromotionDto>;
export type UpdatePromotionNatsResponse = NatsResponse<PromotionDto>;
export type DeletePromotionNatsResponse = NatsResponse<DeletePromotionResponse>;
export type ValidatePromotionNatsResponse = NatsResponse<ValidatePromotionResponse>;
export type GetPromotionsRequest_Legacy = GetPromotionsRequest;
export type GetPromotionsResponse = PromotionsPaginatedResponseDto;
//# sourceMappingURL=promotions.nats.d.ts.map