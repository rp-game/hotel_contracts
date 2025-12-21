"use strict";
/**
 * Booking Domain Contracts
 *
 * Includes:
 * - NATS message contracts (booking.* patterns)
 * - REST API DTOs
 * - Domain types and enums
 * - Inter-service communication types
 *
 * Import examples:
 * ```typescript
 * import { CreateBookingRequest } from '@hotel/contracts/booking/nats';
 * import { BookingStatus } from '@hotel/contracts/booking';
 * import { CustomerResponse } from '@hotel/contracts/booking/inter-service';
 * import * as BookingContracts from '@hotel/contracts/booking';
 * ```
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
__exportStar(require("./nats"), exports);
__exportStar(require("./rest"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./enums"), exports);
__exportStar(require("./inter-service"), exports);
//# sourceMappingURL=index.js.map