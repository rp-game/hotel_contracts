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

  @ApiPropertyOptional({ description: 'Total tax amount (service charge + VAT)' })
  taxes?: number;

  @ApiPropertyOptional({ description: 'Tax breakdown by type' })
  taxBreakdown?: {
    serviceCharge: { rate: number; amount: number };
    vat: { rate: number; amount: number };
  };

  @ApiPropertyOptional({ description: 'Gross amount (net + all taxes)' })
  grossAmount?: number;
}

export class RatePlanSnapshotDto {
  @ApiProperty({ description: 'Rate plan ID', format: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Rate plan name' })
  name: string;

  @ApiPropertyOptional({ description: 'Meal plan included', type: String, nullable: true })
  mealPlan?: string | null;

  @ApiPropertyOptional({ description: 'Payment type (e.g. PREPAID, PAY_AT_HOTEL)', type: String, nullable: true })
  paymentType?: string | null;

  @ApiPropertyOptional({ description: 'Cancellation policy', type: String, nullable: true })
  cancellationPolicy?: string | null;

  @ApiPropertyOptional({ description: 'Adjustment type (PERCENTAGE or AMOUNT)', type: String, nullable: true })
  adjustmentType?: string | null;

  @ApiPropertyOptional({ description: 'Adjustment value (e.g. -10 for -10%)', type: Number, nullable: true })
  adjustmentValue?: number | null;
}

export class RatePlanAdjustmentDto {
  @ApiProperty({ description: 'Adjustment type', enum: ['PERCENTAGE', 'AMOUNT'] })
  type: 'PERCENTAGE' | 'AMOUNT';

  @ApiProperty({ description: 'Adjustment value (e.g. -10 for -10% discount)', example: -10 })
  value: number;

  @ApiProperty({ description: 'Total before rate plan adjustment', example: 3600000 })
  originalTotal: number;

  @ApiProperty({ description: 'Total after rate plan adjustment', example: 3240000 })
  adjustedTotal: number;
}

export class RoomPricingEntryDto {
  @ApiProperty({ description: 'Room type ID', format: 'uuid' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name' })
  roomTypeName: string;

  @ApiProperty({ description: 'Base rate per unit in VND', example: 1200000 })
  baseRate: number;

  @ApiProperty({ description: 'Calculated rate after adjustments', example: 1080000 })
  calculatedRate: number;

  @ApiProperty({ description: 'Number of rooms of this type', example: 1 })
  quantity: number;

  @ApiPropertyOptional({ description: 'Detailed breakdown', type: PricingBreakdownDetailDto })
  breakdown?: PricingBreakdownDetailDto;
}

export class PricingBreakdownDto {
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
    description: 'Final calculated price in VND',
    example: 2736000,
  })
  finalPrice: number;

  @ApiProperty({
    description: 'Currency code',
    example: 'VND',
  })
  currency: string;

  @ApiProperty({
    description: 'Timestamp when price was calculated',
    example: '2026-02-24T10:30:00Z',
  })
  calculatedAt: Date;

  @ApiProperty({
    description: 'Per-room pricing breakdown',
    type: [RoomPricingEntryDto],
  })
  rooms: RoomPricingEntryDto[];

  @ApiPropertyOptional({
    description: 'Snapshot of rate plan applied at booking time',
    type: RatePlanSnapshotDto,
  })
  ratePlanSnapshot?: RatePlanSnapshotDto;

  @ApiPropertyOptional({
    description: 'Rate plan price adjustment details',
    type: RatePlanAdjustmentDto,
  })
  ratePlanAdjustment?: RatePlanAdjustmentDto;
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
