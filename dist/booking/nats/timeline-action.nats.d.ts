/**
 * Booking Timeline Action NATS Contracts
 *
 * Patterns:
 * - booking.timeline.action
 *
 * Handler: booking-service (TimelineController)
 * Called by: api-gateway (TimelineService)
 */
import { NatsResponse } from '../../common';
export declare class TimelineActionGuestDetails {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    nationality?: string;
    idNumber?: string;
}
/**
 * Timeline Action Result
 */
export interface TimelineActionResult {
    success: boolean;
    message: string;
    booking: {
        id: string;
        status: string;
        bookingCode?: string;
        actualCheckinTime?: Date;
        actualCheckOutTime?: Date;
    };
}
export declare class TimelineActionData {
    notes?: string;
    reason?: string;
    extendToDate?: string;
    extensionPricePerNight?: number;
    guestDetails?: TimelineActionGuestDetails;
}
/**
 * Perform Timeline Action Request
 * Pattern: booking.timeline.action
 */
export interface PerformTimelineActionNatsRequest {
    roomId: string;
    action: string;
    bookingId?: string;
    actionData?: TimelineActionData;
}
export type PerformTimelineActionNatsResponse = NatsResponse<TimelineActionResult>;
//# sourceMappingURL=timeline-action.nats.d.ts.map