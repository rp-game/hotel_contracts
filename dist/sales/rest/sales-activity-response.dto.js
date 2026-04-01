"use strict";
/**
 * Sales Activity Response DTOs
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
exports.SalesActivityListResponseDto = exports.SalesActivityResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SalesActivityResponseDto {
    id;
    hotelId;
    salesPersonId;
    salesPersonName;
    activityType;
    subject;
    description;
    activityDate;
    corporateAccountId;
    travelAgentId;
    leadId;
    contactName;
    outcome;
    followUpDate;
    status;
    createdByName;
    createdAt;
    updatedAt;
}
exports.SalesActivityResponseDto = SalesActivityResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity ID' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person ID' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales person name' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity type' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "activityType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subject/title' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity date' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "activityDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Corporate account ID' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Travel agent ID' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "travelAgentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales lead ID' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "leadId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact person name' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "contactName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Outcome/result' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "outcome", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Follow-up date' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "followUpDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user name' }),
    __metadata("design:type", String)
], SalesActivityResponseDto.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], SalesActivityResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", Date)
], SalesActivityResponseDto.prototype, "updatedAt", void 0);
class SalesActivityListResponseDto {
    activities;
    total;
    page;
    limit;
    totalPages;
}
exports.SalesActivityListResponseDto = SalesActivityListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales activities', type: [SalesActivityResponseDto] }),
    __metadata("design:type", Array)
], SalesActivityListResponseDto.prototype, "activities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], SalesActivityListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page number' }),
    __metadata("design:type", Number)
], SalesActivityListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], SalesActivityListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total pages' }),
    __metadata("design:type", Number)
], SalesActivityListResponseDto.prototype, "totalPages", void 0);
//# sourceMappingURL=sales-activity-response.dto.js.map