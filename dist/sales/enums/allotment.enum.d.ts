/**
 * Allotment Domain Enums
 */
export declare enum AllotmentStatus {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    EXPIRED = "EXPIRED",
    CLOSED = "CLOSED"
}
export declare enum AllotmentInventoryControl {
    /** Fallback to general pool when allotment exhausted */
    ELASTIC = "ELASTIC",
    /** Hard block — reject booking when allotment exhausted */
    FIXED = "FIXED"
}
export declare enum AllotmentPartnerType {
    CORPORATE = "CORPORATE",
    TRAVEL_AGENT = "TRAVEL_AGENT"
}
//# sourceMappingURL=allotment.enum.d.ts.map