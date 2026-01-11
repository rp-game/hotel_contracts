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
exports.SegmentStatus = void 0;
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