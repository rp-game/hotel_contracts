/**
 * Get Booking History NATS Contract
 *
 * NATS Pattern: booking.history.get
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';

export interface GetBookingHistoryRequest {
  bookingId: string;
  tenantId: string;
  hotelId: string;
}

export class BookingHistoryDto {
  @ApiProperty() id: string;
  @ApiProperty() bookingId: string;
  @ApiProperty() action: string;
  @ApiProperty() description: string;
  @ApiPropertyOptional({ nullable: true }) previousStatus?: string | null;
  @ApiPropertyOptional({ nullable: true }) newStatus?: string | null;
  @ApiPropertyOptional({ nullable: true }) previousData?: Record<string, any> | null;
  @ApiPropertyOptional({ nullable: true }) newData?: Record<string, any> | null;
  @ApiPropertyOptional({ nullable: true }) createdBy?: string | null;
  @ApiProperty() createdAt: string;
  @ApiPropertyOptional({ nullable: true }) notes?: string | null;
  @ApiProperty() isSystemGenerated: boolean;
}

export type GetBookingHistoryResponse = NatsResponse<BookingHistoryDto[]>;
