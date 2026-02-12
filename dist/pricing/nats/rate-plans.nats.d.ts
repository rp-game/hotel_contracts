/**
 * Rate Plans NATS Contracts
 *
 * Handles rate plan management including creation, updates, channel mappings,
 * and price calculations.
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { CreateRatePlanRequest, CreateRatePlanResponse, CreateRatePlanNatsResponse, RatePlanTypeEnum, DerivationTypeEnum } from './create-rate-plan.nats';
/**
 * Re-export create contracts
 */
export { CreateRatePlanRequest, CreateRatePlanResponse, CreateRatePlanNatsResponse, RatePlanTypeEnum, DerivationTypeEnum, };
/**
 * NATS Pattern: pricing.rate-plan.update
 */
export declare class UpdateRatePlanDto {
    name?: string;
    description?: string;
    isActive?: boolean;
}
export declare class UpdateRatePlanRequest {
    id: string;
    dto: UpdateRatePlanDto;
}
export declare class UpdateRatePlanResponse {
    data: CreateRatePlanResponse;
}
export type UpdateRatePlanNatsResponse = NatsResponse<UpdateRatePlanResponse>;
/**
 * NATS Pattern: pricing.rate-plan.get
 */
export declare class GetRatePlanRequest {
    id: string;
}
export declare class GetRatePlanResponse {
    data: CreateRatePlanResponse;
}
export type GetRatePlanNatsResponse = NatsResponse<GetRatePlanResponse>;
/**
 * NATS Pattern: pricing.rate-plan.list
 */
export declare class ListRatePlansRequest {
    tenantId: string;
    hotelId: string;
}
export declare class ListRatePlansResponse {
    data: CreateRatePlanResponse[];
}
export type ListRatePlansNatsResponse = NatsResponse<ListRatePlansResponse>;
/**
 * NATS Pattern: pricing.rate-plan.calculate-price
 */
export declare class CalculateRatePlanPriceRequest {
    ratePlanId: string;
    basePrice: number;
}
export declare class CalculateRatePlanPriceResponse {
    ratePlanId: string;
    basePrice: number;
    calculatedPrice: number;
    derivationType?: DerivationTypeEnum;
    derivationValue?: number;
    currency: string;
}
export type CalculateRatePlanPriceNatsResponse = NatsResponse<CalculateRatePlanPriceResponse>;
/**
 * NATS Pattern: pricing.rate-plan.get-channel-mappings
 */
export declare class GetChannelMappingsRequest {
    ratePlanId: string;
}
export declare class ChannelRateMappingResponse {
    id: string;
    ratePlanId: string;
    channelId: string;
    externalRatePlanId?: string;
    externalRatePlanName?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
export declare class GetChannelMappingsResponse {
    data: ChannelRateMappingResponse[];
}
export type GetChannelMappingsNatsResponse = NatsResponse<GetChannelMappingsResponse>;
/**
 * NATS Pattern: pricing.rate-plan.add-channel-mapping
 */
export declare class AddChannelMappingRequest {
    ratePlanId: string;
    dto: CreateChannelMappingDto;
}
export declare class CreateChannelMappingDto {
    channelProvider: string;
    channelName: string;
    externalRateId?: string;
}
export declare class AddChannelMappingResponse {
    data: ChannelRateMappingResponse;
}
export type AddChannelMappingNatsResponse = NatsResponse<AddChannelMappingResponse>;
/**
 * NATS Pattern: pricing.rate-plan.remove-channel-mapping
 */
export declare class RemoveChannelMappingRequest {
    mappingId: string;
}
export declare class RemoveChannelMappingResponse {
    message: string;
}
export type RemoveChannelMappingNatsResponse = NatsResponse<RemoveChannelMappingResponse>;
/**
 * NATS Pattern: pricing.rate-plan.find-by-channel
 */
export declare class FindRatePlansByChannelRequest {
    tenantId: string;
    hotelId: string;
    channelProvider: string;
    channelName: string;
}
export declare class FindRatePlansByChannelResponse {
    data: CreateRatePlanResponse[];
}
export type FindRatePlansByChannelNatsResponse = NatsResponse<FindRatePlansByChannelResponse>;
/**
 * NATS Pattern: pricing.rate-plan.delete
 */
export declare class DeleteRatePlanRequest {
    id: string;
}
export declare class DeleteRatePlanResponse {
    message: string;
}
export type DeleteRatePlanNatsResponse = NatsResponse<DeleteRatePlanResponse>;
//# sourceMappingURL=rate-plans.nats.d.ts.map