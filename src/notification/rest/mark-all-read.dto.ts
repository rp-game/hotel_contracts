import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsDateString } from 'class-validator';

export class MarkAllNotificationsReadDto {
  @ApiProperty({ description: 'Mark all as read timestamp', required: false })
  @IsOptional()
  @IsDateString()
  timestamp?: string;
}

export class MarkAllNotificationsResponseDto {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Number of notifications marked as read' })
  markedCount: number;

  @ApiProperty({ description: 'Response message' })
  message: string;
}
