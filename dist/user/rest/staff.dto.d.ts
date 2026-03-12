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
/**
 * Dashboard Staff Info
 * @usage Part of MobileDashboardDto
 */
export declare class DashboardStaffInfoDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    role: string;
    status: string;
    avatar?: string;
    tenantId: string;
    hotelId: string;
    permissions?: string[];
    isActive?: boolean;
}
/**
 * Dashboard Task Stats
 */
export declare class DashboardTaskStatsDto {
    total: number;
    pending: number;
    inProgress: number;
    completed: number;
    overdue: number;
    todayCompleted: number;
    weekCompleted: number;
    averageCompletionTime?: number;
}
/**
 * Dashboard Occupancy
 */
export declare class DashboardOccupancyDto {
    totalRooms: number;
    occupiedRooms: number;
    availableRooms: number;
    outOfOrderRooms: number;
    checkoutsToday: number;
    checkinsToday: number;
    occupancyRate: number;
    date: string;
}
/**
 * Dashboard Performance
 */
export declare class DashboardPerformanceDto {
    tasksCompletedToday: number;
    averageTaskTime: number;
    qualityScore?: number;
    punctualityScore?: number;
    period: string;
}
/**
 * Dashboard Current Shift
 */
export declare class DashboardCurrentShiftDto {
    id?: string;
    staffId: string;
    clockInTime?: string;
    clockOutTime?: string;
    status: string;
    hoursWorked: number;
    breakTime?: number;
    tenantId: string;
    hotelId: string;
}
/**
 * Mobile Dashboard DTO — composite dashboard response
 * @usage GET /api/staff/dashboard
 */
export declare class MobileDashboardDto {
    staffInfo: DashboardStaffInfoDto;
    taskStats: DashboardTaskStatsDto;
    occupancy: DashboardOccupancyDto;
    performance: DashboardPerformanceDto;
    currentShift: DashboardCurrentShiftDto;
}
export declare class QuickStatsResponseDto {
    tasksToday: number;
    tasksCompleted: number;
    tasksPending: number;
    currentShift: string;
    hoursWorked: number;
}
export declare class QuickActionParametersDto {
    roomNumber?: string;
    guestId?: string;
    taskId?: string;
    notes?: string;
    priority?: string;
    dueDate?: string;
    status?: string;
}
export declare class QuickActionExecuteDto {
    actionId: string;
    parameters?: QuickActionParametersDto;
}
export declare class NextActionDto {
    title: string;
    actionUrl: string;
    icon: string;
}
export declare class QuickActionResponseDto {
    success: boolean;
    message: string;
    data?: Record<string, unknown>;
    nextAction?: NextActionDto;
}
export declare class DeviceInfoDto {
    deviceId: string;
    platform: string;
    appVersion: string;
}
export declare class ClockInOutDto {
    location?: {
        latitude: number;
        longitude: number;
        accuracy: number;
        timestamp: string;
    };
    notes?: string;
    timestamp: string;
    deviceInfo?: DeviceInfoDto;
}
/**
 * Emergency Contact DTO
 * @description Nested object for staff emergency contact info
 */
export declare class EmergencyContactDto {
    name: string;
    phone: string;
    relationship: string;
}
/**
 * Notification Preferences DTO
 * @description Nested object for notification channel preferences
 */
export declare class NotificationPreferencesDto {
    email: boolean;
    push: boolean;
    sms: boolean;
}
/**
 * User Preferences DTO
 * @description Nested object for user preference settings
 */
export declare class UserPreferencesDto {
    language: string;
    timezone: string;
    notificationSettings: NotificationPreferencesDto;
}
/**
 * Staff Profile DTO
 * @description Full staff profile response for mobile app
 * @usage GET /api/staff/profile
 */
export declare class StaffProfileDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    role: string;
    status: StaffStatus;
    avatar?: string;
    tenantId: string;
    hotelId: string;
    permissions?: string[];
    department?: string;
    position?: string;
    hireDate?: string;
    emergencyContact?: EmergencyContactDto;
    preferences?: UserPreferencesDto;
    metadata?: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
}
/**
 * Public User DTO
 * @description Minimal public-facing user information
 * @usage GET /api/staff/user/:userId/public-info, GET /api/staff/users/public-list
 */
export declare class PublicUserDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    status: string;
    avatar?: string;
    department?: string;
    position?: string;
}
export declare class StaffMobileDashboardStaffDto {
    id: string;
    name: string;
    role: string;
    avatar?: string;
    shiftStart: string;
    shiftEnd: string;
    shiftStatus: string;
}
export declare class StaffMobileDashboardTaskSummaryDto {
    total: number;
    completed: number;
    pending: number;
    inProgress: number;
    overdue: number;
}
export declare class QuickActionItemDto {
    id: string;
    title: string;
    description: string;
    icon: string;
    actionUrl: string;
    color: string;
    requiresConfirmation: boolean;
    order: number;
    roles: string[];
}
export declare class StaffAlertDto {
    id: string;
    type: string;
    title: string;
    message: string;
    priority: string;
    createdAt: string;
    roomNumber: string;
    actionUrl: string;
    acknowledged: boolean;
}
export declare class StaffRecentActivityDto {
    id: string;
    type: string;
    description: string;
    timestamp: string;
    roomNumber: string;
    status: string;
    icon: string;
}
export declare class StaffMobileDashboardHotelStatusDto {
    totalRooms: number;
    occupiedRooms: number;
    checkingOut: number;
    checkingIn: number;
    outOfOrder: number;
    cleaning: number;
}
export declare class StaffMobilePerformanceDto {
    tasksCompletedToday: number;
    averageTaskTime: number;
    efficiencyScore: number;
    guestRating?: number;
}
/**
 * Staff Mobile Dashboard DTO — composite response from service
 * @usage GET /api/staff/:staffId/dashboard/mobile
 */
export declare class StaffMobileDashboardDto {
    staff: StaffMobileDashboardStaffDto;
    taskSummary: StaffMobileDashboardTaskSummaryDto;
    quickActions: QuickActionItemDto[];
    alerts: StaffAlertDto[];
    hotelStatus: StaffMobileDashboardHotelStatusDto;
    recentActivity: StaffRecentActivityDto[];
    performance: StaffMobilePerformanceDto;
}
export declare class SelectHotelResultDto {
    success: boolean;
    message: string;
    hotelId: string;
    hotelName: string;
}
export declare class PhotoUploadResultDto {
    success: boolean;
    message: string;
    photoId: string;
    url: string;
}
export declare class BatchPhotoUploadResultDto {
    success: boolean;
    message: string;
    photoIds: string[];
}
export declare class PhotoUploadContextDto {
    taskId?: string;
    roomNumber?: string;
    type?: string;
}
export declare class QuickUploadPhotoDto {
    taskId?: string;
    roomNumber?: string;
    category?: string;
    description?: string;
    base64Data: string;
    filename?: string;
}
export declare class BatchUploadPhotosDto {
    files: Record<string, unknown>[];
    taskId?: string;
    roomNumber?: string;
    category?: string;
}
/**
 * Public User List Response DTO
 * @description Paginated list of public user info
 * @usage GET /api/staff/users/public-list
 */
export declare class PublicUserListResponseDto {
    data: PublicUserDto[];
    total: number;
    page: number;
    limit: number;
    hasNext: boolean;
    hasPrev: boolean;
}
/**
 * Update Profile DTO
 * @description Request body for updating staff profile
 * @usage PUT /api/staff/profile
 */
export declare class UpdateProfileDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    avatar?: string;
    emergencyContact?: EmergencyContactDto;
    preferences?: UserPreferencesDto;
}
//# sourceMappingURL=staff.dto.d.ts.map