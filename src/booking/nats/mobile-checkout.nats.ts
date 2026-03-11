/**
 * Mobile Checkout NATS Contracts
 * Patterns:
 *   - booking.checkout.todayStats - Today's checkout statistics
 *   - booking.checkout.history - Checkout history with pagination
 *   - booking.checkout.search - Search checkouts
 *   - booking.checkout.validateQR - Validate QR code for checkout
 *   - booking.checkout.readyRooms - Rooms ready for checkout
 *   - booking.checkout.detail - Get detailed checkout info for a booking
 *   - booking.checkout.items - Get checkout items/charges
 *   - booking.checkout.start - Start checkout process
 *   - booking.checkout.complete - Complete checkout process
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsArray } from 'class-validator';
import { NatsResponse } from '../../common';

// ============= SHARED TYPES =============

export class BillItem {
  @ApiPropertyOptional({ description: 'Item description' })
  description?: string;

  @ApiPropertyOptional({ description: 'Quantity' })
  quantity?: number;

  @ApiPropertyOptional({ description: 'Unit price' })
  unitPrice?: string;

  @ApiPropertyOptional({ description: 'Total price' })
  totalPrice?: string;

  @ApiPropertyOptional({ description: 'Item category', enum: ['ROOM', 'SERVICE', 'TAX', 'DEPOSIT'] })
  category?: 'ROOM' | 'SERVICE' | 'TAX' | 'DEPOSIT';
}

// Matches getBookingByIdSimple() return shape for rooms
export class CheckoutRoomItem {
  @ApiProperty({ description: 'Room record ID' })
  id: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name' })
  roomTypeName: string;

  @ApiPropertyOptional({ description: 'Physical room ID' })
  roomId?: string;

  @ApiPropertyOptional({ description: 'Room number' })
  roomNumber?: string;

  @ApiProperty({ description: 'Price per night' })
  pricePerNight: number;

  @ApiProperty({ description: 'Total price for this room' })
  totalPrice: number;

  @ApiPropertyOptional({ description: 'Discount amount' })
  discountAmount?: number;

  @ApiProperty({ description: 'Adult count' })
  adultCount: number;

  @ApiProperty({ description: 'Child count' })
  childCount: number;
}

// Matches findBookings() mapped result shape — used in history/search
export class CheckoutDataItem {
  @ApiProperty() id: string;
  @ApiProperty() bookingCode: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() status: string;
  @ApiProperty() source: string;
  @ApiProperty() guestName: string;
  @ApiPropertyOptional() guestEmail?: string;
  @ApiPropertyOptional() guestPhone?: string;
  @ApiProperty() checkInDate: string;
  @ApiProperty() checkOutDate: string;
  @ApiProperty() totalAmount: number;
  @ApiProperty() paidAmount: number;
  @ApiProperty() paymentStatus: string;
  @ApiProperty() roomCount: number;
  @ApiProperty() adultCount: number;
  @ApiProperty() childCount: number;
  @ApiProperty() createdAt: string;
  @ApiPropertyOptional() createdBy?: string;
}

// ============= TODAY'S STATS =============

export class GetTodayCheckoutStatsNatsRequest {
  @ApiProperty() @IsString() tenantId: string;
  @ApiProperty() @IsString() hotelId: string;
  @ApiProperty() @IsString() date: string;
}

export class CheckoutStatsData {
  @ApiProperty({ description: 'Total checkouts for today' }) totalCheckouts: number;
  @ApiProperty({ description: 'Completed checkouts' }) completedCheckouts: number;
  @ApiProperty({ description: 'Pending checkouts' }) pendingCheckouts: number;
  @ApiProperty({ description: 'Revenue from checkouts' }) revenue: number;
  @ApiProperty({ description: 'Average checkout time in minutes' }) averageCheckoutTime: number;
}

export type GetTodayCheckoutStatsNatsResponse = NatsResponse<CheckoutStatsData>;

// ============= CHECKOUT HISTORY =============

export class GetCheckoutHistoryNatsRequest {
  @ApiProperty() @IsString() tenantId: string;
  @ApiProperty() @IsString() hotelId: string;
  @ApiProperty() @IsString() staffId: string;
  @ApiPropertyOptional() @IsOptional() @IsNumber() page?: number;
  @ApiPropertyOptional() @IsOptional() @IsNumber() limit?: number;
  @ApiPropertyOptional() @IsOptional() @IsString() startDate?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() endDate?: string;
}

export class CheckoutHistoryData {
  @ApiProperty({ type: [CheckoutDataItem] }) data: CheckoutDataItem[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
}

export type GetCheckoutHistoryNatsResponse = NatsResponse<CheckoutHistoryData>;

// ============= SEARCH CHECKOUTS =============

export class SearchCheckoutsNatsRequest {
  @ApiProperty() @IsString() tenantId: string;
  @ApiProperty() @IsString() hotelId: string;
  @ApiProperty() @IsString() query: string;
  @ApiPropertyOptional() @IsOptional() filters?: Record<string, unknown>;
}

export class SearchCheckoutsData {
  @ApiProperty({ type: [CheckoutDataItem] }) data: CheckoutDataItem[];
  @ApiProperty() total: number;
}

export type SearchCheckoutsNatsResponse = NatsResponse<SearchCheckoutsData>;

// ============= VALIDATE QR =============

export class ValidateCheckoutQRNatsRequest {
  @ApiProperty() @IsString() @IsNotEmpty() qrCode: string;
  @ApiProperty() @IsString() tenantId: string;
  @ApiProperty() @IsString() hotelId: string;
}

export class ValidateQRCheckoutData {
  @ApiProperty({ description: 'Booking ID' }) id: string;
  @ApiProperty({ description: 'Booking code' }) bookingCode: string;
  @ApiProperty({ description: 'Guest name' }) guestName: string;
  @ApiPropertyOptional({ description: 'Guest email' }) guestEmail?: string;
  @ApiProperty({ description: 'Room number' }) roomNumber: string;
  @ApiProperty({ description: 'Check-out date' }) checkOutDate: string;
  @ApiProperty({ description: 'Booking status' }) status: string;
  @ApiProperty({ description: 'Total amount' }) totalAmount: number;
}

export class ValidateQRData {
  @ApiProperty({ description: 'Whether QR code is valid' }) isValid: boolean;
  @ApiPropertyOptional({ description: 'Booking ID if valid' }) bookingId?: string;
  @ApiPropertyOptional({ description: 'Room number' }) roomNumber?: string;
  @ApiPropertyOptional({ description: 'Guest name' }) guestName?: string;
  @ApiPropertyOptional({ description: 'Checkout data if valid', type: ValidateQRCheckoutData }) checkoutData?: ValidateQRCheckoutData;
  @ApiPropertyOptional({ description: 'Error message if invalid' }) message?: string;
}

export type ValidateCheckoutQRNatsResponse = NatsResponse<ValidateQRData>;

// ============= READY ROOMS =============

export class GetReadyRoomsNatsRequest {
  @ApiProperty() @IsString() tenantId: string;
  @ApiProperty() @IsString() hotelId: string;
  @ApiProperty() @IsString() date: string;
}

export class ReadyRoom {
  @ApiProperty({ description: 'Room number' }) roomNumber: string;
  @ApiProperty({ description: 'Guest name' }) guestName: string;
  @ApiProperty({ description: 'Check-out time' }) checkOutTime: string;
  @ApiProperty({ description: 'Status', enum: ['overdue', 'pending'] }) status: 'overdue' | 'pending';
  @ApiProperty({ description: 'Booking ID' }) bookingId: string;
}

export class ReadyRoomsData {
  @ApiProperty({ type: [ReadyRoom], description: 'Rooms ready for checkout' }) data: ReadyRoom[];
  @ApiProperty({ description: 'Total count' }) total: number;
}

export type GetReadyRoomsNatsResponse = NatsResponse<ReadyRoomsData>;

// ============= CHECKOUT DETAIL =============

export class GetCheckoutDetailNatsRequest {
  @ApiProperty() @IsString() @IsNotEmpty() bookingId: string;
  @ApiProperty() @IsString() tenantId: string;
  @ApiProperty() @IsString() hotelId: string;
}

export class CheckoutDetailData {
  @ApiProperty({ description: 'Booking ID' }) id: string;
  @ApiProperty({ description: 'Room number' }) roomNumber: string;
  @ApiProperty({ description: 'Guest name' }) guestName: string;
  @ApiProperty({ description: 'Checkout time (ISO string)' }) checkoutTime: string;
  @ApiProperty({ description: 'Booking status' }) status: string;
  @ApiPropertyOptional({ description: 'Special requests' }) specialRequests?: string;
  @ApiPropertyOptional({ description: 'Checkout notes' }) notes?: string;
  @ApiProperty({ description: 'Photos', type: [String] }) photos: string[];
}

export type GetCheckoutDetailNatsResponse = NatsResponse<CheckoutDetailData>;

// ============= CHECKOUT ITEMS =============

export class GetCheckoutItemsNatsRequest {
  @ApiProperty() @IsString() @IsNotEmpty() bookingId: string;
  @ApiProperty() @IsString() tenantId: string;
  @ApiProperty() @IsString() hotelId: string;
}

export class CheckoutBookingSummary {
  @ApiProperty() id: string;
  @ApiProperty() bookingCode: string;
  @ApiProperty() guestName: string;
  @ApiProperty() totalAmount: number;
  @ApiProperty() paymentStatus: string;
  @ApiPropertyOptional({ description: 'Check-in date' }) checkInDate?: string;
  @ApiPropertyOptional({ description: 'Check-out date' }) checkOutDate?: string;
  @ApiPropertyOptional({ description: 'Paid amount' }) paidAmount?: number;
}

export class CheckoutItemsData {
  @ApiProperty({ type: CheckoutBookingSummary })
  booking: CheckoutBookingSummary;

  @ApiProperty({ type: [CheckoutRoomItem], description: 'Rooms in this booking' })
  rooms: CheckoutRoomItem[];

  @ApiProperty({ type: [Object], description: 'Additional services' })
  services: Record<string, unknown>[];

  @ApiProperty({ type: [Object], description: 'Damage reports' })
  damages: Record<string, unknown>[];

  @ApiPropertyOptional({ description: 'Special requests' })
  specialRequests?: string;
}

export type GetCheckoutItemsNatsResponse = NatsResponse<CheckoutItemsData>;

// ============= START CHECKOUT =============

export class StartCheckoutNatsRequest {
  @ApiProperty() @IsString() @IsNotEmpty() bookingId: string;
  @ApiProperty() @IsString() staffId: string;
  @ApiProperty() @IsString() tenantId: string;
  @ApiProperty() @IsString() hotelId: string;
  @ApiProperty({ description: 'Checkout start time' })
  startTime: string | Date;
}

export class StartCheckoutData {
  @ApiProperty() bookingId: string;
  @ApiProperty() status: string;
  @ApiProperty() startTime: string | Date;
  @ApiProperty() staffId: string;
}

export type StartCheckoutNatsResponse = NatsResponse<StartCheckoutData>;

// ============= COMPLETE CHECKOUT (Mobile) =============

export class CompleteCheckoutNatsRequest {
  @ApiProperty() @IsString() @IsNotEmpty() bookingId: string;
  @ApiProperty() @IsString() staffId: string;
  @ApiProperty() @IsString() tenantId: string;
  @ApiProperty() @IsString() hotelId: string;
  @ApiProperty() completedTime: string | Date;
  @ApiPropertyOptional() @IsOptional() @IsString() notes?: string;
  @ApiPropertyOptional({ description: 'Damage reports', type: [Object] })
  @IsOptional() @IsArray()
  damages?: Record<string, unknown>[];
  @ApiPropertyOptional({ description: 'Additional services', type: [Object] })
  @IsOptional() @IsArray()
  services?: Record<string, unknown>[];
}

export class CompleteCheckoutData {
  @ApiProperty() bookingId: string;
  @ApiProperty() status: string;
  @ApiProperty() completedTime: string | Date;
  @ApiProperty() finalAmount: number;
}

export type CompleteCheckoutNatsResponse = NatsResponse<CompleteCheckoutData>;
