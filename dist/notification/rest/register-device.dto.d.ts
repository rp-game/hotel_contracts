import { DevicePlatform } from '../enums/notification.enum';
export declare class RegisterDeviceDto {
    deviceToken: string;
    platform: DevicePlatform;
    deviceModel?: string;
    appVersion?: string;
    osVersion?: string;
}
export declare class DeviceRegistrationResponseDto {
    success: boolean;
    deviceId?: string;
    message?: string;
}
//# sourceMappingURL=register-device.dto.d.ts.map