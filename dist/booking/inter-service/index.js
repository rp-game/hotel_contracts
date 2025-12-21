"use strict";
/**
 * Inter-Service Communication Types for Booking Service
 *
 * Types used when Booking Service communicates with other services
 * (CRM, Inventory, Payment, etc.)
 *
 * Import examples:
 * ```typescript
 * import { CustomerResponse, CreateCustomerRequest } from '@hotel/contracts/booking/inter-service';
 * import { BookRoomDetailedResponse } from '@hotel/contracts/booking/inter-service';
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
__exportStar(require("./crm.types"), exports);
__exportStar(require("./inventory.types"), exports);
//# sourceMappingURL=index.js.map