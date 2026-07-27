/**
 * Sales Channel (booking source) — kênh bán mà một booking đến từ đó.
 *
 * Single source of truth dùng chung nhiều domain (booking, pricing…).
 * `BookingSource` là alias re-export của enum này để giữ tương thích.
 */
export declare enum SalesChannel {
    DIRECT = "DIRECT",
    WEBSITE = "WEBSITE",
    PHONE = "PHONE",
    EMAIL = "EMAIL",
    WALK_IN = "WALK_IN",
    TRAVEL_AGENT = "TRAVEL_AGENT",
    CORPORATE = "CORPORATE",
    OTA = "OTA"
}
//# sourceMappingURL=sales-channel.enum.d.ts.map