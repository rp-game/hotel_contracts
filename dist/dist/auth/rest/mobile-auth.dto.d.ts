/**
 * Mobile Auth Contract DTOs
 * @description Types for staff mobile authentication endpoints
 * @usage Used by API Gateway (REST) for mobile auth flows
 */
/**
 * Zalo OAuth Authentication Request
 * @usage POST /api/staff/auth/zalo
 */
export declare class ZaloAuthDto {
    code: string;
    accessToken: string;
    zaloUserId: string;
    name: string;
    phone: string;
    avatar?: string;
}
/**
 * Link Zalo Account Request
 * @usage POST /api/staff/link-zalo-account
 */
export declare class LinkZaloAccountDto {
    zaloUserId: string;
    zaloPhone: string;
    zaloName: string;
    staffEmployeeId: string;
    linkingCode: string;
    zaloAvatar?: string;
}
/**
 * Select Hotel for Session
 * @usage POST /api/staff/select-hotel
 */
export declare class SelectHotelDto {
    hotelId: string;
    tenantId: string;
}
/**
 * System Login Request (email/password)
 * @usage POST /api/staff/auth/system-login
 */
export declare class SystemLoginDto {
    email: string;
    password: string;
    hotelId?: string;
    tenantId?: string;
}
/**
 * Staff Hotel Info — response for accessible hotels
 * @usage GET /api/staff/hotels
 */
export declare class StaffHotelInfo {
    id: string;
    name: string;
    address: string;
    tenantId: string;
    role: string;
    isDefault: boolean;
}
/**
 * Extracted user object from auth response
 */
export declare class MobileAuthUserDto {
    id: string;
    name: string;
    email: string;
    phone: string;
    roles: string[];
    tenantId: string;
    hotelId: string;
    avatar?: string;
}
/**
 * Available hotel in auth response
 */
export declare class AvailableHotelDto {
    id: string;
    name: string;
    address: string;
    tenantId: string;
}
/**
 * Mobile Auth Response
 * @usage Response from POST /api/staff/auth/zalo, POST /api/staff/auth/system-login
 */
export declare class MobileAuthResponseDto {
    accessToken: string;
    refreshToken: string;
    user: MobileAuthUserDto;
    availableHotels?: AvailableHotelDto[];
}
//# sourceMappingURL=mobile-auth.dto.d.ts.map