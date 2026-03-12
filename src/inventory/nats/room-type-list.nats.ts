/**
 * Room Type List & Detail NATS Contracts
 *
 * Patterns:
 *   inventory.room-types.findAll — list all active room types (no availability check)
 *   inventory.room-types.findOne — get single room type detail
 *
 * Price = basePrice with rate plan adjustment applied inline (no pricing-service call).
 *
 * Handler: inventory-service
 * Called by: api-gateway, booking UI
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsOptional, IsInt, Min } from 'class-validator';
import { NatsResponse } from '../../common';
export { CancellationPolicySummaryDto } from './room-type-search.nats';

// ============================================================================
// REQUEST
// ============================================================================

export class ListRoomTypesRequest {
  @ApiProperty({ description: 'Tenant ID', example: 'uuid' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: 'uuid' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Page number (1-based)', example: 1, default: 1 })
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', example: 20, default: 20 })
  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number;
}

export class GetRoomTypeRequest {
  @ApiProperty({ description: 'Room type ID', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: 'uuid' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: 'uuid' })
  @IsUUID()
  hotelId: string;
}

// ============================================================================
// RESPONSE — nested types
// ============================================================================

export class RatePlanSummaryDto {
  @ApiProperty({ description: 'Rate plan ID', example: 'uuid' })
  ratePlanId: string;

  @ApiProperty({ description: 'Rate plan name', example: 'Best Available Rate' })
  ratePlanName: string;

  @ApiProperty({ description: 'Plan type', example: 'BASE', enum: ['BASE', 'DERIVED'] })
  planType: string;

  @ApiPropertyOptional({
    description: 'Derivation type for DERIVED plans',
    example: 'PERCENTAGE',
    enum: ['PERCENTAGE', 'AMOUNT'],
  })
  derivationType?: string;

  @ApiPropertyOptional({
    description: 'Derivation value (percentage or fixed amount)',
    example: 10,
  })
  derivationValue?: number;

  @ApiProperty({
    description: 'Meal plan included',
    example: 'BREAKFAST',
    nullable: true,
  })
  mealPlan: string | null;

  @ApiProperty({
    description: 'Payment type',
    example: 'PAY_NOW',
    nullable: true,
  })
  paymentType: string | null;

  @ApiProperty({
    description: 'Cancellation policy',
    nullable: true,
  })
  cancellationPolicy: {
    type: string;
    deadlineHours?: number;
    penaltyPercent?: number;
    description?: string;
  } | null;

  @ApiProperty({
    description: 'Price per unit — basePrice with rate plan adjustment applied',
    example: 1100000,
  })
  pricePerUnit: number;
}

export class RoomTypeListItem {
  @ApiProperty({ description: 'Room type ID', example: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Room type name', example: 'Deluxe Room' })
  name: string;

  @ApiPropertyOptional({ description: 'Room type description', nullable: true })
  description: string | null;

  @ApiProperty({ description: 'Maximum guest capacity', example: 2 })
  capacity: number;

  @ApiProperty({ description: 'Number of beds', example: 1 })
  numberOfBeds: number;

  @ApiProperty({ description: 'Base price from room type entity', example: 1000000 })
  basePrice: number;

  @ApiProperty({
    description: 'List of amenities',
    type: [String],
    example: ['WiFi', 'Air Conditioning'],
  })
  amenities: string[];

  @ApiProperty({
    description: 'Room type images (URLs)',
    type: [String],
  })
  images: string[];

  @ApiProperty({
    description: 'Rate plans with adjusted price',
    type: [RatePlanSummaryDto],
  })
  ratePlans: RatePlanSummaryDto[];
}

export class ListRoomTypesResponse {
  @ApiProperty({
    description: 'List of active room types with rate plans',
    type: [RoomTypeListItem],
  })
  roomTypes: RoomTypeListItem[];

  @ApiProperty({ description: 'Total number of room types', example: 5 })
  total: number;

  @ApiProperty({ description: 'Current page (1-based)', example: 1 })
  page: number;

  @ApiProperty({ description: 'Items per page', example: 20 })
  limit: number;
}

export type GetRoomTypeResponse = RoomTypeListItem;

export type ListRoomTypesNatsResponse = NatsResponse<ListRoomTypesResponse>;
export type GetRoomTypeNatsResponse = NatsResponse<GetRoomTypeResponse>;
