/**
 * Grid Pricing NATS Contracts
 *
 * Patterns:
 * - pricing.override.set / pricing.override.delete / pricing.override.list  (cell overrides)
 * - pricing.rate-room-type.set / pricing.rate-room-type.list                (rate × room ticks)
 * - pricing.grid.get                                                        (listed-price grid, batch)
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
  Min,
} from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';

// ============================================================================
// Cell Override — Requests
// ============================================================================

/** Upsert one cell override (rate × room × date) — manual price overriding the formula. */
export class SetCellOverrideRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Rate plan ID (DERIVED)' })
  @IsUUID()
  ratePlanId: string;

  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Date (YYYY-MM-DD)', example: '2026-06-14' })
  @IsDateString()
  date: string;

  @ApiProperty({ description: 'Override price (final, listed)', example: 1200000 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiPropertyOptional({ description: 'Currency (default VND)', example: 'VND' })
  @IsOptional()
  @IsString()
  currency?: string;
}

/** Delete a cell override → cell reverts to the formula. */
export class DeleteCellOverrideRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Rate plan ID' })
  @IsUUID()
  ratePlanId: string;

  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Date (YYYY-MM-DD)' })
  @IsDateString()
  date: string;
}

/** List cell overrides for a hotel (+ optional rate plan) over a date range. */
export class ListCellOverrideRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Rate plan ID (optional filter)' })
  @IsOptional()
  @IsUUID()
  ratePlanId?: string;

  @ApiProperty({ description: 'Range start (YYYY-MM-DD inclusive)' })
  @IsDateString()
  dateFrom: string;

  @ApiProperty({ description: 'Range end (YYYY-MM-DD inclusive)' })
  @IsDateString()
  dateTo: string;
}

// ============================================================================
// Cell Override — Response payloads
// ============================================================================

export class CellOverrideDto {
  @ApiProperty() id: string;
  @ApiProperty() ratePlanId: string;
  @ApiProperty() roomTypeId: string;
  @ApiProperty() date: string;
  @ApiProperty() price: number;
  @ApiProperty() currency: string;
}

export class DeleteCellOverrideResult {
  @ApiProperty() deleted: boolean;
}

export type SetCellOverrideNatsResponse = NatsResponse<CellOverrideDto>;
export type DeleteCellOverrideNatsResponse = NatsResponse<DeleteCellOverrideResult>;
export type ListCellOverrideNatsResponse = NatsResponse<CellOverrideDto[]>;

// ============================================================================
// Rate × Room ticks — Requests
// ============================================================================

/** Set a tick for (rate × room). Absence of a row = active; only OFF rows are stored. */
export class SetRateRoomTypeRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Rate plan ID' })
  @IsUUID()
  ratePlanId: string;

  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'true = rate applies to room (row removed); false = off (row stored)' })
  @IsBoolean()
  isActive: boolean;
}

/** List rate × room ticks (only OFF rows; absence = active). */
export class ListRateRoomTypeRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Rate plan ID (optional filter)' })
  @IsOptional()
  @IsUUID()
  ratePlanId?: string;
}

// ============================================================================
// Rate × Room ticks — Response payloads
// ============================================================================

export class RateRoomTypeDto {
  @ApiProperty() id: string;
  @ApiProperty() ratePlanId: string;
  @ApiProperty() roomTypeId: string;
  @ApiProperty() isActive: boolean;
}

export class SetRateRoomTypeActiveResult {
  @ApiProperty({ enum: [true] }) active: true;
}

export type SetRateRoomTypeNatsResponse = NatsResponse<RateRoomTypeDto | SetRateRoomTypeActiveResult>;
export type ListRateRoomTypeNatsResponse = NatsResponse<RateRoomTypeDto[]>;

// ============================================================================
// Listed-price grid (batch)
// ============================================================================

/** Request the listed-price grid for a hotel over a date range. */
export class GetPricingGridRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Range start (YYYY-MM-DD inclusive)' })
  @IsDateString()
  dateFrom: string;

  @ApiProperty({ description: 'Range end (YYYY-MM-DD inclusive)' })
  @IsDateString()
  dateTo: string;

  @ApiProperty({ description: 'Room type IDs', type: [String] })
  @IsArray()
  @ArrayMinSize(1)
  @IsUUID('all', { each: true })
  roomTypeIds: string[];

  @ApiPropertyOptional({ description: 'Rate plan IDs (default: all active)', type: [String] })
  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  ratePlanIds?: string[];
}

export class PricingGridCell {
  @ApiProperty() price: number;
  @ApiProperty({ description: 'base | derived | override' }) source: string;
}

/** {ratePlanId → roomTypeId → {date → {price, source}}} */
export type PricingGrid = Record<string, Record<string, Record<string, PricingGridCell>>>;

export type GetPricingGridNatsResponse = NatsResponse<PricingGrid>;
