/**
 * Meal Plan Rates NATS Contracts (5 patterns)
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { MealPlanRate } from '../types';
export declare class FindAllMealPlanRatesRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
}
export declare class FindAllMealPlanRatesResponse {
    data: MealPlanRate[];
}
export type FindAllMealPlanRatesNatsResponse = NatsResponse<FindAllMealPlanRatesResponse>;
export declare class FindMealPlanRateByIdRequest {
    id: string;
    tenantId: string;
}
export declare class FindMealPlanRateByIdResponse {
    data: MealPlanRate;
}
export type FindMealPlanRateByIdNatsResponse = NatsResponse<FindMealPlanRateByIdResponse>;
export declare class CreateMealPlanRateRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    mealPlanType: string;
    additionalCharge: number;
    currency: string;
    description?: string;
    isActive?: boolean;
}
export declare class CreateMealPlanRateResponse {
    data: MealPlanRate;
    message: string;
}
export type CreateMealPlanRateNatsResponse = NatsResponse<CreateMealPlanRateResponse>;
export declare class UpdateMealPlanRateRequest {
    id: string;
    tenantId: string;
    mealPlanType?: string;
    additionalCharge?: number;
    description?: string;
    isActive?: boolean;
}
export declare class UpdateMealPlanRateResponse {
    data: MealPlanRate;
    message: string;
}
export type UpdateMealPlanRateNatsResponse = NatsResponse<UpdateMealPlanRateResponse>;
export declare class DeleteMealPlanRateRequest {
    id: string;
    tenantId: string;
}
export declare class DeleteMealPlanRateResponse {
    message: string;
}
export type DeleteMealPlanRateNatsResponse = NatsResponse<DeleteMealPlanRateResponse>;
//# sourceMappingURL=meal-plan-rates.nats.d.ts.map