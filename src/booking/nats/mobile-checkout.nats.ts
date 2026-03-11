/**
 * Mobile Checkout NATS Contracts
 * Patterns:
 *   - booking.checkout.todayStats - Today's checkout statistics
 *   - booking.checkout.history - Checkout history with pagination
 *   - booking.checkout.search - Search checkouts
 *   - booking.checkout.validateQR - Validate QR code for checkout
 *   - booking.checkout.readyRooms - Rooms ready for checkout
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
  @ApiProperty() totalCheckouts: number;
  @ApiProperty() completedCheckouts: number;
  @ApiProperty() pendingCheckouts: number;
  @ApiProperty() revenue: number;
  @ApiProperty() averageCheckoutTime: number;
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
  @ApiProperty() id: string;
  @ApiProperty() bookingCode: string;
  @ApiProperty() guestName: string;
  @ApiPropertyOptional() guestEmail?: string;
  @ApiProperty() roomNumber: string;
  @ApiProperty() checkOutDate: string;
  @ApiProperty() status: string;
  @ApiProperty() totalAmount: number;
}

export class ValidateQRData {
  @ApiProperty() isValid: boolean;
  @ApiPropertyOptional() bookingId?: string;
  @ApiPropertyOptional() roomNumber?: string;
  @ApiPropertyOptional() guestName?: string;
  @ApiPropertyOptional({ type: ValidateQRCheckoutData }) checkoutData?: ValidateQRCheckoutData;
  @ApiPropertyOptional() message?: string;
}

export type ValidateCheckoutQRNatsResponse = NatsResponse<ValidateQRData>;

// ============= READY ROOMS =============

export class GetReadyRoomsNatsRequest {
  @ApiProperty() @IsString() tenantId: string;
  @ApiProperty() @IsString() hotelId: string;
  @ApiProperty() @IsString() date: string;
}

export class ReadyRoom {
  @ApiProperty() roomNumber: string;
  @ApiProperty() guestName: string;
  @ApiProperty() checkOutTime: string;
  @ApiProperty({ enum: ['overdue', 'pending'] }) status: 'overdue' | 'pending';
  @ApiProperty() bookingId: string;
}

export class ReadyRoomsData {
  @ApiProperty({ type: [ReadyRoom] }) data: ReadyRoom[];
  @ApiProperty() total: number;
}

export type GetReadyRoomsNatsResponse = NatsResponse<ReadyRoomsData>;

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
