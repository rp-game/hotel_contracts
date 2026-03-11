import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { DevicePlatform } from '../enums/notification.enum';

export class RegisterDeviceDto {
  @ApiProperty({ description: 'FCM device token' })
  @IsString()
  @IsNotEmpty()
  deviceToken: string;

  @ApiProperty({ description: 'Device platform', enum: DevicePlatform })
  @IsEnum(DevicePlatform)
  platform: DevicePlatform;

  @ApiProperty({ description: 'Device model/name', required: false })
  @IsOptional()
  @IsString()
  deviceModel?: string;

  @ApiProperty({ description: 'App version', required: false })
  @IsOptional()
  @IsString()
  appVersion?: string;

  @ApiProperty({ description: 'Device OS version', required: false })
  @IsOptional()
  @IsString()
  osVersion?: string;
}

export class DeviceRegistrationResponseDto {
  @ApiProperty({ description: 'Device registration status' })
  success: boolean;

  @ApiProperty({ description: 'Device registration ID', required: false })
  deviceId?: string;

  @ApiProperty({ description: 'Response message', required: false })
  message?: string;
}
