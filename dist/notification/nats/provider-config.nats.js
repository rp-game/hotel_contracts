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
exports.SyncTemplatesNatsResponse = exports.SyncedTemplateDto = exports.SyncTemplatesNatsRequest = exports.CheckChannelAvailabilityNatsResponse = exports.CheckChannelAvailabilityNatsRequest = exports.GetChannelAddonsNatsResponse = exports.ChannelStatusDto = exports.GetChannelAddonsNatsRequest = exports.UpsertChannelAddonNatsResponse = exports.UpsertChannelAddonNatsRequest = exports.ListNotificationProvidersNatsResponse = exports.DeleteProviderConfigNatsResponse = exports.DeleteProviderConfigNatsRequest = exports.GetProviderConfigNatsResponse = exports.GetProviderConfigNatsRequest = exports.UpsertProviderConfigNatsResponse = exports.UpsertProviderConfigNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const notification_enum_1 = require("../enums/notification.enum");
// ============= PROVIDER CONFIG CRUD =============
class UpsertProviderConfigNatsRequest {
    tenantId;
    hotelId;
    channel;
    provider;
    credentials;
    settings;
    isEnabled;
    isAvailable;
    healthCheck;
}
exports.UpsertProviderConfigNatsRequest = UpsertProviderConfigNatsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID (null = platform default)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertProviderConfigNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (null = tenant-level)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertProviderConfigNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification channel', enum: notification_enum_1.NotificationChannel }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationChannel),
    __metadata("design:type", String)
], UpsertProviderConfigNatsRequest.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider name (e.g. sendgrid, zalo_zns, aws_sns, expo)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertProviderConfigNatsRequest.prototype, "provider", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider credentials (API keys, secrets — will be encrypted)', type: Object }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpsertProviderConfigNatsRequest.prototype, "credentials", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Non-sensitive settings (sender name, region, etc.)', type: Object }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpsertProviderConfigNatsRequest.prototype, "settings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether this config is enabled' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpsertProviderConfigNatsRequest.prototype, "isEnabled", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether this channel is available (platform toggle)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpsertProviderConfigNatsRequest.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Run health check after saving' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpsertProviderConfigNatsRequest.prototype, "healthCheck", void 0);
class UpsertProviderConfigNatsResponse {
    id;
    message;
    healthCheck;
}
exports.UpsertProviderConfigNatsResponse = UpsertProviderConfigNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Config record ID' }),
    __metadata("design:type", String)
], UpsertProviderConfigNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status message' }),
    __metadata("design:type", String)
], UpsertProviderConfigNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Health check result', type: Object }),
    __metadata("design:type", Object)
], UpsertProviderConfigNatsResponse.prototype, "healthCheck", void 0);
class GetProviderConfigNatsRequest {
    tenantId;
    hotelId;
    channel;
}
exports.GetProviderConfigNatsRequest = GetProviderConfigNatsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProviderConfigNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProviderConfigNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification channel', enum: notification_enum_1.NotificationChannel }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationChannel),
    __metadata("design:type", String)
], GetProviderConfigNatsRequest.prototype, "channel", void 0);
class GetProviderConfigNatsResponse {
    provider;
    settings;
    hasCredentials;
}
exports.GetProviderConfigNatsResponse = GetProviderConfigNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider name' }),
    __metadata("design:type", String)
], GetProviderConfigNatsResponse.prototype, "provider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Non-sensitive settings', type: Object }),
    __metadata("design:type", Object)
], GetProviderConfigNatsResponse.prototype, "settings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether credentials are configured' }),
    __metadata("design:type", Boolean)
], GetProviderConfigNatsResponse.prototype, "hasCredentials", void 0);
class DeleteProviderConfigNatsRequest {
    tenantId;
    hotelId;
    channel;
}
exports.DeleteProviderConfigNatsRequest = DeleteProviderConfigNatsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeleteProviderConfigNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeleteProviderConfigNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification channel', enum: notification_enum_1.NotificationChannel }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationChannel),
    __metadata("design:type", String)
], DeleteProviderConfigNatsRequest.prototype, "channel", void 0);
class DeleteProviderConfigNatsResponse {
    deleted;
    message;
}
exports.DeleteProviderConfigNatsResponse = DeleteProviderConfigNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether a config was deleted' }),
    __metadata("design:type", Boolean)
], DeleteProviderConfigNatsResponse.prototype, "deleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status message' }),
    __metadata("design:type", String)
], DeleteProviderConfigNatsResponse.prototype, "message", void 0);
class ListNotificationProvidersNatsResponse {
    push;
    email;
    sms;
    templates;
}
exports.ListNotificationProvidersNatsResponse = ListNotificationProvidersNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Registered push providers', type: [String] }),
    __metadata("design:type", Array)
], ListNotificationProvidersNatsResponse.prototype, "push", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Registered email providers', type: [String] }),
    __metadata("design:type", Array)
], ListNotificationProvidersNatsResponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Registered SMS providers', type: [String] }),
    __metadata("design:type", Array)
], ListNotificationProvidersNatsResponse.prototype, "sms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Registered template providers', type: [String] }),
    __metadata("design:type", Array)
], ListNotificationProvidersNatsResponse.prototype, "templates", void 0);
// ============= CHANNEL ADDON CRUD =============
class UpsertChannelAddonNatsRequest {
    tenantId;
    channel;
    isAvailable;
    enabledBy;
    metadata;
}
exports.UpsertChannelAddonNatsRequest = UpsertChannelAddonNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertChannelAddonNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification channel', enum: notification_enum_1.NotificationChannel }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationChannel),
    __metadata("design:type", String)
], UpsertChannelAddonNatsRequest.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the channel is available for this tenant' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpsertChannelAddonNatsRequest.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff ID who enabled/disabled' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertChannelAddonNatsRequest.prototype, "enabledBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata', type: Object }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpsertChannelAddonNatsRequest.prototype, "metadata", void 0);
class UpsertChannelAddonNatsResponse {
    id;
    tenantId;
    channel;
    isAvailable;
    enabledAt;
    disabledAt;
    message;
}
exports.UpsertChannelAddonNatsResponse = UpsertChannelAddonNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Addon record ID' }),
    __metadata("design:type", String)
], UpsertChannelAddonNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], UpsertChannelAddonNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel', enum: notification_enum_1.NotificationChannel }),
    __metadata("design:type", String)
], UpsertChannelAddonNatsResponse.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the channel is available' }),
    __metadata("design:type", Boolean)
], UpsertChannelAddonNatsResponse.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When the channel was enabled' }),
    __metadata("design:type", Date)
], UpsertChannelAddonNatsResponse.prototype, "enabledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When the channel was disabled' }),
    __metadata("design:type", Date)
], UpsertChannelAddonNatsResponse.prototype, "disabledAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status message' }),
    __metadata("design:type", String)
], UpsertChannelAddonNatsResponse.prototype, "message", void 0);
class GetChannelAddonsNatsRequest {
    tenantId;
}
exports.GetChannelAddonsNatsRequest = GetChannelAddonsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetChannelAddonsNatsRequest.prototype, "tenantId", void 0);
class ChannelStatusDto {
    available;
    addon;
    enabledAt;
}
exports.ChannelStatusDto = ChannelStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the channel is available' }),
    __metadata("design:type", Boolean)
], ChannelStatusDto.prototype, "available", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether this channel requires an addon' }),
    __metadata("design:type", Boolean)
], ChannelStatusDto.prototype, "addon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When the channel was enabled' }),
    __metadata("design:type", Date)
], ChannelStatusDto.prototype, "enabledAt", void 0);
class GetChannelAddonsNatsResponse {
    channels;
}
exports.GetChannelAddonsNatsResponse = GetChannelAddonsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel availability statuses', type: Object }),
    __metadata("design:type", Object)
], GetChannelAddonsNatsResponse.prototype, "channels", void 0);
class CheckChannelAvailabilityNatsRequest {
    tenantId;
    channel;
}
exports.CheckChannelAvailabilityNatsRequest = CheckChannelAvailabilityNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckChannelAvailabilityNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification channel', enum: notification_enum_1.NotificationChannel }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationChannel),
    __metadata("design:type", String)
], CheckChannelAvailabilityNatsRequest.prototype, "channel", void 0);
class CheckChannelAvailabilityNatsResponse {
    available;
}
exports.CheckChannelAvailabilityNatsResponse = CheckChannelAvailabilityNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the channel is available' }),
    __metadata("design:type", Boolean)
], CheckChannelAvailabilityNatsResponse.prototype, "available", void 0);
// ============= TEMPLATE SYNC =============
class SyncTemplatesNatsRequest {
    tenantId;
    channel;
    hotelId;
}
exports.SyncTemplatesNatsRequest = SyncTemplatesNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SyncTemplatesNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification channel', enum: notification_enum_1.NotificationChannel }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationChannel),
    __metadata("design:type", String)
], SyncTemplatesNatsRequest.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SyncTemplatesNatsRequest.prototype, "hotelId", void 0);
class SyncedTemplateDto {
    id;
    name;
    providerTemplateId;
    variables;
}
exports.SyncedTemplateDto = SyncedTemplateDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template ID' }),
    __metadata("design:type", String)
], SyncedTemplateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template name' }),
    __metadata("design:type", String)
], SyncedTemplateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider template ID' }),
    __metadata("design:type", String)
], SyncedTemplateDto.prototype, "providerTemplateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template variables', type: [String] }),
    __metadata("design:type", Array)
], SyncedTemplateDto.prototype, "variables", void 0);
class SyncTemplatesNatsResponse {
    synced;
    templates;
}
exports.SyncTemplatesNatsResponse = SyncTemplatesNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of templates synced' }),
    __metadata("design:type", Number)
], SyncTemplatesNatsResponse.prototype, "synced", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Synced templates', type: [SyncedTemplateDto] }),
    __metadata("design:type", Array)
], SyncTemplatesNatsResponse.prototype, "templates", void 0);
//# sourceMappingURL=provider-config.nats.js.map