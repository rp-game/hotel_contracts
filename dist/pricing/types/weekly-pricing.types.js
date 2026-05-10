"use strict";
/**
 * Room Type Weekly Pricing Types (Layer 1a)
 *
 * Manage room_type_weekly_pricing rows per (hotel × room × weekStartDate).
 * Each row = 1 ISO week (Mon→Sun). DOW override stored as JSONB { "1".."7": price }.
 *
 * NATS namespace: pricing.weekly.*
 * REST base path: /pricing/weekly
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
exports.BootstrapFromBaseRateResponse = exports.BootstrapFromBaseRateRequest = exports.BulkSetWeekResponse = exports.BulkSetWeekRequest = exports.BulkSetWeekRoom = exports.SoftDeleteWeekResponse = exports.SoftDeleteWeekRequest = exports.ExecuteRepeatResponse = exports.ExecuteRepeatRequest = exports.PreviewRepeatResponse = exports.PreviewRepeatRequest = exports.PreviewRepeatTarget = exports.UpsertWeekResponse = exports.UpsertWeekRequest = exports.ListWeeklyResponse = exports.ListWeeklyRequest = exports.WeeklyPricingItem = exports.WeeklyPricingSource = void 0;
const swagger_1 = require("@nestjs/swagger");
var WeeklyPricingSource;
(function (WeeklyPricingSource) {
    WeeklyPricingSource["CRON"] = "cron";
    WeeklyPricingSource["MANUAL"] = "manual";
})(WeeklyPricingSource || (exports.WeeklyPricingSource = WeeklyPricingSource = {}));
class WeeklyPricingItem {
    id;
    tenantId;
    hotelId;
    roomTypeId;
    startDate;
    price;
    overrides;
    currency;
    source;
    isActive;
    createdAt;
    updatedAt;
    createdBy;
    updatedBy;
}
exports.WeeklyPricingItem = WeeklyPricingItem;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WeeklyPricingItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WeeklyPricingItem.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WeeklyPricingItem.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WeeklyPricingItem.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monday of the ISO week (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], WeeklyPricingItem.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Uniform week price (VND)' }),
    __metadata("design:type", Number)
], WeeklyPricingItem.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'object',
        additionalProperties: { type: 'number' },
        nullable: true,
        description: 'Sparse DOW override map: { "1".."7": price }',
    }),
    __metadata("design:type", Object)
], WeeklyPricingItem.prototype, "overrides", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WeeklyPricingItem.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: WeeklyPricingSource }),
    __metadata("design:type", String)
], WeeklyPricingItem.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], WeeklyPricingItem.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WeeklyPricingItem.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WeeklyPricingItem.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true }),
    __metadata("design:type", Object)
], WeeklyPricingItem.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true }),
    __metadata("design:type", Object)
], WeeklyPricingItem.prototype, "updatedBy", void 0);
// ─── List ────────────────────────────────────────────────────────────────
class ListWeeklyRequest {
    tenantId;
    hotelId;
    roomTypeId;
    dateFrom;
    dateTo;
}
exports.ListWeeklyRequest = ListWeeklyRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ListWeeklyRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ListWeeklyRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ListWeeklyRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'YYYY-MM-DD' }),
    __metadata("design:type", String)
], ListWeeklyRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'YYYY-MM-DD' }),
    __metadata("design:type", String)
], ListWeeklyRequest.prototype, "dateTo", void 0);
class ListWeeklyResponse {
    items;
}
exports.ListWeeklyResponse = ListWeeklyResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [WeeklyPricingItem] }),
    __metadata("design:type", Array)
], ListWeeklyResponse.prototype, "items", void 0);
// ─── Upsert week ─────────────────────────────────────────────────────────
class UpsertWeekRequest {
    tenantId;
    hotelId;
    roomTypeId;
    startDate;
    price;
    overrides;
    expectedUpdatedAt;
    updatedBy;
}
exports.UpsertWeekRequest = UpsertWeekRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpsertWeekRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpsertWeekRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpsertWeekRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monday of week (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], UpsertWeekRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpsertWeekRequest.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'object',
        additionalProperties: { type: 'number' },
        nullable: true,
    }),
    __metadata("design:type", Object)
], UpsertWeekRequest.prototype, "overrides", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Optimistic lock token (ISO updatedAt)' }),
    __metadata("design:type", String)
], UpsertWeekRequest.prototype, "expectedUpdatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UpsertWeekRequest.prototype, "updatedBy", void 0);
class UpsertWeekResponse {
    item;
}
exports.UpsertWeekResponse = UpsertWeekResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", WeeklyPricingItem)
], UpsertWeekResponse.prototype, "item", void 0);
// ─── Preview repeat ──────────────────────────────────────────────────────
class PreviewRepeatTarget {
    weekStart;
    exists;
    hasOverrides;
    currentPrice;
}
exports.PreviewRepeatTarget = PreviewRepeatTarget;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monday of target week (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], PreviewRepeatTarget.prototype, "weekStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PreviewRepeatTarget.prototype, "exists", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PreviewRepeatTarget.prototype, "hasOverrides", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], PreviewRepeatTarget.prototype, "currentPrice", void 0);
class PreviewRepeatRequest {
    tenantId;
    hotelId;
    roomTypeId;
    sourceWeekStart;
    weeksToCopy;
}
exports.PreviewRepeatRequest = PreviewRepeatRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreviewRepeatRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreviewRepeatRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreviewRepeatRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreviewRepeatRequest.prototype, "sourceWeekStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '1..104' }),
    __metadata("design:type", Number)
], PreviewRepeatRequest.prototype, "weeksToCopy", void 0);
class PreviewRepeatResponse {
    source;
    targets;
}
exports.PreviewRepeatResponse = PreviewRepeatResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", WeeklyPricingItem)
], PreviewRepeatResponse.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PreviewRepeatTarget] }),
    __metadata("design:type", Array)
], PreviewRepeatResponse.prototype, "targets", void 0);
// ─── Execute repeat ──────────────────────────────────────────────────────
class ExecuteRepeatRequest {
    tenantId;
    hotelId;
    roomTypeId;
    sourceWeekStart;
    weeksToCopy;
    decisions;
    updatedBy;
}
exports.ExecuteRepeatRequest = ExecuteRepeatRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExecuteRepeatRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExecuteRepeatRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExecuteRepeatRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExecuteRepeatRequest.prototype, "sourceWeekStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ExecuteRepeatRequest.prototype, "weeksToCopy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        additionalProperties: { type: 'string', enum: ['overwrite', 'skip'] },
        description: 'Per-week decision keyed by weekStart YYYY-MM-DD',
    }),
    __metadata("design:type", Object)
], ExecuteRepeatRequest.prototype, "decisions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ExecuteRepeatRequest.prototype, "updatedBy", void 0);
class ExecuteRepeatResponse {
    created;
    overwritten;
    skipped;
}
exports.ExecuteRepeatResponse = ExecuteRepeatResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ExecuteRepeatResponse.prototype, "created", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ExecuteRepeatResponse.prototype, "overwritten", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ExecuteRepeatResponse.prototype, "skipped", void 0);
// ─── Soft delete ─────────────────────────────────────────────────────────
class SoftDeleteWeekRequest {
    id;
    tenantId;
    expectedUpdatedAt;
}
exports.SoftDeleteWeekRequest = SoftDeleteWeekRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SoftDeleteWeekRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SoftDeleteWeekRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Optimistic lock token' }),
    __metadata("design:type", String)
], SoftDeleteWeekRequest.prototype, "expectedUpdatedAt", void 0);
class SoftDeleteWeekResponse {
    success;
}
exports.SoftDeleteWeekResponse = SoftDeleteWeekResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], SoftDeleteWeekResponse.prototype, "success", void 0);
// ─── Bulk set 1 week × N rooms ───────────────────────────────────────────
class BulkSetWeekRoom {
    roomTypeId;
    price;
    overrides;
}
exports.BulkSetWeekRoom = BulkSetWeekRoom;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BulkSetWeekRoom.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BulkSetWeekRoom.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'object',
        additionalProperties: { type: 'number' },
        nullable: true,
    }),
    __metadata("design:type", Object)
], BulkSetWeekRoom.prototype, "overrides", void 0);
class BulkSetWeekRequest {
    tenantId;
    hotelId;
    startDate;
    rooms;
    updatedBy;
}
exports.BulkSetWeekRequest = BulkSetWeekRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BulkSetWeekRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BulkSetWeekRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BulkSetWeekRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [BulkSetWeekRoom] }),
    __metadata("design:type", Array)
], BulkSetWeekRequest.prototype, "rooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], BulkSetWeekRequest.prototype, "updatedBy", void 0);
class BulkSetWeekResponse {
    upserted;
}
exports.BulkSetWeekResponse = BulkSetWeekResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BulkSetWeekResponse.prototype, "upserted", void 0);
// ─── Bootstrap from base_rate ────────────────────────────────────────────
class BootstrapFromBaseRateRequest {
    tenantId;
    hotelId;
    weeksForward;
    skipExistingWeeks;
    updatedBy;
}
exports.BootstrapFromBaseRateRequest = BootstrapFromBaseRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BootstrapFromBaseRateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BootstrapFromBaseRateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default 52' }),
    __metadata("design:type", Number)
], BootstrapFromBaseRateRequest.prototype, "weeksForward", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default true' }),
    __metadata("design:type", Boolean)
], BootstrapFromBaseRateRequest.prototype, "skipExistingWeeks", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], BootstrapFromBaseRateRequest.prototype, "updatedBy", void 0);
class BootstrapFromBaseRateResponse {
    created;
    skippedRooms;
}
exports.BootstrapFromBaseRateResponse = BootstrapFromBaseRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BootstrapFromBaseRateResponse.prototype, "created", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], BootstrapFromBaseRateResponse.prototype, "skippedRooms", void 0);
//# sourceMappingURL=weekly-pricing.types.js.map