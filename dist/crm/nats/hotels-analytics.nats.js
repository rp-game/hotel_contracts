"use strict";
/**
 * Hotels Analytics NATS Contract Types
 * Defines request/response types for hotel-level analytics operations
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
exports.LoyaltyProgramSyncData = exports.SyncErrorData = exports.ProgramDetailData = exports.SyncLoyaltyProgramsAcrossChainNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class SyncLoyaltyProgramsAcrossChainNatsRequest {
    tenantId;
    chainId;
    hotelIds;
    period;
}
exports.SyncLoyaltyProgramsAcrossChainNatsRequest = SyncLoyaltyProgramsAcrossChainNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (chain owner)' }),
    __metadata("design:type", String)
], SyncLoyaltyProgramsAcrossChainNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel chain ID' }),
    __metadata("design:type", String)
], SyncLoyaltyProgramsAcrossChainNatsRequest.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], description: 'Hotel IDs to sync' }),
    __metadata("design:type", Array)
], SyncLoyaltyProgramsAcrossChainNatsRequest.prototype, "hotelIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reporting period (e.g. monthly)' }),
    __metadata("design:type", String)
], SyncLoyaltyProgramsAcrossChainNatsRequest.prototype, "period", void 0);
class ProgramDetailData {
    programId;
    hotelId;
    programName;
    syncStatus;
    memberCount;
    syncTimestamp;
}
exports.ProgramDetailData = ProgramDetailData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty program ID' }),
    __metadata("design:type", String)
], ProgramDetailData.prototype, "programId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ProgramDetailData.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Program name' }),
    __metadata("design:type", String)
], ProgramDetailData.prototype, "programName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync status' }),
    __metadata("design:type", String)
], ProgramDetailData.prototype, "syncStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of enrolled members' }),
    __metadata("design:type", Number)
], ProgramDetailData.prototype, "memberCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync timestamp (ISO string)' }),
    __metadata("design:type", String)
], ProgramDetailData.prototype, "syncTimestamp", void 0);
class SyncErrorData {
    hotelId;
    errorMessage;
    timestamp;
}
exports.SyncErrorData = SyncErrorData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], SyncErrorData.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Error message' }),
    __metadata("design:type", String)
], SyncErrorData.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Error timestamp (ISO string)' }),
    __metadata("design:type", String)
], SyncErrorData.prototype, "timestamp", void 0);
class LoyaltyProgramSyncData {
    chainId;
    hotelIds;
    syncStatus;
    totalProgramsSynced;
    programDetails;
    syncTimestamp;
    errors;
}
exports.LoyaltyProgramSyncData = LoyaltyProgramSyncData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    __metadata("design:type", String)
], LoyaltyProgramSyncData.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], description: 'Hotel IDs in the chain' }),
    __metadata("design:type", Array)
], LoyaltyProgramSyncData.prototype, "hotelIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overall sync status' }),
    __metadata("design:type", String)
], LoyaltyProgramSyncData.prototype, "syncStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of programs synced' }),
    __metadata("design:type", Number)
], LoyaltyProgramSyncData.prototype, "totalProgramsSynced", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [ProgramDetailData] }),
    __metadata("design:type", Array)
], LoyaltyProgramSyncData.prototype, "programDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync timestamp (ISO string)' }),
    __metadata("design:type", String)
], LoyaltyProgramSyncData.prototype, "syncTimestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [SyncErrorData] }),
    __metadata("design:type", Array)
], LoyaltyProgramSyncData.prototype, "errors", void 0);
//# sourceMappingURL=hotels-analytics.nats.js.map