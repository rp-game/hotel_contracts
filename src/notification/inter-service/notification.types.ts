import { NatsResponse } from '../../common';
import { BookingNotificationType } from '../enums';

export interface SendBookingNotificationRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  notificationType: BookingNotificationType;
  recipients: {
    email?: string;
    phone?: string;
    userId?: string;
  }[];
  data?: Record<string, any>;
  language?: string;
}

export interface NotificationResponse extends NatsResponse {
  data?: {
    notificationId?: string;
  };
}
