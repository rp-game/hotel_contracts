import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common';
import { ConflictNatsData } from './get-conflicts.nats';

export class DetectConflictsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ example: '2024-07-01', description: 'Start date (YYYY-MM-DD)' })
  @IsString()
  startDate: string;

  @ApiProperty({ example: '2024-07-31', description: 'End date (YYYY-MM-DD)' })
  @IsString()
  endDate: string;

  @ApiPropertyOptional({ type: [String], description: 'Optional room IDs to scan' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  roomIds?: string[];
}

export class DetectConflictsSummary {
  @ApiProperty()
  doubleBookings: number;

  @ApiProperty()
  maintenanceOverlaps: number;

  @ApiProperty()
  totalRoomsAffected: number;
}

export class DetectConflictsNatsResponseData {
  @ApiProperty({ type: [ConflictNatsData] })
  @Type(() => ConflictNatsData)
  conflicts: ConflictNatsData[];

  @ApiProperty()
  totalConflicts: number;

  @ApiProperty()
  highSeverityCount: number;

  @ApiProperty({ type: DetectConflictsSummary })
  @Type(() => DetectConflictsSummary)
  summary: DetectConflictsSummary;
}

export interface DetectConflictsNatsResponse extends NatsResponse<DetectConflictsNatsResponseData> {
  data: DetectConflictsNatsResponseData;
}
