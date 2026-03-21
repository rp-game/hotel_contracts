/**
 * Voucher NATS Message Contracts
 *
 * Patterns:
 * - pricing.vouchers.create
 * - pricing.vouchers.create_batch
 * - pricing.vouchers.find_all
 * - pricing.vouchers.find_one
 * - pricing.vouchers.update
 * - pricing.vouchers.delete
 * - pricing.vouchers.validate
 * - pricing.vouchers.use
 * - pricing.vouchers.unuse
 *
 * Handler: pricing-service (vouchers module)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { VoucherDto, VouchersPaginatedResponseDto, VoucherType, VoucherStatus } from '../types/voucher.types';
export declare class CreateVoucherNatsRequest {
    tenantId: string;
    hotelId?: string;
    code: string;
    type: VoucherType;
    value: number;
    minBookingAmount?: number;
    applicableRoomTypes?: string[];
    validFrom: string;
    validTo: string;
    issuedToCustomerId?: string;
    source?: string;
    notes?: string;
    createdBy: string;
}
export declare class CreateVoucherBatchNatsRequest {
    tenantId: string;
    hotelId?: string;
    prefix: string;
    count: number;
    type: VoucherType;
    value: number;
    minBookingAmount?: number;
    applicableRoomTypes?: string[];
    validFrom: string;
    validTo: string;
    source?: string;
    createdBy: string;
}
export declare class GetVouchersNatsRequest {
    tenantId: string;
    hotelId?: string;
    status?: VoucherStatus;
    batchId?: string;
    source?: string;
    search?: string;
    page?: number;
    limit?: number;
}
export declare class GetVoucherByIdNatsRequest {
    id: string;
    tenantId: string;
}
export declare class UpdateVoucherNatsRequest {
    id: string;
    tenantId: string;
    value?: number;
    minBookingAmount?: number;
    applicableRoomTypes?: string[];
    validFrom?: string;
    validTo?: string;
    issuedToCustomerId?: string;
    notes?: string;
}
export declare class DeleteVoucherNatsRequest {
    id: string;
    tenantId: string;
}
export declare class ValidateVoucherNatsRequest {
    tenantId: string;
    hotelId: string;
    voucherCode: string;
    bookingAmount?: number;
    customerId?: string;
    roomTypeId?: string;
}
export declare class ValidateVoucherResponse {
    isValid: boolean;
    voucherId?: string;
    voucherCode: string;
    type?: VoucherType;
    value?: number;
    applicableAmount?: number;
    finalAmount?: number;
    message?: string;
}
export declare class UseVoucherNatsRequest {
    tenantId: string;
    voucherId: string;
    bookingId: string;
    customerId?: string;
}
export declare class UnuseVoucherNatsRequest {
    tenantId: string;
    voucherId: string;
    bookingId: string;
}
export type CreateVoucherNatsResponse = NatsResponse<VoucherDto>;
export type CreateVoucherBatchNatsResponse = NatsResponse<{
    created: number;
    batchId: string;
    vouchers: VoucherDto[];
}>;
export type GetVouchersNatsResponse = NatsResponse<VouchersPaginatedResponseDto>;
export type GetVoucherByIdNatsResponse = NatsResponse<VoucherDto>;
export type UpdateVoucherNatsResponse = NatsResponse<VoucherDto>;
export type DeleteVoucherNatsResponse = NatsResponse<{
    id: string;
    status: string;
}>;
export type ValidateVoucherNatsResponse = NatsResponse<ValidateVoucherResponse>;
export type UseVoucherNatsResponse = NatsResponse<{
    voucherId: string;
    status: string;
}>;
export type UnuseVoucherNatsResponse = NatsResponse<{
    voucherId: string;
    status: string;
}>;
//# sourceMappingURL=vouchers.nats.d.ts.map