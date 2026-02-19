/**
 * Rates Core Types
 *
 * Shared types for core rate management patterns.
 * Handles base rates, restrictions, and dynamic calculations.
 */

import { ApiProperty } from '@nestjs/swagger';

/**
 * Rate restriction (min stay, closed to arrival, etc.)
 */
export class RateRestrictionDto {
  @ApiProperty({ description: 'Minimum stay requirement', required: false })
  minStay?: number;

  @ApiProperty({ description: 'Maximum stay limit', required: false })
  maxStay?: number;

  @ApiProperty({ description: 'Closed to arrival', required: false })
  closedToArrival?: boolean;

  @ApiProperty({ description: 'Closed to departure', required: false })
  closedToDeparture?: boolean;

  @ApiProperty({ description: 'Stop sell flag', required: false })
  stopSell?: boolean;
}

/**
 * Base rate entity
 */
export class Rate {
  @ApiProperty({ description: 'Rate ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Rate plan ID', required: false })
  ratePlanId?: string;

  @ApiProperty({ description: 'Base price' })
  basePrice: number;

  @ApiProperty({ description: 'Start date' })
  startDate: string;

  @ApiProperty({ description: 'End date' })
  endDate: string;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ description: 'Rate status', enum: ['ACTIVE', 'INACTIVE', 'ARCHIVED'] })
  status: RateStatus;

  @ApiProperty({ description: 'Length of stay rules', type: RateRestrictionDto, required: false })
  lengthOfStayRules?: RateRestrictionDto;

  @ApiProperty({ description: 'Extra adult charge', required: false })
  extraAdultCharge?: number;

  @ApiProperty({ description: 'Extra child charge', required: false })
  extraChildCharge?: number;

  @ApiProperty({ description: 'Is active flag' })
  isActive: boolean;

  @ApiProperty({ description: 'Created at timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at timestamp' })
  updatedAt: string;
}

/**
 * Rate status
 */
export type RateStatus = 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';

/**
 * For backward compatibility, alias RateRestrictionDto to RateRestriction
 */
export type RateRestriction = RateRestrictionDto;

/**
 * Rate history entry
 */
export interface RateHistory {
  id: string;
  rateId: string;
  previousPrice: number;
  newPrice: number;
  changedBy: string;
  changeReason?: string;
  changedAt: string;
}

/**
 * Rate breakdown details
 */
export class RateBreakdown {
  @ApiProperty({ description: 'Base amount' })
  baseAmount: number | string;

  @ApiProperty({ description: 'Seasonal adjustment' })
  seasonalAdjustment: number;

  @ApiProperty({ description: 'Occupancy adjustment' })
  occupancyAdjustment: number;

  @ApiProperty({ description: 'Length of stay discount' })
  lengthOfStayDiscount: number;

  @ApiProperty({ description: 'Promotion discount' })
  promotionDiscount: number;

  @ApiProperty({ description: 'Yield adjustment' })
  yieldAdjustment: number;

  @ApiProperty({ description: 'Advance booking discount' })
  advanceBookingDiscount: number;

  @ApiProperty({ description: 'Last minute discount' })
  lastMinuteDiscount: number;

  @ApiProperty({ description: 'Taxes' })
  taxes: number;
}

/**
 * Dynamic rate calculation result
 */
export class DynamicRateCalculation {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Check-in date' })
  checkIn: string;

  @ApiProperty({ description: 'Check-out date' })
  checkOut: string;

  @ApiProperty({ description: 'Number of guests' })
  guests: number;

  @ApiProperty({ description: 'Number of nights (for overnight bookings)' })
  nights: number;

  @ApiProperty({ description: 'Number of units (nights for overnight, hours for hourly)' })
  units: number;

  @ApiProperty({ description: 'Base rate per night/hour' })
  baseRate: number | string;

  @ApiProperty({ description: 'Final calculated rate' })
  calculatedRate: number;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ description: 'Rate breakdown details', type: RateBreakdown })
  breakdown: RateBreakdown;

  @ApiProperty({ description: 'Adjustment details', type: [String] })
  adjustmentDetails: string[];
}

/**
 * Tax breakdown
 */
export interface TaxBreakdown {
  taxName: string;
  taxRate: number;
  taxAmount: number;
}

/**
 * Daily rate breakdown
 */
export interface DailyRateBreakdown {
  date: string;
  rate: number;
  adjustments: RateAdjustment[];
  total: number;
}

/**
 * Rate adjustment
 */
export interface RateAdjustment {
  type: 'OCCUPANCY' | 'SEASONAL' | 'LOS' | 'PROMOTION' | 'EXTRA_PERSON' | 'MEAL_PLAN';
  value: number;
  description: string;
}

/**
 * Bulk create rates result
 */
export interface BulkCreateRatesResult {
  created: number;
  updated: number;
  failed: number;
  errors: string[];
}

/**
 * Bulk update rates result
 */
export interface BulkUpdateRatesResult {
  updated: number;
  failed: number;
  errors: string[];
}
