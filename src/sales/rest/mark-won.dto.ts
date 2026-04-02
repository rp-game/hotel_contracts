/**
 * Mark Won DTO
 * Used to manually mark a sales lead as won
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class MarkWonDto {
  @ApiProperty({
    description: 'Booking ID that won the deal (UUID)',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID()
  bookingId: string;

  @ApiProperty({
    description: 'Total booking value (won deal value)',
    example: 5000000,
  })
  @IsNumber()
  @Min(0)
  wonValue: number;

  @ApiPropertyOptional({
    description: 'Optional notes about the won deal',
    example: 'Corporate group booking for conference',
    maxLength: 500,
  })
  @IsOptional()
  @IsString()
  wonNotes?: string;
}
