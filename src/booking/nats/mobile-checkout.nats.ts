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

import { NatsResponse } from '../../common';
import { BookingResponseDto } from '../dto/booking-response.dto';

// ============= BILL ITEM =============

export interface BillItem {
  description: string;
  quantity: number;
  unitPrice: string;
  totalPrice: string;
  category: 'ROOM' | 'SERVICE' | 'TAX' | 'DEPOSIT';
}

// ============= TODAY'S STATS =============

export interface GetTodayCheckoutStatsNatsRequest {
  tenantId: string;
  hotelId: string;
  date: string;
}

export interface CheckoutStatsData {
  totalCheckouts: number;
  completedCheckouts: number;
  pendingCheckouts: number;
  revenue: number;
  averageCheckoutTime: number;
}

export type GetTodayCheckoutStatsNatsResponse = NatsResponse<CheckoutStatsData>;

// ============= CHECKOUT HISTORY =============

export interface GetCheckoutHistoryNatsRequest {
  tenantId: string;
  hotelId: string;
  staffId: string;
  page?: number;
  limit?: number;
  startDate?: string;
  endDate?: string;
}

export interface CheckoutHistoryData {
  data: BookingResponseDto[];
  total: number;
  page: number;
  limit: number;
}

export type GetCheckoutHistoryNatsResponse = NatsResponse<CheckoutHistoryData>;

// ============= SEARCH CHECKOUTS =============

export interface SearchCheckoutsNatsRequest {
  tenantId: string;
  hotelId: string;
  query: string;
  page?: number;
  limit?: number;
}

export interface SearchCheckoutsData {
  data: BookingResponseDto[];
  total: number;
}

export type SearchCheckoutsNatsResponse = NatsResponse<SearchCheckoutsData>;

// ============= VALIDATE QR =============

export interface ValidateCheckoutQRNatsRequest {
  qrCode: string;
  tenantId: string;
  hotelId: string;
}

export interface ValidateQRData {
  valid: boolean;
  roomNumber?: string;
  bookingId?: string;
  message?: string;
}

export type ValidateCheckoutQRNatsResponse = NatsResponse<ValidateQRData>;

// ============= READY ROOMS =============

export interface GetReadyRoomsNatsRequest {
  tenantId: string;
  hotelId: string;
  date: string;
}

export interface ReadyRoomsData {
  data: BookingResponseDto[];
  total: number;
}

export type GetReadyRoomsNatsResponse = NatsResponse<ReadyRoomsData>;

// ============= CHECKOUT ITEMS =============

export interface GetCheckoutItemsNatsRequest {
  bookingId: string;
  tenantId: string;
  hotelId: string;
}

export interface CheckoutItemsData {
  items: BillItem[];
  total: number;
}

export type GetCheckoutItemsNatsResponse = NatsResponse<CheckoutItemsData>;

// ============= START CHECKOUT =============

export interface StartCheckoutNatsRequest {
  bookingId: string;
  staffId: string;
  tenantId: string;
  hotelId: string;
  startTime: Date;
}

export interface StartCheckoutData {
  success: boolean;
  checkoutId: string;
  message: string;
}

export type StartCheckoutNatsResponse = NatsResponse<StartCheckoutData>;

// ============= COMPLETE CHECKOUT (Mobile) =============

export interface CompleteCheckoutNatsRequest {
  bookingId: string;
  staffId: string;
  tenantId: string;
  hotelId: string;
  completedTime: Date;
  finalBillAmount?: number;
  paymentMethod?: string;
  notes?: string;
}

export interface CompleteCheckoutData {
  success: boolean;
  checkoutId: string;
  message: string;
}

export type CompleteCheckoutNatsResponse = NatsResponse<CompleteCheckoutData>;
