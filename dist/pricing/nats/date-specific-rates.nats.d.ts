/**
 * Date-Specific Rates NATS Contracts (7 patterns)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { SpecificDateRate, SpecificDateRateCalendar, BulkCreateDateRatesResult } from '../types';
export interface FindAllDateRatesRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
}
export interface FindAllDateRatesResponse {
    data: SpecificDateRate[];
}
export type FindAllDateRatesNatsResponse = NatsResponse<FindAllDateRatesResponse>;
export interface FindDateRateByIdRequest {
    id: string;
    tenantId: string;
}
export interface FindDateRateByIdResponse {
    data: SpecificDateRate;
}
export type FindDateRateByIdNatsResponse = NatsResponse<FindDateRateByIdResponse>;
export interface FindDateRateCalendarRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    startDate: string;
    endDate: string;
}
export interface FindDateRateCalendarResponse {
    data: SpecificDateRateCalendar;
}
export type FindDateRateCalendarNatsResponse = NatsResponse<FindDateRateCalendarResponse>;
export interface CreateSpecificDateRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    date: string;
    rate: number;
    currency?: string;
    notes?: string;
    isActive?: boolean;
}
export interface CreateSpecificDateRateResponse {
    data: SpecificDateRate;
    message: string;
}
export type CreateSpecificDateRateNatsResponse = NatsResponse<CreateSpecificDateRateResponse>;
export interface BulkCreateSpecificDateRatesRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    rates: Array<{
        date: string;
        rate: number;
        notes?: string;
    }>;
    currency?: string;
}
export interface BulkCreateSpecificDateRatesResponse {
    data: BulkCreateDateRatesResult;
    message: string;
}
export type BulkCreateSpecificDateRatesNatsResponse = NatsResponse<BulkCreateSpecificDateRatesResponse>;
export interface UpdateDateRateRequest {
    id: string;
    tenantId: string;
    rate?: number;
    notes?: string;
    isActive?: boolean;
}
export interface UpdateDateRateResponse {
    data: SpecificDateRate;
    message: string;
}
export type UpdateDateRateNatsResponse = NatsResponse<UpdateDateRateResponse>;
export interface DeleteDateRateRequest {
    id: string;
    tenantId: string;
}
export interface DeleteDateRateResponse {
    message: string;
}
export type DeleteDateRateNatsResponse = NatsResponse<DeleteDateRateResponse>;
//# sourceMappingURL=date-specific-rates.nats.d.ts.map