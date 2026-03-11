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
exports.DeviceRegistrationResponseDto = exports.RegisterDeviceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const notification_enum_1 = require("../enums/notification.enum");
class RegisterDeviceDto {
    deviceToken;
    platform;
    deviceModel;
    appVersion;
    osVersion;
}
exports.RegisterDeviceDto = RegisterDeviceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'FCM device token' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDeviceDto.prototype, "deviceToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device platform', enum: notification_enum_1.DevicePlatform }),
    (0, class_validator_1.IsEnum)(notification_enum_1.DevicePlatform),
    __metadata("design:type", String)
], RegisterDeviceDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device model/name', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDeviceDto.prototype, "deviceModel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'App version', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDeviceDto.prototype, "appVersion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device OS version', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDeviceDto.prototype, "osVersion", void 0);
class DeviceRegistrationResponseDto {
    success;
    deviceId;
    message;
}
exports.DeviceRegistrationResponseDto = DeviceRegistrationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device registration status' }),
    __metadata("design:type", Boolean)
], DeviceRegistrationResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device registration ID', required: false }),
    __metadata("design:type", String)
], DeviceRegistrationResponseDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message', required: false }),
    __metadata("design:type", String)
], DeviceRegistrationResponseDto.prototype, "message", void 0);
//# sourceMappingURL=register-device.dto.js.map