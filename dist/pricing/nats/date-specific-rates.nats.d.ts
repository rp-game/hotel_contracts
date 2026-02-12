/**
 * Date-Specific Rates NATS Contracts (7 patterns)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { SpecificDateRate, SpecificDateRateCalendar, BulkCreateDateRatesResult } from '../types';
/**
 * Request to find all date-specific rates
 */
export declare class FindAllDateRatesRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
}
/**
 * Request to find date-specific rate by ID
 */
export declare class FindDateRateByIdRequest {
    id: string;
    tenantId: string;
}
/**
 * Request to get calendar view of date rates
 */
export declare class FindDateRateCalendarRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    startDate: string;
    endDate: string;
}
/**
 * Request to create a date-specific rate
 */
export declare class CreateSpecificDateRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    date: string;
    rate: number;
    currency?: string;
    notes?: string;
    isActive?: boolean;
}
/**
 * Single date-rate entry for bulk create
 */
export declare class DateRateEntry {
    date: string;
    rate: number;
    notes?: string;
}
/**
 * Request to bulk create date-specific rates
 */
export declare class BulkCreateSpecificDateRatesRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    rates: DateRateEntry[];
    currency?: string;
}
/**
 * DTO for update body (partial fields only)
 */
export declare class UpdateDateRateDto {
    rate?: number;
    notes?: string;
    isActive?: boolean;
}
/**
 * Request to update a date-specific rate (NATS)
 */
export declare class UpdateDateRateRequest {
    id: string;
    tenantId: string;
    dto: UpdateDateRateDto;
}
/**
 * Request to delete a date-specific rate
 */
export declare class DeleteDateRateRequest {
    id: string;
    tenantId: string;
}
/**
 * Response for finding all date-specific rates
 */
export declare class FindAllDateRatesResponse {
    data: SpecificDateRate[];
}
export type FindAllDateRatesNatsResponse = NatsResponse<FindAllDateRatesResponse>;
/**
 * Response for finding date-specific rate by ID
 */
export declare class FindDateRateByIdResponse {
    data: SpecificDateRate;
}
export type FindDateRateByIdNatsResponse = NatsResponse<FindDateRateByIdResponse>;
/**
 * Response for calendar view
 */
export declare class FindDateRateCalendarResponse {
    data: SpecificDateRateCalendar;
}
export type FindDateRateCalendarNatsResponse = NatsResponse<FindDateRateCalendarResponse>;
/**
 * Response for creating a date-specific rate
 */
export declare class CreateSpecificDateRateResponse {
    data: SpecificDateRate;
    message: string;
}
export type CreateSpecificDateRateNatsResponse = NatsResponse<CreateSpecificDateRateResponse>;
/**
 * Response for bulk creating date-specific rates
 */
export declare class BulkCreateSpecificDateRatesResponse {
    data: BulkCreateDateRatesResult;
    message: string;
}
export type BulkCreateSpecificDateRatesNatsResponse = NatsResponse<BulkCreateSpecificDateRatesResponse>;
/**
 * Response for updating a date-specific rate
 */
export declare class UpdateDateRateResponse {
    data: SpecificDateRate;
    message: string;
}
export type UpdateDateRateNatsResponse = NatsResponse<UpdateDateRateResponse>;
/**
 * Response for deleting a date-specific rate
 */
export declare class DeleteDateRateResponse {
    message: string;
}
export type DeleteDateRateNatsResponse = NatsResponse<DeleteDateRateResponse>;
//# sourceMappingURL=date-specific-rates.nats.d.ts.map