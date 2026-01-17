import { NatsResponse } from '../../common/nats-response.interface';
import { PreferenceTypeEnum } from './customer-preferences.nats';

// ============================================================================
// GUEST PREFERENCES TYPES (Email-based customer preferences)
// ============================================================================

export interface GuestPreferenceNatsData {
  email: string;
  tenantId: string;
  hotelId?: string;
  preferences?: Record<string, any>;
  roomPreferences?: Record<string, any>;
  servicePreferences?: Record<string, any>;
  dietaryRestrictions?: string[];
  specialOccasions?: string[];
  communicationPreferences?: Record<string, any>;
  accessibilityRequirements?: string[];
  updatedAt: string; // ISO string
}

// Handler 1: Find Guest Preferences by Email
export interface FindGuestPreferencesNatsRequest {
  tenantId: string;
  email: string;
  hotelId?: string;
}

export type FindGuestPreferencesNatsResponse = NatsResponse<GuestPreferenceNatsData>;

// Handler 2: Save/Update Guest Preferences
export interface SaveGuestPreferencesNatsRequest {
  tenantId: string;
  email: string;
  hotelId?: string;
  preferences?: Record<string, any>;
  roomPreferences?: Record<string, any>;
  servicePreferences?: Record<string, any>;
  dietaryRestrictions?: string[];
  specialOccasions?: string[];
  communicationPreferences?: Record<string, any>;
  accessibilityRequirements?: string[];
}

export type SaveGuestPreferencesNatsResponse = NatsResponse<GuestPreferenceNatsData>;
