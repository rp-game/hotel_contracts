/**
 * Housekeeping Task Status Enum
 */
export declare enum TaskStatus {
    PENDING = "PENDING",
    ASSIGNED = "ASSIGNED",
    IN_PROGRESS = "IN_PROGRESS",
    PAUSED = "PAUSED",
    COMPLETED = "COMPLETED",
    VERIFIED = "VERIFIED",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    CANCELLED = "CANCELLED",
    OVERDUE = "OVERDUE"
}
/**
 * Housekeeping Task Priority Enum
 */
export declare enum TaskPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    URGENT = "URGENT"
}
/**
 * Active Shift Status Enum
 * Used for clock-in/out tracking (distinct from scheduling ShiftStatus in user enums)
 */
export declare enum ActiveShiftStatus {
    NOT_STARTED = "not_started",
    ACTIVE = "active",
    BREAK = "break",
    COMPLETED = "completed"
}
//# sourceMappingURL=housekeeping.enum.d.ts.map