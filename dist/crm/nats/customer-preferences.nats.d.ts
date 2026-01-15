import { NatsResponse } from '../../common/nats-response.interface';
export declare enum PreferenceTypeEnum {
    ROOM_TYPE = "ROOM_TYPE",
    FLOOR_PREFERENCE = "FLOOR_PREFERENCE",
    BED_TYPE = "BED_TYPE",
    ROOM_TEMPERATURE = "ROOM_TEMPERATURE",
    PILLOW_TYPE = "PILLOW_TYPE",
    DIETARY_RESTRICTIONS = "DIETARY_RESTRICTIONS",
    ACCESSIBILITY_NEEDS = "ACCESSIBILITY_NEEDS",
    SPECIAL_OCCASIONS = "SPECIAL_OCCASIONS",
    COMMUNICATION_METHOD = "COMMUNICATION_METHOD",
    LANGUAGE = "LANGUAGE",
    SERVICES = "SERVICES",
    AMENITIES = "AMENITIES"
}
export declare enum InteractionTypeEnum {
    ROOM_SERVICE = "ROOM_SERVICE",
    COMPLAINT = "COMPLAINT",
    COMPLIMENT = "COMPLIMENT",
    FEEDBACK = "FEEDBACK",
    SPECIAL_REQUEST = "SPECIAL_REQUEST",
    MAINTENANCE = "MAINTENANCE",
    HOUSEKEEPING = "HOUSEKEEPING",
    BILLING = "BILLING",
    CONCIERGE = "CONCIERGE"
}
export declare enum InteractionChannelEnum {
    PHONE = "PHONE",
    EMAIL = "EMAIL",
    CHAT = "CHAT",
    IN_PERSON = "IN_PERSON",
    SMS = "SMS",
    MOBILE_APP = "MOBILE_APP"
}
export declare enum InteractionStatusEnum {
    OPEN = "OPEN",
    PENDING = "PENDING",
    CLOSED = "CLOSED",
    RESOLVED = "RESOLVED",
    ON_HOLD = "ON_HOLD",
    ESCALATED = "ESCALATED"
}
export declare enum PreferenceSuggestionTypeEnum {
    AUTO_APPLY = "AUTO_APPLY",
    MANUAL_REVIEW = "MANUAL_REVIEW",
    NOTIFICATION_ONLY = "NOTIFICATION_ONLY"
}
export declare enum SortOrderEnum {
    ASC = "ASC",
    DESC = "DESC"
}
export interface CustomerPreferenceNatsData {
    id: string;
    tenantId: string;
    hotelId: string;
    customerId: string;
    preferenceType: PreferenceTypeEnum | string;
    preferenceValue: string;
    preferenceDescription?: string;
    isActive: boolean;
    priority: number;
    source?: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
    updatedBy?: string;
}
export interface GetCustomerPreferencesNatsRequest {
    customerId: string;
    tenantId: string;
    hotelId?: string;
}
export type GetCustomerPreferencesNatsResponse = NatsResponse<CustomerPreferenceNatsData[]>;
export interface GetCustomerPreferencesByTypeNatsRequest {
    customerId: string;
    tenantId: string;
    hotelId?: string;
    preferenceType: PreferenceTypeEnum | string;
}
export type GetCustomerPreferencesByTypeNatsResponse = NatsResponse<CustomerPreferenceNatsData[]>;
export interface PreferenceSuggestionNatsData {
    type: PreferenceSuggestionTypeEnum | string;
    description: string;
    preferenceId: string;
    preferenceType: PreferenceTypeEnum | string;
    priority: number;
    autoApplyable: boolean;
}
export interface ApplyPreferencesNatsResponse {
    applicablePreferences: CustomerPreferenceNatsData[];
    suggestions: PreferenceSuggestionNatsData[];
}
export interface ApplyPreferencesToRequestNatsRequest {
    customerId: string;
    tenantId: string;
    hotelId?: string;
    requestCategory: string;
}
export type ApplyPreferencesToRequestNatsResponse = NatsResponse<ApplyPreferencesNatsResponse>;
export interface SaveCustomerPreferenceNatsRequest {
    tenantId: string;
    hotelId: string;
    customerId: string;
    preferenceType: PreferenceTypeEnum | string;
    preferenceValue: string;
    preferenceDescription?: string;
    priority?: number;
    isActive?: boolean;
    source?: string;
    createdBy?: string;
}
export type SaveCustomerPreferenceNatsResponse = NatsResponse<CustomerPreferenceNatsData>;
export interface CustomerInteractionNatsData {
    id: string;
    tenantId: string;
    hotelId: string;
    customerId: string;
    interactionType: InteractionTypeEnum | string;
    channel: InteractionChannelEnum | string;
    interactionDate: string;
    subject: string;
    notes: string;
    staffId: string;
    staffName: string;
    satisfactionRating: number;
    followUpRequired: boolean;
    followUpDate: string | null;
    resolutionStatus: InteractionStatusEnum | string;
    resolutionNotes: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}
export interface CustomerInteractionFiltersNatsRequest {
    type?: InteractionTypeEnum | string;
    status?: InteractionStatusEnum | string;
    priority?: string;
    assignedTo?: string;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: SortOrderEnum | string;
}
export interface GetCustomerInteractionsNatsRequest {
    tenantId: string;
    customerId: string;
    filters?: CustomerInteractionFiltersNatsRequest;
}
export interface CustomerInteractionsListNatsResponse {
    data: CustomerInteractionNatsData[];
    total: number;
    page: number;
    limit: number;
}
export type GetCustomerInteractionsNatsResponse = NatsResponse<CustomerInteractionsListNatsResponse>;
//# sourceMappingURL=customer-preferences.nats.d.ts.map