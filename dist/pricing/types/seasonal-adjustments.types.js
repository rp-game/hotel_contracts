"use strict";
/**
 * Seasonal Adjustments Types
 *
 * Shared types for seasonal pricing adjustment patterns.
 * Handles rate adjustments for different seasons/periods.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonSeasonalPeriods = void 0;
/**
 * Common seasonal periods
 */
exports.CommonSeasonalPeriods = {
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
//# sourceMappingURL=seasonal-adjustments.types.js.map