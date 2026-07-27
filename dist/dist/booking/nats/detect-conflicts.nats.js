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
exports.DetectConflictsNatsResponseData = exports.DetectConflictsSummary = exports.DetectConflictsNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const get_conflicts_nats_1 = require("./get-conflicts.nats");
class DetectConflictsNatsRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
    roomIds;
}
exports.DetectConflictsNatsRequest = DetectConflictsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DetectConflictsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DetectConflictsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-07-01', description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DetectConflictsNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-07-31', description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DetectConflictsNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], description: 'Optional room IDs to scan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], DetectConflictsNatsRequest.prototype, "roomIds", void 0);
class DetectConflictsSummary {
    doubleBookings;
    maintenanceOverlaps;
    totalRoomsAffected;
}
exports.DetectConflictsSummary = DetectConflictsSummary;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DetectConflictsSummary.prototype, "doubleBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DetectConflictsSummary.prototype, "maintenanceOverlaps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DetectConflictsSummary.prototype, "totalRoomsAffected", void 0);
class DetectConflictsNatsResponseData {
    conflicts;
    totalConflicts;
    highSeverityCount;
    summary;
}
exports.DetectConflictsNatsResponseData = DetectConflictsNatsResponseData;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [get_conflicts_nats_1.ConflictNatsData] }),
    (0, class_transformer_1.Type)(() => get_conflicts_nats_1.ConflictNatsData),
    __metadata("design:type", Array)
], DetectConflictsNatsResponseData.prototype, "conflicts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DetectConflictsNatsResponseData.prototype, "totalConflicts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DetectConflictsNatsResponseData.prototype, "highSeverityCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: DetectConflictsSummary }),
    (0, class_transformer_1.Type)(() => DetectConflictsSummary),
    __metadata("design:type", DetectConflictsSummary)
], DetectConflictsNatsResponseData.prototype, "summary", void 0);
//# sourceMappingURL=detect-conflicts.nats.js.map