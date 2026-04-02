/**
 * Sales Win/Loss Report NATS Contracts
 *
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsNumber, IsDateString, Min } from 'class-validator';

/**
 * Shared report filters request - wraps ReportFiltersDto with tenantId
 * Used by all 5 report endpoints
 */
export class SalesReportNatsRequest {
  @ApiProperty({ description: 'Tenant ID', example: 'tenant-001' })
  @IsString()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Report start date (ISO 8601)', example: '2026-01-01' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'Report end date (ISO 8601)', example: '2026-12-31' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ description: 'Filter by hotel ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by staff ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsOptional()
  @IsUUID()
  staffId?: string;
}

/**
 * Mark Won NATS request - wraps MarkWonDto with tenantId + leadId
 */
export class MarkWonNatsRequest {
  @ApiProperty({ description: 'Tenant ID', example: 'tenant-001' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Sales Lead ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  leadId: string;

  @ApiProperty({ description: 'Booking ID that won the deal', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsUUID()
  bookingId: string;

  @ApiProperty({ description: 'Total won deal value', example: 5000000 })
  @IsNumber()
  @Min(0)
  wonValue: number;

  @ApiPropertyOptional({ description: 'Optional notes about the won deal', example: 'Corporate group booking' })
  @IsOptional()
  @IsString()
  wonNotes?: string;
}

/**
 * Mark Lost NATS request - wraps MarkLostDto with tenantId + leadId
 */
export class MarkLostNatsRequest {
  @ApiProperty({ description: 'Tenant ID', example: 'tenant-001' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Sales Lead ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  leadId: string;

  @ApiProperty({ description: 'Loss reason ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsUUID()
  lossReasonId: string;

  @ApiPropertyOptional({ description: 'Optional notes about the lost deal', example: 'Client budget reduced' })
  @IsOptional()
  @IsString()
  lostNotes?: string;
}

/**
 * Get Loss Reasons NATS request
 */
export class GetLossReasonsNatsRequest {
  @ApiProperty({ description: 'Tenant ID', example: 'tenant-001' })
  @IsString()
  tenantId: string;
}

/**
 * Get Pending Leads NATS request
 */
export class GetPendingLeadsNatsRequest {
  @ApiProperty({ description: 'Tenant ID', example: 'tenant-001' })
  @IsString()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Filter by hotel ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by staff ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsOptional()
  @IsUUID()
  staffId?: string;
}
