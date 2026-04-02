"use strict";
/**
 * Amenity SLA Alert Enums
 * Tracks alert types, status, and SLA compliance state for amenity requests
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmenitySLAStatus = exports.AmenityAlertStatus = exports.AmenityAlertType = void 0;
var AmenityAlertType;
(function (AmenityAlertType) {
    AmenityAlertType["WARNING"] = "WARNING";
    AmenityAlertType["ESCALATION_LEVEL_2"] = "ESCALATION_LEVEL_2";
    AmenityAlertType["BREACHED"] = "BREACHED";
})(AmenityAlertType || (exports.AmenityAlertType = AmenityAlertType = {}));
var AmenityAlertStatus;
(function (AmenityAlertStatus) {
    AmenityAlertStatus["PENDING"] = "PENDING";
    AmenityAlertStatus["SENT"] = "SENT";
    AmenityAlertStatus["ACKNOWLEDGED"] = "ACKNOWLEDGED";
    AmenityAlertStatus["DISMISSED"] = "DISMISSED";
})(AmenityAlertStatus || (exports.AmenityAlertStatus = AmenityAlertStatus = {}));
var AmenitySLAStatus;
(function (AmenitySLAStatus) {
    AmenitySLAStatus["ON_TRACK"] = "ON_TRACK";
    AmenitySLAStatus["WARNING"] = "WARNING";
    AmenitySLAStatus["BREACHED"] = "BREACHED";
})(AmenitySLAStatus || (exports.AmenitySLAStatus = AmenitySLAStatus = {}));
//# sourceMappingURL=amenity-alert.enum.js.map