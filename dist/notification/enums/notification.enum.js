"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicePlatform = exports.NotificationChannel = exports.NotificationPriority = exports.NotificationType = void 0;
var NotificationType;
(function (NotificationType) {
    NotificationType["TASK_ASSIGNED"] = "task_assigned";
    NotificationType["TASK_COMPLETED"] = "task_completed";
    NotificationType["TASK_OVERDUE"] = "task_overdue";
    NotificationType["ROOM_READY"] = "room_ready";
    NotificationType["MAINTENANCE_REQUEST"] = "maintenance_request";
    NotificationType["SHIFT_REMINDER"] = "shift_reminder";
    NotificationType["SYSTEM_ALERT"] = "system_alert";
    NotificationType["BOOKING_UPDATE"] = "booking_update";
    NotificationType["GUEST_REQUEST"] = "guest_request";
    NotificationType["GENERAL"] = "general";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
var NotificationPriority;
(function (NotificationPriority) {
    NotificationPriority["LOW"] = "low";
    NotificationPriority["NORMAL"] = "normal";
    NotificationPriority["HIGH"] = "high";
    NotificationPriority["URGENT"] = "urgent";
})(NotificationPriority || (exports.NotificationPriority = NotificationPriority = {}));
var NotificationChannel;
(function (NotificationChannel) {
    NotificationChannel["IN_APP"] = "in_app";
    NotificationChannel["PUSH"] = "push";
    NotificationChannel["SMS"] = "sms";
    NotificationChannel["EMAIL"] = "email";
    NotificationChannel["WEBSOCKET"] = "websocket";
})(NotificationChannel || (exports.NotificationChannel = NotificationChannel = {}));
var DevicePlatform;
(function (DevicePlatform) {
    DevicePlatform["IOS"] = "ios";
    DevicePlatform["ANDROID"] = "android";
})(DevicePlatform || (exports.DevicePlatform = DevicePlatform = {}));
//# sourceMappingURL=notification.enum.js.map