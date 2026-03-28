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
exports.BatchStockIssueResponse = exports.BatchStockIssueRequest = exports.BatchIssueRoomDto = exports.FindOneStockIssueRequest = exports.FindStockIssuesRequest = exports.IssueSupplyKitRequest = exports.StockIssueResponse = exports.StockIssueItemResponse = exports.CreateStockIssueRequest = exports.StockIssueItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../enums");
// ─── Create Stock Issue ───
class StockIssueItemDto {
    itemId;
    quantity;
    chargeToGuest;
    sellingPrice;
    isComplimentary;
}
exports.StockIssueItemDto = StockIssueItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], StockIssueItemDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], StockIssueItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Charge to guest folio' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], StockIssueItemDto.prototype, "chargeToGuest", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Selling price for guest charge' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StockIssueItemDto.prototype, "sellingPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Complimentary (free) for guest' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], StockIssueItemDto.prototype, "isComplimentary", void 0);
class CreateStockIssueRequest {
    tenantId;
    hotelId;
    issueType;
    department;
    bookingId;
    roomId;
    roomNumber;
    issueDate;
    notes;
    issuedBy;
    issuedByName;
    warehouseId;
    forceOverride;
    overrideAuthorizedBy;
    items;
}
exports.CreateStockIssueRequest = CreateStockIssueRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.StockIssueType }),
    (0, class_validator_1.IsEnum)(enums_1.StockIssueType),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "issueType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "issueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "issuedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff name (denormalized)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "issuedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Source warehouse (auto-resolves to default if not provided)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Manager override: allow issue exceeding available stock' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateStockIssueRequest.prototype, "forceOverride", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Manager ID who authorized the override' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockIssueRequest.prototype, "overrideAuthorizedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StockIssueItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => StockIssueItemDto),
    __metadata("design:type", Array)
], CreateStockIssueRequest.prototype, "items", void 0);
class StockIssueItemResponse {
    id;
    itemId;
    itemName;
    itemCode;
    quantity;
    unitCost;
    totalCost;
    chargeToGuest;
    sellingPrice;
    isComplimentary;
}
exports.StockIssueItemResponse = StockIssueItemResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockIssueItemResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockIssueItemResponse.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockIssueItemResponse.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockIssueItemResponse.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StockIssueItemResponse.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StockIssueItemResponse.prototype, "unitCost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StockIssueItemResponse.prototype, "totalCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Boolean)
], StockIssueItemResponse.prototype, "chargeToGuest", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], StockIssueItemResponse.prototype, "sellingPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Boolean)
], StockIssueItemResponse.prototype, "isComplimentary", void 0);
class StockIssueResponse {
    id;
    tenantId;
    hotelId;
    issueNumber;
    issueType;
    department;
    bookingId;
    roomId;
    roomNumber;
    issueDate;
    notes;
    issuedBy;
    issuedByName;
    totalCost;
    warehouseId;
    warehouseName;
    isOverride;
    overrideAuthorizedBy;
    items;
    createdAt;
}
exports.StockIssueResponse = StockIssueResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "issueNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.StockIssueType }),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "issueType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "issueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "issuedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "issuedByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StockIssueResponse.prototype, "totalCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "warehouseName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Manager override was used' }),
    __metadata("design:type", Boolean)
], StockIssueResponse.prototype, "isOverride", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Manager who authorized override' }),
    __metadata("design:type", String)
], StockIssueResponse.prototype, "overrideAuthorizedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StockIssueItemResponse] }),
    __metadata("design:type", Array)
], StockIssueResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], StockIssueResponse.prototype, "createdAt", void 0);
// ─── Issue Supply Kit ───
class IssueSupplyKitRequest {
    tenantId;
    hotelId;
    kitId;
    issuedBy;
    department;
    notes;
}
exports.IssueSupplyKitRequest = IssueSupplyKitRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], IssueSupplyKitRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], IssueSupplyKitRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], IssueSupplyKitRequest.prototype, "kitId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], IssueSupplyKitRequest.prototype, "issuedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueSupplyKitRequest.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueSupplyKitRequest.prototype, "notes", void 0);
// ─── Find Stock Issues ───
class FindStockIssuesRequest {
    tenantId;
    hotelId;
    issueType;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindStockIssuesRequest = FindStockIssuesRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindStockIssuesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindStockIssuesRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.StockIssueType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.StockIssueType),
    __metadata("design:type", String)
], FindStockIssuesRequest.prototype, "issueType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindStockIssuesRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindStockIssuesRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindStockIssuesRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindStockIssuesRequest.prototype, "limit", void 0);
// ─── Find One Stock Issue ───
class FindOneStockIssueRequest {
    tenantId;
    hotelId;
    id;
}
exports.FindOneStockIssueRequest = FindOneStockIssueRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockIssueRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockIssueRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneStockIssueRequest.prototype, "id", void 0);
// ─── Batch Stock Issue (multiple rooms) ───
class BatchIssueRoomDto {
    roomId;
    roomNumber;
    bookingId;
    items;
}
exports.BatchIssueRoomDto = BatchIssueRoomDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BatchIssueRoomDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchIssueRoomDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BatchIssueRoomDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StockIssueItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => StockIssueItemDto),
    __metadata("design:type", Array)
], BatchIssueRoomDto.prototype, "items", void 0);
class BatchStockIssueRequest {
    tenantId;
    hotelId;
    issueType;
    department;
    warehouseId;
    issueDate;
    notes;
    issuedBy;
    issuedByName;
    rooms;
}
exports.BatchStockIssueRequest = BatchStockIssueRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BatchStockIssueRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BatchStockIssueRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.StockIssueType }),
    (0, class_validator_1.IsEnum)(enums_1.StockIssueType),
    __metadata("design:type", String)
], BatchStockIssueRequest.prototype, "issueType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchStockIssueRequest.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BatchStockIssueRequest.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], BatchStockIssueRequest.prototype, "issueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchStockIssueRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BatchStockIssueRequest.prototype, "issuedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchStockIssueRequest.prototype, "issuedByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [BatchIssueRoomDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BatchIssueRoomDto),
    __metadata("design:type", Array)
], BatchStockIssueRequest.prototype, "rooms", void 0);
class BatchStockIssueResponse {
    issueCount;
    issueIds;
    errors;
}
exports.BatchStockIssueResponse = BatchStockIssueResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BatchStockIssueResponse.prototype, "issueCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], BatchStockIssueResponse.prototype, "issueIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    __metadata("design:type", Array)
], BatchStockIssueResponse.prototype, "errors", void 0);
//# sourceMappingURL=stock-issue.nats.js.map