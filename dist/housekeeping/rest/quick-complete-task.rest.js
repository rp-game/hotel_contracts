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
exports.QuickCompleteTaskResponseDto = exports.QuickCompleteTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class QuickCompleteTaskDto {
    notes;
    qualityRating;
    photos;
    completedAt;
}
exports.QuickCompleteTaskDto = QuickCompleteTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completion notes', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickCompleteTaskDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task quality rating 1-5', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QuickCompleteTaskDto.prototype, "qualityRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completion photos', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], QuickCompleteTaskDto.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completion timestamp', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], QuickCompleteTaskDto.prototype, "completedAt", void 0);
class QuickCompleteTaskResponseDto {
    success;
    taskId;
    completedAt;
    message;
}
exports.QuickCompleteTaskResponseDto = QuickCompleteTaskResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], QuickCompleteTaskResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completed task ID' }),
    __metadata("design:type", String)
], QuickCompleteTaskResponseDto.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completion timestamp' }),
    __metadata("design:type", String)
], QuickCompleteTaskResponseDto.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], QuickCompleteTaskResponseDto.prototype, "message", void 0);
//# sourceMappingURL=quick-complete-task.rest.js.map