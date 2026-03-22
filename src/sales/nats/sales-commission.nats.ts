import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsUUID,
  IsBoolean,
  IsEnum,
  IsDateString,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { SalesCommissionAppliesTo } from '../enums/sales.enum';
import type { NatsResponse } from '../../common/nats-response.interface';
import { IsNullableUUID } from '../../common/validators';

// === Commission Rule CRUD ===

export class CreateSalesCommissionRuleRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiPropertyOptional() @IsOptional() @IsNullableUUID() hotelId?: string;

  @ApiProperty({ description: 'Sales person ID' })
  @IsUUID()
  salesPersonId: string;

  @ApiProperty({ description: 'Sales person name (denormalized)' })
  @IsString()
  salesPersonName: string;

  @ApiProperty({ description: 'Commission rate percentage (0-100)' })
  @IsNumber()
  @Min(0)
  @Max(100)
  @Type(() => Number)
  commissionRate: number;

  @ApiProperty({ description: 'Booking type this rule applies to', enum: SalesCommissionAppliesTo })
  @IsEnum(SalesCommissionAppliesTo)
  appliesTo: SalesCommissionAppliesTo;

  @ApiPropertyOptional({ default: true }) @IsOptional() @IsBoolean() isActive?: boolean;
  @ApiPropertyOptional() @IsOptional() createdBy?: string;
  @ApiPropertyOptional() @IsOptional() createdByName?: string;
}

export class UpdateSalesCommissionRuleDto {
  @ApiPropertyOptional() @IsOptional() @IsNumber() @Min(0) @Max(100) @Type(() => Number) commissionRate?: number;
  @ApiPropertyOptional({ enum: SalesCommissionAppliesTo }) @IsOptional() @IsEnum(SalesCommissionAppliesTo) appliesTo?: SalesCommissionAppliesTo;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() isActive?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsString() salesPersonName?: string;
}

export class UpdateSalesCommissionRuleRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiProperty() @IsUUID() id: string;
  @ApiProperty({ type: UpdateSalesCommissionRuleDto }) dto: UpdateSalesCommissionRuleDto;
}

export class FindSalesCommissionRulesRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiPropertyOptional() @IsOptional() @IsNullableUUID() hotelId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() salesPersonId?: string;
  @ApiPropertyOptional({ enum: SalesCommissionAppliesTo }) @IsOptional() @IsEnum(SalesCommissionAppliesTo) appliesTo?: SalesCommissionAppliesTo;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() isActive?: boolean;
  @ApiPropertyOptional({ default: 1 }) @IsOptional() @IsNumber() @Type(() => Number) page?: number;
  @ApiPropertyOptional({ default: 50 }) @IsOptional() @IsNumber() @Type(() => Number) limit?: number;
}

export class GetSalesCommissionRuleRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiProperty() @IsUUID() id: string;
}

export class DeleteSalesCommissionRuleRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiProperty() @IsUUID() id: string;
}

// === Rule Responses ===

export class SalesCommissionRuleResponse {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() salesPersonId: string;
  @ApiProperty() salesPersonName: string;
  @ApiProperty() commissionRate: number;
  @ApiProperty({ enum: SalesCommissionAppliesTo }) appliesTo: string;
  @ApiProperty() isActive: boolean;
  @ApiPropertyOptional({ nullable: true }) createdBy: string | null;
  @ApiPropertyOptional({ nullable: true }) createdByName: string | null;
  @ApiProperty() createdAt: Date;
}

export class SalesCommissionRuleListResponse {
  @ApiProperty({ type: [SalesCommissionRuleResponse] }) rules: SalesCommissionRuleResponse[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
  @ApiProperty() totalPages: number;
}

export class DeleteSalesCommissionRuleResponse {
  @ApiProperty() deleted: boolean;
}

// === Commission Record (read-only, auto-created on checkout) ===

export class FindSalesCommissionRecordsRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiPropertyOptional() @IsOptional() @IsNullableUUID() hotelId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() salesPersonId?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() dateFrom?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() dateTo?: string;
  @ApiPropertyOptional({ default: 1 }) @IsOptional() @IsNumber() @Type(() => Number) page?: number;
  @ApiPropertyOptional({ default: 50 }) @IsOptional() @IsNumber() @Type(() => Number) limit?: number;
}

export class SalesCommissionRecordResponse {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() salesPersonId: string;
  @ApiProperty() salesPersonName: string;
  @ApiProperty() bookingId: string;
  @ApiProperty() bookingCode: string;
  @ApiProperty() commissionableAmount: number;
  @ApiProperty() commissionRate: number;
  @ApiProperty() commissionAmount: number;
  @ApiProperty() createdAt: Date;
}

export class SalesCommissionRecordListResponse {
  @ApiProperty({ type: [SalesCommissionRecordResponse] }) records: SalesCommissionRecordResponse[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
  @ApiProperty() totalPages: number;
}

// === Summary ===

export class SalesCommissionSummaryRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiPropertyOptional() @IsOptional() @IsNullableUUID() hotelId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() salesPersonId?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() dateFrom?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() dateTo?: string;
}

export class SalesPersonCommissionSummary {
  @ApiProperty() salesPersonId: string;
  @ApiProperty() salesPersonName: string;
  @ApiProperty() totalCommission: number;
  @ApiProperty() recordCount: number;
}

export class SalesCommissionSummaryResponse {
  @ApiProperty() totalCommission: number;
  @ApiProperty() recordCount: number;
  @ApiProperty({ type: [SalesPersonCommissionSummary] }) bySalesPerson: SalesPersonCommissionSummary[];
}

// === Typed NATS responses ===

export type CreateSalesCommissionRuleNatsResponse = NatsResponse<SalesCommissionRuleResponse>;
export type UpdateSalesCommissionRuleNatsResponse = NatsResponse<SalesCommissionRuleResponse>;
export type GetSalesCommissionRuleNatsResponse = NatsResponse<SalesCommissionRuleResponse>;
export type FindSalesCommissionRulesNatsResponse = NatsResponse<SalesCommissionRuleListResponse>;
export type DeleteSalesCommissionRuleNatsResponse = NatsResponse<DeleteSalesCommissionRuleResponse>;
export type FindSalesCommissionRecordsNatsResponse = NatsResponse<SalesCommissionRecordListResponse>;
export type SalesCommissionSummaryNatsResponse = NatsResponse<SalesCommissionSummaryResponse>;

// === Sales Production (on-the-fly revenue aggregation) ===

export class SalesProductionRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiPropertyOptional() @IsOptional() @IsNullableUUID() hotelId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() salesPersonId?: string;
  @ApiProperty() @IsDateString() dateFrom: string;
  @ApiProperty() @IsDateString() dateTo: string;
}

export class SalesPersonProduction {
  @ApiProperty() salesPersonId: string;
  @ApiProperty() salesPersonName: string;
  @ApiProperty() totalRevenue: number;
  @ApiProperty() totalRoomNights: number;
  @ApiProperty() bookingCount: number;
  @ApiProperty() totalCommission: number;
  @ApiProperty() corporateBookings: number;
  @ApiProperty() taBookings: number;
  @ApiProperty() directBookings: number;
}

export class SalesProductionResponse {
  @ApiProperty() totalRevenue: number;
  @ApiProperty() totalRoomNights: number;
  @ApiProperty() totalBookings: number;
  @ApiProperty() totalCommission: number;
  @ApiProperty({ type: [SalesPersonProduction] }) bySalesPerson: SalesPersonProduction[];
}

export type SalesProductionNatsResponse = NatsResponse<SalesProductionResponse>;
