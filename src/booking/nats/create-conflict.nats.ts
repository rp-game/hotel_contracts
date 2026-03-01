import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum, IsArray } from 'class-validator';
import { ConflictType, ConflictSeverity } from '../types/conflict-enums';
import { GetConflictByIdNatsResponse } from './get-conflict-by-id.nats';

export class CreateConflictNatsRequest {
  @ApiProperty()
  @IsString()
  tenantId: string;

  @ApiProperty()
  @IsString()
  hotelId: string;

  @ApiProperty({ enum: ConflictType })
  @IsEnum(ConflictType)
  conflictType: ConflictType;

  @ApiProperty({ enum: ConflictSeverity })
  @IsEnum(ConflictSeverity)
  severity: ConflictSeverity;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  affectedBookings: string[];

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  affectedRooms: string[];

  @ApiProperty()
  @IsString()
  description: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  detectedBy?: string;
}

export type CreateConflictNatsResponse = GetConflictByIdNatsResponse;
