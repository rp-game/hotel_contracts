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
exports.ApproveStockTakeRequest = exports.FindOneStockTakeRequest = exports.FindStockTakesRequest = exports.StockTakeResponse = exports.StockTakeItemResponse = exports.CreateStockTakeRequest = exports.StockTakeItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../enums");
// ─── Create Stock Take ───
class StockTakeItemDto {
    itemId;
    actualQuantity;
}
exports.StockTakeItemDto = StockTakeItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], StockTakeItemDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Physically counted quantity' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], StockTakeItemDto.prototype, "actualQuantity", void 0);
class CreateStockTakeRequest {
    tenantId;
    hotelId;
    warehouseId;
    category;
    takeDate;
    notes;
    performedBy;
    performedByName;
    items;
}
exports.CreateStockTakeRequest = CreateStockTakeRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockTakeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockTakeRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockTakeRequest.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.ItemCategory }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ItemCategory),
    __metadata("design:type", String)
], CreateStockTakeRequest.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateStockTakeRequest.prototype, "takeDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockTakeRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockTakeRequest.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockTakeRequest.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StockTakeItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => StockTakeItemDto),
    __metadata("design:type", Array)
], CreateStockTakeRequest.prototype, "items", void 0);
// ─── Response ───
class StockTakeItemResponse {
    id;
    itemId;
    itemCode;
    itemName;
    unit;
    systemQuantity;
    actualQuantity;
    variance;
    varianceValue;
}
exports.StockTakeItemResponse = StockTakeItemResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeItemResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeItemResponse.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeItemResponse.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeItemResponse.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeItemResponse.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'System stock at time of take' }),
    __metadata("design:type", Number)
], StockTakeItemResponse.prototype, "systemQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Physically counted' }),
    __metadata("design:type", Number)
], StockTakeItemResponse.prototype, "actualQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'actual - system' }),
    __metadata("design:type", Number)
], StockTakeItemResponse.prototype, "variance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'variance × averageCostPrice' }),
    __metadata("design:type", Number)
], StockTakeItemResponse.prototype, "varianceValue", void 0);
class StockTakeResponse {
    id;
    tenantId;
    hotelId;
    takeNumber;
    takeDate;
    category;
    warehouseId;
    warehouseName;
    notes;
    performedBy;
    performedByName;
    status;
    items;
    totalVarianceValue;
    createdAt;
    approvedBy;
    approvedByName;
    approvedAt;
}
exports.StockTakeResponse = StockTakeResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "takeNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "takeDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.ItemCategory }),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "warehouseName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StockTakeItemResponse] }),
    __metadata("design:type", Array)
], StockTakeResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StockTakeResponse.prototype, "totalVarianceValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "approvedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTakeResponse.prototype, "approvedAt", void 0);
// ─── Find ───
class FindStockTakesRequest {
    tenantId;
    hotelId;
    status;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindStockTakesRequest = FindStockTakesRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindStockTakesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindStockTakesRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindStockTakesRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindStockTakesRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindStockTakesRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FindStockTakesRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FindStockTakesRequest.prototype, "limit", void 0);
class FindOneStockTakeRequest {
    tenantId;
    hotelId;
    id;
}
exports.FindOneStockTakeRequest = FindOneStockTakeRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockTakeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockTakeRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockTakeRequest.prototype, "id", void 0);
// ─── Approve ───
class ApproveStockTakeRequest {
    tenantId;
    hotelId;
    id;
    approvedBy;
    approvedByName;
}
exports.ApproveStockTakeRequest = ApproveStockTakeRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveStockTakeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveStockTakeRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveStockTakeRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApproveStockTakeRequest.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveStockTakeRequest.prototype, "approvedByName", void 0);
//# sourceMappingURL=stock-take.nats.js.map