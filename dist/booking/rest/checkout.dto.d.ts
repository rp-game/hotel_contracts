/**
 * Checkout REST DTOs
 * REST request/response shapes for checkout endpoints.
 * Request DTOs: what the controller @Body() receives (no tenantId/staffId — from headers/JWT)
 * Response DTOs: what Swagger shows (string dates, no internal fields)
 */
import { CheckoutRoomItem, CheckoutBookingSummary } from '../nats/mobile-checkout.nats';
export declare class StartCheckoutRequestDto {
    bookingId: string;
}
export declare class CompleteCheckoutRequestDto {
    bookingId: string;
    notes?: string;
    damages?: Record<string, unknown>[];
    services?: Record<string, unknown>[];
}
export declare class StartCheckoutResponseDto {
    bookingId: string;
    status: string;
    startTime: string;
    staffId: string;
}
export declare class CompleteCheckoutResponseDto {
    bookingId: string;
    status: string;
    completedTime: string;
    finalAmount: number;
}
export declare class CheckoutHistoryItemDto {
    id: string;
    bookingCode: string;
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
export declare class CheckoutHistoryResponseDto {
    data: CheckoutHistoryItemDto[];
    total: number;
    page: number;
    limit: number;
}
export declare class CheckoutItemsResponseDto {
    booking: CheckoutBookingSummary;
    rooms: CheckoutRoomItem[];
    services: Record<string, unknown>[];
    damages: Record<string, unknown>[];
    specialRequests?: string;
}
//# sourceMappingURL=checkout.dto.d.ts.map