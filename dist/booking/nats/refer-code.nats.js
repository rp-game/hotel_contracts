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
exports.DeleteReferCodeResponse = exports.ReferCodeListResponse = exports.ReferCodeResponse = exports.DeleteReferCodeRequest = exports.FindReferCodesRequest = exports.CreateReferCodeRequest = exports.LookupReferCodeResponse = exports.LookupReferCodeRequest = exports.ReferCodeType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var ReferCodeType;
(function (ReferCodeType) {
    ReferCodeType["CORPORATE"] = "CORPORATE";
    ReferCodeType["TRAVEL_AGENT"] = "TRAVEL_AGENT";
    ReferCodeType["STAFF"] = "STAFF";
    ReferCodeType["AFFILIATE"] = "AFFILIATE";
})(ReferCodeType || (exports.ReferCodeType = ReferCodeType = {}));
// --- Lookup ---
class LookupReferCodeRequest {
    tenantId;
    code;
}
exports.LookupReferCodeRequest = LookupReferCodeRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], LookupReferCodeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Code to lookup' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LookupReferCodeRequest.prototype, "code", void 0);
class LookupReferCodeResponse {
    code;
    referenceType;
    referenceId;
    displayName;
    isActive;
}
exports.LookupReferCodeResponse = LookupReferCodeResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LookupReferCodeResponse.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ReferCodeType }),
    __metadata("design:type", String)
], LookupReferCodeResponse.prototype, "referenceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LookupReferCodeResponse.prototype, "referenceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LookupReferCodeResponse.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], LookupReferCodeResponse.prototype, "isActive", void 0);
// --- CRUD ---
class CreateReferCodeRequest {
    tenantId;
    code;
    referenceType;
    referenceId;
    displayName;
}
exports.CreateReferCodeRequest = CreateReferCodeRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateReferCodeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique code (e.g., VINAMILK, SP-012)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReferCodeRequest.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Entity type', enum: ReferCodeType }),
    (0, class_validator_1.IsEnum)(ReferCodeType),
    __metadata("design:type", String)
], CreateReferCodeRequest.prototype, "referenceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Entity UUID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateReferCodeRequest.prototype, "referenceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Display name for quick reference' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReferCodeRequest.prototype, "displayName", void 0);
class FindReferCodesRequest {
    tenantId;
    referenceType;
    referenceId;
    search;
    page;
    limit;
}
exports.FindReferCodesRequest = FindReferCodesRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindReferCodesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ReferCodeType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(ReferCodeType),
    __metadata("design:type", String)
], FindReferCodesRequest.prototype, "referenceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindReferCodesRequest.prototype, "referenceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindReferCodesRequest.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FindReferCodesRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 50 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FindReferCodesRequest.prototype, "limit", void 0);
class DeleteReferCodeRequest {
    tenantId;
    id;
}
exports.DeleteReferCodeRequest = DeleteReferCodeRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteReferCodeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteReferCodeRequest.prototype, "id", void 0);
// --- Responses ---
class ReferCodeResponse {
    id;
    tenantId;
    code;
    referenceType;
    referenceId;
    displayName;
    isActive;
    isAutoGenerated;
    createdAt;
}
exports.ReferCodeResponse = ReferCodeResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReferCodeResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReferCodeResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReferCodeResponse.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ReferCodeType }),
    __metadata("design:type", String)
], ReferCodeResponse.prototype, "referenceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReferCodeResponse.prototype, "referenceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReferCodeResponse.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ReferCodeResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ReferCodeResponse.prototype, "isAutoGenerated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ReferCodeResponse.prototype, "createdAt", void 0);
class ReferCodeListResponse {
    referCodes;
    total;
    page;
    limit;
    totalPages;
}
exports.ReferCodeListResponse = ReferCodeListResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ReferCodeResponse] }),
    __metadata("design:type", Array)
], ReferCodeListResponse.prototype, "referCodes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReferCodeListResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReferCodeListResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReferCodeListResponse.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReferCodeListResponse.prototype, "totalPages", void 0);
class DeleteReferCodeResponse {
    deleted;
}
exports.DeleteReferCodeResponse = DeleteReferCodeResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], DeleteReferCodeResponse.prototype, "deleted", void 0);
//# sourceMappingURL=refer-code.nats.js.map