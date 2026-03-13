import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsIn, IsDateString } from 'class-validator';
import { NatsResponse } from '../../common';

export class GetBookingStatsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Period shortcut: week, month, year', enum: ['week', 'month', 'year'] })
  @IsOptional()
  @IsIn(['week', 'month', 'year'])
  period?: 'week' | 'month' | 'year';

  @ApiPropertyOptional({ description: 'Start date (YYYY-MM-DD)', example: '2025-01-01' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date (YYYY-MM-DD)', example: '2025-01-31' })
  @IsOptional()
  @IsDateString()
  endDate?: string;
}

export class BookingStatusCountDto {
  @ApiProperty({ description: 'Booking status (e.g. CONFIRMED, CANCELLED)', example: 'CONFIRMED' })
  status: string;

  @ApiProperty({ description: 'Number of bookings with this status', example: 12 })
  count: number;
}

export class BookingStatsResponseDto {
  @ApiProperty({ description: 'Total number of bookings', example: 35 })
  totalBookings: number;

  @ApiProperty({ description: 'Number of confirmed bookings', example: 28 })
  confirmedBookings: number;

  @ApiProperty({ description: 'Number of cancelled bookings', example: 2 })
  cancelledBookings: number;

  @ApiProperty({ description: 'Occupancy rate as percentage (0-100)', example: 85.5 })
  occupancyRate: number;

  @ApiProperty({ description: 'Average stay duration in nights', example: 3.2 })
  averageStay: number;

  @ApiProperty({ description: 'Total revenue', example: 15000000 })
  revenue: number;

  @ApiPropertyOptional({ description: 'Booking count grouped by status', type: () => [BookingStatusCountDto] })
  bookingsByStatus?: BookingStatusCountDto[];
}

/** NATS response type alias — same shape as REST DTO */
export type GetBookingStatsNatsResponse = BookingStatsResponseDto;

export type GetBookingStatsResponse = NatsResponse<GetBookingStatsNatsResponse>;
