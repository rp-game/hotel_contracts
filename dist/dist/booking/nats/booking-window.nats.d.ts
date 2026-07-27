import { NatsResponse } from '../../common';
export declare class GetBookingWindowRequest {
    tenantId: string;
    hotelId: string;
    startDate?: string;
    endDate?: string;
}
export declare class BookingWindowBucketDto {
    label: string;
    key: string;
    total: number;
    bySource: {
        DIRECT: number;
        WEBSITE: number;
        PHONE: number;
        EMAIL: number;
        WALK_IN: number;
        TRAVEL_AGENT: number;
        CORPORATE: number;
        OTA: number;
        [key: string]: number;
    };
}
export declare class BookingWindowResponseDto {
    buckets: BookingWindowBucketDto[];
    totalBookings: number;
    averageAdvanceDays: number;
}
export type GetBookingWindowResponse = NatsResponse<BookingWindowResponseDto>;
//# sourceMappingURL=booking-window.nats.d.ts.map