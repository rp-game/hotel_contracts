/**
 * Meal Plan Rates Types
 *
 * Shared types for meal plan pricing patterns.
 * Handles additional charges for different meal plan options.
 */

/**
 * Meal plan rate configuration
 */
export interface MealPlanRate {
  id: string;
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  mealPlanType: MealPlanType;
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
export const MealPlanTypeDescriptions: Record<MealPlanType, string> = {
  RO: 'Room Only',
  BB: 'Bed & Breakfast',
  HB: 'Half Board',
  FB: 'Full Board',
  AI: 'All Inclusive',
};
