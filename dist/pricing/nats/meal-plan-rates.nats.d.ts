/**
 * Meal Plan Rates NATS Contracts (5 patterns)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { MealPlanRate, MealPlanType } from '../types';
export interface FindAllMealPlanRatesRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
}
export interface FindAllMealPlanRatesResponse {
    data: MealPlanRate[];
}
export type FindAllMealPlanRatesNatsResponse = NatsResponse<FindAllMealPlanRatesResponse>;
export interface FindMealPlanRateByIdRequest {
    id: string;
    tenantId: string;
}
export interface FindMealPlanRateByIdResponse {
    data: MealPlanRate;
}
export type FindMealPlanRateByIdNatsResponse = NatsResponse<FindMealPlanRateByIdResponse>;
export interface CreateMealPlanRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    mealPlanType: MealPlanType;
    additionalCharge: number;
    currency: string;
    description?: string;
    isActive?: boolean;
}
export interface CreateMealPlanRateResponse {
    data: MealPlanRate;
    message: string;
}
export type CreateMealPlanRateNatsResponse = NatsResponse<CreateMealPlanRateResponse>;
export interface UpdateMealPlanRateRequest {
    id: string;
    tenantId: string;
    mealPlanType?: MealPlanType;
    additionalCharge?: number;
    description?: string;
    isActive?: boolean;
}
export interface UpdateMealPlanRateResponse {
    data: MealPlanRate;
    message: string;
}
export type UpdateMealPlanRateNatsResponse = NatsResponse<UpdateMealPlanRateResponse>;
export interface DeleteMealPlanRateRequest {
    id: string;
    tenantId: string;
}
export interface DeleteMealPlanRateResponse {
    message: string;
}
export type DeleteMealPlanRateNatsResponse = NatsResponse<DeleteMealPlanRateResponse>;
//# sourceMappingURL=meal-plan-rates.nats.d.ts.map