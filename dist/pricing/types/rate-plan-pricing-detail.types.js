"use strict";
/**
 * Rate Plan Pricing Detail Types (Phase B)
 *
 * Manage rate_plan_pricing rows per (ratePlan × roomType × dateRange).
 * Extends pricing.rates.* namespace with split-on-conflict semantics.
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
exports.BootstrapFromBaseRateResponse = exports.BootstrapFromBaseRateRequest = exports.SoftDeleteRangeResponse = exports.SoftDeleteRangeRequest = exports.UpdateRangeResponse = exports.UpdateRangeRequest = exports.DetectConflictsResponse = exports.DetectConflictsRequest = exports.BulkCreateWithSplitResponse = exports.ConflictPlan = exports.ConflictPlanRow = exports.BulkCreateWithSplitRequest = exports.RatePlanPricingRangeInput = exports.ListRatePlanPricingResponse = exports.ListRatePlanPricingRequest = exports.RatePlanPricingItem = exports.RatePlanPricingSource = void 0;
const swagger_1 = require("@nestjs/swagger");
var RatePlanPricingSource;
(function (RatePlanPricingSource) {
    RatePlanPricingSource["CRON"] = "cron";
    RatePlanPricingSource["MANUAL"] = "manual";
})(RatePlanPricingSource || (exports.RatePlanPricingSource = RatePlanPricingSource = {}));
class RatePlanPricingItem {
    id;
    tenantId;
    hotelId;
    ratePlanId;
    roomTypeId;
    startDate;
    endDate;
    basePrice;
    mondayPrice;
    tuesdayPrice;
    wednesdayPrice;
    thursdayPrice;
    fridayPrice;
    saturdayPrice;
    sundayPrice;
    occupancyRules;
    lengthOfStayRules;
    isActive;
    source;
    createdAt;
    updatedAt;
}
exports.RatePlanPricingItem = RatePlanPricingItem;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingItem.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingItem.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingItem.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingItem.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingItem.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingItem.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RatePlanPricingItem.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingItem.prototype, "mondayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingItem.prototype, "tuesdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingItem.prototype, "wednesdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingItem.prototype, "thursdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingItem.prototype, "fridayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingItem.prototype, "saturdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingItem.prototype, "sundayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanPricingItem.prototype, "occupancyRules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanPricingItem.prototype, "lengthOfStayRules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RatePlanPricingItem.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RatePlanPricingSource }),
    __metadata("design:type", String)
], RatePlanPricingItem.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingItem.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingItem.prototype, "updatedAt", void 0);
class ListRatePlanPricingRequest {
    tenantId;
    hotelId;
    ratePlanId;
    roomTypeId;
    dateFrom;
    dateTo;
    activeOnly;
    source;
}
exports.ListRatePlanPricingRequest = ListRatePlanPricingRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ListRatePlanPricingRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ListRatePlanPricingRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ListRatePlanPricingRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ListRatePlanPricingRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ListRatePlanPricingRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ListRatePlanPricingRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Boolean)
], ListRatePlanPricingRequest.prototype, "activeOnly", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: RatePlanPricingSource }),
    __metadata("design:type", String)
], ListRatePlanPricingRequest.prototype, "source", void 0);
class ListRatePlanPricingResponse {
    items;
    total;
}
exports.ListRatePlanPricingResponse = ListRatePlanPricingResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RatePlanPricingItem] }),
    __metadata("design:type", Array)
], ListRatePlanPricingResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ListRatePlanPricingResponse.prototype, "total", void 0);
class RatePlanPricingRangeInput {
    roomTypeId;
    startDate;
    endDate;
    basePrice;
    mondayPrice;
    tuesdayPrice;
    wednesdayPrice;
    thursdayPrice;
    fridayPrice;
    saturdayPrice;
    sundayPrice;
    occupancyRules;
    lengthOfStayRules;
}
exports.RatePlanPricingRangeInput = RatePlanPricingRangeInput;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingRangeInput.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingRangeInput.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanPricingRangeInput.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RatePlanPricingRangeInput.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingRangeInput.prototype, "mondayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingRangeInput.prototype, "tuesdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingRangeInput.prototype, "wednesdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingRangeInput.prototype, "thursdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingRangeInput.prototype, "fridayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingRangeInput.prototype, "saturdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanPricingRangeInput.prototype, "sundayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanPricingRangeInput.prototype, "occupancyRules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], RatePlanPricingRangeInput.prototype, "lengthOfStayRules", void 0);
class BulkCreateWithSplitRequest {
    tenantId;
    hotelId;
    ratePlanId;
    ranges;
    performedBy;
}
exports.BulkCreateWithSplitRequest = BulkCreateWithSplitRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BulkCreateWithSplitRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BulkCreateWithSplitRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BulkCreateWithSplitRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RatePlanPricingRangeInput] }),
    __metadata("design:type", Array)
], BulkCreateWithSplitRequest.prototype, "ranges", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], BulkCreateWithSplitRequest.prototype, "performedBy", void 0);
class ConflictPlanRow {
    id;
    roomTypeId;
    startDate;
    endDate;
    basePrice;
    newStartDate;
    newEndDate;
}
exports.ConflictPlanRow = ConflictPlanRow;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictPlanRow.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictPlanRow.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictPlanRow.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictPlanRow.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ConflictPlanRow.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ConflictPlanRow.prototype, "newStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ConflictPlanRow.prototype, "newEndDate", void 0);
class ConflictPlan {
    kept;
    replaced;
    trimmed;
    created;
}
exports.ConflictPlan = ConflictPlan;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ConflictPlanRow] }),
    __metadata("design:type", Array)
], ConflictPlan.prototype, "kept", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ConflictPlanRow] }),
    __metadata("design:type", Array)
], ConflictPlan.prototype, "replaced", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ConflictPlanRow] }),
    __metadata("design:type", Array)
], ConflictPlan.prototype, "trimmed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ConflictPlanRow] }),
    __metadata("design:type", Array)
], ConflictPlan.prototype, "created", void 0);
class BulkCreateWithSplitResponse {
    plan;
    createdItems;
}
exports.BulkCreateWithSplitResponse = BulkCreateWithSplitResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: ConflictPlan }),
    __metadata("design:type", ConflictPlan)
], BulkCreateWithSplitResponse.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RatePlanPricingItem] }),
    __metadata("design:type", Array)
], BulkCreateWithSplitResponse.prototype, "createdItems", void 0);
class DetectConflictsRequest {
    tenantId;
    ratePlanId;
    ranges;
    excludeRowId;
}
exports.DetectConflictsRequest = DetectConflictsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DetectConflictsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DetectConflictsRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RatePlanPricingRangeInput] }),
    __metadata("design:type", Array)
], DetectConflictsRequest.prototype, "ranges", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], DetectConflictsRequest.prototype, "excludeRowId", void 0);
class DetectConflictsResponse {
    plan;
}
exports.DetectConflictsResponse = DetectConflictsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: ConflictPlan }),
    __metadata("design:type", ConflictPlan)
], DetectConflictsResponse.prototype, "plan", void 0);
class UpdateRangeRequest {
    tenantId;
    id;
    expectedUpdatedAt;
    startDate;
    endDate;
    basePrice;
    mondayPrice;
    tuesdayPrice;
    wednesdayPrice;
    thursdayPrice;
    fridayPrice;
    saturdayPrice;
    sundayPrice;
    occupancyRules;
    lengthOfStayRules;
    performedBy;
}
exports.UpdateRangeRequest = UpdateRangeRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateRangeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateRangeRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateRangeRequest.prototype, "expectedUpdatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UpdateRangeRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UpdateRangeRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], UpdateRangeRequest.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], UpdateRangeRequest.prototype, "mondayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], UpdateRangeRequest.prototype, "tuesdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], UpdateRangeRequest.prototype, "wednesdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], UpdateRangeRequest.prototype, "thursdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], UpdateRangeRequest.prototype, "fridayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], UpdateRangeRequest.prototype, "saturdayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], UpdateRangeRequest.prototype, "sundayPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], UpdateRangeRequest.prototype, "occupancyRules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], UpdateRangeRequest.prototype, "lengthOfStayRules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UpdateRangeRequest.prototype, "performedBy", void 0);
class UpdateRangeResponse {
    item;
    plan;
}
exports.UpdateRangeResponse = UpdateRangeResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: RatePlanPricingItem }),
    __metadata("design:type", RatePlanPricingItem)
], UpdateRangeResponse.prototype, "item", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: ConflictPlan }),
    __metadata("design:type", ConflictPlan)
], UpdateRangeResponse.prototype, "plan", void 0);
class SoftDeleteRangeRequest {
    tenantId;
    id;
    expectedUpdatedAt;
    performedBy;
}
exports.SoftDeleteRangeRequest = SoftDeleteRangeRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SoftDeleteRangeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SoftDeleteRangeRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SoftDeleteRangeRequest.prototype, "expectedUpdatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SoftDeleteRangeRequest.prototype, "performedBy", void 0);
class SoftDeleteRangeResponse {
    success;
}
exports.SoftDeleteRangeResponse = SoftDeleteRangeResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], SoftDeleteRangeResponse.prototype, "success", void 0);
class BootstrapFromBaseRateRequest {
    tenantId;
    hotelId;
    ratePlanId;
    dateFrom;
    dateTo;
    skipRoomsWithPricing;
    performedBy;
}
exports.BootstrapFromBaseRateRequest = BootstrapFromBaseRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BootstrapFromBaseRateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BootstrapFromBaseRateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BootstrapFromBaseRateRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BootstrapFromBaseRateRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BootstrapFromBaseRateRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Boolean)
], BootstrapFromBaseRateRequest.prototype, "skipRoomsWithPricing", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], BootstrapFromBaseRateRequest.prototype, "performedBy", void 0);
class BootstrapFromBaseRateResponse {
    rowsCreated;
    items;
    skippedRoomTypeIds;
}
exports.BootstrapFromBaseRateResponse = BootstrapFromBaseRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BootstrapFromBaseRateResponse.prototype, "rowsCreated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RatePlanPricingItem] }),
    __metadata("design:type", Array)
], BootstrapFromBaseRateResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], BootstrapFromBaseRateResponse.prototype, "skippedRoomTypeIds", void 0);
//# sourceMappingURL=rate-plan-pricing-detail.types.js.map