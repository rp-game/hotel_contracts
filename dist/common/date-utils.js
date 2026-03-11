"use strict";
/**
 * Timezone-aware date formatting utilities.
 *
 * Uses Intl.DateTimeFormat (built-in, zero dependencies) with formatToParts()
 * for spec-guaranteed YYYY-MM-DD output regardless of locale.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateInTimezone = formatDateInTimezone;
exports.todayInTimezone = todayInTimezone;
exports.addDaysInTimezone = addDaysInTimezone;
exports.startOfMonthInTimezone = startOfMonthInTimezone;
exports.startOfYearInTimezone = startOfYearInTimezone;
exports.startOfQuarterInTimezone = startOfQuarterInTimezone;
exports.startOfWeekInTimezone = startOfWeekInTimezone;
/**
 * Format a Date to YYYY-MM-DD in a specific timezone.
 */
function formatDateInTimezone(date = new Date(), timezone = 'Asia/Ho_Chi_Minh') {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).formatToParts(date);
    const y = parts.find((p) => p.type === 'year').value;
    const m = parts.find((p) => p.type === 'month').value;
    const d = parts.find((p) => p.type === 'day').value;
    return `${y}-${m}-${d}`;
}
/**
 * Get today's date as YYYY-MM-DD in a specific timezone.
 */
function todayInTimezone(tz = 'Asia/Ho_Chi_Minh') {
    return formatDateInTimezone(new Date(), tz);
}
/**
 * Add (or subtract) days from a base date and return YYYY-MM-DD in a specific timezone.
 */
function addDaysInTimezone(days, tz = 'Asia/Ho_Chi_Minh', base = new Date()) {
    const d = new Date(base);
    d.setDate(d.getDate() + days);
    return formatDateInTimezone(d, tz);
}
/**
 * Get the first day of the current month as YYYY-MM-DD in a specific timezone.
 */
function startOfMonthInTimezone(tz = 'Asia/Ho_Chi_Minh') {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: tz,
        year: 'numeric',
        month: '2-digit',
    }).formatToParts(new Date());
    return `${parts.find((p) => p.type === 'year').value}-${parts.find((p) => p.type === 'month').value}-01`;
}
/**
 * Get the first day of the current year as YYYY-MM-DD in a specific timezone.
 */
function startOfYearInTimezone(tz = 'Asia/Ho_Chi_Minh') {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: tz,
        year: 'numeric',
    }).formatToParts(new Date());
    return `${parts.find((p) => p.type === 'year').value}-01-01`;
}
/**
 * Get the first day of the current quarter as YYYY-MM-DD in a specific timezone.
 */
function startOfQuarterInTimezone(tz = 'Asia/Ho_Chi_Minh') {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: tz,
        year: 'numeric',
        month: '2-digit',
    }).formatToParts(new Date());
    const year = parts.find((p) => p.type === 'year').value;
    const month = parseInt(parts.find((p) => p.type === 'month').value);
    const quarterStart = String(Math.floor((month - 1) / 3) * 3 + 1).padStart(2, '0');
    return `${year}-${quarterStart}-01`;
}
/**
 * Get the Monday of the current week as YYYY-MM-DD in a specific timezone.
 */
function startOfWeekInTimezone(tz = 'Asia/Ho_Chi_Minh', base = new Date()) {
    // Get the day-of-week in the target timezone
    const tzDateStr = base.toLocaleString('en-US', { timeZone: tz });
    const tzDay = new Date(tzDateStr).getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
    const diff = tzDay === 0 ? 6 : tzDay - 1; // Monday = 0 offset
    const d = new Date(base);
    d.setDate(d.getDate() - diff);
    return formatDateInTimezone(d, tz);
}
//# sourceMappingURL=date-utils.js.map