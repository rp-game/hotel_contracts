"use strict";
/**
 * Blackout Period Type
 *
 * Represents a date range during which a rate plan is hidden from booking.
 * Used for peak seasons (Tet, Christmas, etc.) to prevent discounted rates.
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
exports.BlackoutPeriodDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BlackoutPeriodDto {
    startDate;
    endDate;
    reason;
}
exports.BlackoutPeriodDto = BlackoutPeriodDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Blackout period start date (YYYY-MM-DD)',
        example: '2026-01-28',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], BlackoutPeriodDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Blackout period end date (YYYY-MM-DD)',
        example: '2026-02-02',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], BlackoutPeriodDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Reason for blackout (e.g. Tet Holiday, Christmas)',
        example: 'Tet Holiday',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlackoutPeriodDto.prototype, "reason", void 0);
//# sourceMappingURL=blackout-period.type.js.map