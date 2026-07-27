"use strict";
/**
 * Amenity SLA Configuration REST API DTOs
 *
 * Shared classes used by both:
 * - Contracts (for type definitions)
 * - API Gateway REST endpoints (with @ApiProperty decorators)
 * - Housekeeping Service REST endpoints
 *
 * These are imported and used by both NATS handlers and REST controllers
 * to ensure consistency between NATS and REST contracts
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
exports.CreateAmenitySLAConfigDto = exports.AmenitySLAConfigResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Amenity SLA Configuration Response DTO
 * Returned by GET /amenity-sla-configs
 */
class AmenitySLAConfigResponseDto {
    id;
    hotelId;
    tenantId;
    firstResponseMinutes;
    firstResponseMinutesOffPeak;
    resolutionMinutes;
    escalationLevel1Percent;
    escalationLevel2Percent;
    priority;
    createdAt;
    updatedAt;
}
exports.AmenitySLAConfigResponseDto = AmenitySLAConfigResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Configuration ID' }),
    __metadata("design:type", String)
], AmenitySLAConfigResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], AmenitySLAConfigResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], AmenitySLAConfigResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Minutes to first response during peak hours (6-9am, 5-10pm)',
        type: Number,
        example: 10,
    }),
    __metadata("design:type", Number)
], AmenitySLAConfigResponseDto.prototype, "firstResponseMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Minutes to first response during off-peak hours',
        type: Number,
        example: 20,
    }),
    __metadata("design:type", Number)
], AmenitySLAConfigResponseDto.prototype, "firstResponseMinutesOffPeak", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Minutes to complete resolution',
        type: Number,
        example: 60,
    }),
    __metadata("design:type", Number)
], AmenitySLAConfigResponseDto.prototype, "resolutionMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Percentage of deadline for first escalation alert (WARNING)',
        type: Number,
        default: 50,
        example: 50,
    }),
    __metadata("design:type", Number)
], AmenitySLAConfigResponseDto.prototype, "escalationLevel1Percent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Percentage of deadline for second escalation alert (ESCALATION_LEVEL_2)',
        type: Number,
        default: 75,
        example: 75,
    }),
    __metadata("design:type", Number)
], AmenitySLAConfigResponseDto.prototype, "escalationLevel2Percent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Default priority for amenity requests',
        enum: ['LOW', 'MEDIUM', 'HIGH'],
        default: 'MEDIUM',
    }),
    __metadata("design:type", String)
], AmenitySLAConfigResponseDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp', type: String }),
    __metadata("design:type", Object)
], AmenitySLAConfigResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp', type: String }),
    __metadata("design:type", Object)
], AmenitySLAConfigResponseDto.prototype, "updatedAt", void 0);
/**
 * Create Amenity SLA Configuration DTO
 * Used by POST /amenity-sla-configs
 */
class CreateAmenitySLAConfigDto {
    hotelId;
    tenantId;
    firstResponseMinutes;
    firstResponseMinutesOffPeak;
    resolutionMinutes;
    escalationLevel1Percent;
    escalationLevel2Percent;
    priority;
}
exports.CreateAmenitySLAConfigDto = CreateAmenitySLAConfigDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CreateAmenitySLAConfigDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateAmenitySLAConfigDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Minutes to first response during peak hours',
        type: Number,
        example: 10,
    }),
    __metadata("design:type", Number)
], CreateAmenitySLAConfigDto.prototype, "firstResponseMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Minutes to first response during off-peak hours',
        type: Number,
        example: 20,
    }),
    __metadata("design:type", Number)
], CreateAmenitySLAConfigDto.prototype, "firstResponseMinutesOffPeak", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Minutes to complete resolution',
        type: Number,
        example: 60,
    }),
    __metadata("design:type", Number)
], CreateAmenitySLAConfigDto.prototype, "resolutionMinutes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Percentage for first escalation alert (50-90)',
        type: Number,
        default: 50,
    }),
    __metadata("design:type", Number)
], CreateAmenitySLAConfigDto.prototype, "escalationLevel1Percent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Percentage for second escalation alert (60-99)',
        type: Number,
        default: 75,
    }),
    __metadata("design:type", Number)
], CreateAmenitySLAConfigDto.prototype, "escalationLevel2Percent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Default priority',
        enum: ['LOW', 'MEDIUM', 'HIGH'],
    }),
    __metadata("design:type", String)
], CreateAmenitySLAConfigDto.prototype, "priority", void 0);
//# sourceMappingURL=amenity-sla-config.rest.js.map