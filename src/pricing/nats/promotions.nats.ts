/**
 * Promotions NATS Contracts - Centralized
 *
 * IMPORTANT: These are the SINGLE SOURCE OF TRUTH for NATS messaging
 * - Used by pricing-service NATS handlers
 * - Used by API Gateway NATS clients
 * - All classes have validators for runtime safety
 *
 * @verified_date 2026-02-13
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsUUID,
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsArray,
  ValidateNested,
  Min,
  Max,
  MaxLength
} from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common/nats-response.interface';
import { PromotionDto, PromotionsPaginatedResponseDto, PromotionStatus, PromotionConditionsDto } from '../types';

// ============================================================================
// Query/Request DTOs
// ============================================================================

/**
 * Get promotions request with pagination and filtering
 */
export class GetPromotionsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Filter by room type ID' })
  @IsOptional()
  @IsUUID()
  roomTypeId?: string;

  @ApiPropertyOptional({ description: 'Filter by check-in date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  checkIn?: string;

  @ApiPropertyOptional({ description: 'Filter by check-out date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  checkOut?: string;

  @ApiPropertyOptional({ description: 'Filter by promotion code' })
  @IsOptional()
  @IsString()
  promoCode?: string;

  @ApiPropertyOptional({
    description: 'Filter by promotion status',
    enum: ['ACTIVE', 'INACTIVE', 'EXPIRED', 'UPCOMING']
  })
  @IsOptional()
  @IsEnum(['ACTIVE', 'INACTIVE', 'EXPIRED', 'UPCOMING'])
  status?: PromotionStatus;

  @ApiPropertyOptional({ description: 'Filter by isActive flag' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Filter by discount type' })
  @IsOptional()
  @IsEnum(['PERCENTAGE', 'FIXED'])
  discountType?: 'PERCENTAGE' | 'FIXED';

  @ApiPropertyOptional({ description: 'Search by name or code' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Page number', minimum: 1, default: 1 })
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

/**
 * Create promotion request
 */
export class CreatePromotionRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Promotion name', maxLength: 100 })
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiProperty({ description: 'Promotion code (unique)', maxLength: 50 })
  @IsString()
  @MaxLength(50)
  code: string;

  @ApiPropertyOptional({ description: 'Promotion description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Start date (YYYY-MM-DD)' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'End date (YYYY-MM-DD)' })
  @IsDateString()
  endDate: string;

  @ApiProperty({ description: 'Discount type', enum: ['PERCENTAGE', 'FIXED'] })
  @IsEnum(['PERCENTAGE', 'FIXED'])
  discountType: 'PERCENTAGE' | 'FIXED';

  @ApiProperty({ description: 'Discount value' })
  @IsNumber()
  @Min(0)
  discountValue: number;

  @ApiPropertyOptional({ description: 'Applicable room type IDs', type: [String] })
  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  applicableRoomTypes?: string[];

  @ApiPropertyOptional({ description: 'Applicable channels', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  applicableChannels?: string[];

  @ApiPropertyOptional({ description: 'Minimum stay in nights', minimum: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  minimumStay?: number;

  @ApiPropertyOptional({ description: 'Maximum stay in nights', minimum: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maximumStay?: number;

  @ApiPropertyOptional({ description: 'Minimum advance booking days', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minimumAdvanceBookingDays?: number;

  @ApiPropertyOptional({ description: 'Maximum advance booking days', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maximumAdvanceBookingDays?: number;

  @ApiPropertyOptional({ description: 'Blackout dates (YYYY-MM-DD)', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  blackoutDates?: string[];

  @ApiPropertyOptional({ description: 'Usage limit (0 = unlimited)', minimum: 0, default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  usageLimit?: number;

  @ApiPropertyOptional({ description: 'Additional conditions', type: () => PromotionConditionsDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => PromotionConditionsDto)
  conditions?: PromotionConditionsDto;

  @ApiPropertyOptional({ description: 'Active status', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Update promotion request
 * All fields optional except ID
 */
export class UpdatePromotionRequest {
  @ApiProperty({ description: 'Promotion ID to update' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Updated name', maxLength: 100 })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @ApiPropertyOptional({ description: 'Updated code', maxLength: 50 })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  code?: string;

  @ApiPropertyOptional({ description: 'Updated description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Updated start date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'Updated end date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ description: 'Updated discount type', enum: ['PERCENTAGE', 'FIXED'] })
  @IsOptional()
  @IsEnum(['PERCENTAGE', 'FIXED'])
  discountType?: 'PERCENTAGE' | 'FIXED';

  @ApiPropertyOptional({ description: 'Updated discount value', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  discountValue?: number;

  @ApiPropertyOptional({ description: 'Updated applicable room types', type: [String] })
  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  applicableRoomTypes?: string[];

  @ApiPropertyOptional({ description: 'Updated applicable channels', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  applicableChannels?: string[];

  @ApiPropertyOptional({ description: 'Updated minimum stay', minimum: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  minimumStay?: number;

  @ApiPropertyOptional({ description: 'Updated maximum stay', minimum: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maximumStay?: number;

  @ApiPropertyOptional({ description: 'Updated minimum advance booking days', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minimumAdvanceBookingDays?: number;

  @ApiPropertyOptional({ description: 'Updated maximum advance booking days', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maximumAdvanceBookingDays?: number;

  @ApiPropertyOptional({ description: 'Updated blackout dates (YYYY-MM-DD)', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  blackoutDates?: string[];

  @ApiPropertyOptional({ description: 'Updated usage limit', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  usageLimit?: number;

  @ApiPropertyOptional({ description: 'Updated conditions', type: () => PromotionConditionsDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => PromotionConditionsDto)
  conditions?: PromotionConditionsDto;

  @ApiPropertyOptional({ description: 'Updated active status' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Delete promotion request
 */
export class DeletePromotionRequest {
  @ApiProperty({ description: 'Promotion ID to delete' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;
}

/**
 * Validate promotion code request
 */
export class ValidatePromotionRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Promotion code to validate' })
  @IsString()
  promotionCode: string;

  @ApiProperty({ description: 'Room type ID for validation' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD)' })
  @IsDateString()
  checkIn: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD)' })
  @IsDateString()
  checkOut: string;

  @ApiProperty({ description: 'Booking amount to apply promotion to' })
  @IsNumber()
  @Min(0)
  bookingAmount: number;
}

/**
 * Validate promotion response
 */
export class ValidatePromotionResponse {
  @ApiProperty({ description: 'Whether promotion is valid' })
  isValid: boolean;

  @ApiPropertyOptional({ description: 'Promotion ID if valid' })
  promotionId?: string;

  @ApiProperty({ description: 'Promotion code' })
  promoCode: string;

  @ApiPropertyOptional({ description: 'Discount type if valid', enum: ['PERCENTAGE', 'FIXED'] })
  discountType?: 'PERCENTAGE' | 'FIXED';

  @ApiPropertyOptional({ description: 'Discount value if valid' })
  discountValue?: number;

  @ApiPropertyOptional({ description: 'Message explaining validation result' })
  message?: string;

  @ApiPropertyOptional({ description: 'Applicable discount amount' })
  applicableAmount?: number;

  @ApiPropertyOptional({ description: 'Final amount after discount' })
  finalAmount?: number;
}

/**
 * Delete promotion response
 */
export class DeletePromotionResponse {
  @ApiProperty({ description: 'Whether deletion was successful' })
  success: boolean;

  @ApiPropertyOptional({ description: 'Message about deletion' })
  message?: string;
}

// ============================================================================
// NATS Response Type Definitions
// ============================================================================

export type GetPromotionsNatsResponse = NatsResponse<PromotionsPaginatedResponseDto>;
export type GetPromotionByIdNatsResponse = NatsResponse<PromotionDto>;
export type CreatePromotionNatsResponse = NatsResponse<PromotionDto>;
export type UpdatePromotionNatsResponse = NatsResponse<PromotionDto>;
export type DeletePromotionNatsResponse = NatsResponse<DeletePromotionResponse>;
export type ValidatePromotionNatsResponse = NatsResponse<ValidatePromotionResponse>;

// ============================================================================
// Legacy exports for backward compatibility
// ============================================================================
export type GetPromotionsRequest_Legacy = GetPromotionsRequest;
export type GetPromotionsResponse = PromotionsPaginatedResponseDto;
