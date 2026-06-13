export enum NotificationType {
  TASK_ASSIGNED = 'task_assigned',
  TASK_COMPLETED = 'task_completed',
  TASK_OVERDUE = 'task_overdue',
  ROOM_READY = 'room_ready',
  MAINTENANCE_REQUEST = 'maintenance_request',
  SHIFT_REMINDER = 'shift_reminder',
  SYSTEM_ALERT = 'system_alert',
  BOOKING_UPDATE = 'booking_update',
  GUEST_REQUEST = 'guest_request',
  GENERAL = 'general',
  OTA_BOOKING_NEW = 'ota_booking_new',
  OTA_BOOKING_MODIFIED = 'ota_booking_modified',
  OTA_BOOKING_CANCELLED = 'ota_booking_cancelled',
  BOOKING_CONFLICT = 'booking_conflict',
  ROOM_MOVE_PENDING_APPROVAL = 'room_move_pending_approval',
  ROOM_MOVE_APPROVED = 'room_move_approved',
  ROOM_MOVE_REJECTED = 'room_move_rejected',
  PAYMENT_VERIFICATION_PENDING = 'payment_verification_pending',
  AMENITY_REQUEST_NEW = 'amenity_request_new',
  CHANNEL_SYNC_FAILED = 'channel_sync_failed',
}

export enum NotificationPriority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  URGENT = 'urgent',
}

export enum NotificationChannel {
  IN_APP = 'in_app',
  PUSH = 'push',
  SMS = 'sms',
  EMAIL = 'email',
  WEBSOCKET = 'websocket',
}

export enum DevicePlatform {
  IOS = 'ios',
  ANDROID = 'android',
}
