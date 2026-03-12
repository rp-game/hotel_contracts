"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileDto = exports.PublicUserListResponseDto = exports.BatchUploadPhotosDto = exports.QuickUploadPhotoDto = exports.PhotoUploadContextDto = exports.BatchPhotoUploadResultDto = exports.PhotoUploadResultDto = exports.SelectHotelResultDto = exports.StaffMobileDashboardDto = exports.StaffMobilePerformanceDto = exports.StaffMobileDashboardHotelStatusDto = exports.StaffRecentActivityDto = exports.StaffAlertDto = exports.QuickActionItemDto = exports.StaffMobileDashboardTaskSummaryDto = exports.StaffMobileDashboardStaffDto = exports.PublicUserDto = exports.StaffProfileDto = exports.UserPreferencesDto = exports.NotificationPreferencesDto = exports.EmergencyContactDto = exports.ClockInOutDto = exports.DeviceInfoDto = exports.QuickActionResponseDto = exports.NextActionDto = exports.QuickActionExecuteDto = exports.QuickActionParametersDto = exports.QuickStatsResponseDto = exports.MobileDashboardDto = exports.DashboardCurrentShiftDto = exports.DashboardPerformanceDto = exports.DashboardOccupancyDto = exports.DashboardTaskStatsDto = exports.DashboardStaffInfoDto = exports.StaffResponseDto = exports.CreateStaffResponseDto = exports.StaffListResponseDto = exports.StaffDto = exports.UpdateStaffStatusDto = exports.CreateStaffDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums");
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
class CreateStaffDto {
    // Core user fields (from CreateUserRequestDto - NATS)
    email;
    password;
    firstName;
    lastName;
    tenantId;
    roles;
    // Staff-specific required fields
    hotelId;
    // Staff-specific optional fields (from CreateUserStaffDto - REST)
    phone;
    position;
    department;
    employeeId;
    staffStatus;
    hireDate;
    permissions;
    shiftSchedule;
    supervisorId;
    isActive;
}
exports.CreateStaffDto = CreateStaffDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff email address', example: 'staff@hotel.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff password (for new account)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name', example: 'John' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name', example: 'Doe' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Staff roles - array of role names',
        type: [String],
        example: ['HOUSEKEEPING_STAFF', 'FRONT_DESK']
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateStaffDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID where staff works' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff position/job title', example: 'Receptionist' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Department',
        enum: enums_1.Department,
        example: enums_1.Department.FRONT_DESK
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.Department),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Employee ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Staff status',
        enum: enums_1.StaffStatus,
        default: enums_1.StaffStatus.ACTIVE
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.StaffStatus),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "staffStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hire date (ISO 8601)', example: '2024-01-15' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "hireDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff permissions', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateStaffDto.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Shift schedule information' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "shiftSchedule", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Supervisor user ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "supervisorId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is account active', default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateStaffDto.prototype, "isActive", void 0);
/**
 * Update Staff Status DTO
 * @usage PATCH /api/users/staff/:id/status (REST) + user.staff.updateStatus (NATS)
 * @unified Matches UpdateStaffStatusRequestDto (NATS)
 */
class UpdateStaffStatusDto {
    status;
}
exports.UpdateStaffStatusDto = UpdateStaffStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'New staff status',
        enum: enums_1.StaffStatus,
        example: enums_1.StaffStatus.ON_LEAVE
    }),
    (0, class_validator_1.IsEnum)(enums_1.StaffStatus),
    __metadata("design:type", String)
], UpdateStaffStatusDto.prototype, "status", void 0);
// ============================================================================
// RESPONSE DTOs
// ============================================================================
/**
 * Staff DTO
 * @description Complete staff member information
 * @usage Response data for staff operations
 */
class StaffDto {
    id;
    email;
    firstName;
    lastName;
    roles;
    tenantId;
    hotelId;
    employeeId;
    position;
    staffStatus;
    department;
    isActive;
    phone;
    hireDate;
    permissions;
    shiftSchedule;
    supervisorId;
    lastLogin;
    createdAt;
    updatedAt;
}
exports.StaffDto = StaffDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], StaffDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    __metadata("design:type", String)
], StaffDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name' }),
    __metadata("design:type", String)
], StaffDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name' }),
    __metadata("design:type", String)
], StaffDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Staff roles',
        type: [String],
        example: ['HOUSEKEEPING_STAFF']
    }),
    __metadata("design:type", Array)
], StaffDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], StaffDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StaffDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Employee ID' }),
    __metadata("design:type", String)
], StaffDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Position/title' }),
    __metadata("design:type", String)
], StaffDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Staff status',
        enum: enums_1.StaffStatus
    }),
    __metadata("design:type", String)
], StaffDto.prototype, "staffStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Department' }),
    __metadata("design:type", String)
], StaffDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is account active' }),
    __metadata("design:type", Boolean)
], StaffDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    __metadata("design:type", String)
], StaffDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hire date' }),
    __metadata("design:type", String)
], StaffDto.prototype, "hireDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff permissions', type: [String] }),
    __metadata("design:type", Array)
], StaffDto.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Shift schedule' }),
    __metadata("design:type", String)
], StaffDto.prototype, "shiftSchedule", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Supervisor user ID' }),
    __metadata("design:type", String)
], StaffDto.prototype, "supervisorId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last login timestamp' }),
    __metadata("design:type", String)
], StaffDto.prototype, "lastLogin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", String)
], StaffDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", String)
], StaffDto.prototype, "updatedAt", void 0);
/**
 * Staff List Response DTO
 * @usage GET /api/users/staff (REST) + user.staff.findAll (NATS response)
 */
class StaffListResponseDto {
    data;
    total;
    page;
    limit;
}
exports.StaffListResponseDto = StaffListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of staff members',
        type: [StaffDto],
    }),
    __metadata("design:type", Array)
], StaffListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count of staff' }),
    __metadata("design:type", Number)
], StaffListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], StaffListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], StaffListResponseDto.prototype, "limit", void 0);
/**
 * Create Staff Response DTO
 * @usage POST /api/users/staff response
 */
class CreateStaffResponseDto {
    data;
    message;
}
exports.CreateStaffResponseDto = CreateStaffResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created staff data', type: StaffDto }),
    __metadata("design:type", StaffDto)
], CreateStaffResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message' }),
    __metadata("design:type", String)
], CreateStaffResponseDto.prototype, "message", void 0);
/**
 * Staff Response DTO
 * @usage Single staff operation responses (update status, etc.)
 */
class StaffResponseDto {
    data;
    message;
}
exports.StaffResponseDto = StaffResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff data', type: StaffDto }),
    __metadata("design:type", StaffDto)
], StaffResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Operation message' }),
    __metadata("design:type", String)
], StaffResponseDto.prototype, "message", void 0);
// ============================================================================
// MOBILE DASHBOARD DTOs
// ============================================================================
/**
 * Dashboard Staff Info
 * @usage Part of MobileDashboardDto
 */
class DashboardStaffInfoDto {
    id;
    firstName;
    lastName;
    email;
    phone;
    role;
    status;
    avatar;
    tenantId;
    hotelId;
    permissions;
    isActive;
}
exports.DashboardStaffInfoDto = DashboardStaffInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], DashboardStaffInfoDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name' }),
    __metadata("design:type", String)
], DashboardStaffInfoDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name' }),
    __metadata("design:type", String)
], DashboardStaffInfoDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email' }),
    __metadata("design:type", String)
], DashboardStaffInfoDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    __metadata("design:type", String)
], DashboardStaffInfoDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff role' }),
    __metadata("design:type", String)
], DashboardStaffInfoDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff status' }),
    __metadata("design:type", String)
], DashboardStaffInfoDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Avatar URL' }),
    __metadata("design:type", String)
], DashboardStaffInfoDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], DashboardStaffInfoDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], DashboardStaffInfoDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Permissions', type: [String] }),
    __metadata("design:type", Array)
], DashboardStaffInfoDto.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is account active' }),
    __metadata("design:type", Boolean)
], DashboardStaffInfoDto.prototype, "isActive", void 0);
/**
 * Dashboard Task Stats
 */
class DashboardTaskStatsDto {
    total;
    pending;
    inProgress;
    completed;
    overdue;
    todayCompleted;
    weekCompleted;
    averageCompletionTime;
}
exports.DashboardTaskStatsDto = DashboardTaskStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks' }),
    __metadata("design:type", Number)
], DashboardTaskStatsDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pending tasks' }),
    __metadata("design:type", Number)
], DashboardTaskStatsDto.prototype, "pending", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'In-progress tasks' }),
    __metadata("design:type", Number)
], DashboardTaskStatsDto.prototype, "inProgress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completed tasks' }),
    __metadata("design:type", Number)
], DashboardTaskStatsDto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overdue tasks' }),
    __metadata("design:type", Number)
], DashboardTaskStatsDto.prototype, "overdue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks completed today' }),
    __metadata("design:type", Number)
], DashboardTaskStatsDto.prototype, "todayCompleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks completed this week' }),
    __metadata("design:type", Number)
], DashboardTaskStatsDto.prototype, "weekCompleted", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Average completion time in minutes' }),
    __metadata("design:type", Number)
], DashboardTaskStatsDto.prototype, "averageCompletionTime", void 0);
/**
 * Dashboard Occupancy
 */
class DashboardOccupancyDto {
    totalRooms;
    occupiedRooms;
    availableRooms;
    outOfOrderRooms;
    checkoutsToday;
    checkinsToday;
    occupancyRate;
    date;
}
exports.DashboardOccupancyDto = DashboardOccupancyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms' }),
    __metadata("design:type", Number)
], DashboardOccupancyDto.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupied rooms' }),
    __metadata("design:type", Number)
], DashboardOccupancyDto.prototype, "occupiedRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Available rooms' }),
    __metadata("design:type", Number)
], DashboardOccupancyDto.prototype, "availableRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Out of order rooms' }),
    __metadata("design:type", Number)
], DashboardOccupancyDto.prototype, "outOfOrderRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Checkouts today' }),
    __metadata("design:type", Number)
], DashboardOccupancyDto.prototype, "checkoutsToday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-ins today' }),
    __metadata("design:type", Number)
], DashboardOccupancyDto.prototype, "checkinsToday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy rate (percentage)' }),
    __metadata("design:type", Number)
], DashboardOccupancyDto.prototype, "occupancyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date (ISO)' }),
    __metadata("design:type", String)
], DashboardOccupancyDto.prototype, "date", void 0);
/**
 * Dashboard Performance
 */
class DashboardPerformanceDto {
    tasksCompletedToday;
    averageTaskTime;
    qualityScore;
    punctualityScore;
    period;
}
exports.DashboardPerformanceDto = DashboardPerformanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks completed today' }),
    __metadata("design:type", Number)
], DashboardPerformanceDto.prototype, "tasksCompletedToday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average task time in minutes' }),
    __metadata("design:type", Number)
], DashboardPerformanceDto.prototype, "averageTaskTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quality score (0-100)' }),
    __metadata("design:type", Number)
], DashboardPerformanceDto.prototype, "qualityScore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Punctuality score (0-100)' }),
    __metadata("design:type", Number)
], DashboardPerformanceDto.prototype, "punctualityScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Performance period' }),
    __metadata("design:type", String)
], DashboardPerformanceDto.prototype, "period", void 0);
/**
 * Dashboard Current Shift
 */
class DashboardCurrentShiftDto {
    id;
    staffId;
    clockInTime;
    clockOutTime;
    status;
    hoursWorked;
    breakTime;
    tenantId;
    hotelId;
}
exports.DashboardCurrentShiftDto = DashboardCurrentShiftDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Shift ID' }),
    __metadata("design:type", String)
], DashboardCurrentShiftDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], DashboardCurrentShiftDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Clock-in time (ISO)' }),
    __metadata("design:type", String)
], DashboardCurrentShiftDto.prototype, "clockInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Clock-out time (ISO)' }),
    __metadata("design:type", String)
], DashboardCurrentShiftDto.prototype, "clockOutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift status' }),
    __metadata("design:type", String)
], DashboardCurrentShiftDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hours worked (decimal)' }),
    __metadata("design:type", Number)
], DashboardCurrentShiftDto.prototype, "hoursWorked", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Break time in minutes' }),
    __metadata("design:type", Number)
], DashboardCurrentShiftDto.prototype, "breakTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], DashboardCurrentShiftDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], DashboardCurrentShiftDto.prototype, "hotelId", void 0);
/**
 * Mobile Dashboard DTO — composite dashboard response
 * @usage GET /api/staff/dashboard
 */
class MobileDashboardDto {
    staffInfo;
    taskStats;
    occupancy;
    performance;
    currentShift;
}
exports.MobileDashboardDto = MobileDashboardDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff information', type: DashboardStaffInfoDto }),
    __metadata("design:type", DashboardStaffInfoDto)
], MobileDashboardDto.prototype, "staffInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task statistics', type: DashboardTaskStatsDto }),
    __metadata("design:type", DashboardTaskStatsDto)
], MobileDashboardDto.prototype, "taskStats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel occupancy', type: DashboardOccupancyDto }),
    __metadata("design:type", DashboardOccupancyDto)
], MobileDashboardDto.prototype, "occupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff performance metrics', type: DashboardPerformanceDto }),
    __metadata("design:type", DashboardPerformanceDto)
], MobileDashboardDto.prototype, "performance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current shift information', type: DashboardCurrentShiftDto }),
    __metadata("design:type", DashboardCurrentShiftDto)
], MobileDashboardDto.prototype, "currentShift", void 0);
// ============================================================================
// QUICK STATS DTO
// ============================================================================
class QuickStatsResponseDto {
    tasksToday;
    tasksCompleted;
    tasksPending;
    currentShift;
    hoursWorked;
}
exports.QuickStatsResponseDto = QuickStatsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks assigned today' }),
    __metadata("design:type", Number)
], QuickStatsResponseDto.prototype, "tasksToday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks completed today' }),
    __metadata("design:type", Number)
], QuickStatsResponseDto.prototype, "tasksCompleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks pending today' }),
    __metadata("design:type", Number)
], QuickStatsResponseDto.prototype, "tasksPending", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current shift status' }),
    __metadata("design:type", String)
], QuickStatsResponseDto.prototype, "currentShift", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hours worked in current shift' }),
    __metadata("design:type", Number)
], QuickStatsResponseDto.prototype, "hoursWorked", void 0);
// ============================================================================
// QUICK ACTION DTOs
// ============================================================================
class QuickActionParametersDto {
    roomNumber;
    guestId;
    taskId;
    notes;
    priority;
    dueDate;
    status;
}
exports.QuickActionParametersDto = QuickActionParametersDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number for room-specific actions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickActionParametersDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest ID for guest-related actions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickActionParametersDto.prototype, "guestId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task ID for task-related actions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickActionParametersDto.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Action notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickActionParametersDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Priority level for actions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickActionParametersDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Due date for scheduled actions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickActionParametersDto.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Status value for status-update actions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickActionParametersDto.prototype, "status", void 0);
class QuickActionExecuteDto {
    actionId;
    parameters;
}
exports.QuickActionExecuteDto = QuickActionExecuteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action ID to execute' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickActionExecuteDto.prototype, "actionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional parameters for action', type: QuickActionParametersDto }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", QuickActionParametersDto)
], QuickActionExecuteDto.prototype, "parameters", void 0);
class NextActionDto {
    title;
    actionUrl;
    icon;
}
exports.NextActionDto = NextActionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Next action title' }),
    __metadata("design:type", String)
], NextActionDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Next action URL' }),
    __metadata("design:type", String)
], NextActionDto.prototype, "actionUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Next action icon' }),
    __metadata("design:type", String)
], NextActionDto.prototype, "icon", void 0);
class QuickActionResponseDto {
    success;
    message;
    data;
    nextAction;
}
exports.QuickActionResponseDto = QuickActionResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action execution status' }),
    __metadata("design:type", Boolean)
], QuickActionResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], QuickActionResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Result data from action', type: Object }),
    __metadata("design:type", Object)
], QuickActionResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Next suggested action', type: NextActionDto }),
    __metadata("design:type", NextActionDto)
], QuickActionResponseDto.prototype, "nextAction", void 0);
// ============================================================================
// CLOCK IN/OUT DTOs
// ============================================================================
class DeviceInfoDto {
    deviceId;
    platform;
    appVersion;
}
exports.DeviceInfoDto = DeviceInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device platform' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'App version' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDto.prototype, "appVersion", void 0);
class ClockInOutDto {
    location;
    notes;
    timestamp;
    deviceInfo;
}
exports.ClockInOutDto = ClockInOutDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'GPS location for verification' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], ClockInOutDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClockInOutDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Clock in/out timestamp' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClockInOutDto.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Device information', type: DeviceInfoDto }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", DeviceInfoDto)
], ClockInOutDto.prototype, "deviceInfo", void 0);
// ============================================================================
// STAFF PROFILE & PUBLIC USER DTOs
// ============================================================================
/**
 * Emergency Contact DTO
 * @description Nested object for staff emergency contact info
 */
class EmergencyContactDto {
    name;
    phone;
    relationship;
}
exports.EmergencyContactDto = EmergencyContactDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact name', example: 'Jane Doe' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmergencyContactDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact phone number', example: '+84-123-456-789' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmergencyContactDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Relationship to staff', example: 'Spouse' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmergencyContactDto.prototype, "relationship", void 0);
/**
 * Notification Preferences DTO
 * @description Nested object for notification channel preferences
 */
class NotificationPreferencesDto {
    email;
    push;
    sms;
}
exports.NotificationPreferencesDto = NotificationPreferencesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receive email notifications', example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], NotificationPreferencesDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receive push notifications', example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], NotificationPreferencesDto.prototype, "push", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receive SMS notifications', example: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], NotificationPreferencesDto.prototype, "sms", void 0);
/**
 * User Preferences DTO
 * @description Nested object for user preference settings
 */
class UserPreferencesDto {
    language;
    timezone;
    notificationSettings;
}
exports.UserPreferencesDto = UserPreferencesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Preferred language', example: 'vi' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserPreferencesDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Preferred timezone', example: 'Asia/Ho_Chi_Minh' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserPreferencesDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification settings', type: NotificationPreferencesDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => NotificationPreferencesDto),
    __metadata("design:type", NotificationPreferencesDto)
], UserPreferencesDto.prototype, "notificationSettings", void 0);
/**
 * Staff Profile DTO
 * @description Full staff profile response for mobile app
 * @usage GET /api/staff/profile
 */
class StaffProfileDto {
    id;
    firstName;
    lastName;
    email;
    phone;
    role;
    status;
    avatar;
    tenantId;
    hotelId;
    permissions;
    department;
    position;
    hireDate;
    emergencyContact;
    preferences;
    metadata;
    createdAt;
    updatedAt;
}
exports.StaffProfileDto = StaffProfileDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID (UUID)' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff role (primary)' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff status', enum: enums_1.StaffStatus }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Profile avatar URL' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (UUID)' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID (UUID)' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff permissions', type: [String] }),
    __metadata("design:type", Array)
], StaffProfileDto.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Department' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Position/Job title' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hire date (ISO date)' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "hireDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Emergency contact information', type: EmergencyContactDto }),
    __metadata("design:type", EmergencyContactDto)
], StaffProfileDto.prototype, "emergencyContact", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User preferences', type: UserPreferencesDto }),
    __metadata("design:type", UserPreferencesDto)
], StaffProfileDto.prototype, "preferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata' }),
    __metadata("design:type", Object)
], StaffProfileDto.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], StaffProfileDto.prototype, "updatedAt", void 0);
/**
 * Public User DTO
 * @description Minimal public-facing user information
 * @usage GET /api/staff/user/:userId/public-info, GET /api/staff/users/public-list
 */
class PublicUserDto {
    id;
    firstName;
    lastName;
    email;
    role;
    status;
    avatar;
    department;
    position;
}
exports.PublicUserDto = PublicUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID (UUID)' }),
    __metadata("design:type", String)
], PublicUserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name' }),
    __metadata("design:type", String)
], PublicUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name' }),
    __metadata("design:type", String)
], PublicUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    __metadata("design:type", String)
], PublicUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User role' }),
    __metadata("design:type", String)
], PublicUserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User status' }),
    __metadata("design:type", String)
], PublicUserDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Profile avatar URL' }),
    __metadata("design:type", String)
], PublicUserDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Department' }),
    __metadata("design:type", String)
], PublicUserDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Position/Job title' }),
    __metadata("design:type", String)
], PublicUserDto.prototype, "position", void 0);
// ============================================================================
// STAFF MOBILE DASHBOARD DTOs (actual service response shapes)
// ============================================================================
class StaffMobileDashboardStaffDto {
    id;
    name;
    role;
    avatar;
    shiftStart;
    shiftEnd;
    shiftStatus;
}
exports.StaffMobileDashboardStaffDto = StaffMobileDashboardStaffDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StaffMobileDashboardStaffDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff full name' }),
    __metadata("design:type", String)
], StaffMobileDashboardStaffDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff role at hotel' }),
    __metadata("design:type", String)
], StaffMobileDashboardStaffDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Avatar URL' }),
    __metadata("design:type", String)
], StaffMobileDashboardStaffDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift start time' }),
    __metadata("design:type", String)
], StaffMobileDashboardStaffDto.prototype, "shiftStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift end time' }),
    __metadata("design:type", String)
], StaffMobileDashboardStaffDto.prototype, "shiftEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current shift status' }),
    __metadata("design:type", String)
], StaffMobileDashboardStaffDto.prototype, "shiftStatus", void 0);
class StaffMobileDashboardTaskSummaryDto {
    total;
    completed;
    pending;
    inProgress;
    overdue;
}
exports.StaffMobileDashboardTaskSummaryDto = StaffMobileDashboardTaskSummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks' }),
    __metadata("design:type", Number)
], StaffMobileDashboardTaskSummaryDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completed tasks' }),
    __metadata("design:type", Number)
], StaffMobileDashboardTaskSummaryDto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pending tasks' }),
    __metadata("design:type", Number)
], StaffMobileDashboardTaskSummaryDto.prototype, "pending", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'In-progress tasks' }),
    __metadata("design:type", Number)
], StaffMobileDashboardTaskSummaryDto.prototype, "inProgress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overdue tasks' }),
    __metadata("design:type", Number)
], StaffMobileDashboardTaskSummaryDto.prototype, "overdue", void 0);
class QuickActionItemDto {
    id;
    title;
    description;
    icon;
    actionUrl;
    color;
    requiresConfirmation;
    order;
    roles;
}
exports.QuickActionItemDto = QuickActionItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action ID' }),
    __metadata("design:type", String)
], QuickActionItemDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action title' }),
    __metadata("design:type", String)
], QuickActionItemDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action description' }),
    __metadata("design:type", String)
], QuickActionItemDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Icon name' }),
    __metadata("design:type", String)
], QuickActionItemDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action URL' }),
    __metadata("design:type", String)
], QuickActionItemDto.prototype, "actionUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Color code' }),
    __metadata("design:type", String)
], QuickActionItemDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether action requires confirmation' }),
    __metadata("design:type", Boolean)
], QuickActionItemDto.prototype, "requiresConfirmation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Display order' }),
    __metadata("design:type", Number)
], QuickActionItemDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Roles that can see this action', type: [String] }),
    __metadata("design:type", Array)
], QuickActionItemDto.prototype, "roles", void 0);
class StaffAlertDto {
    id;
    type;
    title;
    message;
    priority;
    createdAt;
    roomNumber;
    actionUrl;
    acknowledged;
}
exports.StaffAlertDto = StaffAlertDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alert ID' }),
    __metadata("design:type", String)
], StaffAlertDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alert type' }),
    __metadata("design:type", String)
], StaffAlertDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alert title' }),
    __metadata("design:type", String)
], StaffAlertDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alert message' }),
    __metadata("design:type", String)
], StaffAlertDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Priority level' }),
    __metadata("design:type", String)
], StaffAlertDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ISO)' }),
    __metadata("design:type", String)
], StaffAlertDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Related room number' }),
    __metadata("design:type", String)
], StaffAlertDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action URL' }),
    __metadata("design:type", String)
], StaffAlertDto.prototype, "actionUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether alert has been acknowledged' }),
    __metadata("design:type", Boolean)
], StaffAlertDto.prototype, "acknowledged", void 0);
class StaffRecentActivityDto {
    id;
    type;
    description;
    timestamp;
    roomNumber;
    status;
    icon;
}
exports.StaffRecentActivityDto = StaffRecentActivityDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity ID' }),
    __metadata("design:type", String)
], StaffRecentActivityDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity type' }),
    __metadata("design:type", String)
], StaffRecentActivityDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity description' }),
    __metadata("design:type", String)
], StaffRecentActivityDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity timestamp (ISO)' }),
    __metadata("design:type", String)
], StaffRecentActivityDto.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Related room number' }),
    __metadata("design:type", String)
], StaffRecentActivityDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity status' }),
    __metadata("design:type", String)
], StaffRecentActivityDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Icon name' }),
    __metadata("design:type", String)
], StaffRecentActivityDto.prototype, "icon", void 0);
class StaffMobileDashboardHotelStatusDto {
    totalRooms;
    occupiedRooms;
    checkingOut;
    checkingIn;
    outOfOrder;
    cleaning;
}
exports.StaffMobileDashboardHotelStatusDto = StaffMobileDashboardHotelStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms in hotel' }),
    __metadata("design:type", Number)
], StaffMobileDashboardHotelStatusDto.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currently occupied rooms' }),
    __metadata("design:type", Number)
], StaffMobileDashboardHotelStatusDto.prototype, "occupiedRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rooms checking out today' }),
    __metadata("design:type", Number)
], StaffMobileDashboardHotelStatusDto.prototype, "checkingOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rooms checking in today' }),
    __metadata("design:type", Number)
], StaffMobileDashboardHotelStatusDto.prototype, "checkingIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Out of order rooms' }),
    __metadata("design:type", Number)
], StaffMobileDashboardHotelStatusDto.prototype, "outOfOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rooms being cleaned' }),
    __metadata("design:type", Number)
], StaffMobileDashboardHotelStatusDto.prototype, "cleaning", void 0);
class StaffMobilePerformanceDto {
    tasksCompletedToday;
    averageTaskTime;
    efficiencyScore;
    guestRating;
}
exports.StaffMobilePerformanceDto = StaffMobilePerformanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks completed today' }),
    __metadata("design:type", Number)
], StaffMobilePerformanceDto.prototype, "tasksCompletedToday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average task completion time in minutes' }),
    __metadata("design:type", Number)
], StaffMobilePerformanceDto.prototype, "averageTaskTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Efficiency score (0-100)' }),
    __metadata("design:type", Number)
], StaffMobilePerformanceDto.prototype, "efficiencyScore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest rating (1.0-5.0)' }),
    __metadata("design:type", Number)
], StaffMobilePerformanceDto.prototype, "guestRating", void 0);
/**
 * Staff Mobile Dashboard DTO — composite response from service
 * @usage GET /api/staff/:staffId/dashboard/mobile
 */
class StaffMobileDashboardDto {
    staff;
    taskSummary;
    quickActions;
    alerts;
    hotelStatus;
    recentActivity;
    performance;
}
exports.StaffMobileDashboardDto = StaffMobileDashboardDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff info', type: StaffMobileDashboardStaffDto }),
    __metadata("design:type", StaffMobileDashboardStaffDto)
], StaffMobileDashboardDto.prototype, "staff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task summary', type: StaffMobileDashboardTaskSummaryDto }),
    __metadata("design:type", StaffMobileDashboardTaskSummaryDto)
], StaffMobileDashboardDto.prototype, "taskSummary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quick actions', type: [QuickActionItemDto] }),
    __metadata("design:type", Array)
], StaffMobileDashboardDto.prototype, "quickActions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff alerts', type: [StaffAlertDto] }),
    __metadata("design:type", Array)
], StaffMobileDashboardDto.prototype, "alerts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel status', type: StaffMobileDashboardHotelStatusDto }),
    __metadata("design:type", StaffMobileDashboardHotelStatusDto)
], StaffMobileDashboardDto.prototype, "hotelStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Recent activity', type: [StaffRecentActivityDto] }),
    __metadata("design:type", Array)
], StaffMobileDashboardDto.prototype, "recentActivity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Performance metrics', type: StaffMobilePerformanceDto }),
    __metadata("design:type", StaffMobilePerformanceDto)
], StaffMobileDashboardDto.prototype, "performance", void 0);
// ============================================================================
// STAFF MOBILE OTHER RESPONSE DTOs
// ============================================================================
class SelectHotelResultDto {
    success;
    message;
    hotelId;
    hotelName;
}
exports.SelectHotelResultDto = SelectHotelResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Operation success' }),
    __metadata("design:type", Boolean)
], SelectHotelResultDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Result message' }),
    __metadata("design:type", String)
], SelectHotelResultDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Selected hotel ID' }),
    __metadata("design:type", String)
], SelectHotelResultDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Selected hotel name' }),
    __metadata("design:type", String)
], SelectHotelResultDto.prototype, "hotelName", void 0);
class PhotoUploadResultDto {
    success;
    message;
    photoId;
    url;
}
exports.PhotoUploadResultDto = PhotoUploadResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Operation success' }),
    __metadata("design:type", Boolean)
], PhotoUploadResultDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Result message' }),
    __metadata("design:type", String)
], PhotoUploadResultDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Uploaded photo ID' }),
    __metadata("design:type", String)
], PhotoUploadResultDto.prototype, "photoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Photo URL' }),
    __metadata("design:type", String)
], PhotoUploadResultDto.prototype, "url", void 0);
class BatchPhotoUploadResultDto {
    success;
    message;
    photoIds;
}
exports.BatchPhotoUploadResultDto = BatchPhotoUploadResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Operation success' }),
    __metadata("design:type", Boolean)
], BatchPhotoUploadResultDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Result message' }),
    __metadata("design:type", String)
], BatchPhotoUploadResultDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Uploaded photo IDs', type: [String] }),
    __metadata("design:type", Array)
], BatchPhotoUploadResultDto.prototype, "photoIds", void 0);
class PhotoUploadContextDto {
    taskId;
    roomNumber;
    type;
}
exports.PhotoUploadContextDto = PhotoUploadContextDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related task ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PhotoUploadContextDto.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related room number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PhotoUploadContextDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photo type/category' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PhotoUploadContextDto.prototype, "type", void 0);
class QuickUploadPhotoDto {
    taskId;
    roomNumber;
    category;
    description;
    base64Data;
    filename;
}
exports.QuickUploadPhotoDto = QuickUploadPhotoDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related task ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickUploadPhotoDto.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related room number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickUploadPhotoDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photo category' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickUploadPhotoDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photo description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickUploadPhotoDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base64 encoded image data' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickUploadPhotoDto.prototype, "base64Data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Original filename' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickUploadPhotoDto.prototype, "filename", void 0);
class BatchUploadPhotosDto {
    files;
    taskId;
    roomNumber;
    category;
}
exports.BatchUploadPhotosDto = BatchUploadPhotosDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of file data', type: [Object] }),
    __metadata("design:type", Array)
], BatchUploadPhotosDto.prototype, "files", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related task ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchUploadPhotosDto.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related room number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchUploadPhotosDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photo category' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchUploadPhotosDto.prototype, "category", void 0);
/**
 * Public User List Response DTO
 * @description Paginated list of public user info
 * @usage GET /api/staff/users/public-list
 */
class PublicUserListResponseDto {
    data;
    total;
    page;
    limit;
    hasNext;
    hasPrev;
}
exports.PublicUserListResponseDto = PublicUserListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of public user info', type: [PublicUserDto] }),
    __metadata("design:type", Array)
], PublicUserListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count of users' }),
    __metadata("design:type", Number)
], PublicUserListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], PublicUserListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], PublicUserListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Has next page' }),
    __metadata("design:type", Boolean)
], PublicUserListResponseDto.prototype, "hasNext", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Has previous page' }),
    __metadata("design:type", Boolean)
], PublicUserListResponseDto.prototype, "hasPrev", void 0);
/**
 * Update Profile DTO
 * @description Request body for updating staff profile
 * @usage PUT /api/staff/profile
 */
class UpdateProfileDto {
    firstName;
    lastName;
    email;
    phone;
    avatar;
    emergencyContact;
    preferences;
}
exports.UpdateProfileDto = UpdateProfileDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'First name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Profile avatar URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Emergency contact information', type: EmergencyContactDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => EmergencyContactDto),
    __metadata("design:type", EmergencyContactDto)
], UpdateProfileDto.prototype, "emergencyContact", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User preferences', type: UserPreferencesDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UserPreferencesDto),
    __metadata("design:type", UserPreferencesDto)
], UpdateProfileDto.prototype, "preferences", void 0);
//# sourceMappingURL=staff.dto.js.map