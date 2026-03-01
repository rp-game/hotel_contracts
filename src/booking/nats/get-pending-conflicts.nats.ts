import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { GetConflictsNatsResponse } from './get-conflicts.nats';

export class GetPendingConflictsNatsRequest {
  @ApiProperty()
  @IsString()
  tenantId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  hotelId?: string;
}

export type GetPendingConflictsNatsResponse = GetConflictsNatsResponse;
