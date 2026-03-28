import { NatsResponse } from '../../common/nats-response.interface';
/**
 * NATS Pattern: booking.occupancy.current
 */
export declare class GetHotelOccupancyNatsRequest {
    tenantId: string;
    hotelId: string;
    date: string;
}
export declare class HotelOccupancyNatsResponseData {
    total: number;
    occupied: number;
    available: number;
    outOfOrder: number;
    checkingOut: number;
    checkingIn: number;
    cleaning: number;
}
export type GetHotelOccupancyNatsResponse = NatsResponse<HotelOccupancyNatsResponseData>;
/**
 * NATS Pattern: bookings.stats.roomNights
 * Returns total occupied room nights in a date range
 */
export declare class GetRoomNightsRequest {
    tenantId: string;
    hotelId: string;
    dateFrom: string;
    dateTo: string;
}
export declare class GetRoomNightsResponseData {
    roomNights: number;
}
export type GetRoomNightsNatsResponse = NatsResponse<GetRoomNightsResponseData>;
//# sourceMappingURL=occupancy.nats.d.ts.map