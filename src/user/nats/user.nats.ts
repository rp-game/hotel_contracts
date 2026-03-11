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

export interface CreateUserRequestDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  tenantId: string;
  roles: UserRole[];
  isActive?: boolean;
}

export interface FindUserRequestDto {
  id: string;
}

export interface FindAllUsersRequestDto {
  tenantId?: string;
  role?: string;
  page?: number;
  limit?: number;
}

export interface FindUserByEmailRequestDto {
  email: string;
}

export interface UpdateUserRequestDto {
  id: string;
  firstName?: string;
  lastName?: string;
  roles?: UserRole[];
  isActive?: boolean;
}

export interface RemoveUserRequestDto {
  id: string;
}

// ============= Staff-specific Request DTOs =============

export interface FindStaffRequestDto {
  hotelId?: string;
  roles?: string[];
  staffStatus?: StaffStatus;
  page?: number;
  limit?: number;
  tenantId?: string;
  search?: string;
}

export interface GetStaffByIdRequestDto {
  staffId: string;
}

export interface FindStaffByRoleRequestDto {
  role: string;
  tenantId: string;
  hotelId: string;
}

export interface UpdateStaffStatusRequestDto {
  id: string;
  status: StaffStatus;
}

export interface AssignStaffToHotelRequestDto {
  id: string;
  hotelId: string;
}

export interface CreateStaffRequestDto extends CreateUserRequestDto {
  hotelId: string;
  staffStatus?: StaffStatus;
  // Additional staff fields (to match CreateStaffDto from REST)
  employeeId?: string;
  position?: string;
  phone?: string;
  department?: Department;
}

// ============= User Search and Stats Request DTOs =============

export interface SearchUsersRequestDto {
  query: string;
  tenantId?: string;
  role?: string;
  limit?: number;
}

export interface GetUserStatsRequestDto {
  tenantId?: string;
  hotelId?: string;
}

export interface AssignRolesRequestDto {
  userId: string;
  roles: UserRole[];
}

export interface ActivateUserRequestDto {
  id: string;
}

export interface DeactivateUserRequestDto {
  id: string;
}

export interface GetGuestRequestDto {
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

export interface UserStatsDto {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  usersByRole: Record<string, number>;
  recentLogins: number;
}
