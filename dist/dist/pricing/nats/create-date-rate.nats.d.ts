/**
 * Create Date Rate NATS Contract
 *
 * NATS Pattern: pricing.date-rate.create
 * Handler: pricing-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { DateRate } from '../types';
/**
 * NATS request to create a date rate
 */
export interface CreateDateRateRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    roomTypeId: string;
    date: string;
    pricePerNight: number;
    minStay?: number;
    maxStay?: number;
    status?: 'ACTIVE' | 'BLOCKED' | 'CLOSED';
    createdBy: string;
}
/**
 * NATS response after creating date rate
 */
export interface CreateDateRateResponse {
    id: string;
    dateRate: DateRate;
}
/**
 * Type-safe NATS response wrapper
 */
export type CreateDateRateNatsResponse = NatsResponse<CreateDateRateResponse>;
/**
 * NATS request to create multiple date rates (bulk)
 */
export interface BulkCreateDateRateRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    roomTypeId: string;
    rates: Array<{
        date: string;
        pricePerNight: number;
        minStay?: number;
        maxStay?: number;
        status?: 'ACTIVE' | 'BLOCKED' | 'CLOSED';
    }>;
    createdBy: string;
}
/**
 * NATS response after bulk creating date rates
 */
export interface BulkCreateDateRateResponse {
    totalCreated: number;
    dateRates: DateRate[];
}
/**
 * Type-safe NATS response wrapper for bulk
 */
export type BulkCreateDateRateNatsResponse = NatsResponse<BulkCreateDateRateResponse>;
//# sourceMappingURL=create-date-rate.nats.d.ts.map