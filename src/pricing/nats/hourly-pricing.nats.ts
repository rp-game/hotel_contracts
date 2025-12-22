/**
 * Hourly Pricing NATS Contracts (9 patterns)
 */

import { NatsResponse } from '../../common/nats-response.interface';
import { HourlyPricingRule, PeakPeriod, HourlyRateCalculation, HourlyBlock } from '../types';

export interface CreateHourlyPricingRuleRequest {
  tenantId: string;
  hotelId: string;
  dto: {
    roomTypeId: string;
    hourlyBlocks: HourlyBlock[];
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
  };
}

export interface CreateHourlyPricingRuleResponse {
  data: HourlyPricingRule;
}

export type CreateHourlyPricingRuleNatsResponse = NatsResponse<CreateHourlyPricingRuleResponse>;

export interface UpdateHourlyPricingRuleRequest {
  id: string;
  dto: {
    hourlyBlocks?: HourlyBlock[];
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
  };
}

export interface UpdateHourlyPricingRuleResponse {
  data: HourlyPricingRule;
}

export type UpdateHourlyPricingRuleNatsResponse = NatsResponse<UpdateHourlyPricingRuleResponse>;

export interface FindOneHourlyPricingRuleRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
}

export interface FindOneHourlyPricingRuleResponse {
  data: HourlyPricingRule;
}

export type FindOneHourlyPricingRuleNatsResponse = NatsResponse<FindOneHourlyPricingRuleResponse>;

export interface FindAllHourlyPricingRulesRequest {
  tenantId: string;
  hotelId: string;
}

export interface FindAllHourlyPricingRulesResponse {
  data: HourlyPricingRule[];
}

export type FindAllHourlyPricingRulesNatsResponse = NatsResponse<FindAllHourlyPricingRulesResponse>;

export interface DeleteHourlyPricingRuleRequest {
  id: string;
}

export interface DeleteHourlyPricingRuleResponse {
  message: string;
}

export type DeleteHourlyPricingRuleNatsResponse = NatsResponse<DeleteHourlyPricingRuleResponse>;

export interface CreatePeakPeriodRequest {
  tenantId: string;
  hotelId: string;
  ruleId: string;
  dto: {
    periodName: string;
    startTime: string;
    endTime: string;
    daysOfWeek: number[];
    adjustmentType: 'PERCENTAGE' | 'FIXED';
    multiplier: number;
    fixedAdjustment?: number;
    priority: number;
  };
}

export interface CreatePeakPeriodResponse {
  data: PeakPeriod;
}

export type CreatePeakPeriodNatsResponse = NatsResponse<CreatePeakPeriodResponse>;

export interface UpdatePeakPeriodRequest {
  periodId: string;
  dto: {
    periodName?: string;
    startTime?: string;
    endTime?: string;
    daysOfWeek?: number[];
    adjustmentType?: 'PERCENTAGE' | 'FIXED';
    multiplier?: number;
    fixedAdjustment?: number;
    priority?: number;
    isActive?: boolean;
  };
}

export interface UpdatePeakPeriodResponse {
  data: PeakPeriod;
}

export type UpdatePeakPeriodNatsResponse = NatsResponse<UpdatePeakPeriodResponse>;

export interface DeletePeakPeriodRequest {
  periodId: string;
}

export interface DeletePeakPeriodResponse {
  message: string;
}

export type DeletePeakPeriodNatsResponse = NatsResponse<DeletePeakPeriodResponse>;

export interface CalculateHourlyRateRequest {
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

export interface CalculateHourlyRateResponse {
  data: HourlyRateCalculation;
}

export type CalculateHourlyRateNatsResponse = NatsResponse<CalculateHourlyRateResponse>;
