import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BookingStatus } from '../enums/booking-status.enum';
import { BookingSource } from '../enums/booking-source.enum';
import { PaymentStatus } from '../enums/payment-status.enum';

export class BookingRoomResponseDto {
  @ApiProperty({ description: 'Room ID' })
  id: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name' })
  roomTypeName: string;

  @ApiPropertyOptional({ description: 'Room ID' })
  roomId?: string;

  @ApiPropertyOptional({ description: 'Room number' })
  roomNumber?: string;

  @ApiProperty({ description: 'Price per unit' })
  pricePerUnit: number;

  @ApiProperty({ description: 'Total price' })
  totalPrice: number;

  @ApiProperty({ description: 'Discount amount' })
  discountAmount: number;

  @ApiProperty({ description: 'Adult count' })
  adultCount: number;

  @ApiProperty({ description: 'Child count' })
  childCount: number;
}

export class BookingGuestResponseDto {
  @ApiProperty({ description: 'Guest ID' })
  id: string;

  @ApiProperty({ description: 'Is main guest' })
  isMainGuest: boolean;

  @ApiProperty({ description: 'Full name' })
  fullName: string;

  @ApiPropertyOptional({ description: 'Email address' })
  email?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  phone?: string;

  @ApiPropertyOptional({ description: 'ID type' })
  idType?: string;

  @ApiPropertyOptional({ description: 'ID number' })
  idNumber?: string;

  @ApiPropertyOptional({ description: 'Nationality' })
  nationality?: string;
}

export class BookingPaymentResponseDto {
  @ApiProperty({ description: 'Payment ID' })
  id: string;

  @ApiProperty({ description: 'Payment amount' })
  amount: number;

  @ApiProperty({ description: 'Payment method' })
  paymentMethod: string;

  @ApiProperty({ description: 'Payment status' })
  paymentStatus: string;

  @ApiProperty({ description: 'Payment date' })
  paymentDate: Date;

  @ApiPropertyOptional({ description: 'Transaction ID' })
  transactionId?: string;
}

export class BookingServiceResponseDto {
  @ApiProperty({ description: 'Service ID' })
  id: string;

  @ApiProperty({ description: 'Service ID reference' })
  serviceId: string;

  @ApiProperty({ description: 'Service name' })
  serviceName: string;

  @ApiProperty({ description: 'Quantity' })
  quantity: number;

  @ApiProperty({ description: 'Price' })
  price: number;

  @ApiProperty({ description: 'Total price' })
  totalPrice: number;

  @ApiProperty({ description: 'Service date' })
  serviceDate: Date;

  @ApiProperty({ description: 'Is paid' })
  isPaid: boolean;
}

export class BookingResponseDto {
  @ApiProperty({ description: 'Booking ID (UUID)' })
  id: string;

  @ApiProperty({ description: 'Booking reference code' })
  bookingCode: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Guest/Customer ID' })
  guestId?: string;

  // Room assignment (for single room bookings - most common case)
  @ApiPropertyOptional({ description: 'Room type ID' })
  roomTypeId?: string;

  @ApiPropertyOptional({ description: 'Room ID' })
  roomId?: string;

  @ApiPropertyOptional({ description: 'Room number' })
  roomNumber?: string;

  @ApiPropertyOptional({ description: 'Room assignment status' })
  assignmentStatus?: string;

  // Booking information
  @ApiProperty({ description: 'Booking status', enum: BookingStatus })
  status: BookingStatus;

  @ApiProperty({ description: 'Booking source', enum: BookingSource })
  source: BookingSource;

  // Time information
  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD)' })
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD)' })
  checkOutDate: string;

  @ApiPropertyOptional({ description: 'Estimated check-in time' })
  estimatedCheckInTime?: Date;

  @ApiPropertyOptional({ description: 'Actual check-in time' })
  actualCheckInTime?: Date;

  @ApiPropertyOptional({ description: 'Actual check-out time' })
  actualCheckOutTime?: Date;

  // Payment information
  @ApiProperty({ description: 'Total booking amount' })
  totalAmount: number;

  @ApiProperty({ description: 'Amount already paid' })
  paidAmount: number;

  @ApiProperty({ description: 'Payment status', enum: PaymentStatus })
  paymentStatus: PaymentStatus;

  // Other information
  @ApiPropertyOptional({ description: 'Special requests from guest' })
  specialRequests?: string;

  @ApiPropertyOptional({ description: 'Booking notes' })
  notes?: string;

  // Guest counts
  @ApiProperty({ description: 'Number of adults' })
  adultCount: number;

  @ApiProperty({ description: 'Number of children' })
  childCount: number;

  // OTA information
  @ApiPropertyOptional({ description: 'OTA booking ID' })
  otaBookingId?: string;

  @ApiPropertyOptional({ description: 'OTA booking reference' })
  otaBookingReference?: string;

  // Related information
  @ApiProperty({ description: 'Booking rooms', type: [BookingRoomResponseDto] })
  rooms: BookingRoomResponseDto[];

  @ApiProperty({ description: 'Booking guests', type: [BookingGuestResponseDto] })
  guests: BookingGuestResponseDto[];

  @ApiProperty({ description: 'Booking payments', type: [BookingPaymentResponseDto] })
  payments: BookingPaymentResponseDto[];

  @ApiProperty({ description: 'Additional services', type: [BookingServiceResponseDto] })
  services: BookingServiceResponseDto[];

  // Metadata
  @ApiProperty({ description: 'Created date' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated date' })
  updatedAt: Date;

  @ApiPropertyOptional({ type: String, description: 'Created by user ID' })
  createdBy?: string;

  @ApiPropertyOptional({ type: String, description: 'Updated by user ID' })
  updatedBy?: string;
}
