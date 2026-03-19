"use strict";
/**
 * Sales Target Response DTOs
 * Used for Swagger documentation and API responses
 */
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
exports.SalesTargetListResponseDto = exports.SalesTargetResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SalesTargetResponseDto {
    id;
    hotelId;
    salesPersonId;
    salesPersonName;
    year;
    month;
    targetRevenue;
    targetRoomNights;
    targetNewAccounts;
    actualRevenue;
    actualRoomNights;
    actualNewAccounts;
    achievementRate;
    status;
    notes;
    createdByName;
    createdAt;
    updatedAt;
}
exports.SalesTargetResponseDto = SalesTargetResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target ID' }),
    __metadata("design:type", String)
], SalesTargetResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], SalesTargetResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person ID' }),
    __metadata("design:type", String)
], SalesTargetResponseDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person name' }),
    __metadata("design:type", String)
], SalesTargetResponseDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Year' }),
    __metadata("design:type", Number)
], SalesTargetResponseDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Month (1-12)' }),
    __metadata("design:type", Number)
], SalesTargetResponseDto.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target revenue' }),
    __metadata("design:type", Number)
], SalesTargetResponseDto.prototype, "targetRevenue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target room nights' }),
    __metadata("design:type", Number)
], SalesTargetResponseDto.prototype, "targetRoomNights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target new accounts' }),
    __metadata("design:type", Number)
], SalesTargetResponseDto.prototype, "targetNewAccounts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Actual revenue (calculated)' }),
    __metadata("design:type", Number)
], SalesTargetResponseDto.prototype, "actualRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Actual room nights (calculated)' }),
    __metadata("design:type", Number)
], SalesTargetResponseDto.prototype, "actualRoomNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Actual new accounts (calculated)' }),
    __metadata("design:type", Number)
], SalesTargetResponseDto.prototype, "actualNewAccounts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Achievement rate percentage' }),
    __metadata("design:type", Number)
], SalesTargetResponseDto.prototype, "achievementRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status' }),
    __metadata("design:type", String)
], SalesTargetResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], SalesTargetResponseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user name' }),
    __metadata("design:type", String)
], SalesTargetResponseDto.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], SalesTargetResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", Date)
], SalesTargetResponseDto.prototype, "updatedAt", void 0);
class SalesTargetListResponseDto {
    targets;
    total;
}
exports.SalesTargetListResponseDto = SalesTargetListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales targets', type: [SalesTargetResponseDto] }),
    __metadata("design:type", Array)
], SalesTargetListResponseDto.prototype, "targets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], SalesTargetListResponseDto.prototype, "total", void 0);
//# sourceMappingURL=sales-target-response.dto.js.map