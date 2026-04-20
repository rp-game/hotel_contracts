/**
 * Pricing Audit Log NATS Contracts
 *
 * @nats_pattern pricing.audit-log.list
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsUUID, IsDateString, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class RecordPricingAuditParams {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Resource type (e.g. rate_plan, base_rate)' })
  resourceType: string;

  @ApiPropertyOptional({ description: 'Resource ID' })
  resourceId?: string | null;

  @ApiPropertyOptional({ description: 'Resource display name' })
  resourceName?: string | null;

  @ApiProperty({ description: 'Action performed (CREATED, UPDATED, DELETED, etc.)' })
  action: string;

  @ApiPropertyOptional({ description: 'Data snapshot before the change' })
  previousData?: Record<string, any> | null;

  @ApiPropertyOptional({ description: 'Data snapshot after the change' })
  newData?: Record<string, any> | null;

  @ApiPropertyOptional({ description: 'User ID who performed the action' })
  performedBy?: string | null;

  @ApiPropertyOptional({ description: 'Display name of the user who performed the action' })
  performedByName?: string | null;
}

/**
 * NATS Pattern: pricing.audit-log.list
 */
export class ListPricingAuditLogRequest {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID filter', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Resource type filter', example: 'rate_plan' })
  @IsOptional()
  @IsString()
  resourceType?: string;

  @ApiPropertyOptional({ description: 'Resource ID filter', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsOptional()
  @IsString()
  resourceId?: string;

  @ApiPropertyOptional({ description: 'Action filter (CREATED, UPDATED, DELETED, ACTIVATED, DEACTIVATED)', example: 'UPDATED' })
  @IsOptional()
  @IsString()
  action?: string;

  @ApiPropertyOptional({ description: 'Start date (ISO 8601)', example: '2026-01-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  from?: string;

  @ApiPropertyOptional({ description: 'End date (ISO 8601)', example: '2026-12-31T23:59:59.999Z' })
  @IsOptional()
  @IsDateString()
  to?: string;

  @ApiPropertyOptional({ description: 'Page number (1-based)', example: 1, default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page (max 100)', example: 20, default: 20 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit?: number;
}

export class PricingAuditLogEntry {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440099' })
  id: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  tenantId: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440002' })
  hotelId: string;

  @ApiProperty({ example: 'rate_plan' })
  resourceType: string;

  @ApiPropertyOptional({ type: String, example: '550e8400-e29b-41d4-a716-446655440001' })
  resourceId: string | null;

  @ApiPropertyOptional({ type: String, example: 'Best Available Rate' })
  resourceName: string | null;

  @ApiProperty({ example: 'UPDATED' })
  action: string;

  @ApiPropertyOptional({ description: 'Data before the change' })
  previousData: Record<string, any> | null;

  @ApiPropertyOptional({ description: 'Data after the change' })
  newData: Record<string, any> | null;

  @ApiPropertyOptional({ type: String, example: '550e8400-e29b-41d4-a716-446655440010' })
  performedBy: string | null;

  @ApiPropertyOptional({ type: String, example: 'Nguyen Van A' })
  performedByName: string | null;

  @ApiProperty({ example: '2026-04-20T08:00:00.000Z' })
  createdAt: Date;
}

export class ListPricingAuditLogResponse {
  @ApiProperty({ type: [PricingAuditLogEntry] })
  data: PricingAuditLogEntry[];

  @ApiProperty({ example: 42 })
  total: number;

  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 20 })
  limit: number;
}
