/**
 * Room Type Base Rates NATS Contracts (5 patterns)
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomTypeBaseRate } from '../types';

// ============================================================================
// Find All Room Type Base Rates
// ============================================================================

export class FindAllRoomTypeBaseRatesRequest {
  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsString()
  hotelId: string;
}

export class FindAllRoomTypeBaseRatesResponse {
  @ApiProperty({
    description: 'List of room type base rates',
    type: RoomTypeBaseRate,
    isArray: true,
  })
  data: RoomTypeBaseRate[];
}

export type FindAllRoomTypeBaseRatesNatsResponse = NatsResponse<FindAllRoomTypeBaseRatesResponse>;

// ============================================================================
// Find One Room Type Base Rate
// ============================================================================

export class FindOneRoomTypeBaseRateRequest {
  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsString()
  hotelId: string;

  @ApiProperty({
    description: 'Room Type ID',
    example: '123e4567-e89b-12d3-a456-426614174002',
  })
  @IsString()
  roomTypeId: string;
}

export class FindOneRoomTypeBaseRateResponse {
  @ApiProperty({
    description: 'Room type base rate data',
    type: Object, // RoomTypeBaseRate type
  })
  data: RoomTypeBaseRate;
}

export type FindOneRoomTypeBaseRateNatsResponse = NatsResponse<FindOneRoomTypeBaseRateResponse>;

// ============================================================================
// Upsert Room Type Base Rate
// ============================================================================

export class UpsertRoomTypeBaseRateRequest {
  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsString()
  hotelId: string;

  @ApiProperty({
    description: 'Room Type ID',
    example: '123e4567-e89b-12d3-a456-426614174002',
  })
  @IsString()
  roomTypeId: string;

  @ApiProperty({
    description: 'Base rate per night',
    example: 1000000,
  })
  @IsNumber()
  baseRate: number;

  @ApiPropertyOptional({
    description: 'Weekday rate (Mon-Thu)',
    example: 900000,
  })
  @IsOptional()
  @IsNumber()
  weekdayRate?: number;

  @ApiPropertyOptional({
    description: 'Weekend rate (Fri-Sun)',
    example: 1200000,
  })
  @IsOptional()
  @IsNumber()
  weekendRate?: number;

  @ApiPropertyOptional({
    description: 'Use weekday/weekend pricing',
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  useWeekdayWeekend?: boolean;

  @ApiPropertyOptional({
    description: 'Hourly rate',
    example: 50000,
  })
  @IsOptional()
  @IsNumber()
  hourlyRate?: number;

  @ApiPropertyOptional({
    description: 'Currency code',
    example: 'VND',
  })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({
    description: 'Is active',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpsertRoomTypeBaseRateResponse {
  @ApiProperty({
    description: 'Upserted room type base rate',
    type: Object, // RoomTypeBaseRate type
  })
  data: RoomTypeBaseRate;

  @ApiProperty({
    description: 'Success message',
    example: 'Room type base rate updated successfully',
  })
  message: string;
}

export type UpsertRoomTypeBaseRateNatsResponse = NatsResponse<UpsertRoomTypeBaseRateResponse>;

// ============================================================================
// Remove Room Type Base Rate
// ============================================================================

export class RemoveRoomTypeBaseRateRequest {
  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsString()
  hotelId: string;

  @ApiProperty({
    description: 'Room Type ID',
    example: '123e4567-e89b-12d3-a456-426614174002',
  })
  @IsString()
  roomTypeId: string;
}

export class RemoveRoomTypeBaseRateResponse {
  @ApiProperty({
    description: 'Success message',
    example: 'Room type base rate removed successfully',
  })
  message: string;
}

export type RemoveRoomTypeBaseRateNatsResponse = NatsResponse<RemoveRoomTypeBaseRateResponse>;

// ============================================================================
// Bulk Upsert Room Type Base Rates
// ============================================================================

export class BulkRateItem {
  @ApiProperty({
    description: 'Room Type ID',
    example: '123e4567-e89b-12d3-a456-426614174002',
  })
  @IsString()
  roomTypeId: string;

  @ApiProperty({
    description: 'Base rate per night',
    example: 1000000,
  })
  @IsNumber()
  baseRate: number;

  @ApiPropertyOptional({
    description: 'Currency code',
    example: 'VND',
  })
  @IsOptional()
  @IsString()
  currency?: string;
}

export class BulkUpsertRoomTypeBaseRatesRequest {
  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsString()
  hotelId: string;

  @ApiProperty({
    description: 'Array of rates to upsert',
    type: [BulkRateItem],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BulkRateItem)
  rates: BulkRateItem[];
}

export class BulkUpsertRoomTypeBaseRatesResponse {
  @ApiProperty({
    description: 'List of upserted room type base rates',
    type: [Object], // RoomTypeBaseRate type
    isArray: true,
  })
  data: RoomTypeBaseRate[];

  @ApiProperty({
    description: 'Success message',
    example: 'Successfully upserted 5 room type base rates',
  })
  message: string;
}

export type BulkUpsertRoomTypeBaseRatesNatsResponse = NatsResponse<BulkUpsertRoomTypeBaseRatesResponse>;
