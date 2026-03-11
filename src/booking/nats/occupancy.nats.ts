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
