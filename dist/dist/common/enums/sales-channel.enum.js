"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesChannel = void 0;
/**
 * Sales Channel (booking source) — kênh bán mà một booking đến từ đó.
 *
 * Single source of truth dùng chung nhiều domain (booking, pricing…).
 * `BookingSource` là alias re-export của enum này để giữ tương thích.
 */
var SalesChannel;
(function (SalesChannel) {
    SalesChannel["DIRECT"] = "DIRECT";
    SalesChannel["WEBSITE"] = "WEBSITE";
    SalesChannel["PHONE"] = "PHONE";
    SalesChannel["EMAIL"] = "EMAIL";
    SalesChannel["WALK_IN"] = "WALK_IN";
    SalesChannel["TRAVEL_AGENT"] = "TRAVEL_AGENT";
    SalesChannel["CORPORATE"] = "CORPORATE";
    SalesChannel["OTA"] = "OTA";
})(SalesChannel || (exports.SalesChannel = SalesChannel = {}));
//# sourceMappingURL=sales-channel.enum.js.map