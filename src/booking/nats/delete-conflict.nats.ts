import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { NatsResponse } from '../../common';

export class DeleteConflictNatsRequest {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  tenantId: string;
}

export class DeleteConflictNatsData {
  @ApiProperty()
  deleted: boolean;
}

export interface DeleteConflictNatsResponse extends NatsResponse<DeleteConflictNatsData> {
  data: DeleteConflictNatsData;
}
