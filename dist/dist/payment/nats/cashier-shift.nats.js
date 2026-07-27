"use strict";
/**
 * Cashier Shift NATS Contract
 *
 * NATS Patterns: cashier-shift.open, cashier-shift.close, cashier-shift.force-close,
 *                cashier-shift.find, cashier-shift.findById, cashier-shift.findActive
 * Handler: payment-service
 * Called by: api-gateway
 * Used by: managing cashier shifts for reception staff cash reconciliation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashierShiftType = exports.CashierShiftStatus = void 0;
/**
 * Cashier shift status
 */
var CashierShiftStatus;
(function (CashierShiftStatus) {
    CashierShiftStatus["OPEN"] = "OPEN";
    CashierShiftStatus["CLOSED"] = "CLOSED";
    CashierShiftStatus["FORCE_CLOSED"] = "FORCE_CLOSED";
})(CashierShiftStatus || (exports.CashierShiftStatus = CashierShiftStatus = {}));
/**
 * Cashier shift type (time of day)
 */
var CashierShiftType;
(function (CashierShiftType) {
    CashierShiftType["MORNING"] = "MORNING";
    CashierShiftType["AFTERNOON"] = "AFTERNOON";
    CashierShiftType["NIGHT"] = "NIGHT";
})(CashierShiftType || (exports.CashierShiftType = CashierShiftType = {}));
//# sourceMappingURL=cashier-shift.nats.js.map