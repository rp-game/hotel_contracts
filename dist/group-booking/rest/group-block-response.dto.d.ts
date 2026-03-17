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
    roomId: string | null;
    roomTypeId: string | null;
    checkInDate: string;
    checkOutDate: string;
    status: string;
    totalAmount: number;
    adultCount: number;
    childCount: number;
    preRegistrationStatus: string | null;
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
export declare class BatchRoomAssignResultItemDto {
    bookingId: string;
    roomId: string;
    roomNumber: string;
    success: boolean;
    error?: string;
}
export declare class BatchRoomAssignResultDto {
    total: number;
    succeeded: number;
    failed: number;
    results: BatchRoomAssignResultItemDto[];
}
export declare class BatchPickupResultItemDto {
    bookingId: string;
    bookingCode: string;
    guestName: string;
    success: boolean;
    error?: string;
}
export declare class BatchPickupResultDto {
    total: number;
    succeeded: number;
    failed: number;
    results: BatchPickupResultItemDto[];
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
    totalMasterCharges: number;
    totalDepositPaid: number;
    totalPaymentPaid: number;
    totalPaidAmount: number;
    totalBalance: number;
    creditBalance: number;
}
export declare class GroupMasterChargeResponseDto {
    id: string;
    groupBlockId: string;
    category: string;
    description: string;
    amount: number;
    date: string;
    taxRate: number;
    reference: string | null;
    createdBy: string;
    createdByName: string | null;
    voidedAt: string | null;
    voidReason: string | null;
    createdAt: string;
}
export declare class GroupPaymentResponseDto {
    id: string;
    groupBlockId: string;
    type: string;
    amount: number;
    paymentMethod: string;
    reference: string | null;
    notes: string | null;
    status: string;
    receivedBy: string;
    receivedByName: string | null;
    voidedAt: string | null;
    voidReason: string | null;
    createdAt: string;
}
export declare class GroupMasterFolioDto {
    groupBlockId: string;
    blockCode: string;
    groupName: string;
    billingMode: string;
    bookings: GroupFolioBookingItemDto[];
    masterCharges: GroupMasterChargeResponseDto[];
    deposits: GroupPaymentResponseDto[];
    payments: GroupPaymentResponseDto[];
    summary: GroupFolioSummaryDto;
}
export declare class GroupDepositPaymentDto {
    id: string;
    groupBlockId: string;
    type: string;
    amount: number;
    paymentMethod: string;
    reference: string | null;
    notes: string | null;
    status: string;
    receivedBy: string;
    receivedByName: string | null;
    voidedAt: string | null;
    voidReason: string | null;
    createdAt: string;
}
export declare class GroupDepositListResponseDto {
    deposits: GroupDepositPaymentDto[];
    totalDeposited: number;
    totalVoided: number;
    netDeposited: number;
}
export declare class GroupPaymentListResponseDto {
    payments: GroupPaymentResponseDto[];
    totalDeposited: number;
    totalSettlementPaid: number;
    totalVoided: number;
    netPaid: number;
}
//# sourceMappingURL=group-block-response.dto.d.ts.map