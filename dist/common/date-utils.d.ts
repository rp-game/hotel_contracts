/**
 * Timezone-aware date formatting utilities.
 *
 * Uses Intl.DateTimeFormat (built-in, zero dependencies) with formatToParts()
 * for spec-guaranteed YYYY-MM-DD output regardless of locale.
 */
/**
 * Format a Date to YYYY-MM-DD in a specific timezone.
 */
export declare function formatDateInTimezone(date?: Date, timezone?: string): string;
/**
 * Get today's date as YYYY-MM-DD in a specific timezone.
 */
export declare function todayInTimezone(tz?: string): string;
/**
 * Add (or subtract) days from a base date and return YYYY-MM-DD in a specific timezone.
 */
export declare function addDaysInTimezone(days: number, tz?: string, base?: Date): string;
/**
 * Get the first day of the current month as YYYY-MM-DD in a specific timezone.
 */
export declare function startOfMonthInTimezone(tz?: string): string;
/**
 * Get the first day of the current year as YYYY-MM-DD in a specific timezone.
 */
export declare function startOfYearInTimezone(tz?: string): string;
/**
 * Get the first day of the current quarter as YYYY-MM-DD in a specific timezone.
 */
export declare function startOfQuarterInTimezone(tz?: string): string;
/**
 * Get the Monday of the current week as YYYY-MM-DD in a specific timezone.
 */
export declare function startOfWeekInTimezone(tz?: string, base?: Date): string;
//# sourceMappingURL=date-utils.d.ts.map