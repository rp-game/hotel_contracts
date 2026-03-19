/**
 * Sales Target Response DTOs
 * Used for Swagger documentation and API responses
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SalesTargetResponseDto {
  @ApiProperty({ description: 'Target ID' })
  id: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Sales person ID' })
  salesPersonId: string;

  @ApiProperty({ description: 'Sales person name' })
  salesPersonName: string;

  @ApiProperty({ description: 'Year' })
  year: number;

  @ApiProperty({ description: 'Month (1-12)' })
  month: number;

  @ApiProperty({ description: 'Target revenue' })
  targetRevenue: number;

  @ApiPropertyOptional({ description: 'Target room nights' })
  targetRoomNights?: number;

  @ApiPropertyOptional({ description: 'Target new accounts' })
  targetNewAccounts?: number;

  @ApiProperty({ description: 'Actual revenue (calculated)' })
  actualRevenue: number;

  @ApiProperty({ description: 'Actual room nights (calculated)' })
  actualRoomNights: number;

  @ApiProperty({ description: 'Actual new accounts (calculated)' })
  actualNewAccounts: number;

  @ApiProperty({ description: 'Achievement rate percentage' })
  achievementRate: number;

  @ApiProperty({ description: 'Status' })
  status: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Created by user name' })
  createdByName?: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: Date;
}

export class SalesTargetListResponseDto {
  @ApiProperty({ description: 'Sales targets', type: [SalesTargetResponseDto] })
  targets: SalesTargetResponseDto[];

  @ApiProperty({ description: 'Total count' })
  total: number;
}
