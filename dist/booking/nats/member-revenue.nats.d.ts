/**
 * Member Revenue NATS Contract
 *
 * NATS Pattern: bookings.revenue.byCustomers
 * Handler: booking-service (BookingAnalyticsNatsController)
 * Called by: crm-service (LoyaltyAnalyticsService)
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Request: get real booking revenue for a set of member customer IDs
 * Pattern: bookings.revenue.byCustomers
 */
export declare class BookingRevenueByCustomersRequest {
    tenantId: string;
    memberCustomerIds: string[];
    startDate?: string;
    endDate?: string;
}
/**
 * Response data for member vs non-member revenue
 */
export declare class BookingRevenueByCustomersData {
    memberTotalRevenue: number;
    memberAverageRevenue: number;
    membersWithBookings: number;
    nonMemberAverageRevenue: number;
    upliftPercentage: number;
}
export type BookingRevenueByCustomersResponse = NatsResponse<BookingRevenueByCustomersData>;
//# sourceMappingURL=member-revenue.nats.d.ts.map