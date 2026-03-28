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
exports.MinibarCheckResponse = exports.MinibarRestockSuggestion = exports.MinibarChargedItem = exports.SubmitMinibarCheckRequest = exports.MinibarCheckItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
// ─── Minibar Check (Submit consumed items) ───
class MinibarCheckItemDto {
    itemId;
    consumedQty;
    isComplimentary;
}
exports.MinibarCheckItemDto = MinibarCheckItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stock item ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], MinibarCheckItemDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity consumed' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], MinibarCheckItemDto.prototype, "consumedQty", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Complimentary (free for guest)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], MinibarCheckItemDto.prototype, "isComplimentary", void 0);
class SubmitMinibarCheckRequest {
    tenantId;
    hotelId;
    roomId;
    roomNumber;
    bookingId;
    warehouseId;
    items;
    checkedBy;
    checkedByName;
}
exports.SubmitMinibarCheckRequest = SubmitMinibarCheckRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SubmitMinibarCheckRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SubmitMinibarCheckRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SubmitMinibarCheckRequest.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number (denormalized)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitMinibarCheckRequest.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking ID for guest charge' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SubmitMinibarCheckRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Warehouse to deduct from (auto-resolves to default)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SubmitMinibarCheckRequest.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [MinibarCheckItemDto], description: 'Consumed items' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MinibarCheckItemDto),
    __metadata("design:type", Array)
], SubmitMinibarCheckRequest.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff who performed the check' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SubmitMinibarCheckRequest.prototype, "checkedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff name (denormalized)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitMinibarCheckRequest.prototype, "checkedByName", void 0);
// ─── Response ───
class MinibarChargedItem {
    itemId;
    itemName;
    quantity;
    sellingPrice;
    totalCharge;
    isComplimentary;
}
exports.MinibarChargedItem = MinibarChargedItem;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarChargedItem.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarChargedItem.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MinibarChargedItem.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MinibarChargedItem.prototype, "sellingPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MinibarChargedItem.prototype, "totalCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], MinibarChargedItem.prototype, "isComplimentary", void 0);
class MinibarRestockSuggestion {
    itemId;
    itemName;
    consumedQty;
    standardQty;
    suggestedRestockQty;
}
exports.MinibarRestockSuggestion = MinibarRestockSuggestion;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarRestockSuggestion.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarRestockSuggestion.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MinibarRestockSuggestion.prototype, "consumedQty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MinibarRestockSuggestion.prototype, "standardQty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MinibarRestockSuggestion.prototype, "suggestedRestockQty", void 0);
class MinibarCheckResponse {
    issueId;
    chargedItems;
    totalCharged;
    bookingChargeSuccess;
    restockSuggestions;
}
exports.MinibarCheckResponse = MinibarCheckResponse;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Stock issue ID created' }),
    __metadata("design:type", String)
], MinibarCheckResponse.prototype, "issueId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [MinibarChargedItem] }),
    __metadata("design:type", Array)
], MinibarCheckResponse.prototype, "chargedItems", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount charged to guest' }),
    __metadata("design:type", Number)
], MinibarCheckResponse.prototype, "totalCharged", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether booking charge was successful' }),
    __metadata("design:type", Boolean)
], MinibarCheckResponse.prototype, "bookingChargeSuccess", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [MinibarRestockSuggestion], description: 'Restock suggestions based on minibar template' }),
    __metadata("design:type", Array)
], MinibarCheckResponse.prototype, "restockSuggestions", void 0);
//# sourceMappingURL=minibar.nats.js.map