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
exports.FindOneGoodsReceiptRequest = exports.FindGoodsReceiptsRequest = exports.GoodsReceiptResponse = exports.GoodsReceiptItemResponse = exports.CreateGoodsReceiptRequest = exports.GoodsReceiptItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
// ─── Create Goods Receipt ───
class GoodsReceiptItemDto {
    itemId;
    quantity;
    purchaseQty;
    unitPrice;
    expiryDate;
}
exports.GoodsReceiptItemDto = GoodsReceiptItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GoodsReceiptItemDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Base unit qty. Required if purchaseQty is not provided.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.0001),
    __metadata("design:type", Number)
], GoodsReceiptItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Qty in purchase unit (e.g. 3 thùng). Auto-converted to base units by service. Required if quantity is not provided.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.0001),
    __metadata("design:type", Number)
], GoodsReceiptItemDto.prototype, "purchaseQty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price per purchase unit when purchaseQty is used, or price per base unit otherwise' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], GoodsReceiptItemDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Expiry date for perishable items' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GoodsReceiptItemDto.prototype, "expiryDate", void 0);
class CreateGoodsReceiptRequest {
    tenantId;
    hotelId;
    supplierId;
    receiptDate;
    vatRate;
    invoiceSerial;
    invoiceNumber;
    invoiceDate;
    photoUrl;
    notes;
    receivedBy;
    receivedByName;
    warehouseId;
    items;
}
exports.CreateGoodsReceiptRequest = CreateGoodsReceiptRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "supplierId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "receiptDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'VAT rate: 0, 8, or 10 (%)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGoodsReceiptRequest.prototype, "vatRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Supplier invoice serial' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "invoiceSerial", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Supplier invoice number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "invoiceNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Supplier invoice date' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "invoiceDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "photoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "receivedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff name (denormalized)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "receivedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target warehouse (auto-resolves to default if not provided)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGoodsReceiptRequest.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [GoodsReceiptItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => GoodsReceiptItemDto),
    __metadata("design:type", Array)
], CreateGoodsReceiptRequest.prototype, "items", void 0);
class GoodsReceiptItemResponse {
    id;
    itemId;
    itemName;
    itemCode;
    quantity;
    purchaseQty;
    purchaseUnit;
    unitPrice;
    totalPrice;
    expiryDate;
}
exports.GoodsReceiptItemResponse = GoodsReceiptItemResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsReceiptItemResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsReceiptItemResponse.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptItemResponse.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptItemResponse.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GoodsReceiptItemResponse.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Original purchase qty (e.g. 3 thùng)' }),
    __metadata("design:type", Number)
], GoodsReceiptItemResponse.prototype, "purchaseQty", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Purchase unit at time of receipt (e.g. "thùng")' }),
    __metadata("design:type", String)
], GoodsReceiptItemResponse.prototype, "purchaseUnit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GoodsReceiptItemResponse.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GoodsReceiptItemResponse.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptItemResponse.prototype, "expiryDate", void 0);
class GoodsReceiptResponse {
    id;
    tenantId;
    hotelId;
    receiptNumber;
    supplierId;
    supplierName;
    receiptDate;
    totalAmount;
    vatRate;
    vatAmount;
    invoiceSerial;
    invoiceNumber;
    invoiceDate;
    photoUrl;
    notes;
    receivedBy;
    receivedByName;
    warehouseId;
    warehouseName;
    items;
    createdAt;
}
exports.GoodsReceiptResponse = GoodsReceiptResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "receiptNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "supplierId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "supplierName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "receiptDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GoodsReceiptResponse.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], GoodsReceiptResponse.prototype, "vatRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], GoodsReceiptResponse.prototype, "vatAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "invoiceSerial", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "invoiceNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "invoiceDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "photoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "receivedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "receivedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GoodsReceiptResponse.prototype, "warehouseName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [GoodsReceiptItemResponse] }),
    __metadata("design:type", Array)
], GoodsReceiptResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], GoodsReceiptResponse.prototype, "createdAt", void 0);
// ─── Find Goods Receipts ───
class FindGoodsReceiptsRequest {
    tenantId;
    hotelId;
    dateFrom;
    dateTo;
    supplierId;
    page;
    limit;
}
exports.FindGoodsReceiptsRequest = FindGoodsReceiptsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindGoodsReceiptsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindGoodsReceiptsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindGoodsReceiptsRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindGoodsReceiptsRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindGoodsReceiptsRequest.prototype, "supplierId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindGoodsReceiptsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindGoodsReceiptsRequest.prototype, "limit", void 0);
// ─── Find One Goods Receipt ───
class FindOneGoodsReceiptRequest {
    tenantId;
    hotelId;
    id;
}
exports.FindOneGoodsReceiptRequest = FindOneGoodsReceiptRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneGoodsReceiptRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneGoodsReceiptRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneGoodsReceiptRequest.prototype, "id", void 0);
//# sourceMappingURL=goods-receipt.nats.js.map