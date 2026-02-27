/**
 * Find One Booking NATS Contract
 *
 * NATS Pattern: booking.find_one
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: booking detail page and calendar modal
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { BookingServiceResponseDto, FolioItemDto } from '../dto/booking-response.dto';

export class BookingRoom {
  @ApiProperty({ description: 'Room ID' })
  id: string;

  @ApiProperty({ description: 'Room number (e.g., "101")' })
  roomNumber: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name' })
  roomTypeName: string;

  @ApiProperty({ description: 'Check-in date for this room' })
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date for this room' })
  checkOutDate: string;

  @ApiProperty({ description: 'Price per night for this room' })
  pricePerNight: number;

  @ApiProperty({ description: 'Total price for this room' })
  totalPrice: number;
}

export class BookingGuest {
  @ApiProperty({ description: 'Guest ID' })
  id: string;

  @ApiProperty({ description: 'Guest first name' })
  firstName: string;

  @ApiProperty({ description: 'Guest last name' })
  lastName: string;

  @ApiProperty({ description: 'Guest full name' })
  fullName: string;

  @ApiProperty({ description: 'Guest email' })
  email: string;

  @ApiProperty({ description: 'Guest phone number' })
  phone: string;

  @ApiPropertyOptional({ description: 'Guest nationality' })
  nationality?: string;

  @ApiPropertyOptional({ description: 'Guest ID type (passport, driver license, etc.)' })
  idType?: string;

  @ApiPropertyOptional({ description: 'Guest ID number' })
  idNumber?: string;
}

export class BookingPayment {
  @ApiProperty({ description: 'Payment ID' })
  id: string;

  @ApiProperty({ description: 'Payment method' })
  method: string;

  @ApiProperty({
    description: 'Payment status',
    enum: ['PENDING', 'PARTIAL', 'COMPLETED', 'FAILED', 'CANCELLED', 'REFUNDED'],
  })
  status: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';

  @ApiProperty({ description: 'Amount paid' })
  amount: number;

  @ApiPropertyOptional({ description: 'Payment date' })
  paidAt?: string;

  @ApiPropertyOptional({ description: 'Transaction reference' })
  transactionRef?: string;
}

export class GetBookingByIdRequest {
  @ApiProperty({ description: 'Tenant ID', format: 'uuid' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', format: 'uuid' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Booking ID', format: 'uuid' })
  @IsUUID()
  bookingId: string;
}

export class GetBookingByIdResponse {
  @ApiProperty({ description: 'Booking ID' })
  id: string;

  @ApiProperty({ description: 'Booking code (e.g., BK2024123456)' })
  bookingCode: string;

  @ApiProperty({
    description: 'Booking status',
    enum: ['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED'],
  })
  status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';

  @ApiProperty({ description: 'Booking source (WEB, OTA, PHONE, WALK_IN, etc.)' })
  source: string;

  @ApiProperty({
    description: 'Payment status',
    enum: ['PENDING', 'PARTIAL', 'COMPLETED', 'FAILED', 'CANCELLED', 'REFUNDED'],
  })
  paymentStatus: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';

  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD)' })
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD)' })
  checkOutDate: string;

  @ApiProperty({ description: 'Total booking amount' })
  totalAmount: number;

  @ApiProperty({ description: 'Amount already paid' })
  paidAmount: number;

  @ApiProperty({ description: 'Outstanding balance' })
  balance: number;

  @ApiProperty({ description: 'Rooms in this booking', type: [BookingRoom] })
  rooms: BookingRoom[];

  @ApiProperty({ description: 'Primary guest information', type: BookingGuest })
  mainGuest: BookingGuest;

  @ApiPropertyOptional({ description: 'Additional guests', type: [BookingGuest] })
  additionalGuests?: BookingGuest[];

  @ApiProperty({ description: 'Payment records', type: [BookingPayment] })
  payments: BookingPayment[];

  @ApiPropertyOptional({ description: 'Additional services charged to this booking', type: [BookingServiceResponseDto] })
  services?: BookingServiceResponseDto[];

  @ApiPropertyOptional({ description: 'Folio line items (rooms + services + discounts)', type: [FolioItemDto] })
  folio?: FolioItemDto[];

  @ApiPropertyOptional({ description: 'Grand total computed from folio (rooms + services)' })
  grandTotal?: number;

  @ApiPropertyOptional({ description: 'Special requests from guest' })
  specialRequests?: string;

  @ApiPropertyOptional({ description: 'Internal notes about the booking' })
  notes?: string;

  @ApiProperty({ description: 'Booking creation date' })
  createdAt: string;

  @ApiProperty({ description: 'Last update date' })
  updatedAt: string;

  @ApiPropertyOptional({ description: 'User who created the booking' })
  createdBy?: string;

  @ApiPropertyOptional({ description: 'User who last updated the booking' })
  updatedBy?: string;

  @ApiPropertyOptional({ description: 'Actual check-in time' })
  actualCheckInTime?: string;

  @ApiPropertyOptional({ description: 'Actual check-out time' })
  actualCheckOutTime?: string;
}

export type GetBookingByIdNatsResponse = NatsResponse<GetBookingByIdResponse>;
