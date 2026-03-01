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

  @ApiPropertyOptional({ description: 'Description', example: 'Luxury hotel chain across Europe' })
  @IsOptional()
  @IsString()
  description?: string;

  // HOTEL_CHAIN fields
  @ApiPropertyOptional({ description: 'Hotel IDs belonging to this chain (HOTEL_CHAIN only)', type: [String] })
  @ValidateIf(o => o.type === TenantType.HOTEL_CHAIN)
  @IsOptional()
  @IsUUID('4', { each: true })
  hotels?: string[];

  // INDIVIDUAL_HOTEL fields
  @ApiPropertyOptional({ description: 'Chain ID this hotel belongs to (INDIVIDUAL_HOTEL only)' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsUUID('4')
  chainId?: string;

  @ApiPropertyOptional({ description: 'Physical address', example: '123 Main Street' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(5, 255)
  address?: string;

  @ApiPropertyOptional({ description: 'City', example: 'Paris' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(2, 100)
  city?: string;

  @ApiPropertyOptional({ description: 'Country', example: 'France' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(2, 100)
  country?: string;

  @ApiPropertyOptional({ description: 'Contact email', example: 'contact@grandhotel.com' })
  @ValidateIf(o => o.type === TenantType.INDIVIDUAL_HOTEL)
  @IsOptional()
  @IsString()
  @Length(5, 100)
  contactEmail?: string;

  @ApiPropertyOptional({ description: 'Contact phone', example: '+33123456789' })
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
  @ApiPropertyOptional({ description: 'Name of the tenant', example: 'Grand Hotel Chain', minLength: 2, maxLength: 100 })
  @IsOptional()
  @IsString()
  @Length(2, 100)
  name?: string;

  @ApiPropertyOptional({ description: 'Type of tenant', enum: TenantType })
  @IsOptional()
  @IsEnum(TenantType)
  type?: TenantType;

  @ApiPropertyOptional({ description: 'URL-friendly slug (lowercase, hyphens)', example: 'grand-hotel-chain', maxLength: 100 })
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
