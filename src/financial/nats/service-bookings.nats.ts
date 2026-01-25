import { NatsResponse } from '../../common/nats-response.interface';

/**
 * =============================================================================
 * ADDITIONAL SERVICE BOOKINGS NATS CONTRACTS
 * Pattern: service-bookings.*
 * Handler: financial-service
 *
 * NOTE: These types are namespaced as "AdditionalServiceBooking*" to avoid conflicts
 * with other domains (crm.guest-services, booking.add-service)
 * =============================================================================
 */

// ============================================================================
// 1. CREATE SERVICE BOOKING
// ============================================================================
export interface CreateAdditionalServiceBookingNatsRequest {
  tenantId: string;
  hotelId: string;
  serviceId: string;
  customerId?: string;
  bookingId?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  requestedDate: string;
  serviceTime?: string;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface AdditionalServiceBookingData {
  id: string;
  tenantId: string;
  hotelId: string;
  serviceId: string;
  customerId?: string;
  bookingId?: string;
  roomNumber?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  requestedDate: string;
  completedDate?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateAdditionalServiceBookingNatsResponse = NatsResponse<AdditionalServiceBookingData>;

// ============================================================================
// 2. GET ALL SERVICE BOOKINGS
// ============================================================================
export interface GetAdditionalServiceBookingsNatsRequest {
  tenantId: string;
  hotelId?: string;
  serviceId?: string;
  customerId?: string;
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  serviceDateFrom?: string;
  serviceDateTo?: string;
  page?: number;
  limit?: number;
}

export interface GetAdditionalServiceBookingsData {
  bookings: AdditionalServiceBookingData[];
  total: number;
  page: number;
  limit: number;
}

export type GetAdditionalServiceBookingsNatsResponse = NatsResponse<GetAdditionalServiceBookingsData>;

// ============================================================================
// 3. GET SERVICE BOOKING BY ID
// ============================================================================
export interface GetAdditionalServiceBookingNatsRequest {
  id: string;
  tenantId: string;
  hotelId?: string;
}

export type GetAdditionalServiceBookingNatsResponse = NatsResponse<AdditionalServiceBookingData>;

// ============================================================================
// 4. UPDATE SERVICE BOOKING
// ============================================================================
export interface UpdateAdditionalServiceBookingNatsRequest {
  id: string;
  tenantId: string;
  hotelId?: string;
  quantity?: number;
  unitPrice?: number;
  totalPrice?: number;
  requestedDate?: string;
  serviceTime?: string;
  specialRequests?: string;
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export type UpdateAdditionalServiceBookingNatsResponse = NatsResponse<AdditionalServiceBookingData>;

// ============================================================================
// 5. DELETE SERVICE BOOKING
// ============================================================================
export interface DeleteAdditionalServiceBookingNatsRequest {
  id: string;
  tenantId: string;
  hotelId?: string;
}

export interface DeleteAdditionalServiceBookingData {
  success: boolean;
  message: string;
  bookingId?: string;
}

export type DeleteAdditionalServiceBookingNatsResponse = NatsResponse<DeleteAdditionalServiceBookingData>;

// ============================================================================
// 6. CANCEL SERVICE BOOKING
// ============================================================================
export interface CancelAdditionalServiceBookingNatsRequest {
  id: string;
  tenantId: string;
  hotelId?: string;
  reason?: string;
}

export type CancelAdditionalServiceBookingNatsResponse = NatsResponse<AdditionalServiceBookingData>;
