/**
 * Voucher Types — Centralized Contracts
 *
 * Single-use unique codes (sold via Shopee/Lazada/Gotit or given to guests).
 * Different from promotions: per-instance lifecycle, not shared codes.
 */
export type VoucherType = 'VALUE' | 'DISCOUNT_PERCENT' | 'DISCOUNT_FIXED';
export type VoucherStatus = 'ACTIVE' | 'USED' | 'EXPIRED' | 'CANCELLED';
export declare class VoucherDto {
    id: string;
    tenantId: string;
    hotelId?: string;
    code: string;
    batchId?: string;
    type: VoucherType;
    value: number;
    minBookingAmount?: number;
    applicableRoomTypes?: string[];
    validFrom: string;
    validTo: string;
    status: VoucherStatus;
    issuedToCustomerId?: string;
    usedByCustomerId?: string;
    usedInBookingId?: string;
    usedAt?: string;
    source?: string;
    notes?: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
}
export declare class VouchersPaginatedResponseDto {
    data: VoucherDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
//# sourceMappingURL=voucher.types.d.ts.map