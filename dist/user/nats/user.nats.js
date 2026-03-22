"use strict";
/**
 * User Service NATS Message Types
 * All user-related NATS message payloads and responses
 * Exported from user-service
 */
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
exports.FindStaffListNatsResponseDto = exports.UserStatsDto = exports.StaffInfoResponseDto = exports.UserResponseDto = exports.GetGuestRequestDto = exports.DeactivateUserRequestDto = exports.ActivateUserRequestDto = exports.AssignRolesRequestDto = exports.GetUserStatsRequestDto = exports.SearchUsersRequestDto = exports.CreateStaffRequestDto = exports.AssignStaffToHotelRequestDto = exports.UpdateStaffStatusRequestDto = exports.FindStaffByRoleRequestDto = exports.GetStaffByIdRequestDto = exports.FindStaffRequestDto = exports.RemoveUserRequestDto = exports.UpdateUserRequestDto = exports.FindUserByEmailRequestDto = exports.FindAllUsersRequestDto = exports.FindUserRequestDto = exports.CreateUserRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../enums");
const enums_2 = require("../enums");
const enums_3 = require("../enums");
// ============= NATS Request DTOs =============
class CreateUserRequestDto {
    email;
    password;
    firstName;
    lastName;
    tenantId;
    roles;
    isActive;
}
exports.CreateUserRequestDto = CreateUserRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password' }),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name' }),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name' }),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User roles', enum: enums_1.UserRole, isArray: true }),
    __metadata("design:type", Array)
], CreateUserRequestDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is account active' }),
    __metadata("design:type", Boolean)
], CreateUserRequestDto.prototype, "isActive", void 0);
class FindUserRequestDto {
    id;
}
exports.FindUserRequestDto = FindUserRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], FindUserRequestDto.prototype, "id", void 0);
class FindAllUsersRequestDto {
    tenantId;
    role;
    page;
    limit;
}
exports.FindAllUsersRequestDto = FindAllUsersRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindAllUsersRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Role filter' }),
    __metadata("design:type", String)
], FindAllUsersRequestDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number' }),
    __metadata("design:type", Number)
], FindAllUsersRequestDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], FindAllUsersRequestDto.prototype, "limit", void 0);
class FindUserByEmailRequestDto {
    email;
}
exports.FindUserByEmailRequestDto = FindUserByEmailRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    __metadata("design:type", String)
], FindUserByEmailRequestDto.prototype, "email", void 0);
class UpdateUserRequestDto {
    id;
    firstName;
    lastName;
    roles;
    isActive;
}
exports.UpdateUserRequestDto = UpdateUserRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'First name' }),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last name' }),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User roles', enum: enums_1.UserRole, isArray: true }),
    __metadata("design:type", Array)
], UpdateUserRequestDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is account active' }),
    __metadata("design:type", Boolean)
], UpdateUserRequestDto.prototype, "isActive", void 0);
class RemoveUserRequestDto {
    id;
}
exports.RemoveUserRequestDto = RemoveUserRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], RemoveUserRequestDto.prototype, "id", void 0);
// ============= Staff-specific Request DTOs =============
class FindStaffRequestDto {
    hotelId;
    roles;
    staffStatus;
    page;
    limit;
    tenantId;
    search;
}
exports.FindStaffRequestDto = FindStaffRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (or "null" for chain-level staff)' }),
    __metadata("design:type", String)
], FindStaffRequestDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Roles filter', type: [String] }),
    __metadata("design:type", Array)
], FindStaffRequestDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff status', enum: enums_2.StaffStatus }),
    __metadata("design:type", String)
], FindStaffRequestDto.prototype, "staffStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number' }),
    __metadata("design:type", Number)
], FindStaffRequestDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], FindStaffRequestDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindStaffRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search query' }),
    __metadata("design:type", String)
], FindStaffRequestDto.prototype, "search", void 0);
class GetStaffByIdRequestDto {
    staffId;
}
exports.GetStaffByIdRequestDto = GetStaffByIdRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], GetStaffByIdRequestDto.prototype, "staffId", void 0);
class FindStaffByRoleRequestDto {
    role;
    tenantId;
    hotelId;
}
exports.FindStaffByRoleRequestDto = FindStaffByRoleRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Role' }),
    __metadata("design:type", String)
], FindStaffByRoleRequestDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindStaffByRoleRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], FindStaffByRoleRequestDto.prototype, "hotelId", void 0);
class UpdateStaffStatusRequestDto {
    id;
    status;
}
exports.UpdateStaffStatusRequestDto = UpdateStaffStatusRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], UpdateStaffStatusRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff status', enum: enums_2.StaffStatus }),
    __metadata("design:type", String)
], UpdateStaffStatusRequestDto.prototype, "status", void 0);
class AssignStaffToHotelRequestDto {
    id;
    hotelId;
}
exports.AssignStaffToHotelRequestDto = AssignStaffToHotelRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], AssignStaffToHotelRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], AssignStaffToHotelRequestDto.prototype, "hotelId", void 0);
class CreateStaffRequestDto extends CreateUserRequestDto {
    hotelId;
    staffStatus;
    employeeId;
    position;
    phone;
    department;
}
exports.CreateStaffRequestDto = CreateStaffRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CreateStaffRequestDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff status', enum: enums_2.StaffStatus }),
    __metadata("design:type", String)
], CreateStaffRequestDto.prototype, "staffStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Employee ID' }),
    __metadata("design:type", String)
], CreateStaffRequestDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Position' }),
    __metadata("design:type", String)
], CreateStaffRequestDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    __metadata("design:type", String)
], CreateStaffRequestDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Department', enum: enums_3.Department }),
    __metadata("design:type", String)
], CreateStaffRequestDto.prototype, "department", void 0);
// ============= User Search and Stats Request DTOs =============
class SearchUsersRequestDto {
    query;
    tenantId;
    role;
    limit;
}
exports.SearchUsersRequestDto = SearchUsersRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Search query' }),
    __metadata("design:type", String)
], SearchUsersRequestDto.prototype, "query", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], SearchUsersRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Role filter' }),
    __metadata("design:type", String)
], SearchUsersRequestDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Result limit' }),
    __metadata("design:type", Number)
], SearchUsersRequestDto.prototype, "limit", void 0);
class GetUserStatsRequestDto {
    tenantId;
    hotelId;
}
exports.GetUserStatsRequestDto = GetUserStatsRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetUserStatsRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetUserStatsRequestDto.prototype, "hotelId", void 0);
class AssignRolesRequestDto {
    userId;
    roles;
}
exports.AssignRolesRequestDto = AssignRolesRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], AssignRolesRequestDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Roles to assign', enum: enums_1.UserRole, isArray: true }),
    __metadata("design:type", Array)
], AssignRolesRequestDto.prototype, "roles", void 0);
class ActivateUserRequestDto {
    id;
}
exports.ActivateUserRequestDto = ActivateUserRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], ActivateUserRequestDto.prototype, "id", void 0);
class DeactivateUserRequestDto {
    id;
}
exports.DeactivateUserRequestDto = DeactivateUserRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], DeactivateUserRequestDto.prototype, "id", void 0);
class GetGuestRequestDto {
    guestId;
}
exports.GetGuestRequestDto = GetGuestRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest ID' }),
    __metadata("design:type", String)
], GetGuestRequestDto.prototype, "guestId", void 0);
// ============= NATS Response DTOs =============
class UserResponseDto {
    id;
    email;
    firstName;
    lastName;
    tenantId;
    roles;
    isActive;
    staffStatus;
    hotelId;
    createdAt;
    updatedAt;
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User roles', enum: enums_1.UserRole, isArray: true }),
    __metadata("design:type", Array)
], UserResponseDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is account active' }),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff status', enum: enums_2.StaffStatus }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "staffStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "updatedAt", void 0);
class StaffInfoResponseDto {
    id;
    firstName;
    lastName;
    email;
    roles;
    staffStatus;
    hotelId;
}
exports.StaffInfoResponseDto = StaffInfoResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], StaffInfoResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name' }),
    __metadata("design:type", String)
], StaffInfoResponseDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name' }),
    __metadata("design:type", String)
], StaffInfoResponseDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    __metadata("design:type", String)
], StaffInfoResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User roles', enum: enums_1.UserRole, isArray: true }),
    __metadata("design:type", Array)
], StaffInfoResponseDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff status', enum: enums_2.StaffStatus }),
    __metadata("design:type", String)
], StaffInfoResponseDto.prototype, "staffStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StaffInfoResponseDto.prototype, "hotelId", void 0);
class UserStatsDto {
    totalUsers;
    activeUsers;
    inactiveUsers;
    usersByRole;
    recentLogins;
}
exports.UserStatsDto = UserStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total users' }),
    __metadata("design:type", Number)
], UserStatsDto.prototype, "totalUsers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active users' }),
    __metadata("design:type", Number)
], UserStatsDto.prototype, "activeUsers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Inactive users' }),
    __metadata("design:type", Number)
], UserStatsDto.prototype, "inactiveUsers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Users by role' }),
    __metadata("design:type", Object)
], UserStatsDto.prototype, "usersByRole", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Recent logins' }),
    __metadata("design:type", Number)
], UserStatsDto.prototype, "recentLogins", void 0);
class FindStaffListNatsResponseDto {
    data;
    total;
    page;
    limit;
}
exports.FindStaffListNatsResponseDto = FindStaffListNatsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff list', type: [UserResponseDto] }),
    __metadata("design:type", Array)
], FindStaffListNatsResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], FindStaffListNatsResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], FindStaffListNatsResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], FindStaffListNatsResponseDto.prototype, "limit", void 0);
//# sourceMappingURL=user.nats.js.map