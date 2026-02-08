/**
 * Check-In & Check-Out NATS Contracts
 * Patterns: booking.check_in, booking.check_out, booking.pending_checkins
 */
import { NatsResponse } from '../../common';
import { BookingResponseDto } from '../dto/booking-response.dto';
import { BillItemDto } from '../dto/bill-item.dto';
export interface PrimaryGuestData {
    fullName: string;
    email?: string;
    phone?: string;
    nationality?: string;
    address?: string;
    idType?: string;
    idNumber?: string;
    dateOfBirth?: string;
}
export interface CheckInBookingNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    actualCheckInTime?: string;
    primaryGuest?: PrimaryGuestData;
    additionalGuests?: any[];
    keyCardNumbers?: string;
    depositAmount?: number;
    notes?: string;
    checkedInBy: string;
}
export interface BookingData {
    id: string;
    bookingReference: string;
    tenantId: string;
    hotelId: string;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    checkInDate: string;
    checkOutDate: string;
    roomTypeId: string;
    roomTypeName: string;
    roomId?: string;
    roomNumber?: string;
    status: string;
    actualCheckInTime?: string;
    actualCheckOutTime?: string;
    adults: number;
    children: number;
    totalAmount: number;
    depositAmount?: number;
    createdAt: string;
    updatedAt: string;
}
export type CheckInBookingData = BookingData;
export type CheckInBookingNatsResponse = NatsResponse<CheckInBookingData>;
export interface CheckOutBookingNatsRequest {
    bookingId: string;
    tenantId: string;
    hotelId: string;
    actualCheckOutTime?: string;
    additionalCharges?: number;
    notes?: string;
    checkedOutBy: string;
    finalAmount?: number;
    finalBillAmount?: string | number;
    paymentMethod?: string;
    depositRefund?: number;
    billItems?: BillItemDto[];
}
export type CheckOutBookingNatsResponse = NatsResponse<BookingResponseDto>;
export interface GetPendingCheckinsNatsRequest {
    tenantId: string;
    hotelId: string;
    date?: string;
    page?: number;
    limit?: number;
    status?: string;
}
/**
 * Pending Check-in Booking Information
 * Used for both NATS response and REST API response
 * Single source of truth for check-in data structure
 */
export declare class PendingCheckinBooking {
    id: string;
    bookingCode: string;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    checkInDate: string;
    checkOutDate: string;
    estimatedCheckInTime?: string;
    roomType: string;
    roomNumber: string;
    roomTypeId: string;
    roomId?: string;
    guestCount: number;
    status: string;
    assignmentStatus: string;
    specialRequests?: string;
    totalAmount: number;
    paidAmount: number;
    remainingAmount: number;
    loyaltyPoints?: number;
    loyaltyTier?: string;
}
/**
 * Pending Check-ins List Response Data
 */
export declare class PendingCheckinsListData {
    bookings: PendingCheckinBooking[];
    total: number;
    page: number;
    limit: number;
}
export type GetPendingCheckinsNatsResponse = NatsResponse<PendingCheckinsListData>;
//# sourceMappingURL=check-in.nats.d.ts.map