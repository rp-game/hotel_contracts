"use strict";
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
exports.RequisitionResponse = exports.RequisitionItemResponse = exports.FindOneRequisitionRequest = exports.FindRequisitionsRequest = exports.RejectRequisitionRequest = exports.FulfillRequisitionRequest = exports.ApproveRequisitionRequest = exports.SubmitRequisitionRequest = exports.CreateRequisitionRequest = exports.RequisitionItemDto = exports.RequisitionUrgency = exports.RequisitionStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
// ─── Enums ───
var RequisitionStatus;
(function (RequisitionStatus) {
    RequisitionStatus["DRAFT"] = "DRAFT";
    RequisitionStatus["SUBMITTED"] = "SUBMITTED";
    RequisitionStatus["APPROVED"] = "APPROVED";
    RequisitionStatus["FULFILLED"] = "FULFILLED";
    RequisitionStatus["REJECTED"] = "REJECTED";
})(RequisitionStatus || (exports.RequisitionStatus = RequisitionStatus = {}));
var RequisitionUrgency;
(function (RequisitionUrgency) {
    RequisitionUrgency["LOW"] = "LOW";
    RequisitionUrgency["NORMAL"] = "NORMAL";
    RequisitionUrgency["URGENT"] = "URGENT";
})(RequisitionUrgency || (exports.RequisitionUrgency = RequisitionUrgency = {}));
// ─── Items ───
class RequisitionItemDto {
    itemId;
    quantity;
    notes;
}
exports.RequisitionItemDto = RequisitionItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RequisitionItemDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.0001),
    __metadata("design:type", Number)
], RequisitionItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequisitionItemDto.prototype, "notes", void 0);
// ─── Create ───
class CreateRequisitionRequest {
    tenantId;
    hotelId;
    chainWarehouseId;
    requestedBy;
    requestedByName;
    urgency;
    notes;
    items;
}
exports.CreateRequisitionRequest = CreateRequisitionRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRequisitionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRequisitionRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain warehouse to request from' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRequisitionRequest.prototype, "chainWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRequisitionRequest.prototype, "requestedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRequisitionRequest.prototype, "requestedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: RequisitionUrgency, default: RequisitionUrgency.NORMAL }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(RequisitionUrgency),
    __metadata("design:type", String)
], CreateRequisitionRequest.prototype, "urgency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRequisitionRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RequisitionItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => RequisitionItemDto),
    __metadata("design:type", Array)
], CreateRequisitionRequest.prototype, "items", void 0);
// ─── Workflow Actions ───
class SubmitRequisitionRequest {
    tenantId;
    id;
}
exports.SubmitRequisitionRequest = SubmitRequisitionRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SubmitRequisitionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SubmitRequisitionRequest.prototype, "id", void 0);
class ApproveRequisitionRequest {
    tenantId;
    id;
    approvedBy;
    approvedByName;
}
exports.ApproveRequisitionRequest = ApproveRequisitionRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveRequisitionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveRequisitionRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveRequisitionRequest.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRequisitionRequest.prototype, "approvedByName", void 0);
class FulfillRequisitionRequest {
    tenantId;
    id;
}
exports.FulfillRequisitionRequest = FulfillRequisitionRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FulfillRequisitionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FulfillRequisitionRequest.prototype, "id", void 0);
class RejectRequisitionRequest {
    tenantId;
    id;
    rejectedBy;
    reason;
}
exports.RejectRequisitionRequest = RejectRequisitionRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RejectRequisitionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RejectRequisitionRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RejectRequisitionRequest.prototype, "rejectedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RejectRequisitionRequest.prototype, "reason", void 0);
// ─── Find ───
class FindRequisitionsRequest {
    tenantId;
    hotelId;
    chainWarehouseId;
    status;
    page;
    limit;
}
exports.FindRequisitionsRequest = FindRequisitionsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindRequisitionsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindRequisitionsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindRequisitionsRequest.prototype, "chainWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: RequisitionStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(RequisitionStatus),
    __metadata("design:type", String)
], FindRequisitionsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FindRequisitionsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FindRequisitionsRequest.prototype, "limit", void 0);
class FindOneRequisitionRequest {
    tenantId;
    id;
}
exports.FindOneRequisitionRequest = FindOneRequisitionRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneRequisitionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneRequisitionRequest.prototype, "id", void 0);
// ─── Response ───
class RequisitionItemResponse {
    id;
    itemId;
    itemCode;
    itemName;
    unit;
    quantity;
    notes;
}
exports.RequisitionItemResponse = RequisitionItemResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionItemResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionItemResponse.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionItemResponse.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionItemResponse.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionItemResponse.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RequisitionItemResponse.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionItemResponse.prototype, "notes", void 0);
class RequisitionResponse {
    id;
    tenantId;
    requisitionNumber;
    hotelId;
    hotelName;
    chainWarehouseId;
    chainWarehouseName;
    status;
    urgency;
    requestedBy;
    requestedByName;
    approvedBy;
    approvedByName;
    approvedAt;
    fulfilledAt;
    interHotelTransferId;
    rejectedBy;
    rejectedReason;
    notes;
    items;
    createdAt;
}
exports.RequisitionResponse = RequisitionResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "requisitionNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "hotelName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "chainWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "chainWarehouseName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RequisitionStatus }),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RequisitionUrgency }),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "urgency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "requestedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "requestedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "approvedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "approvedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "fulfilledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "interHotelTransferId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "rejectedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "rejectedReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RequisitionItemResponse] }),
    __metadata("design:type", Array)
], RequisitionResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequisitionResponse.prototype, "createdAt", void 0);
//# sourceMappingURL=requisition.nats.js.map