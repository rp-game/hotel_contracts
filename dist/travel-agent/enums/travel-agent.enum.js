"use strict";
/**
 * Travel Agent Domain Enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionRecordStatus = exports.CommissionType = exports.TravelAgentStatus = void 0;
var TravelAgentStatus;
(function (TravelAgentStatus) {
    TravelAgentStatus["ACTIVE"] = "ACTIVE";
    TravelAgentStatus["INACTIVE"] = "INACTIVE";
    TravelAgentStatus["SUSPENDED"] = "SUSPENDED";
})(TravelAgentStatus || (exports.TravelAgentStatus = TravelAgentStatus = {}));
var CommissionType;
(function (CommissionType) {
    CommissionType["PERCENTAGE"] = "PERCENTAGE";
    CommissionType["FLAT_PER_NIGHT"] = "FLAT_PER_NIGHT";
    CommissionType["FLAT_PER_STAY"] = "FLAT_PER_STAY";
})(CommissionType || (exports.CommissionType = CommissionType = {}));
var CommissionRecordStatus;
(function (CommissionRecordStatus) {
    CommissionRecordStatus["PENDING"] = "PENDING";
    CommissionRecordStatus["APPROVED"] = "APPROVED";
    CommissionRecordStatus["PAID"] = "PAID";
    CommissionRecordStatus["ON_HOLD"] = "ON_HOLD";
    CommissionRecordStatus["CANCELLED"] = "CANCELLED";
})(CommissionRecordStatus || (exports.CommissionRecordStatus = CommissionRecordStatus = {}));
//# sourceMappingURL=travel-agent.enum.js.map