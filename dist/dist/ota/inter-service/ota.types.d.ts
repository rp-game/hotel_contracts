import { NatsResponse } from '../../common';
import { OTAType } from '../enums';
export interface SyncBookingToOTARequest {
    tenantId: string;
    hotelId: string;
    bookingId: string;
    otaType: OTAType;
    otaBookingId?: string;
    status: string;
    data?: Record<string, any>;
}
export interface OTAResponse extends NatsResponse {
    data?: {
        otaReference?: string;
        otaStatus?: string;
        syncTimestamp?: Date;
        errors?: string[];
    };
}
export interface FetchOTABookingsRequest {
    tenantId: string;
    hotelId: string;
    otaType: OTAType;
    fromDate?: Date;
    toDate?: Date;
}
export interface OTABookingData {
    otaBookingId: string;
    otaBookingReference: string;
    otaType: OTAType;
    status: string;
    checkInDate: string;
    checkOutDate: string;
    guestName: string;
    guestEmail?: string;
    guestPhone?: string;
    roomTypeId?: string;
    roomTypeName: string;
    adultCount: number;
    childCount: number;
    totalAmount: number;
    currency: string;
    specialRequests?: string;
    createdAt: Date;
    rawData?: Record<string, any>;
}
export interface FetchOTABookingsResponse extends NatsResponse {
    data?: {
        bookings: OTABookingData[];
    };
}
//# sourceMappingURL=ota.types.d.ts.map