"use strict";
/**
 * User Role Enum
 * Represents user roles in the SaziHotel system
 * Based on ROLES.md specification
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementCategory = exports.ShiftStatus = exports.ShiftType = exports.FeedbackPriority = exports.FeedbackType = exports.Department = exports.StaffStatus = exports.UserRole = void 0;
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
/**
 * Enum representing staff status in the SaziHotel system
 */
var StaffStatus;
(function (StaffStatus) {
    StaffStatus["ACTIVE"] = "ACTIVE";
    StaffStatus["INACTIVE"] = "INACTIVE";
    StaffStatus["ON_LEAVE"] = "ON_LEAVE";
    StaffStatus["TERMINATED"] = "TERMINATED";
    StaffStatus["SUSPENDED"] = "SUSPENDED";
})(StaffStatus || (exports.StaffStatus = StaffStatus = {}));
/**
 * Enum representing staff departments in the hotel system
 */
var Department;
(function (Department) {
    Department["FRONT_DESK"] = "FRONT_DESK";
    Department["HOUSEKEEPING"] = "HOUSEKEEPING";
    Department["MAINTENANCE"] = "MAINTENANCE";
    Department["MANAGEMENT"] = "MANAGEMENT";
    Department["KITCHEN"] = "KITCHEN";
    Department["SECURITY"] = "SECURITY";
})(Department || (exports.Department = Department = {}));
var FeedbackType;
(function (FeedbackType) {
    FeedbackType["BUG"] = "BUG";
    FeedbackType["FEATURE"] = "FEATURE";
    FeedbackType["IMPROVEMENT"] = "IMPROVEMENT";
    FeedbackType["GENERAL"] = "GENERAL";
})(FeedbackType || (exports.FeedbackType = FeedbackType = {}));
var FeedbackPriority;
(function (FeedbackPriority) {
    FeedbackPriority["LOW"] = "LOW";
    FeedbackPriority["MEDIUM"] = "MEDIUM";
    FeedbackPriority["HIGH"] = "HIGH";
})(FeedbackPriority || (exports.FeedbackPriority = FeedbackPriority = {}));
var ShiftType;
(function (ShiftType) {
    ShiftType["MORNING"] = "MORNING";
    ShiftType["AFTERNOON"] = "AFTERNOON";
    ShiftType["NIGHT"] = "NIGHT";
    ShiftType["FULL_DAY"] = "FULL_DAY";
})(ShiftType || (exports.ShiftType = ShiftType = {}));
var ShiftStatus;
(function (ShiftStatus) {
    ShiftStatus["SCHEDULED"] = "SCHEDULED";
    ShiftStatus["CONFIRMED"] = "CONFIRMED";
    ShiftStatus["COMPLETED"] = "COMPLETED";
    ShiftStatus["CANCELLED"] = "CANCELLED";
})(ShiftStatus || (exports.ShiftStatus = ShiftStatus = {}));
var AchievementCategory;
(function (AchievementCategory) {
    AchievementCategory["EFFICIENCY"] = "EFFICIENCY";
    AchievementCategory["QUALITY"] = "QUALITY";
    AchievementCategory["TEAMWORK"] = "TEAMWORK";
    AchievementCategory["PUNCTUALITY"] = "PUNCTUALITY";
})(AchievementCategory || (exports.AchievementCategory = AchievementCategory = {}));
//# sourceMappingURL=user.enum.js.map