import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { NotificationItemDto } from './notification-item.dto';

export class MarkNotificationReadDto {
  @ApiProperty({ description: 'Notification IDs to mark as read', type: [String] })
  @IsArray()
  @IsString({ each: true })
  notificationIds: string[];
}

export class NotificationListResponseDto {
  @ApiProperty({ description: 'List of notifications', type: [NotificationItemDto] })
  @Type(() => NotificationItemDto)
  notifications: NotificationItemDto[];

  @ApiProperty({ description: 'Total count of notifications' })
  total: number;

  @ApiProperty({ description: 'Count of unread notifications' })
  unreadCount: number;

  @ApiProperty({ description: 'Current page' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}
