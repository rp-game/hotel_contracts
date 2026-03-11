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
//# sourceMappingURL=occupancy.nats.d.ts.map