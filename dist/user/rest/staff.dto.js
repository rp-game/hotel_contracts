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
exports.StaffResponseDto = exports.CreateStaffResponseDto = exports.StaffListResponseDto = exports.StaffDto = exports.UpdateStaffStatusDto = exports.CreateStaffDto = void 0;
const swagger_1 = require("@nestjs/swagger");
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
//# sourceMappingURL=staff.dto.js.map