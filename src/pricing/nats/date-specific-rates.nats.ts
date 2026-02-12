/**
 * Date-Specific Rates NATS Contracts (7 patterns)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsUUID,
  IsString,
  IsDateString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common/nats-response.interface';
import { SpecificDateRate, SpecificDateRateCalendar, BulkCreateDateRatesResult } from '../types';

// ============================================================================
// Request Classes
// ============================================================================

/**
 * Request to find all date-specific rates
 */
export class FindAllDateRatesRequest {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Room Type ID (optional filter)', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsOptional()
  @IsUUID()
  roomTypeId?: string;
}

/**
 * Request to find date-specific rate by ID
 */
export class FindDateRateByIdRequest {
  @ApiProperty({ description: 'Date rate ID', example: '550e8400-e29b-41d4-a716-446655440099' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;
}

/**
 * Request to get calendar view of date rates
 */
export class FindDateRateCalendarRequest {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Calendar start date (YYYY-MM-DD)', example: '2025-12-01' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'Calendar end date (YYYY-MM-DD)', example: '2025-12-31' })
  @IsDateString()
  endDate: string;
}

/**
 * Request to create a date-specific rate
 */
export class CreateSpecificDateRateRequest {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Specific date (YYYY-MM-DD)', example: '2025-12-25' })
  @IsDateString()
  date: string;

  @ApiProperty({ description: 'Rate for this specific date', example: 250, minimum: 0 })
  @IsNumber()
  @Min(0)
  rate: number;

  @ApiPropertyOptional({ description: 'Currency code', example: 'USD', default: 'USD' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Notes about this date (e.g., "Christmas Day")', example: 'Holiday premium pricing' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Whether this rate is active', example: true, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Single date-rate entry for bulk create
 */
export class DateRateEntry {
  @ApiProperty({ description: 'Specific date (YYYY-MM-DD)', example: '2025-12-25' })
  @IsDateString()
  date: string;

  @ApiProperty({ description: 'Rate for this date', example: 250, minimum: 0 })
  @IsNumber()
  @Min(0)
  rate: number;

  @ApiPropertyOptional({ description: 'Notes about this date', example: 'Christmas Day' })
  @IsOptional()
  @IsString()
  notes?: string;
}

/**
 * Request to bulk create date-specific rates
 */
export class BulkCreateSpecificDateRatesRequest {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({
    description: 'Array of date-specific rates to create',
    type: [DateRateEntry],
    example: [
      { date: '2025-12-24', rate: 220, notes: 'Christmas Eve' },
      { date: '2025-12-25', rate: 250, notes: 'Christmas Day' },
      { date: '2025-12-31', rate: 300, notes: "New Year's Eve" },
    ],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => DateRateEntry)
  rates: DateRateEntry[];

  @ApiPropertyOptional({ description: 'Currency code', example: 'USD', default: 'USD' })
  @IsOptional()
  @IsString()
  currency?: string;
}

/**
 * DTO for update body (partial fields only)
 */
export class UpdateDateRateDto {
  @ApiPropertyOptional({ description: 'Rate for this specific date', example: 250, minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  rate?: number;

  @ApiPropertyOptional({ description: 'Notes about this date', example: 'Holiday premium pricing' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Whether this rate is active', example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Request to update a date-specific rate (NATS)
 */
export class UpdateDateRateRequest {
  @ApiProperty({ description: 'Date rate ID', example: '550e8400-e29b-41d4-a716-446655440099' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Update data', type: () => UpdateDateRateDto })
  @ValidateNested()
  @Type(() => UpdateDateRateDto)
  dto: UpdateDateRateDto;
}

/**
 * Request to delete a date-specific rate
 */
export class DeleteDateRateRequest {
  @ApiProperty({ description: 'Date rate ID', example: '550e8400-e29b-41d4-a716-446655440099' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;
}

// ============================================================================
// Response Classes
// ============================================================================

/**
 * Response for finding all date-specific rates
 */
export class FindAllDateRatesResponse {
  @ApiProperty({
    description: 'Array of date-specific rates',
    type: [SpecificDateRate],
    example: [
      {
        id: '550e8400-e29b-41d4-a716-446655440099',
        tenantId: '550e8400-e29b-41d4-a716-446655440000',
        hotelId: '550e8400-e29b-41d4-a716-446655440002',
        roomTypeId: '550e8400-e29b-41d4-a716-446655440001',
        date: '2025-12-25',
        rate: 250,
        currency: 'USD',
        notes: 'Christmas Day',
        isActive: true,
        createdAt: '2025-10-05T10:30:00Z',
        updatedAt: '2025-10-05T10:30:00Z',
      },
    ],
  })
  data: SpecificDateRate[];
}

export type FindAllDateRatesNatsResponse = NatsResponse<FindAllDateRatesResponse>;

/**
 * Response for finding date-specific rate by ID
 */
export class FindDateRateByIdResponse {
  @ApiProperty({
    description: 'Date-specific rate details',
    type: SpecificDateRate,
    example: {
      id: '550e8400-e29b-41d4-a716-446655440099',
      tenantId: '550e8400-e29b-41d4-a716-446655440000',
      hotelId: '550e8400-e29b-41d4-a716-446655440002',
      roomTypeId: '550e8400-e29b-41d4-a716-446655440001',
      date: '2025-12-25',
      rate: 250,
      currency: 'USD',
      notes: 'Christmas Day',
      isActive: true,
      createdAt: '2025-10-05T10:30:00Z',
      updatedAt: '2025-10-05T10:30:00Z',
    },
  })
  data: SpecificDateRate;
}

export type FindDateRateByIdNatsResponse = NatsResponse<FindDateRateByIdResponse>;

/**
 * Response for calendar view
 */
export class FindDateRateCalendarResponse {
  @ApiProperty({
    description: 'Calendar view of date-specific rates',
    type: SpecificDateRateCalendar,
    example: {
      roomTypeId: '550e8400-e29b-41d4-a716-446655440001',
      startDate: '2025-12-01',
      endDate: '2025-12-31',
      dates: [
        { date: '2025-12-25', rate: 250, currency: 'USD', notes: 'Christmas', isActive: true, hasSpecialRate: true },
        { date: '2025-12-26', isActive: false, hasSpecialRate: false },
      ],
    },
  })
  data: SpecificDateRateCalendar;
}

export type FindDateRateCalendarNatsResponse = NatsResponse<FindDateRateCalendarResponse>;

/**
 * Response for creating a date-specific rate
 */
export class CreateSpecificDateRateResponse {
  @ApiProperty({
    description: 'Created date-specific rate',
    type: SpecificDateRate,
    example: {
      id: '550e8400-e29b-41d4-a716-446655440099',
      tenantId: '550e8400-e29b-41d4-a716-446655440000',
      hotelId: '550e8400-e29b-41d4-a716-446655440002',
      roomTypeId: '550e8400-e29b-41d4-a716-446655440001',
      date: '2025-12-25',
      rate: 250,
      currency: 'USD',
      notes: 'Christmas Day',
      isActive: true,
      createdAt: '2025-10-05T10:30:00Z',
      updatedAt: '2025-10-05T10:30:00Z',
    },
  })
  data: SpecificDateRate;

  @ApiProperty({ description: 'Success message', example: 'Date-specific rate created successfully' })
  message: string;
}

export type CreateSpecificDateRateNatsResponse = NatsResponse<CreateSpecificDateRateResponse>;

/**
 * Response for bulk creating date-specific rates
 */
export class BulkCreateSpecificDateRatesResponse {
  @ApiProperty({
    description: 'Bulk create result',
    type: BulkCreateDateRatesResult,
    example: {
      created: 3,
      dates: ['2025-12-24', '2025-12-25', '2025-12-31'],
      skipped: 0,
      errors: [],
    },
  })
  data: BulkCreateDateRatesResult;

  @ApiProperty({ description: 'Success message', example: '3 date-specific rates created successfully' })
  message: string;
}

export type BulkCreateSpecificDateRatesNatsResponse = NatsResponse<BulkCreateSpecificDateRatesResponse>;

/**
 * Response for updating a date-specific rate
 */
export class UpdateDateRateResponse {
  @ApiProperty({
    description: 'Updated date-specific rate',
    type: SpecificDateRate,
    example: {
      id: '550e8400-e29b-41d4-a716-446655440099',
      tenantId: '550e8400-e29b-41d4-a716-446655440000',
      hotelId: '550e8400-e29b-41d4-a716-446655440002',
      roomTypeId: '550e8400-e29b-41d4-a716-446655440001',
      date: '2025-12-25',
      rate: 275,
      currency: 'USD',
      notes: 'Christmas Day - Updated',
      isActive: true,
      createdAt: '2025-10-05T10:30:00Z',
      updatedAt: '2025-10-05T11:00:00Z',
    },
  })
  data: SpecificDateRate;

  @ApiProperty({ description: 'Success message', example: 'Date-specific rate updated successfully' })
  message: string;
}

export type UpdateDateRateNatsResponse = NatsResponse<UpdateDateRateResponse>;

/**
 * Response for deleting a date-specific rate
 */
export class DeleteDateRateResponse {
  @ApiProperty({ description: 'Success message', example: 'Date-specific rate deleted successfully' })
  message: string;
}

export type DeleteDateRateNatsResponse = NatsResponse<DeleteDateRateResponse>;
