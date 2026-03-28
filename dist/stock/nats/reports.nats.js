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
exports.CostPerRoomNightResponse = exports.CostPerRoomNightCategoryItem = exports.CostPerRoomNightRequest = exports.LowStockReportResponse = exports.LowStockReportItem = exports.LowStockReportRequest = exports.InOutBalanceResponse = exports.InOutBalanceCategoryGroup = exports.InOutBalanceItemRow = exports.InOutBalanceRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums");
// ─── In-Out Balance Report (Bao cao xuat nhap ton) ───
class InOutBalanceRequest {
    tenantId;
    hotelId;
    dateFrom;
    dateTo;
    category;
    warehouseId;
}
exports.InOutBalanceRequest = InOutBalanceRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], InOutBalanceRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], InOutBalanceRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], InOutBalanceRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], InOutBalanceRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.ItemCategory }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ItemCategory),
    __metadata("design:type", String)
], InOutBalanceRequest.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter report by specific warehouse' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InOutBalanceRequest.prototype, "warehouseId", void 0);
class InOutBalanceItemRow {
    itemId;
    itemCode;
    itemName;
    unit;
    category;
    openingStock;
    totalIn;
    totalOut;
    closingStock;
    closingValue;
    averageCostPrice;
}
exports.InOutBalanceItemRow = InOutBalanceItemRow;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InOutBalanceItemRow.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InOutBalanceItemRow.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InOutBalanceItemRow.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InOutBalanceItemRow.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.ItemCategory }),
    __metadata("design:type", String)
], InOutBalanceItemRow.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stock at beginning of period' }),
    __metadata("design:type", Number)
], InOutBalanceItemRow.prototype, "openingStock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total quantity received in period' }),
    __metadata("design:type", Number)
], InOutBalanceItemRow.prototype, "totalIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total quantity issued in period' }),
    __metadata("design:type", Number)
], InOutBalanceItemRow.prototype, "totalOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stock at end of period' }),
    __metadata("design:type", Number)
], InOutBalanceItemRow.prototype, "closingStock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Closing value = closingStock x averageCostPrice' }),
    __metadata("design:type", Number)
], InOutBalanceItemRow.prototype, "closingValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], InOutBalanceItemRow.prototype, "averageCostPrice", void 0);
class InOutBalanceCategoryGroup {
    category;
    items;
    categoryTotalValue;
}
exports.InOutBalanceCategoryGroup = InOutBalanceCategoryGroup;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.ItemCategory }),
    __metadata("design:type", String)
], InOutBalanceCategoryGroup.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [InOutBalanceItemRow] }),
    __metadata("design:type", Array)
], InOutBalanceCategoryGroup.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], InOutBalanceCategoryGroup.prototype, "categoryTotalValue", void 0);
class InOutBalanceResponse {
    dateFrom;
    dateTo;
    groups;
    grandTotalValue;
}
exports.InOutBalanceResponse = InOutBalanceResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InOutBalanceResponse.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InOutBalanceResponse.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [InOutBalanceCategoryGroup] }),
    __metadata("design:type", Array)
], InOutBalanceResponse.prototype, "groups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], InOutBalanceResponse.prototype, "grandTotalValue", void 0);
// ─── Low-Stock Report (Canh bao het hang) ───
class LowStockReportRequest {
    tenantId;
    hotelId;
    category;
}
exports.LowStockReportRequest = LowStockReportRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], LowStockReportRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], LowStockReportRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.ItemCategory }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ItemCategory),
    __metadata("design:type", String)
], LowStockReportRequest.prototype, "category", void 0);
class LowStockReportItem {
    itemId;
    itemCode;
    itemName;
    unit;
    category;
    currentStock;
    reorderLevel;
    averageCostPrice;
    stockValue;
    daysOfSupply;
    supplierName;
    supplierPhone;
}
exports.LowStockReportItem = LowStockReportItem;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LowStockReportItem.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LowStockReportItem.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LowStockReportItem.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LowStockReportItem.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.ItemCategory }),
    __metadata("design:type", String)
], LowStockReportItem.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LowStockReportItem.prototype, "currentStock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LowStockReportItem.prototype, "reorderLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LowStockReportItem.prototype, "averageCostPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'currentStock × averageCostPrice' }),
    __metadata("design:type", Number)
], LowStockReportItem.prototype, "stockValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated days of supply based on recent consumption' }),
    __metadata("design:type", Number)
], LowStockReportItem.prototype, "daysOfSupply", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], LowStockReportItem.prototype, "supplierName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], LowStockReportItem.prototype, "supplierPhone", void 0);
class LowStockReportResponse {
    items;
    totalCount;
    totalValue;
}
exports.LowStockReportResponse = LowStockReportResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [LowStockReportItem] }),
    __metadata("design:type", Array)
], LowStockReportResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LowStockReportResponse.prototype, "totalCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total value of low-stock items' }),
    __metadata("design:type", Number)
], LowStockReportResponse.prototype, "totalValue", void 0);
// ─── Cost-per-Room-Night Report (Chi phi vat tu / dem phong) ───
class CostPerRoomNightRequest {
    tenantId;
    hotelId;
    dateFrom;
    dateTo;
    issueType;
}
exports.CostPerRoomNightRequest = CostPerRoomNightRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CostPerRoomNightRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CostPerRoomNightRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CostPerRoomNightRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CostPerRoomNightRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by stock issue type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CostPerRoomNightRequest.prototype, "issueType", void 0);
class CostPerRoomNightCategoryItem {
    issueType;
    totalCost;
    costPerRoomNight;
}
exports.CostPerRoomNightCategoryItem = CostPerRoomNightCategoryItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Issue type (ROOM_AMENITY, MINIBAR_CONSUMPTION, HOUSEKEEPING, etc.)' }),
    __metadata("design:type", String)
], CostPerRoomNightCategoryItem.prototype, "issueType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CostPerRoomNightCategoryItem.prototype, "totalCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], CostPerRoomNightCategoryItem.prototype, "costPerRoomNight", void 0);
class CostPerRoomNightResponse {
    dateFrom;
    dateTo;
    roomNights;
    totalStockCost;
    costPerRoomNight;
    byIssueType;
}
exports.CostPerRoomNightResponse = CostPerRoomNightResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CostPerRoomNightResponse.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CostPerRoomNightResponse.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total occupied room nights in period' }),
    __metadata("design:type", Number)
], CostPerRoomNightResponse.prototype, "roomNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total stock issue cost in period' }),
    __metadata("design:type", Number)
], CostPerRoomNightResponse.prototype, "totalStockCost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'totalStockCost / roomNights' }),
    __metadata("design:type", Number)
], CostPerRoomNightResponse.prototype, "costPerRoomNight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CostPerRoomNightCategoryItem] }),
    __metadata("design:type", Array)
], CostPerRoomNightResponse.prototype, "byIssueType", void 0);
//# sourceMappingURL=reports.nats.js.map