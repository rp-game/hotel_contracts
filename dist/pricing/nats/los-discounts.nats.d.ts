/**
 * LOS Discounts NATS Contracts (5 patterns)
 * All classes with @ApiProperty for Swagger + NATS usage
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { LosDiscount } from '../types';
export declare class FindAllLosDiscountsRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
}
export declare class FindAllLosDiscountsResponse {
    data: LosDiscount[];
}
export type FindAllLosDiscountsNatsResponse = NatsResponse<FindAllLosDiscountsResponse>;
export declare class FindLosDiscountByIdRequest {
    id: string;
    tenantId: string;
}
export declare class FindLosDiscountByIdResponse {
    data: LosDiscount;
}
export type FindLosDiscountByIdNatsResponse = NatsResponse<FindLosDiscountByIdResponse>;
export declare class CreateLosDiscountRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
    minNights: number;
    maxNights?: number;
    discountType: 'PERCENTAGE' | 'FIXED';
    discountValue: number;
    description?: string;
    currency: string;
    validFrom?: string;
    validTo?: string;
    isActive?: boolean;
}
export declare class CreateLosDiscountResponse {
    data: LosDiscount;
    message: string;
}
export type CreateLosDiscountNatsResponse = NatsResponse<CreateLosDiscountResponse>;
export declare class UpdateLosDiscountRequest {
    id: string;
    tenantId: string;
    minNights?: number;
    maxNights?: number;
    discountType?: 'PERCENTAGE' | 'FIXED';
    discountValue?: number;
    description?: string;
    currency?: string;
    validFrom?: string;
    validTo?: string;
    isActive?: boolean;
}
export declare class UpdateLosDiscountResponse {
    data: LosDiscount;
    message: string;
}
export type UpdateLosDiscountNatsResponse = NatsResponse<UpdateLosDiscountResponse>;
export declare class DeleteLosDiscountRequest {
    id: string;
    tenantId: string;
}
export declare class DeleteLosDiscountResponse {
    message: string;
}
export type DeleteLosDiscountNatsResponse = NatsResponse<DeleteLosDiscountResponse>;
//# sourceMappingURL=los-discounts.nats.d.ts.map