/**
 * Create Hourly Pricing NATS Contract
 *
 * NATS Pattern: pricing.hourly.create
 * Handler: pricing-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { HourlyPricingTier } from '../types';
/**
 * NATS request to create hourly pricing tier
 */
export interface CreateHourlyPricingRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    name: string;
    pricePerHour: number;
    currency: string;
    checkInTime: string;
    checkOutTime: string;
    maxStayHours?: number;
    minStayHours?: number;
    validFrom?: string;
    validTo?: string;
    createdBy: string;
}
/**
 * NATS response after creating hourly pricing
 */
export interface CreateHourlyPricingResponse {
    id: string;
    hourlyPricing: HourlyPricingTier;
}
/**
 * Type-safe NATS response wrapper
 */
export type CreateHourlyPricingNatsResponse = NatsResponse<CreateHourlyPricingResponse>;
/**
 * NATS request to update hourly pricing
 */
export interface UpdateHourlyPricingRequest {
    tenantId: string;
    hotelId: string;
    id: string;
    name?: string;
    pricePerHour?: number;
    checkInTime?: string;
    checkOutTime?: string;
    maxStayHours?: number;
    minStayHours?: number;
    status?: 'ACTIVE' | 'INACTIVE';
    updatedBy: string;
}
/**
 * NATS response after updating hourly pricing
 */
export interface UpdateHourlyPricingResponse {
    id: string;
    hourlyPricing: HourlyPricingTier;
}
/**
 * Type-safe NATS response wrapper for update
 */
export type UpdateHourlyPricingNatsResponse = NatsResponse<UpdateHourlyPricingResponse>;
//# sourceMappingURL=create-hourly-pricing.nats.d.ts.map