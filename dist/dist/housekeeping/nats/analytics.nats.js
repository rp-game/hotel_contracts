"use strict";
/**
 * Analytics NATS Contracts
 * Patterns: housekeeping.analytics.*
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
exports.DashboardSummary = exports.StaffPerformanceDto = exports.StaffPerformerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class StaffPerformerDto {
    staffId;
    score;
}
exports.StaffPerformerDto = StaffPerformerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff member ID' }),
    __metadata("design:type", String)
], StaffPerformerDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Performance score' }),
    __metadata("design:type", Number)
], StaffPerformerDto.prototype, "score", void 0);
class StaffPerformanceDto {
    topPerformers;
    needsImprovement;
}
exports.StaffPerformanceDto = StaffPerformanceDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Top performing staff members', type: [StaffPerformerDto] }),
    __metadata("design:type", Array)
], StaffPerformanceDto.prototype, "topPerformers", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff members needing improvement', type: [StaffPerformerDto] }),
    __metadata("design:type", Array)
], StaffPerformanceDto.prototype, "needsImprovement", void 0);
class DashboardSummary {
    totalTasks;
    completedTasks;
    pendingTasks;
    completionRate;
    averageQualityScore;
    averageCompletionTime;
    qualityScore;
    topPerformers;
    staffPerformance;
}
exports.DashboardSummary = DashboardSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of tasks' }),
    __metadata("design:type", Number)
], DashboardSummary.prototype, "totalTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of completed tasks' }),
    __metadata("design:type", Number)
], DashboardSummary.prototype, "completedTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of pending tasks' }),
    __metadata("design:type", Number)
], DashboardSummary.prototype, "pendingTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task completion rate (percentage)' }),
    __metadata("design:type", Number)
], DashboardSummary.prototype, "completionRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Average quality score' }),
    __metadata("design:type", Number)
], DashboardSummary.prototype, "averageQualityScore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Average task completion time (minutes)' }),
    __metadata("design:type", Number)
], DashboardSummary.prototype, "averageCompletionTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Overall quality score' }),
    __metadata("design:type", Number)
], DashboardSummary.prototype, "qualityScore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Top performing staff members', type: [StaffPerformerDto] }),
    __metadata("design:type", Array)
], DashboardSummary.prototype, "topPerformers", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff performance breakdown', type: StaffPerformanceDto }),
    __metadata("design:type", StaffPerformanceDto)
], DashboardSummary.prototype, "staffPerformance", void 0);
//# sourceMappingURL=analytics.nats.js.map