import { NatsResponse } from '../../common/nats-response.interface';
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