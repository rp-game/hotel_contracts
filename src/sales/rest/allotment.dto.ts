/**
 * Allotment REST DTOs
 * Used by api-gateway controllers for request validation and Swagger docs
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsEnum,
  IsDateString,
  IsUUID,
  IsArray,
  IsBoolean,
  Min,
  Max,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { AllotmentStatus, AllotmentInventoryControl, AllotmentPartnerType } from '../enums/allotment.enum';

// --- Nested DTO for allotment details ---

export class AllotmentDetailDto {
  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name' })
  @IsString()
  roomTypeName: string;

  @ApiProperty({ description: 'Number of rooms allotted per night', example: 5 })
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  allottedRooms: number;

  @ApiPropertyOptional({ description: 'Days of week (1=Mon..7=Sun). Null = all days.', example: [1, 3, 5] })
  @IsOptional()
  @IsArray()
  daysOfWeek?: number[] | null;
}

// --- Create ---

export class CreateAllotmentDto {
  @ApiPropertyOptional({ description: 'Hotel ID (required for CHAIN_OWNER, inferred from token for hotel-scoped users)' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiProperty({ description: 'Partner ID (corporate account or travel agent)' })
  @IsUUID()
  partnerId: string;

  @ApiProperty({ description: 'Partner type', enum: AllotmentPartnerType })
  @IsEnum(AllotmentPartnerType)
  partnerType: string;

  @ApiProperty({ description: 'Partner name (denormalized)' })
  @IsString()
  partnerName: string;

  @ApiPropertyOptional({ description: 'Contract number reference' })
  @IsOptional()
  @IsString()
  contractNumber?: string;

  @ApiProperty({ description: 'Allotment start date', example: '2026-04-01' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'Allotment end date', example: '2026-06-30' })
  @IsDateString()
  endDate: string;

  @ApiProperty({ description: 'Auto-release N days before check-in', example: 7, default: 7 })
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(90)
  releaseDays: number;

  @ApiProperty({ description: 'Inventory control mode', enum: AllotmentInventoryControl, default: AllotmentInventoryControl.ELASTIC })
  @IsEnum(AllotmentInventoryControl)
  inventoryControl: string;

  @ApiPropertyOptional({ description: 'Rate plan ID (contract rate)' })
  @IsOptional()
  @IsUUID()
  ratePlanId?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Room type allocations', type: [AllotmentDetailDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => AllotmentDetailDto)
  details: AllotmentDetailDto[];
}

// --- Update ---

export class UpdateAllotmentDto {
  @ApiPropertyOptional() @IsOptional() @IsDateString() startDate?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() endDate?: string;
  @ApiPropertyOptional() @IsOptional() @IsNumber() @Type(() => Number) @Min(0) @Max(90) releaseDays?: number;
  @ApiPropertyOptional({ enum: AllotmentInventoryControl }) @IsOptional() @IsEnum(AllotmentInventoryControl) inventoryControl?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() ratePlanId?: string;
  @ApiPropertyOptional({ enum: AllotmentStatus }) @IsOptional() @IsEnum(AllotmentStatus) status?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() notes?: string;
}

// --- Query ---

export class FindAllotmentsQueryDto {
  @ApiPropertyOptional() @IsOptional() @IsUUID() hotelId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() partnerId?: string;
  @ApiPropertyOptional({ enum: AllotmentPartnerType }) @IsOptional() @IsEnum(AllotmentPartnerType) partnerType?: string;
  @ApiPropertyOptional({ enum: AllotmentStatus }) @IsOptional() @IsEnum(AllotmentStatus) status?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() startDate?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() endDate?: string;
  @ApiPropertyOptional({ default: 1 }) @IsOptional() @IsNumber() @Type(() => Number) @Min(1) page?: number;
  @ApiPropertyOptional({ default: 10 }) @IsOptional() @IsNumber() @Type(() => Number) @Min(1) @Max(100) limit?: number;
}

// --- Operations ---

export class AllotmentReleaseDto {
  @ApiProperty({ description: 'Dates to release', example: ['2026-04-15', '2026-04-16'] })
  @IsArray()
  @IsDateString({}, { each: true })
  dates: string[];

  @ApiPropertyOptional({ description: 'Filter by room type' })
  @IsOptional()
  @IsUUID()
  roomTypeId?: string;
}

export class AllotmentStopSellDto {
  @ApiProperty({ description: 'Dates to stop-sell/unsell', example: ['2026-04-15'] })
  @IsArray()
  @IsDateString({}, { each: true })
  dates: string[];

  @ApiPropertyOptional({ description: 'Filter by room type' })
  @IsOptional()
  @IsUUID()
  roomTypeId?: string;

  @ApiProperty({ description: 'true = stop sell, false = resume sell' })
  @IsBoolean()
  stopSell: boolean;
}

export class CheckAllotmentAvailabilityQueryDto {
  @ApiProperty() @IsUUID() partnerId: string;
  @ApiProperty({ enum: AllotmentPartnerType }) @IsEnum(AllotmentPartnerType) partnerType: string;
  @ApiProperty() @IsUUID() roomTypeId: string;
  @ApiProperty({ description: 'Stay dates', example: ['2026-04-10', '2026-04-11'], type: [String] })
  @Transform(({ value }) => Array.isArray(value) ? value : [value])
  @IsArray()
  @IsDateString({}, { each: true })
  stayDates: string[];
}

// --- Response DTOs (for Swagger) ---

export class AllotmentDetailResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() roomTypeId: string;
  @ApiProperty() roomTypeName: string;
  @ApiProperty() allottedRooms: number;
  @ApiPropertyOptional() daysOfWeek?: number[] | null;
}

export class AllotmentResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() partnerId: string;
  @ApiProperty() partnerType: string;
  @ApiProperty() partnerName: string;
  @ApiPropertyOptional() contractNumber?: string;
  @ApiProperty() startDate: string;
  @ApiProperty() endDate: string;
  @ApiProperty() releaseDays: number;
  @ApiProperty() inventoryControl: string;
  @ApiPropertyOptional() ratePlanId?: string;
  @ApiProperty() status: string;
  @ApiPropertyOptional() notes?: string;
  @ApiPropertyOptional() totalAllottedRooms?: number;
  @ApiPropertyOptional() totalPickedUpRooms?: number;
  @ApiPropertyOptional() utilizationPercent?: number;
  @ApiPropertyOptional({ type: [AllotmentDetailResponseDto] }) details?: AllotmentDetailResponseDto[];
  @ApiPropertyOptional() createdByName?: string;
  @ApiProperty() createdAt: string;
  @ApiProperty() updatedAt: string;
}

export class AllotmentListResponseDto {
  @ApiProperty({ type: [AllotmentResponseDto] }) allotments: AllotmentResponseDto[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
  @ApiProperty() totalPages: number;
}

export class AllotmentDailyInventoryResponseDto {
  @ApiProperty() date: string;
  @ApiProperty() roomTypeId: string;
  @ApiPropertyOptional() roomTypeName?: string;
  @ApiProperty() allottedRooms: number;
  @ApiProperty() pickedUpRooms: number;
  @ApiProperty() releasedRooms: number;
  @ApiProperty() stopSell: boolean;
  @ApiProperty() available: number;
}

export class AllotmentPickupResponseDto {
  @ApiProperty({ type: [AllotmentDailyInventoryResponseDto] }) daily: AllotmentDailyInventoryResponseDto[];
}

export class AllotmentAvailabilityResponseDto {
  @ApiPropertyOptional() allotmentId?: string;
  @ApiPropertyOptional() inventoryControl?: string;
  @ApiProperty() availableDates: string[];
  @ApiProperty() unavailableDates: string[];
}

export class AllotmentSummaryResponseDto {
  @ApiProperty() totalActiveAllotments: number;
  @ApiProperty() totalHeldRooms: number;
  @ApiProperty() totalPickedUpRooms: number;
  @ApiProperty() utilizationPercent: number;
  @ApiProperty() upcomingReleases: number;
}
