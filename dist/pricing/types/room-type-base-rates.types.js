"use strict";
/**
 * Room Type Base Rates Types
 *
 * Shared types for room type base rate patterns.
 * Foundation layer - simple base pricing per room type.
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
exports.RoomTypeBaseRate = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Room type base rate entity
 */
class RoomTypeBaseRate {
    id;
    tenantId;
    hotelId;
    roomTypeId;
    baseRate;
    weekdayRate;
    weekendRate;
    hourlyRate;
    useWeekdayWeekend;
    currency;
    isActive;
    createdAt;
    updatedAt;
}
exports.RoomTypeBaseRate = RoomTypeBaseRate;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate ID' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate amount' }),
    __metadata("design:type", Number)
], RoomTypeBaseRate.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Weekday rate' }),
    __metadata("design:type", Number)
], RoomTypeBaseRate.prototype, "weekdayRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Weekend rate' }),
    __metadata("design:type", Number)
], RoomTypeBaseRate.prototype, "weekendRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hourly rate' }),
    __metadata("design:type", Number)
], RoomTypeBaseRate.prototype, "hourlyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether to use weekday/weekend pricing' }),
    __metadata("design:type", Boolean)
], RoomTypeBaseRate.prototype, "useWeekdayWeekend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the rate is active' }),
    __metadata("design:type", Boolean)
], RoomTypeBaseRate.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], RoomTypeBaseRate.prototype, "updatedAt", void 0);
//# sourceMappingURL=room-type-base-rates.types.js.map