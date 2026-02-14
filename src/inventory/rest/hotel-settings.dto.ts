import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsBoolean, IsEnum, IsObject, ValidateNested, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Hotel Operation Settings - Unified DTO for REST and NATS
 * Single source of truth for operation settings across all layers
 */
export class HotelOperationSettingsDto {
  @ApiPropertyOptional({ description: 'Default check-in time (HH:mm format)', example: '15:00' })
  @IsOptional()
  @IsString()
  checkInTime?: string;

  @ApiPropertyOptional({ description: 'Default check-out time (HH:mm format)', example: '11:00' })
  @IsOptional()
  @IsString()
  checkOutTime?: string;

  @ApiPropertyOptional({ description: 'Hotel timezone', example: 'Asia/Ho_Chi_Minh' })
  @IsOptional()
  @IsString()
  timezone?: string;

  @ApiPropertyOptional({ description: 'Currency code', example: 'VND' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Default cleaning duration in minutes', example: 60 })
  @IsOptional()
  @IsNumber()
  @Min(15)
  @Max(300)
  defaultCleaningDuration?: number;

  @ApiPropertyOptional({ description: 'Grace period for late check-out in minutes', example: 15 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(120)
  gracePeriodMinutes?: number;

  @ApiPropertyOptional({ description: 'Auto-assign rooms when booking is confirmed', example: false })
  @IsOptional()
  @IsBoolean()
  autoAssignRooms?: boolean;

  @ApiPropertyOptional({ description: 'Enable/disable hourly booking mode', example: false })
  @IsOptional()
  @IsBoolean()
  hourlyBooking?: boolean;

  @ApiPropertyOptional({
    enum: ['hourly', 'daily'],
    description: 'Preferred booking mode',
    example: 'daily'
  })
  @IsOptional()
  @IsEnum(['hourly', 'daily'])
  preferBookingMode?: 'hourly' | 'daily';

  @ApiPropertyOptional({
    type: 'object',
    description: 'Business hours (start and end times in HH:mm format)',
    example: { start: '06:00', end: '22:00' },
    additionalProperties: false,
    properties: {
      start: { type: 'string', example: '06:00' },
      end: { type: 'string', example: '22:00' }
    }
  })
  @IsOptional()
  @IsObject()
  businessHours?: {
    start: string;
    end: string;
  };
}

/**
 * Update Hotel Settings Request DTO
 * Used for POST /hotels/:id/settings endpoint
 * Includes both basic hotel info and operation settings
 */
export class UpdateHotelSettingsRequestDto {
  @ApiPropertyOptional({ description: 'Hotel name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Hotel address' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ description: 'City' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ description: 'Country' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ description: 'Contact email address' })
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiPropertyOptional({ description: 'Contact phone number' })
  @IsOptional()
  @IsString()
  contactPhone?: string;

  @ApiPropertyOptional({
    description: 'Operation settings',
    type: HotelOperationSettingsDto
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => HotelOperationSettingsDto)
  operationSettings?: HotelOperationSettingsDto;
}

/**
 * Hotel Settings Response DTO
 * Used for GET /hotels/:id/settings and POST /hotels/:id/settings responses
 * Returns complete hotel information including operation settings
 */
export class HotelSettingsResponseDto {
  @ApiProperty({ description: 'Hotel ID' })
  id: string;

  @ApiProperty({ description: 'Hotel name' })
  name: string;

  @ApiPropertyOptional({ description: 'Hotel address' })
  address?: string;

  @ApiPropertyOptional({ description: 'City' })
  city?: string;

  @ApiPropertyOptional({ description: 'Country' })
  country?: string;

  @ApiPropertyOptional({ description: 'Contact email address' })
  contactEmail?: string;

  @ApiPropertyOptional({ description: 'Contact phone number' })
  contactPhone?: string;

  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({
    description: 'Operation settings',
    type: HotelOperationSettingsDto
  })
  operationSettings?: HotelOperationSettingsDto;

  @ApiPropertyOptional({ description: 'Created at timestamp' })
  createdAt?: string;

  @ApiPropertyOptional({ description: 'Updated at timestamp' })
  updatedAt?: string;
}
