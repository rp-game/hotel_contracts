import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsBoolean, IsEnum, IsObject, ValidateNested, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Tax Configuration DTO
 * Stores hotel-level tax settings (VAT, service charge, display mode)
 * Compounding order is always: SERVICE_CHARGE first, then VAT (Vietnam standard)
 */
export class TaxConfigurationDto {
  @ApiPropertyOptional({
    description: 'VAT rate in percentage (e.g. 8 for 8%)',
    example: 8,
    minimum: 0,
    maximum: 100,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  vatRate?: number;

  @ApiPropertyOptional({
    description: 'Service charge rate in percentage (e.g. 5 for 5%)',
    example: 5,
    minimum: 0,
    maximum: 100,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  serviceChargeRate?: number;

  @ApiPropertyOptional({
    enum: ['inclusive', 'exclusive'],
    description: 'How prices are displayed: inclusive (tax included in shown price) or exclusive (tax shown separately, "++" convention)',
    example: 'exclusive',
  })
  @IsOptional()
  @IsEnum(['inclusive', 'exclusive'])
  taxDisplayMode?: 'inclusive' | 'exclusive';

  @ApiPropertyOptional({
    enum: ['pre_tax', 'post_tax'],
    description: 'How prices are inputted: pre_tax means staff enter net price (tax calculated on top), post_tax means staff enter gross price (system back-calculates net before storing)',
    example: 'pre_tax',
    default: 'pre_tax',
  })
  @IsOptional()
  @IsEnum(['pre_tax', 'post_tax'])
  priceInputMode?: 'pre_tax' | 'post_tax';
}

/**
 * Single shift time range definition
 */
export class ShiftTimeRangeDto {
  @ApiProperty({ description: 'Shift start time (HH:mm)', example: '06:00' })
  @IsString()
  start: string;

  @ApiProperty({ description: 'Shift end time (HH:mm)', example: '14:00' })
  @IsString()
  end: string;

  @ApiPropertyOptional({ description: 'Display label', example: 'Morning' })
  @IsOptional()
  @IsString()
  label?: string;
}

/**
 * Cashier Shift Configuration DTO
 * Defines shift time ranges for the hotel
 */
export class ShiftConfigDto {
  @ApiPropertyOptional({
    description: 'Morning shift time range',
    type: ShiftTimeRangeDto,
    example: { start: '06:00', end: '14:00', label: 'Morning' },
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => ShiftTimeRangeDto)
  morning?: ShiftTimeRangeDto;

  @ApiPropertyOptional({
    description: 'Afternoon shift time range',
    type: ShiftTimeRangeDto,
    example: { start: '14:00', end: '22:00', label: 'Afternoon' },
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => ShiftTimeRangeDto)
  afternoon?: ShiftTimeRangeDto;

  @ApiPropertyOptional({
    description: 'Night shift time range',
    type: ShiftTimeRangeDto,
    example: { start: '22:00', end: '06:00', label: 'Night' },
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => ShiftTimeRangeDto)
  night?: ShiftTimeRangeDto;
}

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

  @ApiPropertyOptional({ description: 'Rounding unit for monetary amounts (e.g. 1 for VND, 0.01 for USD)', example: 1 })
  @IsOptional()
  @IsNumber()
  @Min(0.000001)
  currencyRounding?: number;

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

  @ApiPropertyOptional({
    description: 'Tax configuration for the hotel',
    type: TaxConfigurationDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => TaxConfigurationDto)
  taxConfiguration?: TaxConfigurationDto;

  @ApiPropertyOptional({
    description: 'Cashier shift time configuration',
    type: ShiftConfigDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => ShiftConfigDto)
  shiftConfig?: ShiftConfigDto;

  @ApiPropertyOptional({
    description: 'Enable multi-warehouse stock tracking. When true, goods receipts, issues, and adjustments require a warehouse selection.',
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  isMultiWarehouse?: boolean;

  @ApiPropertyOptional({
    description: 'Procurement mode: SELF = hotel buys from suppliers, CHAIN_ONLY = only receives from chain warehouse, BOTH = both (default)',
    enum: ['SELF', 'CHAIN_ONLY', 'BOTH'],
    default: 'BOTH',
  })
  @IsOptional()
  @IsString()
  procurementMode?: string;

  @ApiPropertyOptional({
    description: 'Bank transfer verification mode. SIMPLE = receptionist confirms immediately (no transaction ID required). VERIFIED = payment stays PENDING until accountant enters transaction ID.',
    enum: ['SIMPLE', 'VERIFIED'],
    default: 'VERIFIED',
  })
  @IsOptional()
  @IsEnum(['SIMPLE', 'VERIFIED'])
  bankTransferVerificationMode?: 'SIMPLE' | 'VERIFIED';
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
