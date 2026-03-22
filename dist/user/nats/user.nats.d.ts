/**
 * User Service NATS Message Types
 * All user-related NATS message payloads and responses
 * Exported from user-service
 */
import { UserRole } from '../enums';
import { StaffStatus } from '../enums';
import { Department } from '../enums';
export declare class CreateUserRequestDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    tenantId: string;
    roles: UserRole[];
    isActive?: boolean;
}
export declare class FindUserRequestDto {
    id: string;
}
export declare class FindAllUsersRequestDto {
    tenantId?: string;
    role?: string;
    page?: number;
    limit?: number;
}
export declare class FindUserByEmailRequestDto {
    email: string;
}
export declare class UpdateUserRequestDto {
    id: string;
    firstName?: string;
    lastName?: string;
    roles?: UserRole[];
    isActive?: boolean;
}
export declare class RemoveUserRequestDto {
    id: string;
}
export declare class FindStaffRequestDto {
    hotelId?: string | null;
    roles?: string[];
    staffStatus?: StaffStatus;
    page?: number;
    limit?: number;
    tenantId?: string;
    search?: string;
}
export declare class GetStaffByIdRequestDto {
    staffId: string;
}
export declare class FindStaffByRoleRequestDto {
    role: string;
    tenantId: string;
    hotelId: string;
}
export declare class UpdateStaffStatusRequestDto {
    id: string;
    status: StaffStatus;
}
export declare class AssignStaffToHotelRequestDto {
    id: string;
    hotelId: string;
}
export declare class CreateStaffRequestDto extends CreateUserRequestDto {
    hotelId: string;
    staffStatus?: StaffStatus;
    employeeId?: string;
    position?: string;
    phone?: string;
    department?: Department;
}
export declare class SearchUsersRequestDto {
    query: string;
    tenantId?: string;
    role?: string;
    limit?: number;
}
export declare class GetUserStatsRequestDto {
    tenantId?: string;
    hotelId?: string;
}
export declare class AssignRolesRequestDto {
    userId: string;
    roles: UserRole[];
}
export declare class ActivateUserRequestDto {
    id: string;
}
export declare class DeactivateUserRequestDto {
    id: string;
}
export declare class GetGuestRequestDto {
    guestId: string;
}
export declare class UserResponseDto {
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
export declare class StaffInfoResponseDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: UserRole[];
    staffStatus?: StaffStatus;
    hotelId?: string;
}
export declare class UserStatsDto {
    totalUsers: number;
    activeUsers: number;
    inactiveUsers: number;
    usersByRole: Record<string, number>;
    recentLogins: number;
}
export declare class FindStaffListNatsResponseDto {
    data: UserResponseDto[];
    total: number;
    page: number;
    limit: number;
}
//# sourceMappingURL=user.nats.d.ts.map