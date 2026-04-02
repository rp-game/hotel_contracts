/**
 * Mark Lost DTO
 * Used to manually mark a sales lead as lost with reason
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsOptional, IsString } from 'class-validator';

export class MarkLostDto {
  @ApiProperty({
    description: 'Loss reason ID from sales_loss_reasons table (UUID)',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID()
  lossReasonId: string;

  @ApiPropertyOptional({
    description: 'Optional notes explaining why the deal was lost',
    example: 'Client budget was reduced due to economic downturn',
    maxLength: 500,
  })
  @IsOptional()
  @IsString()
  lostNotes?: string;
}
