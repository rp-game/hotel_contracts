import { Logger } from '@nestjs/common';

const DEFAULT_TIMEZONE = 'Asia/Ho_Chi_Minh';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour safety TTL

interface CacheEntry {
  timezone: string;
  cachedAt: number;
}

/**
 * In-memory cache for hotel timezones.
 * Each service creates one instance. Populated via NATS on first access.
 * Invalidated via NATS EventPattern('hotel.timezone.changed').
 */
export class HotelTimezoneCache {
  private readonly cache = new Map<string, CacheEntry>();
  private readonly logger = new Logger(HotelTimezoneCache.name);
  private fetchFn: ((hotelId: string) => Promise<string | null>) | null = null;

  /**
   * Set the fetch function that retrieves timezone from NATS/DB.
   * Must be called once during service init.
   */
  setFetchFn(fn: (hotelId: string) => Promise<string | null>) {
    this.fetchFn = fn;
  }

  /**
   * Get timezone for a hotel. Returns cached value or fetches via NATS.
   */
  async getTimezone(hotelId: string): Promise<string> {
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
      } catch (error) {
        this.logger.warn(
          `Failed to fetch timezone for hotel ${hotelId}: ${(error as Error).message}`,
        );
      }
    }

    // Fallback to cached (even if expired) or default
    return entry?.timezone || DEFAULT_TIMEZONE;
  }

  /**
   * Invalidate cache for a specific hotel.
   * Called when receiving 'hotel.timezone.changed' NATS event.
   */
  invalidate(hotelId: string) {
    this.cache.delete(hotelId);
    this.logger.log(`Invalidated timezone cache for hotel ${hotelId}`);
  }

  /** Invalidate all entries */
  invalidateAll() {
    this.cache.clear();
  }
}

/** Singleton instance - shared within each service process */
export const hotelTimezoneCache = new HotelTimezoneCache();
