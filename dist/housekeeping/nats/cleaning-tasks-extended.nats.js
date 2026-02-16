"use strict";
/**
 * Extended Cleaning Tasks NATS Contracts
 * Patterns: housekeeping.tasks.* (mobile and extended patterns)
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
exports.GetPerformanceMetricsNatsRequest = exports.StaffPerformanceMetricsNatsResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Staff Performance Metrics (from getPerformanceMetrics)
 * This is what the service ACTUALLY returns - NOT the PerformanceMetric entity
 * @unified Used by both NATS responses and REST API responses
 */
class StaffPerformanceMetricsNatsResponse {
    staffId;
    staffName;
    tasksCompleted;
    averageTime;
    averageRating;
    onTimeRate;
    efficiencyScore;
    totalTasks;
    pendingTasks;
    inProgressTasks;
}
exports.StaffPerformanceMetricsNatsResponse = StaffPerformanceMetricsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StaffPerformanceMetricsNatsResponse.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff name' }),
    __metadata("design:type", String)
], StaffPerformanceMetricsNatsResponse.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of tasks completed' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "tasksCompleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average completion time in minutes' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "averageTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average quality rating (0-5)' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "averageRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'On-time completion rate (0-100)' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "onTimeRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Efficiency score (0-100)' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "efficiencyScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks assigned' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "totalTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pending tasks count' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "pendingTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'In-progress tasks count' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "inProgressTasks", void 0);
/**
 * Get Performance Metrics Request
 * Pattern: housekeeping.performance
 * @unified Used by both NATS requests and REST API query params
 */
class GetPerformanceMetricsNatsRequest {
    tenantId;
    hotelId;
    startDate;
}
exports.GetPerformanceMetricsNatsRequest = GetPerformanceMetricsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetPerformanceMetricsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetPerformanceMetricsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date filter (ISO format or YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GetPerformanceMetricsNatsRequest.prototype, "startDate", void 0);
//# sourceMappingURL=cleaning-tasks-extended.nats.js.map