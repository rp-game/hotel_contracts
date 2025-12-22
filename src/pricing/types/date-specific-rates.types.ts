/**
 * Date-Specific Rates Types
 *
 * Shared types for date-specific pricing patterns.
 * Handles special pricing for specific dates (holidays, events, etc.)
 */

/**
 * Date-specific rate entity
 */
export interface SpecificDateRate {
  id: string;
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  date: string;
  rate: number;
  currency: string;
  notes?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Calendar view of date rates for a room type
 */
export interface SpecificDateRateCalendar {
  roomTypeId: string;
  startDate: string;
  endDate: string;
  dates: SpecificDateRateCalendarDay[];
}

/**
 * Single day in calendar view
 */
export interface SpecificDateRateCalendarDay {
  date: string;
  rate?: number;
  currency?: string;
  notes?: string;
  isActive: boolean;
  hasSpecialRate: boolean;
}

/**
 * Bulk create result
 */
export interface BulkCreateDateRatesResult {
  created: number;
  skipped: number;
  errors: string[];
}
