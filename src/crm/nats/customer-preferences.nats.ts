import { NatsResponse } from '../../common/nats-response.interface';

// ============================================================================
// ENUMS
// ============================================================================

export enum PreferenceTypeEnum {
  ROOM_TYPE = 'ROOM_TYPE',
  FLOOR_PREFERENCE = 'FLOOR_PREFERENCE',
  BED_TYPE = 'BED_TYPE',
  ROOM_TEMPERATURE = 'ROOM_TEMPERATURE',
  PILLOW_TYPE = 'PILLOW_TYPE',
  DIETARY_RESTRICTIONS = 'DIETARY_RESTRICTIONS',
  ACCESSIBILITY_NEEDS = 'ACCESSIBILITY_NEEDS',
  SPECIAL_OCCASIONS = 'SPECIAL_OCCASIONS',
  COMMUNICATION_METHOD = 'COMMUNICATION_METHOD',
  LANGUAGE = 'LANGUAGE',
  SERVICES = 'SERVICES',
  AMENITIES = 'AMENITIES',
}

export enum InteractionTypeEnum {
  ROOM_SERVICE = 'ROOM_SERVICE',
  COMPLAINT = 'COMPLAINT',
  COMPLIMENT = 'COMPLIMENT',
  FEEDBACK = 'FEEDBACK',
  SPECIAL_REQUEST = 'SPECIAL_REQUEST',
  MAINTENANCE = 'MAINTENANCE',
  HOUSEKEEPING = 'HOUSEKEEPING',
  BILLING = 'BILLING',
  CONCIERGE = 'CONCIERGE',
}

export enum InteractionChannelEnum {
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  CHAT = 'CHAT',
  IN_PERSON = 'IN_PERSON',
  SMS = 'SMS',
  MOBILE_APP = 'MOBILE_APP',
}

export enum InteractionStatusEnum {
  OPEN = 'OPEN',
  PENDING = 'PENDING',
  CLOSED = 'CLOSED',
  RESOLVED = 'RESOLVED',
  ON_HOLD = 'ON_HOLD',
  ESCALATED = 'ESCALATED',
}

export enum PreferenceSuggestionTypeEnum {
  AUTO_APPLY = 'AUTO_APPLY',
  MANUAL_REVIEW = 'MANUAL_REVIEW',
  NOTIFICATION_ONLY = 'NOTIFICATION_ONLY',
}

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

// ============================================================================
// PREFERENCE TYPES
// ============================================================================

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
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  createdBy?: string;
  updatedBy?: string;
}

// Handler 1: Find Preferences by Customer
export interface GetCustomerPreferencesNatsRequest {
  customerId: string;
  tenantId: string;
  hotelId?: string;
}

export type GetCustomerPreferencesNatsResponse = NatsResponse<CustomerPreferenceNatsData[]>;

// Handler 2: Find Preferences by Type
export interface GetCustomerPreferencesByTypeNatsRequest {
  customerId: string;
  tenantId: string;
  hotelId?: string;
  preferenceType: PreferenceTypeEnum | string;
}

export type GetCustomerPreferencesByTypeNatsResponse = NatsResponse<CustomerPreferenceNatsData[]>;

// Handler 3: Apply Preferences to Request
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

// Handler 4: Save Preferences
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

// ============================================================================
// INTERACTION TYPES
// ============================================================================

export interface CustomerInteractionNatsData {
  id: string;
  tenantId: string;
  hotelId: string;
  customerId: string;
  interactionType: InteractionTypeEnum | string;
  channel: InteractionChannelEnum | string;
  interactionDate: string; // ISO string
  subject: string;
  notes: string;
  staffId: string;
  staffName: string;
  satisfactionRating: number;
  followUpRequired: boolean;
  followUpDate: string | null; // ISO string or null
  resolutionStatus: InteractionStatusEnum | string;
  resolutionNotes: string;
  tags: string[];
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
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

// Handler 5: Get Customer Interactions
export interface GetCustomerInteractionsNatsRequest {
  tenantId: string;
  customerId: string;
  filters?: CustomerInteractionFiltersNatsRequest;
}

export interface CustomerPreferenceInteractionsListNatsResponse {
  data: CustomerInteractionNatsData[];
  total: number;
  page: number;
  limit: number;
}

export type GetCustomerInteractionsNatsResponse = NatsResponse<CustomerPreferenceInteractionsListNatsResponse>;
