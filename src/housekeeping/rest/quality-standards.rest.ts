/**
 * Quality Standards REST DTOs
 * Single source of truth for API Gateway request/query params
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID, IsBoolean, IsNumber, IsDateString, IsString, IsArray, ValidateNested, IsObject, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { QualityStandardItem } from '../nats/quality-standards.nats';

export class GetAllQualityStandardsQueryDto {
  @ApiPropertyOptional({ description: 'Filter by room type ID (UUID from inventory service)' })
  @IsOptional()
  @IsUUID()
  roomTypeId?: string;

  @ApiPropertyOptional({ description: 'Filter by active status' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Page number for pagination', minimum: 1, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', minimum: 1, maximum: 100, default: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number;
}

export class CreateQualityStandardDto {
  @ApiProperty({ description: 'Quality standard name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Description of the standard' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Room type ID from inventory service' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Quality standard items', type: [QualityStandardItem] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QualityStandardItem)
  items: QualityStandardItem[];

  @ApiProperty({ description: 'Minimum passing score (0-100)' })
  @IsNumber()
  @Min(0)
  @Max(100)
  passingScore: number;

  @ApiPropertyOptional({ description: 'Additional configuration' })
  @IsOptional()
  @IsObject()
  configuration?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Effective date (ISO string)' })
  @IsOptional()
  @IsDateString()
  effectiveDate?: string;

  @ApiPropertyOptional({ description: 'Expiry date (ISO string)' })
  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @ApiPropertyOptional({ description: 'Whether this standard is active', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'ID of user creating this standard' })
  @IsOptional()
  @IsString()
  createdBy?: string;
}

export class UpdateQualityStandardDto {
  @ApiPropertyOptional({ description: 'Quality standard name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Description of the standard' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Room type ID from inventory service' })
  @IsOptional()
  @IsUUID()
  roomTypeId?: string;

  @ApiPropertyOptional({ description: 'Quality standard items', type: [QualityStandardItem] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QualityStandardItem)
  items?: QualityStandardItem[];

  @ApiPropertyOptional({ description: 'Minimum passing score (0-100)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  passingScore?: number;

  @ApiPropertyOptional({ description: 'Additional configuration' })
  @IsOptional()
  @IsObject()
  configuration?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Effective date (ISO string)' })
  @IsOptional()
  @IsDateString()
  effectiveDate?: string;

  @ApiPropertyOptional({ description: 'Expiry date (ISO string)' })
  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @ApiPropertyOptional({ description: 'ID of user updating this standard' })
  @IsOptional()
  @IsString()
  updatedBy?: string;
}

export class GetQualityStandardsStatisticsQueryDto {
  @ApiPropertyOptional({ description: 'Start date for statistics period' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date for statistics period' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ description: 'Filter by room type ID (UUID from inventory service)' })
  @IsOptional()
  @IsUUID()
  roomTypeId?: string;
}
