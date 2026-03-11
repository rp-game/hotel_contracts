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
exports.UnregisterDevicePayload = exports.MarkAllNotificationsReadPayload = exports.UnregisterDeviceResponseDto = exports.UnregisterDeviceDto = exports.MarkAllNotificationsResponseDto = exports.MarkAllNotificationsReadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// Re-export REST DTOs for use by NATS layer
var mark_all_read_dto_1 = require("../rest/mark-all-read.dto");
Object.defineProperty(exports, "MarkAllNotificationsReadDto", { enumerable: true, get: function () { return mark_all_read_dto_1.MarkAllNotificationsReadDto; } });
Object.defineProperty(exports, "MarkAllNotificationsResponseDto", { enumerable: true, get: function () { return mark_all_read_dto_1.MarkAllNotificationsResponseDto; } });
var unregister_device_dto_1 = require("../rest/unregister-device.dto");
Object.defineProperty(exports, "UnregisterDeviceDto", { enumerable: true, get: function () { return unregister_device_dto_1.UnregisterDeviceDto; } });
Object.defineProperty(exports, "UnregisterDeviceResponseDto", { enumerable: true, get: function () { return unregister_device_dto_1.UnregisterDeviceResponseDto; } });
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
//# sourceMappingURL=staff-notification.nats.js.map