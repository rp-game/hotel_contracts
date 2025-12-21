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
  date: string; // YYYY-MM-DD - Date for timeline
  viewType: 'day' | 'week' | 'month';
  hotelId: string;
  roomIds?: string[]; // Optional: Filter specific rooms
  floors?: number[]; // Optional: Filter by floor numbers
}

export type GetRoomTimelineResponse = any;
export type GetRoomTimelineNatsResponse = NatsResponse<GetRoomTimelineResponse>;

/**
 * Get Timeline Stats Request
 * Pattern: rooms.timeline.stats
 */
export interface GetTimelineStatsRequest {
  date: string; // YYYY-MM-DD - Date for timeline stats
  hotelId: string;
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
  reason?: string;
  estimatedDuration?: number;
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
  from: string; // YYYY-MM-DD - Start date
  to: string; // YYYY-MM-DD - End date
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
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
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
  hotelId: string;
  standardCleaningTime?: number;
  deepCleaningTime?: number;
  checkoutCleaningTime?: number;
  autoAssignCleaning?: boolean;
  cleaningPriority?: string[];
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
  hotelId: string;
  criteria: any; // Assignment optimization criteria
}

export type GetOptimizedRoomAssignmentResponse = any;
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
  scheduledDate: string; // ISO datetime string
  type: string; // Maintenance type (ROUTINE, REPAIR, DEEP_CLEAN, INSPECTION)
  description?: string;
  [key: string]: unknown; // Allow additional properties
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
  from: string; // Start date (YYYY-MM-DD)
  to: string; // End date (YYYY-MM-DD)
  groupBy: string; // Group by period (day, week, month)
}

export type GetRoomOccupancyAnalyticsResponse = any;
export type GetRoomOccupancyAnalyticsNatsResponse = NatsResponse<GetRoomOccupancyAnalyticsResponse>;

/**
 * Get Room Turnover Analytics Request
 * Pattern: rooms.analytics.turnover
 */
export interface GetRoomTurnoverAnalyticsRequest {
  hotelId: string;
  from: string; // Start date (YYYY-MM-DD)
  to: string; // End date (YYYY-MM-DD)
}

export type GetRoomTurnoverAnalyticsResponse = any;
export type GetRoomTurnoverAnalyticsNatsResponse = NatsResponse<GetRoomTurnoverAnalyticsResponse>;

/**
 * Get Comprehensive Analytics Request
 * Pattern: rooms.analytics.comprehensive
 */
export interface GetComprehensiveAnalyticsRequest {
  hotelId: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
}

export type GetComprehensiveAnalyticsResponse = any;
export type GetComprehensiveAnalyticsNatsResponse = NatsResponse<GetComprehensiveAnalyticsResponse>;

/**
 * Get Analytics Comparison Request
 * Pattern: rooms.analytics.comparison
 */
export interface GetAnalyticsComparisonRequest {
  hotelId: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  comparisonPeriod: string; // Period to compare against (e.g., 'previous', 'year_ago')
}

export type GetAnalyticsComparisonResponse = any;
export type GetAnalyticsComparisonNatsResponse = NatsResponse<GetAnalyticsComparisonResponse>;

/**
 * Detect Booking Conflicts Request
 * Pattern: rooms.conflicts.detect
 */
export interface DetectBookingConflictsRequest {
  hotelId: string;
  roomId: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
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
  startDate: string; // ISO date string
  endDate: string; // ISO date string
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
  date: string; // YYYY-MM-DD
  roomTypeId?: string; // Optional: Filter by room type
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
