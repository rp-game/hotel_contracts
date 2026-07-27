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
exports.SimpleConflictStatsNatsRequest = exports.SimpleDetectConflictsNatsRequest = exports.AnalyzeBookingConflictsNatsRequest = exports.CheckBookingConflictsNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CheckBookingConflictsNatsRequest {
    roomId;
    checkIn;
    checkOut;
}
exports.CheckBookingConflictsNatsRequest = CheckBookingConflictsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID to check' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckBookingConflictsNatsRequest.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-07-01', description: 'Check-in date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckBookingConflictsNatsRequest.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-07-05', description: 'Check-out date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckBookingConflictsNatsRequest.prototype, "checkOut", void 0);
class AnalyzeBookingConflictsNatsRequest {
    hotelId;
    roomId;
    startDate;
    endDate;
}
exports.AnalyzeBookingConflictsNatsRequest = AnalyzeBookingConflictsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnalyzeBookingConflictsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room ID filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnalyzeBookingConflictsNatsRequest.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-07-01', description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnalyzeBookingConflictsNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-07-31', description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnalyzeBookingConflictsNatsRequest.prototype, "endDate", void 0);
class SimpleDetectConflictsNatsRequest {
    hotelId;
    roomId;
    startDate;
    endDate;
}
exports.SimpleDetectConflictsNatsRequest = SimpleDetectConflictsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SimpleDetectConflictsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room ID filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SimpleDetectConflictsNatsRequest.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-07-01', description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SimpleDetectConflictsNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-07-31', description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SimpleDetectConflictsNatsRequest.prototype, "endDate", void 0);
class SimpleConflictStatsNatsRequest {
    hotelId;
    tenantId;
}
exports.SimpleConflictStatsNatsRequest = SimpleConflictStatsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SimpleConflictStatsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SimpleConflictStatsNatsRequest.prototype, "tenantId", void 0);
//# sourceMappingURL=check-conflict.nats.js.map