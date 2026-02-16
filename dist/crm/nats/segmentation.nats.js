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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentationStatsDto = exports.SegmentPerformanceItemDto = exports.CustomerSegmentNatsResponse = exports.SegmentStatus = exports.SegmentType = void 0;
const swagger_1 = require("@nestjs/swagger");
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
/**
 * Customer Segment Response
 */
class CustomerSegmentNatsResponse {
    id;
    tenantId;
    name;
    description;
    type;
    status;
    criteria;
    autoUpdate;
    memberCount;
    createdAt;
    updatedAt;
    createdBy;
}
exports.CustomerSegmentNatsResponse = CustomerSegmentNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment ID' }),
    __metadata("design:type", String)
], CustomerSegmentNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CustomerSegmentNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment name' }),
    __metadata("design:type", String)
], CustomerSegmentNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Segment description' }),
    __metadata("design:type", String)
], CustomerSegmentNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment type' }),
    __metadata("design:type", String)
], CustomerSegmentNatsResponse.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: SegmentStatus, description: 'Segment status' }),
    __metadata("design:type", String)
], CustomerSegmentNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segmentation criteria' }),
    __metadata("design:type", Object)
], CustomerSegmentNatsResponse.prototype, "criteria", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to auto-update members' }),
    __metadata("design:type", Boolean)
], CustomerSegmentNatsResponse.prototype, "autoUpdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of members in segment' }),
    __metadata("design:type", Number)
], CustomerSegmentNatsResponse.prototype, "memberCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Object)
], CustomerSegmentNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Object)
], CustomerSegmentNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID who created segment' }),
    __metadata("design:type", String)
], CustomerSegmentNatsResponse.prototype, "createdBy", void 0);
/**
 * Segment Performance Item
 * Used within SegmentationStatsDto
 */
class SegmentPerformanceItemDto {
    name;
    customerCount;
}
exports.SegmentPerformanceItemDto = SegmentPerformanceItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment name' }),
    __metadata("design:type", String)
], SegmentPerformanceItemDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer count in segment' }),
    __metadata("design:type", Number)
], SegmentPerformanceItemDto.prototype, "customerCount", void 0);
/**
 * Segmentation Stats DTO
 * Unified for both NATS messages and REST API responses
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.stats
 */
class SegmentationStatsDto {
    totalSegments;
    activeSegments;
    totalSegmentedCustomers;
    averageSegmentSize;
    segmentPerformance;
}
exports.SegmentationStatsDto = SegmentationStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of customer segments' }),
    __metadata("design:type", Number)
], SegmentationStatsDto.prototype, "totalSegments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of active segments' }),
    __metadata("design:type", Number)
], SegmentationStatsDto.prototype, "activeSegments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total customers across all segments' }),
    __metadata("design:type", Number)
], SegmentationStatsDto.prototype, "totalSegmentedCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average segment size' }),
    __metadata("design:type", Number)
], SegmentationStatsDto.prototype, "averageSegmentSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Top segment performance metrics',
        type: [SegmentPerformanceItemDto]
    }),
    __metadata("design:type", Array)
], SegmentationStatsDto.prototype, "segmentPerformance", void 0);
//# sourceMappingURL=segmentation.nats.js.map