/**
 * Promotions Types - Centralized Contracts
 *
 * IMPORTANT: These contracts are the SINGLE SOURCE OF TRUTH
 * - Based on database entity structure (promotion.entity.ts)
 * - Used by NATS handlers for microservices communication
 * - Used by API Gateway for REST endpoints
 * - Swagger documentation generated from @ApiProperty decorators
 *
 * @verified_structure_matches services/pricing-service/src/database/entities/promotion.entity.ts
 * @verified_date 2026-02-13
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Promotion status (computed field, not stored in entity)
 */
export type PromotionStatus = 'ACTIVE' | 'INACTIVE' | 'EXPIRED' | 'UPCOMING';

/**
 * Promotion conditions structure
 * Stored as JSONB in database
 */
export class PromotionConditionsDto {
  @ApiPropertyOptional({
    description: 'Minimum nights required for promotion to apply',
    example: 2,
    minimum: 1
  })
  minNights?: number;

  @ApiPropertyOptional({
    description: 'Minimum number of guests required',
    example: 2,
    minimum: 1
  })
  minGuests?: number;

  @ApiPropertyOptional({
    description: 'Room type IDs this promotion applies to',
    type: [String],
    example: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002']
  })
  roomTypes?: string[];

  @ApiPropertyOptional({
    description: 'Channel IDs this promotion applies to',
    type: [String],
    example: ['BOOKING_COM', 'EXPEDIA']
  })
  channels?: string[];
}

/**
 * Promotion DTO
 * Matches database entity structure exactly
 * PLUS computed 'status' field added by service layer
 */
export class PromotionDto {
  @ApiProperty({
    description: 'Promotion unique identifier',
    example: '550e8400-e29b-41d4-a716-446655440000'
  })
  id: string;

  @ApiProperty({
    description: 'Tenant ID',
    example: '550e8400-e29b-41d4-a716-446655440001'
  })
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '550e8400-e29b-41d4-a716-446655440002'
  })
  hotelId: string;

  @ApiProperty({
    description: 'Promotion name',
    example: 'Early Bird Special',
    maxLength: 100
  })
  name: string;

  @ApiProperty({
    description: 'Promotion code (unique)',
    example: 'EARLYBIRD2025',
    maxLength: 50
  })
  code: string;

  @ApiPropertyOptional({
    description: 'Promotion description',
    example: 'Book 30 days in advance and save 20%'
  })
  description?: string;

  @ApiProperty({
    description: 'Promotion start date (YYYY-MM-DD)',
    example: '2025-01-01',
    type: String
  })
  startDate: string;

  @ApiProperty({
    description: 'Promotion end date (YYYY-MM-DD)',
    example: '2025-12-31',
    type: String
  })
  endDate: string;

  @ApiProperty({
    description: 'Discount type',
    enum: ['PERCENTAGE', 'FIXED'],
    example: 'PERCENTAGE'
  })
  discountType: 'PERCENTAGE' | 'FIXED';

  @ApiProperty({
    description: 'Discount value (percentage or fixed amount)',
    example: 20,
    type: Number
  })
  discountValue: number;

  @ApiPropertyOptional({
    description: 'Room type IDs this promotion applies to (null = all room types)',
    type: [String],
    example: ['550e8400-e29b-41d4-a716-446655440003']
  })
  applicableRoomTypes?: string[];

  @ApiPropertyOptional({
    description: 'Channel IDs this promotion applies to (null = all channels)',
    type: [String],
    example: ['BOOKING_COM', 'EXPEDIA']
  })
  applicableChannels?: string[];

  @ApiPropertyOptional({
    description: 'Minimum stay requirement in nights',
    example: 2,
    minimum: 1
  })
  minimumStay?: number;

  @ApiPropertyOptional({
    description: 'Maximum stay requirement in nights',
    example: 7,
    minimum: 1
  })
  maximumStay?: number;

  @ApiPropertyOptional({
    description: 'Minimum advance booking days required',
    example: 30,
    minimum: 0
  })
  minimumAdvanceBookingDays?: number;

  @ApiPropertyOptional({
    description: 'Maximum advance booking days allowed',
    example: 365,
    minimum: 0
  })
  maximumAdvanceBookingDays?: number;

  @ApiPropertyOptional({
    description: 'Blackout dates when promotion does not apply (YYYY-MM-DD)',
    type: [String],
    example: ['2025-12-25', '2025-12-31']
  })
  blackoutDates?: string[];

  @ApiProperty({
    description: 'Maximum number of times this promotion can be used (0 = unlimited)',
    example: 100,
    minimum: 0,
    default: 0
  })
  usageLimit: number;

  @ApiProperty({
    description: 'Current usage count',
    example: 15,
    minimum: 0,
    default: 0
  })
  usageCount: number;

  @ApiPropertyOptional({
    description: 'Additional promotion conditions',
    type: () => PromotionConditionsDto
  })
  conditions?: PromotionConditionsDto;

  @ApiProperty({
    description: 'Whether promotion is active',
    example: true,
    default: true
  })
  isActive: boolean;

  @ApiProperty({
    description: 'Computed promotion status based on dates and isActive flag',
    enum: ['ACTIVE', 'INACTIVE', 'EXPIRED', 'UPCOMING'],
    example: 'ACTIVE'
  })
  status: PromotionStatus;

  @ApiProperty({
    description: 'Creation timestamp (ISO 8601)',
    example: '2025-01-01T00:00:00.000Z',
    type: String
  })
  createdAt: string;

  @ApiProperty({
    description: 'Last update timestamp (ISO 8601)',
    example: '2025-01-15T10:30:00.000Z',
    type: String
  })
  updatedAt: string;
}

/**
 * Paginated promotions response
 */
export class PromotionsPaginatedResponseDto {
  @ApiProperty({
    description: 'List of promotions',
    type: [PromotionDto]
  })
  data: PromotionDto[];

  @ApiProperty({
    description: 'Total number of promotions matching filter',
    example: 50
  })
  total: number;

  @ApiProperty({
    description: 'Current page number',
    example: 1,
    minimum: 1
  })
  page: number;

  @ApiProperty({
    description: 'Number of items per page',
    example: 10,
    minimum: 1
  })
  limit: number;

  @ApiProperty({
    description: 'Total number of pages',
    example: 5,
    minimum: 0
  })
  totalPages: number;
}

// ============================================================================
// Legacy type exports for backward compatibility
// ============================================================================
export type Promotion = PromotionDto;
export type PromotionConditions = PromotionConditionsDto;
export type PromotionsPaginatedResponse = PromotionsPaginatedResponseDto;
