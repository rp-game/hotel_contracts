/**
 * Booking Revenue Summary NATS Contract
 *
 * NATS Pattern: booking.revenue.summary
 * Handler: booking-service
 * Called by: report-service
 */
import { NatsResponse } from '../../common/nats-response.interface';
export declare class BookingRevenueSummaryRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
}
export declare class BookingRevenueSummaryData {
    roomRevenue: number;
    totalBookings: number;
    totalRoomNights: number;
}
export type BookingRevenueSummaryResponse = NatsResponse<BookingRevenueSummaryData>;
//# sourceMappingURL=revenue-summary.nats.d.ts.map