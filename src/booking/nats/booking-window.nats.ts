import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString } from 'class-validator';
import { NatsResponse } from '../../common';

export class GetBookingWindowRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Start date filter (YYYY-MM-DD)', example: '2025-01-01' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date filter (YYYY-MM-DD)', example: '2025-12-31' })
  @IsOptional()
  @IsDateString()
  endDate?: string;
}

export class BookingWindowBucketDto {
  @ApiProperty({ description: 'Bucket label', example: '0-1 ngày' })
  label: string;

  @ApiProperty({ description: 'Bucket key', example: 'same_day' })
  key: string;

  @ApiProperty({ description: 'Total bookings in this bucket', example: 42 })
  total: number;

  @ApiProperty({ description: 'Breakdown by source' })
  bySource: {
    DIRECT: number;
    WEBSITE: number;
    PHONE: number;
    EMAIL: number;
    WALK_IN: number;
    TRAVEL_AGENT: number;
    CORPORATE: number;
    OTA: number;
    [key: string]: number;
  };
}

export class BookingWindowResponseDto {
  @ApiProperty({ description: 'Buckets with booking count per advance days', type: () => [BookingWindowBucketDto] })
  buckets: BookingWindowBucketDto[];

  @ApiProperty({ description: 'Total bookings analyzed', example: 250 })
  totalBookings: number;

  @ApiProperty({ description: 'Average advance booking days', example: 12.5 })
  averageAdvanceDays: number;
}

export type GetBookingWindowResponse = NatsResponse<BookingWindowResponseDto>;
