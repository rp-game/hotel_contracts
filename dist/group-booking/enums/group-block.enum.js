"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBlockAction = exports.InventoryControlMode = exports.GroupBillingMode = exports.GroupBlockStatus = void 0;
/**
 * Group Block Status - State machine for group booking blocks
 *
 * Transitions:
 *   INQUIRY → TENTATIVE, CANCELLED
 *   TENTATIVE → DEFINITE, CANCELLED, INQUIRY
 *   DEFINITE → COMPLETED, CANCELLED
 *   CANCELLED → (terminal)
 *   COMPLETED → (terminal)
 */
var GroupBlockStatus;
(function (GroupBlockStatus) {
    GroupBlockStatus["INQUIRY"] = "INQUIRY";
    GroupBlockStatus["TENTATIVE"] = "TENTATIVE";
    GroupBlockStatus["DEFINITE"] = "DEFINITE";
    GroupBlockStatus["CANCELLED"] = "CANCELLED";
    GroupBlockStatus["COMPLETED"] = "COMPLETED";
})(GroupBlockStatus || (exports.GroupBlockStatus = GroupBlockStatus = {}));
/**
 * Group Billing Mode - How charges are routed for group bookings
 */
var GroupBillingMode;
(function (GroupBillingMode) {
    GroupBillingMode["MASTER_ONLY"] = "MASTER_ONLY";
    GroupBillingMode["INDIVIDUAL_ONLY"] = "INDIVIDUAL_ONLY";
    GroupBillingMode["SPLIT"] = "SPLIT";
})(GroupBillingMode || (exports.GroupBillingMode = GroupBillingMode = {}));
/**
 * Inventory Control Mode - How room allocation affects availability
 */
var InventoryControlMode;
(function (InventoryControlMode) {
    InventoryControlMode["ELASTIC"] = "ELASTIC";
    InventoryControlMode["NON_ELASTIC"] = "NON_ELASTIC";
    InventoryControlMode["SELL_LIMIT"] = "SELL_LIMIT";
})(InventoryControlMode || (exports.InventoryControlMode = InventoryControlMode = {}));
/**
 * Group Block Action - Audit trail actions for group block history
 */
var GroupBlockAction;
(function (GroupBlockAction) {
    GroupBlockAction["CREATED"] = "CREATED";
    GroupBlockAction["STATUS_CHANGED"] = "STATUS_CHANGED";
    GroupBlockAction["ALLOCATION_ADDED"] = "ALLOCATION_ADDED";
    GroupBlockAction["ALLOCATION_UPDATED"] = "ALLOCATION_UPDATED";
    GroupBlockAction["ALLOCATION_REMOVED"] = "ALLOCATION_REMOVED";
    GroupBlockAction["BOOKING_PICKED_UP"] = "BOOKING_PICKED_UP";
    GroupBlockAction["BOOKING_CANCELLED"] = "BOOKING_CANCELLED";
    GroupBlockAction["DETAILS_UPDATED"] = "DETAILS_UPDATED";
})(GroupBlockAction || (exports.GroupBlockAction = GroupBlockAction = {}));
//# sourceMappingURL=group-block.enum.js.map