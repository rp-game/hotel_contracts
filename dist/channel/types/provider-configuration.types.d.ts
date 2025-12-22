/**
 * Provider Configuration Type Definitions
 *
 * Matches the complex JSONB 'configuration' field from ChannelProvider entity
 * Has 11 nested sub-objects for various configuration aspects
 */
/**
 * Rate limits configuration
 */
export interface RateLimits {
    requests_per_minute: number;
    requests_per_hour: number;
}
/**
 * API endpoints configuration
 */
export interface Endpoints {
    base_url: string;
    auth_endpoint?: string;
    rates_endpoint?: string;
    availability_endpoint?: string;
    bookings_endpoint?: string;
    webhooks_endpoint?: string;
}
/**
 * Operational settings
 */
export interface OperationalSettings {
    sync_frequency: 'real-time' | 'hourly' | 'daily';
    auto_sync_enabled: boolean;
    rate_sync_enabled: boolean;
    availability_sync_enabled: boolean;
    booking_sync_enabled: boolean;
    webhook_enabled: boolean;
    timezone: string;
    currency: string;
    default_availability: number;
    rate_update_method: 'full' | 'delta';
    availability_update_method: 'full' | 'delta';
}
/**
 * OTA account configuration (for a single OTA)
 */
export interface OTAAccountConfig {
    username?: string;
    password?: string;
    api_key?: string;
    property_id?: string;
    hotel_id?: string;
    enabled: boolean;
    last_verified?: string;
}
/**
 * OTA accounts (for 9 different OTAs)
 */
export interface OTAAccounts {
    booking_com?: OTAAccountConfig;
    expedia?: OTAAccountConfig;
    agoda?: OTAAccountConfig;
    airbnb?: OTAAccountConfig;
    hotels_com?: OTAAccountConfig;
    priceline?: OTAAccountConfig;
    kayak?: OTAAccountConfig;
    trivago?: OTAAccountConfig;
    tripadvisor?: OTAAccountConfig;
    [key: string]: any;
}
/**
 * Chain inheritance configuration
 */
export interface ChainInheritanceConfig {
    inherit_from_chain: boolean;
    chain_id?: string;
    override_settings?: string[];
}
/**
 * Main provider configuration (JSONB structure)
 */
export interface ProviderConfiguration {
    api_url?: string;
    api_version?: string;
    auth_type?: string;
    rate_limits?: RateLimits;
    supported_features?: string[];
    endpoints?: Endpoints;
    settings?: OperationalSettings;
    ota_accounts?: OTAAccounts;
    chain_configuration?: ChainInheritanceConfig;
    [key: string]: any;
}
//# sourceMappingURL=provider-configuration.types.d.ts.map