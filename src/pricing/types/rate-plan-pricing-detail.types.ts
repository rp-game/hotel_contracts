/**
 * Rate Plan Pricing Detail Types (Phase B)
 *
 * Manage rate_plan_pricing rows per (ratePlan × roomType × dateRange).
 * Extends pricing.rates.* namespace with split-on-conflict semantics.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum RatePlanPricingSource {
  CRON = 'cron',
  MANUAL = 'manual',
}

export class RatePlanPricingItem {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() ratePlanId: string;
  @ApiProperty() roomTypeId: string;
  @ApiProperty() startDate: string;
  @ApiProperty() endDate: string;
  @ApiProperty() basePrice: number;
  @ApiPropertyOptional() mondayPrice?: number | null;
  @ApiPropertyOptional() tuesdayPrice?: number | null;
  @ApiPropertyOptional() wednesdayPrice?: number | null;
  @ApiPropertyOptional() thursdayPrice?: number | null;
  @ApiPropertyOptional() fridayPrice?: number | null;
  @ApiPropertyOptional() saturdayPrice?: number | null;
  @ApiPropertyOptional() sundayPrice?: number | null;
  @ApiPropertyOptional() occupancyRules?: any;
  @ApiPropertyOptional() lengthOfStayRules?: any;
  @ApiProperty() isActive: boolean;
  @ApiProperty({ enum: RatePlanPricingSource }) source: RatePlanPricingSource;
  @ApiProperty() createdAt: string;
  @ApiProperty() updatedAt: string;
}

export class ListRatePlanPricingRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() ratePlanId: string;
  @ApiPropertyOptional() roomTypeId?: string;
  @ApiPropertyOptional() dateFrom?: string;
  @ApiPropertyOptional() dateTo?: string;
  @ApiPropertyOptional() activeOnly?: boolean;
  @ApiPropertyOptional({ enum: RatePlanPricingSource }) source?: RatePlanPricingSource;
}

export class ListRatePlanPricingResponse {
  @ApiProperty({ type: [RatePlanPricingItem] }) items: RatePlanPricingItem[];
  @ApiProperty() total: number;
}

export class RatePlanPricingRangeInput {
  @ApiProperty() roomTypeId: string;
  @ApiProperty() startDate: string;
  @ApiProperty() endDate: string;
  @ApiProperty() basePrice: number;
  @ApiPropertyOptional() mondayPrice?: number | null;
  @ApiPropertyOptional() tuesdayPrice?: number | null;
  @ApiPropertyOptional() wednesdayPrice?: number | null;
  @ApiPropertyOptional() thursdayPrice?: number | null;
  @ApiPropertyOptional() fridayPrice?: number | null;
  @ApiPropertyOptional() saturdayPrice?: number | null;
  @ApiPropertyOptional() sundayPrice?: number | null;
  @ApiPropertyOptional() occupancyRules?: any;
  @ApiPropertyOptional() lengthOfStayRules?: any;
}

export class BulkCreateWithSplitRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() ratePlanId: string;
  @ApiProperty({ type: [RatePlanPricingRangeInput] }) ranges: RatePlanPricingRangeInput[];
  @ApiPropertyOptional() performedBy?: string;
}

export class ConflictPlanRow {
  @ApiProperty() id: string;
  @ApiProperty() roomTypeId: string;
  @ApiProperty() startDate: string;
  @ApiProperty() endDate: string;
  @ApiPropertyOptional() basePrice?: number;
  @ApiPropertyOptional() newStartDate?: string;
  @ApiPropertyOptional() newEndDate?: string;
}

export class ConflictPlan {
  @ApiProperty({ type: [ConflictPlanRow] }) kept: ConflictPlanRow[];
  @ApiProperty({ type: [ConflictPlanRow] }) replaced: ConflictPlanRow[];
  @ApiProperty({ type: [ConflictPlanRow] }) trimmed: ConflictPlanRow[];
  @ApiProperty({ type: [ConflictPlanRow] }) created: ConflictPlanRow[];
}

export class BulkCreateWithSplitResponse {
  @ApiProperty({ type: ConflictPlan }) plan: ConflictPlan;
  @ApiProperty({ type: [RatePlanPricingItem] }) createdItems: RatePlanPricingItem[];
}

export class DetectConflictsRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() ratePlanId: string;
  @ApiProperty({ type: [RatePlanPricingRangeInput] }) ranges: RatePlanPricingRangeInput[];
  @ApiPropertyOptional() excludeRowId?: string;
}

export class DetectConflictsResponse {
  @ApiProperty({ type: ConflictPlan }) plan: ConflictPlan;
}

export class UpdateRangeRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() id: string;
  @ApiProperty() expectedUpdatedAt: string;
  @ApiPropertyOptional() startDate?: string;
  @ApiPropertyOptional() endDate?: string;
  @ApiPropertyOptional() basePrice?: number;
  @ApiPropertyOptional() mondayPrice?: number | null;
  @ApiPropertyOptional() tuesdayPrice?: number | null;
  @ApiPropertyOptional() wednesdayPrice?: number | null;
  @ApiPropertyOptional() thursdayPrice?: number | null;
  @ApiPropertyOptional() fridayPrice?: number | null;
  @ApiPropertyOptional() saturdayPrice?: number | null;
  @ApiPropertyOptional() sundayPrice?: number | null;
  @ApiPropertyOptional() occupancyRules?: any;
  @ApiPropertyOptional() lengthOfStayRules?: any;
  @ApiPropertyOptional() performedBy?: string;
}

export class UpdateRangeResponse {
  @ApiProperty({ type: RatePlanPricingItem }) item: RatePlanPricingItem;
  @ApiPropertyOptional({ type: ConflictPlan }) plan?: ConflictPlan;
}

export class SoftDeleteRangeRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() id: string;
  @ApiProperty() expectedUpdatedAt: string;
  @ApiPropertyOptional() performedBy?: string;
}

export class SoftDeleteRangeResponse {
  @ApiProperty() success: boolean;
}

export class BootstrapFromBaseRateRequest {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() ratePlanId: string;
  @ApiProperty() dateFrom: string;
  @ApiProperty() dateTo: string;
  @ApiPropertyOptional() skipRoomsWithPricing?: boolean;
  @ApiPropertyOptional() performedBy?: string;
}

export class BootstrapFromBaseRateResponse {
  @ApiProperty() rowsCreated: number;
  @ApiProperty({ type: [RatePlanPricingItem] }) items: RatePlanPricingItem[];
  @ApiProperty({ type: [String] }) skippedRoomTypeIds: string[];
}
