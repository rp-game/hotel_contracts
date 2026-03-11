import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString } from 'class-validator';

// Re-export REST DTOs for use by NATS layer
export { MarkAllNotificationsReadDto, MarkAllNotificationsResponseDto } from '../rest/mark-all-read.dto';
export { UnregisterDeviceDto, UnregisterDeviceResponseDto } from '../rest/unregister-device.dto';

// ============= MARK ALL NOTIFICATIONS READ =============

export class MarkAllNotificationsReadPayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Timestamp cutoff', required: false })
  @IsOptional()
  @IsDateString()
  timestamp?: string;
}

// ============= UNREGISTER DEVICE =============

export class UnregisterDevicePayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Device token to unregister' })
  @IsString()
  deviceToken: string;
}
