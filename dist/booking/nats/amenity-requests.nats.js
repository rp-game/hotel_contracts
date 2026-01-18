"use strict";
/**
 * Amenity Requests NATS Contracts
 *
 * Patterns:
 * - amenity_requests.find_all
 * - amenity_requests.find_one
 * - amenity_requests.create
 * - amenity_requests.update
 * - amenity_requests.assign
 * - amenity_requests.start
 * - amenity_requests.complete
 * - amenity_requests.cancel
 * - amenity_requests.stats
 * - amenity_requests.assess_feasibility
 * - amenity_requests.quality_check
 * - amenity_requests.request_guest_approval
 * - amenity_requests.coordinate_departments
 * - amenity_requests.get_special_request_categories
 *
 * Handler: booking-service (AmenityNatsController)
 * Called by: api-gateway (GuestServicesController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualityCheckStatus = exports.FeasibilityStatus = exports.SpecialRequestCategory = exports.AmenityStatus = exports.AmenityPriority = void 0;
/**
 * Amenity Priority Enum
 */
var AmenityPriority;
(function (AmenityPriority) {
    AmenityPriority["LOW"] = "LOW";
    AmenityPriority["MEDIUM"] = "MEDIUM";
    AmenityPriority["HIGH"] = "HIGH";
    AmenityPriority["URGENT"] = "URGENT";
})(AmenityPriority || (exports.AmenityPriority = AmenityPriority = {}));
/**
 * Amenity Status Enum
 */
var AmenityStatus;
(function (AmenityStatus) {
    AmenityStatus["PENDING"] = "PENDING";
    AmenityStatus["ASSIGNED"] = "ASSIGNED";
    AmenityStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AmenityStatus["COMPLETED"] = "COMPLETED";
    AmenityStatus["CANCELLED"] = "CANCELLED";
})(AmenityStatus || (exports.AmenityStatus = AmenityStatus = {}));
/**
 * Special Request Category Enum
 */
var SpecialRequestCategory;
(function (SpecialRequestCategory) {
    SpecialRequestCategory["ROOM_PREFERENCE"] = "ROOM_PREFERENCE";
    SpecialRequestCategory["ACCESSIBILITY_NEEDS"] = "ACCESSIBILITY_NEEDS";
    SpecialRequestCategory["DIETARY_REQUIREMENTS"] = "DIETARY_REQUIREMENTS";
    SpecialRequestCategory["CELEBRATION_SERVICES"] = "CELEBRATION_SERVICES";
    SpecialRequestCategory["BUSINESS_NEEDS"] = "BUSINESS_NEEDS";
    SpecialRequestCategory["AMENITIES"] = "AMENITIES";
    SpecialRequestCategory["SERVICES"] = "SERVICES";
})(SpecialRequestCategory || (exports.SpecialRequestCategory = SpecialRequestCategory = {}));
/**
 * Feasibility Status Enum
 */
var FeasibilityStatus;
(function (FeasibilityStatus) {
    FeasibilityStatus["PENDING"] = "PENDING";
    FeasibilityStatus["APPROVED"] = "APPROVED";
    FeasibilityStatus["REJECTED"] = "REJECTED";
    FeasibilityStatus["NEEDS_ASSESSMENT"] = "NEEDS_ASSESSMENT";
})(FeasibilityStatus || (exports.FeasibilityStatus = FeasibilityStatus = {}));
/**
 * Quality Check Status Enum
 */
var QualityCheckStatus;
(function (QualityCheckStatus) {
    QualityCheckStatus["NOT_STARTED"] = "NOT_STARTED";
    QualityCheckStatus["IN_PROGRESS"] = "IN_PROGRESS";
    QualityCheckStatus["PASSED"] = "PASSED";
    QualityCheckStatus["FAILED"] = "FAILED";
    QualityCheckStatus["GUEST_CONFIRMATION_PENDING"] = "GUEST_CONFIRMATION_PENDING";
})(QualityCheckStatus || (exports.QualityCheckStatus = QualityCheckStatus = {}));
//# sourceMappingURL=amenity-requests.nats.js.map