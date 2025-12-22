/**
 * Extra Person Charges Types
 *
 * Shared types for extra person pricing patterns.
 * Handles additional charges when occupancy exceeds standard capacity.
 */

/**
 * Extra person charge configuration
 */
export interface ExtraPersonCharge {
  id: string;
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  standardOccupancy: number;
  maxOccupancy: number;
  extraAdultCharge: number;
  extraChildCharge?: number;
  childMaxAge: number;
  currency: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Breakdown of charges for a specific booking
 */
export interface ChargeBreakdown {
  baseRate: number;
  extraAdults: number;
  extraChildren: number;
  extraAdultCharge: number;
  extraChildCharge: number;
  totalExtraCharges: number;
  totalRate: number;
  currency: string;
}
