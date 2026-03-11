/**
 * Staff NATS Message Types
 * All staff-related NATS message payloads and responses
 * Exported from user-service
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsEnum, MinLength } from 'class-validator';
import { UserRole } from '../enums';
import { StaffStatus } from '../enums';
import { FeedbackType, FeedbackPriority } from '../enums/user.enum';
// Import unified DTOs from REST - used by both NATS and REST
import { StaffDto, CreateStaffDto, UpdateStaffStatusDto, EmergencyContactDto, UserPreferencesDto } from '../rest/staff.dto';

// ============= NATS Message Payloads (Requests) =============

export interface FindStaffByIdPayload {
  id: string;
}

export interface FindStaffByHotelPayload {
  hotelId: string;
  roles?: string[];
  status?: StaffStatus;
}

// ============= UNIFIED DTOs - Re-exported from REST =============
// CreateStaffDto and UpdateStaffStatusDto are imported above and used for BOTH REST and NATS
// This ensures ONE source of truth for staff creation/update operations
export { CreateStaffDto, UpdateStaffStatusDto } from '../rest/staff.dto';

// DEPRECATED: Use CreateStaffDto instead
// export interface CreateStaffPayload {
//   tenantId: string;
//   hotelId: string;
//   email: string;
//   fullName: string;
//   phoneNumber?: string;
//   roles: string[];
//   departmentId?: string;
//   position?: string;
//   staffStatus?: StaffStatus;
// }

// DEPRECATED: Use UpdateStaffStatusDto instead
// export interface UpdateStaffPayload {
//   id: string;
//   tenantId: string;
//   hotelId: string;
//   updateData: {
//     fullName?: string;
//     email?: string;
//     phoneNumber?: string;
//     roles?: string[];
//     departmentId?: string;
//     position?: string;
//     staffStatus?: StaffStatus;
//   };
// }

export interface UpdateStaffProfilePayload {
  staffId: string;
  tenantId: string;
  hotelId: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  emergencyContact?: EmergencyContactDto;
  preferences?: UserPreferencesDto;
}

export class RemoveStaffPayload {
  @ApiProperty({ description: 'Staff ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
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
 * Staff DTO - Re-exported from rest/staff.dto.ts
 * Single unified DTO used by BOTH NATS messages and REST API
 * This ensures consistency across all layers
 */
export { StaffDto } from '../rest/staff.dto';

export class StaffPermissionsDto {
  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Staff permissions', type: [String] })
  permissions: string[];

  @ApiProperty({ description: 'Staff roles', type: [String] })
  roles: string[];

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

// ============= Activity Related Types =============

export class StaffActivityDetails {
  @ApiPropertyOptional({ description: 'Task ID' })
  taskId?: string;

  @ApiPropertyOptional({ description: 'Room number' })
  roomNumber?: string;

  @ApiPropertyOptional({ description: 'Shift type' })
  shiftType?: string;

  @ApiPropertyOptional({ description: 'Duration in minutes' })
  duration?: number;

  @ApiPropertyOptional({ description: 'Location' })
  location?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  [key: string]: any;
}

export class StaffActivityDto {
  @ApiProperty({ description: 'Activity ID' })
  id: string;

  @ApiProperty({ description: 'Action performed' })
  action: string;

  @ApiProperty({ description: 'Activity details', type: StaffActivityDetails })
  details: StaffActivityDetails;

  @ApiProperty({ description: 'Timestamp' })
  timestamp: string;
}

export class StaffActivityLogDto {
  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'List of activities', type: [StaffActivityDto] })
  activities: StaffActivityDto[];

  @ApiProperty({ description: 'Pagination info' })
  pagination: {
    total: number;
    limit: number;
    offset: number;
  };

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

export class LogActivityResponseDto {
  @ApiProperty({ description: 'Success flag' })
  success: boolean;

  @ApiProperty({ description: 'Activity ID' })
  activityId: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Action performed' })
  action: string;

  @ApiProperty({ description: 'Activity details', type: StaffActivityDetails })
  details: StaffActivityDetails;

  @ApiProperty({ description: 'Timestamp' })
  timestamp: Date;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

// ============= Performance Related Types =============

export class StaffPerformanceMetrics {
  @ApiProperty({ description: 'Tasks completed today' })
  tasksCompletedToday: number;

  @ApiProperty({ description: 'Average task time' })
  averageTaskTime: number;

  @ApiProperty({ description: 'Quality score' })
  qualityScore: number;

  @ApiProperty({ description: 'Productivity' })
  productivity: number;

  @ApiProperty({ description: 'On-time completion rate' })
  onTimeCompletionRate: number;

  @ApiProperty({ description: 'Customer rating' })
  customerRating: number;
}

export class StaffPerformanceTrends {
  @ApiProperty({ description: 'Weekly tasks', type: [Number] })
  weeklyTasks: number[];

  @ApiProperty({ description: 'Weekly quality', type: [Number] })
  weeklyQuality: number[];
}

export class StaffPerformanceDto {
  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Period' })
  period: string;

  @ApiProperty({ description: 'Performance metrics', type: StaffPerformanceMetrics })
  metrics: StaffPerformanceMetrics;

  @ApiProperty({ description: 'Performance trends', type: StaffPerformanceTrends })
  trends: StaffPerformanceTrends;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Calculated at' })
  calculatedAt: string;
}

// ============= Task Stats Related Types =============

export class TaskStatsRoomTypes {
  @ApiProperty({ description: 'Standard room tasks count' })
  Standard: number;

  @ApiProperty({ description: 'Deluxe room tasks count' })
  Deluxe: number;

  @ApiProperty({ description: 'Suite room tasks count' })
  Suite: number;

  [key: string]: number;
}

export class TaskStatsTaskTypes {
  @ApiProperty({ description: 'Cleaning tasks count' })
  Cleaning: number;

  @ApiProperty({ description: 'Maintenance tasks count' })
  Maintenance: number;

  @ApiProperty({ description: 'Inspection tasks count' })
  Inspection: number;

  [key: string]: number;
}

export class StaffTaskStatsMetrics {
  @ApiProperty({ description: 'Total tasks assigned' })
  totalTasks: number;

  @ApiProperty({ description: 'Completed tasks count' })
  completedTasks: number;

  @ApiProperty({ description: 'Pending tasks count' })
  pendingTasks: number;

  @ApiProperty({ description: 'Cancelled tasks count' })
  cancelledTasks: number;

  @ApiProperty({ description: 'Average completion time in minutes' })
  averageCompletionTime: number;

  @ApiProperty({ description: 'Fastest completion time in minutes' })
  fastestCompletion: number;

  @ApiProperty({ description: 'Slowest completion time in minutes' })
  slowestCompletion: number;

  @ApiProperty({ description: 'Tasks by room type', type: TaskStatsRoomTypes })
  roomTypes: TaskStatsRoomTypes;

  @ApiProperty({ description: 'Tasks by task type', type: TaskStatsTaskTypes })
  taskTypes: TaskStatsTaskTypes;
}

export class StaffTaskStatsDto {
  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({
    description: 'Period for statistics',
    type: 'object',
    properties: {
      startDate: { type: 'string', format: 'date-time' },
      endDate: { type: 'string', format: 'date-time' }
    }
  })
  period: {
    startDate: string;
    endDate: string;
  };

  @ApiProperty({ description: 'Task statistics', type: StaffTaskStatsMetrics })
  stats: StaffTaskStatsMetrics;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

// ============= Permission Check Types =============

export class StaffPermissionCheckDto {
  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Permission being checked' })
  permission: string;

  @ApiProperty({ description: 'Whether permission is allowed' })
  allowed: boolean;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

// ============= FEEDBACK =============
export { FeedbackDto, FeedbackResponseDto } from '../rest/feedback.dto';
export { FeedbackType, FeedbackPriority } from '../enums/user.enum';

export class SubmitFeedbackPayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Feedback type', enum: FeedbackType })
  @IsEnum(FeedbackType)
  type: FeedbackType;

  @ApiProperty({ description: 'Feedback subject' })
  @IsString()
  @MinLength(5)
  subject: string;

  @ApiProperty({ description: 'Detailed description' })
  @IsString()
  @MinLength(10)
  description: string;

  @ApiProperty({ description: 'Priority level', enum: FeedbackPriority })
  @IsEnum(FeedbackPriority)
  priority: FeedbackPriority;

  @ApiProperty({ description: 'Contact email' })
  @IsEmail()
  contactEmail: string;

  @ApiProperty({ description: 'User agent/platform' })
  @IsString()
  userAgent: string;

  @ApiProperty({ description: 'App version' })
  @IsString()
  appVersion: string;
}

// ============= CHANGE PASSWORD =============
export { ChangePasswordDto, ChangePasswordResponseDto } from '../rest/change-password.dto';

// ============= AVATAR UPLOAD =============
export { AvatarUploadResponseDto } from '../rest/avatar.dto';

/**
 * File metadata for avatar upload via NATS.
 * Note: No @ApiProperty on `buffer` because Buffer is not Swagger-serializable.
 * This class is NATS-only — the REST side uses multipart/form-data with @ApiConsumes + inline schema.
 */
export class UploadAvatarFilePayload {
  buffer: any; // Buffer - binary data, not typed to avoid @types/node dependency

  @ApiProperty({ description: 'Original filename' })
  @IsString()
  originalname: string;

  @ApiProperty({ description: 'File MIME type' })
  @IsString()
  mimetype: string;

  @ApiProperty({ description: 'File size in bytes' })
  size: number;
}

export class UploadAvatarPayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Avatar file' })
  file: UploadAvatarFilePayload;
}

// ============= STAFF SCHEDULE =============
export { ShiftScheduleDto, StaffScheduleRequestDto, StaffScheduleResponseDto } from '../rest/schedule.dto';
export { ShiftType, ShiftStatus } from '../enums/user.enum';

export class GetStaffSchedulePayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Start date', example: '2025-08-17' })
  @IsString()
  startDate: string;

  @ApiProperty({ description: 'End date', example: '2025-08-23' })
  @IsString()
  endDate: string;
}

// ============= CHANGE PASSWORD =============
export class ChangePasswordPayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Current password' })
  @IsString()
  @MinLength(1)
  currentPassword: string;

  @ApiProperty({ description: 'New password' })
  @IsString()
  @MinLength(8)
  newPassword: string;
}

// ============= STAFF PERFORMANCE (REST response) =============
export { PerformanceMetricsDto, AchievementDto, PerformanceRankDto, PerformanceDataDto } from '../rest/performance.dto';
export { AchievementCategory } from '../enums/user.enum';

// ============= STAFF MOBILE NATS =============

// --- Request Payloads ---

export class FindStaffByZaloPayload {
  @ApiProperty({ description: 'Zalo user ID' })
  @IsString()
  zaloUserId: string;
}

export class FindStaffByPhonePayload {
  @ApiProperty({ description: 'Phone number' })
  @IsString()
  phone: string;
}

export class LinkZaloToStaffPayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Zalo user ID' })
  @IsString()
  zaloUserId: string;

  @ApiProperty({ description: 'Zalo phone number' })
  @IsString()
  zaloPhone: string;

  @ApiProperty({ description: 'Zalo display name' })
  @IsString()
  zaloName: string;

  @ApiPropertyOptional({ description: 'Zalo avatar URL' })
  zaloAvatar?: string;
}

export class GetStaffHotelsPayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiPropertyOptional({ description: 'Tenant ID filter' })
  tenantId?: string;
}

export class ValidatePermissionPayload {
  @ApiProperty({ description: 'User ID' })
  @IsString()
  userId: string;

  @ApiProperty({ description: 'Resource to check permission for' })
  @IsString()
  resource: string;

  @ApiProperty({ description: 'Action to check permission for' })
  @IsString()
  action: string;

  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;
}

// --- Response DTOs ---

export class StaffZaloInfoDto {
  @ApiProperty({ description: 'Staff ID' })
  id: string;

  @ApiProperty({ description: 'Staff full name' })
  name: string;

  @ApiProperty({ description: 'Staff email' })
  email: string;

  @ApiProperty({ description: 'Phone number' })
  phone: string;

  @ApiProperty({ description: 'Staff roles', type: [String] })
  roles: string[];

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Zalo user ID (present when found via Zalo)' })
  zaloUserId?: string;
}

export class LinkZaloResultDto {
  @ApiProperty({ description: 'Operation success' })
  success: boolean;

  @ApiProperty({ description: 'Result message' })
  message: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Zalo user ID' })
  zaloUserId: string;
}

export class ValidatePermissionResultDto {
  @ApiProperty({ description: 'Whether user has the requested permission' })
  hasPermission: boolean;
}

// --- REST Body DTO (for POST :staffId/link-zalo) ---

export class LinkZaloBasicDto {
  @ApiProperty({ description: 'Zalo user ID' })
  @IsString()
  zaloUserId: string;

  @ApiProperty({ description: 'Zalo phone number' })
  @IsString()
  zaloPhone: string;

  @ApiProperty({ description: 'Zalo display name' })
  @IsString()
  zaloName: string;

  @ApiPropertyOptional({ description: 'Zalo avatar URL' })
  zaloAvatar?: string;
}
