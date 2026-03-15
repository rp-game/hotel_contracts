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
exports.WsNotificationEvent = exports.WsBroadcastPayload = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const notification_enum_1 = require("../enums/notification.enum");
// ============= WS BROADCAST PAYLOAD =============
class WsBroadcastPayload {
    staffId;
    hotelId;
    tenantId;
    event;
}
exports.WsBroadcastPayload = WsBroadcastPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target staff ID (for personal room)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WsBroadcastPayload.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID (for hotel-wide room)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WsBroadcastPayload.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (for tenant-wide room)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WsBroadcastPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification event data' }),
    __metadata("design:type", WsNotificationEvent)
], WsBroadcastPayload.prototype, "event", void 0);
// ============= WS NOTIFICATION EVENT =============
class WsNotificationEvent {
    notificationId;
    type;
    title;
    body;
    priority;
    data;
    timestamp;
}
exports.WsNotificationEvent = WsNotificationEvent;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WsNotificationEvent.prototype, "notificationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification type', enum: notification_enum_1.NotificationType }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationType),
    __metadata("design:type", String)
], WsNotificationEvent.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification title' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WsNotificationEvent.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification body' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WsNotificationEvent.prototype, "body", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification priority', enum: notification_enum_1.NotificationPriority }),
    (0, class_validator_1.IsEnum)(notification_enum_1.NotificationPriority),
    __metadata("design:type", String)
], WsNotificationEvent.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional data', type: Object }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], WsNotificationEvent.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WsNotificationEvent.prototype, "timestamp", void 0);
//# sourceMappingURL=websocket-events.js.map