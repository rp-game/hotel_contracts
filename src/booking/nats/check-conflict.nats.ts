import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CheckBookingConflictsNatsRequest {
  @ApiProperty({ description: 'Room ID to check' })
  @IsString()
  roomId: string;

  @ApiProperty({ example: '2024-07-01', description: 'Check-in date (YYYY-MM-DD)' })
  @IsString()
  checkIn: string;

  @ApiProperty({ example: '2024-07-05', description: 'Check-out date (YYYY-MM-DD)' })
  @IsString()
  checkOut: string;
}

export class AnalyzeBookingConflictsNatsRequest {
  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Room ID filter' })
  @IsOptional()
  @IsString()
  roomId?: string;

  @ApiPropertyOptional({ example: '2024-07-01', description: 'Start date (YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  startDate?: string;

  @ApiPropertyOptional({ example: '2024-07-31', description: 'End date (YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  endDate?: string;
}

export class SimpleDetectConflictsNatsRequest {
  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Room ID filter' })
  @IsOptional()
  @IsString()
  roomId?: string;

  @ApiPropertyOptional({ example: '2024-07-01', description: 'Start date (YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  startDate?: string;

  @ApiPropertyOptional({ example: '2024-07-31', description: 'End date (YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  endDate?: string;
}

export class SimpleConflictStatsNatsRequest {
  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsString()
  tenantId?: string;
}
