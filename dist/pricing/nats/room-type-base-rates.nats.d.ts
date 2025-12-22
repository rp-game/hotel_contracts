/**
 * Room Type Base Rates NATS Contracts (5 patterns)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomTypeBaseRate } from '../types';
export interface FindAllRoomTypeBaseRatesRequest {
    tenantId: string;
    hotelId: string;
}
export interface FindAllRoomTypeBaseRatesResponse {
    data: RoomTypeBaseRate[];
}
export type FindAllRoomTypeBaseRatesNatsResponse = NatsResponse<FindAllRoomTypeBaseRatesResponse>;
export interface FindOneRoomTypeBaseRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
}
export interface FindOneRoomTypeBaseRateResponse {
    data: RoomTypeBaseRate;
}
export type FindOneRoomTypeBaseRateNatsResponse = NatsResponse<FindOneRoomTypeBaseRateResponse>;
export interface UpsertRoomTypeBaseRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    baseRate: number;
    weekdayRate?: number;
    weekendRate?: number;
    useWeekdayWeekend?: boolean;
    hourlyRate?: number;
    currency?: string;
    isActive?: boolean;
}
export interface UpsertRoomTypeBaseRateResponse {
    data: RoomTypeBaseRate;
    message: string;
}
export type UpsertRoomTypeBaseRateNatsResponse = NatsResponse<UpsertRoomTypeBaseRateResponse>;
export interface RemoveRoomTypeBaseRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
}
export interface RemoveRoomTypeBaseRateResponse {
    message: string;
}
export type RemoveRoomTypeBaseRateNatsResponse = NatsResponse<RemoveRoomTypeBaseRateResponse>;
export interface BulkUpsertRoomTypeBaseRatesRequest {
    tenantId: string;
    hotelId: string;
    rates: Array<{
        roomTypeId: string;
        baseRate: number;
        currency?: string;
    }>;
}
export interface BulkUpsertRoomTypeBaseRatesResponse {
    data: RoomTypeBaseRate[];
    message: string;
}
export type BulkUpsertRoomTypeBaseRatesNatsResponse = NatsResponse<BulkUpsertRoomTypeBaseRatesResponse>;
//# sourceMappingURL=room-type-base-rates.nats.d.ts.map