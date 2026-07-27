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
exports.PerformanceDataDto = exports.PerformanceRankDto = exports.AchievementDto = exports.PerformanceMetricsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const user_enum_1 = require("../enums/user.enum");
class PerformanceMetricsDto {
    period;
    tasksCompleted;
    tasksAssigned;
    averageCompletionTime;
    customerRating;
    punctualityScore;
    teamworkScore;
    overallScore;
}
exports.PerformanceMetricsDto = PerformanceMetricsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Time period', example: 'current_month' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PerformanceMetricsDto.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks completed count' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceMetricsDto.prototype, "tasksCompleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks assigned count' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceMetricsDto.prototype, "tasksAssigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average completion time in minutes' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceMetricsDto.prototype, "averageCompletionTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer rating out of 5' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceMetricsDto.prototype, "customerRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Punctuality score percentage' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceMetricsDto.prototype, "punctualityScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Teamwork score percentage' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceMetricsDto.prototype, "teamworkScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overall performance score' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceMetricsDto.prototype, "overallScore", void 0);
class AchievementDto {
    id;
    title;
    description;
    dateEarned;
    icon;
    category;
}
exports.AchievementDto = AchievementDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Achievement ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AchievementDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Achievement title' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AchievementDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Achievement description' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AchievementDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date earned' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AchievementDto.prototype, "dateEarned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Achievement icon' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AchievementDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Achievement category', enum: user_enum_1.AchievementCategory }),
    (0, class_validator_1.IsEnum)(user_enum_1.AchievementCategory),
    __metadata("design:type", String)
], AchievementDto.prototype, "category", void 0);
class PerformanceRankDto {
    position;
    totalStaff;
    department;
}
exports.PerformanceRankDto = PerformanceRankDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current rank position' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceRankDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total staff count' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PerformanceRankDto.prototype, "totalStaff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PerformanceRankDto.prototype, "department", void 0);
class PerformanceDataDto {
    currentMonth;
    lastMonth;
    last3Months;
    achievements;
    rank;
}
exports.PerformanceDataDto = PerformanceDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current month metrics', type: PerformanceMetricsDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PerformanceMetricsDto),
    __metadata("design:type", PerformanceMetricsDto)
], PerformanceDataDto.prototype, "currentMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last month metrics', type: PerformanceMetricsDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PerformanceMetricsDto),
    __metadata("design:type", PerformanceMetricsDto)
], PerformanceDataDto.prototype, "lastMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last 3 months metrics', type: PerformanceMetricsDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PerformanceMetricsDto),
    __metadata("design:type", PerformanceMetricsDto)
], PerformanceDataDto.prototype, "last3Months", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Recent achievements', type: [AchievementDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AchievementDto),
    __metadata("design:type", Array)
], PerformanceDataDto.prototype, "achievements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff rank information', type: PerformanceRankDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PerformanceRankDto),
    __metadata("design:type", PerformanceRankDto)
], PerformanceDataDto.prototype, "rank", void 0);
//# sourceMappingURL=performance.dto.js.map