/**
 * Sales Dashboard REST DTOs
 * Used by api-gateway controllers for request validation and Swagger docs
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, Min, Max, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { IsNullableUUID } from '../../common/validators';

export class GetSalesDashboardQueryDto {
  @ApiPropertyOptional({ description: 'Hotel ID (or "null" for chain-level)' })
  @IsOptional()
  @IsNullableUUID()
  hotelId?: string;

  @ApiProperty({ description: 'Year', example: 2026 })
  @IsNumber()
  @Type(() => Number)
  @Min(2020)
  @Max(2100)
  year: number;

  @ApiProperty({ description: 'Month (1-12)', example: 3 })
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @Max(12)
  month: number;
}

export class ChannelBreakdownDto {
  @ApiProperty() source: string;
  @ApiProperty() revenue: number;
  @ApiProperty() roomNights: number;
  @ApiProperty() bookingCount: number;
  @ApiProperty() percentage: number;
}

export class TopPerformerDto {
  @ApiProperty() salesPersonId: string;
  @ApiProperty() salesPersonName: string;
  @ApiProperty() revenue: number;
  @ApiProperty() roomNights: number;
  @ApiProperty() accountCount: number;
  @ApiProperty() achievementRate: number;
}

export class TopAccountDto {
  @ApiProperty() accountId: string;
  @ApiProperty() accountName: string;
  @ApiProperty({ enum: ['CORPORATE', 'TRAVEL_AGENT'] }) accountType: string;
  @ApiProperty() revenue: number;
  @ApiProperty() roomNights: number;
  @ApiProperty() bookingCount: number;
}

export class SalesDashboardResponseDto {
  @ApiProperty() hotelRevenue: number;
  @ApiProperty() salesAttributedRevenue: number;
  @ApiProperty() totalRoomNights: number;
  @ApiProperty() totalActiveAccounts: number;
  @ApiProperty() totalActivities: number;
  @ApiProperty({ type: [ChannelBreakdownDto] }) channelBreakdown: ChannelBreakdownDto[];
  @ApiProperty({ type: [TopPerformerDto] }) topPerformers: TopPerformerDto[];
  @ApiProperty({ type: [TopAccountDto] }) topAccounts: TopAccountDto[];
}
