/**
 * Weekly Timeline NATS Contracts
 *
 * Patterns:
 * - booking.timeline.weekly
 *
 * Handler: booking-service (TimelineController)
 * Called by: api-gateway (TimelineService)
 */
import { NatsResponse } from '../../common';
/**
 * NATS payload for booking.timeline.weekly
 */
export declare class GetWeeklyTimelineNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
    timezone?: string;
}
/**
 * Query DTO for GET /api/timeline/weekly
 */
export declare class GetWeeklyTimelineQueryDto {
    tenantId?: string;
    hotelId?: string;
    weekStart?: string;
    startDate?: string;
    endDate?: string;
    timezone?: string;
    weekOffset?: number;
}
/**
 * Booking data embedded in a timeline block
 */
export declare class TimelineBookingDataDto {
    checkInTime?: string;
    checkOutTime?: string;
    actualCheckInTime?: string;
    bookingCode?: string;
    totalAmount?: number;
    specialRequests?: string;
    updatedAt?: string;
    roomTypeId?: string;
}
/**
 * A single time block within a room's timeline
 */
export declare class WeeklyTimelineBlockDto {
    id: string;
    startTime: string;
    endTime: string;
    type: string;
    bookingId?: string;
    guestName?: string;
    status?: string;
    actions: string[];
    bookingData?: TimelineBookingDataDto;
    cleaningTaskId?: string;
    assignedStaff?: string;
    priority?: string;
    estimatedDuration?: number;
}
/**
 * A room row in the weekly timeline
 */
export declare class WeeklyTimelineRoomDto {
    roomId: string;
    roomNumber: string;
    roomType: string;
    floor: number;
    timeBlocks: WeeklyTimelineBlockDto[];
}
/**
 * Full response for GET /api/timeline/weekly
 */
export declare class WeeklyTimelineResponseDto {
    rooms: WeeklyTimelineRoomDto[];
    currentTime: string;
    weekStart: string;
    weekEnd: string;
}
export type GetWeeklyTimelineNatsResponse = NatsResponse<WeeklyTimelineResponseDto>;
//# sourceMappingURL=timeline-weekly.nats.d.ts.map