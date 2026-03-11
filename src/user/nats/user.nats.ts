/**
 * User Service NATS Message Types
 * All user-related NATS message payloads and responses
 * Exported from user-service
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '../enums';
import { StaffStatus } from '../enums';
import { Department } from '../enums';

// ============= NATS Request DTOs =============

export class CreateUserRequestDto {
  @ApiProperty({ description: 'Email address' })
  email: string;

  @ApiProperty({ description: 'Password' })
  password: string;

  @ApiProperty({ description: 'First name' })
  firstName: string;

  @ApiProperty({ description: 'Last name' })
  lastName: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'User roles', enum: UserRole, isArray: true })
  roles: UserRole[];

  @ApiPropertyOptional({ description: 'Is account active' })
  isActive?: boolean;
}

export class FindUserRequestDto {
  @ApiProperty({ description: 'User ID' })
  id: string;
}

export class FindAllUsersRequestDto {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Role filter' })
  role?: string;

  @ApiPropertyOptional({ description: 'Page number' })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page' })
  limit?: number;
}

export class FindUserByEmailRequestDto {
  @ApiProperty({ description: 'Email address' })
  email: string;
}

export class UpdateUserRequestDto {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiPropertyOptional({ description: 'First name' })
  firstName?: string;

  @ApiPropertyOptional({ description: 'Last name' })
  lastName?: string;

  @ApiPropertyOptional({ description: 'User roles', enum: UserRole, isArray: true })
  roles?: UserRole[];

  @ApiPropertyOptional({ description: 'Is account active' })
  isActive?: boolean;
}

export class RemoveUserRequestDto {
  @ApiProperty({ description: 'User ID' })
  id: string;
}

// ============= Staff-specific Request DTOs =============

export class FindStaffRequestDto {
  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Roles filter', type: [String] })
  roles?: string[];

  @ApiPropertyOptional({ description: 'Staff status', enum: StaffStatus })
  staffStatus?: StaffStatus;

  @ApiPropertyOptional({ description: 'Page number' })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page' })
  limit?: number;

  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Search query' })
  search?: string;
}

export class GetStaffByIdRequestDto {
  @ApiProperty({ description: 'Staff ID' })
  staffId: string;
}

export class FindStaffByRoleRequestDto {
  @ApiProperty({ description: 'Role' })
  role: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

export class UpdateStaffStatusRequestDto {
  @ApiProperty({ description: 'Staff ID' })
  id: string;

  @ApiProperty({ description: 'Staff status', enum: StaffStatus })
  status: StaffStatus;
}

export class AssignStaffToHotelRequestDto {
  @ApiProperty({ description: 'Staff ID' })
  id: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

export class CreateStaffRequestDto extends CreateUserRequestDto {
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Staff status', enum: StaffStatus })
  staffStatus?: StaffStatus;

  @ApiPropertyOptional({ description: 'Employee ID' })
  employeeId?: string;

  @ApiPropertyOptional({ description: 'Position' })
  position?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  phone?: string;

  @ApiPropertyOptional({ description: 'Department', enum: Department })
  department?: Department;
}

// ============= User Search and Stats Request DTOs =============

export class SearchUsersRequestDto {
  @ApiProperty({ description: 'Search query' })
  query: string;

  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Role filter' })
  role?: string;

  @ApiPropertyOptional({ description: 'Result limit' })
  limit?: number;
}

export class GetUserStatsRequestDto {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;
}

export class AssignRolesRequestDto {
  @ApiProperty({ description: 'User ID' })
  userId: string;

  @ApiProperty({ description: 'Roles to assign', enum: UserRole, isArray: true })
  roles: UserRole[];
}

export class ActivateUserRequestDto {
  @ApiProperty({ description: 'User ID' })
  id: string;
}

export class DeactivateUserRequestDto {
  @ApiProperty({ description: 'User ID' })
  id: string;
}

export class GetGuestRequestDto {
  @ApiProperty({ description: 'Guest ID' })
  guestId: string;
}

// ============= NATS Response DTOs =============

export class UserResponseDto {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'Email address' })
  email: string;

  @ApiProperty({ description: 'First name' })
  firstName: string;

  @ApiProperty({ description: 'Last name' })
  lastName: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'User roles', enum: UserRole, isArray: true })
  roles: UserRole[];

  @ApiProperty({ description: 'Is account active' })
  isActive: boolean;

  @ApiPropertyOptional({ description: 'Staff status', enum: StaffStatus })
  staffStatus?: StaffStatus;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: Date;
}

export class StaffInfoResponseDto {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'First name' })
  firstName: string;

  @ApiProperty({ description: 'Last name' })
  lastName: string;

  @ApiProperty({ description: 'Email address' })
  email: string;

  @ApiProperty({ description: 'User roles', enum: UserRole, isArray: true })
  roles: UserRole[];

  @ApiPropertyOptional({ description: 'Staff status', enum: StaffStatus })
  staffStatus?: StaffStatus;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;
}

export class UserStatsDto {
  @ApiProperty({ description: 'Total users' })
  totalUsers: number;

  @ApiProperty({ description: 'Active users' })
  activeUsers: number;

  @ApiProperty({ description: 'Inactive users' })
  inactiveUsers: number;

  @ApiProperty({ description: 'Users by role' })
  usersByRole: Record<string, number>;

  @ApiProperty({ description: 'Recent logins' })
  recentLogins: number;
}

export class FindStaffListNatsResponseDto {
  @ApiProperty({ description: 'Staff list', type: [UserResponseDto] })
  data: UserResponseDto[];

  @ApiProperty({ description: 'Total count' })
  total: number;

  @ApiProperty({ description: 'Current page' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}
