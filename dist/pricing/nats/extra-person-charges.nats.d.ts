/**
 * Extra Person Charges NATS Contracts (5 patterns)
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
 */
import { NatsResponse } from '../../common/nats-response.interface';
export declare class FindAllExtraPersonChargesRequest {
    tenantId: string;
    hotelId: string;
}
export declare class ExtraPersonChargeResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    standardOccupancy: number;
    maxOccupancy: number;
    extraAdultCharge: number;
    extraChildCharge?: number;
    childMaxAge: number;
    currency: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
export declare class FindAllExtraPersonChargesResponse {
    data: ExtraPersonChargeResponse[];
}
export type FindAllExtraPersonChargesNatsResponse = NatsResponse<FindAllExtraPersonChargesResponse>;
export declare class FindExtraPersonChargeByIdRequest {
    id: string;
    tenantId: string;
}
export declare class FindExtraPersonChargeByIdResponse {
    data: ExtraPersonChargeResponse;
}
export type FindExtraPersonChargeByIdNatsResponse = NatsResponse<FindExtraPersonChargeByIdResponse>;
export declare class CreateExtraPersonChargeRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    standardOccupancy: number;
    maxOccupancy: number;
    extraAdultCharge: number;
    extraChildCharge?: number;
    childMaxAge?: number;
    currency?: string;
    isActive?: boolean;
}
export declare class CreateExtraPersonChargeResponse {
    data: ExtraPersonChargeResponse;
    message: string;
}
export type CreateExtraPersonChargeNatsResponse = NatsResponse<CreateExtraPersonChargeResponse>;
export declare class UpdateExtraPersonChargeRequest {
    id: string;
    tenantId: string;
    standardOccupancy?: number;
    maxOccupancy?: number;
    extraAdultCharge?: number;
    extraChildCharge?: number;
    childMaxAge?: number;
    currency?: string;
    isActive?: boolean;
}
export declare class UpdateExtraPersonChargeResponse {
    data: ExtraPersonChargeResponse;
    message: string;
}
export type UpdateExtraPersonChargeNatsResponse = NatsResponse<UpdateExtraPersonChargeResponse>;
export declare class DeleteExtraPersonChargeRequest {
    id: string;
    tenantId: string;
}
export declare class DeleteExtraPersonChargeResponse {
    message: string;
}
export type DeleteExtraPersonChargeNatsResponse = NatsResponse<DeleteExtraPersonChargeResponse>;
//# sourceMappingURL=extra-person-charges.nats.d.ts.map