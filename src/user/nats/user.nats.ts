/**
 * User Service NATS Message Types
 * All user-related NATS message payloads and responses
 * Exported from user-service
 */

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

export interface UserResponseDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  tenantId: string;
  roles: UserRole[];
  isActive: boolean;
  staffStatus?: StaffStatus;
  hotelId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface StaffInfoResponseDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRole[];
  staffStatus?: StaffStatus;
  hotelId?: string;
}

export interface UserStatsDto {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  usersByRole: Record<string, number>;
  recentLogins: number;
}
