"use strict";
/**
 * Booking Domain - NATS Message Contracts
 *
 * These interfaces define the request/response shapes for inter-service
 * communication via NATS messaging pattern.
 *
 * Pattern: booking.*
 * Handler: booking-service
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./create-booking.nats"), exports);
__exportStar(require("./find-bookings.nats"), exports);
__exportStar(require("./find-one-booking.nats"), exports);
__exportStar(require("./unassigned-bookings.nats"), exports);
__exportStar(require("./bookings-timeline.nats"), exports);
__exportStar(require("./check-in.nats"), exports);
__exportStar(require("./mobile-checkout.nats"), exports);
__exportStar(require("./timeline-action.nats"), exports);
__exportStar(require("./analytics.nats"), exports);
__exportStar(require("./calendar-data.nats"), exports);
__exportStar(require("./update-booking.nats"), exports);
__exportStar(require("./move-booking.nats"), exports);
// Amenity Request NATS contracts
__exportStar(require("./amenity-requests.nats"), exports);
// Conflict-related NATS contracts
__exportStar(require("./get-conflicts.nats"), exports);
__exportStar(require("./detect-conflicts.nats"), exports);
__exportStar(require("./get-conflict-stats.nats"), exports);
__exportStar(require("./get-pending-conflicts.nats"), exports);
__exportStar(require("./get-critical-conflicts.nats"), exports);
__exportStar(require("./get-conflict-by-id.nats"), exports);
__exportStar(require("./create-conflict.nats"), exports);
__exportStar(require("./update-conflict.nats"), exports);
__exportStar(require("./delete-conflict.nats"), exports);
//# sourceMappingURL=index.js.map