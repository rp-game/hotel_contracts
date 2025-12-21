/**
 * Pricing Domain Types
 */

import { RatePlanType, RatePlanStatus } from '../enums';

/**
 * Rate Plan entity
 */
export interface RatePlan {
  id: string;
  tenantId: string;
  hotelId: string;
  name: string;
  description?: string;
  type: RatePlanType;
  status: RatePlanStatus;
  basePrice: number;
  currency: string;
  roomTypeId: string;
  roomTypeName: string;
  validFrom: string;
  validTo: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Hourly pricing tier
 */
export interface HourlyPricingTier {
  id: string;
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  name: string;
  pricePerHour: number;
  currency: string;
  checkInTime: string; // "HH:mm" format
  checkOutTime: string; // "HH:mm" format
  maxStayHours: number;
  minStayHours: number;
  status: RatePlanStatus;
  validFrom: string;
  validTo: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Date-based rate definition
 */
export interface DateRate {
  id: string;
  tenantId: string;
  hotelId: string;
  ratePlanId: string;
  roomTypeId: string;
  date: string; // YYYY-MM-DD
  pricePerNight: number;
  minStay?: number;
  maxStay?: number;
  status: 'ACTIVE' | 'BLOCKED' | 'CLOSED';
  createdAt: string;
  updatedAt: string;
}

/**
 * Price modifier (discount, surcharge)
 */
export interface PriceModifier {
  id: string;
  tenantId: string;
  hotelId: string;
  name: string;
  type: 'DISCOUNT' | 'SURCHARGE';
  value: number;
  unit: 'PERCENTAGE' | 'FIXED';
  applicableTo: 'NIGHTLY' | 'HOURLY' | 'BOTH';
  validFrom: string;
  validTo: string;
  createdAt: string;
  updatedAt: string;
}
