/**
 * Find One Booking NATS Contract
 *
 * NATS Pattern: booking.find_one
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: booking detail page and calendar modal
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { BookingServiceResponseDto, FolioItemDto } from '../dto/booking-response.dto';
export declare class BookingRoom {
    id: string;
    roomNumber: string;
    roomTypeId: string;
    roomTypeName: string;
    checkInDate: string;
    checkOutDate: string;
    pricePerNight: number;
    totalPrice: number;
}
export declare class BookingGuest {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    nationality?: string;
    idType?: string;
    idNumber?: string;
}
export declare class BookingPayment {
    id: string;
    method: string;
    status: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';
    amount: number;
    paidAt?: string;
    transactionRef?: string;
}
export declare class GetBookingByIdRequest {
    tenantId: string;
    hotelId: string;
    bookingId: string;
}
export declare class GetBookingByIdResponse {
    id: string;
    bookingCode: string;
    status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
    source: string;
    paymentStatus: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';
    checkInDate: string;
    checkOutDate: string;
    totalAmount: number;
    paidAmount: number;
    balance: number;
    rooms: BookingRoom[];
    mainGuest: BookingGuest;
    additionalGuests?: BookingGuest[];
    payments: BookingPayment[];
    services?: BookingServiceResponseDto[];
    folio?: FolioItemDto[];
    grandTotal?: number;
    specialRequests?: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
    updatedBy?: string;
    actualCheckInTime?: string;
    actualCheckOutTime?: string;
}
export type GetBookingByIdNatsResponse = NatsResponse<GetBookingByIdResponse>;
//# sourceMappingURL=find-one-booking.nats.d.ts.map