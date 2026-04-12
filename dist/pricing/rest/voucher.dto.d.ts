import { VoucherType } from '../types/voucher.types';
/**
 * REST body for POST /pricing/vouchers
 * tenantId, hotelId, createdBy are injected by the gateway from auth context
 */
export declare class CreateVoucherDto {
    code: string;
    type: VoucherType;
    value: number;
    minBookingAmount?: number;
    applicableRoomTypes?: string[];
    validFrom: string;
    validTo: string;
    source?: string;
    issuedToCustomerId?: string;
    notes?: string;
}
/**
 * REST body for POST /pricing/vouchers/batch
 */
export declare class CreateVoucherBatchDto {
    prefix: string;
    count: number;
    type: VoucherType;
    value: number;
    minBookingAmount?: number;
    applicableRoomTypes?: string[];
    validFrom: string;
    validTo: string;
    source?: string;
}
/**
 * REST body for PUT /pricing/vouchers/:id
 */
export declare class UpdateVoucherDto {
    value?: number;
    minBookingAmount?: number;
    applicableRoomTypes?: string[];
    validFrom?: string;
    validTo?: string;
    issuedToCustomerId?: string;
    notes?: string;
}
/**
 * REST body for POST /pricing/vouchers/validate
 */
export declare class ValidateVoucherDto {
    voucherCode: string;
    bookingAmount?: number;
    customerId?: string;
    roomTypeId?: string;
}
//# sourceMappingURL=voucher.dto.d.ts.map