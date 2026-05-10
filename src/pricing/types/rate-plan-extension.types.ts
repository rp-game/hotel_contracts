/**
 * Rate Plan Auto-Extension Types
 *
 * Cron auto-extends rate_plan_pricing rolling 365 days.
 * Run = 1 cron tick (heartbeat). Log = 1 row per (run, ratePlan).
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum RatePlanExtensionSource {
  CRON = 'CRON',
  MANUAL = 'MANUAL',
}

export enum RatePlanExtensionRunStatus {
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED',
  PARTIAL = 'PARTIAL',
  FAILED = 'FAILED',
}

export enum RatePlanExtensionStatus {
  SUCCESS = 'SUCCESS',
  PARTIAL = 'PARTIAL',
  FAILED = 'FAILED',
  UNDONE = 'UNDONE',
  SKIPPED_PLAN_INACTIVE = 'SKIPPED_PLAN_INACTIVE',
  SKIPPED_HOTEL_INACTIVE = 'SKIPPED_HOTEL_INACTIVE',
  SKIPPED_DERIVED = 'SKIPPED_DERIVED',
  SKIPPED_NOT_YET_VALID = 'SKIPPED_NOT_YET_VALID',
  SKIPPED_EXPIRED = 'SKIPPED_EXPIRED',
  SKIPPED_NO_ACTIVE_TEMPLATE = 'SKIPPED_NO_ACTIVE_TEMPLATE',
  SKIPPED_ALREADY_COVERED = 'SKIPPED_ALREADY_COVERED',
}

export enum CoverageSeverity {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}

export class RatePlanExtensionRun {
  @ApiProperty() id: string;
  @ApiProperty({ enum: RatePlanExtensionSource }) source: RatePlanExtensionSource;
  @ApiProperty({ enum: RatePlanExtensionRunStatus }) status: RatePlanExtensionRunStatus;
  @ApiProperty() totalPlans: number;
  @ApiProperty() successCount: number;
  @ApiProperty() skippedCount: number;
  @ApiProperty() failedCount: number;
  @ApiPropertyOptional() triggerNote?: string | null;
  @ApiProperty() startedAt: string;
  @ApiPropertyOptional() completedAt?: string | null;
  @ApiPropertyOptional() errorMessage?: string | null;
}

export class RatePlanExtensionLog {
  @ApiProperty() id: string;
  @ApiProperty() runId: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() ratePlanId: string;
  @ApiProperty() ratePlanCode: string;
  @ApiProperty({ enum: RatePlanExtensionSource }) source: RatePlanExtensionSource;
  @ApiProperty({ enum: RatePlanExtensionStatus }) status: RatePlanExtensionStatus;
  @ApiPropertyOptional() templatePricingId?: string | null;
  @ApiPropertyOptional() templateLabel?: string | null;
  @ApiPropertyOptional() templateSnapshot?: Record<string, any> | null;
  @ApiProperty({ type: [String] }) createdPricingIds: string[];
  @ApiPropertyOptional() extendedFrom?: string | null;
  @ApiPropertyOptional() extendedTo?: string | null;
  @ApiProperty() rowsCreated: number;
  @ApiPropertyOptional() performedBy?: string | null;
  @ApiPropertyOptional() performedByName?: string | null;
  @ApiPropertyOptional() reason?: string | null;
  @ApiPropertyOptional() errorMessage?: string | null;
  @ApiPropertyOptional() undoneAt?: string | null;
  @ApiPropertyOptional() undoneBy?: string | null;
  @ApiPropertyOptional() undoExpiresAt?: string | null;
  @ApiProperty() startedAt: string;
  @ApiPropertyOptional() completedAt?: string | null;
  @ApiProperty() createdAt: string;
}

export class ExtendRatePlanRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() ratePlanId: string;
  @ApiPropertyOptional() performedBy?: string;
  @ApiPropertyOptional() performedByName?: string;
  @ApiPropertyOptional() reason?: string;
}

export class ExtendRatePlanResponse {
  @ApiProperty() log: RatePlanExtensionLog;
}

export class UndoExtensionRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() logId: string;
  @ApiPropertyOptional() performedBy?: string;
  @ApiPropertyOptional() performedByName?: string;
}

export class RatePlanCoverageStatus {
  @ApiProperty() ratePlanId: string;
  @ApiProperty() ratePlanCode: string;
  @ApiProperty() ratePlanName: string;
  @ApiPropertyOptional() latestEndDate?: string | null;
  @ApiProperty() daysRemaining: number;
  @ApiProperty({ enum: CoverageSeverity }) severity: CoverageSeverity;
  @ApiPropertyOptional() lastExtendedAt?: string | null;
  @ApiPropertyOptional() lastStatus?: RatePlanExtensionStatus | null;
  @ApiProperty() hasGaps: boolean;
  @ApiPropertyOptional({ type: 'array', items: { type: 'object' } })
  gaps?: Array<{ start: string; end: string; days: number }>;
  @ApiPropertyOptional() totalRanges?: number;
}

export class GetCoverageRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
}

export class GetCoverageResponse {
  @ApiProperty({ type: [RatePlanCoverageStatus] }) items: RatePlanCoverageStatus[];
}

/**
 * Weekly pricing coverage per room — for Layer 1a auto-extend dashboard.
 * Replaces rate-plan-keyed coverage (rate_plan_pricing was dropped).
 */
export class WeeklyCoverageStatus {
  @ApiProperty() roomTypeId: string;
  @ApiProperty() roomTypeName: string;
  /** Monday ISO of the latest active weekly row, or null if no rows. */
  @ApiPropertyOptional() latestWeekStart?: string | null;
  /** Last covered date = latestWeekStart + 6 days. */
  @ApiPropertyOptional() latestCoverageDate?: string | null;
  /** Days from today to latestCoverageDate; -1 if no rows. */
  @ApiProperty() daysRemaining: number;
  @ApiProperty({ enum: CoverageSeverity }) severity: CoverageSeverity;
  /** Total active weekly rows for this room. */
  @ApiProperty() totalWeeks: number;
  @ApiProperty() hasGaps: boolean;
  /** Missing Mondays between today's-Monday and latestWeekStart. */
  @ApiPropertyOptional({ type: 'array', items: { type: 'object' } })
  gaps?: Array<{ weekStart: string }>;
}

export class GetWeeklyCoverageRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
}

export class GetWeeklyCoverageResponse {
  @ApiProperty({ type: [WeeklyCoverageStatus] }) items: WeeklyCoverageStatus[];
}

export class ListExtensionLogsRequest {
  @ApiProperty() tenantId: string;
  @ApiPropertyOptional() hotelId?: string;
  @ApiPropertyOptional() ratePlanId?: string;
  @ApiPropertyOptional({ enum: RatePlanExtensionSource }) source?: RatePlanExtensionSource;
  @ApiPropertyOptional({ enum: RatePlanExtensionStatus }) status?: RatePlanExtensionStatus;
  @ApiPropertyOptional() dateFrom?: string;
  @ApiPropertyOptional() dateTo?: string;
  @ApiPropertyOptional() page?: number;
  @ApiPropertyOptional() limit?: number;
}

export class ListExtensionLogsResponse {
  @ApiProperty({ type: [RatePlanExtensionLog] }) items: RatePlanExtensionLog[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
}

export class ListExtensionRunsRequest {
  @ApiPropertyOptional() dateFrom?: string;
  @ApiPropertyOptional() dateTo?: string;
  @ApiPropertyOptional() page?: number;
  @ApiPropertyOptional() limit?: number;
}

export class ListExtensionRunsResponse {
  @ApiProperty({ type: [RatePlanExtensionRun] }) items: RatePlanExtensionRun[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
}

export class ExtensionHealthStatus {
  @ApiProperty() isHealthy: boolean;
  @ApiPropertyOptional() lastRunAt?: string | null;
  @ApiPropertyOptional({ enum: RatePlanExtensionRunStatus }) lastRunStatus?: RatePlanExtensionRunStatus | null;
  @ApiProperty() hoursSinceLastRun: number;
}
