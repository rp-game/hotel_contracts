import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UnregisterDeviceDto {
  @ApiProperty({ description: 'Device token to unregister' })
  @IsString()
  deviceToken: string;
}

export class UnregisterDeviceResponseDto {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Response message' })
  message: string;
}
