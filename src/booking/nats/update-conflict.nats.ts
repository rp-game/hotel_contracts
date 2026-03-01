import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum, IsNumber } from 'class-validator';
import { ConflictStatus, ConflictSeverity, ResolutionType } from '../types/conflict-enums';
import { GetConflictByIdNatsResponse } from './get-conflict-by-id.nats';

export class UpdateConflictNatsRequest {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ enum: ConflictStatus })
  @IsOptional()
  @IsEnum(ConflictStatus)
  status?: ConflictStatus;

  @ApiPropertyOptional({ enum: ConflictSeverity })
  @IsOptional()
  @IsEnum(ConflictSeverity)
  severity?: ConflictSeverity;

  @ApiPropertyOptional({ enum: ResolutionType })
  @IsOptional()
  @IsEnum(ResolutionType)
  resolutionType?: ResolutionType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  resolvedBy?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  resolutionNotes?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  actualCost?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  revenueImpact?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export type UpdateConflictNatsResponse = GetConflictByIdNatsResponse;
