import { BookingStatus } from '../enums/booking-status.enum';
import { BookingSource } from '../enums/booking-source.enum';
import { PaymentStatus } from '../enums/payment-status.enum';
export declare class BookingRoomResponseDto {
    id: string;
    roomTypeId: string;
    roomTypeName: string;
    roomId?: string;
    roomNumber?: string;
    pricePerUnit: number;
    totalPrice: number;
    discountAmount: number;
    adultCount: number;
    childCount: number;
}
export declare class BookingGuestResponseDto {
    id: string;
    isMainGuest: boolean;
    fullName: string;
    email?: string;
    phone?: string;
    idType?: string;
    idNumber?: string;
    nationality?: string;
}
export declare class BookingPaymentResponseDto {
    id: string;
    amount: number;
    paymentMethod: string;
    paymentStatus: string;
    paymentDate: Date;
    transactionId?: string;
}
export declare class BookingServiceResponseDto {
    id: string;
    serviceId: string;
    serviceName: string;
    quantity: number;
    price: number;
    totalPrice: number;
    serviceDate: Date;
    isPaid: boolean;
}
export declare class BookingResponseDto {
    id: string;
    bookingCode: string;
    tenantId: string;
    hotelId: string;
    guestId?: string;
    roomTypeId?: string;
    roomId?: string;
    roomNumber?: string;
    assignmentStatus?: string;
    status: BookingStatus;
    source: BookingSource;
    checkInDate: string;
    checkOutDate: string;
    estimatedCheckInTime?: Date;
    actualCheckInTime?: Date;
    actualCheckOutTime?: Date;
    totalAmount: number;
    paidAmount: number;
    paymentStatus: PaymentStatus;
    specialRequests?: string;
    notes?: string;
    adultCount: number;
    childCount: number;
    otaBookingId?: string;
    otaBookingReference?: string;
    rooms: BookingRoomResponseDto[];
    guests: BookingGuestResponseDto[];
    payments: BookingPaymentResponseDto[];
    services: BookingServiceResponseDto[];
    createdAt: Date;
    updatedAt: Date;
    createdBy?: string;
    updatedBy?: string;
}
//# sourceMappingURL=booking-response.dto.d.ts.map