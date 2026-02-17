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
import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
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

/**
 * Timeline Event/Block DTO
 * Shared DTO for both NATS messages and REST API responses
 * Used in room timeline to represent bookings, maintenance, cleaning, and blocked periods
 */
export class TimelineEvent {
  @ApiProperty({ description: 'Block ID' })
  id: string;

  @ApiProperty({ description: 'Block type', enum: ['booking', 'maintenance', 'cleaning', 'block'] })
  type: 'booking' | 'maintenance' | 'cleaning' | 'block';

  @ApiProperty({ description: 'Start time (ISO datetime string)' })
  startTime: string;

  @ApiProperty({ description: 'End time (ISO datetime string)' })
  endTime: string;

  @ApiProperty({ description: 'Block title' })
  title: string;

  @ApiPropertyOptional({ description: 'Block description' })
  description?: string;

  @ApiPropertyOptional({ description: 'Guest name (for bookings)' })
  guestName?: string;

  @ApiPropertyOptional({ description: 'Booking ID (for bookings)' })
  bookingId?: string;

  @ApiPropertyOptional({ description: 'Booking status (for booking blocks)', example: 'CONFIRMED' })
  status?: string;

  @ApiPropertyOptional({ description: 'Number of guests (for booking blocks)' })
  guestCount?: number;

  @ApiPropertyOptional({ description: 'Special requests from guest (for booking blocks)', example: 'Late check-in, extra towels' })
  specialRequests?: string;

  @ApiPropertyOptional({ description: 'Booking type', enum: ['HOURLY', 'OVERNIGHT'] })
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
export class RoomTimelineItem {
  @ApiProperty({ description: 'Room ID' })
  roomId: string;

  @ApiProperty({ description: 'Room number' })
  roomNumber: string;

  @ApiProperty({ description: 'Floor number' })
  floor: number;

  @ApiProperty({ description: 'Room type (string or object)' })
  roomType: string;

  @ApiPropertyOptional({ description: 'Room type ID' })
  roomTypeId?: string;

  @ApiProperty({
    description: 'Room status',
    enum: ['AVAILABLE', 'OCCUPIED', 'CLEANING', 'MAINTENANCE', 'OUT_OF_ORDER']
  })
  status: 'AVAILABLE' | 'OCCUPIED' | 'CLEANING' | 'MAINTENANCE' | 'OUT_OF_ORDER';

  @ApiProperty({ description: 'Time blocks for this room', type: [TimelineEvent] })
  timeBlocks: TimelineEvent[];

  @ApiProperty({ description: 'Cleaning time in minutes' })
  cleaningTime: number;

  @ApiPropertyOptional({ description: 'Last cleaned timestamp (ISO datetime or null)', type: String, nullable: true })
  lastCleaned?: string | null;

  @ApiPropertyOptional({ description: 'Next maintenance timestamp (ISO datetime or null)', type: String, nullable: true })
  nextMaintenance?: string | null;

  @ApiPropertyOptional({ description: 'Additional notes', type: String, nullable: true })
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

export class ConflictInfo {
  @ApiProperty({ description: 'Conflict type (booking, maintenance, cleaning, block)', example: 'booking' })
  type: string;

  @ApiProperty({ description: 'Conflict start date (ISO datetime)', example: '2026-02-20T15:00:00.000Z' })
  startDate: string;

  @ApiProperty({ description: 'Conflict end date (ISO datetime)', example: '2026-02-22T11:00:00.000Z' })
  endDate: string;

  @ApiProperty({ description: 'Human-readable conflict description', example: 'Room already booked' })
  description: string;

  @ApiPropertyOptional({ description: 'Booking ID causing the conflict', example: 'uuid-booking-456' })
  bookingId?: string;
}

export class RoomBookingAvailability {
  @ApiProperty({ description: 'Room ID', example: 'uuid-room-123' })
  roomId: string;

  @ApiProperty({ description: 'Whether the room is available for the requested period', example: true })
  available: boolean;

  @ApiProperty({ description: 'List of conflicts preventing availability', type: [ConflictInfo] })
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
export class GetOptimizedRoomAssignmentRequest {
  @ApiProperty({
    description: 'Hotel ID',
    example: 'hotel-123',
  })
  hotelId: string;

  @ApiProperty({
    description: 'Check-in date (ISO 8601 format)',
    example: '2026-02-20',
  })
  checkIn: string;

  @ApiProperty({
    description: 'Check-out date (ISO 8601 format)',
    example: '2026-02-25',
  })
  checkOut: string;

  @ApiProperty({
    description: 'Number of guests',
    example: 2,
  })
  guestCount: number;

  @ApiPropertyOptional({
    description: 'Guest preferences for room assignment',
    example: ['high_floor', 'view'],
    type: [String],
  })
  guestPreferences?: string[];

  @ApiPropertyOptional({
    description: 'Preferred room type',
    example: 'DELUXE',
  })
  roomType?: string;
}

/**
 * Room physical features - typed object (replaces loose Record<string, any>)
 * Used inside RoomSuggestionDto
 */
export class RoomSuggestionFeaturesDto {
  @ApiProperty({ description: 'Room view type (e.g. sea, city, garden)', example: 'sea' })
  @IsString()
  view: string;

  @ApiProperty({ description: 'Whether room allows smoking', example: false })
  @IsBoolean()
  smoking: boolean;

  @ApiProperty({ description: 'Whether room has accessibility features', example: false })
  @IsBoolean()
  accessibility: boolean;

  @ApiProperty({ description: 'Whether room has WiFi', example: true })
  @IsBoolean()
  wifi: boolean;

  @ApiProperty({ description: 'Whether room has minibar', example: true })
  @IsBoolean()
  minibar: boolean;

  @ApiProperty({ description: 'Whether room has balcony', example: false })
  @IsBoolean()
  balcony: boolean;
}

/**
 * Next booking info on the room - helps assess scheduling pressure
 */
export class RoomSuggestionNextBookingDto {
  @ApiProperty({ description: 'Next booking check-in (ISO datetime)', example: '2026-02-25T15:00:00.000Z' })
  @IsString()
  checkIn: string;

  @ApiProperty({ description: 'Next booking check-out (ISO datetime)', example: '2026-02-27T11:00:00.000Z' })
  @IsString()
  checkOut: string;

  @ApiProperty({ description: 'Guest name for next booking', example: 'Nguyen Van A' })
  @IsString()
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
export class RoomSuggestionDto {
  @ApiProperty({ description: 'Room ID (UUID)', example: 'uuid-room-123' })
  @IsString()
  roomId: string;

  @ApiProperty({ description: 'Room number displayed to user', example: '101' })
  @IsString()
  roomNumber: string;

  @ApiProperty({ description: 'Room type ID (UUID) — required for booking creation', example: 'uuid-roomtype-456' })
  @IsString()
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name', example: 'Deluxe Ocean View' })
  @IsString()
  roomType: string;

  @ApiProperty({ description: 'Floor number', example: 3 })
  @IsNumber()
  floor: number;

  @ApiProperty({ description: 'Room physical features and amenities', type: RoomSuggestionFeaturesDto })
  @ValidateNested()
  @Type(() => RoomSuggestionFeaturesDto)
  features: RoomSuggestionFeaturesDto;

  @ApiProperty({ description: 'Base price per night (VND)', example: 1500000 })
  @IsNumber()
  basePrice: number;

  @ApiPropertyOptional({ description: 'Discounted price per night when promotion applies (VND)', example: 1200000 })
  @IsOptional()
  @IsNumber()
  discountedPrice?: number;

  @ApiProperty({ description: 'Availability score 0–100 (100 = no conflicts)', example: 95 })
  @IsNumber()
  availabilityScore: number;

  @ApiProperty({ description: 'Guest preference match score 0–100 (100 = perfect match)', example: 80 })
  @IsNumber()
  preferenceMatch: number;

  @ApiProperty({ description: 'Revenue optimization score 0–100 (100 = maximizes hotel revenue)', example: 70 })
  @IsNumber()
  revenueScore: number;

  @ApiProperty({
    description: 'Conflict risk level for this room in the requested period',
    enum: ['NONE', 'LOW', 'MEDIUM', 'HIGH'],
    example: 'NONE',
  })
  @IsEnum(['NONE', 'LOW', 'MEDIUM', 'HIGH'])
  conflictRisk: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';

  @ApiProperty({
    description: 'Reasons explaining why this room is suggested',
    type: [String],
    example: ['Matches sea view preference', 'High availability', 'Competitive price'],
  })
  @IsArray()
  @IsString({ each: true })
  reasons: string[];

  @ApiPropertyOptional({
    description: 'Next booking after requested checkout (to assess scheduling pressure)',
    type: RoomSuggestionNextBookingDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => RoomSuggestionNextBookingDto)
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
