/**
 * Meal Plan Rates Types
 *
 * Shared types for meal plan pricing patterns.
 * Handles additional charges for different meal plan options.
 *
 * @updated 2026-02-12 - Converted to class with @ApiProperty for dual use (NATS + REST)
 */
/**
 * Meal plan rate entity
 * Used for both NATS messages and REST API responses
 */
export declare class MealPlanRate {
    id: string;
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    mealPlanType: string;
    description?: string;
    additionalCharge: number;
    currency: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
/**
 * Standard meal plan types
 */
export type MealPlanType = 'RO' | 'BB' | 'HB' | 'FB' | 'AI';
/**
 * Meal plan type descriptions
 */
export declare const MealPlanTypeDescriptions: Record<MealPlanType, string>;
//# sourceMappingURL=meal-plan-rates.types.d.ts.map