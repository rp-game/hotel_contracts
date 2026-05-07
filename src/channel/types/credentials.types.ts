/**
 * Provider Credentials Type Definitions
 */

export interface ProviderCredentials {
  api_key?: string;
  api_secret?: string;
  username?: string;
  password?: string;
  property_id?: string;
  extra?: Record<string, any>; // provider-specific fields: client_id, client_secret, hotel_code, etc.
}

export interface CredentialValidationResult {
  isValid: boolean;
  message?: string;
  testedAt?: string;
  provider?: string;
}
