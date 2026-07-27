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
exports.InterHotelTransferResponse = exports.InterHotelTransferItemResponse = exports.FindOneInterHotelTransferRequest = exports.FindInterHotelTransfersRequest = exports.RejectInterHotelTransferRequest = exports.ReceiveInterHotelTransferRequest = exports.ReceiveInterHotelTransferItemDto = exports.ShipInterHotelTransferRequest = exports.ApproveInterHotelTransferRequest = exports.CreateInterHotelTransferRequest = exports.InterHotelTransferItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../enums");
// ─── Transfer Item ───
class InterHotelTransferItemDto {
    itemId;
    quantity;
}
exports.InterHotelTransferItemDto = InterHotelTransferItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], InterHotelTransferItemDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.0001),
    __metadata("design:type", Number)
], InterHotelTransferItemDto.prototype, "quantity", void 0);
// ─── Create ───
class CreateInterHotelTransferRequest {
    tenantId;
    sourceHotelId;
    sourceWarehouseId;
    destinationHotelId;
    destinationWarehouseId;
    transferType;
    requestedBy;
    requestedByName;
    notes;
    items;
}
exports.CreateInterHotelTransferRequest = CreateInterHotelTransferRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInterHotelTransferRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInterHotelTransferRequest.prototype, "sourceHotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInterHotelTransferRequest.prototype, "sourceWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInterHotelTransferRequest.prototype, "destinationHotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInterHotelTransferRequest.prototype, "destinationWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.TransferType }),
    (0, class_validator_1.IsEnum)(enums_1.TransferType),
    __metadata("design:type", String)
], CreateInterHotelTransferRequest.prototype, "transferType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInterHotelTransferRequest.prototype, "requestedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInterHotelTransferRequest.prototype, "requestedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInterHotelTransferRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [InterHotelTransferItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => InterHotelTransferItemDto),
    __metadata("design:type", Array)
], CreateInterHotelTransferRequest.prototype, "items", void 0);
// ─── Workflow Actions ───
class ApproveInterHotelTransferRequest {
    tenantId;
    id;
    approvedBy;
    approvedByName;
}
exports.ApproveInterHotelTransferRequest = ApproveInterHotelTransferRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveInterHotelTransferRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveInterHotelTransferRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveInterHotelTransferRequest.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveInterHotelTransferRequest.prototype, "approvedByName", void 0);
class ShipInterHotelTransferRequest {
    tenantId;
    id;
    shippedBy;
    shippedByName;
}
exports.ShipInterHotelTransferRequest = ShipInterHotelTransferRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipInterHotelTransferRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipInterHotelTransferRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipInterHotelTransferRequest.prototype, "shippedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShipInterHotelTransferRequest.prototype, "shippedByName", void 0);
class ReceiveInterHotelTransferItemDto {
    itemId;
    receivedQuantity;
}
exports.ReceiveInterHotelTransferItemDto = ReceiveInterHotelTransferItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ReceiveInterHotelTransferItemDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ReceiveInterHotelTransferItemDto.prototype, "receivedQuantity", void 0);
class ReceiveInterHotelTransferRequest {
    tenantId;
    id;
    receivedBy;
    receivedByName;
    items;
}
exports.ReceiveInterHotelTransferRequest = ReceiveInterHotelTransferRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ReceiveInterHotelTransferRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ReceiveInterHotelTransferRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ReceiveInterHotelTransferRequest.prototype, "receivedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReceiveInterHotelTransferRequest.prototype, "receivedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [ReceiveInterHotelTransferItemDto], description: 'Override received quantities (partial receive)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ReceiveInterHotelTransferItemDto),
    __metadata("design:type", Array)
], ReceiveInterHotelTransferRequest.prototype, "items", void 0);
class RejectInterHotelTransferRequest {
    tenantId;
    id;
    rejectedBy;
    reason;
}
exports.RejectInterHotelTransferRequest = RejectInterHotelTransferRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RejectInterHotelTransferRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RejectInterHotelTransferRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RejectInterHotelTransferRequest.prototype, "rejectedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RejectInterHotelTransferRequest.prototype, "reason", void 0);
// ─── Find ───
class FindInterHotelTransfersRequest {
    tenantId;
    sourceHotelId;
    destinationHotelId;
    status;
    page;
    limit;
}
exports.FindInterHotelTransfersRequest = FindInterHotelTransfersRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindInterHotelTransfersRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindInterHotelTransfersRequest.prototype, "sourceHotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindInterHotelTransfersRequest.prototype, "destinationHotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.InterHotelTransferStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.InterHotelTransferStatus),
    __metadata("design:type", String)
], FindInterHotelTransfersRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FindInterHotelTransfersRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FindInterHotelTransfersRequest.prototype, "limit", void 0);
class FindOneInterHotelTransferRequest {
    tenantId;
    id;
}
exports.FindOneInterHotelTransferRequest = FindOneInterHotelTransferRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneInterHotelTransferRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneInterHotelTransferRequest.prototype, "id", void 0);
// ─── Response ───
class InterHotelTransferItemResponse {
    id;
    itemId;
    itemCode;
    itemName;
    unit;
    quantity;
    unitCost;
    totalCost;
    receivedQuantity;
}
exports.InterHotelTransferItemResponse = InterHotelTransferItemResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferItemResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferItemResponse.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferItemResponse.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferItemResponse.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferItemResponse.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], InterHotelTransferItemResponse.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], InterHotelTransferItemResponse.prototype, "unitCost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], InterHotelTransferItemResponse.prototype, "totalCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], InterHotelTransferItemResponse.prototype, "receivedQuantity", void 0);
class InterHotelTransferResponse {
    id;
    tenantId;
    transferNumber;
    sourceHotelId;
    sourceHotelName;
    sourceWarehouseId;
    sourceWarehouseName;
    destinationHotelId;
    destinationHotelName;
    destinationWarehouseId;
    destinationWarehouseName;
    status;
    transferType;
    requestedBy;
    requestedByName;
    approvedBy;
    approvedByName;
    approvedAt;
    shippedBy;
    shippedByName;
    shippedAt;
    receivedBy;
    receivedByName;
    receivedAt;
    rejectedBy;
    rejectedReason;
    notes;
    items;
    totalCost;
    createdAt;
}
exports.InterHotelTransferResponse = InterHotelTransferResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "transferNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "sourceHotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "sourceHotelName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "sourceWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "sourceWarehouseName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "destinationHotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "destinationHotelName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "destinationWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "destinationWarehouseName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.InterHotelTransferStatus }),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.TransferType }),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "transferType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "requestedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "requestedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "approvedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "approvedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "shippedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "shippedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "shippedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "receivedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "receivedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "receivedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "rejectedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "rejectedReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [InterHotelTransferItemResponse] }),
    __metadata("design:type", Array)
], InterHotelTransferResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], InterHotelTransferResponse.prototype, "totalCost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InterHotelTransferResponse.prototype, "createdAt", void 0);
//# sourceMappingURL=inter-hotel-transfer.nats.js.map