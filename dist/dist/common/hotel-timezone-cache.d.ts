/**
 * In-memory cache for hotel timezones.
 * Each service creates one instance. Populated via NATS on first access.
 * Invalidated via NATS EventPattern('hotel.timezone.changed').
 */
export declare class HotelTimezoneCache {
    private readonly cache;
    private readonly logger;
    private fetchFn;
    /**
     * Set the fetch function that retrieves timezone from NATS/DB.
     * Must be called once during service init.
     */
    setFetchFn(fn: (hotelId: string) => Promise<string | null>): void;
    /**
     * Get timezone for a hotel. Returns cached value or fetches via NATS.
     */
    getTimezone(hotelId: string): Promise<string>;
    /**
     * Invalidate cache for a specific hotel.
     * Called when receiving 'hotel.timezone.changed' NATS event.
     */
    invalidate(hotelId: string): void;
    /** Invalidate all entries */
    invalidateAll(): void;
}
/** Singleton instance - shared within each service process */
export declare const hotelTimezoneCache: HotelTimezoneCache;
//# sourceMappingURL=hotel-timezone-cache.d.ts.map