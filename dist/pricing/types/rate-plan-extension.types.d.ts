/**
 * Rate Plan Auto-Extension Types
 *
 * Cron auto-extends rate_plan_pricing rolling 365 days.
 * Run = 1 cron tick (heartbeat). Log = 1 row per (run, ratePlan).
 */
export declare enum RatePlanExtensionSource {
    CRON = "CRON",
    MANUAL = "MANUAL"
}
export declare enum RatePlanExtensionRunStatus {
    RUNNING = "RUNNING",
    COMPLETED = "COMPLETED",
    PARTIAL = "PARTIAL",
    FAILED = "FAILED"
}
export declare enum RatePlanExtensionStatus {
    SUCCESS = "SUCCESS",
    PARTIAL = "PARTIAL",
    FAILED = "FAILED",
    UNDONE = "UNDONE",
    SKIPPED_PLAN_INACTIVE = "SKIPPED_PLAN_INACTIVE",
    SKIPPED_HOTEL_INACTIVE = "SKIPPED_HOTEL_INACTIVE",
    SKIPPED_DERIVED = "SKIPPED_DERIVED",
    SKIPPED_NOT_YET_VALID = "SKIPPED_NOT_YET_VALID",
    SKIPPED_EXPIRED = "SKIPPED_EXPIRED",
    SKIPPED_NO_ACTIVE_TEMPLATE = "SKIPPED_NO_ACTIVE_TEMPLATE",
    SKIPPED_ALREADY_COVERED = "SKIPPED_ALREADY_COVERED"
}
export declare enum CoverageSeverity {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green"
}
export declare class RatePlanExtensionRun {
    id: string;
    source: RatePlanExtensionSource;
    status: RatePlanExtensionRunStatus;
    totalPlans: number;
    successCount: number;
    skippedCount: number;
    failedCount: number;
    triggerNote?: string | null;
    startedAt: string;
    completedAt?: string | null;
    errorMessage?: string | null;
}
export declare class RatePlanExtensionLog {
    id: string;
    runId: string;
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    ratePlanCode: string;
    source: RatePlanExtensionSource;
    status: RatePlanExtensionStatus;
    templatePricingId?: string | null;
    templateLabel?: string | null;
    templateSnapshot?: Record<string, any> | null;
    createdPricingIds: string[];
    extendedFrom?: string | null;
    extendedTo?: string | null;
    rowsCreated: number;
    performedBy?: string | null;
    performedByName?: string | null;
    reason?: string | null;
    errorMessage?: string | null;
    undoneAt?: string | null;
    undoneBy?: string | null;
    undoExpiresAt?: string | null;
    startedAt: string;
    completedAt?: string | null;
    createdAt: string;
}
export declare class ExtendRatePlanRequest {
    tenantId: string;
    ratePlanId: string;
    performedBy?: string;
    performedByName?: string;
    reason?: string;
}
export declare class ExtendRatePlanResponse {
    log: RatePlanExtensionLog;
}
export declare class UndoExtensionRequest {
    tenantId: string;
    logId: string;
    performedBy?: string;
    performedByName?: string;
}
export declare class RatePlanCoverageStatus {
    ratePlanId: string;
    ratePlanCode: string;
    ratePlanName: string;
    latestEndDate?: string | null;
    daysRemaining: number;
    severity: CoverageSeverity;
    lastExtendedAt?: string | null;
    lastStatus?: RatePlanExtensionStatus | null;
    hasGaps: boolean;
    gaps?: Array<{
        start: string;
        end: string;
        days: number;
    }>;
    totalRanges?: number;
}
export declare class GetCoverageRequest {
    tenantId: string;
    hotelId: string;
}
export declare class GetCoverageResponse {
    items: RatePlanCoverageStatus[];
}
/**
 * Weekly pricing coverage per room — for Layer 1a auto-extend dashboard.
 * Replaces rate-plan-keyed coverage (rate_plan_pricing was dropped).
 */
export declare class WeeklyCoverageStatus {
    roomTypeId: string;
    roomTypeName: string;
    /** Monday ISO of the latest active weekly row, or null if no rows. */
    latestWeekStart?: string | null;
    /** Last covered date = latestWeekStart + 6 days. */
    latestCoverageDate?: string | null;
    /** Days from today to latestCoverageDate; -1 if no rows. */
    daysRemaining: number;
    severity: CoverageSeverity;
    /** Total active weekly rows for this room. */
    totalWeeks: number;
    hasGaps: boolean;
    /** Missing Mondays between today's-Monday and latestWeekStart. */
    gaps?: Array<{
        weekStart: string;
    }>;
}
export declare class GetWeeklyCoverageRequest {
    tenantId: string;
    hotelId: string;
}
export declare class GetWeeklyCoverageResponse {
    items: WeeklyCoverageStatus[];
}
export declare class ListExtensionLogsRequest {
    tenantId: string;
    hotelId?: string;
    ratePlanId?: string;
    source?: RatePlanExtensionSource;
    status?: RatePlanExtensionStatus;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class ListExtensionLogsResponse {
    items: RatePlanExtensionLog[];
    total: number;
    page: number;
    limit: number;
}
export declare class ListExtensionRunsRequest {
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class ListExtensionRunsResponse {
    items: RatePlanExtensionRun[];
    total: number;
    page: number;
    limit: number;
}
export declare class ExtensionHealthStatus {
    isHealthy: boolean;
    lastRunAt?: string | null;
    lastRunStatus?: RatePlanExtensionRunStatus | null;
    hoursSinceLastRun: number;
}
//# sourceMappingURL=rate-plan-extension.types.d.ts.map