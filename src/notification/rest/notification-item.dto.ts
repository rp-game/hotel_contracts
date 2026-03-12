import { ApiProperty } from '@nestjs/swagger';
import { NotificationType, NotificationPriority } from '../enums/notification.enum';

export class NotificationItemDto {
  @ApiProperty({ description: 'Notification ID' })
  id: string;

  @ApiProperty({ description: 'Recipient staff ID' })
  recipientId: string;

  @ApiProperty({ description: 'Notification type', enum: NotificationType })
  type: NotificationType;

  @ApiProperty({ description: 'Notification title' })
  title: string;

  @ApiProperty({ description: 'Notification message body' })
  message: string;

  @ApiProperty({ description: 'Notification priority', enum: NotificationPriority })
  priority: NotificationPriority;

  @ApiProperty({ description: 'Whether notification has been read' })
  isRead: boolean;

  @ApiProperty({ description: 'Whether notification has been sent' })
  isSent: boolean;

  @ApiProperty({ description: 'Additional data payload', required: false, type: Object })
  data?: Record<string, unknown>;

  @ApiProperty({ description: 'Time when notification was read', required: false })
  readAt?: string;

  @ApiProperty({ description: 'Time when notification was sent', required: false })
  sentAt?: string;

  @ApiProperty({ description: 'Notification creation time' })
  createdAt: string;
}
