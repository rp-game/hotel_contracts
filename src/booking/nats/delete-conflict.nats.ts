import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { NatsResponse } from '../../common';

export class DeleteConflictNatsRequest {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  tenantId?: string;
}

export class DeleteConflictNatsData {
  @ApiProperty()
  deleted: boolean;
}

export interface DeleteConflictNatsResponse extends NatsResponse<DeleteConflictNatsData> {
  data: DeleteConflictNatsData;
}
