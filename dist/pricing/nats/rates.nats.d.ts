/**
 * Rates Core NATS Contracts
 *
 * Handles base rate management, dynamic calculations, and bulk operations.
 * Core pricing module for room rates and restrictions.
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { Rate, DynamicRateCalculation, BulkCreateRatesResult, BulkUpdateRatesResult } from '../types';
/**
 * NATS Pattern: pricing.rates.get
 *
 * Get rates with filtering and pagination
 */
export interface GetRatesRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
    checkIn?: string;
    startDate?: string;
    checkOut?: string;
    endDate?: string;
    guests?: number;
    channel?: string;
    page?: number;
    limit?: number;
}
export interface GetRatesResponse {
    data: Rate[];
    total?: number;
    page?: number;
    limit?: number;
}
export type GetRatesNatsResponse = NatsResponse<GetRatesResponse>;
/**
 * NATS Pattern: pricing.rates.calculate
 *
 * Calculate rate for a booking with all adjustments applied
 */
export interface CalculateRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    checkIn: string;
    checkOut: string;
    guests?: number;
    channel?: string;
    promoCode?: string;
    corporateId?: string;
    loyaltyId?: string;
    bookingType?: string;
    startTime?: string;
    endTime?: string;
}
export interface CalculateRateResponse {
    data: DynamicRateCalculation;
}
export type CalculateRateNatsResponse = NatsResponse<CalculateRateResponse>;
/**
 * NATS Pattern: pricing.rates.update
 */
export interface UpdateRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    ratePlanId?: string;
    baseRate: number;
    startDate: string;
    endDate: string;
}
export interface UpdateRateResponse {
    data: Rate;
}
export type UpdateRateNatsResponse = NatsResponse<UpdateRateResponse>;
/**
 * NATS Pattern: pricing.rates.sync
 */
export interface SyncRatesRequest {
    tenantId: string;
    hotelId: string;
    roomTypeIds?: string[];
    source?: string;
    forceSync?: boolean;
}
export interface SyncRatesResponse {
    data: {
        synced: number;
        skipped: number;
        errors: number;
    };
}
export type SyncRatesNatsResponse = NatsResponse<SyncRatesResponse>;
/**
 * NATS Pattern: pricing.rates.getById
 */
export interface GetRateByIdRequest {
    id: string;
    tenantId: string;
}
export interface GetRateByIdResponse {
    data: Rate;
}
export type GetRateByIdNatsResponse = NatsResponse<GetRateByIdResponse>;
/**
 * NATS Pattern: pricing.rates.create
 */
export interface CreateRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    ratePlanId?: string;
    baseRate: number;
    startDate: string;
    endDate: string;
    isActive?: boolean;
}
export interface CreateRateResponse {
    data: Rate;
}
export type CreateRateNatsResponse = NatsResponse<CreateRateResponse>;
/**
 * NATS Pattern: pricing.rates.updateById
 */
export interface UpdateRateByIdRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    ratePlanId?: string;
    baseRate?: number;
    startDate?: string;
    endDate?: string;
}
export interface UpdateRateByIdResponse {
    data: Rate;
}
export type UpdateRateByIdNatsResponse = NatsResponse<UpdateRateByIdResponse>;
/**
 * NATS Pattern: pricing.rates.delete
 */
export interface DeleteRateRequest {
    id: string;
    tenantId: string;
}
export interface DeleteRateResponse {
    success: boolean;
    message: string;
}
export type DeleteRateNatsResponse = NatsResponse<DeleteRateResponse>;
/**
 * NATS Pattern: pricing.rates.getByRoomType
 */
export interface GetRatesByRoomTypeRequest {
    roomTypeId: string;
    query: {
        startDate?: string;
        endDate?: string;
        ratePlanId?: string;
    };
}
export interface GetRatesByRoomTypeResponse {
    data: Rate[];
}
export type GetRatesByRoomTypeNatsResponse = NatsResponse<GetRatesByRoomTypeResponse>;
/**
 * NATS Pattern: pricing.rates.bulk.create
 */
export interface BulkCreateRatesRequest {
    tenantId: string;
    hotelId: string;
    rates: Array<{
        roomTypeId: string;
        ratePlanId?: string;
        baseRate: number;
        dateFrom: string;
        dateTo: string;
        status?: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
    }>;
}
export interface BulkCreateRatesResponse {
    data: BulkCreateRatesResult;
}
export type BulkCreateRatesNatsResponse = NatsResponse<BulkCreateRatesResponse>;
/**
 * NATS Pattern: pricing.rates.bulk.update
 */
export interface BulkUpdateRatesRequest {
    tenantId: string;
    hotelId: string;
    updates: Array<{
        id: string;
        data: {
            baseRate?: number;
            effectiveFrom?: string;
            effectiveTo?: string;
        };
    }>;
}
export interface BulkUpdateRatesResponse {
    data: BulkUpdateRatesResult;
}
export type BulkUpdateRatesNatsResponse = NatsResponse<BulkUpdateRatesResponse>;
/**
 * NATS Pattern: pricing.rates.dynamic.calculate
 */
export interface CalculateDynamicRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    checkIn: string;
    checkOut: string;
    guests?: number;
}
export interface CalculateDynamicRateResponse {
    data: DynamicRateCalculation;
}
export type CalculateDynamicRateNatsResponse = NatsResponse<CalculateDynamicRateResponse>;
/**
 * NATS Pattern: pricing.rate.update
 */
export interface RateUpdateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    ratePlanId: string;
    date: string;
    basePrice: number;
    extraAdultCharge?: number;
    extraChildCharge?: number;
    source: string;
    trackingId?: string;
}
export interface RateUpdateResponse {
    success: boolean;
    message: string;
    source: string;
}
export type RateUpdateNatsResponse = NatsResponse<RateUpdateResponse>;
/**
 * NATS Pattern: pricing.restrictions.update
 */
export interface RestrictionsUpdateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    ratePlanId: string;
    date: string;
    restrictions: {
        minStay: number;
        maxStay: number;
        closedToArrival: boolean;
        closedToDeparture: boolean;
        stopSell: boolean;
    };
    source: string;
    trackingId?: string;
}
export interface RestrictionsUpdateResponse {
    success: boolean;
    message: string;
    source: string;
    reason?: string;
}
export type RestrictionsUpdateNatsResponse = NatsResponse<RestrictionsUpdateResponse>;
//# sourceMappingURL=rates.nats.d.ts.map