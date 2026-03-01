import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { NatsResponse } from '../../common';
import { ConflictNatsData } from './get-conflicts.nats';

export class GetConflictByIdNatsRequest {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  tenantId: string;
}

export interface GetConflictByIdNatsResponse extends NatsResponse<ConflictNatsData> {
  data: ConflictNatsData;
}
