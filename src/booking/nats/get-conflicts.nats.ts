import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common';
import { ConflictStatus, ConflictSeverity, ConflictType, ResolutionType } from '../types/conflict-enums';

export class GetConflictsNatsRequest {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiPropertyOptional({ enum: ConflictStatus })
  @IsOptional()
  @IsEnum(ConflictStatus)
  status?: ConflictStatus;

  @ApiPropertyOptional({ enum: ConflictSeverity })
  @IsOptional()
  @IsEnum(ConflictSeverity)
  severity?: ConflictSeverity;

  @ApiPropertyOptional({ enum: ConflictType })
  @IsOptional()
  @IsEnum(ConflictType)
  conflictType?: ConflictType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  roomId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  bookingId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  startDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  endDate?: string;

  @ApiPropertyOptional({ default: 1, minimum: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ default: 20, minimum: 1, maximum: 100 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number;
}

export class ConflictNatsData {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  hotelId: string;

  @ApiProperty({ enum: ConflictType })
  conflictType: ConflictType;

  @ApiProperty({ enum: ConflictSeverity })
  severity: ConflictSeverity;

  @ApiProperty({ enum: ConflictStatus })
  status: ConflictStatus;

  @ApiProperty()
  roomId: string;

  @ApiProperty()
  roomNumber: string;

  @ApiProperty()
  conflictDate: string;

  @ApiProperty()
  primaryBookingId: string;

  @ApiProperty({ type: [String] })
  conflictingBookingIds: string[];

  @ApiProperty()
  totalGuestsAffected: number;

  @ApiProperty()
  hoursUntilImpact: number;

  @ApiProperty()
  detectedBy: string;

  @ApiProperty()
  detectionMethod: string;

  @ApiPropertyOptional({ enum: ResolutionType, nullable: true })
  resolutionType?: ResolutionType;

  @ApiPropertyOptional({ nullable: true })
  resolvedAt?: string;

  @ApiPropertyOptional({ nullable: true })
  resolvedBy?: string;

  @ApiPropertyOptional({ nullable: true })
  notes?: string;
}

export class ConflictPaginationData {
  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  totalPages: number;
}

export class GetConflictsNatsResponseData {
  @ApiProperty({ type: [ConflictNatsData] })
  @Type(() => ConflictNatsData)
  data: ConflictNatsData[];

  @ApiProperty({ type: ConflictPaginationData })
  @Type(() => ConflictPaginationData)
  pagination: ConflictPaginationData;
}

export class ConflictListResponseDto {
  @ApiProperty({ type: [ConflictNatsData] })
  @Type(() => ConflictNatsData)
  data: ConflictNatsData[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}

export interface GetConflictsNatsResponse extends NatsResponse<GetConflictsNatsResponseData> {
  data: GetConflictsNatsResponseData;
}
