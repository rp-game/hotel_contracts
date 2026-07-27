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
exports.GetZaloTemplateSampleDataNatsResponse = exports.GetZaloTemplateSampleDataNatsRequest = exports.GetZaloTemplateDetailNatsResponse = exports.ZaloTemplateDetailDto = exports.ZaloTemplateButtonDto = exports.ZaloTemplateParamDto = exports.GetZaloTemplateDetailNatsRequest = exports.ListZaloTemplatesNatsResponse = exports.ZaloTemplateListItemDto = exports.ListZaloTemplatesNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ============= ZALO TEMPLATE LIST =============
class ListZaloTemplatesNatsRequest {
    tenantId;
    hotelId;
    offset;
    limit;
    status;
}
exports.ListZaloTemplatesNatsRequest = ListZaloTemplatesNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListZaloTemplatesNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListZaloTemplatesNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Offset for pagination', default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ListZaloTemplatesNatsRequest.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Limit for pagination', default: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ListZaloTemplatesNatsRequest.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status (ENABLE, PENDING_REVIEW, REJECT, DISABLE)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListZaloTemplatesNatsRequest.prototype, "status", void 0);
class ZaloTemplateListItemDto {
    templateId;
    templateName;
    createdTime;
    status;
    templateQuality;
}
exports.ZaloTemplateListItemDto = ZaloTemplateListItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zalo template ID' }),
    __metadata("design:type", Number)
], ZaloTemplateListItemDto.prototype, "templateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template name' }),
    __metadata("design:type", String)
], ZaloTemplateListItemDto.prototype, "templateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ms)' }),
    __metadata("design:type", Number)
], ZaloTemplateListItemDto.prototype, "createdTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template status (ENABLE, PENDING_REVIEW, REJECT, DISABLE)' }),
    __metadata("design:type", String)
], ZaloTemplateListItemDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Template quality rating' }),
    __metadata("design:type", String)
], ZaloTemplateListItemDto.prototype, "templateQuality", void 0);
class ListZaloTemplatesNatsResponse {
    data;
    total;
}
exports.ListZaloTemplatesNatsResponse = ListZaloTemplatesNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template list', type: [ZaloTemplateListItemDto] }),
    __metadata("design:type", Array)
], ListZaloTemplatesNatsResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], ListZaloTemplatesNatsResponse.prototype, "total", void 0);
// ============= ZALO TEMPLATE DETAIL =============
class GetZaloTemplateDetailNatsRequest {
    tenantId;
    hotelId;
    templateId;
}
exports.GetZaloTemplateDetailNatsRequest = GetZaloTemplateDetailNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetZaloTemplateDetailNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetZaloTemplateDetailNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zalo template ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetZaloTemplateDetailNatsRequest.prototype, "templateId", void 0);
class ZaloTemplateParamDto {
    name;
    require;
    type;
    maxLength;
    minLength;
    acceptedValues;
}
exports.ZaloTemplateParamDto = ZaloTemplateParamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Parameter name' }),
    __metadata("design:type", String)
], ZaloTemplateParamDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the parameter is required' }),
    __metadata("design:type", Boolean)
], ZaloTemplateParamDto.prototype, "require", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Parameter type' }),
    __metadata("design:type", String)
], ZaloTemplateParamDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Max length' }),
    __metadata("design:type", Number)
], ZaloTemplateParamDto.prototype, "maxLength", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Min length' }),
    __metadata("design:type", Number)
], ZaloTemplateParamDto.prototype, "minLength", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Accepted values' }),
    __metadata("design:type", String)
], ZaloTemplateParamDto.prototype, "acceptedValues", void 0);
class ZaloTemplateButtonDto {
    title;
    type;
    payload;
}
exports.ZaloTemplateButtonDto = ZaloTemplateButtonDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Button title' }),
    __metadata("design:type", String)
], ZaloTemplateButtonDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Button type (1=URL, 2=Phone, 3=Deeplink)' }),
    __metadata("design:type", Number)
], ZaloTemplateButtonDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Button payload/URL' }),
    __metadata("design:type", String)
], ZaloTemplateButtonDto.prototype, "payload", void 0);
class ZaloTemplateDetailDto {
    templateId;
    templateName;
    status;
    listParams;
    listButtons;
    previewUrl;
    templateTag;
    price;
    timeout;
}
exports.ZaloTemplateDetailDto = ZaloTemplateDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template ID' }),
    __metadata("design:type", Number)
], ZaloTemplateDetailDto.prototype, "templateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template name' }),
    __metadata("design:type", String)
], ZaloTemplateDetailDto.prototype, "templateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template status' }),
    __metadata("design:type", String)
], ZaloTemplateDetailDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Template parameters', type: [ZaloTemplateParamDto] }),
    __metadata("design:type", Array)
], ZaloTemplateDetailDto.prototype, "listParams", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Template buttons/CTAs', type: [ZaloTemplateButtonDto] }),
    __metadata("design:type", Array)
], ZaloTemplateDetailDto.prototype, "listButtons", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Preview URL' }),
    __metadata("design:type", String)
], ZaloTemplateDetailDto.prototype, "previewUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Template tag/category' }),
    __metadata("design:type", String)
], ZaloTemplateDetailDto.prototype, "templateTag", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Price per phone number (VND)' }),
    __metadata("design:type", Number)
], ZaloTemplateDetailDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Timeout in seconds' }),
    __metadata("design:type", Number)
], ZaloTemplateDetailDto.prototype, "timeout", void 0);
class GetZaloTemplateDetailNatsResponse {
    data;
}
exports.GetZaloTemplateDetailNatsResponse = GetZaloTemplateDetailNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template detail', type: ZaloTemplateDetailDto }),
    __metadata("design:type", ZaloTemplateDetailDto)
], GetZaloTemplateDetailNatsResponse.prototype, "data", void 0);
// ============= ZALO TEMPLATE SAMPLE DATA =============
class GetZaloTemplateSampleDataNatsRequest {
    tenantId;
    hotelId;
    templateId;
}
exports.GetZaloTemplateSampleDataNatsRequest = GetZaloTemplateSampleDataNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetZaloTemplateSampleDataNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetZaloTemplateSampleDataNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zalo template ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetZaloTemplateSampleDataNatsRequest.prototype, "templateId", void 0);
class GetZaloTemplateSampleDataNatsResponse {
    data;
}
exports.GetZaloTemplateSampleDataNatsResponse = GetZaloTemplateSampleDataNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sample template data', type: Object }),
    __metadata("design:type", Object)
], GetZaloTemplateSampleDataNatsResponse.prototype, "data", void 0);
//# sourceMappingURL=zalo-template.nats.js.map