"use strict";
/**
 * Segmentation NATS Contracts
 *
 * Patterns:
 * - crm.segmentation.stats
 * - crm.segmentation.segments.findAll
 * - crm.segmentation.segments.findOne
 * - crm.segmentation.segments.create
 * - crm.segmentation.segments.update
 * - crm.segmentation.segments.delete
 * - crm.segmentation.segments.recalculate
 * - crm.segmentation.segments.members
 * - crm.segmentation.analysis
 * - crm.segmentation.rfm.analysis
 * - crm.segmentation.predefined.create
 * - crm.segmentation.bulk-update
 *
 * Handler: crm-service (SegmentationController)
 * Called by: api-gateway (CrmController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentStatus = exports.SegmentType = void 0;
/**
 * Segment Type Enum
 */
var SegmentType;
(function (SegmentType) {
    SegmentType["RFM"] = "RFM";
    SegmentType["BEHAVIORAL"] = "BEHAVIORAL";
    SegmentType["DEMOGRAPHIC"] = "DEMOGRAPHIC";
    SegmentType["GEOGRAPHIC"] = "GEOGRAPHIC";
    SegmentType["VALUE_BASED"] = "VALUE_BASED";
})(SegmentType || (exports.SegmentType = SegmentType = {}));
/**
 * Segment Status Enum
 */
var SegmentStatus;
(function (SegmentStatus) {
    SegmentStatus["ACTIVE"] = "ACTIVE";
    SegmentStatus["INACTIVE"] = "INACTIVE";
    SegmentStatus["ARCHIVED"] = "ARCHIVED";
})(SegmentStatus || (exports.SegmentStatus = SegmentStatus = {}));
//# sourceMappingURL=segmentation.nats.js.map