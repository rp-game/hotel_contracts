/**
 * Customer Bookings NATS Contract
 *
 * NATS Pattern: booking.customer.bookings
 * Handler: booking-service
 * Called by: api-gateway (CrmController)
 * Used by: Customer profile page - bookings list
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { BookingStatus } from '../enums/booking-status.enum';
/**
 * Customer Booking Response
 * Compatible with API Gateway BookingDto
 */
export declare class CustomerBookingNatsResponse {
    id: string;
    bookingCode: string;
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
    guestCount: number;
    numberOfNights: number;
    totalAmount: number;
    paidAmount: number;
    balance: number;
    status: BookingStatus;
    specialRequests?: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
    updatedBy?: string;
    actualCheckInTime?: string;
    actualCheckOutTime?: string;
}
/**
 * Customer Bookings List Request
 * Pattern: booking.customer.bookings
 */
export interface CustomerBookingsNatsRequest {
    tenantId: string;
    customerId: string;
    page?: number;
    limit?: number;
}
/**
 * Customer Bookings List Response
 */
export declare class CustomerBookingsListNatsResponse {
    data: CustomerBookingNatsResponse[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Full NATS response for customer bookings
 */
export type CustomerBookingsNatsResponseType = NatsResponse<CustomerBookingsListNatsResponse>;
/**
 * NATS Pattern: booking.customer.stats
 */
export interface GetCustomerBookingStatsNatsRequest {
    tenantId: string;
    customerId: string;
}
//# sourceMappingURL=customer-bookings.nats.d.ts.map