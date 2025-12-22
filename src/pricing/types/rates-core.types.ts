/**
 * Rates Core Types
 *
 * Shared types for core rate management patterns.
 * Handles base rates, restrictions, and dynamic calculations.
 */

/**
 * Base rate entity
 */
export interface Rate {
  id: string;
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  ratePlanId?: string;
  basePrice: number;
  startDate: string;
  endDate: string;
  currency: string;
  status: RateStatus;
  lengthOfStayRules?: RateRestriction;
  extraAdultCharge?: number;
  extraChildCharge?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Rate status
 */
export type RateStatus = 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';

/**
 * Rate restrictions (min stay, closed to arrival, etc.)
 */
export interface RateRestriction {
  minStay?: number;
  maxStay?: number;
  closedToArrival?: boolean;
  closedToDeparture?: boolean;
  stopSell?: boolean;
}

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
 * Dynamic rate calculation result
 */
export interface DynamicRateCalculation {
  roomTypeId: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  baseRate: number;
  occupancyAdjustment: number;
  seasonalAdjustment: number;
  losDiscount: number;
  promotionDiscount: number;
  extraPersonCharges: number;
  mealPlanCharge: number;
  totalBeforeTax: number;
  taxes: TaxBreakdown[];
  totalAfterTax: number;
  currency: string;
  dailyRates: DailyRateBreakdown[];
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
