/**
 * Promotions Types
 *
 * Shared types for promotion patterns.
 * Handles promotional codes and special offers.
 */

/**
 * Promotion entity
 */
export interface Promotion {
  id: string;
  tenantId: string;
  hotelId: string;
  name: string;
  code: string;
  description?: string;
  startDate: string;
  endDate: string;
  discountType: 'PERCENTAGE' | 'FIXED';
  discountValue: number;
  applicableRoomTypes?: string[];
  applicableChannels?: string[];
  minimumStay?: number;
  maximumStay?: number;
  minimumAdvanceBookingDays?: number;
  maximumAdvanceBookingDays?: number;
  blackoutDates?: string[];
  usageLimit: number;
  usageCount: number;
  conditions?: PromotionConditions;
  isActive: boolean;
  status: PromotionStatus;
  createdAt: string;
  updatedAt: string;
}

/**
 * Promotion conditions
 */
export interface PromotionConditions {
  minNights?: number;
  minGuests?: number;
  roomTypes?: string[];
  channels?: string[];
}

/**
 * Promotion code validation result
 */
export interface PromotionCode {
  code: string;
  isValid: boolean;
  promotion?: Promotion;
  errorMessage?: string;
}

/**
 * Promotion status
 */
export type PromotionStatus = 'ACTIVE' | 'INACTIVE' | 'EXPIRED' | 'UPCOMING';

/**
 * Paginated promotions response
 */
export interface PromotionsPaginatedResponse {
  data: Promotion[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
