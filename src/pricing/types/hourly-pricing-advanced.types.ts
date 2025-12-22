/**
 * Hourly Pricing Advanced Types
 *
 * Shared types for advanced hourly pricing patterns.
 * Includes tiered blocks, peak periods, and rate calculations.
 */

/**
 * Hourly pricing rule with tiered blocks
 */
export interface HourlyPricingRule {
  id: string;
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  hourlyBlocks: HourlyBlock[];
  minHours: number;
  maxHours: number;
  pricingStrategy: 'TIERED' | 'FLAT' | 'HYBRID';
  fallbackHourlyRate?: number;
  enableDynamicAdjustments: boolean;
  currency: string;
  validFrom?: string;
  validTo?: string;
  isActive: boolean;
  priority: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
  peakPeriods?: PeakPeriod[];
}

/**
 * Tiered hour block for progressive pricing
 */
export interface HourlyBlock {
  blockName: string;
  fromHour: number;
  toHour: number;
  ratePerHour: number;
  isFlat?: boolean;
  flatAmount?: number;
}

/**
 * Peak/off-peak period adjustment
 */
export interface PeakPeriod {
  id: string;
  tenantId: string;
  hotelId: string;
  hourlyPricingRuleId: string;
  periodName: string;
  startTime: string;
  endTime: string;
  daysOfWeek: number[];
  adjustmentType: 'PERCENTAGE' | 'FIXED';
  multiplier: number;
  fixedAdjustment?: number;
  isActive: boolean;
  priority: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * Hourly rate calculation result with breakdown
 */
export interface HourlyRateCalculation {
  roomTypeId: string;
  checkIn: string;
  startTime: string;
  endTime: string;
  totalHours: number;
  blocks: HourlyBlockCalculation[];
  baseTotal: number;
  peakAdjustments: PeakAdjustmentCalculation[];
  occupancyAdjustment: number;
  seasonalAdjustment: number;
  promotionDiscount: number;
  finalTotal: number;
  currency: string;
}

/**
 * Calculation breakdown for a single block
 */
export interface HourlyBlockCalculation {
  blockName: string;
  hours: number;
  ratePerHour: number;
  subtotal: number;
  isFlat: boolean;
}

/**
 * Peak period adjustment in calculation
 */
export interface PeakAdjustmentCalculation {
  periodName: string;
  hours: number;
  adjustmentType: 'PERCENTAGE' | 'FIXED';
  adjustmentValue: number;
  amount: number;
}
