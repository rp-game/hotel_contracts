/**
 * Report Filters DTO
 * Used by sales report endpoints for query parameters
 */

import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsDateString, IsUUID, IsString } from 'class-validator';

export class ReportFiltersDto {
  @ApiPropertyOptional({ description: 'Tenant ID (injected by gateway)', example: 'tenant-001' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({
    description: 'Report start date in ISO 8601 format',
    example: '2026-01-01',
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({
    description: 'Report end date in ISO 8601 format',
    example: '2026-12-31',
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({
    description: 'Filter by hotel ID (UUID)',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({
    description: 'Filter by staff/sales person ID (UUID)',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  @IsOptional()
  @IsUUID()
  staffId?: string;
}
