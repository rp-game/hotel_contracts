/**
 * OTA Account Type Definitions
 *
 * Handles configuration for multiple OTA (Online Travel Agency) accounts
 */

/**
 * OTA Name Enum
 * Standard names for all supported OTA providers
 */
export enum OTAName {
  BOOKING_COM = 'booking_com',
  EXPEDIA = 'expedia',
  AGODA = 'agoda',
  AIRBNB = 'airbnb',
  HOTELS_COM = 'hotels_com',
  PRICELINE = 'priceline',
  KAYAK = 'kayak',
  TRIVAGO = 'trivago',
  TRIPADVISOR = 'tripadvisor'
}

/**
 * Generic OTA account configuration
 */
export interface BaseOTAConfig {
  enabled: boolean;
  last_verified?: string;
}

/**
 * Booking.com account configuration
 */
export interface BookingComConfig extends BaseOTAConfig {
  username?: string;
  password?: string;
  property_id?: string;
}

/**
 * Expedia account configuration
 */
export interface ExpediaConfig extends BaseOTAConfig {
  username?: string;
  password?: string;
  hotel_id?: string;
}

/**
 * Agoda account configuration
 */
export interface AgodaConfig extends BaseOTAConfig {
  api_key?: string;
  hotel_id?: string;
}

/**
 * Airbnb account configuration
 */
export interface AirbnbConfig extends BaseOTAConfig {
  api_key?: string;
  property_id?: string;
}

/**
 * Hotels.com account configuration
 */
export interface HotelsComConfig extends BaseOTAConfig {
  username?: string;
  password?: string;
  property_id?: string;
}

/**
 * Priceline account configuration
 */
export interface PricelineConfig extends BaseOTAConfig {
  api_key?: string;
  property_id?: string;
}

/**
 * Kayak account configuration
 */
export interface KayakConfig extends BaseOTAConfig {
  api_key?: string;
  property_id?: string;
}

/**
 * Trivago account configuration
 */
export interface TrivagoConfig extends BaseOTAConfig {
  api_key?: string;
  property_id?: string;
}

/**
 * TripAdvisor account configuration
 */
export interface TripAdvisorConfig extends BaseOTAConfig {
  api_key?: string;
  property_id?: string;
}

/**
 * All OTA accounts configuration
 */
export interface AllOTAAccounts {
  booking_com?: BookingComConfig;
  expedia?: ExpediaConfig;
  agoda?: AgodaConfig;
  airbnb?: AirbnbConfig;
  hotels_com?: HotelsComConfig;
  priceline?: PricelineConfig;
  kayak?: KayakConfig;
  trivago?: TrivagoConfig;
  tripadvisor?: TripAdvisorConfig;
}

/**
 * OTA account configuration request
 */
export interface ConfigureOTAAccountRequest {
  providerId: string;
  otaName: 'booking.com' | 'expedia' | 'agoda' | 'airbnb' | 'hotels.com' | 'priceline' | 'kayak' | 'trivago' | 'tripadvisor';
  configuration: BaseOTAConfig;
}

/**
 * OTA account test request
 */
export interface TestOTAAccountRequest {
  providerId: string;
  otaName: string;
}

/**
 * OTA account test response
 */
export interface TestOTAAccountResponse {
  otaName: string;
  isValid: boolean;
  message?: string;
  testedAt: string;
}

/**
 * OTA accounts list response
 */
export interface OTAAccountsListResponse {
  data: AllOTAAccounts;
  providerId: string;
  testedAt?: string;
}

/**
 * OTA Account Configuration DTO
 * Represents a single OTA account configuration
 * Returned by API Gateway endpoints
 */
export interface OTAAccountConfigurationDto {
  ota_name: string;
  provider_id: string;
  tenant_id: string;
  hotel_id: string;
  enabled: boolean;
  credentials: Record<string, any>;
  last_verified?: string;
  ota_config?: Record<string, any>;
}

/**
 * OTA Connection Test DTO
 * Results from OTA connection testing
 * Returned by API Gateway test endpoint
 */
export interface OTAConnectionTestDto {
  connected: boolean;
  last_verified?: string;
  error?: string;
  response_time?: number;
  test_details?: Record<string, any>;
}
