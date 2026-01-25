"use strict";
/**
 * Payment Domain NATS Message Contracts
 *
 * These interfaces define the request/response shapes for inter-service
 * communication via NATS messaging pattern.
 *
 * Pattern: *-payment.*, gateway.*
 * Handler: payment-service
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
__exportStar(require("./offline-payment.nats"), exports);
__exportStar(require("./gateway-inheritance.nats"), exports);
__exportStar(require("./onepay.nats"), exports);
__exportStar(require("./invoice.nats"), exports);
__exportStar(require("./transaction.nats"), exports);
__exportStar(require("./settings.nats"), exports);
__exportStar(require("./stats.nats"), exports);
//# sourceMappingURL=index.js.map