import { ApiProperty } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';

/**
 * NATS Pattern: booking.occupancy.current
 */
export class GetHotelOccupancyNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Date in hotel timezone (YYYY-MM-DD)' })
  date: string;
}

export class HotelOccupancyNatsResponseData {
  @ApiProperty({ description: 'Total rooms in hotel' })
  total: number;

  @ApiProperty({ description: 'Currently occupied rooms' })
  occupied: number;

  @ApiProperty({ description: 'Available rooms' })
  available: number;

  @ApiProperty({ description: 'Out of order rooms' })
  outOfOrder: number;

  @ApiProperty({ description: 'Rooms checking out today' })
  checkingOut: number;

  @ApiProperty({ description: 'Rooms checking in today' })
  checkingIn: number;

  @ApiProperty({ description: 'Rooms being cleaned' })
  cleaning: number;
}

export type GetHotelOccupancyNatsResponse = NatsResponse<HotelOccupancyNatsResponseData>;

/**
 * NATS Pattern: bookings.stats.roomNights
 * Returns total occupied room nights in a date range
 */
export class GetRoomNightsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Period start (YYYY-MM-DD)' })
  dateFrom: string;

  @ApiProperty({ description: 'Period end (YYYY-MM-DD)' })
  dateTo: string;
}

export class GetRoomNightsResponseData {
  @ApiProperty({ description: 'Total occupied room nights in the period' })
  roomNights: number;
}

export type GetRoomNightsNatsResponse = NatsResponse<GetRoomNightsResponseData>;
