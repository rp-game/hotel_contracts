/**
 * Corporate Account REST DTOs
 * Used by api-gateway controllers for request validation
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsEnum,
  IsEmail,
  IsDateString,
  IsUUID,
  Min,
  Max,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CorporateAccountStatus, CorporateAccountType, ContractStatus } from '../enums/sales.enum';

export class CreateCorporateAccountDto {
  @ApiPropertyOptional({ description: 'Account type', enum: CorporateAccountType, default: CorporateAccountType.CORPORATE })
  @IsOptional()
  @IsEnum(CorporateAccountType)
  accountType?: CorporateAccountType;

  @ApiProperty({ description: 'Company name', example: 'Vingroup JSC' })
  @IsString()
  @MaxLength(200)
  companyName: string;

  @ApiPropertyOptional({ description: 'Industry', example: 'Real Estate' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  industry?: string;

  @ApiPropertyOptional({ description: 'Tax code', example: '0123456789' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  taxCode?: string;

  @ApiPropertyOptional({ description: 'Address', example: '123 Nguyen Hue, Ho Chi Minh City' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  address?: string;

  @ApiPropertyOptional({ description: 'Contact person name', example: 'Nguyen Van A' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  contactPerson?: string;

  @ApiPropertyOptional({ description: 'Contact email address', example: 'contact@vingroup.net' })
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiPropertyOptional({ description: 'Contact phone number', example: '+84901234567' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  contactPhone?: string;

  @ApiPropertyOptional({ description: 'Sales person ID (UUID)' })
  @IsOptional()
  @IsUUID()
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Sales person name', example: 'Tran Thi B' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  salesPersonName?: string;

  @ApiPropertyOptional({ description: 'Payment method', example: 'BANK_TRANSFER' })
  @IsOptional()
  @IsString()
  @MaxLength(30)
  paymentMethod?: string;

  @ApiPropertyOptional({ description: 'Payment term in days', example: 30, default: 30 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  paymentTermDays?: number;

  @ApiPropertyOptional({ description: 'Credit limit', example: 500000000 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  creditLimit?: number;

  @ApiPropertyOptional({ description: 'Contract number' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  contractNumber?: string;

  @ApiPropertyOptional({ description: 'Contract start date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  contractStartDate?: string;

  @ApiPropertyOptional({ description: 'Contract end date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  contractEndDate?: string;

  @ApiPropertyOptional({ description: 'Projected room nights per year', example: 500 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  projectedRoomNights?: number;

  @ApiPropertyOptional({ description: 'Internal notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Contract status', enum: ContractStatus })
  @IsOptional()
  @IsEnum(ContractStatus)
  contractStatus?: ContractStatus;

  @ApiPropertyOptional({ description: 'Contract file URL (uploaded via separate endpoint)' })
  @IsOptional()
  @IsString()
  contractFileUrl?: string;

  @ApiPropertyOptional({ description: 'Contract notes' })
  @IsOptional()
  @IsString()
  contractNotes?: string;

  @ApiPropertyOptional({ description: 'Days before contract end to send renewal reminder', example: 30, default: 30 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  renewalReminderDays?: number;
}

export class UpdateCorporateAccountDto {
  @ApiPropertyOptional({ description: 'Account type', enum: CorporateAccountType })
  @IsOptional()
  @IsEnum(CorporateAccountType)
  accountType?: CorporateAccountType;

  @ApiPropertyOptional({ description: 'Company name' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  companyName?: string;

  @ApiPropertyOptional({ description: 'Industry' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  industry?: string;

  @ApiPropertyOptional({ description: 'Tax code' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  taxCode?: string;

  @ApiPropertyOptional({ description: 'Address' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  address?: string;

  @ApiPropertyOptional({ description: 'Contact person name' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  contactPerson?: string;

  @ApiPropertyOptional({ description: 'Contact email address' })
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiPropertyOptional({ description: 'Contact phone number' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  contactPhone?: string;

  @ApiPropertyOptional({ description: 'Sales person ID (UUID)' })
  @IsOptional()
  @IsUUID()
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Sales person name' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  salesPersonName?: string;

  @ApiPropertyOptional({ description: 'Payment method' })
  @IsOptional()
  @IsString()
  @MaxLength(30)
  paymentMethod?: string;

  @ApiPropertyOptional({ description: 'Payment term in days' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  paymentTermDays?: number;

  @ApiPropertyOptional({ description: 'Credit limit' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  creditLimit?: number;

  @ApiPropertyOptional({ description: 'Contract number' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  contractNumber?: string;

  @ApiPropertyOptional({ description: 'Contract start date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  contractStartDate?: string;

  @ApiPropertyOptional({ description: 'Contract end date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  contractEndDate?: string;

  @ApiPropertyOptional({ description: 'Projected room nights per year' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  projectedRoomNights?: number;

  @ApiPropertyOptional({ description: 'Status', enum: CorporateAccountStatus })
  @IsOptional()
  @IsEnum(CorporateAccountStatus)
  status?: CorporateAccountStatus;

  @ApiPropertyOptional({ description: 'Internal notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Contract status', enum: ContractStatus })
  @IsOptional()
  @IsEnum(ContractStatus)
  contractStatus?: ContractStatus;

  @ApiPropertyOptional({ description: 'Contract file URL' })
  @IsOptional()
  @IsString()
  contractFileUrl?: string;

  @ApiPropertyOptional({ description: 'Contract notes' })
  @IsOptional()
  @IsString()
  contractNotes?: string;

  @ApiPropertyOptional({ description: 'Days before contract end to send renewal reminder' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  renewalReminderDays?: number;
}

export class FindCorporateAccountsQueryDto {
  @ApiPropertyOptional({ description: 'Search by company name, account code, or contact person' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Filter by account type', enum: CorporateAccountType })
  @IsOptional()
  @IsEnum(CorporateAccountType)
  accountType?: CorporateAccountType;

  @ApiPropertyOptional({ description: 'Filter by status', enum: CorporateAccountStatus })
  @IsOptional()
  @IsEnum(CorporateAccountStatus)
  status?: CorporateAccountStatus;

  @ApiPropertyOptional({ description: 'Filter by sales person ID' })
  @IsOptional()
  @IsUUID()
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Page number (1-indexed)', default: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 10 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @Max(100)
  limit?: number;

  @ApiPropertyOptional({ description: 'Sort field' })
  @IsOptional()
  @IsString()
  sortBy?: string;

  @ApiPropertyOptional({ description: 'Sort order', enum: ['ASC', 'DESC'] })
  @IsOptional()
  @IsEnum(['ASC', 'DESC'])
  sortOrder?: 'ASC' | 'DESC';
}
