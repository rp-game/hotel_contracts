import { ApiProperty } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';
import { BookingResponseDto } from '../dto/booking-response.dto';

/**
 * NATS Pattern: booking.find_by_code
 */
export class FindByCodeNatsRequest {
  @ApiProperty({ description: 'Booking code' })
  code: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

export type FindByCodeNatsResponse = NatsResponse<BookingResponseDto>;

/**
 * NATS Pattern: booking.get_by_id / booking.find_by_id
 * Simple lookup without tenant/hotel context (internal use)
 */
export class GetBookingByIdSimpleNatsRequest {
  @ApiProperty({ description: 'Booking ID', required: false })
  bookingId?: string;

  @ApiProperty({ description: 'Booking ID (alias)', required: false })
  id?: string;
}

export type GetBookingByIdSimpleNatsResponse = NatsResponse<BookingResponseDto>;

/**
 * NATS Pattern: booking.get_by_room_and_guest
 */
export class GetBookingByRoomAndGuestNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room number', required: false })
  roomNumber?: string;

  @ApiProperty({ description: 'Guest name', required: false })
  guestName?: string;

  @ApiProperty({ description: 'Check-in date', required: false })
  checkInDate?: string;

  @ApiProperty({ description: 'Check-out date', required: false })
  checkOutDate?: string;
}

export type GetBookingByRoomAndGuestNatsResponse = NatsResponse<BookingResponseDto | null>;


/**
 * NATS Pattern: booking.bookings.findOne
 * Lookup with tenant/hotel context validation
 */
export class FindBookingByIdNatsRequest {
  @ApiProperty({ description: 'Booking ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

export type FindBookingByIdNatsResponse = NatsResponse<BookingResponseDto>;

/**
 * NATS Pattern: booking.guests.findOne
 */
export class FindGuestByIdNatsRequest {
  @ApiProperty({ description: 'Guest ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

/**
 * NATS Pattern: booking.rooms.byStatus
 */
export class GetRoomsByStatusNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room status filter' })
  status: string;
}

// ============= Response DTOs =============

/**
 * Single room item returned by booking.rooms.byStatus handler
 */
export class RoomByStatusItem {
  @ApiProperty({ description: 'Room number' })
  roomNumber: string;

  @ApiProperty({ description: 'Room type' })
  roomType: string;

  @ApiProperty({ description: 'Guest name' })
  guestName: string;

  @ApiProperty({ description: 'Room status' })
  status: string;

  @ApiProperty({ description: 'Booking ID' })
  bookingId: string;
}

export type GetRoomsByStatusNatsResponse = NatsResponse<RoomByStatusItem[]>;

/**
 * Guest info returned by booking.guests.findOne handler
 */
export class GuestInfoNatsResponseData {
  @ApiProperty({ description: 'Guest ID' })
  id: string;

  @ApiProperty({ description: 'Guest full name' })
  name: string;

  @ApiProperty({ description: 'Guest email' })
  email: string;

  @ApiProperty({ description: 'Guest phone' })
  phone: string;

  @ApiProperty({ description: 'Nationality' })
  nationality: string;

  @ApiProperty({ description: 'Total bookings count' })
  totalBookings: number;
}

export type FindGuestByIdNatsResponse = NatsResponse<GuestInfoNatsResponseData>;
