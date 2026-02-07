import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';
import { PreferenceTypeEnum } from './customer-preferences.nats';

// ============================================================================
// GUEST PREFERENCES TYPES (Email-based customer preferences)
// ============================================================================

/**
 * Guest preferences data - shared between NATS and REST API
 * Used by:
 * - NATS pattern: crm.guest.preferences.find
 * - REST API: GET /crm/guest-preferences
 */
export class GuestPreferenceNatsData {
  /**
   * Guest email address
   */
  @ApiProperty({ description: 'Guest email address' })
  email: string;

  /**
   * Tenant ID (multi-tenant isolation)
   */
  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  tenantId: string;

  /**
   * Hotel ID (optional, property reference)
   */
  @ApiPropertyOptional({ description: 'Hotel ID (optional, property reference)' })
  hotelId?: string;

  /**
   * General preferences (flexible key-value)
   */
  @ApiPropertyOptional({ description: 'General preferences', type: 'object', additionalProperties: true })
  preferences?: Record<string, any>;

  /**
   * Room-specific preferences
   */
  @ApiPropertyOptional({ description: 'Room-specific preferences', type: 'object', additionalProperties: true })
  roomPreferences?: Record<string, any>;

  /**
   * Service preferences
   */
  @ApiPropertyOptional({ description: 'Service preferences', type: 'object', additionalProperties: true })
  servicePreferences?: Record<string, any>;

  /**
   * Dietary restrictions array
   */
  @ApiPropertyOptional({ description: 'Dietary restrictions', type: 'array', items: { type: 'string' } })
  dietaryRestrictions?: string[];

  /**
   * Special occasions
   */
  @ApiPropertyOptional({ description: 'Special occasions', type: 'array', items: { type: 'string' } })
  specialOccasions?: string[];

  /**
   * Communication preferences
   */
  @ApiPropertyOptional({ description: 'Communication preferences', type: 'object', additionalProperties: true })
  communicationPreferences?: Record<string, any>;

  /**
   * Accessibility requirements
   */
  @ApiPropertyOptional({ description: 'Accessibility requirements', type: 'array', items: { type: 'string' } })
  accessibilityRequirements?: string[];

  /**
   * Last update timestamp (ISO string)
   */
  @ApiProperty({ description: 'Last update timestamp (ISO string)' })
  updatedAt: string;
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
