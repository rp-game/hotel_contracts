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

// ============= ADDITIONAL SERVICE =============

export interface AdditionalService {
  id: string;
  serviceName: string;
  quantity: number;
  unitPrice: string;
  totalPrice: string;
  date: string;
  status: 'PENDING' | 'PAID';
}

// ============= BILL ITEM =============

export interface BillItem {
  description: string;
  quantity: number;
  unitPrice: string;
  totalPrice: string;
  category: 'ROOM' | 'SERVICE' | 'TAX' | 'DEPOSIT';
}

// ============= CHECKOUT DATA (Extended Booking) =============

export interface CheckoutData {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  rooms: Array<{
    roomId: string;
    roomNumber: string;
    roomType: string;
    roomTypeName?: string;
  }>;
  checkInDate: string;
  checkOutDate: string;
  totalAmount: string;
  paidAmount: string;
  status: string;
  adults: number;
  children: number;
  additionalServices: AdditionalService[];
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
  data: CheckoutData[];
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
  filters?: any;
}

export interface SearchCheckoutsData {
  data: CheckoutData[];
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
  isValid: boolean;
  bookingId?: string;
  roomNumber?: string;
  guestName?: string;
  checkoutData?: {
    id: string;
    bookingCode: string;
    guestName: string;
    guestEmail?: string;
    roomNumber: string;
    checkOutDate: string;
    status: string;
    totalAmount: number;
  };
  message?: string;
}

export type ValidateCheckoutQRNatsResponse = NatsResponse<ValidateQRData>;

// ============= READY ROOMS =============

export interface GetReadyRoomsNatsRequest {
  tenantId: string;
  hotelId: string;
  date: string;
}

export interface ReadyRoom {
  roomNumber: string;
  guestName: string;
  checkOutTime: string;
  status: 'overdue' | 'pending';
  bookingId: string;
}

export interface ReadyRoomsData {
  data: ReadyRoom[];
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
  booking: {
    id: string;
    bookingCode: string;
    guestName: string;
    totalAmount: number;
    paymentStatus: string;
  };
  rooms: any[];
  services: any[];
  damages: any[];
  specialRequests: string;
}

export type GetCheckoutItemsNatsResponse = NatsResponse<CheckoutItemsData>;

// ============= START CHECKOUT =============

export interface StartCheckoutNatsRequest {
  bookingId: string;
  staffId: string;
  tenantId: string;
  hotelId: string;
  startTime: string | Date;
}

export interface StartCheckoutData {
  bookingId: string;
  status: string;
  startTime: string | Date;
  staffId: string;
}

export type StartCheckoutNatsResponse = NatsResponse<StartCheckoutData>;

// ============= COMPLETE CHECKOUT (Mobile) =============

export interface CompleteCheckoutNatsRequest {
  bookingId: string;
  staffId: string;
  tenantId: string;
  hotelId: string;
  completedTime: string | Date;
  notes?: string;
  damages?: any[];
  services?: any[];
}

export interface CompleteCheckoutData {
  bookingId: string;
  status: string;
  completedTime: string | Date;
  finalAmount: number;
}

export type CompleteCheckoutNatsResponse = NatsResponse<CompleteCheckoutData>;
