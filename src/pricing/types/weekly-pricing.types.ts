/**
 * Room Type Weekly Pricing Types (Layer 1a)
 *
 * Manage room_type_weekly_pricing rows per (hotel × room × weekStartDate).
 * Each row = 1 ISO week (Mon→Sun). DOW override stored as JSONB { "1".."7": price }.
 *
 * NATS namespace: pricing.weekly.*
 * REST base path: /pricing/weekly
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum WeeklyPricingSource {
  CRON = 'cron',
  MANUAL = 'manual',
}

export type DowOverrides = Record<'1' | '2' | '3' | '4' | '5' | '6' | '7', number>;

export class WeeklyPricingItem {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() roomTypeId: string;
  @ApiProperty({ description: 'Monday of the ISO week (YYYY-MM-DD)' }) startDate: string;
  @ApiProperty({ description: 'Uniform week price (VND)' }) price: number;
  @ApiPropertyOptional({
    type: 'object',
    additionalProperties: { type: 'number' },
    nullable: true,
    description: 'Sparse DOW override map: { "1".."7": price }',
  })
  overrides?: Partial<DowOverrides> | null;
  @ApiProperty() currency: string;
  @ApiProperty({ enum: WeeklyPricingSource }) source: WeeklyPricingSource;
  @ApiProperty() isActive: boolean;
  @ApiProperty() createdAt: string;
  @ApiProperty() updatedAt: string;
  @ApiPropertyOptional({ nullable: true }) createdBy?: string | null;
  @ApiPropertyOptional({ nullable: true }) updatedBy?: string | null;
}

// ─── List ────────────────────────────────────────────────────────────────

export class ListWeeklyRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() roomTypeId: string;
  @ApiProperty({ description: 'YYYY-MM-DD' }) dateFrom: string;
  @ApiProperty({ description: 'YYYY-MM-DD' }) dateTo: string;
}

export class ListWeeklyResponse {
  @ApiProperty({ type: [WeeklyPricingItem] }) items: WeeklyPricingItem[];
}

// ─── Upsert week ─────────────────────────────────────────────────────────

export class UpsertWeekRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() roomTypeId: string;
  @ApiProperty({ description: 'Monday of week (YYYY-MM-DD)' }) startDate: string;
  @ApiProperty() price: number;
  @ApiPropertyOptional({
    type: 'object',
    additionalProperties: { type: 'number' },
    nullable: true,
  })
  overrides?: Partial<DowOverrides> | null;
  @ApiPropertyOptional({ description: 'Optimistic lock token (ISO updatedAt)' })
  expectedUpdatedAt?: string;
  @ApiPropertyOptional() updatedBy?: string;
}

export class UpsertWeekResponse {
  @ApiProperty() item: WeeklyPricingItem;
}

// ─── Preview repeat ──────────────────────────────────────────────────────

export class PreviewRepeatTarget {
  @ApiProperty({ description: 'Monday of target week (YYYY-MM-DD)' }) weekStart: string;
  @ApiProperty() exists: boolean;
  @ApiProperty() hasOverrides: boolean;
  @ApiPropertyOptional({ type: Number, nullable: true }) currentPrice?: number | null;
}

export class PreviewRepeatRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() roomTypeId: string;
  @ApiProperty() sourceWeekStart: string;
  @ApiProperty({ description: '1..104' }) weeksToCopy: number;
}

export class PreviewRepeatResponse {
  @ApiProperty() source: WeeklyPricingItem;
  @ApiProperty({ type: [PreviewRepeatTarget] }) targets: PreviewRepeatTarget[];
}

// ─── Execute repeat ──────────────────────────────────────────────────────

export class ExecuteRepeatRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() roomTypeId: string;
  @ApiProperty() sourceWeekStart: string;
  @ApiProperty() weeksToCopy: number;
  @ApiProperty({
    type: 'object',
    additionalProperties: { type: 'string', enum: ['overwrite', 'skip'] },
    description: 'Per-week decision keyed by weekStart YYYY-MM-DD',
  })
  decisions: Record<string, 'overwrite' | 'skip'>;
  @ApiPropertyOptional() updatedBy?: string;
}

export class ExecuteRepeatResponse {
  @ApiProperty() created: number;
  @ApiProperty() overwritten: number;
  @ApiProperty() skipped: number;
}

// ─── Soft delete ─────────────────────────────────────────────────────────

export class SoftDeleteWeekRequest {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty({ description: 'Optimistic lock token' }) expectedUpdatedAt: string;
}

export class SoftDeleteWeekResponse {
  @ApiProperty() success: boolean;
}

// ─── Bulk set 1 week × N rooms ───────────────────────────────────────────

export class BulkSetWeekRoom {
  @ApiProperty() roomTypeId: string;
  @ApiProperty() price: number;
  @ApiPropertyOptional({
    type: 'object',
    additionalProperties: { type: 'number' },
    nullable: true,
  })
  overrides?: Partial<DowOverrides> | null;
}

export class BulkSetWeekRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() startDate: string;
  @ApiProperty({ type: [BulkSetWeekRoom] }) rooms: BulkSetWeekRoom[];
  @ApiPropertyOptional() updatedBy?: string;
}

export class BulkSetWeekResponse {
  @ApiProperty() upserted: number;
}

// ─── Bootstrap from base_rate ────────────────────────────────────────────

export class BootstrapFromBaseRateRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiPropertyOptional({ description: 'Default 52' }) weeksForward?: number;
  @ApiPropertyOptional({ description: 'Default true' }) skipExistingWeeks?: boolean;
  @ApiPropertyOptional() updatedBy?: string;
}

export class BootstrapFromBaseRateResponse {
  @ApiProperty() created: number;
  @ApiProperty({ type: [String] }) skippedRooms: string[];
}
