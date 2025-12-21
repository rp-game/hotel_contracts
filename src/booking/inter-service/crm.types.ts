import { NatsResponse } from '../../common';

/**
 * CRM Service - Request/Response Types for Booking Service
 */

export interface UpdateGuestHistoryRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  guestId: string;
  action: GuestHistoryAction;
  data?: Record<string, any>;
}

export interface GuestHistoryResponse extends NatsResponse {
  data?: {
    historyId?: string;
  };
}

export interface GetGuestPreferencesRequest {
  tenantId: string;
  hotelId: string;
  guestId: string;
}

export interface GuestPreferencesResponse {
  guestId: string;
  preferences: {
    roomPreferences?: string[];
    dietaryRestrictions?: string[];
    specialRequests?: string[];
    amenities?: string[];
    otherPreferences?: Record<string, any>;
  };
  loyaltyInfo?: {
    loyaltyTier?: string;
    loyaltyPoints?: number;
    memberSince?: Date;
  };
  stayHistory?: {
    totalStays: number;
    lastStayDate?: Date;
    averageRating?: number;
    favoriteRoomTypes?: string[];
  };
}

export enum GuestHistoryAction {
  BOOKING_CREATED = 'booking_created',
  BOOKING_MODIFIED = 'booking_modified',
  BOOKING_CANCELLED = 'booking_cancelled',
  CHECKED_IN = 'checked_in',
  CHECKED_OUT = 'checked_out',
  FEEDBACK_SUBMITTED = 'feedback_submitted',
  SPECIAL_REQUEST = 'special_request',
  SERVICE_USED = 'service_used',
  COMPLAINT_FILED = 'complaint_filed',
  COMPLAINT_RESOLVED = 'complaint_resolved',
}

export interface FindCustomerByEmailRequest {
  tenantId: string;
  email: string;
}

export interface FindCustomerByPhoneRequest {
  tenantId: string;
  phone: string;
}

export interface CustomerResponse extends NatsResponse {
  data?: {
    id: string;
    email: string;
    phone: string;
    fullName: string;
    nationality?: string;
    nationalIdType?: string;
    nationalIdNumber?: string;
    dateOfBirth?: string;
    address?: any;
    loyaltyTier?: string;
    totalBookings?: number;
    lastBookingDate?: string;
  };
}

export interface CreateCustomerRequest {
  tenantId?: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  nationality?: string;
  nationalIdType?: string;
  nationalIdNumber?: string;
  dateOfBirth?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  communicationPreferences?: {
    emailMarketing?: boolean;
    smsMarketing?: boolean;
    preferredLanguage?: string;
  };
  gender?: string;
  languagePreferences?: string[];
  tags?: string[];
  notes?: string;
}

export interface UpdateCustomerStatsRequest {
  tenantId: string;
  customerId: string;
  bookingId: string;
  totalAmount: number;
  checkInDate: string;
  checkOutDate: string;
  roomType: string;
}

export interface FindLoyaltyByCustomerRequest {
  tenantId: string;
  customerId: string;
}

export interface LoyaltyResponse extends NatsResponse {
  data?: {
    customerId: string;
    loyaltyTier: string;
    loyaltyPoints: number;
    memberSince: string;
    benefits: string[];
  };
}
