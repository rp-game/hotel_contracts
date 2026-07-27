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
exports.NotificationItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const notification_enum_1 = require("../enums/notification.enum");
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
//# sourceMappingURL=notification-item.dto.js.map