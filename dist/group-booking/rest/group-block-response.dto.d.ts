/**
 * Group Block Response DTOs
 *
 * Wrapper classes for REST API responses with Swagger documentation.
 */
import { GroupBlockSummary, GroupBlockDetails } from '../types/group-block.types';
/**
 * Paginated list response for group blocks
 */
export declare class GroupBlockListResponseDto {
    data: GroupBlockSummary[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
/**
 * Single group block response wrapper
 */
export declare class GroupBlockResponseDto {
    data: GroupBlockDetails;
}
export declare class GroupBlockBookingSummaryDto {
    id: string;
    bookingCode: string;
    guestName: string;
    guestPhone: string;
    roomTypeName: string;
    roomNumber: string | null;
    checkInDate: string;
    checkOutDate: string;
    status: string;
    totalAmount: number;
    adultCount: number;
    childCount: number;
}
export declare class BatchCheckInResultItemDto {
    bookingId: string;
    bookingCode: string;
    success: boolean;
    error?: string;
}
export declare class BatchCheckInResultDto {
    total: number;
    succeeded: number;
    failed: number;
    results: BatchCheckInResultItemDto[];
}
export declare class GroupFolioBookingItemDto {
    bookingId: string;
    bookingCode: string;
    guestName: string;
    roomTypeName: string;
    roomNumber: string | null;
    checkInDate: string;
    checkOutDate: string;
    status: string;
    totalAmount: number;
    taxAmount: number;
    grossAmount: number;
    paidAmount: number;
    balance: number;
}
export declare class GroupFolioSummaryDto {
    totalBookings: number;
    totalRoomCharges: number;
    totalTaxAmount: number;
    totalGrossAmount: number;
    totalPaidAmount: number;
    totalBalance: number;
}
export declare class GroupMasterFolioDto {
    groupBlockId: string;
    blockCode: string;
    groupName: string;
    bookings: GroupFolioBookingItemDto[];
    summary: GroupFolioSummaryDto;
}
//# sourceMappingURL=group-block-response.dto.d.ts.map