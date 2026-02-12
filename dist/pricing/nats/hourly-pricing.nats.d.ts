/**
 * Hourly Pricing NATS Contracts (9 patterns)
 *
 * All DTOs are classes with @ApiProperty decorators for Swagger generation.
 * Used for both NATS messages and REST API DTOs.
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { HourlyPricingRule, PeakPeriod, HourlyRateCalculation } from '../types';
export declare class HourlyBlockDto {
    blockName: string;
    fromHour: number;
    toHour: number;
    ratePerHour: number;
    isFlat?: boolean;
    flatAmount?: number;
}
export declare class CreateHourlyPricingRuleDto {
    roomTypeId: string;
    hourlyBlocks: HourlyBlockDto[];
    minHours: number;
    maxHours: number;
    pricingStrategy: 'TIERED' | 'FLAT' | 'HYBRID';
    fallbackHourlyRate?: number;
    enableDynamicAdjustments: boolean;
    currency: string;
    validFrom?: string;
    validTo?: string;
    priority: number;
    description?: string;
}
export declare class CreateHourlyPricingRuleRequest {
    tenantId: string;
    hotelId: string;
    dto: CreateHourlyPricingRuleDto;
}
export declare class CreateHourlyPricingRuleResponse {
    data: HourlyPricingRule;
}
export type CreateHourlyPricingRuleNatsResponse = NatsResponse<CreateHourlyPricingRuleResponse>;
export declare class UpdateHourlyPricingRuleDto {
    hourlyBlocks?: HourlyBlockDto[];
    minHours?: number;
    maxHours?: number;
    pricingStrategy?: 'TIERED' | 'FLAT' | 'HYBRID';
    fallbackHourlyRate?: number;
    enableDynamicAdjustments?: boolean;
    validFrom?: string;
    validTo?: string;
    priority?: number;
    description?: string;
    isActive?: boolean;
}
export declare class UpdateHourlyPricingRuleRequest {
    id: string;
    dto: UpdateHourlyPricingRuleDto;
}
export declare class UpdateHourlyPricingRuleResponse {
    data: HourlyPricingRule;
}
export type UpdateHourlyPricingRuleNatsResponse = NatsResponse<UpdateHourlyPricingRuleResponse>;
export declare class FindOneHourlyPricingRuleRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
}
export declare class FindOneHourlyPricingRuleResponse {
    data: HourlyPricingRule;
}
export type FindOneHourlyPricingRuleNatsResponse = NatsResponse<FindOneHourlyPricingRuleResponse>;
export declare class FindAllHourlyPricingRulesRequest {
    tenantId: string;
    hotelId: string;
}
export declare class FindAllHourlyPricingRulesResponse {
    data: HourlyPricingRule[];
}
export type FindAllHourlyPricingRulesNatsResponse = NatsResponse<FindAllHourlyPricingRulesResponse>;
export declare class DeleteHourlyPricingRuleRequest {
    id: string;
}
export declare class DeleteHourlyPricingRuleResponse {
    message: string;
}
export type DeleteHourlyPricingRuleNatsResponse = NatsResponse<DeleteHourlyPricingRuleResponse>;
export declare class CreatePeakPeriodDto {
    periodName: string;
    startTime: string;
    endTime: string;
    daysOfWeek: number[];
    adjustmentType: 'PERCENTAGE' | 'FIXED';
    multiplier: number;
    fixedAdjustment?: number;
    priority: number;
}
export declare class CreatePeakPeriodRequest {
    tenantId: string;
    hotelId: string;
    ruleId: string;
    dto: CreatePeakPeriodDto;
}
export declare class CreatePeakPeriodResponse {
    data: PeakPeriod;
}
export type CreatePeakPeriodNatsResponse = NatsResponse<CreatePeakPeriodResponse>;
export declare class UpdatePeakPeriodDto {
    periodName?: string;
    startTime?: string;
    endTime?: string;
    daysOfWeek?: number[];
    adjustmentType?: 'PERCENTAGE' | 'FIXED';
    multiplier?: number;
    fixedAdjustment?: number;
    isActive?: boolean;
    priority?: number;
}
export declare class UpdatePeakPeriodRequest {
    periodId: string;
    dto: UpdatePeakPeriodDto;
}
export declare class UpdatePeakPeriodResponse {
    data: PeakPeriod;
}
export type UpdatePeakPeriodNatsResponse = NatsResponse<UpdatePeakPeriodResponse>;
export declare class DeletePeakPeriodRequest {
    periodId: string;
}
export declare class DeletePeakPeriodResponse {
    message: string;
}
export type DeletePeakPeriodNatsResponse = NatsResponse<DeletePeakPeriodResponse>;
export declare class CalculateHourlyRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    checkIn: string;
    startTime: string;
    endTime: string;
    occupancyAdjustment?: number;
    seasonalAdjustment?: number;
    promotionDiscount?: number;
}
export declare class CalculateHourlyRateResponse {
    data: HourlyRateCalculation;
}
export type CalculateHourlyRateNatsResponse = NatsResponse<CalculateHourlyRateResponse>;
//# sourceMappingURL=hourly-pricing.nats.d.ts.map