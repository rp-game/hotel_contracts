import { NatsResponse } from '../../common';
export declare class GetBookingStatsNatsRequest {
    tenantId: string;
    hotelId: string;
    period?: 'week' | 'month' | 'year';
    startDate?: string;
    endDate?: string;
}
export declare class BookingStatusCountDto {
    status: string;
    count: number;
}
export declare class BookingStatsResponseDto {
    totalBookings: number;
    confirmedBookings: number;
    cancelledBookings: number;
    occupancyRate: number;
    averageStay: number;
    revenue: number;
    bookingsByStatus?: BookingStatusCountDto[];
}
/** NATS response type alias — same shape as REST DTO */
export type GetBookingStatsNatsResponse = BookingStatsResponseDto;
export type GetBookingStatsResponse = NatsResponse<GetBookingStatsNatsResponse>;
//# sourceMappingURL=get-booking-stats.nats.d.ts.map