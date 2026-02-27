/**
 * Add Service to Booking NATS Contracts
 * Pattern: booking.add_service
 */
import { NatsResponse } from '../../common';
export declare class AddServiceNatsRequest {
    bookingId: string;
    serviceId: string;
    serviceName?: string;
    quantity: number;
    unitPrice?: number;
    notes?: string;
    tenantId: string;
    hotelId: string;
    addedBy: string;
    bookingRoomId?: string;
    guestId?: string;
}
export interface ServiceData {
    id: string;
    bookingId: string;
    serviceId: string;
    quantity: number;
    unitPrice?: number;
    notes?: string;
    addedBy: string;
    addedAt: string;
}
export interface AddServiceResponseData {
    booking: {
        id: string;
        bookingCode: string;
        status: string;
        totalAmount: number;
    };
    service: ServiceData;
}
export type AddServiceNatsResponse = NatsResponse<AddServiceResponseData>;
//# sourceMappingURL=add-service.nats.d.ts.map