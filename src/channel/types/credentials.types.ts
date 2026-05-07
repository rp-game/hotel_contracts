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
  api_secret?: string;
  username?: string;
  password?: string;
  property_id?: string;
}

/**
 * STAAH-specific credentials
 * All API calls go through SP Connection API (connect[-sandbox].su-api.com).
 * Endpoint is derived from isSandbox flag — not stored in credentials.
 */
export interface StaahCredentials extends BaseProviderCredentials {
  hotel_code?: string;
  client_id?: string;   // SP Connection client ID
  client_secret?: string; // SP Connection client secret
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
