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
exports.SendNotificationResponseDto = exports.SendStaffNotificationMultiNatsRequest = exports.DeleteNotificationResponseDto = exports.GetPreferencesNatsResponse = exports.GetPreferencesNatsRequest = exports.UpdatePreferencesNatsResponse = exports.UpdatePreferencesNatsRequest = exports.StaffNotificationPreferencesDto = exports.QuietHoursDto = exports.StaffNotificationSettingsDto = exports.StaffSendNotificationNatsRequest = exports.GetUnreadCountResponseDto = exports.GetUnreadCountPayload = exports.MarkNotificationReadResponseDto = exports.MarkNotificationReadPayload = exports.GetMobileNotificationsResponseDto = exports.GetMobileNotificationsPayload = exports.RegisterDevicePayload = exports.UnregisterDevicePayload = exports.MarkAllNotificationsReadPayload = exports.NotificationListResponseDto = exports.MarkNotificationReadDto = exports.DeviceRegistrationResponseDto = exports.RegisterDeviceDto = exports.UnregisterDeviceResponseDto = exports.UnregisterDeviceDto = exports.MarkAllNotificationsResponseDto = exports.MarkAllNotificationsReadDto = exports.NotificationItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const notification_enum_1 = require("../enums/notification.enum");
const notification_item_dto_1 = require("../rest/notification-item.dto");
// Re-export REST DTOs for use by NATS layer
var notification_item_dto_2 = require("../rest/notification-item.dto");
Object.defineProperty(exports, "NotificationItemDto", { enumerable: true, get: function () { return notification_item_dto_2.NotificationItemDto; } });
var mark_all_read_dto_1 = require("../rest/mark-all-read.dto");
Object.defineProperty(exports, "MarkAllNotificationsReadDto", { enumerable: true, get: function () { return mark_all_read_dto_1.MarkAllNotificationsReadDto; } });
Object.defineProperty(exports, "MarkAllNotificationsResponseDto", { enumerable: true, get: function () { return mark_all_read_dto_1.MarkAllNotificationsResponseDto; } });
var unregister_device_dto_1 = require("../rest/unregister-device.dto");
Object.defineProperty(exports, "UnregisterDeviceDto", { enumerable: true, get: function () { return unregister_device_dto_1.UnregisterDeviceDto; } });
Object.defineProperty(exports, "UnregisterDeviceResponseDto", { enumerable: true, get: function () { return unregister_device_dto_1.UnregisterDeviceResponseDto; } });
var register_device_dto_1 = require("../rest/register-device.dto");
Object.defineProperty(exports, "RegisterDeviceDto", { enumerable: true, get: function () { return register_device_dto_1.RegisterDeviceDto; } });
Object.defineProperty(exports, "DeviceRegistrationResponseDto", { enumerable: true, get: function () { return register_device_dto_1.DeviceRegistrationResponseDto; } });
var notification_list_dto_1 = require("../rest/notification-list.dto");
Object.defineProperty(exports, "MarkNotificationReadDto", { enumerable: true, get: function () { return notification_list_dto_1.MarkNotificationReadDto; } });
Object.defineProperty(exports, "NotificationListResponseDto", { enumerable: true, get: function () { return notification_list_dto_1.NotificationListResponseDto; } });
// ============= MARK ALL NOTIFICATIONS READ =============
class MarkAllNotificationsReadPayload {
    staffId;
    tenantId;
    timestamp;
}
exports.MarkAllNotificationsReadPayload = MarkAllNotificationsReadPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkAllNotificationsReadPayload.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkAllNotificationsReadPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp cutoff', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], MarkAllNotificationsReadPayload.prototype, "timestamp", void 0);
// ============= UNREGISTER DEVICE =============
class UnregisterDevicePayload {
    staffId;
    tenantId;
    deviceToken;
}
exports.UnregisterDevicePayload = UnregisterDevicePayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnregisterDevicePayload.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnregisterDevicePayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device token to unregister' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnregisterDevicePayload.prototype, "deviceToken", void 0);
// ============= REGISTER DEVICE =============
class RegisterDevicePayload {
    staffId;
    tenantId;
    hotelId;
    deviceToken;
    platform;
    deviceModel;
    appVersion;
    osVersion;
}
exports.RegisterDevicePayload = RegisterDevicePayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDevicePayload.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDevicePayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDevicePayload.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'FCM device token' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDevicePayload.prototype, "deviceToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device platform', enum: notification_enum_1.DevicePlatform }),
    (0, class_validator_1.IsEnum)(notification_enum_1.DevicePlatform),
    __metadata("design:type", String)
], RegisterDevicePayload.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device model/name', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDevicePayload.prototype, "deviceModel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'App version', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDevicePayload.prototype, "appVersion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device OS version', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDevicePayload.prototype, "osVersion", void 0);
// ============= GET MOBILE NOTIFICATIONS =============
class GetMobileNotificationsPayload {
    staffId;
    tenantId;
    hotelId;
    page;
    limit;
}
exports.GetMobileNotificationsPayload = GetMobileNotificationsPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetMobileNotificationsPayload.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetMobileNotificationsPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetMobileNotificationsPayload.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page number' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetMobileNotificationsPayload.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetMobileNotificationsPayload.prototype, "limit", void 0);
class GetMobileNotificationsResponseDto {
    notifications;
    total;
    page;
    limit;
    unreadCount;
}
exports.GetMobileNotificationsResponseDto = GetMobileNotificationsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of notifications', type: [notification_item_dto_1.NotificationItemDto] }),
    (0, class_transformer_1.Type)(() => notification_item_dto_1.NotificationItemDto),
    __metadata("design:type", Array)
], GetMobileNotificationsResponseDto.prototype, "notifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], GetMobileNotificationsResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], GetMobileNotificationsResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], GetMobileNotificationsResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Count of unread notifications' }),
    __metadata("design:type", Number)
], GetMobileNotificationsResponseDto.prototype, "unreadCount", void 0);
// ============= MARK NOTIFICATION READ =============
class MarkNotificationReadPayload {
    staffId;
    tenantId;
    notificationIds;
}
exports.MarkNotificationReadPayload = MarkNotificationReadPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkNotificationReadPayload.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkNotificationReadPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification IDs to mark as read', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], MarkNotificationReadPayload.prototype, "notificationIds", void 0);
class MarkNotificationReadResponseDto {
    success;
    message;
}
exports.MarkNotificationReadResponseDto = MarkNotificationReadResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], MarkNotificationReadResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], MarkNotificationReadResponseDto.prototype, "message", void 0);
// ============= GET UNREAD COUNT =============
class GetUnreadCountPayload {
    staffId;
    tenantId;
    hotelId;
}
exports.GetUnreadCountPayload = GetUnreadCountPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUnreadCountPayload.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUnreadCountPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUnreadCountPayload.prototype, "hotelId", void 0);
class GetUnreadCountResponseDto {
    count;
}
exports.GetUnreadCountResponseDto = GetUnreadCountResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unread notification count' }),
    __metadata("design:type", Number)
], GetUnreadCountResponseDto.prototype, "count", void 0);
// ============= SEND NOTIFICATION =============
class StaffSendNotificationNatsRequest {
    staffId;
    type;
    title;
    body;
    priority;
    data;
    icon;
    imageUrl;
    scheduleFor;
    tenantId;
    hotelId;
}
exports.StaffSendNotificationNatsRequest = StaffSendNotificationNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID to send notification to (or "all" for broadcast)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffSendNotificationNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification type', enum: notification_enum_1.NotificationType }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationType),
    __metadata("design:type", String)
], StaffSendNotificationNatsRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification title' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffSendNotificationNatsRequest.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification message body' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffSendNotificationNatsRequest.prototype, "body", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification priority', enum: notification_enum_1.NotificationPriority }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationPriority),
    __metadata("design:type", String)
], StaffSendNotificationNatsRequest.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional data payload', type: Object }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], StaffSendNotificationNatsRequest.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notification icon' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffSendNotificationNatsRequest.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notification image URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffSendNotificationNatsRequest.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Schedule notification for later' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], StaffSendNotificationNatsRequest.prototype, "scheduleFor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffSendNotificationNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffSendNotificationNatsRequest.prototype, "hotelId", void 0);
// ============= NOTIFICATION SETTINGS =============
class StaffNotificationSettingsDto {
    pushEnabled;
    emailEnabled;
    smsEnabled;
    taskAssignments;
    urgentRequests;
    scheduleChanges;
    systemAlerts;
    teamMessages;
    checkoutReminders;
    maintenanceAlerts;
    soundEnabled;
    vibrationEnabled;
    quietHoursStart;
    quietHoursEnd;
}
exports.StaffNotificationSettingsDto = StaffNotificationSettingsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Enable push notifications' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "pushEnabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Enable email notifications' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "emailEnabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Enable SMS notifications' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "smsEnabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task assignment notifications' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "taskAssignments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Urgent request notifications' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "urgentRequests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Schedule change notifications' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "scheduleChanges", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'System alert notifications' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "systemAlerts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Team message notifications' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "teamMessages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Checkout reminder notifications' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "checkoutReminders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maintenance alert notifications' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "maintenanceAlerts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification sound enabled' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "soundEnabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification vibration enabled' }),
    __metadata("design:type", Boolean)
], StaffNotificationSettingsDto.prototype, "vibrationEnabled", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quiet hours start time (24h format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffNotificationSettingsDto.prototype, "quietHoursStart", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quiet hours end time (24h format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffNotificationSettingsDto.prototype, "quietHoursEnd", void 0);
// ============= NOTIFICATION PREFERENCES (NATS) =============
class QuietHoursDto {
    start;
    end;
}
exports.QuietHoursDto = QuietHoursDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quiet hours start time (24h format, e.g. "22:00")' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuietHoursDto.prototype, "start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quiet hours end time (24h format, e.g. "07:00")' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuietHoursDto.prototype, "end", void 0);
class StaffNotificationPreferencesDto {
    pushEnabled;
    smsEnabled;
    emailEnabled;
    channels;
    quietHours;
    notificationTypes;
}
exports.StaffNotificationPreferencesDto = StaffNotificationPreferencesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable push notifications' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], StaffNotificationPreferencesDto.prototype, "pushEnabled", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable SMS notifications' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], StaffNotificationPreferencesDto.prototype, "smsEnabled", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable email notifications' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], StaffNotificationPreferencesDto.prototype, "emailEnabled", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notification channels', enum: notification_enum_1.NotificationChannel, isArray: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationChannel, { each: true }),
    __metadata("design:type", Array)
], StaffNotificationPreferencesDto.prototype, "channels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quiet hours settings', type: QuietHoursDto }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", QuietHoursDto)
], StaffNotificationPreferencesDto.prototype, "quietHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notification type flags (taskAssignments, urgentRequests, etc.)', type: Object }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], StaffNotificationPreferencesDto.prototype, "notificationTypes", void 0);
class UpdatePreferencesNatsRequest {
    staffId;
    tenantId;
    preferences;
}
exports.UpdatePreferencesNatsRequest = UpdatePreferencesNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePreferencesNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePreferencesNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Preferences to update', type: StaffNotificationPreferencesDto }),
    __metadata("design:type", StaffNotificationPreferencesDto)
], UpdatePreferencesNatsRequest.prototype, "preferences", void 0);
class UpdatePreferencesNatsResponse {
    success;
    message;
}
exports.UpdatePreferencesNatsResponse = UpdatePreferencesNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success flag' }),
    __metadata("design:type", Boolean)
], UpdatePreferencesNatsResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], UpdatePreferencesNatsResponse.prototype, "message", void 0);
class GetPreferencesNatsRequest {
    staffId;
    tenantId;
}
exports.GetPreferencesNatsRequest = GetPreferencesNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetPreferencesNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetPreferencesNatsRequest.prototype, "tenantId", void 0);
class GetPreferencesNatsResponse {
    preferences;
}
exports.GetPreferencesNatsResponse = GetPreferencesNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User notification preferences', type: StaffNotificationPreferencesDto }),
    __metadata("design:type", StaffNotificationPreferencesDto)
], GetPreferencesNatsResponse.prototype, "preferences", void 0);
class DeleteNotificationResponseDto {
    id;
    status;
}
exports.DeleteNotificationResponseDto = DeleteNotificationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Deleted notification ID' }),
    __metadata("design:type", String)
], DeleteNotificationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Deletion status' }),
    __metadata("design:type", String)
], DeleteNotificationResponseDto.prototype, "status", void 0);
// ============= SEND NOTIFICATION (multi-recipient) =============
/**
 * Request for notification.send NATS pattern.
 * Uses staffIds (string[]) for multi-recipient support.
 * Different from StaffSendNotificationNatsRequest which uses staffId (string) for single-recipient.
 */
class SendStaffNotificationMultiNatsRequest {
    tenantId;
    hotelId;
    staffIds;
    type;
    title;
    body;
    priority;
    data;
    icon;
    imageUrl;
    scheduledFor;
    channels;
    recipients;
}
exports.SendStaffNotificationMultiNatsRequest = SendStaffNotificationMultiNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendStaffNotificationMultiNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendStaffNotificationMultiNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff IDs to notify', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SendStaffNotificationMultiNatsRequest.prototype, "staffIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification type', enum: notification_enum_1.NotificationType }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationType),
    __metadata("design:type", String)
], SendStaffNotificationMultiNatsRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification title' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendStaffNotificationMultiNatsRequest.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification body' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendStaffNotificationMultiNatsRequest.prototype, "body", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification priority', enum: notification_enum_1.NotificationPriority }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationPriority),
    __metadata("design:type", String)
], SendStaffNotificationMultiNatsRequest.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional data', type: Object }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SendStaffNotificationMultiNatsRequest.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Icon URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendStaffNotificationMultiNatsRequest.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Image URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendStaffNotificationMultiNatsRequest.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled send time' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SendStaffNotificationMultiNatsRequest.prototype, "scheduledFor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notification channels', enum: notification_enum_1.NotificationChannel, isArray: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationChannel, { each: true }),
    __metadata("design:type", Array)
], SendStaffNotificationMultiNatsRequest.prototype, "channels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Recipients with contact info for EMAIL/SMS channels',
        type: 'array',
        items: { type: 'object' },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SendStaffNotificationMultiNatsRequest.prototype, "recipients", void 0);
class SendNotificationResponseDto {
    success;
    messageId;
}
exports.SendNotificationResponseDto = SendNotificationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success flag' }),
    __metadata("design:type", Boolean)
], SendNotificationResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Message ID' }),
    __metadata("design:type", String)
], SendNotificationResponseDto.prototype, "messageId", void 0);
//# sourceMappingURL=staff-notification.nats.js.map