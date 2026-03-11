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
exports.FeedbackResponseDto = exports.FeedbackDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums");
class FeedbackDto {
    type;
    subject;
    description;
    priority;
    contactEmail;
    userAgent;
    appVersion;
}
exports.FeedbackDto = FeedbackDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Feedback type', enum: enums_1.FeedbackType }),
    (0, class_validator_1.IsEnum)(enums_1.FeedbackType),
    __metadata("design:type", String)
], FeedbackDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Feedback subject' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], FeedbackDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detailed description' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    __metadata("design:type", String)
], FeedbackDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Priority level', enum: enums_1.FeedbackPriority }),
    (0, class_validator_1.IsEnum)(enums_1.FeedbackPriority),
    __metadata("design:type", String)
], FeedbackDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact email' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], FeedbackDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User agent/platform' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FeedbackDto.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'App version' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FeedbackDto.prototype, "appVersion", void 0);
class FeedbackResponseDto {
    success;
    feedbackId;
    message;
}
exports.FeedbackResponseDto = FeedbackResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], FeedbackResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Feedback ID' }),
    __metadata("design:type", String)
], FeedbackResponseDto.prototype, "feedbackId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], FeedbackResponseDto.prototype, "message", void 0);
//# sourceMappingURL=feedback.dto.js.map