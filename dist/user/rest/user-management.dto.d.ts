/**
 * ============================================================================
 * USER MANAGEMENT CONTRACT DTOs
 * ============================================================================
 * @description Single source of truth for user management types
 * @usage Used by BOTH API Gateway (REST) and User Service (NATS)
 * @pattern Contract Unification - classes with @ApiProperty decorators
 * @created 2026-02-13
 * ============================================================================
 */
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    roles: string[];
    tenantId?: string;
    hotelId?: string;
    employeeId?: string;
    position?: string;
    isActive?: boolean;
    password: string;
    phone?: string;
    avatarUrl?: string;
    language?: string;
    timezone?: string;
}
export declare class UpdateUserDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    roles?: string[];
    employeeId?: string;
    position?: string;
    isActive?: boolean;
    phone?: string;
    avatarUrl?: string;
    language?: string;
    timezone?: string;
}
export declare class UserDto {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
    tenantId: string;
    hotelId?: string;
    employeeId?: string;
    position?: string;
    staffStatus?: string;
    isActive: boolean;
    lastLogin?: string;
    preferences?: any;
    phone?: string;
    avatarUrl?: string;
    language?: string;
    timezone?: string;
    createdAt: string;
    updatedAt: string;
}
export declare class UserListResponseDto {
    data: UserDto[];
    total: number;
    page: number;
    limit: number;
}
export declare class CreateUserResponseDto {
    data: UserDto;
    message: string;
}
export declare class UpdateUserResponseDto {
    data: UserDto;
    message: string;
}
export declare class DeleteUserResponseDto {
    success: boolean;
    message: string;
}
export declare class UserStatsResponseDto {
    totalUsers: number;
    activeUsers: number;
    inactiveUsers: number;
    recentLogins: number;
    staffCount?: number;
}
//# sourceMappingURL=user-management.dto.d.ts.map