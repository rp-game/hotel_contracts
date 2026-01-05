"use strict";
/**
 * Payment Gateway Inheritance NATS Contracts
 *
 * NATS Patterns:
 * - gateway.findPlatform       (PLATFORM-level query)
 * - gateway.findChain          (CHAIN-level query)
 * - gateway.findHotel          (HOTEL-level query with inheritance resolution)
 * - gateway.update             (Update with level support and auto-sync)
 * - gateway.syncChainToHotels  (Sync chain config to hotel configs)
 * - gateway.applyChainToHotel  (Apply chain config to specific hotel)
 *
 * Handler: payment-service
 * Called by: api-gateway, backoffice
 *
 * Related to implementation of 3-level gateway inheritance:
 * PLATFORM → CHAIN → HOTEL
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewaySyncStatus = exports.GatewayType = exports.ConfigLevel = void 0;
// ============ ENUMS ============
/**
 * Configuration level hierarchy for payment gateways
 */
var ConfigLevel;
(function (ConfigLevel) {
    ConfigLevel["PLATFORM"] = "PLATFORM";
    ConfigLevel["CHAIN"] = "CHAIN";
    ConfigLevel["HOTEL"] = "HOTEL";
})(ConfigLevel || (exports.ConfigLevel = ConfigLevel = {}));
/**
 * Payment gateway types
 */
var GatewayType;
(function (GatewayType) {
    GatewayType["ONEPAY"] = "ONEPAY";
    GatewayType["VNPAY"] = "VNPAY";
    GatewayType["STRIPE"] = "STRIPE";
    GatewayType["MOMO"] = "MOMO";
    GatewayType["PAYPAL"] = "PAYPAL";
})(GatewayType || (exports.GatewayType = GatewayType = {}));
/**
 * Gateway sync result status for individual hotel
 */
var GatewaySyncStatus;
(function (GatewaySyncStatus) {
    GatewaySyncStatus["SUCCESS"] = "SUCCESS";
    GatewaySyncStatus["SKIPPED"] = "SKIPPED";
    GatewaySyncStatus["FAILED"] = "FAILED";
})(GatewaySyncStatus || (exports.GatewaySyncStatus = GatewaySyncStatus = {}));
//# sourceMappingURL=gateway-inheritance.nats.js.map