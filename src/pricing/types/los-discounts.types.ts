/**
 * Length of Stay (LOS) Discounts Types
 *
 * Shared types for LOS discount patterns.
 * Handles discounts based on number of nights booked.
 */

/**
 * Length of stay discount configuration
 */
import { ApiProperty } from '@nestjs/swagger';

export class LosDiscount {
  @ApiProperty({ description: 'Discount ID', example: '550e8400-e29b-41d4-a716-446655440097' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room Type ID (null for hotel-wide discount)', required: false })
  roomTypeId?: string;

  @ApiProperty({ description: 'Minimum nights to qualify', example: 3, minimum: 1 })
  minNights: number;

  @ApiProperty({ description: 'Maximum nights (optional)', example: 7, required: false, minimum: 1 })
  maxNights?: number;

  @ApiProperty({ description: 'Discount type', example: 'PERCENTAGE', enum: ['PERCENTAGE', 'FIXED'] })
  discountType: 'PERCENTAGE' | 'FIXED';

  @ApiProperty({ description: 'Discount value', example: 10, minimum: 0 })
  discountValue: number;

  @ApiProperty({ description: 'Description', example: 'Stay 3+ nights, get 10% off', required: false })
  description?: string;

  @ApiProperty({ description: 'Currency code', example: 'VND' })
  currency: string;

  @ApiProperty({ description: 'Valid from date', example: '2025-01-01', required: false })
  validFrom?: string;

  @ApiProperty({ description: 'Valid to date', example: '2025-12-31', required: false })
  validTo?: string;

  @ApiProperty({ description: 'Is active', example: true })
  isActive: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;
}

/**
 * Discount breakdown for a booking
 */
export interface DiscountBreakdown {
  originalTotal: number;
  discountType: 'PERCENTAGE' | 'FIXED';
  discountValue: number;
  discountAmount: number;
  finalTotal: number;
  nightsQualified: number;
  currency: string;
}
