import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { NatsResponse } from '../../common';
import { ConflictNatsData } from './get-conflicts.nats';

export class GetConflictByIdNatsRequest {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  tenantId?: string;
}

export interface GetConflictByIdNatsResponse extends NatsResponse<ConflictNatsData> {
  data: ConflictNatsData;
}
