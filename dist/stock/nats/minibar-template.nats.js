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
exports.MinibarTemplateResponse = exports.MinibarTemplateItemResponse = exports.DeleteMinibarTemplateRequest = exports.FindOneMinibarTemplateRequest = exports.FindMinibarTemplatesRequest = exports.UpdateMinibarTemplateRequest = exports.CreateMinibarTemplateRequest = exports.MinibarTemplateItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
// ─── Template Items ───
class MinibarTemplateItemDto {
    itemId;
    standardQuantity;
    sellingPrice;
}
exports.MinibarTemplateItemDto = MinibarTemplateItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], MinibarTemplateItemDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Standard quantity per room' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], MinibarTemplateItemDto.prototype, "standardQuantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Override selling price' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MinibarTemplateItemDto.prototype, "sellingPrice", void 0);
// ─── Create ───
class CreateMinibarTemplateRequest {
    tenantId;
    hotelId;
    name;
    roomTypeId;
    description;
    items;
}
exports.CreateMinibarTemplateRequest = CreateMinibarTemplateRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateMinibarTemplateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateMinibarTemplateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMinibarTemplateRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateMinibarTemplateRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMinibarTemplateRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [MinibarTemplateItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MinibarTemplateItemDto),
    __metadata("design:type", Array)
], CreateMinibarTemplateRequest.prototype, "items", void 0);
// ─── Update ───
class UpdateMinibarTemplateRequest {
    tenantId;
    hotelId;
    id;
    name;
    description;
    isActive;
    items;
}
exports.UpdateMinibarTemplateRequest = UpdateMinibarTemplateRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateMinibarTemplateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateMinibarTemplateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateMinibarTemplateRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMinibarTemplateRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMinibarTemplateRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateMinibarTemplateRequest.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [MinibarTemplateItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MinibarTemplateItemDto),
    __metadata("design:type", Array)
], UpdateMinibarTemplateRequest.prototype, "items", void 0);
// ─── Find / Delete ───
class FindMinibarTemplatesRequest {
    tenantId;
    hotelId;
    roomTypeId;
    isActive;
}
exports.FindMinibarTemplatesRequest = FindMinibarTemplatesRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindMinibarTemplatesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindMinibarTemplatesRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindMinibarTemplatesRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FindMinibarTemplatesRequest.prototype, "isActive", void 0);
class FindOneMinibarTemplateRequest {
    tenantId;
    hotelId;
    id;
}
exports.FindOneMinibarTemplateRequest = FindOneMinibarTemplateRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneMinibarTemplateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneMinibarTemplateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneMinibarTemplateRequest.prototype, "id", void 0);
class DeleteMinibarTemplateRequest {
    tenantId;
    hotelId;
    id;
}
exports.DeleteMinibarTemplateRequest = DeleteMinibarTemplateRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteMinibarTemplateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteMinibarTemplateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteMinibarTemplateRequest.prototype, "id", void 0);
// ─── Response ───
class MinibarTemplateItemResponse {
    id;
    itemId;
    itemCode;
    itemName;
    unit;
    standardQuantity;
    sellingPrice;
}
exports.MinibarTemplateItemResponse = MinibarTemplateItemResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateItemResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateItemResponse.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateItemResponse.prototype, "itemCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateItemResponse.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateItemResponse.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MinibarTemplateItemResponse.prototype, "standardQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MinibarTemplateItemResponse.prototype, "sellingPrice", void 0);
class MinibarTemplateResponse {
    id;
    tenantId;
    hotelId;
    name;
    roomTypeId;
    roomTypeName;
    description;
    isActive;
    items;
    createdAt;
}
exports.MinibarTemplateResponse = MinibarTemplateResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateResponse.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], MinibarTemplateResponse.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], MinibarTemplateResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], MinibarTemplateResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [MinibarTemplateItemResponse] }),
    __metadata("design:type", Array)
], MinibarTemplateResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MinibarTemplateResponse.prototype, "createdAt", void 0);
//# sourceMappingURL=minibar-template.nats.js.map