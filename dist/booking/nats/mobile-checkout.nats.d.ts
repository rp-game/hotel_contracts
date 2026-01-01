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
export interface AdditionalService {
    id: string;
    serviceName: string;
    quantity: number;
    unitPrice: string;
    totalPrice: string;
    date: string;
    status: 'PENDING' | 'PAID';
}
export interface BillItem {
    description: string;
    quantity: number;
    unitPrice: string;
    totalPrice: string;
    category: 'ROOM' | 'SERVICE' | 'TAX' | 'DEPOSIT';
}
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
export interface SearchCheckoutsNatsRequest {
    tenantId: string;
    hotelId: string;
    query: string;
    page?: number;
    limit?: number;
}
export interface SearchCheckoutsData {
    data: CheckoutData[];
    total: number;
}
export type SearchCheckoutsNatsResponse = NatsResponse<SearchCheckoutsData>;
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
export interface GetReadyRoomsNatsRequest {
    tenantId: string;
    hotelId: string;
    date: string;
}
export interface ReadyRoomsData {
    data: CheckoutData[];
    total: number;
}
export type GetReadyRoomsNatsResponse = NatsResponse<ReadyRoomsData>;
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
//# sourceMappingURL=mobile-checkout.nats.d.ts.map