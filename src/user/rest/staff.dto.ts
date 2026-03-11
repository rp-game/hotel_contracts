import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsEmail, IsArray, IsBoolean, IsUUID, IsOptional, IsEnum, IsDateString, IsNumber, ValidateNested } from 'class-validator';
import { StaffStatus, Department } from '../enums';

/**
 * ============================================================================
 * STAFF MANAGEMENT CONTRACT DTOs
 * ============================================================================
 * @description Single source of truth for staff management types
 * @usage Used by BOTH API Gateway (REST) and User Service (NATS)
 * @pattern Contract Unification - classes with @ApiProperty decorators
 * @created 2026-02-13
 * ============================================================================
 */

// ============================================================================
// REQUEST DTOs
// ============================================================================

/**
 * Create Staff DTO
 * @usage POST /api/users/staff (REST) + user.staff.create (NATS)
 * @unified Combines CreateStaffRequestDto (NATS) + CreateUserStaffDto (REST)
 */
export class CreateStaffDto {
  // Core user fields (from CreateUserRequestDto - NATS)
  @ApiProperty({ description: 'Staff email address', example: 'staff@hotel.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Staff password (for new account)' })
  @IsString()
  password: string;

  @ApiProperty({ description: 'First name', example: 'John' })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'Last name', example: 'Doe' })
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({
    description: 'Staff roles - array of role names',
    type: [String],
    example: ['HOUSEKEEPING_STAFF', 'FRONT_DESK']
  })
  @IsArray()
  @IsString({ each: true })
  roles: string[];

  // Staff-specific required fields
  @ApiProperty({ description: 'Hotel ID where staff works' })
  @IsUUID()
  hotelId: string;

  // Staff-specific optional fields (from CreateUserStaffDto - REST)
  @ApiPropertyOptional({ description: 'Phone number' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ description: 'Staff position/job title', example: 'Receptionist' })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiPropertyOptional({
    description: 'Department',
    enum: Department,
    example: Department.FRONT_DESK
  })
  @IsOptional()
  @IsEnum(Department)
  department?: Department;

  @ApiPropertyOptional({ description: 'Employee ID' })
  @IsOptional()
  @IsString()
  employeeId?: string;

  @ApiPropertyOptional({
    description: 'Staff status',
    enum: StaffStatus,
    default: StaffStatus.ACTIVE
  })
  @IsOptional()
  @IsEnum(StaffStatus)
  staffStatus?: StaffStatus;

  @ApiPropertyOptional({ description: 'Hire date (ISO 8601)', example: '2024-01-15' })
  @IsOptional()
  @IsDateString()
  hireDate?: string;

  @ApiPropertyOptional({ description: 'Staff permissions', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissions?: string[];

  @ApiPropertyOptional({ description: 'Shift schedule information' })
  @IsOptional()
  @IsString()
  shiftSchedule?: string;

  @ApiPropertyOptional({ description: 'Supervisor user ID' })
  @IsOptional()
  @IsUUID()
  supervisorId?: string;

  @ApiPropertyOptional({ description: 'Is account active', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Update Staff Status DTO
 * @usage PATCH /api/users/staff/:id/status (REST) + user.staff.updateStatus (NATS)
 * @unified Matches UpdateStaffStatusRequestDto (NATS)
 */
export class UpdateStaffStatusDto {
  @ApiProperty({
    description: 'New staff status',
    enum: StaffStatus,
    example: StaffStatus.ON_LEAVE
  })
  @IsEnum(StaffStatus)
  status: StaffStatus;
}

// ============================================================================
// RESPONSE DTOs
// ============================================================================

/**
 * Staff DTO
 * @description Complete staff member information
 * @usage Response data for staff operations
 */
export class StaffDto {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'Email address' })
  email: string;

  @ApiProperty({ description: 'First name' })
  firstName: string;

  @ApiProperty({ description: 'Last name' })
  lastName: string;

  @ApiProperty({
    description: 'Staff roles',
    type: [String],
    example: ['HOUSEKEEPING_STAFF']
  })
  roles: string[];

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Employee ID' })
  employeeId?: string;

  @ApiPropertyOptional({ description: 'Position/title' })
  position?: string;

  @ApiPropertyOptional({
    description: 'Staff status',
    enum: StaffStatus
  })
  staffStatus?: StaffStatus;

  @ApiPropertyOptional({ description: 'Department' })
  department?: string;

  @ApiProperty({ description: 'Is account active' })
  isActive: boolean;

  @ApiPropertyOptional({ description: 'Phone number' })
  phone?: string;

  @ApiPropertyOptional({ description: 'Hire date' })
  hireDate?: string;

  @ApiPropertyOptional({ description: 'Staff permissions', type: [String] })
  permissions?: string[];

  @ApiPropertyOptional({ description: 'Shift schedule' })
  shiftSchedule?: string;

  @ApiPropertyOptional({ description: 'Supervisor user ID' })
  supervisorId?: string;

  @ApiPropertyOptional({ description: 'Last login timestamp' })
  lastLogin?: string;

  @ApiProperty({ description: 'Created timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Updated timestamp' })
  updatedAt: string;
}

/**
 * Staff List Response DTO
 * @usage GET /api/users/staff (REST) + user.staff.findAll (NATS response)
 */
export class StaffListResponseDto {
  @ApiProperty({
    description: 'List of staff members',
    type: [StaffDto],
  })
  data: StaffDto[];

  @ApiProperty({ description: 'Total count of staff' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}

/**
 * Create Staff Response DTO
 * @usage POST /api/users/staff response
 */
export class CreateStaffResponseDto {
  @ApiProperty({ description: 'Created staff data', type: StaffDto })
  data: StaffDto;

  @ApiProperty({ description: 'Success message' })
  message: string;
}

/**
 * Staff Response DTO
 * @usage Single staff operation responses (update status, etc.)
 */
export class StaffResponseDto {
  @ApiProperty({ description: 'Staff data', type: StaffDto })
  data: StaffDto;

  @ApiProperty({ description: 'Operation message' })
  message?: string;
}

// ============================================================================
// MOBILE DASHBOARD DTOs
// ============================================================================

/**
 * Dashboard Staff Info
 * @usage Part of MobileDashboardDto
 */
export class DashboardStaffInfoDto {
  @ApiProperty({ description: 'Staff ID' })
  id: string;

  @ApiProperty({ description: 'First name' })
  firstName: string;

  @ApiProperty({ description: 'Last name' })
  lastName: string;

  @ApiProperty({ description: 'Email' })
  email: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  phone?: string;

  @ApiProperty({ description: 'Staff role' })
  role: string;

  @ApiProperty({ description: 'Staff status' })
  status: string;

  @ApiPropertyOptional({ description: 'Avatar URL' })
  avatar?: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Permissions', type: [String] })
  permissions?: string[];

  @ApiPropertyOptional({ description: 'Is account active' })
  isActive?: boolean;
}

/**
 * Dashboard Task Stats
 */
export class DashboardTaskStatsDto {
  @ApiProperty({ description: 'Total tasks' })
  total: number;

  @ApiProperty({ description: 'Pending tasks' })
  pending: number;

  @ApiProperty({ description: 'In-progress tasks' })
  inProgress: number;

  @ApiProperty({ description: 'Completed tasks' })
  completed: number;

  @ApiProperty({ description: 'Overdue tasks' })
  overdue: number;

  @ApiProperty({ description: 'Tasks completed today' })
  todayCompleted: number;

  @ApiProperty({ description: 'Tasks completed this week' })
  weekCompleted: number;

  @ApiPropertyOptional({ description: 'Average completion time in minutes' })
  averageCompletionTime?: number;
}

/**
 * Dashboard Occupancy
 */
export class DashboardOccupancyDto {
  @ApiProperty({ description: 'Total rooms' })
  totalRooms: number;

  @ApiProperty({ description: 'Occupied rooms' })
  occupiedRooms: number;

  @ApiProperty({ description: 'Available rooms' })
  availableRooms: number;

  @ApiProperty({ description: 'Out of order rooms' })
  outOfOrderRooms: number;

  @ApiProperty({ description: 'Checkouts today' })
  checkoutsToday: number;

  @ApiProperty({ description: 'Check-ins today' })
  checkinsToday: number;

  @ApiProperty({ description: 'Occupancy rate (percentage)' })
  occupancyRate: number;

  @ApiProperty({ description: 'Date (ISO)' })
  date: string;
}

/**
 * Dashboard Performance
 */
export class DashboardPerformanceDto {
  @ApiProperty({ description: 'Tasks completed today' })
  tasksCompletedToday: number;

  @ApiProperty({ description: 'Average task time in minutes' })
  averageTaskTime: number;

  @ApiPropertyOptional({ description: 'Quality score (0-100)' })
  qualityScore?: number;

  @ApiPropertyOptional({ description: 'Punctuality score (0-100)' })
  punctualityScore?: number;

  @ApiProperty({ description: 'Performance period' })
  period: string;
}

/**
 * Dashboard Current Shift
 */
export class DashboardCurrentShiftDto {
  @ApiPropertyOptional({ description: 'Shift ID' })
  id?: string;

  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiPropertyOptional({ description: 'Clock-in time (ISO)' })
  clockInTime?: string;

  @ApiPropertyOptional({ description: 'Clock-out time (ISO)' })
  clockOutTime?: string;

  @ApiProperty({ description: 'Shift status' })
  status: string;

  @ApiProperty({ description: 'Hours worked (decimal)' })
  hoursWorked: number;

  @ApiPropertyOptional({ description: 'Break time in minutes' })
  breakTime?: number;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

/**
 * Mobile Dashboard DTO — composite dashboard response
 * @usage GET /api/staff/dashboard
 */
export class MobileDashboardDto {
  @ApiProperty({ description: 'Staff information', type: DashboardStaffInfoDto })
  staffInfo: DashboardStaffInfoDto;

  @ApiProperty({ description: 'Task statistics', type: DashboardTaskStatsDto })
  taskStats: DashboardTaskStatsDto;

  @ApiProperty({ description: 'Hotel occupancy', type: DashboardOccupancyDto })
  occupancy: DashboardOccupancyDto;

  @ApiProperty({ description: 'Staff performance metrics', type: DashboardPerformanceDto })
  performance: DashboardPerformanceDto;

  @ApiProperty({ description: 'Current shift information', type: DashboardCurrentShiftDto })
  currentShift: DashboardCurrentShiftDto;
}

// ============================================================================
// QUICK ACTION DTOs
// ============================================================================

export class QuickActionParametersDto {
  @ApiPropertyOptional({ description: 'Room number for room-specific actions' })
  @IsOptional()
  @IsString()
  roomNumber?: string;

  @ApiPropertyOptional({ description: 'Guest ID for guest-related actions' })
  @IsOptional()
  @IsString()
  guestId?: string;

  @ApiPropertyOptional({ description: 'Task ID for task-related actions' })
  @IsOptional()
  @IsString()
  taskId?: string;

  @ApiPropertyOptional({ description: 'Action notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Priority level for actions' })
  @IsOptional()
  @IsString()
  priority?: string;

  @ApiPropertyOptional({ description: 'Due date for scheduled actions' })
  @IsOptional()
  @IsString()
  dueDate?: string;
}

export class QuickActionExecuteDto {
  @ApiProperty({ description: 'Action ID to execute' })
  @IsString()
  actionId: string;

  @ApiPropertyOptional({ description: 'Additional parameters for action', type: QuickActionParametersDto })
  @IsOptional()
  parameters?: QuickActionParametersDto;
}

export class NextActionDto {
  @ApiProperty({ description: 'Next action title' })
  title: string;

  @ApiProperty({ description: 'Next action URL' })
  actionUrl: string;

  @ApiProperty({ description: 'Next action icon' })
  icon: string;
}

export class QuickActionResponseDto {
  @ApiProperty({ description: 'Action execution status' })
  success: boolean;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiPropertyOptional({ description: 'Result data from action', type: Object })
  data?: Record<string, unknown>;

  @ApiPropertyOptional({ description: 'Next suggested action', type: NextActionDto })
  nextAction?: NextActionDto;
}

// ============================================================================
// CLOCK IN/OUT DTOs
// ============================================================================

export class DeviceInfoDto {
  @ApiProperty({ description: 'Device ID' })
  @IsString()
  deviceId: string;

  @ApiProperty({ description: 'Device platform' })
  @IsString()
  platform: string;

  @ApiProperty({ description: 'App version' })
  @IsString()
  appVersion: string;
}

export class ClockInOutDto {
  @ApiPropertyOptional({ description: 'GPS location for verification' })
  @IsOptional()
  location?: {
    latitude: number;
    longitude: number;
    accuracy: number;
    timestamp: string;
  };

  @ApiPropertyOptional({ description: 'Additional notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Clock in/out timestamp' })
  @IsString()
  timestamp: string;

  @ApiPropertyOptional({ description: 'Device information', type: DeviceInfoDto })
  @IsOptional()
  deviceInfo?: DeviceInfoDto;
}

// ============================================================================
// STAFF PROFILE & PUBLIC USER DTOs
// ============================================================================

/**
 * Emergency Contact DTO
 * @description Nested object for staff emergency contact info
 */
export class EmergencyContactDto {
  @ApiProperty({ description: 'Contact name', example: 'Jane Doe' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Contact phone number', example: '+84-123-456-789' })
  @IsString()
  phone: string;

  @ApiProperty({ description: 'Relationship to staff', example: 'Spouse' })
  @IsString()
  relationship: string;
}

/**
 * Notification Preferences DTO
 * @description Nested object for notification channel preferences
 */
export class NotificationPreferencesDto {
  @ApiProperty({ description: 'Receive email notifications', example: true })
  @IsBoolean()
  email: boolean;

  @ApiProperty({ description: 'Receive push notifications', example: true })
  @IsBoolean()
  push: boolean;

  @ApiProperty({ description: 'Receive SMS notifications', example: false })
  @IsBoolean()
  sms: boolean;
}

/**
 * User Preferences DTO
 * @description Nested object for user preference settings
 */
export class UserPreferencesDto {
  @ApiProperty({ description: 'Preferred language', example: 'vi' })
  @IsString()
  language: string;

  @ApiProperty({ description: 'Preferred timezone', example: 'Asia/Ho_Chi_Minh' })
  @IsString()
  timezone: string;

  @ApiProperty({ description: 'Notification settings', type: NotificationPreferencesDto })
  @ValidateNested()
  @Type(() => NotificationPreferencesDto)
  notificationSettings: NotificationPreferencesDto;
}

/**
 * Staff Profile DTO
 * @description Full staff profile response for mobile app
 * @usage GET /api/staff/profile
 */
export class StaffProfileDto {
  @ApiProperty({ description: 'Staff ID (UUID)' })
  id: string;

  @ApiProperty({ description: 'First name' })
  firstName: string;

  @ApiProperty({ description: 'Last name' })
  lastName: string;

  @ApiProperty({ description: 'Email address' })
  email: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  phone?: string;

  @ApiProperty({ description: 'Staff role (primary)' })
  role: string;

  @ApiProperty({ description: 'Staff status', enum: StaffStatus })
  status: StaffStatus;

  @ApiPropertyOptional({ description: 'Profile avatar URL' })
  avatar?: string;

  @ApiProperty({ description: 'Tenant ID (UUID)' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID (UUID)' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Staff permissions', type: [String] })
  permissions?: string[];

  @ApiPropertyOptional({ description: 'Department' })
  department?: string;

  @ApiPropertyOptional({ description: 'Position/Job title' })
  position?: string;

  @ApiPropertyOptional({ description: 'Hire date (ISO date)' })
  hireDate?: string;

  @ApiPropertyOptional({ description: 'Emergency contact information', type: EmergencyContactDto })
  emergencyContact?: EmergencyContactDto;

  @ApiPropertyOptional({ description: 'User preferences', type: UserPreferencesDto })
  preferences?: UserPreferencesDto;

  @ApiPropertyOptional({ description: 'Additional metadata' })
  metadata?: Record<string, unknown>;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;
}

/**
 * Public User DTO
 * @description Minimal public-facing user information
 * @usage GET /api/staff/user/:userId/public-info, GET /api/staff/users/public-list
 */
export class PublicUserDto {
  @ApiProperty({ description: 'User ID (UUID)' })
  id: string;

  @ApiProperty({ description: 'First name' })
  firstName: string;

  @ApiProperty({ description: 'Last name' })
  lastName: string;

  @ApiProperty({ description: 'Email address' })
  email: string;

  @ApiProperty({ description: 'User role' })
  role: string;

  @ApiProperty({ description: 'User status' })
  status: string;

  @ApiPropertyOptional({ description: 'Profile avatar URL' })
  avatar?: string;

  @ApiPropertyOptional({ description: 'Department' })
  department?: string;

  @ApiPropertyOptional({ description: 'Position/Job title' })
  position?: string;
}

/**
 * Public User List Response DTO
 * @description Paginated list of public user info
 * @usage GET /api/staff/users/public-list
 */
export class PublicUserListResponseDto {
  @ApiProperty({ description: 'List of public user info', type: [PublicUserDto] })
  data: PublicUserDto[];

  @ApiProperty({ description: 'Total count of users' })
  total: number;

  @ApiProperty({ description: 'Current page' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiProperty({ description: 'Has next page' })
  hasNext: boolean;

  @ApiProperty({ description: 'Has previous page' })
  hasPrev: boolean;
}

/**
 * Update Profile DTO
 * @description Request body for updating staff profile
 * @usage PUT /api/staff/profile
 */
export class UpdateProfileDto {
  @ApiPropertyOptional({ description: 'First name' })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiPropertyOptional({ description: 'Last name' })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiPropertyOptional({ description: 'Email address' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ description: 'Profile avatar URL' })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiPropertyOptional({ description: 'Emergency contact information', type: EmergencyContactDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => EmergencyContactDto)
  emergencyContact?: EmergencyContactDto;

  @ApiPropertyOptional({ description: 'User preferences', type: UserPreferencesDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => UserPreferencesDto)
  preferences?: UserPreferencesDto;
}
