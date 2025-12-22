/**
 * Provider Credentials Type Definitions
 *
 * Handles credentials for different provider types
 * STAAH uses 'apikey' without underscore, others use 'api_key'
 */

/**
 * Base provider credentials (common to all providers)
 */
export interface BaseProviderCredentials {
  api_key?: string;
  apikey?: string; // STAAH specific - uses 'apikey' without underscore
  api_secret?: string;
  username?: string;
  password?: string;
  property_id?: string;
}

/**
 * STAAH-specific credentials
 */
export interface StaahCredentials extends BaseProviderCredentials {
  hotel_code?: string; // STAAH specific
  apikey?: string; // STAAH uses apikey without underscore
  service_endpoint?: string; // STAAH API endpoint for service operations
  booking_endpoint?: string; // STAAH API endpoint for booking operations
}

/**
 * OAuth provider credentials
 */
export interface OAuthCredentials extends BaseProviderCredentials {
  client_id?: string;
  access_token?: string;
  refresh_token?: string;
  expires_at?: string;
}

/**
 * Union type for all provider credentials
 */
export type ProviderCredentials = BaseProviderCredentials & StaahCredentials & OAuthCredentials & Record<string, any>;

/**
 * Credential validation result
 */
export interface CredentialValidationResult {
  isValid: boolean;
  message?: string;
  testedAt?: string;
  provider?: string;
}
