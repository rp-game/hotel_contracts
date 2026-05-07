/**
 * Provider Credentials Type Definitions
 */
export interface ProviderCredentials {
    api_key?: string;
    api_secret?: string;
    username?: string;
    password?: string;
    property_id?: string;
    extra?: Record<string, any>;
}
export interface CredentialValidationResult {
    isValid: boolean;
    message?: string;
    testedAt?: string;
    provider?: string;
}
//# sourceMappingURL=credentials.types.d.ts.map