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
    date: string;
    viewType: 'day' | 'week' | 'month';
    tenantId: string;
    hotelId: string;
    roomIds?: string[];
    floors?: number[];
}
export interface TimelineRoomType {
    id: string;
    name: string;
    capacity: number;
}
/**
 * Timeline Event/Block DTO
 * Shared DTO for both NATS messages and REST API responses
 * Used in room timeline to represent bookings, maintenance, cleaning, and blocked periods
 */
export declare class TimelineEvent {
    id: string;
    type: 'booking' | 'maintenance' | 'cleaning' | 'block';
    startTime: string;
    endTime: string;
    title: string;
    description?: string;
    guestName?: string;
    bookingId?: string;
    status?: string;
    guestCount?: number;
    specialRequests?: string;
    bookingType?: 'HOURLY' | 'OVERNIGHT';
}
export interface BookingTimelineItem {
    id: string;
    bookingCode: string;
    guestName: string;
    guestEmail?: string;
    roomId: string;
    roomNumber: string;
    checkIn: string;
    checkOut: string;
    status: 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
    adultCount: number;
    childCount: number;
    specialRequests?: string;
    totalAmount: number;
}
export interface MaintenanceEvent {
    id: string;
    roomId: string;
    type: 'ROUTINE' | 'REPAIR' | 'DEEP_CLEAN' | 'INSPECTION';
    scheduledDate: string;
    estimatedDuration: number;
    description: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
    status: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
    assignedTechnician?: string;
}
/**
 * Room Timeline Item DTO
 * Shared DTO for both NATS messages and REST API responses
 * Represents a room with its timeline blocks and current status
 */
export declare class RoomTimelineItem {
    roomId: string;
    roomNumber: string;
    floor: number;
    roomType: string;
    roomTypeId?: string;
    status: 'AVAILABLE' | 'OCCUPIED' | 'CLEANING' | 'MAINTENANCE' | 'OUT_OF_ORDER';
    timeBlocks: TimelineEvent[];
    cleaningTime: number;
    lastCleaned?: string | null;
    nextMaintenance?: string | null;
    notes?: string | null;
}
export interface TimelineData {
    rooms: RoomTimelineItem[];
    bookings: BookingTimelineItem[];
    maintenanceEvents: MaintenanceEvent[];
    dateRange: {
        startDate: string;
        endDate: string;
    };
    summary: {
        totalRooms: number;
        assignedBookings: number;
        unassignedBookings: number;
        occupancyRate: number;
        availableRooms: number;
    };
    settings: {
        defaultCleaningTime: number;
        workingHours: {
            start: string;
            end: string;
        };
        statusColors: Record<string, string>;
        viewPreferences: {
            defaultView: string;
            showGuestNames: boolean;
            showCleaningTimes: boolean;
            showUnassignedBookings: boolean;
            showRoomTypeCapacity: boolean;
        };
        autoStatusTransitions?: {
            enabled: boolean;
            checkoutToCleaningDelay: number;
            cleaningToAvailableAuto: boolean;
        };
    };
    roomTypeCapacities: {
        roomTypeId: string;
        roomTypeName: string;
        totalRooms: number;
        timeSlots: {
            startTime: string;
            endTime: string;
            totalRooms: number;
            assignedRooms: number;
            reservedUnassigned: number;
            availableRooms: number;
        }[];
    }[];
}
export type GetRoomTimelineResponse = TimelineData;
export type GetRoomTimelineNatsResponse = NatsResponse<GetRoomTimelineResponse>;
/**
 * Get Timeline Stats Request
 * Pattern: rooms.timeline.stats
 */
export interface GetTimelineStatsRequest {
    date: string;
    hotelId: string;
}
export interface TimelineStats {
    totalRooms: number;
    occupancyRate: number;
    availableRooms: number;
    occupiedRooms: number;
    maintenanceRooms: number;
    cleaningRooms: number;
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
    reason?: string;
    estimatedDuration?: number;
    updatedBy?: string;
}
export interface RoomStatusUpdate {
    roomId: string;
    roomNumber: string;
    oldStatus: string;
    newStatus: string;
    updatedBy: string;
    updatedAt: string;
    reason?: string;
    estimatedAvailability?: string;
}
export type UpdateRoomStatusTimelineResponse = RoomStatusUpdate;
export type UpdateRoomStatusTimelineNatsResponse = NatsResponse<UpdateRoomStatusTimelineResponse>;
/**
 * Get Room Status History Request
 * Pattern: rooms.status.history
 */
export interface GetRoomStatusHistoryRequest {
    roomId: string;
    from: string;
    to: string;
}
export interface StatusHistoryItem {
    status: string;
    changedAt: string;
    changedBy?: string;
    reason?: string;
    duration: number;
}
export interface RoomStatusHistory {
    roomId: string;
    statusChanges: StatusHistoryItem[];
}
export type GetRoomStatusHistoryResponse = RoomStatusHistory;
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
export declare class ConflictInfo {
    type: string;
    startDate: string;
    endDate: string;
    description: string;
    bookingId?: string;
}
export declare class RoomBookingAvailability {
    roomId: string;
    available: boolean;
    conflicts: ConflictInfo[];
}
export type CheckRoomAvailabilityTimelineResponse = RoomBookingAvailability;
export type CheckRoomAvailabilityTimelineNatsResponse = NatsResponse<CheckRoomAvailabilityTimelineResponse>;
/**
 * Get Cleaning Config Request
 * Pattern: rooms.cleaning.config.get
 */
export interface GetCleaningConfigRequest {
    hotelId: string;
}
export interface CleaningConfig {
    hotelId: string;
    standardCleaningTime: number;
    deepCleaningTime: number;
    checkoutCleaningTime: number;
    autoAssignCleaning: boolean;
    cleaningPriority: string[];
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
 * Used for optimizing room assignments during new booking creation
 */
export declare class GetOptimizedRoomAssignmentRequest {
    hotelId: string;
    checkIn: string;
    checkOut: string;
    guestCount: number;
    guestPreferences?: string[];
    roomType?: string;
}
/**
 * Room physical features - typed object (replaces loose Record<string, any>)
 * Used inside RoomSuggestionDto
 */
export declare class RoomSuggestionFeaturesDto {
    view: string;
    smoking: boolean;
    accessibility: boolean;
    wifi: boolean;
    minibar: boolean;
    balcony: boolean;
}
/**
 * Next booking info on the room - helps assess scheduling pressure
 */
export declare class RoomSuggestionNextBookingDto {
    checkIn: string;
    checkOut: string;
    guestName: string;
}
/**
 * Room suggestion item - response for rooms.assignment.optimize pattern
 *
 * Single source of truth for:
 * - NATS handler (inventory-service) response
 * - API Gateway REST @ApiResponse type → Swagger doc
 * - OpenAPI generated TypeScript client (frontend)
 *
 * DO NOT define local RoomSuggestion in frontend — use generated type.
 */
export declare class RoomSuggestionDto {
    roomId: string;
    roomNumber: string;
    roomType: string;
    floor: number;
    features: RoomSuggestionFeaturesDto;
    basePrice: number;
    discountedPrice?: number;
    availabilityScore: number;
    preferenceMatch: number;
    revenueScore: number;
    conflictRisk: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';
    reasons: string[];
    nextBooking?: RoomSuggestionNextBookingDto;
}
export type GetOptimizedRoomAssignmentResponse = RoomSuggestionDto[];
export type GetOptimizedRoomAssignmentNatsResponse = NatsResponse<GetOptimizedRoomAssignmentResponse>;
/**
 * Get Room Maintenance Request
 * Pattern: rooms.maintenance.get
 */
export interface GetRoomMaintenanceRequest {
    roomId: string;
}
export interface MaintenanceTask {
    roomId: string;
    taskType: string;
    scheduledAt: string;
}
export interface RoomMaintenance {
    roomId: string;
    maintenanceHistory: {
        id: string;
        type: string;
        scheduledDate: string;
        completedDate?: string;
        status: string;
        description: string;
    }[];
    upcomingMaintenance: {
        id: string;
        type: string;
        scheduledDate: string;
        description: string;
    }[];
}
export type GetRoomMaintenanceResponse = RoomMaintenance;
export type GetRoomMaintenanceNatsResponse = NatsResponse<GetRoomMaintenanceResponse>;
/**
 * Schedule Room Maintenance Request
 * Pattern: rooms.maintenance.schedule
 */
export interface ScheduleRoomMaintenanceRequest {
    roomId: string;
    scheduledDate: string;
    type: string;
    description?: string;
    [key: string]: unknown;
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
    from: string;
    to: string;
    groupBy: string;
}
export interface TimelineOccupancyAnalytics {
    period: {
        from: string;
        to: string;
        groupBy: string;
    };
    data: {
        date: string;
        occupancyRate: number;
        totalRooms: number;
        occupiedRooms: number;
    }[];
    summary: {
        averageOccupancy: number;
        peakOccupancy: number;
        lowestOccupancy: number;
    };
}
export type GetRoomOccupancyAnalyticsResponse = TimelineOccupancyAnalytics;
export type GetRoomOccupancyAnalyticsNatsResponse = NatsResponse<GetRoomOccupancyAnalyticsResponse>;
/**
 * Get Room Turnover Analytics Request
 * Pattern: rooms.analytics.turnover
 */
export interface GetRoomTurnoverAnalyticsRequest {
    hotelId: string;
    from: string;
    to: string;
}
export interface TurnoverAnalytics {
    period: {
        from: string;
        to: string;
    };
    turnoverData: {
        roomId: string;
        roomNumber: string;
        checkouts: number;
        checkins: number;
        turnoverTime: number;
    }[];
    summary: {
        averageTurnoverTime: number;
        fastestTurnover: number;
        slowestTurnover: number;
    };
}
export type GetRoomTurnoverAnalyticsResponse = TurnoverAnalytics;
export type GetRoomTurnoverAnalyticsNatsResponse = NatsResponse<GetRoomTurnoverAnalyticsResponse>;
/**
 * Get Comprehensive Analytics Request
 * Pattern: rooms.analytics.comprehensive
 */
export interface GetComprehensiveAnalyticsRequest {
    hotelId: string;
    startDate: string;
    endDate: string;
}
export interface ComprehensiveAnalytics {
    overview: {
        totalRooms: number;
        availableRooms: number;
        occupiedRooms: number;
        outOfOrderRooms: number;
        occupancyRate: number;
        adr: number;
        revpar: number;
        totalRevenue: number;
        avgLengthOfStay: number;
        checkoutOnTime: number;
        cleaningEfficiency: number;
    };
    trends: {
        date: string;
        occupancyRate: number;
        adr: number;
        revpar: number;
        revenue: number;
        availableRooms: number;
        occupiedRooms: number;
    }[];
    roomTypePerformance: {
        roomType: {
            name: string;
            id: string;
        } | string;
        totalRooms: number;
        occupancyRate: number;
        adr: number;
        revpar: number;
        revenue: number;
        avgBookingValue: number;
    }[];
    hourlyOccupancy?: {
        hour: number;
        occupancyRate: number;
        checkIns: number;
        checkOuts: number;
    }[];
    revenueBreakdown?: {
        source: string;
        revenue: number;
        percentage: number;
        color: string;
    }[];
    topPerformingRooms?: {
        roomNumber: string;
        roomType: string;
        revenue: number;
        occupancyRate: number;
        adr: number;
        totalBookings: number;
        avgRating: number;
    }[];
    cleaningMetrics?: {
        avgCleaningTime: number;
        onTimeCompletion: number;
        qualityScore: number;
        staffEfficiency: number;
        totalTasksCompleted: number;
    };
    forecast?: {
        date: string;
        predictedOccupancy: number;
        predictedRevenue: number;
        demandLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'PEAK';
    }[];
}
export type GetComprehensiveAnalyticsResponse = ComprehensiveAnalytics;
export type GetComprehensiveAnalyticsNatsResponse = NatsResponse<GetComprehensiveAnalyticsResponse>;
/**
 * Get Analytics Comparison Request
 * Pattern: rooms.analytics.comparison
 */
export interface GetAnalyticsComparisonRequest {
    hotelId: string;
    startDate: string;
    endDate: string;
    comparisonPeriod: string;
}
export interface AnalyticsComparison {
    current: {
        occupancyRate: number;
        adr: number;
        revpar: number;
        revenue: number;
    };
    previous: {
        occupancyRate: number;
        adr: number;
        revpar: number;
        revenue: number;
    };
    growth: {
        occupancyRate: number;
        adr: number;
        revpar: number;
        revenue: number;
    };
}
export type GetAnalyticsComparisonResponse = AnalyticsComparison;
/**
 * Comprehensive Analytics Response DTO
 * REST API response for GET /api/rooms/analytics/comprehensive
 * Used for both REST API responses and NATS messaging
 */
export declare class ComprehensiveAnalyticsResponseDto {
    overview: {
        totalRooms: number;
        availableRooms: number;
        occupiedRooms: number;
        outOfOrderRooms: number;
        occupancyRate: number;
        adr: number;
        revpar: number;
        totalRevenue: number;
        avgLengthOfStay: number;
        checkoutOnTime: number;
        cleaningEfficiency: number;
    };
    trends: {
        date: string;
        occupancyRate: number;
        adr: number;
        revpar: number;
        revenue: number;
        availableRooms: number;
        occupiedRooms: number;
    }[];
    roomTypePerformance: {
        roomType: {
            name: string;
            id: string;
        } | string;
        totalRooms: number;
        occupancyRate: number;
        adr: number;
        revpar: number;
        revenue: number;
        avgBookingValue: number;
    }[];
    hourlyOccupancy?: {
        hour: number;
        occupancyRate: number;
        checkIns: number;
        checkOuts: number;
    }[];
    revenueBreakdown?: {
        source: string;
        revenue: number;
        percentage: number;
        color: string;
    }[];
    topPerformingRooms?: {
        roomNumber: string;
        roomType: string;
        revenue: number;
        occupancyRate: number;
        adr: number;
        totalBookings: number;
        avgRating: number;
    }[];
    cleaningMetrics?: {
        avgCleaningTime: number;
        onTimeCompletion: number;
        qualityScore: number;
        staffEfficiency: number;
        totalTasksCompleted: number;
    };
    forecast?: {
        date: string;
        predictedOccupancy: number;
        predictedRevenue: number;
        demandLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'PEAK';
    }[];
}
/**
 * Analytics Comparison Response DTO
 * REST API response for GET /api/rooms/analytics/comparison
 * Used for both REST API responses and NATS messaging
 */
export declare class AnalyticsComparisonResponseDto {
    current: {
        occupancyRate: number;
        adr: number;
        revpar: number;
        revenue: number;
    };
    previous: {
        occupancyRate: number;
        adr: number;
        revpar: number;
        revenue: number;
    };
    growth: {
        occupancyRate: number;
        adr: number;
        revpar: number;
        revenue: number;
    };
}
export type GetAnalyticsComparisonNatsResponse = NatsResponse<GetAnalyticsComparisonResponse>;
/**
 * Detect Booking Conflicts Request
 * Pattern: rooms.conflicts.detect
 */
export interface DetectBookingConflictsRequest {
    hotelId: string;
    roomId: string;
    startDate: string;
    endDate: string;
}
export interface BookingConflict {
    roomId: string;
    conflicts: {
        bookingId1: string;
        bookingId2: string;
        conflictType: string;
        startDate: string;
        endDate: string;
        severity: string;
    }[];
}
export type DetectBookingConflictsResponse = BookingConflict[];
export type DetectBookingConflictsNatsResponse = NatsResponse<DetectBookingConflictsResponse>;
/**
 * Get Conflict Analysis Request
 * Pattern: rooms.conflicts.analysis
 */
export interface GetConflictAnalysisRequest {
    hotelId: string;
    roomId: string;
    startDate: string;
    endDate: string;
}
export interface ConflictAnalysis {
    roomId: string;
    totalConflicts: number;
    conflictsByType: {
        type: string;
        count: number;
    }[];
    recommendations: string[];
}
export type GetConflictAnalysisResponse = ConflictAnalysis;
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
    roomId?: string;
    roomNumber?: string;
    assignedAt?: string;
    assignedBy?: string;
    status: string;
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
/**
 * Timeline Preferences Data Structure
 * Defines hotel-wide timeline management settings
 */
export interface TimelinePreferences {
    cleaningTimes?: {
        default?: number;
        checkout?: number;
        maintenance?: number;
        deep?: number;
        inspection?: number;
    };
    statusColors?: Record<string, string>;
    workingHours?: {
        start: string;
        end: string;
    };
    workingHoursByDepartment?: {
        reception?: {
            start: string;
            end: string;
        };
        housekeeping?: {
            start: string;
            end: string;
        };
        maintenance?: {
            start: string;
            end: string;
        };
    };
    viewPreferences?: {
        defaultView?: string;
        showGuestNames?: boolean;
        showCleaningTimes?: boolean;
        showUnassignedBookings?: boolean;
        showRoomTypeCapacity?: boolean;
    };
    notificationSettings?: {
        enableRealTime?: boolean;
        occupancyThreshold?: number;
        maintenanceAlerts?: boolean;
        checkoutReminders?: boolean;
    };
    autoStatusTransitions?: {
        enabled?: boolean;
        checkoutToCleaningDelay?: number;
        cleaningToAvailableAuto?: boolean;
    };
}
export interface RoomSettings {
    hotelId: string;
    autoAssignment: boolean;
    cleaningBuffer: number;
    maintenanceBuffer: number;
    overbookingPolicy: string;
    preferences: TimelinePreferences;
}
export type GetRoomSettingsResponse = RoomSettings;
export type GetRoomSettingsNatsResponse = NatsResponse<GetRoomSettingsResponse>;
/**
 * Update Room Settings Request
 * Pattern: rooms.settings.update
 */
export interface UpdateRoomSettingsRequest {
    hotelId: string;
    settings: TimelinePreferences;
}
export type UpdateRoomSettingsResponse = RoomSettings;
export type UpdateRoomSettingsNatsResponse = NatsResponse<UpdateRoomSettingsResponse>;
/**
 * Get Room Status By Date (Pagination) Request
 * Pattern: rooms.status.get
 */
export interface GetRoomStatusByDatePaginationRequest {
    date: string;
    roomTypeId?: string;
    hotelId: string;
    tenantId: string;
    page?: number;
    limit?: number;
}
export interface RoomStatusPaginationItem {
    roomId: string;
    roomNumber: string;
    status: string;
    floor: number;
}
export interface RoomStatusSummary {
    totalRooms: number;
    occupancyRate: number;
    availableRooms: number;
    occupiedRooms: number;
    maintenanceRooms: number;
    cleaningRooms: number;
}
export type GetRoomStatusByDatePaginationResponse = RoomStatusSummary;
export type GetRoomStatusByDatePaginationNatsResponse = NatsResponse<GetRoomStatusByDatePaginationResponse>;
//# sourceMappingURL=room-timeline.nats.d.ts.map