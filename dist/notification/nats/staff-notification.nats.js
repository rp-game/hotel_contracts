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
exports.GetUnreadCountResponseDto = exports.GetUnreadCountPayload = exports.MarkNotificationReadResponseDto = exports.MarkNotificationReadPayload = exports.GetMobileNotificationsResponseDto = exports.NotificationItemDto = exports.GetMobileNotificationsPayload = exports.RegisterDevicePayload = exports.UnregisterDevicePayload = exports.MarkAllNotificationsReadPayload = exports.NotificationListResponseDto = exports.MarkNotificationReadDto = exports.DeviceRegistrationResponseDto = exports.RegisterDeviceDto = exports.UnregisterDeviceResponseDto = exports.UnregisterDeviceDto = exports.MarkAllNotificationsResponseDto = exports.MarkAllNotificationsReadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const notification_enum_1 = require("../enums/notification.enum");
// Re-export REST DTOs for use by NATS layer
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
class NotificationItemDto {
    id;
    recipientId;
    type;
    title;
    message;
    priority;
    isRead;
    isSent;
    data;
    readAt;
    sentAt;
    createdAt;
}
exports.NotificationItemDto = NotificationItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification ID' }),
    __metadata("design:type", String)
], NotificationItemDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Recipient staff ID' }),
    __metadata("design:type", String)
], NotificationItemDto.prototype, "recipientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification type', enum: notification_enum_1.NotificationType }),
    __metadata("design:type", String)
], NotificationItemDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification title' }),
    __metadata("design:type", String)
], NotificationItemDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification message body' }),
    __metadata("design:type", String)
], NotificationItemDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification priority', enum: notification_enum_1.NotificationPriority }),
    __metadata("design:type", String)
], NotificationItemDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether notification has been read' }),
    __metadata("design:type", Boolean)
], NotificationItemDto.prototype, "isRead", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether notification has been sent' }),
    __metadata("design:type", Boolean)
], NotificationItemDto.prototype, "isSent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional data payload', required: false, type: Object }),
    __metadata("design:type", Object)
], NotificationItemDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Time when notification was read', required: false }),
    __metadata("design:type", String)
], NotificationItemDto.prototype, "readAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Time when notification was sent', required: false }),
    __metadata("design:type", String)
], NotificationItemDto.prototype, "sentAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification creation time' }),
    __metadata("design:type", String)
], NotificationItemDto.prototype, "createdAt", void 0);
class GetMobileNotificationsResponseDto {
    notifications;
    total;
    page;
    limit;
    unreadCount;
}
exports.GetMobileNotificationsResponseDto = GetMobileNotificationsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of notifications', type: [NotificationItemDto] }),
    (0, class_transformer_1.Type)(() => NotificationItemDto),
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
//# sourceMappingURL=staff-notification.nats.js.map