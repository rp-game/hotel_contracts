/**
 * Sales Activity REST DTOs
 * Used by api-gateway controllers for request validation
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
  IsUUID,
  IsNumber,
  MaxLength,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { SalesActivityType } from '../enums/sales.enum';

export class CreateSalesActivityDto {
  @ApiProperty({ description: 'Hotel ID', example: 'uuid' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Sales person ID' })
  @IsUUID()
  salesPersonId: string;

  @ApiProperty({ description: 'Sales person name', example: 'Nguyen Van A' })
  @IsString()
  @MaxLength(200)
  salesPersonName: string;

  @ApiProperty({ description: 'Activity type', enum: SalesActivityType })
  @IsEnum(SalesActivityType)
  activityType: SalesActivityType;

  @ApiProperty({ description: 'Subject/title of the activity', example: 'Follow-up call with Vingroup' })
  @IsString()
  @MaxLength(300)
  subject: string;

  @ApiPropertyOptional({ description: 'Detailed description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Activity date (YYYY-MM-DD)', example: '2026-03-19' })
  @IsDateString()
  activityDate: string;

  @ApiPropertyOptional({ description: 'Corporate account ID' })
  @IsOptional()
  @IsUUID()
  corporateAccountId?: string;

  @ApiPropertyOptional({ description: 'Travel agent ID' })
  @IsOptional()
  @IsUUID()
  travelAgentId?: string;

  @ApiPropertyOptional({ description: 'Contact person name', example: 'Tran Thi B' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  contactName?: string;

  @ApiPropertyOptional({ description: 'Outcome/result of the activity' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  outcome?: string;

  @ApiPropertyOptional({ description: 'Follow-up date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  followUpDate?: string;
}

export class UpdateSalesActivityDto {
  @ApiPropertyOptional({ description: 'Activity type', enum: SalesActivityType })
  @IsOptional()
  @IsEnum(SalesActivityType)
  activityType?: SalesActivityType;

  @ApiPropertyOptional({ description: 'Subject/title' })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  subject?: string;

  @ApiPropertyOptional({ description: 'Detailed description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Activity date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  activityDate?: string;

  @ApiPropertyOptional({ description: 'Corporate account ID' })
  @IsOptional()
  @IsUUID()
  corporateAccountId?: string;

  @ApiPropertyOptional({ description: 'Travel agent ID' })
  @IsOptional()
  @IsUUID()
  travelAgentId?: string;

  @ApiPropertyOptional({ description: 'Contact person name' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  contactName?: string;

  @ApiPropertyOptional({ description: 'Outcome/result' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  outcome?: string;

  @ApiPropertyOptional({ description: 'Follow-up date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  followUpDate?: string;
}

export class FindSalesActivitiesQueryDto {
  @ApiPropertyOptional({ description: 'Filter by hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by sales person ID' })
  @IsOptional()
  @IsUUID()
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Filter by activity type', enum: SalesActivityType })
  @IsOptional()
  @IsEnum(SalesActivityType)
  activityType?: SalesActivityType;

  @ApiPropertyOptional({ description: 'Filter by corporate account ID' })
  @IsOptional()
  @IsUUID()
  corporateAccountId?: string;

  @ApiPropertyOptional({ description: 'Filter by travel agent ID' })
  @IsOptional()
  @IsUUID()
  travelAgentId?: string;

  @ApiPropertyOptional({ description: 'Date from (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @ApiPropertyOptional({ description: 'Date to (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  dateTo?: string;

  @ApiPropertyOptional({ description: 'Search by subject or contact name' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Page number (1-indexed)', default: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 20 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @Max(100)
  limit?: number;
}
