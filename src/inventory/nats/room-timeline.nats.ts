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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * Get Room Timeline Request
 * Pattern: rooms.timeline.get
 */
export interface GetRoomTimelineRequest {
  date: string; // YYYY-MM-DD - Date for timeline
  viewType: 'day' | 'week' | 'month';
  tenantId: string; // Multi-tenant isolation
  hotelId: string;
  roomIds?: string[]; // Optional: Filter specific rooms
  floors?: number[]; // Optional: Filter by floor numbers
}

export interface TimelineRoomType {
  id: string;
  name: string;
  capacity: number;
}

export interface TimelineEvent {
  id: string;
  type: 'booking' | 'maintenance' | 'cleaning' | 'block';
  startTime: string;
  endTime: string;
  title: string;
  description?: string;
  guestName?: string;
  bookingId?: string;
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

export interface RoomTimelineItem {
  roomId: string;
  roomNumber: string;
  floor: number;
  roomType: TimelineRoomType | string; // Can be object or string
  roomTypeId?: string;
  status: 'AVAILABLE' | 'OCCUPIED' | 'CLEANING' | 'MAINTENANCE' | 'OUT_OF_ORDER';
  timeBlocks: TimelineEvent[]; // Renamed from events to match handler implementation
  cleaningTime: number; // Minutes required for cleaning
  lastCleaned: string | null; // ISO datetime or null
  nextMaintenance: string | null; // ISO datetime or null
  notes: string | null; // Additional notes
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
    workingHours: { start: string; end: string };
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
  date: string; // YYYY-MM-DD - Date for timeline stats
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
  updatedBy?: string; // User ID who is making the status change
}

export interface RoomStatusUpdate {
  roomId: string;
  roomNumber: string; // Room number (e.g., "101", "A-205")
  oldStatus: string;
  newStatus: string;
  updatedBy: string; // User ID who updated the status
  updatedAt: string;
  reason?: string;
  estimatedAvailability?: string; // ISO timestamp when room will be available again
}

export type UpdateRoomStatusTimelineResponse = RoomStatusUpdate;
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
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
}

export interface ConflictInfo {
  type: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface RoomBookingAvailability {
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
 */
export interface GetOptimizedRoomAssignmentRequest {
  hotelId: string;
  criteria: any; // Assignment optimization criteria
}

export interface OptimizedAssignment {
  recommendations: {
    bookingId: string;
    recommendedRoomId: string;
    score: number;
    reasons: string[];
  }[];
  summary: {
    totalBookings: number;
    optimizedAssignments: number;
    improvementPercentage: number;
  };
}

export type GetOptimizedRoomAssignmentResponse = OptimizedAssignment;
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
  from: string; // Start date (YYYY-MM-DD)
  to: string; // End date (YYYY-MM-DD)
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
  startDate: string; // ISO date string
  endDate: string; // ISO date string
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
    roomType: { name: string; id: string } | string;
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
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  comparisonPeriod: string; // Period to compare against (e.g., 'previous', 'year_ago')
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
export class ComprehensiveAnalyticsResponseDto {
  @ApiProperty({
    description: 'Overview metrics with room counts and KPIs',
    type: 'object',
    properties: {
      totalRooms: { type: 'number' },
      availableRooms: { type: 'number' },
      occupiedRooms: { type: 'number' },
      outOfOrderRooms: { type: 'number' },
      occupancyRate: { type: 'number' },
      adr: { type: 'number', description: 'Average Daily Rate' },
      revpar: { type: 'number', description: 'Revenue Per Available Room' },
      totalRevenue: { type: 'number' },
      avgLengthOfStay: { type: 'number' },
      checkoutOnTime: { type: 'number' },
      cleaningEfficiency: { type: 'number' }
    }
  })
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

  @ApiProperty({
    description: 'Daily trends data',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        date: { type: 'string' },
        occupancyRate: { type: 'number' },
        adr: { type: 'number' },
        revpar: { type: 'number' },
        revenue: { type: 'number' },
        availableRooms: { type: 'number' },
        occupiedRooms: { type: 'number' }
      }
    }
  })
  trends: {
    date: string;
    occupancyRate: number;
    adr: number;
    revpar: number;
    revenue: number;
    availableRooms: number;
    occupiedRooms: number;
  }[];

  @ApiProperty({
    description: 'Room type performance metrics',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        roomType: { type: 'object' },
        totalRooms: { type: 'number' },
        occupancyRate: { type: 'number' },
        adr: { type: 'number' },
        revpar: { type: 'number' },
        revenue: { type: 'number' },
        avgBookingValue: { type: 'number' }
      }
    }
  })
  roomTypePerformance: {
    roomType: { name: string; id: string } | string;
    totalRooms: number;
    occupancyRate: number;
    adr: number;
    revpar: number;
    revenue: number;
    avgBookingValue: number;
  }[];

  @ApiPropertyOptional({
    description: 'Hourly occupancy data',
    type: 'array'
  })
  hourlyOccupancy?: {
    hour: number;
    occupancyRate: number;
    checkIns: number;
    checkOuts: number;
  }[];

  @ApiPropertyOptional({
    description: 'Revenue breakdown by source',
    type: 'array'
  })
  revenueBreakdown?: {
    source: string;
    revenue: number;
    percentage: number;
    color: string;
  }[];

  @ApiPropertyOptional({
    description: 'Top performing rooms',
    type: 'array'
  })
  topPerformingRooms?: {
    roomNumber: string;
    roomType: string;
    revenue: number;
    occupancyRate: number;
    adr: number;
    totalBookings: number;
    avgRating: number;
  }[];

  @ApiPropertyOptional({
    description: 'Cleaning metrics and efficiency',
    type: 'object',
    additionalProperties: true
  })
  cleaningMetrics?: {
    avgCleaningTime: number;
    onTimeCompletion: number;
    qualityScore: number;
    staffEfficiency: number;
    totalTasksCompleted: number;
  };

  @ApiPropertyOptional({
    description: 'Occupancy forecast',
    type: 'array'
  })
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
export class AnalyticsComparisonResponseDto {
  @ApiProperty({
    description: 'Current period analytics',
    type: 'object',
    properties: {
      occupancyRate: { type: 'number' },
      adr: { type: 'number', description: 'Average Daily Rate' },
      revpar: { type: 'number', description: 'Revenue Per Available Room' },
      revenue: { type: 'number' }
    }
  })
  current: {
    occupancyRate: number;
    adr: number;
    revpar: number;
    revenue: number;
  };

  @ApiProperty({
    description: 'Previous period analytics',
    type: 'object',
    properties: {
      occupancyRate: { type: 'number' },
      adr: { type: 'number', description: 'Average Daily Rate' },
      revpar: { type: 'number', description: 'Revenue Per Available Room' },
      revenue: { type: 'number' }
    }
  })
  previous: {
    occupancyRate: number;
    adr: number;
    revpar: number;
    revenue: number;
  };

  @ApiProperty({
    description: 'Growth percentage between periods',
    type: 'object',
    properties: {
      occupancyRate: { type: 'number' },
      adr: { type: 'number' },
      revpar: { type: 'number' },
      revenue: { type: 'number' }
    }
  })
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
    reception?: { start: string; end: string };
    housekeeping?: { start: string; end: string };
    maintenance?: { start: string; end: string };
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
