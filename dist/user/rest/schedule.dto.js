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
exports.StaffScheduleResponseDto = exports.StaffScheduleRequestDto = exports.ShiftScheduleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const shift_enum_1 = require("../enums/shift.enum");
class ShiftScheduleDto {
    id;
    date;
    startTime;
    endTime;
    shiftType;
    department;
    location;
    status;
    notes;
}
exports.ShiftScheduleDto = ShiftScheduleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Schedule ID' }),
    __metadata("design:type", String)
], ShiftScheduleDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Schedule date', example: '2025-08-17' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ShiftScheduleDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start time', example: '08:00' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShiftScheduleDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End time', example: '16:00' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShiftScheduleDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift type', enum: shift_enum_1.ShiftType }),
    (0, class_validator_1.IsEnum)(shift_enum_1.ShiftType),
    __metadata("design:type", String)
], ShiftScheduleDto.prototype, "shiftType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShiftScheduleDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Location' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShiftScheduleDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift status', enum: shift_enum_1.ShiftStatus }),
    (0, class_validator_1.IsEnum)(shift_enum_1.ShiftStatus),
    __metadata("design:type", String)
], ShiftScheduleDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShiftScheduleDto.prototype, "notes", void 0);
class StaffScheduleRequestDto {
    startDate;
    endDate;
}
exports.StaffScheduleRequestDto = StaffScheduleRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date for schedule query', example: '2025-08-17' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], StaffScheduleRequestDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date for schedule query', example: '2025-08-23' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], StaffScheduleRequestDto.prototype, "endDate", void 0);
class StaffScheduleResponseDto {
    schedules;
    total;
}
exports.StaffScheduleResponseDto = StaffScheduleResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of shift schedules', type: [ShiftScheduleDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ShiftScheduleDto),
    __metadata("design:type", Array)
], StaffScheduleResponseDto.prototype, "schedules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total schedules count' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StaffScheduleResponseDto.prototype, "total", void 0);
//# sourceMappingURL=schedule.dto.js.map