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
exports.ExpiryAlertsResponse = exports.ExpiryAlertItem = exports.GetExpiryAlertsRequest = exports.LowStockAlertsResponse = exports.LowStockAlertItem = exports.GetLowStockAlertsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ─── Low Stock Alerts ───
class GetLowStockAlertsRequest {
    tenantId;
    hotelId;
}
exports.GetLowStockAlertsRequest = GetLowStockAlertsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetLowStockAlertsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetLowStockAlertsRequest.prototype, "hotelId", void 0);
class LowStockAlertItem {
    itemId;
    itemCode;
    itemName;
    category;
    currentStock;
    reorderLevel;
    unit;
    supplierName;
    supplierPhone;
}
exports.LowStockAlertItem = LowStockAlertItem;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LowStockAlertItem.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LowStockAlertItem.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LowStockAlertItem.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LowStockAlertItem.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LowStockAlertItem.prototype, "currentStock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LowStockAlertItem.prototype, "reorderLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LowStockAlertItem.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Preferred supplier name' }),
    __metadata("design:type", String)
], LowStockAlertItem.prototype, "supplierName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Preferred supplier phone' }),
    __metadata("design:type", String)
], LowStockAlertItem.prototype, "supplierPhone", void 0);
class LowStockAlertsResponse {
    items;
    totalCount;
}
exports.LowStockAlertsResponse = LowStockAlertsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [LowStockAlertItem] }),
    __metadata("design:type", Array)
], LowStockAlertsResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LowStockAlertsResponse.prototype, "totalCount", void 0);
// ─── Expiry Alerts ───
class GetExpiryAlertsRequest {
    tenantId;
    hotelId;
}
exports.GetExpiryAlertsRequest = GetExpiryAlertsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetExpiryAlertsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetExpiryAlertsRequest.prototype, "hotelId", void 0);
class ExpiryAlertItem {
    itemId;
    itemCode;
    itemName;
    expiryDate;
    quantity;
    goodsReceiptId;
    goodsReceiptNumber;
    daysUntilExpiry;
}
exports.ExpiryAlertItem = ExpiryAlertItem;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExpiryAlertItem.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExpiryAlertItem.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExpiryAlertItem.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExpiryAlertItem.prototype, "expiryDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ExpiryAlertItem.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExpiryAlertItem.prototype, "goodsReceiptId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExpiryAlertItem.prototype, "goodsReceiptNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Days until expiry (negative = already expired)' }),
    __metadata("design:type", Number)
], ExpiryAlertItem.prototype, "daysUntilExpiry", void 0);
class ExpiryAlertsResponse {
    items;
    totalCount;
}
exports.ExpiryAlertsResponse = ExpiryAlertsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ExpiryAlertItem] }),
    __metadata("design:type", Array)
], ExpiryAlertsResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ExpiryAlertsResponse.prototype, "totalCount", void 0);
//# sourceMappingURL=alerts.nats.js.map