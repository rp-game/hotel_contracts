/**
 * Seasonal Adjustments Types
 *
 * Shared types for seasonal pricing adjustment patterns.
 * Handles rate adjustments for different seasons/periods.
 */

/**
 * Seasonal adjustment entity
 */
export interface SeasonalAdjustment {
  id: string;
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  seasonName: string;
  startDate: string;
  endDate: string;
  adjustmentType: 'PERCENTAGE' | 'FIXED';
  adjustmentValue: number;
  description?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Seasonal period definition
 */
export interface SeasonalPeriod {
  name: string;
  startDate: string;
  endDate: string;
  adjustmentType: 'PERCENTAGE' | 'FIXED';
  adjustmentValue: number;
  isActive: boolean;
}

/**
 * Common seasonal periods
 */
export const CommonSeasonalPeriods: Record<string, Omit<SeasonalPeriod, 'isActive'>> = {
  LUNAR_NEW_YEAR: {
    name: 'Lunar New Year',
    startDate: '01-25',
    endDate: '02-10',
    adjustmentType: 'PERCENTAGE',
    adjustmentValue: 50,
  },
  SUMMER_HIGH: {
    name: 'Summer High Season',
    startDate: '06-01',
    endDate: '08-31',
    adjustmentType: 'PERCENTAGE',
    adjustmentValue: 30,
  },
  CHRISTMAS_NEW_YEAR: {
    name: 'Christmas & New Year',
    startDate: '12-20',
    endDate: '01-05',
    adjustmentType: 'PERCENTAGE',
    adjustmentValue: 40,
  },
  LOW_SEASON: {
    name: 'Low Season',
    startDate: '09-01',
    endDate: '11-30',
    adjustmentType: 'PERCENTAGE',
    adjustmentValue: -20,
  },
};
