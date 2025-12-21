import { NatsResponse } from '../../common';
/**
 * User Service - Request/Response Types
 */
export interface TenantSettingsGetRequest {
    tenantId?: string;
    hotelId?: string;
    settingKeys?: string[];
}
export interface TenantSettingsGetResponse {
    checkInTime?: string;
    checkOutTime?: string;
    timezone?: string;
    currency?: string;
    defaultCleaningDuration?: number;
    gracePeriodMinutes?: number;
    autoAssignRooms?: boolean;
    businessHours?: {
        start: string;
        end: string;
    };
}
export interface StaffInfoRequest {
    staffId: string;
    tenantId: string;
    includeRoles?: boolean;
    includePermissions?: boolean;
}
export interface StaffInfoResponse extends NatsResponse {
    data?: {
        id: string;
        employeeId: string;
        firstName: string;
        lastName: string;
        fullName: string;
        email: string;
        phone?: string;
        position: string;
        department: string;
        hotelId: string;
        tenantId: string;
        status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
        roles?: string[];
        permissions?: string[];
        lastLoginAt?: string;
        createdAt: string;
        updatedAt: string;
    };
}
export interface TenantInfoRequest {
    tenantId: string;
    includeSettings?: boolean;
    includeSubscription?: boolean;
}
export interface TenantInfoResponse extends NatsResponse {
    data?: {
        id: string;
        name: string;
        slug: string;
        status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'TRIAL';
        subscriptionPlan: 'BASIC' | 'PROFESSIONAL' | 'ENTERPRISE' | 'TRIAL';
        subscriptionStatus: 'ACTIVE' | 'EXPIRED' | 'CANCELLED';
        features: string[];
        limits: {
            maxHotels: number;
            maxRooms: number;
            maxUsers: number;
            maxBookingsPerMonth: number;
        };
        createdAt: string;
        updatedAt: string;
        expiresAt?: string;
    };
}
export declare const UserServiceEvents: {
    readonly TENANT_SETTINGS_GET: "tenants.settings.get";
    readonly TENANT_SETTINGS_UPDATE: "tenants.settings.update";
    readonly TENANT_INFO_GET: "tenants.info.get";
    readonly STAFF_INFO_GET: "staff.info.get";
    readonly STAFF_LIST_GET: "staff.list.get";
    readonly STAFF_PERMISSIONS_CHECK: "staff.permissions.check";
    readonly TOKEN_VALIDATE: "auth.token.validate";
    readonly USER_PERMISSIONS_GET: "users.permissions.get";
    readonly NOTIFICATION_SEND: "notifications.send";
    readonly NOTIFICATION_BULK_SEND: "notifications.bulk.send";
};
export type UserServiceEventType = (typeof UserServiceEvents)[keyof typeof UserServiceEvents];
//# sourceMappingURL=user.types.d.ts.map