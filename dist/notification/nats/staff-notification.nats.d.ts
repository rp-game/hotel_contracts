export { MarkAllNotificationsReadDto, MarkAllNotificationsResponseDto } from '../rest/mark-all-read.dto';
export { UnregisterDeviceDto, UnregisterDeviceResponseDto } from '../rest/unregister-device.dto';
export declare class MarkAllNotificationsReadPayload {
    staffId: string;
    tenantId: string;
    timestamp?: string;
}
export declare class UnregisterDevicePayload {
    staffId: string;
    tenantId: string;
    deviceToken: string;
}
//# sourceMappingURL=staff-notification.nats.d.ts.map