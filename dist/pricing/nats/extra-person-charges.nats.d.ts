/**
 * Extra Person Charges NATS Contracts (5 patterns)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { ExtraPersonCharge } from '../types';
export interface FindAllExtraPersonChargesRequest {
    tenantId: string;
    hotelId: string;
}
export interface FindAllExtraPersonChargesResponse {
    data: ExtraPersonCharge[];
}
export type FindAllExtraPersonChargesNatsResponse = NatsResponse<FindAllExtraPersonChargesResponse>;
export interface FindExtraPersonChargeByIdRequest {
    id: string;
    tenantId: string;
}
export interface FindExtraPersonChargeByIdResponse {
    data: ExtraPersonCharge;
}
export type FindExtraPersonChargeByIdNatsResponse = NatsResponse<FindExtraPersonChargeByIdResponse>;
export interface CreateExtraPersonChargeRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    standardOccupancy: number;
    maxOccupancy: number;
    extraAdultCharge: number;
    extraChildCharge?: number;
    childMaxAge: number;
    currency: string;
    isActive?: boolean;
}
export interface CreateExtraPersonChargeResponse {
    data: ExtraPersonCharge;
    message: string;
}
export type CreateExtraPersonChargeNatsResponse = NatsResponse<CreateExtraPersonChargeResponse>;
export interface UpdateExtraPersonChargeRequest {
    id: string;
    tenantId: string;
    standardOccupancy?: number;
    maxOccupancy?: number;
    extraAdultCharge?: number;
    extraChildCharge?: number;
    childMaxAge?: number;
    isActive?: boolean;
}
export interface UpdateExtraPersonChargeResponse {
    data: ExtraPersonCharge;
    message: string;
}
export type UpdateExtraPersonChargeNatsResponse = NatsResponse<UpdateExtraPersonChargeResponse>;
export interface DeleteExtraPersonChargeRequest {
    id: string;
    tenantId: string;
}
export interface DeleteExtraPersonChargeResponse {
    message: string;
}
export type DeleteExtraPersonChargeNatsResponse = NatsResponse<DeleteExtraPersonChargeResponse>;
//# sourceMappingURL=extra-person-charges.nats.d.ts.map