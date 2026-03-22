/**
 * Sales Target REST DTOs
 * Used by api-gateway controllers for request validation
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsUUID,
  Min,
  Max,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSalesTargetDto {
  @ApiPropertyOptional({ description: 'Hotel ID (null = chain-level target)' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiProperty({ description: 'Sales person ID' })
  @IsUUID()
  salesPersonId: string;

  @ApiProperty({ description: 'Sales person name', example: 'Nguyen Van A' })
  @IsString()
  @MaxLength(200)
  salesPersonName: string;

  @ApiProperty({ description: 'Target year', example: 2026 })
  @IsNumber()
  @Type(() => Number)
  @Min(2020)
  @Max(2100)
  year: number;

  @ApiProperty({ description: 'Target month (1-12)', example: 3 })
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @Max(12)
  month: number;

  @ApiProperty({ description: 'Target revenue', example: 100000000 })
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  targetRevenue: number;

  @ApiPropertyOptional({ description: 'Target room nights', example: 50 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  targetRoomNights?: number;

  @ApiPropertyOptional({ description: 'Target new accounts', example: 5 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  targetNewAccounts?: number;

  @ApiPropertyOptional({ description: 'Notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateSalesTargetDto {
  @ApiPropertyOptional({ description: 'Target revenue' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  targetRevenue?: number;

  @ApiPropertyOptional({ description: 'Target room nights' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  targetRoomNights?: number;

  @ApiPropertyOptional({ description: 'Target new accounts' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  targetNewAccounts?: number;

  @ApiPropertyOptional({ description: 'Notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class FindSalesTargetsQueryDto {
  @ApiPropertyOptional({ description: 'Filter by hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by sales person ID' })
  @IsOptional()
  @IsUUID()
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Filter by year' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  year?: number;

  @ApiPropertyOptional({ description: 'Filter by month (1-12)' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @Max(12)
  month?: number;
}

export class RecalculateSalesTargetsDto {
  @ApiPropertyOptional({ description: 'Hotel ID (null = recalculate chain-level targets)' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Sales person ID (recalculate for specific person)' })
  @IsOptional()
  @IsUUID()
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Year (defaults to current year)' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  year?: number;

  @ApiPropertyOptional({ description: 'Month (defaults to current month)' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @Max(12)
  month?: number;
}
