/**
 * Service Booking Stats NATS Contracts
 *
 * Patterns:
 * - guest_services.bookings.stats
 *
 * Handler: crm-service (GuestServicesController)
 * Called by: api-gateway (GuestServicesController)
 */
import { NatsResponse } from '../../common';
/**
 * Booking status breakdown
 */
export declare class BookingStatusCount {
    status: string;
    count: number;
}
/**
 * Service booking count
 */
export declare class ServiceBookingCount {
    serviceName: string;
    count: number;
}
/**
 * Service booking statistics data
 */
export declare class ServiceBookingStatsData {
    totalBookings: number;
    confirmedBookings: number;
    completedBookings: number;
    cancelledBookings: number;
    totalRevenue: number;
    averageRating: number;
    bookingsByStatus: BookingStatusCount[];
    bookingsByService: ServiceBookingCount[];
}
/**
 * Get Service Booking Stats Request
 * Pattern: guest_services.bookings.stats
 *
 * Retrieves service booking statistics for a tenant within optional date range
 */
export interface GetServiceBookingStatsNatsRequest {
    tenantId: string;
    hotelId?: string;
    startDate?: string;
    endDate?: string;
}
export type GetServiceBookingStatsNatsResponse = NatsResponse<ServiceBookingStatsData>;
//# sourceMappingURL=service-booking-stats.nats.d.ts.map