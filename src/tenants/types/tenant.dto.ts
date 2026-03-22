import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEnum,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsObject,
  Length,
  ValidateIf,
  Matches,
} from 'class-validator';
import { TenantType } from '../../user/types/tenant.types';

export class TenantResponseDto {
  @ApiProperty({ description: 'Unique identifier', example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ description: 'Name of the tenant', example: 'Grand Hotel Chain' })
  name: string;

  @ApiProperty({ description: 'Type of tenant', enum: TenantType })
  type: TenantType;

  @ApiPropertyOptional({ description: 'URL-friendly slug', example: 'grand-hotel-chain' })
  slug?: string;

  @ApiProperty({ description: 'Whether the tenant is active' })
  isActive: boolean;

  @ApiPropertyOptional({ description: 'Description' })
  description?: string;

  @ApiPropertyOptional({ description: 'Hotel IDs (HOTEL_CHAIN only)', type: [String] })
  hotels?: string[];

  @ApiPropertyOptional({ description: 'Chain ID (INDIVIDUAL_HOTEL only)' })
  chainId?: string;

  @ApiPropertyOptional({ description: 'Physical address' })
  address?: string;

  @ApiPropertyOptional({ description: 'City' })
  city?: string;

  @ApiPropertyOptional({ description: 'Country' })
  country?: string;

  @ApiPropertyOptional({ description: 'Contact email' })
  contactEmail?: string;

  @ApiPropertyOptional({ description: 'Contact phone' })
  contactPhone?: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}

export class CreateTenantDto {
  @ApiProperty({ description: 'Name of the tenant', example: 'Grand Hotel Chain', minLength: 2, maxLength: 100 })
  @IsString()
  @Length(2, 100)
  name: string;

  @ApiProperty({ description: 'Type of tenant', enum: TenantType, example: TenantType.HOTEL_CHAIN })
  @IsEnum(TenantType)
  type: TenantType;

  @ApiPropertyOptional({ description: 'URL-friendly slug (lowercase, hyphens)', example: 'grand-hotel-chain', maxLength: 100 })
  @IsOptional()
  @IsString()
  @Length(2, 100)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'slug must be lowercase alphanumeric with hyphens' })
  slug?: string;

  @ApiPropertyOptional({ description: 'Description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Hotel IDs (HOTEL_CHAIN only)', type: [String] })
  @ValidateIf(o => o.type === TenantType.HOTEL_CHAIN)
  @IsOptional()
  @IsUUID('4', { each: true })
  hotels?: string[];

  @ApiPropertyOptional({ description: 'Chain ID (INDIVIDUAL_HOTEL only)' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsUUID('4')
  chainId?: string;

  @ApiPropertyOptional({ description: 'Physical address' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(5, 255)
  address?: string;

  @ApiPropertyOptional({ description: 'City' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(2, 100)
  city?: string;

  @ApiPropertyOptional({ description: 'Country' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(2, 100)
  country?: string;

  @ApiPropertyOptional({ description: 'Contact email' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(5, 100)
  contactEmail?: string;

  @ApiPropertyOptional({ description: 'Contact phone' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(5, 20)
  contactPhone?: string;

  @ApiPropertyOptional({ description: 'Hotel operation settings' })
  @IsOptional()
  @IsObject()
  operationSettings?: Record<string, any>;
}

export class UpdateTenantDto {
  @ApiPropertyOptional({ description: 'Name of the tenant', minLength: 2, maxLength: 100 })
  @IsOptional()
  @IsString()
  @Length(2, 100)
  name?: string;

  @ApiPropertyOptional({ description: 'Type of tenant', enum: TenantType })
  @IsOptional()
  @IsEnum(TenantType)
  type?: TenantType;

  @ApiPropertyOptional({ description: 'URL-friendly slug (lowercase, hyphens)', maxLength: 100 })
  @IsOptional()
  @IsString()
  @Length(2, 100)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'slug must be lowercase alphanumeric with hyphens' })
  slug?: string;

  @ApiPropertyOptional({ description: 'Whether the tenant is active' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Hotel IDs (HOTEL_CHAIN only)', type: [String] })
  @ValidateIf(o => o.type === TenantType.HOTEL_CHAIN)
  @IsOptional()
  @IsUUID('4', { each: true })
  hotels?: string[];

  @ApiPropertyOptional({ description: 'Chain ID (INDIVIDUAL_HOTEL only)' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsUUID('4')
  chainId?: string;

  @ApiPropertyOptional({ description: 'Physical address' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(5, 255)
  address?: string;

  @ApiPropertyOptional({ description: 'City' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(2, 100)
  city?: string;

  @ApiPropertyOptional({ description: 'Country' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(2, 100)
  country?: string;

  @ApiPropertyOptional({ description: 'Contact email' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(5, 100)
  contactEmail?: string;

  @ApiPropertyOptional({ description: 'Contact phone' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(5, 20)
  contactPhone?: string;

  @ApiPropertyOptional({ description: 'Hotel operation settings' })
  @IsOptional()
  @IsObject()
  operationSettings?: Record<string, any>;
}
