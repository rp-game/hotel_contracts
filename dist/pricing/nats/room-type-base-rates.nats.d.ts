/**
 * Room Type Base Rates NATS Contracts (5 patterns)
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomTypeBaseRate } from '../types';
export declare class FindAllRoomTypeBaseRatesRequest {
    tenantId: string;
    hotelId: string;
}
export declare class FindAllRoomTypeBaseRatesResponse {
    data: RoomTypeBaseRate[];
}
export type FindAllRoomTypeBaseRatesNatsResponse = NatsResponse<FindAllRoomTypeBaseRatesResponse>;
export declare class FindOneRoomTypeBaseRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
}
export declare class FindOneRoomTypeBaseRateResponse {
    data: RoomTypeBaseRate;
}
export type FindOneRoomTypeBaseRateNatsResponse = NatsResponse<FindOneRoomTypeBaseRateResponse>;
export declare class UpsertRoomTypeBaseRateRequest {
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
export declare class UpsertRoomTypeBaseRateResponse {
    data: RoomTypeBaseRate;
    message: string;
}
export type UpsertRoomTypeBaseRateNatsResponse = NatsResponse<UpsertRoomTypeBaseRateResponse>;
export declare class RemoveRoomTypeBaseRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
}
export declare class RemoveRoomTypeBaseRateResponse {
    message: string;
}
export type RemoveRoomTypeBaseRateNatsResponse = NatsResponse<RemoveRoomTypeBaseRateResponse>;
export declare class BulkRateItem {
    roomTypeId: string;
    baseRate: number;
    currency?: string;
}
export declare class BulkUpsertRoomTypeBaseRatesRequest {
    tenantId: string;
    hotelId: string;
    rates: BulkRateItem[];
}
export declare class BulkUpsertRoomTypeBaseRatesResponse {
    data: RoomTypeBaseRate[];
    message: string;
}
export type BulkUpsertRoomTypeBaseRatesNatsResponse = NatsResponse<BulkUpsertRoomTypeBaseRatesResponse>;
//# sourceMappingURL=room-type-base-rates.nats.d.ts.map