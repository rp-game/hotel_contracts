import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Guest preferences data - shared between NATS and REST API
 * Used by:
 * - NATS pattern: crm.guest.preferences.find
 * - REST API: GET /crm/guest-preferences
 */
export declare class GuestPreferenceNatsData {
    /**
     * Guest email address
     */
    email: string;
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID (optional, property reference)
     */
    hotelId?: string;
    /**
     * General preferences (flexible key-value)
     */
    preferences?: Record<string, any>;
    /**
     * Room-specific preferences
     */
    roomPreferences?: Record<string, any>;
    /**
     * Service preferences
     */
    servicePreferences?: Record<string, any>;
    /**
     * Dietary restrictions array
     */
    dietaryRestrictions?: string[];
    /**
     * Special occasions
     */
    specialOccasions?: string[];
    /**
     * Communication preferences
     */
    communicationPreferences?: Record<string, any>;
    /**
     * Accessibility requirements
     */
    accessibilityRequirements?: string[];
    /**
     * Last update timestamp (ISO string)
     */
    updatedAt: string;
}
export interface FindGuestPreferencesNatsRequest {
    tenantId: string;
    email: string;
    hotelId?: string;
}
export type FindGuestPreferencesNatsResponse = NatsResponse<GuestPreferenceNatsData>;
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
//# sourceMappingURL=guest-preferences.nats.d.ts.map