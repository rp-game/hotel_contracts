"use strict";
/**
 * Room Timeline & Analytics NATS Contracts
 *
 * Patterns:
 * - rooms.timeline.get
 * - rooms.timeline.stats
 * - rooms.status.update
 * - rooms.status.history
 * - rooms.availability.check
 * - rooms.cleaning.config.get
 * - rooms.cleaning.config.update
 * - rooms.assignment.optimize
 * - rooms.maintenance.get
 * - rooms.maintenance.schedule
 * - rooms.analytics.occupancy
 * - rooms.analytics.turnover
 * - rooms.analytics.comprehensive
 * - rooms.analytics.comparison
 * - rooms.conflicts.detect
 * - rooms.conflicts.analysis
 * - rooms.assignment
 * - rooms.settings.get
 * - rooms.settings.update
 * - rooms.status.get
 *
 * Handler: inventory-service
 * Called by: api-gateway, pricing-service
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
exports.AnalyticsComparisonResponseDto = exports.ComprehensiveAnalyticsResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Comprehensive Analytics Response DTO
 * REST API response for GET /api/rooms/analytics/comprehensive
 * Used for both REST API responses and NATS messaging
 */
class ComprehensiveAnalyticsResponseDto {
    overview;
    trends;
    roomTypePerformance;
    hourlyOccupancy;
    revenueBreakdown;
    topPerformingRooms;
    cleaningMetrics;
    forecast;
}
exports.ComprehensiveAnalyticsResponseDto = ComprehensiveAnalyticsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Overview metrics with room counts and KPIs',
        type: 'object',
        properties: {
            totalRooms: { type: 'number' },
            availableRooms: { type: 'number' },
            occupiedRooms: { type: 'number' },
            outOfOrderRooms: { type: 'number' },
            occupancyRate: { type: 'number' },
            adr: { type: 'number', description: 'Average Daily Rate' },
            revpar: { type: 'number', description: 'Revenue Per Available Room' },
            totalRevenue: { type: 'number' },
            avgLengthOfStay: { type: 'number' },
            checkoutOnTime: { type: 'number' },
            cleaningEfficiency: { type: 'number' }
        }
    }),
    __metadata("design:type", Object)
], ComprehensiveAnalyticsResponseDto.prototype, "overview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Daily trends data',
        type: 'array',
        items: {
            type: 'object',
            properties: {
                date: { type: 'string' },
                occupancyRate: { type: 'number' },
                adr: { type: 'number' },
                revpar: { type: 'number' },
                revenue: { type: 'number' },
                availableRooms: { type: 'number' },
                occupiedRooms: { type: 'number' }
            }
        }
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "trends", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room type performance metrics',
        type: 'array',
        items: {
            type: 'object',
            properties: {
                roomType: { type: 'object' },
                totalRooms: { type: 'number' },
                occupancyRate: { type: 'number' },
                adr: { type: 'number' },
                revpar: { type: 'number' },
                revenue: { type: 'number' },
                avgBookingValue: { type: 'number' }
            }
        }
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "roomTypePerformance", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Hourly occupancy data',
        type: 'array'
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "hourlyOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Revenue breakdown by source',
        type: 'array'
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "revenueBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Top performing rooms',
        type: 'array'
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "topPerformingRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cleaning metrics and efficiency',
        type: 'object',
        additionalProperties: true
    }),
    __metadata("design:type", Object)
], ComprehensiveAnalyticsResponseDto.prototype, "cleaningMetrics", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Occupancy forecast',
        type: 'array'
    }),
    __metadata("design:type", Array)
], ComprehensiveAnalyticsResponseDto.prototype, "forecast", void 0);
/**
 * Analytics Comparison Response DTO
 * REST API response for GET /api/rooms/analytics/comparison
 * Used for both REST API responses and NATS messaging
 */
class AnalyticsComparisonResponseDto {
    current;
    previous;
    growth;
}
exports.AnalyticsComparisonResponseDto = AnalyticsComparisonResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Current period analytics',
        type: 'object',
        properties: {
            occupancyRate: { type: 'number' },
            adr: { type: 'number', description: 'Average Daily Rate' },
            revpar: { type: 'number', description: 'Revenue Per Available Room' },
            revenue: { type: 'number' }
        }
    }),
    __metadata("design:type", Object)
], AnalyticsComparisonResponseDto.prototype, "current", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Previous period analytics',
        type: 'object',
        properties: {
            occupancyRate: { type: 'number' },
            adr: { type: 'number', description: 'Average Daily Rate' },
            revpar: { type: 'number', description: 'Revenue Per Available Room' },
            revenue: { type: 'number' }
        }
    }),
    __metadata("design:type", Object)
], AnalyticsComparisonResponseDto.prototype, "previous", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Growth percentage between periods',
        type: 'object',
        properties: {
            occupancyRate: { type: 'number' },
            adr: { type: 'number' },
            revpar: { type: 'number' },
            revenue: { type: 'number' }
        }
    }),
    __metadata("design:type", Object)
], AnalyticsComparisonResponseDto.prototype, "growth", void 0);
//# sourceMappingURL=room-timeline.nats.js.map