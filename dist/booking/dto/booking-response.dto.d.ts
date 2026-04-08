import { BookingStatus, BookingSource, PaymentStatus } from '../enums/booking.enum';
import { PricingBreakdownDto } from './pricing-breakdown.dto';
export declare class BookingRoomResponseDto {
    id: string;
    roomTypeId: string;
    roomTypeName: string;
    roomId?: string;
    roomNumber?: string;
    pricePerUnit: number;
    totalPrice: number;
    discountAmount: number;
    taxAmount?: number;
    grossAmount?: number;
    taxBreakdown?: {
        serviceCharge: {
            rate: number;
            amount: number;
        };
        vat: {
            rate: number;
            amount: number;
        };
    };
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
    createdBy?: string;
    payerName?: string;
    notes?: string;
}
export declare class BookingServiceResponseDto {
    id: string;
    serviceId?: string | null;
    category?: string | null;
    serviceName: string;
    quantity: number;
    price: number;
    totalPrice: number;
    taxRate?: number;
    serviceChargeRate?: number;
    taxAmount?: number;
    grossAmount?: number;
    serviceDate: Date;
    isPaid: boolean;
}
export declare class FolioItemDto {
    type: 'ROOM' | 'SERVICE' | 'DISCOUNT' | 'TAX';
    description: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    taxRate?: number;
    taxAmount?: number;
    netAmount?: number;
    date?: string;
    referenceId?: string;
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
    taxAmount?: number;
    grossAmount?: number;
    requiredDeposit?: number | null;
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
    folio?: FolioItemDto[];
    grandTotal?: number;
    balance?: number;
    pricingBreakdown?: PricingBreakdownDto;
    ratePlanId?: string;
    promoCode?: string | null;
    promotionId?: string | null;
    promotionDiscount?: number;
    groupId?: string | null;
    groupName?: string | null;
    groupBlockCode?: string | null;
    travelAgentId?: string | null;
    travelAgentName?: string | null;
    agentReference?: string | null;
    corporateId?: string | null;
    corporateName?: string | null;
    salesPersonId?: string | null;
    salesPersonName?: string | null;
    createdAt: Date;
    updatedAt: Date;
    createdBy?: string;
    updatedBy?: string;
}
//# sourceMappingURL=booking-response.dto.d.ts.map