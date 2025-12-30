"use strict";
/**
 * User Role Enum
 * Represents user roles in the SaziHotel system
 * Based on ROLES.md specification
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    // === PLATFORM LEVEL ROLES ===
    UserRole["SYSTEM_ADMIN"] = "SYSTEM_ADMIN";
    UserRole["PLATFORM_ADMIN"] = "PLATFORM_ADMIN";
    UserRole["PLATFORM_OPERATIONS"] = "PLATFORM_OPERATIONS";
    UserRole["PLATFORM_BILLING"] = "PLATFORM_BILLING";
    UserRole["PLATFORM_ANALYTICS"] = "PLATFORM_ANALYTICS";
    UserRole["PLATFORM_SUPPORT"] = "PLATFORM_SUPPORT";
    // === TENANT/CHAIN LEVEL ROLES ===
    UserRole["CHAIN_OWNER"] = "CHAIN_OWNER";
    UserRole["CHAIN_MANAGER"] = "CHAIN_MANAGER";
    // === HOTEL LEVEL ROLES ===
    UserRole["HOTEL_MANAGER"] = "HOTEL_MANAGER";
    UserRole["ASSISTANT_MANAGER"] = "ASSISTANT_MANAGER";
    // === FRONT OFFICE ROLES ===
    UserRole["FRONT_DESK_MANAGER"] = "FRONT_DESK_MANAGER";
    UserRole["FRONT_DESK"] = "FRONT_DESK";
    UserRole["NIGHT_AUDITOR"] = "NIGHT_AUDITOR";
    // === GUEST SERVICES ROLES ===
    UserRole["GUEST_SERVICES_MANAGER"] = "GUEST_SERVICES_MANAGER";
    UserRole["CONCIERGE"] = "CONCIERGE";
    // === HOUSEKEEPING ROLES ===
    UserRole["HOUSEKEEPING_MANAGER"] = "HOUSEKEEPING_MANAGER";
    UserRole["HOUSEKEEPING_SUPERVISOR"] = "HOUSEKEEPING_SUPERVISOR";
    UserRole["HOUSEKEEPING_STAFF"] = "HOUSEKEEPING_STAFF";
    // === FINANCIAL ROLES ===
    UserRole["FINANCIAL_MANAGER"] = "FINANCIAL_MANAGER";
    UserRole["ACCOUNTING"] = "ACCOUNTING";
    UserRole["REVENUE_MANAGER"] = "REVENUE_MANAGER";
    // === SALES & MARKETING ROLES ===
    UserRole["SALES_MANAGER"] = "SALES_MANAGER";
    UserRole["MARKETING_MANAGER"] = "MARKETING_MANAGER";
    // === CRM & CUSTOMER RELATIONS ===
    UserRole["CRM_MANAGER"] = "CRM_MANAGER";
    UserRole["CRM_SPECIALIST"] = "CRM_SPECIALIST";
    // === SERVICE & MAINTENANCE ROLES ===
    UserRole["SERVICE_MANAGER"] = "SERVICE_MANAGER";
    UserRole["SERVICE_STAFF"] = "SERVICE_STAFF";
    UserRole["MAINTENANCE_MANAGER"] = "MAINTENANCE_MANAGER";
    UserRole["MAINTENANCE_STAFF"] = "MAINTENANCE_STAFF";
    // === SECURITY ROLES ===
    UserRole["SECURITY_MANAGER"] = "SECURITY_MANAGER";
    UserRole["SECURITY_STAFF"] = "SECURITY_STAFF";
    // === SPECIAL ROLES ===
    UserRole["GUEST"] = "GUEST";
    UserRole["VENDOR"] = "VENDOR";
    // === LEGACY ROLES (for backward compatibility) ===
    UserRole["NIGHT_SHIFT"] = "NIGHT_SHIFT";
})(UserRole || (exports.UserRole = UserRole = {}));
//# sourceMappingURL=user-role.enum.js.map