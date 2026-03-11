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
exports.NotificationListResponseDto = exports.MarkNotificationReadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const staff_notification_nats_1 = require("../nats/staff-notification.nats");
class MarkNotificationReadDto {
    notificationIds;
}
exports.MarkNotificationReadDto = MarkNotificationReadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification IDs to mark as read', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], MarkNotificationReadDto.prototype, "notificationIds", void 0);
class NotificationListResponseDto {
    notifications;
    total;
    unreadCount;
    page;
    limit;
}
exports.NotificationListResponseDto = NotificationListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of notifications', type: [staff_notification_nats_1.NotificationItemDto] }),
    (0, class_transformer_1.Type)(() => staff_notification_nats_1.NotificationItemDto),
    __metadata("design:type", Array)
], NotificationListResponseDto.prototype, "notifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count of notifications' }),
    __metadata("design:type", Number)
], NotificationListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Count of unread notifications' }),
    __metadata("design:type", Number)
], NotificationListResponseDto.prototype, "unreadCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], NotificationListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], NotificationListResponseDto.prototype, "limit", void 0);
//# sourceMappingURL=notification-list.dto.js.map