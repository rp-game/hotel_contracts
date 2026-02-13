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
/**
 * Create Staff DTO
 * @usage POST /api/users/staff (REST) + user.staff.create (NATS)
 * @unified Combines CreateStaffRequestDto (NATS) + CreateUserStaffDto (REST)
 */
export declare class CreateStaffDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    tenantId: string;
    roles: string[];
    hotelId: string;
    phone?: string;
    position?: string;
    department?: Department;
    employeeId?: string;
    staffStatus?: StaffStatus;
    hireDate?: string;
    permissions?: string[];
    shiftSchedule?: string;
    supervisorId?: string;
    isActive?: boolean;
}
/**
 * Update Staff Status DTO
 * @usage PATCH /api/users/staff/:id/status (REST) + user.staff.updateStatus (NATS)
 * @unified Matches UpdateStaffStatusRequestDto (NATS)
 */
export declare class UpdateStaffStatusDto {
    status: StaffStatus;
}
/**
 * Staff DTO
 * @description Complete staff member information
 * @usage Response data for staff operations
 */
export declare class StaffDto {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
    tenantId: string;
    hotelId?: string;
    employeeId?: string;
    position?: string;
    staffStatus?: StaffStatus;
    department?: string;
    isActive: boolean;
    phone?: string;
    hireDate?: string;
    permissions?: string[];
    shiftSchedule?: string;
    supervisorId?: string;
    lastLogin?: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * Staff List Response DTO
 * @usage GET /api/users/staff (REST) + user.staff.findAll (NATS response)
 */
export declare class StaffListResponseDto {
    data: StaffDto[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Create Staff Response DTO
 * @usage POST /api/users/staff response
 */
export declare class CreateStaffResponseDto {
    data: StaffDto;
    message: string;
}
/**
 * Staff Response DTO
 * @usage Single staff operation responses (update status, etc.)
 */
export declare class StaffResponseDto {
    data: StaffDto;
    message?: string;
}
//# sourceMappingURL=staff.dto.d.ts.map