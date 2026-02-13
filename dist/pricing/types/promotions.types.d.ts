/**
 * Promotions Types - Centralized Contracts
 *
 * IMPORTANT: These contracts are the SINGLE SOURCE OF TRUTH
 * - Based on database entity structure (promotion.entity.ts)
 * - Used by NATS handlers for microservices communication
 * - Used by API Gateway for REST endpoints
 * - Swagger documentation generated from @ApiProperty decorators
 *
 * @verified_structure_matches services/pricing-service/src/database/entities/promotion.entity.ts
 * @verified_date 2026-02-13
 */
/**
 * Promotion status (computed field, not stored in entity)
 */
export type PromotionStatus = 'ACTIVE' | 'INACTIVE' | 'EXPIRED' | 'UPCOMING';
/**
 * Promotion conditions structure
 * Stored as JSONB in database
 */
export declare class PromotionConditionsDto {
    minNights?: number;
    minGuests?: number;
    roomTypes?: string[];
    channels?: string[];
}
/**
 * Promotion DTO
 * Matches database entity structure exactly
 * PLUS computed 'status' field added by service layer
 */
export declare class PromotionDto {
    id: string;
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
    usageLimit: number;
    usageCount: number;
    conditions?: PromotionConditionsDto;
    isActive: boolean;
    status: PromotionStatus;
    createdAt: string;
    updatedAt: string;
}
/**
 * Paginated promotions response
 */
export declare class PromotionsPaginatedResponseDto {
    data: PromotionDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export type Promotion = PromotionDto;
export type PromotionConditions = PromotionConditionsDto;
export type PromotionsPaginatedResponse = PromotionsPaginatedResponseDto;
//# sourceMappingURL=promotions.types.d.ts.map