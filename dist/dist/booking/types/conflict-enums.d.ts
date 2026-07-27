/**
 * Booking conflict type definitions and enums
 */
export declare enum ConflictStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    RESOLVED = "RESOLVED",
    ESCALATED = "ESCALATED",
    CANCELLED = "CANCELLED"
}
export declare enum ConflictSeverity {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    CRITICAL = "CRITICAL"
}
export declare enum ConflictType {
    DOUBLE_BOOKING = "DOUBLE_BOOKING",
    OVERBOOKING = "OVERBOOKING",
    MAINTENANCE_OVERLAP = "MAINTENANCE_OVERLAP",
    BLOCKED_ROOM = "BLOCKED_ROOM",
    ALLOCATION_ERROR = "ALLOCATION_ERROR"
}
export declare enum ResolutionType {
    UPGRADE = "UPGRADE",
    RELOCATE = "RELOCATE",
    COMPENSATE = "COMPENSATE",
    CANCEL = "CANCEL",
    SPLIT_BOOKING = "SPLIT_BOOKING",
    MANUAL = "MANUAL"
}
//# sourceMappingURL=conflict-enums.d.ts.map