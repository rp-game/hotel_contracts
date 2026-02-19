import { NatsResponse } from '../../common/nats-response.interface';
/**
 * NATS Pattern: booking.occupancy.current
 */
export interface GetHotelOccupancyNatsRequest {
    tenantId: string;
    hotelId: string;
    date: string;
}
export interface HotelOccupancyNatsResponseData {
    date: string;
    checkedIn: number;
    checkingOut: number;
    checkingIn: number;
    occupancyRate: number;
}
export type GetHotelOccupancyNatsResponse = NatsResponse<HotelOccupancyNatsResponseData>;
//# sourceMappingURL=occupancy.nats.d.ts.map