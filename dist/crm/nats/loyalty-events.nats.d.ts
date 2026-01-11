/**
 * Loyalty Events NATS Contracts
 *
 * Patterns:
 * - booking.completed
 * - loyalty.points.adjust
 * - crm.member.enrolled
 *
 * Handler: crm-service (LoyaltyEventsController)
 * Called by: Multiple services (booking-service, loyalty-service, etc)
 */
import { NatsResponse } from '../../common';
/**
 * Booking Completed Event
 * Pattern: booking.completed
 */
export interface BookingCompletedEventNatsRequest {
    bookingId: string;
    tenantId: string;
    customerId: string;
    hotelId: string;
    roomId?: string;
    checkInDate: string;
    checkOutDate: string;
    totalAmount: string;
    numberOfNights: number;
    numberOfGuests: number;
    status: string;
    companyId?: string;
    createdAt: string;
}
/**
 * Booking Completed Event Response
 */
export type BookingCompletedEventNatsResponse = NatsResponse<{
    message: string;
}>;
/**
 * Points Adjustment Request
 * Pattern: loyalty.points.adjust
 */
export interface PointsAdjustmentNatsRequest {
    memberId: string;
    tenantId: string;
    points: number;
    reason: string;
    adjustedBy: string;
    note?: string;
}
/**
 * Points Adjustment Response
 */
export type PointsAdjustmentNatsResponse = NatsResponse<{
    message: string;
}>;
/**
 * Member Enrollment Event
 * Pattern: crm.member.enrolled
 */
export interface MemberEnrollmentNatsRequest {
    memberId: string;
    tenantId: string;
    email: string;
    enrollmentSource: string;
    programId?: string;
    customerId?: string;
}
/**
 * Member Enrollment Response
 */
export type MemberEnrollmentNatsResponse = NatsResponse<{
    message: string;
}>;
//# sourceMappingURL=loyalty-events.nats.d.ts.map