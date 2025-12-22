/**
 * Room Type Base Rates Types
 *
 * Shared types for room type base rate patterns.
 * Foundation layer - simple base pricing per room type.
 */

/**
 * Room type base rate entity
 */
export interface RoomTypeBaseRate {
  id: string;
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  baseRate: number;
  weekdayRate?: number;
  weekendRate?: number;
  hourlyRate?: number;
  useWeekdayWeekend: boolean;
  currency: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Rate by day of week
 */
export interface RateByDay {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

/**
 * Bulk upsert result
 */
export interface BulkUpsertBaseRatesResult {
  upserted: number;
  failed: number;
  errors: string[];
  rates: RoomTypeBaseRate[];
}
