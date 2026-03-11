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
exports.MarkAllNotificationsResponseDto = exports.MarkAllNotificationsReadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class MarkAllNotificationsReadDto {
    timestamp;
}
exports.MarkAllNotificationsReadDto = MarkAllNotificationsReadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mark all as read timestamp', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], MarkAllNotificationsReadDto.prototype, "timestamp", void 0);
class MarkAllNotificationsResponseDto {
    success;
    markedCount;
    message;
}
exports.MarkAllNotificationsResponseDto = MarkAllNotificationsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], MarkAllNotificationsResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of notifications marked as read' }),
    __metadata("design:type", Number)
], MarkAllNotificationsResponseDto.prototype, "markedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], MarkAllNotificationsResponseDto.prototype, "message", void 0);
//# sourceMappingURL=mark-all-read.dto.js.map