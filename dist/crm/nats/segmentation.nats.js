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
exports.BulkUpdateSegmentsNatsRequest = exports.CreatePredefinedSegmentsNatsRequest = exports.GetRfmAnalysisNatsRequest = exports.GetSegmentAnalysisNatsRequest = exports.SegmentMembersNatsResponse = exports.MessageResponseDto = exports.RecalculateSegmentNatsRequest = exports.DeleteSegmentNatsRequest = exports.FindSegmentByIdNatsRequest = exports.SegmentationStatsDto = exports.SegmentPerformanceItemDto = exports.SegmentsNatsResponse = exports.CustomerSegmentNatsResponse = exports.UpdateSegmentNatsRequest = exports.CreateSegmentNatsRequest = exports.SegmentStatus = exports.SegmentType = void 0;
const swagger_1 = require("@nestjs/swagger");
const customers_nats_1 = require("./customers.nats");
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
    SegmentType["LIFECYCLE"] = "LIFECYCLE";
    SegmentType["CUSTOM"] = "CUSTOM";
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
 * Create Segment Request
 * Unified for both NATS messages and REST API requests
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.segments.create
 */
class CreateSegmentNatsRequest {
    tenantId;
    userId;
    name;
    description;
    type;
    status;
    criteria;
    autoUpdate;
}
exports.CreateSegmentNatsRequest = CreateSegmentNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateSegmentNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who creates the segment' }),
    __metadata("design:type", String)
], CreateSegmentNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment name' }),
    __metadata("design:type", String)
], CreateSegmentNatsRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Segment description' }),
    __metadata("design:type", String)
], CreateSegmentNatsRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment type', enum: SegmentType }),
    __metadata("design:type", String)
], CreateSegmentNatsRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment status', enum: SegmentStatus }),
    __metadata("design:type", String)
], CreateSegmentNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segmentation criteria' }),
    __metadata("design:type", Object)
], CreateSegmentNatsRequest.prototype, "criteria", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to auto-update members' }),
    __metadata("design:type", Boolean)
], CreateSegmentNatsRequest.prototype, "autoUpdate", void 0);
/**
 * Update Segment Request
 * Unified for both NATS messages and REST API requests
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.segments.update
 *
 * Note: All fields are optional except tenantId, segmentId, userId
 */
class UpdateSegmentNatsRequest {
    tenantId;
    segmentId;
    userId;
    name;
    description;
    type;
    status;
    criteria;
    autoUpdate;
}
exports.UpdateSegmentNatsRequest = UpdateSegmentNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], UpdateSegmentNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment ID to update' }),
    __metadata("design:type", String)
], UpdateSegmentNatsRequest.prototype, "segmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who updates the segment' }),
    __metadata("design:type", String)
], UpdateSegmentNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Segment name' }),
    __metadata("design:type", String)
], UpdateSegmentNatsRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Segment description' }),
    __metadata("design:type", String)
], UpdateSegmentNatsRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Segment type', enum: SegmentType }),
    __metadata("design:type", String)
], UpdateSegmentNatsRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Segment status', enum: SegmentStatus }),
    __metadata("design:type", String)
], UpdateSegmentNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Segmentation criteria' }),
    __metadata("design:type", Object)
], UpdateSegmentNatsRequest.prototype, "criteria", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to auto-update members' }),
    __metadata("design:type", Boolean)
], UpdateSegmentNatsRequest.prototype, "autoUpdate", void 0);
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
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp', type: String }),
    __metadata("design:type", Object)
], CustomerSegmentNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp', type: String }),
    __metadata("design:type", Object)
], CustomerSegmentNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID who created segment' }),
    __metadata("design:type", String)
], CustomerSegmentNatsResponse.prototype, "createdBy", void 0);
/**
 * Segments Response (Paginated list)
 * Unified for both NATS messages and REST API responses
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.segments.findAll
 */
class SegmentsNatsResponse {
    data;
    total;
    page;
    limit;
}
exports.SegmentsNatsResponse = SegmentsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of customer segments',
        type: [CustomerSegmentNatsResponse]
    }),
    __metadata("design:type", Array)
], SegmentsNatsResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of segments' }),
    __metadata("design:type", Number)
], SegmentsNatsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], SegmentsNatsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], SegmentsNatsResponse.prototype, "limit", void 0);
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
/**
 * Find One Segment Request
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.segments.findOne
 */
class FindSegmentByIdNatsRequest {
    tenantId;
    segmentId;
}
exports.FindSegmentByIdNatsRequest = FindSegmentByIdNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindSegmentByIdNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment ID' }),
    __metadata("design:type", String)
], FindSegmentByIdNatsRequest.prototype, "segmentId", void 0);
/**
 * Delete Segment Request
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.segments.delete
 */
class DeleteSegmentNatsRequest {
    tenantId;
    segmentId;
}
exports.DeleteSegmentNatsRequest = DeleteSegmentNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], DeleteSegmentNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment ID to delete' }),
    __metadata("design:type", String)
], DeleteSegmentNatsRequest.prototype, "segmentId", void 0);
/**
 * Recalculate Segment Request
 * Unified for both NATS messages and REST API requests
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.segments.recalculate
 */
class RecalculateSegmentNatsRequest {
    tenantId;
    segmentId;
}
exports.RecalculateSegmentNatsRequest = RecalculateSegmentNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], RecalculateSegmentNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment ID to recalculate' }),
    __metadata("design:type", String)
], RecalculateSegmentNatsRequest.prototype, "segmentId", void 0);
/**
 * Message Response DTO
 * Generic message response used by various operations
 */
class MessageResponseDto {
    message;
}
exports.MessageResponseDto = MessageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "message", void 0);
/**
 * Segment Members Response (Paginated list of customers in a segment)
 * Unified for both NATS messages and REST API responses
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.segments.members
 *
 * Note: Returns full customer objects, not just membership metadata
 */
class SegmentMembersNatsResponse {
    data; // Will be CustomerNatsResponse[] - using any to avoid circular dependency
    total;
    page;
    limit;
}
exports.SegmentMembersNatsResponse = SegmentMembersNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of customers in the segment',
        type: () => [customers_nats_1.CustomerNatsResponse],
    }),
    __metadata("design:type", Array)
], SegmentMembersNatsResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of members' }),
    __metadata("design:type", Number)
], SegmentMembersNatsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], SegmentMembersNatsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], SegmentMembersNatsResponse.prototype, "limit", void 0);
/**
 * Get Segment Analysis Request
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.analysis
 */
class GetSegmentAnalysisNatsRequest {
    tenantId;
}
exports.GetSegmentAnalysisNatsRequest = GetSegmentAnalysisNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetSegmentAnalysisNatsRequest.prototype, "tenantId", void 0);
/**
 * Get RFM Analysis Request
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.rfm.analysis
 */
class GetRfmAnalysisNatsRequest {
    tenantId;
}
exports.GetRfmAnalysisNatsRequest = GetRfmAnalysisNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetRfmAnalysisNatsRequest.prototype, "tenantId", void 0);
/**
 * Create Predefined Segments Request
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.predefined.create
 */
class CreatePredefinedSegmentsNatsRequest {
    tenantId;
}
exports.CreatePredefinedSegmentsNatsRequest = CreatePredefinedSegmentsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreatePredefinedSegmentsNatsRequest.prototype, "tenantId", void 0);
/**
 * Bulk Update Segments Request
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.bulk-update
 */
class BulkUpdateSegmentsNatsRequest {
    tenantId;
}
exports.BulkUpdateSegmentsNatsRequest = BulkUpdateSegmentsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], BulkUpdateSegmentsNatsRequest.prototype, "tenantId", void 0);
//# sourceMappingURL=segmentation.nats.js.map