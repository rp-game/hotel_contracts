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
exports.FindOneStockTransferRequest = exports.FindStockTransfersRequest = exports.StockTransferResponse = exports.StockTransferItemResponse = exports.CreateStockTransferRequest = exports.StockTransferItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
// ─── Create Stock Transfer ───
class StockTransferItemDto {
    itemId;
    quantity;
}
exports.StockTransferItemDto = StockTransferItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], StockTransferItemDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity to transfer (base units)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.0001),
    __metadata("design:type", Number)
], StockTransferItemDto.prototype, "quantity", void 0);
class CreateStockTransferRequest {
    tenantId;
    hotelId;
    fromWarehouseId;
    toWarehouseId;
    transferDate;
    notes;
    transferredBy;
    transferredByName;
    items;
}
exports.CreateStockTransferRequest = CreateStockTransferRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockTransferRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockTransferRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Source warehouse' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockTransferRequest.prototype, "fromWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Destination warehouse' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockTransferRequest.prototype, "toWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateStockTransferRequest.prototype, "transferDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockTransferRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockTransferRequest.prototype, "transferredBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff name (denormalized)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockTransferRequest.prototype, "transferredByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StockTransferItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => StockTransferItemDto),
    __metadata("design:type", Array)
], CreateStockTransferRequest.prototype, "items", void 0);
// ─── Response Types ───
class StockTransferItemResponse {
    id;
    itemId;
    itemName;
    itemCode;
    itemUnit;
    quantity;
    unitCost;
}
exports.StockTransferItemResponse = StockTransferItemResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTransferItemResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTransferItemResponse.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTransferItemResponse.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTransferItemResponse.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTransferItemResponse.prototype, "itemUnit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StockTransferItemResponse.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'WAC of source warehouse at time of transfer' }),
    __metadata("design:type", Number)
], StockTransferItemResponse.prototype, "unitCost", void 0);
class StockTransferResponse {
    id;
    tenantId;
    hotelId;
    transferNumber;
    fromWarehouseId;
    fromWarehouseName;
    toWarehouseId;
    toWarehouseName;
    transferDate;
    notes;
    transferredBy;
    transferredByName;
    items;
    createdAt;
}
exports.StockTransferResponse = StockTransferResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "transferNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "fromWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "fromWarehouseName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "toWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "toWarehouseName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "transferDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "transferredBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockTransferResponse.prototype, "transferredByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StockTransferItemResponse] }),
    __metadata("design:type", Array)
], StockTransferResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], StockTransferResponse.prototype, "createdAt", void 0);
// ─── Find Stock Transfers ───
class FindStockTransfersRequest {
    tenantId;
    hotelId;
    fromWarehouseId;
    toWarehouseId;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindStockTransfersRequest = FindStockTransfersRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindStockTransfersRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindStockTransfersRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindStockTransfersRequest.prototype, "fromWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindStockTransfersRequest.prototype, "toWarehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindStockTransfersRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindStockTransfersRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindStockTransfersRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindStockTransfersRequest.prototype, "limit", void 0);
// ─── Find One Stock Transfer ───
class FindOneStockTransferRequest {
    tenantId;
    hotelId;
    id;
}
exports.FindOneStockTransferRequest = FindOneStockTransferRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockTransferRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockTransferRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockTransferRequest.prototype, "id", void 0);
//# sourceMappingURL=stock-transfer.nats.js.map