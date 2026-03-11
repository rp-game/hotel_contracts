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
export declare class ValidateQRCodeRequestDto {
    qrCode: string;
}
export declare class SearchCheckoutsResponseDto {
    data: CheckoutHistoryItemDto[];
    total: number;
}
export declare enum RoomCondition {
    GOOD = "GOOD",
    DAMAGED = "DAMAGED",
    NEEDS_ATTENTION = "NEEDS_ATTENTION"
}
export declare enum CheckoutStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}
export declare class DamageReportDto {
    item: string;
    description: string;
    severity: number;
    estimatedCost?: number;
    photos?: string[];
}
export declare class RoomInspectionDto {
    guestDeparted: boolean;
    keyCardsReturned: number;
    roomCondition: RoomCondition;
    damages?: DamageReportDto[];
    missingItems?: string[];
    photos?: string[];
    notes?: string;
}
export declare class GpsLocationDto {
    latitude: number;
    longitude: number;
    accuracy: number;
    timestamp: string;
}
export declare class MobileCheckoutRequestDto {
    roomNumber: string;
    guestName: string;
    expectedCheckoutTime: string;
    actualCheckoutTime: string;
    inspection: RoomInspectionDto;
    location?: GpsLocationDto;
    notes?: string;
}
export declare class QRCheckoutRequestDto {
    qrCodeData: string;
    inspection: RoomInspectionDto;
    location: GpsLocationDto;
}
export declare class CheckoutInfoResponseDto {
    id: string;
    roomNumber: string;
    guestName: string;
    guestPhone: string;
    expectedCheckoutTime: string;
    checkInTime: string;
    totalAmount: string;
    paidAmount: string;
    balance: string;
    adults: number;
    children: number;
    additionalServices?: any[];
    status: CheckoutStatus;
    isOverdue: boolean;
}
export declare class MobileCheckoutResponseDto {
    success: boolean;
    checkoutId: string;
    message: string;
    bookingStatus: string;
    roomStatus: string;
    housekeepingTaskId?: string;
    completedAt: string;
}
//# sourceMappingURL=checkout.dto.d.ts.map