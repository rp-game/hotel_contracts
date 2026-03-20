import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsUUID,
  IsDateString,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import type { NatsResponse } from '../../common/nats-response.interface';

// --- Create ---
export class CreateSalesLeadRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() hotelId?: string;

  @ApiProperty({ description: 'Prospect company name' })
  @IsString()
  @MaxLength(200)
  companyName: string;

  @ApiProperty({ description: 'Primary contact person' })
  @IsString()
  @MaxLength(200)
  contactPerson: string;

  @ApiPropertyOptional() @IsOptional() @IsString() contactEmail?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() contactPhone?: string;

  @ApiProperty({
    description: 'Lead source',
    enum: ['REFERRAL', 'COLD_CALL', 'WEBSITE', 'EVENT', 'OTHER'],
  })
  @IsString()
  source: string;

  @ApiPropertyOptional({
    description: 'Pipeline stage',
    enum: ['INQUIRY', 'PROPOSAL', 'NEGOTIATION', 'WON', 'LOST'],
    default: 'INQUIRY',
  })
  @IsOptional()
  @IsString()
  stage?: string;

  @ApiPropertyOptional() @IsOptional() @IsNumber() @Type(() => Number) estimatedRevenue?: number;
  @ApiPropertyOptional() @IsOptional() @IsNumber() @Type(() => Number) estimatedRoomNights?: number;

  @ApiProperty({ description: 'Assigned sales person ID' })
  @IsUUID()
  salesPersonId: string;

  @ApiProperty({ description: 'Sales person name (denormalized)' })
  @IsString()
  salesPersonName: string;

  @ApiPropertyOptional() @IsOptional() @IsDateString() expectedCloseDate?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() notes?: string;

  @ApiPropertyOptional() @IsOptional() createdBy?: string;
  @ApiPropertyOptional() @IsOptional() createdByName?: string;
}

// --- Update ---
export class UpdateSalesLeadDto {
  @ApiPropertyOptional() @IsOptional() @IsString() @MaxLength(200) companyName?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() @MaxLength(200) contactPerson?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() contactEmail?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() contactPhone?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() source?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() stage?: string;
  @ApiPropertyOptional() @IsOptional() @IsNumber() @Type(() => Number) estimatedRevenue?: number;
  @ApiPropertyOptional() @IsOptional() @IsNumber() @Type(() => Number) estimatedRoomNights?: number;
  @ApiPropertyOptional() @IsOptional() @IsUUID() salesPersonId?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() salesPersonName?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() expectedCloseDate?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() lostReason?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() notes?: string;
}

export class UpdateSalesLeadRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiProperty() @IsUUID() id: string;
  @ApiProperty({ type: UpdateSalesLeadDto }) dto: UpdateSalesLeadDto;
}

// --- Find ---
export class FindSalesLeadsRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() hotelId?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() stage?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() source?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() salesPersonId?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() search?: string;
  @ApiPropertyOptional({ default: 1 }) @IsOptional() @IsNumber() @Type(() => Number) page?: number;
  @ApiPropertyOptional({ default: 50 }) @IsOptional() @IsNumber() @Type(() => Number) limit?: number;
  @ApiPropertyOptional() @IsOptional() @IsString() sortBy?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() sortOrder?: 'ASC' | 'DESC';
}

// --- Get / Delete ---
export class GetSalesLeadRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiProperty() @IsUUID() id: string;
}

export class DeleteSalesLeadRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiProperty() @IsUUID() id: string;
}

// --- Response ---
export class SalesLeadResponse {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() companyName: string;
  @ApiProperty() contactPerson: string;
  @ApiPropertyOptional() contactEmail?: string;
  @ApiPropertyOptional() contactPhone?: string;
  @ApiProperty() source: string;
  @ApiProperty() stage: string;
  @ApiPropertyOptional() estimatedRevenue?: number;
  @ApiPropertyOptional() estimatedRoomNights?: number;
  @ApiProperty() salesPersonId: string;
  @ApiProperty() salesPersonName: string;
  @ApiPropertyOptional() expectedCloseDate?: string;
  @ApiPropertyOptional() lostReason?: string;
  @ApiPropertyOptional() convertedAccountId?: string;
  @ApiPropertyOptional() notes?: string;
  @ApiPropertyOptional() createdBy?: string;
  @ApiPropertyOptional() createdByName?: string;
  @ApiProperty() createdAt: Date;
  @ApiProperty() updatedAt: Date;
}

export class SalesLeadListResponse {
  @ApiProperty({ type: [SalesLeadResponse] }) leads: SalesLeadResponse[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
  @ApiProperty() totalPages: number;
}

// --- Delete Response ---
export class DeleteSalesLeadResponse {
  @ApiProperty() deleted: boolean;
}

// --- Convert ---
export class ConvertSalesLeadResponse {
  @ApiProperty({ type: SalesLeadResponse }) lead: SalesLeadResponse;
  @ApiProperty({ description: 'Created corporate account' }) corporateAccount: any;
}

export class ConvertSalesLeadRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiProperty() @IsUUID() leadId: string;
  @ApiPropertyOptional() @IsOptional() convertedBy?: string;
  @ApiPropertyOptional() @IsOptional() convertedByName?: string;
}

// --- Pipeline Summary ---
export class PipelineSummaryRequest {
  @ApiPropertyOptional() @IsOptional() @IsUUID() tenantId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() hotelId?: string;
}

export class StageSummary {
  @ApiProperty() stage: string;
  @ApiProperty() count: number;
  @ApiProperty() estimatedRevenue: number;
}

export class PipelineSummaryResponse {
  @ApiProperty({ type: [StageSummary] }) stages: StageSummary[];
  @ApiProperty() totalLeads: number;
  @ApiProperty() totalEstimatedRevenue: number;
  @ApiProperty() conversionRate: number;
}

// --- Typed NATS responses ---
export type CreateSalesLeadNatsResponse = NatsResponse<SalesLeadResponse>;
export type UpdateSalesLeadNatsResponse = NatsResponse<SalesLeadResponse>;
export type GetSalesLeadNatsResponse = NatsResponse<SalesLeadResponse>;
export type FindSalesLeadsNatsResponse = NatsResponse<SalesLeadListResponse>;
export type DeleteSalesLeadNatsResponse = NatsResponse<{ deleted: boolean }>;
export type ConvertSalesLeadNatsResponse = NatsResponse<{
  lead: SalesLeadResponse;
  corporateAccount: any;
}>;
export type PipelineSummaryNatsResponse = NatsResponse<PipelineSummaryResponse>;
