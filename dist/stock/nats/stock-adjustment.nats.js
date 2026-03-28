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
exports.FindOneStockAdjustmentRequest = exports.FindStockAdjustmentsRequest = exports.StockAdjustmentResponse = exports.StockAdjustmentItemResponse = exports.CreateStockAdjustmentRequest = exports.StockAdjustmentItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../enums");
// ─── Create Stock Adjustment ───
class StockAdjustmentItemDto {
    itemId;
    quantityChange;
    unitCost;
    reason;
}
exports.StockAdjustmentItemDto = StockAdjustmentItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], StockAdjustmentItemDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Positive = stock increase, Negative = stock decrease' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StockAdjustmentItemDto.prototype, "quantityChange", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cost per unit at time of adjustment' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StockAdjustmentItemDto.prototype, "unitCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StockAdjustmentItemDto.prototype, "reason", void 0);
class CreateStockAdjustmentRequest {
    tenantId;
    hotelId;
    adjustmentType;
    referenceId;
    supplierId;
    adjustmentDate;
    notes;
    performedBy;
    performedByName;
    warehouseId;
    items;
}
exports.CreateStockAdjustmentRequest = CreateStockAdjustmentRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockAdjustmentRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockAdjustmentRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.StockAdjustmentType }),
    (0, class_validator_1.IsEnum)(enums_1.StockAdjustmentType),
    __metadata("design:type", String)
], CreateStockAdjustmentRequest.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reference to original document (e.g. StockIssue ID for returns)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockAdjustmentRequest.prototype, "referenceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Supplier for return to supplier' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockAdjustmentRequest.prototype, "supplierId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateStockAdjustmentRequest.prototype, "adjustmentDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockAdjustmentRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockAdjustmentRequest.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff name (denormalized)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockAdjustmentRequest.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Warehouse for this adjustment (auto-resolves to default if not provided)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockAdjustmentRequest.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StockAdjustmentItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => StockAdjustmentItemDto),
    __metadata("design:type", Array)
], CreateStockAdjustmentRequest.prototype, "items", void 0);
class StockAdjustmentItemResponse {
    id;
    itemId;
    itemName;
    itemCode;
    quantityChange;
    unitCost;
    reason;
}
exports.StockAdjustmentItemResponse = StockAdjustmentItemResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockAdjustmentItemResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockAdjustmentItemResponse.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockAdjustmentItemResponse.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockAdjustmentItemResponse.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StockAdjustmentItemResponse.prototype, "quantityChange", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StockAdjustmentItemResponse.prototype, "unitCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockAdjustmentItemResponse.prototype, "reason", void 0);
class StockAdjustmentResponse {
    id;
    tenantId;
    hotelId;
    adjustmentNumber;
    adjustmentType;
    referenceId;
    supplierId;
    supplierName;
    adjustmentDate;
    notes;
    performedBy;
    performedByName;
    warehouseId;
    warehouseName;
    items;
    createdAt;
}
exports.StockAdjustmentResponse = StockAdjustmentResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "adjustmentNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.StockAdjustmentType }),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "referenceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "supplierId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "supplierName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "adjustmentDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockAdjustmentResponse.prototype, "warehouseName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StockAdjustmentItemResponse] }),
    __metadata("design:type", Array)
], StockAdjustmentResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], StockAdjustmentResponse.prototype, "createdAt", void 0);
// ─── Find Stock Adjustments ───
class FindStockAdjustmentsRequest {
    tenantId;
    hotelId;
    adjustmentType;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindStockAdjustmentsRequest = FindStockAdjustmentsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindStockAdjustmentsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindStockAdjustmentsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.StockAdjustmentType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.StockAdjustmentType),
    __metadata("design:type", String)
], FindStockAdjustmentsRequest.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindStockAdjustmentsRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindStockAdjustmentsRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindStockAdjustmentsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindStockAdjustmentsRequest.prototype, "limit", void 0);
// ─── Find One Stock Adjustment ───
class FindOneStockAdjustmentRequest {
    tenantId;
    hotelId;
    id;
}
exports.FindOneStockAdjustmentRequest = FindOneStockAdjustmentRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockAdjustmentRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockAdjustmentRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockAdjustmentRequest.prototype, "id", void 0);
//# sourceMappingURL=stock-adjustment.nats.js.map