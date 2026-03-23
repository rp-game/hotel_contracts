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
exports.NotificationTemplateResponse = exports.CreateNotificationTemplateNatsRequest = exports.NOTIFICATION_TEMPLATE_PATTERNS = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Notification Template NATS Contracts
 * Handler: notification-service
 */
exports.NOTIFICATION_TEMPLATE_PATTERNS = {
    CREATE: 'notification.template.create',
};
// ─── Create Notification Template ───
class CreateNotificationTemplateNatsRequest {
    tenantId;
    name;
    channel;
    provider;
    providerTemplateId;
    description;
    variables;
    isActive;
}
exports.CreateNotificationTemplateNatsRequest = CreateNotificationTemplateNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateNotificationTemplateNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationTemplateNatsRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification channel', enum: ['IN_APP', 'PUSH', 'SMS', 'EMAIL', 'WEBSOCKET'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationTemplateNatsRequest.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider identifier (email, sms, zalo)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationTemplateNatsRequest.prototype, "provider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider-specific template ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationTemplateNatsRequest.prototype, "providerTemplateId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Template description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationTemplateNatsRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Template variables', type: [String], default: [] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateNotificationTemplateNatsRequest.prototype, "variables", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Active status', default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateNotificationTemplateNatsRequest.prototype, "isActive", void 0);
class NotificationTemplateResponse {
    id;
    tenantId;
    name;
    channel;
    provider;
    providerTemplateId;
    description;
    variables;
    isActive;
    createdAt;
    updatedAt;
}
exports.NotificationTemplateResponse = NotificationTemplateResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], NotificationTemplateResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], NotificationTemplateResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], NotificationTemplateResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], NotificationTemplateResponse.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], NotificationTemplateResponse.prototype, "provider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], NotificationTemplateResponse.prototype, "providerTemplateId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], NotificationTemplateResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], NotificationTemplateResponse.prototype, "variables", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], NotificationTemplateResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], NotificationTemplateResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], NotificationTemplateResponse.prototype, "updatedAt", void 0);
//# sourceMappingURL=notification-template.nats.js.map