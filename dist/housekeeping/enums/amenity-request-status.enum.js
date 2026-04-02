"use strict";
/**
 * Amenity Request Status Enum
 * Tracks the lifecycle of a guest amenity request from creation to fulfillment or cancellation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmenityRequestStatus = void 0;
var AmenityRequestStatus;
(function (AmenityRequestStatus) {
    AmenityRequestStatus["PENDING"] = "PENDING";
    AmenityRequestStatus["ACCEPTED"] = "ACCEPTED";
    AmenityRequestStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AmenityRequestStatus["FULFILLED"] = "FULFILLED";
    AmenityRequestStatus["CANCELLED"] = "CANCELLED";
    AmenityRequestStatus["NOT_AVAILABLE"] = "NOT_AVAILABLE";
})(AmenityRequestStatus || (exports.AmenityRequestStatus = AmenityRequestStatus = {}));
//# sourceMappingURL=amenity-request-status.enum.js.map