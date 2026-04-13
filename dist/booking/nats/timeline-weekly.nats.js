"use strict";
/**
 * Weekly Timeline NATS Contracts
 *
 * Patterns:
 * - booking.timeline.weekly
 *
 * Handler: booking-service (TimelineController)
 * Called by: api-gateway (TimelineService)
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
exports.WeeklyTimelineResponseDto = exports.WeeklyTimelineRoomDto = exports.WeeklyTimelineBlockDto = exports.TimelineBookingDataDto = exports.GetWeeklyTimelineQueryDto = exports.GetWeeklyTimelineNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
// ─── NATS Request ────────────────────────────────────────────────
/**
 * NATS payload for booking.timeline.weekly
 */
class GetWeeklyTimelineNatsRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
    timezone;
}
exports.GetWeeklyTimelineNatsRequest = GetWeeklyTimelineNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetWeeklyTimelineNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetWeeklyTimelineNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetWeeklyTimelineNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetWeeklyTimelineNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Timezone (default: Asia/Ho_Chi_Minh)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetWeeklyTimelineNatsRequest.prototype, "timezone", void 0);
// ─── REST Query ──────────────────────────────────────────────────
/**
 * Query DTO for GET /api/timeline/weekly
 */
class GetWeeklyTimelineQueryDto {
    tenantId;
    hotelId;
    weekStart;
    startDate;
    endDate;
    timezone;
    weekOffset;
}
exports.GetWeeklyTimelineQueryDto = GetWeeklyTimelineQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetWeeklyTimelineQueryDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetWeeklyTimelineQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Week start date (deprecated, use startDate)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetWeeklyTimelineQueryDto.prototype, "weekStart", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date for timeline (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetWeeklyTimelineQueryDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date for timeline (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetWeeklyTimelineQueryDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Timezone (default: Asia/Ho_Chi_Minh)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetWeeklyTimelineQueryDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Week offset from current week (default: 0)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetWeeklyTimelineQueryDto.prototype, "weekOffset", void 0);
// ─── Response ────────────────────────────────────────────────────
/**
 * Booking data embedded in a timeline block
 */
class TimelineBookingDataDto {
    checkInTime;
    checkOutTime;
    actualCheckInTime;
    bookingCode;
    totalAmount;
    specialRequests;
    updatedAt;
    roomTypeId;
    corporateName;
    salesPersonName;
    travelAgentName;
}
exports.TimelineBookingDataDto = TimelineBookingDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-in time (ISO)' }),
    __metadata("design:type", String)
], TimelineBookingDataDto.prototype, "checkInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-out time (ISO)' }),
    __metadata("design:type", String)
], TimelineBookingDataDto.prototype, "checkOutTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual check-in time (ISO)' }),
    __metadata("design:type", String)
], TimelineBookingDataDto.prototype, "actualCheckInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking code' }),
    __metadata("design:type", String)
], TimelineBookingDataDto.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], TimelineBookingDataDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests' }),
    __metadata("design:type", String)
], TimelineBookingDataDto.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last updated timestamp (ISO) — used as version token for delta updates' }),
    __metadata("design:type", String)
], TimelineBookingDataDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], TimelineBookingDataDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Corporate account name' }),
    __metadata("design:type", String)
], TimelineBookingDataDto.prototype, "corporateName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person name' }),
    __metadata("design:type", String)
], TimelineBookingDataDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Travel agent name' }),
    __metadata("design:type", String)
], TimelineBookingDataDto.prototype, "travelAgentName", void 0);
/**
 * A single time block within a room's timeline
 */
class WeeklyTimelineBlockDto {
    id;
    startTime;
    endTime;
    type;
    bookingId;
    guestName;
    status;
    actions;
    bookingData;
    cleaningTaskId;
    assignedStaff;
    priority;
    estimatedDuration;
}
exports.WeeklyTimelineBlockDto = WeeklyTimelineBlockDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Block ID' }),
    __metadata("design:type", String)
], WeeklyTimelineBlockDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start time (ISO)' }),
    __metadata("design:type", String)
], WeeklyTimelineBlockDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End time (ISO)' }),
    __metadata("design:type", String)
], WeeklyTimelineBlockDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Block type',
        enum: ['available', 'pending', 'confirmed', 'occupied', 'maintenance', 'checkout_ready', 'cleaning_pending', 'cleaning_in_progress', 'cleaning_completed'],
    }),
    __metadata("design:type", String)
], WeeklyTimelineBlockDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], WeeklyTimelineBlockDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest name' }),
    __metadata("design:type", String)
], WeeklyTimelineBlockDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking status' }),
    __metadata("design:type", String)
], WeeklyTimelineBlockDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Available actions for this block', type: [String] }),
    __metadata("design:type", Array)
], WeeklyTimelineBlockDto.prototype, "actions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking metadata', type: TimelineBookingDataDto }),
    __metadata("design:type", TimelineBookingDataDto)
], WeeklyTimelineBlockDto.prototype, "bookingData", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cleaning task ID' }),
    __metadata("design:type", String)
], WeeklyTimelineBlockDto.prototype, "cleaningTaskId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned staff name' }),
    __metadata("design:type", String)
], WeeklyTimelineBlockDto.prototype, "assignedStaff", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Priority' }),
    __metadata("design:type", String)
], WeeklyTimelineBlockDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated duration in minutes' }),
    __metadata("design:type", Number)
], WeeklyTimelineBlockDto.prototype, "estimatedDuration", void 0);
/**
 * A room row in the weekly timeline
 */
class WeeklyTimelineRoomDto {
    roomId;
    roomNumber;
    roomType;
    floor;
    timeBlocks;
}
exports.WeeklyTimelineRoomDto = WeeklyTimelineRoomDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], WeeklyTimelineRoomDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    __metadata("design:type", String)
], WeeklyTimelineRoomDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], WeeklyTimelineRoomDto.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Floor number' }),
    __metadata("design:type", Number)
], WeeklyTimelineRoomDto.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timeline blocks', type: [WeeklyTimelineBlockDto] }),
    __metadata("design:type", Array)
], WeeklyTimelineRoomDto.prototype, "timeBlocks", void 0);
/**
 * Full response for GET /api/timeline/weekly
 */
class WeeklyTimelineResponseDto {
    rooms;
    currentTime;
    weekStart;
    weekEnd;
}
exports.WeeklyTimelineResponseDto = WeeklyTimelineResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room timelines', type: [WeeklyTimelineRoomDto] }),
    __metadata("design:type", Array)
], WeeklyTimelineResponseDto.prototype, "rooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Server current time (ISO)' }),
    __metadata("design:type", String)
], WeeklyTimelineResponseDto.prototype, "currentTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period start (ISO)' }),
    __metadata("design:type", String)
], WeeklyTimelineResponseDto.prototype, "weekStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period end (ISO)' }),
    __metadata("design:type", String)
], WeeklyTimelineResponseDto.prototype, "weekEnd", void 0);
//# sourceMappingURL=timeline-weekly.nats.js.map