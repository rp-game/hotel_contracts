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
/**
 * Perform Timeline Action Request
 * Pattern: booking.timeline.action
 *
 * Perform an action on a room (confirm, checkin, checkout, cancel)
 */
export interface PerformTimelineActionNatsRequest {
    roomId: string;
    action: string;
    bookingId?: string;
    actionData?: any;
}
export type PerformTimelineActionNatsResponse = NatsResponse<TimelineActionResult>;
//# sourceMappingURL=timeline-action.nats.d.ts.map