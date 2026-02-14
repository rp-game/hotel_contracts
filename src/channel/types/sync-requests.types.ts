/**
 * Sync Request DTOs
 * Used for triggering sync operations from API Gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional, IsBoolean, IsNumber, IsDateString, IsObject, ValidateNested, IsArray, IsEnum, Min, Max } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { SyncOperation } from '../enums';

/**
 * Inventory Update DTO
 * For updating single room inventory
 */
export class InventoryUpdateDto {
  @IsUUID()
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @IsUUID()
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @IsUUID()
  @ApiProperty({ description: 'Room ID' })
  roomId: string;

  @IsDateString()
  @ApiProperty({ description: 'Date for inventory update (YYYY-MM-DD)' })
  date: string;

  @IsNumber()
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  @ApiProperty({ description: 'Available inventory count' })
  available: number;

  @IsOptional()
  @IsObject()
  @ApiPropertyOptional({ description: 'Inventory restrictions' })
  restrictions?: {
    stopSell?: boolean;
    closedToArrival?: boolean;
    closedToDeparture?: boolean;
    minStay?: number;
    maxStay?: number;
  };
}

/**
 * Bulk Inventory Update DTO
 * For batch inventory updates across multiple dates
 */
export class BulkInventoryUpdateDto {
  @IsUUID()
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @IsUUID()
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @IsDateString()
  @ApiProperty({ description: 'Start date for bulk update (YYYY-MM-DD)' })
  startDate: string;

  @IsDateString()
  @ApiProperty({ description: 'End date for bulk update (YYYY-MM-DD)' })
  endDate: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InventoryUpdateDto)
  @ApiProperty({ description: 'List of inventory updates', type: [InventoryUpdateDto] })
  inventoryUpdates: InventoryUpdateDto[];

  @IsOptional()
  @IsArray()
  @IsUUID(4, { each: true })
  @ApiPropertyOptional({ description: 'Target specific providers (optional)' })
  targetProviders?: string[];
}

/**
 * Rate Update DTO
 * For updating room rates
 */
export class RateUpdateDto {
  @IsUUID()
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @IsUUID()
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @IsUUID()
  @ApiProperty({ description: 'Room ID' })
  roomId: string;

  @IsUUID()
  @ApiProperty({ description: 'Rate plan ID' })
  ratePlanId: string;

  @IsDateString()
  @ApiProperty({ description: 'Date for rate update (YYYY-MM-DD)' })
  date: string;

  @IsNumber()
  @Min(0)
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({ description: 'Room rate' })
  rate: number;

  @IsString()
  @ApiProperty({ description: 'Currency code (e.g., USD, EUR)' })
  currency: string;

  @IsOptional()
  @IsObject()
  @ApiPropertyOptional({ description: 'Rate configuration options' })
  rateConfig?: {
    rateBasis?: string;
    mealPlan?: string;
    cancellationPolicy?: string;
    inclusions?: string[];
  };
}

/**
 * Sync Request DTO
 * For triggering sync operations
 */
export class SyncRequestDto {
  @IsEnum(SyncOperation)
  @ApiProperty({ description: 'Type of sync operation', enum: SyncOperation })
  operation: SyncOperation;

  @IsUUID()
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @IsUUID()
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @IsOptional()
  @IsArray()
  @IsUUID(4, { each: true })
  @ApiPropertyOptional({ description: 'Target specific providers (empty = all active)' })
  targetProviders?: string[];

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ description: 'Start date for sync (YYYY-MM-DD)' })
  startDate?: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ description: 'End date for sync (YYYY-MM-DD)' })
  endDate?: string;

  @IsOptional()
  @IsObject()
  @ApiPropertyOptional({ description: 'Additional sync parameters' })
  parameters?: Record<string, any>;
}

/**
 * Sync From Provider DTO
 * For pulling data from external providers
 */
export class SyncFromProviderDto {
  @IsUUID()
  @ApiProperty({ description: 'Provider ID to sync from' })
  providerId: string;

  @IsDateString()
  @ApiProperty({ description: 'Start date for sync (YYYY-MM-DD)' })
  startDate: string;

  @IsDateString()
  @ApiProperty({ description: 'End date for sync (YYYY-MM-DD)' })
  endDate: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({ description: 'Tenant ID filter' })
  tenantId?: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({ description: 'Hotel ID filter' })
  hotelId?: string;

  @IsOptional()
  @IsEnum(SyncOperation)
  @ApiPropertyOptional({ description: 'Specific operation to sync', enum: SyncOperation })
  operation?: SyncOperation;
}

/**
 * Promotion Sync DTO
 * For syncing promotional rates and packages
 */
export class PromotionSyncDto {
  @IsUUID()
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @IsUUID()
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @IsString()
  @ApiProperty({ description: 'Promotion code' })
  promotionCode: string;

  @IsDateString()
  @ApiProperty({ description: 'Promotion booking start date (YYYY-MM-DD)' })
  bookingStartDate: string;

  @IsDateString()
  @ApiProperty({ description: 'Promotion booking end date (YYYY-MM-DD)' })
  bookingEndDate: string;

  @IsDateString()
  @ApiProperty({ description: 'Promotion stay start date (YYYY-MM-DD)' })
  stayStartDate: string;

  @IsDateString()
  @ApiProperty({ description: 'Promotion stay end date (YYYY-MM-DD)' })
  stayEndDate: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  @ApiProperty({ description: 'Discount percentage (0-100)' })
  discountPercentage: number;

  @IsOptional()
  @IsArray()
  @IsUUID(4, { each: true })
  @ApiPropertyOptional({ description: 'Target specific room types' })
  targetRoomTypes?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID(4, { each: true })
  @ApiPropertyOptional({ description: 'Target specific providers' })
  targetProviders?: string[];
}
