/**
 * Staff NATS Message Types
 * All staff-related NATS message payloads and responses
 * Exported from user-service
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '../enums';
import { StaffStatus } from '../enums';

// ============= NATS Message Payloads (Requests) =============

export interface FindStaffByIdPayload {
  id: string;
}

export interface FindStaffByHotelPayload {
  hotelId: string;
  roles?: string[];
  status?: StaffStatus;
}

export interface CreateStaffPayload {
  tenantId: string;
  hotelId: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  roles: string[];
  departmentId?: string;
  position?: string;
  staffStatus?: StaffStatus;
}

export interface UpdateStaffPayload {
  id: string;
  tenantId: string;
  hotelId: string;
  updateData: {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    roles?: string[];
    departmentId?: string;
    position?: string;
    staffStatus?: StaffStatus;
  };
}

export interface DeactivateStaffPayload {
  id: string;
  tenantId: string;
  hotelId: string;
}

export interface GetStaffPermissionsPayload {
  staffId: string;
  tenantId: string;
  hotelId: string;
}

export interface CheckStaffPermissionPayload {
  staffId: string;
  permission: string;
  tenantId: string;
  hotelId: string;
}

export interface LogStaffActivityPayload {
  staffId: string;
  action: string;
  details: StaffActivityDetails;
  tenantId: string;
  hotelId: string;
  timestamp: Date;
}

export interface GetStaffActivityLogPayload {
  staffId: string;
  tenantId: string;
  hotelId: string;
  startDate?: string;
  endDate?: string;
  limit?: number;
  offset?: number;
}

export interface GetStaffPerformancePayload {
  staffId: string;
  tenantId: string;
  hotelId: string;
  period: string;
}

export interface GetStaffTaskStatsPayload {
  staffId: string;
  tenantId: string;
  hotelId: string;
  startDate?: string;
  endDate?: string;
}

// ============= NATS Response DTOs =============

/**
 * Staff DTO
 * Shared between NATS contracts and REST API
 * Single source of truth for staff data structure
 */
export class StaffDto {
  @ApiProperty({ description: 'Staff member ID', type: String })
  id: string;

  @ApiProperty({ description: 'Email address', type: String })
  email: string;

  @ApiProperty({ description: 'Full name of staff member', type: String })
  fullName: string;

  @ApiPropertyOptional({ description: 'Phone number', type: String })
  phoneNumber?: string;

  @ApiProperty({ description: 'User roles assigned to staff', type: [String] })
  roles: UserRole[] | string[];

  @ApiPropertyOptional({ description: 'Department ID', type: String })
  departmentId?: string;

  @ApiPropertyOptional({ description: 'Position/title', type: String })
  position?: string;

  @ApiPropertyOptional({ description: 'Staff status', type: String })
  staffStatus?: StaffStatus | string;

  @ApiProperty({ description: 'Tenant ID', type: String })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID', type: String })
  hotelId?: string;

  @ApiProperty({ description: 'Record creation timestamp', type: Date })
  createdAt: Date;

  @ApiProperty({ description: 'Record last update timestamp', type: Date })
  updatedAt: Date;
}

export interface StaffPermissionsDto {
  staffId: string;
  permissions: string[];
  roles: string[];
  tenantId: string;
  hotelId: string;
}

// ============= Activity Related Types =============

export interface StaffActivityDetails {
  taskId?: string;
  roomNumber?: string;
  shiftType?: string;
  duration?: number;
  location?: string;
  notes?: string;
  [key: string]: any;
}

export interface StaffActivityDto {
  id: string;
  action: string;
  details: StaffActivityDetails;
  timestamp: string;
}

export interface StaffActivityLogDto {
  staffId: string;
  activities: StaffActivityDto[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
  };
  tenantId: string;
  hotelId: string;
}

export interface LogActivityResponseDto {
  success: boolean;
  activityId: string;
  staffId: string;
  action: string;
  details: StaffActivityDetails;
  timestamp: Date;
  tenantId: string;
  hotelId: string;
}

// ============= Performance Related Types =============

export interface StaffPerformanceMetrics {
  tasksCompletedToday: number;
  averageTaskTime: number;
  qualityScore: number;
  productivity: number;
  onTimeCompletionRate: number;
  customerRating: number;
}

export interface StaffPerformanceTrends {
  weeklyTasks: number[];
  weeklyQuality: number[];
}

export interface StaffPerformanceDto {
  staffId: string;
  period: string;
  metrics: StaffPerformanceMetrics;
  trends: StaffPerformanceTrends;
  tenantId: string;
  hotelId: string;
  calculatedAt: string;
}

// ============= Task Stats Related Types =============

export interface TaskStatsRoomTypes {
  Standard: number;
  Deluxe: number;
  Suite: number;
  [key: string]: number;
}

export interface TaskStatsTaskTypes {
  Cleaning: number;
  Maintenance: number;
  Inspection: number;
  [key: string]: number;
}

export interface StaffTaskStatsMetrics {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  cancelledTasks: number;
  averageCompletionTime: number;
  fastestCompletion: number;
  slowestCompletion: number;
  roomTypes: TaskStatsRoomTypes;
  taskTypes: TaskStatsTaskTypes;
}

export interface StaffTaskStatsDto {
  staffId: string;
  period: {
    startDate: string;
    endDate: string;
  };
  stats: StaffTaskStatsMetrics;
  tenantId: string;
  hotelId: string;
}

// ============= Permission Check Types =============

export interface StaffPermissionCheckDto {
  staffId: string;
  permission: string;
  allowed: boolean;
  tenantId: string;
  hotelId: string;
}
