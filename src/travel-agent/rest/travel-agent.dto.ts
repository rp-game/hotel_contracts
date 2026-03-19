/**
 * Travel Agent REST DTOs
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
  Min,
  Max,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CommissionType, TravelAgentStatus } from '../enums/travel-agent.enum';

export class CreateTravelAgentDto {
  @ApiProperty({ description: 'Travel agent name', example: 'Vietnam Travel Co.' })
  @IsString()
  @MaxLength(200)
  agentName: string;

  @ApiPropertyOptional({ description: 'IATA number', example: '12345678' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  iataNumber?: string;

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

  @ApiPropertyOptional({ description: 'Email address', example: 'contact@travel.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Phone number', example: '+84901234567' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  phone?: string;

  @ApiPropertyOptional({ description: 'Commission rate', example: 10.00, default: 10.00 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(100)
  commissionRate?: number;

  @ApiPropertyOptional({ description: 'Commission type', enum: CommissionType, default: CommissionType.PERCENTAGE })
  @IsOptional()
  @IsEnum(CommissionType)
  commissionType?: CommissionType;

  @ApiPropertyOptional({ description: 'Payment term in days', example: 30, default: 30 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  paymentTermDays?: number;

  @ApiPropertyOptional({ description: 'Bank account number' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  bankAccount?: string;

  @ApiPropertyOptional({ description: 'Bank name' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  bankName?: string;

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

  @ApiPropertyOptional({ description: 'Sales person ID' })
  @IsOptional()
  @IsString()
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Sales person name' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  salesPersonName?: string;

  @ApiPropertyOptional({ description: 'Internal notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateTravelAgentDto {
  @ApiPropertyOptional({ description: 'Travel agent name' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  agentName?: string;

  @ApiPropertyOptional({ description: 'IATA number' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  iataNumber?: string;

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

  @ApiPropertyOptional({ description: 'Email address' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  phone?: string;

  @ApiPropertyOptional({ description: 'Commission rate' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(100)
  commissionRate?: number;

  @ApiPropertyOptional({ description: 'Commission type', enum: CommissionType })
  @IsOptional()
  @IsEnum(CommissionType)
  commissionType?: CommissionType;

  @ApiPropertyOptional({ description: 'Payment term in days' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  paymentTermDays?: number;

  @ApiPropertyOptional({ description: 'Bank account number' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  bankAccount?: string;

  @ApiPropertyOptional({ description: 'Bank name' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  bankName?: string;

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

  @ApiPropertyOptional({ description: 'Status', enum: TravelAgentStatus })
  @IsOptional()
  @IsEnum(TravelAgentStatus)
  status?: TravelAgentStatus;

  @ApiPropertyOptional({ description: 'Sales person ID' })
  @IsOptional()
  @IsString()
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Sales person name' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  salesPersonName?: string;

  @ApiPropertyOptional({ description: 'Internal notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class FindTravelAgentsQueryDto {
  @ApiPropertyOptional({ description: 'Search by agent name, code, or contact person' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Filter by status', enum: TravelAgentStatus })
  @IsOptional()
  @IsEnum(TravelAgentStatus)
  status?: TravelAgentStatus;

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

  @ApiPropertyOptional({ description: 'Filter by sales person ID' })
  @IsOptional()
  @IsString()
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Sort order', enum: ['ASC', 'DESC'] })
  @IsOptional()
  @IsEnum(['ASC', 'DESC'])
  sortOrder?: 'ASC' | 'DESC';
}

export class FindCommissionRecordsQueryDto {
  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Filter by status' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Start date filter (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @ApiPropertyOptional({ description: 'End date filter (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  dateTo?: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
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
}
