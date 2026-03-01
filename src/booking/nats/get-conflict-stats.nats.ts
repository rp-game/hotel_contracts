import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { NatsResponse } from '../../common';

export class GetConflictStatsNatsRequest {
  @ApiProperty()
  @IsString()
  tenantId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  startDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  endDate?: string;
}

export class ConflictStatsNatsData {
  @ApiProperty()
  pending: number;

  @ApiProperty()
  inProgress: number;

  @ApiProperty()
  resolved: number;

  @ApiProperty()
  critical: number;

  @ApiProperty()
  total: number;
}

export interface GetConflictStatsNatsResponse extends NatsResponse<ConflictStatsNatsData> {
  data: ConflictStatsNatsData;
}
