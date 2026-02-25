import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PricingBreakdownDetailDto {
  @ApiProperty({
    description: 'Base amount (baseRate × nights)',
    example: 3600000,
  })
  baseAmount: number;

  @ApiProperty({
    description: 'Seasonal adjustment amount in VND',
    example: 0,
  })
  seasonalAdjustment: number;

  @ApiProperty({
    description: 'Seasonal adjustment percentage',
    example: 0,
  })
  seasonalAdjustmentPercent: number;

  @ApiProperty({
    description: 'Advance booking discount amount in VND',
    example: 720000,
  })
  advanceBookingDiscount: number;

  @ApiProperty({
    description: 'Advance booking discount percentage',
    example: 0.2,
  })
  advanceBookingDiscountPercent: number;

  @ApiProperty({
    description: 'Length of stay discount amount in VND',
    example: 180000,
  })
  lengthOfStayDiscount: number;

  @ApiProperty({
    description: 'Length of stay discount percentage',
    example: 0.05,
  })
  lengthOfStayDiscountPercent: number;

  @ApiPropertyOptional({
    description: 'Promotion discount amount (optional)',
    example: 0,
  })
  promotionDiscount?: number;

  @ApiPropertyOptional({
    description: 'Promotion discount percentage (optional)',
    example: 0,
  })
  promotionDiscountPercent?: number;

  @ApiPropertyOptional({
    description: 'Occupancy adjustment (optional)',
    example: 0,
  })
  occupancyAdjustment?: number;

  @ApiPropertyOptional({
    description: 'Yield adjustment (optional)',
    example: 0,
  })
  yieldAdjustment?: number;
}

export class PricingBreakdownDto {
  @ApiProperty({
    description: 'Base rate per night in VND',
    example: 1200000,
  })
  baseRate: number;

  @ApiProperty({
    description: 'Number of nights',
    example: 3,
  })
  nights: number;

  @ApiProperty({
    description: 'List of applied pricing rules',
    example: ['SEASONAL', 'ADVANCE_BOOKING', 'LOS'],
  })
  appliedRules: string[];

  @ApiProperty({
    description: 'Detailed breakdown of each pricing component',
    type: PricingBreakdownDetailDto,
  })
  breakdown: PricingBreakdownDetailDto;

  @ApiProperty({
    description: 'Final calculated price in VND',
    example: 2736000,
  })
  finalPrice: number;

  @ApiProperty({
    description: 'Timestamp when price was calculated',
    example: '2026-02-24T10:30:00Z',
  })
  calculatedAt: Date;
}

export class BookingPricingBreakdownResponseDto {
  @ApiProperty({
    description: 'Booking ID',
  })
  bookingId: string;

  @ApiProperty({
    description: 'Room type ID',
  })
  roomTypeId: string;

  @ApiProperty({
    description: 'Check-in date',
  })
  checkInDate: string;

  @ApiProperty({
    description: 'Check-out date',
  })
  checkOutDate: string;

  @ApiProperty({
    description: 'Number of nights',
  })
  nights: number;

  @ApiProperty({
    description: 'Rules applied and their effects',
    type: 'object',
    additionalProperties: true,
  })
  rules: {
    seasonal: {
      applied: boolean;
      adjustmentAmount: number;
      adjustmentPercent: number;
    };
    advanceBooking: {
      applied: boolean;
      daysAdvance: number;
      discountAmount: number;
      discountPercent: number;
    };
    lengthOfStay: {
      applied: boolean;
      nights: number;
      discountAmount: number;
      discountPercent: number;
    };
  };

  @ApiProperty({
    description: 'Step-by-step price calculation',
    type: 'object',
    additionalProperties: true,
  })
  calculation: {
    step1_baseRate: number;
    step2_afterSeasonal: number;
    step3_afterAdvance: number;
    step4_afterLOS: number;
    step5_total: number;
  };

  @ApiProperty({
    description: 'Final calculated price',
  })
  finalPrice: number;

  @ApiProperty({
    description: 'When the price was calculated',
  })
  priceValidatedAt: Date;
}
