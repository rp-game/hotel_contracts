import { NatsResponse } from '../../common/nats-response.interface';

/**
 * =============================================================================
 * ADDITIONAL SERVICES NATS CONTRACTS
 * Pattern: additional-services.service.*
 * Handler: financial-service
 *
 * NOTE: These types are namespaced as "AdditionalService*" to avoid conflicts
 * with other domains (booking.services, crm.guest-services)
 * =============================================================================
 */

export type AdditionalServiceCategory =
  | 'ROOM_SERVICE'
  | 'SPA_WELLNESS'
  | 'TRANSPORTATION'
  | 'FOOD_BEVERAGE'
  | 'LAUNDRY_CLEANING'
  | 'BUSINESS_SERVICES'
  | 'ENTERTAINMENT'
  | 'CONCIERGE'
  | 'PET_SERVICES'
  | 'OTHER';

// ============================================================================
// 1. CREATE SERVICE
// ============================================================================
export interface CreateAdditionalServiceNatsRequest {
  tenantId: string;
  hotelId: string;
  name: string;
  description?: string;
  category: AdditionalServiceCategory;
  price: number;
  currency: string;
  duration?: number;
  isActive: boolean;
  availableHours?: string;
}

export interface AdditionalServiceData {
  id: string;
  tenantId: string;
  hotelId: string;
  name: string;
  description?: string;
  category: AdditionalServiceCategory;
  price: number;
  currency: string;
  duration?: number;
  isActive: boolean;
  availableHours?: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceData>;

// ============================================================================
// 2. GET ALL SERVICES
// ============================================================================
export interface GetAdditionalServicesNatsRequest {
  tenantId: string;
  hotelId?: string;
  category?: AdditionalServiceCategory;
  isActive?: boolean;
  page?: number;
  limit?: number;
}

export interface GetAdditionalServicesData {
  services: AdditionalServiceData[];
  total: number;
  page: number;
  limit: number;
}

export type GetAdditionalServicesNatsResponse = NatsResponse<GetAdditionalServicesData>;

// ============================================================================
// 3. GET SERVICE BY ID
// ============================================================================
export interface GetAdditionalServiceNatsRequest {
  id: string;
  tenantId: string;
  hotelId?: string;
}

export type GetAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceData>;

// ============================================================================
// 4. UPDATE SERVICE
// ============================================================================
export interface UpdateAdditionalServiceNatsRequest {
  id: string;
  tenantId: string;
  hotelId?: string;
  name?: string;
  description?: string;
  category?: AdditionalServiceCategory;
  price?: number;
  currency?: string;
  duration?: number;
  isActive?: boolean;
  availableHours?: string;
}

export type UpdateAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceData>;

// ============================================================================
// 5. DELETE SERVICE
// ============================================================================
export interface DeleteAdditionalServiceNatsRequest {
  id: string;
  tenantId: string;
  hotelId?: string;
}

export interface DeleteAdditionalServiceData {
  success: boolean;
  message: string;
  serviceId?: string;
}

export type DeleteAdditionalServiceNatsResponse = NatsResponse<DeleteAdditionalServiceData>;

// ============================================================================
// 6. GET SERVICE CATEGORIES
// ============================================================================
export interface GetAdditionalServiceCategoriesNatsRequest {
  tenantId: string;
}

export interface GetAdditionalServiceCategoriesData {
  categories: AdditionalServiceCategory[];
}

export type GetAdditionalServiceCategoriesNatsResponse = NatsResponse<GetAdditionalServiceCategoriesData>;

// ============================================================================
// 7. GET SERVICE STATISTICS
// ============================================================================
export interface GetAdditionalServiceStatsNatsRequest {
  tenantId: string;
  hotelId?: string;
}

export interface AdditionalServiceStatsData {
  totalBookings: number;
  totalRevenue: number;
  popularServices: { serviceId: string; serviceName: string; bookingCount: number }[];
  revenueByCategory: { [category: string]: number };
  completionRate: number;
}

export type GetAdditionalServiceStatsNatsResponse = NatsResponse<AdditionalServiceStatsData>;

// ============================================================================
// 8. GET SERVICE DASHBOARD
// ============================================================================
export interface GetAdditionalServiceDashboardNatsRequest {
  tenantId: string;
  hotelId?: string;
}

export interface RecentAdditionalServiceBooking {
  id: string;
  serviceId: string;
  quantity: number;
  totalPrice: number;
  requestedDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface AdditionalServiceDashboardData {
  todayBookings: number;
  weeklyRevenue: number;
  monthlyRevenue: number;
  topServices: { serviceId: string; serviceName: string; revenue: number }[];
  recentBookings: RecentAdditionalServiceBooking[];
}

export type GetAdditionalServiceDashboardNatsResponse = NatsResponse<AdditionalServiceDashboardData>;
