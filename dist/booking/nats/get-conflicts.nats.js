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
exports.ConflictListResponseDto = exports.GetConflictsNatsResponseData = exports.ConflictPaginationData = exports.ConflictNatsData = exports.GetConflictsNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const conflict_enums_1 = require("../types/conflict-enums");
class GetConflictsNatsRequest {
    tenantId;
    hotelId;
    status;
    severity;
    conflictType;
    roomId;
    bookingId;
    startDate;
    endDate;
    page;
    limit;
}
exports.GetConflictsNatsRequest = GetConflictsNatsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetConflictsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetConflictsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: conflict_enums_1.ConflictStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(conflict_enums_1.ConflictStatus),
    __metadata("design:type", String)
], GetConflictsNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: conflict_enums_1.ConflictSeverity }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(conflict_enums_1.ConflictSeverity),
    __metadata("design:type", String)
], GetConflictsNatsRequest.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: conflict_enums_1.ConflictType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(conflict_enums_1.ConflictType),
    __metadata("design:type", String)
], GetConflictsNatsRequest.prototype, "conflictType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetConflictsNatsRequest.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetConflictsNatsRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetConflictsNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetConflictsNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1, minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetConflictsNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20, minimum: 1, maximum: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetConflictsNatsRequest.prototype, "limit", void 0);
class ConflictNatsData {
    id;
    tenantId;
    hotelId;
    conflictType;
    severity;
    status;
    roomId;
    roomNumber;
    conflictDate;
    primaryBookingId;
    conflictingBookingIds;
    totalGuestsAffected;
    hoursUntilImpact;
    detectedBy;
    detectionMethod;
    resolutionType;
    resolvedAt;
    resolvedBy;
    notes;
}
exports.ConflictNatsData = ConflictNatsData;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: conflict_enums_1.ConflictType }),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "conflictType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: conflict_enums_1.ConflictSeverity }),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: conflict_enums_1.ConflictStatus }),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "conflictDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "primaryBookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], ConflictNatsData.prototype, "conflictingBookingIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConflictNatsData.prototype, "totalGuestsAffected", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConflictNatsData.prototype, "hoursUntilImpact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "detectedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "detectionMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: conflict_enums_1.ResolutionType, nullable: true }),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "resolutionType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true }),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "resolvedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true }),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "resolvedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true }),
    __metadata("design:type", String)
], ConflictNatsData.prototype, "notes", void 0);
class ConflictPaginationData {
    page;
    limit;
    total;
    totalPages;
}
exports.ConflictPaginationData = ConflictPaginationData;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConflictPaginationData.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConflictPaginationData.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConflictPaginationData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConflictPaginationData.prototype, "totalPages", void 0);
class GetConflictsNatsResponseData {
    data;
    pagination;
}
exports.GetConflictsNatsResponseData = GetConflictsNatsResponseData;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ConflictNatsData] }),
    (0, class_transformer_1.Type)(() => ConflictNatsData),
    __metadata("design:type", Array)
], GetConflictsNatsResponseData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ConflictPaginationData }),
    (0, class_transformer_1.Type)(() => ConflictPaginationData),
    __metadata("design:type", ConflictPaginationData)
], GetConflictsNatsResponseData.prototype, "pagination", void 0);
class ConflictListResponseDto {
    data;
    total;
    page;
    limit;
}
exports.ConflictListResponseDto = ConflictListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ConflictNatsData] }),
    (0, class_transformer_1.Type)(() => ConflictNatsData),
    __metadata("design:type", Array)
], ConflictListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConflictListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConflictListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConflictListResponseDto.prototype, "limit", void 0);
//# sourceMappingURL=get-conflicts.nats.js.map