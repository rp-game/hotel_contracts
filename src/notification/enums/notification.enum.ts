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
