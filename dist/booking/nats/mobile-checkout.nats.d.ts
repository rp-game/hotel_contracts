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
export declare class BillItem {
    description?: string;
    quantity?: number;
    unitPrice?: string;
    totalPrice?: string;
    category?: 'ROOM' | 'SERVICE' | 'TAX' | 'DEPOSIT';
}
export declare class CheckoutRoomItem {
    id: string;
    roomTypeId: string;
    roomTypeName: string;
    roomId?: string;
    roomNumber?: string;
    pricePerNight: number;
    totalPrice: number;
    discountAmount?: number;
    adultCount: number;
    childCount: number;
}
export declare class CheckoutDataItem {
    id: string;
    bookingCode: string;
    tenantId: string;
    hotelId: string;
    status: string;
    source: string;
    guestName: string;
    guestEmail?: string;
    guestPhone?: string;
    checkInDate: string;
    checkOutDate: string;
    totalAmount: number;
    paidAmount: number;
    paymentStatus: string;
    roomCount: number;
    adultCount: number;
    childCount: number;
    createdAt: string;
    createdBy?: string;
}
export declare class GetTodayCheckoutStatsNatsRequest {
    tenantId: string;
    hotelId: string;
    date: string;
}
export declare class CheckoutStatsData {
    totalCheckouts: number;
    completedCheckouts: number;
    pendingCheckouts: number;
    revenue: number;
    averageCheckoutTime: number;
}
export type GetTodayCheckoutStatsNatsResponse = NatsResponse<CheckoutStatsData>;
export declare class GetCheckoutHistoryNatsRequest {
    tenantId: string;
    hotelId: string;
    staffId: string;
    page?: number;
    limit?: number;
    startDate?: string;
    endDate?: string;
}
export declare class CheckoutHistoryData {
    data: CheckoutDataItem[];
    total: number;
    page: number;
    limit: number;
}
export type GetCheckoutHistoryNatsResponse = NatsResponse<CheckoutHistoryData>;
export declare class SearchCheckoutsNatsRequest {
    tenantId: string;
    hotelId: string;
    query: string;
    filters?: Record<string, unknown>;
}
export declare class SearchCheckoutsData {
    data: CheckoutDataItem[];
    total: number;
}
export type SearchCheckoutsNatsResponse = NatsResponse<SearchCheckoutsData>;
export declare class ValidateCheckoutQRNatsRequest {
    qrCode: string;
    tenantId: string;
    hotelId: string;
}
export declare class ValidateQRCheckoutData {
    id: string;
    bookingCode: string;
    guestName: string;
    guestEmail?: string;
    roomNumber: string;
    checkOutDate: string;
    status: string;
    totalAmount: number;
}
export declare class ValidateQRData {
    isValid: boolean;
    bookingId?: string;
    roomNumber?: string;
    guestName?: string;
    checkoutData?: ValidateQRCheckoutData;
    message?: string;
}
export type ValidateCheckoutQRNatsResponse = NatsResponse<ValidateQRData>;
export declare class GetReadyRoomsNatsRequest {
    tenantId: string;
    hotelId: string;
    date: string;
}
export declare class ReadyRoom {
    roomNumber: string;
    guestName: string;
    checkOutTime: string;
    status: 'overdue' | 'pending';
    bookingId: string;
}
export declare class ReadyRoomsData {
    data: ReadyRoom[];
    total: number;
}
export type GetReadyRoomsNatsResponse = NatsResponse<ReadyRoomsData>;
export declare class GetCheckoutItemsNatsRequest {
    bookingId: string;
    tenantId: string;
    hotelId: string;
}
export declare class CheckoutBookingSummary {
    id: string;
    bookingCode: string;
    guestName: string;
    totalAmount: number;
    paymentStatus: string;
}
export declare class CheckoutItemsData {
    booking: CheckoutBookingSummary;
    rooms: CheckoutRoomItem[];
    services: Record<string, unknown>[];
    damages: Record<string, unknown>[];
    specialRequests?: string;
}
export type GetCheckoutItemsNatsResponse = NatsResponse<CheckoutItemsData>;
export declare class StartCheckoutNatsRequest {
    bookingId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
    startTime: string | Date;
}
export declare class StartCheckoutData {
    bookingId: string;
    status: string;
    startTime: string | Date;
    staffId: string;
}
export type StartCheckoutNatsResponse = NatsResponse<StartCheckoutData>;
export declare class CompleteCheckoutNatsRequest {
    bookingId: string;
    staffId: string;
    tenantId: string;
    hotelId: string;
    completedTime: string | Date;
    notes?: string;
    damages?: Record<string, unknown>[];
    services?: Record<string, unknown>[];
}
export declare class CompleteCheckoutData {
    bookingId: string;
    status: string;
    completedTime: string | Date;
    finalAmount: number;
}
export type CompleteCheckoutNatsResponse = NatsResponse<CompleteCheckoutData>;
//# sourceMappingURL=mobile-checkout.nats.d.ts.map