/**
 * Room Timeline & Analytics NATS Contracts
 *
 * Patterns:
 * - rooms.timeline.get
 * - rooms.timeline.stats
 * - rooms.status.update
 * - rooms.status.history
 * - rooms.availability.check
 * - rooms.cleaning.config.get
 * - rooms.cleaning.config.update
 * - rooms.assignment.optimize
 * - rooms.maintenance.get
 * - rooms.maintenance.schedule
 * - rooms.analytics.occupancy
 * - rooms.analytics.turnover
 * - rooms.analytics.comprehensive
 * - rooms.analytics.comparison
 * - rooms.conflicts.detect
 * - rooms.conflicts.analysis
 * - rooms.assignment
 * - rooms.settings.get
 * - rooms.settings.update
 * - rooms.status.get
 *
 * Handler: inventory-service
 * Called by: api-gateway, pricing-service
 */
import { NatsResponse } from '../../common';
/**
 * Get Room Timeline Request
 * Pattern: rooms.timeline.get
 */
export interface GetRoomTimelineRequest {
    hotelId: string;
    viewType: 'day' | 'week' | 'month';
    dateRange: {
        start: string;
        end: string;
    };
}
export type GetRoomTimelineResponse = any;
export type GetRoomTimelineNatsResponse = NatsResponse<GetRoomTimelineResponse>;
/**
 * Get Timeline Stats Request
 * Pattern: rooms.timeline.stats
 */
export interface GetTimelineStatsRequest {
    hotelId: string;
    date?: string;
}
export interface TimelineStats {
    totalRooms: number;
    occupiedRooms: number;
    availableRooms: number;
    maintenanceRooms?: number;
}
export type GetTimelineStatsResponse = TimelineStats;
export type GetTimelineStatsNatsResponse = NatsResponse<GetTimelineStatsResponse>;
/**
 * Update Room Status (Timeline) Request
 * Pattern: rooms.status.update
 */
export interface UpdateRoomStatusTimelineRequest {
    roomId: string;
    status: string;
    reason: string;
    hotelId: string;
}
export interface UpdateRoomStatusTimelineResponse {
    success: boolean;
    message: string;
}
export type UpdateRoomStatusTimelineNatsResponse = NatsResponse<UpdateRoomStatusTimelineResponse>;
/**
 * Get Room Status History Request
 * Pattern: rooms.status.history
 */
export interface GetRoomStatusHistoryRequest {
    roomId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
}
export interface StatusHistoryItem {
    status: string;
    changedAt: string;
    reason?: string;
}
export type GetRoomStatusHistoryResponse = StatusHistoryItem[];
export type GetRoomStatusHistoryNatsResponse = NatsResponse<GetRoomStatusHistoryResponse>;
/**
 * Check Room Availability (Timeline) Request
 * Pattern: rooms.availability.check
 */
export interface CheckRoomAvailabilityTimelineRequest {
    roomId: string;
    hotelId: string;
    checkIn: string;
    checkOut: string;
}
export interface AvailabilityCheckResult {
    available: boolean;
    conflicts?: string[];
}
export type CheckRoomAvailabilityTimelineResponse = AvailabilityCheckResult;
export type CheckRoomAvailabilityTimelineNatsResponse = NatsResponse<CheckRoomAvailabilityTimelineResponse>;
/**
 * Get Cleaning Config Request
 * Pattern: rooms.cleaning.config.get
 */
export interface GetCleaningConfigRequest {
    hotelId: string;
}
export interface CleaningConfig {
    cleaningTime: number;
    inspectionTime?: number;
    laundryTime?: number;
}
export type GetCleaningConfigResponse = CleaningConfig;
export type GetCleaningConfigNatsResponse = NatsResponse<GetCleaningConfigResponse>;
/**
 * Update Cleaning Config Request
 * Pattern: rooms.cleaning.config.update
 */
export interface UpdateCleaningConfigRequest {
    hotelId: string;
    config: CleaningConfig;
}
export type UpdateCleaningConfigResponse = CleaningConfig;
export type UpdateCleaningConfigNatsResponse = NatsResponse<UpdateCleaningConfigResponse>;
/**
 * Get Optimized Room Assignment Request
 * Pattern: rooms.assignment.optimize
 */
export interface GetOptimizedRoomAssignmentRequest {
    bookings: any[];
    hotelId: string;
    constraints?: any;
}
export type GetOptimizedRoomAssignmentResponse = any;
export type GetOptimizedRoomAssignmentNatsResponse = NatsResponse<GetOptimizedRoomAssignmentResponse>;
/**
 * Get Room Maintenance Request
 * Pattern: rooms.maintenance.get
 */
export interface GetRoomMaintenanceRequest {
    hotelId: string;
    status?: string;
}
export interface MaintenanceTask {
    roomId: string;
    taskType: string;
    scheduledAt: string;
}
export type GetRoomMaintenanceResponse = MaintenanceTask[];
export type GetRoomMaintenanceNatsResponse = NatsResponse<GetRoomMaintenanceResponse>;
/**
 * Schedule Room Maintenance Request
 * Pattern: rooms.maintenance.schedule
 */
export interface ScheduleRoomMaintenanceRequest {
    roomId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
}
export interface MaintenanceScheduleResponse {
    success: boolean;
    message: string;
}
export type ScheduleRoomMaintenanceNatsResponse = NatsResponse<MaintenanceScheduleResponse>;
/**
 * Get Room Occupancy Analytics Request
 * Pattern: rooms.analytics.occupancy
 */
export interface GetRoomOccupancyAnalyticsRequest {
    hotelId: string;
    groupBy: 'day' | 'week' | 'month';
}
export type GetRoomOccupancyAnalyticsResponse = any;
export type GetRoomOccupancyAnalyticsNatsResponse = NatsResponse<GetRoomOccupancyAnalyticsResponse>;
/**
 * Get Room Turnover Analytics Request
 * Pattern: rooms.analytics.turnover
 */
export interface GetRoomTurnoverAnalyticsRequest {
    hotelId: string;
    period: string;
}
export type GetRoomTurnoverAnalyticsResponse = any;
export type GetRoomTurnoverAnalyticsNatsResponse = NatsResponse<GetRoomTurnoverAnalyticsResponse>;
/**
 * Get Comprehensive Analytics Request
 * Pattern: rooms.analytics.comprehensive
 */
export interface GetComprehensiveAnalyticsRequest {
    hotelId: string;
    metrics: string[];
}
export type GetComprehensiveAnalyticsResponse = any;
export type GetComprehensiveAnalyticsNatsResponse = NatsResponse<GetComprehensiveAnalyticsResponse>;
/**
 * Get Analytics Comparison Request
 * Pattern: rooms.analytics.comparison
 */
export interface GetAnalyticsComparisonRequest {
    hotelId: string;
    period: 'current' | 'previous';
}
export type GetAnalyticsComparisonResponse = any;
export type GetAnalyticsComparisonNatsResponse = NatsResponse<GetAnalyticsComparisonResponse>;
/**
 * Detect Booking Conflicts Request
 * Pattern: rooms.conflicts.detect
 */
export interface DetectBookingConflictsRequest {
    hotelId: string;
    dateRange: {
        start: string;
        end: string;
    };
}
export interface BookingConflict {
    roomId: string;
    bookingIds: string[];
    conflictType: string;
}
export type DetectBookingConflictsResponse = BookingConflict[];
export type DetectBookingConflictsNatsResponse = NatsResponse<DetectBookingConflictsResponse>;
/**
 * Get Conflict Analysis Request
 * Pattern: rooms.conflicts.analysis
 */
export interface GetConflictAnalysisRequest {
    hotelId: string;
    timeframe: string;
}
export type GetConflictAnalysisResponse = any;
export type GetConflictAnalysisNatsResponse = NatsResponse<GetConflictAnalysisResponse>;
/**
 * Get Room Assignment (Timeline) Request
 * Pattern: rooms.assignment
 */
export interface GetRoomAssignmentRequest {
    bookingId: string;
    hotelId: string;
}
export interface AssignmentInfo {
    bookingId: string;
    roomId: string;
    assignedAt: string;
}
export type GetRoomAssignmentResponse = AssignmentInfo | null;
export type GetRoomAssignmentNatsResponse = NatsResponse<GetRoomAssignmentResponse>;
/**
 * Get Room Settings Request
 * Pattern: rooms.settings.get
 */
export interface GetRoomSettingsRequest {
    hotelId: string;
}
export type GetRoomSettingsResponse = any;
export type GetRoomSettingsNatsResponse = NatsResponse<GetRoomSettingsResponse>;
/**
 * Update Room Settings Request
 * Pattern: rooms.settings.update
 */
export interface UpdateRoomSettingsRequest {
    hotelId: string;
    settings: any;
}
export type UpdateRoomSettingsResponse = any;
export type UpdateRoomSettingsNatsResponse = NatsResponse<UpdateRoomSettingsResponse>;
/**
 * Get Room Status By Date (Pagination) Request
 * Pattern: rooms.status.get
 */
export interface GetRoomStatusByDatePaginationRequest {
    hotelId: string;
    date: string;
    pagination: {
        page?: number;
        limit?: number;
    };
}
export interface RoomStatusPaginationItem {
    roomId: string;
    roomNumber: string;
    status: string;
    floor: number;
}
export type GetRoomStatusByDatePaginationResponse = {
    data: RoomStatusPaginationItem[];
    total: number;
    page: number;
    limit: number;
};
export type GetRoomStatusByDatePaginationNatsResponse = NatsResponse<GetRoomStatusByDatePaginationResponse>;
//# sourceMappingURL=room-timeline.nats.d.ts.map