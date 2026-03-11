"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotelTimezoneCache = exports.HotelTimezoneCache = void 0;
const common_1 = require("@nestjs/common");
const DEFAULT_TIMEZONE = 'Asia/Ho_Chi_Minh';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour safety TTL
/**
 * In-memory cache for hotel timezones.
 * Each service creates one instance. Populated via NATS on first access.
 * Invalidated via NATS EventPattern('hotel.timezone.changed').
 */
class HotelTimezoneCache {
    cache = new Map();
    logger = new common_1.Logger(HotelTimezoneCache.name);
    fetchFn = null;
    /**
     * Set the fetch function that retrieves timezone from NATS/DB.
     * Must be called once during service init.
     */
    setFetchFn(fn) {
        this.fetchFn = fn;
    }
    /**
     * Get timezone for a hotel. Returns cached value or fetches via NATS.
     */
    async getTimezone(hotelId) {
        const entry = this.cache.get(hotelId);
        if (entry && Date.now() - entry.cachedAt < CACHE_TTL_MS) {
            return entry.timezone;
        }
        if (this.fetchFn) {
            try {
                const tz = await this.fetchFn(hotelId);
                if (tz) {
                    this.cache.set(hotelId, { timezone: tz, cachedAt: Date.now() });
                    return tz;
                }
            }
            catch (error) {
                this.logger.warn(`Failed to fetch timezone for hotel ${hotelId}: ${error.message}`);
            }
        }
        // Fallback to cached (even if expired) or default
        return entry?.timezone || DEFAULT_TIMEZONE;
    }
    /**
     * Invalidate cache for a specific hotel.
     * Called when receiving 'hotel.timezone.changed' NATS event.
     */
    invalidate(hotelId) {
        this.cache.delete(hotelId);
        this.logger.log(`Invalidated timezone cache for hotel ${hotelId}`);
    }
    /** Invalidate all entries */
    invalidateAll() {
        this.cache.clear();
    }
}
exports.HotelTimezoneCache = HotelTimezoneCache;
/** Singleton instance - shared within each service process */
exports.hotelTimezoneCache = new HotelTimezoneCache();
//# sourceMappingURL=hotel-timezone-cache.js.map