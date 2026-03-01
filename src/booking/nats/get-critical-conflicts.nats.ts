import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { GetConflictsNatsResponse } from './get-conflicts.nats';

export class GetCriticalConflictsNatsRequest {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  hotelId?: string;
}

export type GetCriticalConflictsNatsResponse = GetConflictsNatsResponse;
