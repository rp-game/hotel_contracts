/**
 * Payment Gateway Inheritance NATS Contracts
 *
 * NATS Patterns:
 * - gateway.findPlatform       (PLATFORM-level query)
 * - gateway.findChain          (CHAIN-level query)
 * - gateway.findHotel          (HOTEL-level query with inheritance resolution)
 * - gateway.update             (Update with level support and auto-sync)
 * - gateway.syncChainToHotels  (Sync chain config to hotel configs)
 * - gateway.applyChainToHotel  (Apply chain config to specific hotel)
 *
 * Handler: payment-service
 * Called by: api-gateway, backoffice
 *
 * Related to implementation of 3-level gateway inheritance:
 * PLATFORM → CHAIN → HOTEL
 */

import { NatsResponse } from '../../common/nats-response.interface';

// ============ ENUMS ============

/**
 * Configuration level hierarchy for payment gateways
 */
export enum ConfigLevel {
  PLATFORM = 'PLATFORM',
  CHAIN = 'CHAIN',
  HOTEL = 'HOTEL',
}

/**
 * Payment gateway types
 */
export enum GatewayType {
  ONEPAY = 'ONEPAY',
  VNPAY = 'VNPAY',
  STRIPE = 'STRIPE',
  MOMO = 'MOMO',
  PAYPAL = 'PAYPAL',
}

/**
 * Gateway sync result status for individual hotel
 */
export enum GatewaySyncStatus {
  SUCCESS = 'SUCCESS',
  SKIPPED = 'SKIPPED',
  FAILED = 'FAILED',
}

// ============ INHERITANCE METADATA ============

/**
 * Inheritance configuration metadata stored in PaymentSetting.configuration
 */
export interface InheritanceConfig {
  /**
   * Whether to inherit from chain-level config
   * @default true
   */
  inherit_from_chain?: boolean;

  /**
   * Whether to inherit from platform-level config
   * @default true
   */
  inherit_from_platform?: boolean;

  /**
   * The chain ID this config inherits from
   */
  chain_id?: string;

  /**
   * The platform ID this config inherits from
   */
  platform_id?: string;

  /**
   * Fields that this level has explicitly overridden
   * Examples: ['merchantId', 'configuration.returnUrl', 'isActive']
   */
  override_settings?: string[];

  /**
   * When this config was last synced from parent
   */
  last_synced_at?: string;

  /**
   * Version of sync to support rollback/versioning
   */
  sync_version?: number;
}

/**
 * Metadata about resolved gateway configuration
 */
export interface ResolvedConfigMetadata {
  /**
   * The inheritance chain that was followed to resolve config
   * Examples: ['PLATFORM'], ['PLATFORM', 'CHAIN(inherited)'], ['PLATFORM', 'CHAIN(inherited)', 'HOTEL(inherited)']
   */
  inheritanceChain: string[];

  /**
   * The level at which this config is actually defined
   */
  configLevel: ConfigLevel | string;

  /**
   * Whether this config is inherited from a parent level
   */
  isInherited: boolean;

  /**
   * Whether this level can be overridden by child levels
   */
  canOverride: boolean;

  /**
   * Fields that have been explicitly overridden at this level
   */
  overriddenFields: string[];

  /**
   * ISO timestamp when config was resolved
   */
  resolvedAt: string;
}

/**
 * Gateway configuration response data
 */
export interface GatewayConfigData {
  /**
   * Payment setting ID
   */
  id: string;

  /**
   * Gateway type (ONEPAY, VNPAY, STRIPE, MOMO, PAYPAL)
   */
  gatewayType: string;

  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID (null for platform/chain-level)
   */
  hotelId?: string;

  /**
   * Chain ID (null for hotel/platform-level)
   */
  chainId?: string;

  /**
   * Platform ID (null for hotel/chain-level)
   */
  platformId?: string;

  /**
   * Merchant ID for this gateway
   */
  merchantId?: string;

  /**
   * API key for this gateway
   */
  apiKey?: string;

  /**
   * Secret key for this gateway
   */
  secretKey?: string;

  /**
   * Webhook URL for payment notifications
   */
  webhookUrl?: string;

  /**
   * Default currency (VND, USD, EUR, etc.)
   */
  currency: string;

  /**
   * Supported payment methods
   */
  paymentMethods: string[];

  /**
   * Whether this gateway is active
   */
  isActive: boolean;

  /**
   * Gateway-specific configuration
   * Includes environment, currencies, OnePay-specific fields, etc.
   */
  configuration?: {
    /**
     * Execution environment (SANDBOX, PRODUCTION)
     */
    environment?: string;

    /**
     * Supported currencies
     */
    currencies?: string[];

    /**
     * OnePay-specific: access code
     */
    accessCode?: string;

    /**
     * OnePay-specific: payment URL
     */
    url?: string;

    /**
     * OnePay-specific: return URL after payment
     */
    returnUrl?: string;

    /**
     * OnePay-specific: query URL for transaction status
     */
    queryUrl?: string;

    /**
     * OnePay-specific: refund URL
     */
    refundUrl?: string;

    /**
     * OnePay-specific: API version
     */
    version?: string;

    /**
     * OnePay-specific: locale
     */
    locale?: string;

    /**
     * Fee configuration
     */
    feePercentage?: number;
    fixedAmount?: string;
    minimumFee?: string;
    maximumFee?: string;

    /**
     * Last tested timestamp
     */
    lastTestedAt?: string;

    /**
     * Last updated timestamp
     */
    lastUpdatedAt?: string;

    /**
     * Inheritance configuration
     */
    inheritance?: InheritanceConfig;

    /**
     * Allow other gateway-specific fields
     */
    [key: string]: any;
  };

  /**
   * Record creation timestamp
   */
  createdAt?: string;

  /**
   * Record last update timestamp
   */
  updatedAt?: string;
}

/**
 * Gateway statistics for dashboard display
 */
export interface GatewayStatistics {
  /**
   * Total number of transactions
   */
  totalTransactions: number;

  /**
   * Number of successful transactions
   */
  successfulTransactions: number;

  /**
   * Success rate percentage (0-100)
   */
  successRate: number;

  /**
   * Total transaction volume
   */
  totalVolume: string;

  /**
   * Monthly transaction volume
   */
  monthlyVolume: string;
}

/**
 * Resolved gateway configuration with inheritance metadata
 */
export interface ResolvedGatewayConfigData extends GatewayConfigData {
  /**
   * Metadata about how this config was resolved through inheritance
   */
  _metadata?: ResolvedConfigMetadata;

  /**
   * Gateway statistics for display
   */
  statistics?: GatewayStatistics;
}

// ============ FIND PLATFORM (gateway.findPlatform) ============

/**
 * NATS request to find platform-level gateway configurations
 *
 * @example
 * ```typescript
 * const request: FindPlatformGatewaysRequest = {
 *   platformId: 'default-platform',
 *   gatewayType: 'ONEPAY'
 * };
 * ```
 */
export interface FindPlatformGatewaysRequest {
  /**
   * Platform ID to query
   * Usually 'default-platform' for default platform configurations
   */
  platformId: string;

  /**
   * Optional: Filter by specific gateway type
   * If not provided, returns all platform gateways
   */
  gatewayType?: GatewayType | string;
}

/**
 * NATS response for find platform gateways
 */
export interface FindPlatformGatewaysResponse {
  /**
   * Array of platform-level gateway configurations
   */
  data: GatewayConfigData[];

  /**
   * Total number of platform gateways
   */
  total: number;
}

/**
 * Full NATS response type for find platform gateways
 */
export type FindPlatformGatewaysNatsResponse = NatsResponse<FindPlatformGatewaysResponse>;

// ============ FIND CHAIN (gateway.findChain) ============

/**
 * NATS request to find chain-level gateway configurations
 *
 * @example
 * ```typescript
 * const request: FindChainGatewaysRequest = {
 *   chainId: 'chain-123',
 *   tenantId: 'tenant-456',
 *   gatewayType: 'ONEPAY'
 * };
 * ```
 */
export interface FindChainGatewaysRequest {
  /**
   * Chain ID to query
   */
  chainId: string;

  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Optional: Filter by specific gateway type
   * If not provided, returns all chain gateways
   */
  gatewayType?: GatewayType | string;
}

/**
 * NATS response for find chain gateways
 */
export interface FindChainGatewaysResponse {
  /**
   * Array of chain-level gateway configurations
   */
  data: GatewayConfigData[];

  /**
   * Total number of chain gateways
   */
  total: number;
}

/**
 * Full NATS response type for find chain gateways
 */
export type FindChainGatewaysNatsResponse = NatsResponse<FindChainGatewaysResponse>;

// ============ FIND HOTEL (gateway.findHotel) ============

/**
 * NATS request to find hotel-level gateway configurations
 *
 * With inheritance resolution option:
 * @example
 * ```typescript
 * // Get only hotel-level configs
 * const request1: FindHotelGatewaysRequest = {
 *   tenantId: 'tenant-123',
 *   hotelId: 'hotel-456',
 *   resolveInheritance: false
 * };
 *
 * // Get resolved config with inheritance chain
 * const request2: FindHotelGatewaysRequest = {
 *   tenantId: 'tenant-123',
 *   hotelId: 'hotel-456',
 *   chainId: 'chain-789',
 *   gatewayType: 'ONEPAY',
 *   resolveInheritance: true
 * };
 * ```
 */
export interface FindHotelGatewaysRequest {
  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID to query
   */
  hotelId: string;

  /**
   * Chain ID (required if resolveInheritance is true)
   * Used to resolve config through inheritance chain
   */
  chainId?: string;

  /**
   * Optional: Filter by specific gateway type
   */
  gatewayType?: GatewayType | string;

  /**
   * Whether to resolve inherited values from chain/platform
   * If true: returns merged config with inheritance chain info
   * If false: returns only hotel-level overrides
   * @default false
   */
  resolveInheritance?: boolean;
}

/**
 * NATS response for find hotel gateways
 */
export interface FindHotelGatewaysResponse {
  /**
   * Array of hotel-level gateway configurations
   * If resolveInheritance was true, includes _metadata field
   */
  data: ResolvedGatewayConfigData[];

  /**
   * Total number of hotel gateways
   */
  total: number;
}

/**
 * Full NATS response type for find hotel gateways
 */
export type FindHotelGatewaysNatsResponse = NatsResponse<FindHotelGatewaysResponse>;

// ============ LEGACY UPDATE GATEWAY (gateway.update) ============

/**
 * Legacy NATS request to update gateway configuration
 * Used by legacy gateway.update endpoint (without inheritance support)
 *
 * Credentials are sent at ROOT LEVEL (not nested in configuration):
 * - merchantId, apiKey, secretKey come from database columns
 * - configuration contains gateway-specific settings (environment, URLs, etc)
 *
 * @deprecated Use UpdateGatewayRequest for inheritance-aware updates via gateway.updateByLevel
 */
export interface UpdateGatewayPayload {
  /**
   * Payment setting ID to update
   */
  id: string;

  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID (optional)
   */
  hotelId?: string;

  /**
   * Chain ID (optional)
   */
  chainId?: string;

  /**
   * Active/enabled status
   */
  isEnabled?: boolean;

  /**
   * Merchant ID (ROOT LEVEL - database column, not configuration)
   */
  merchantId?: string;

  /**
   * API Key (ROOT LEVEL - database column, not configuration)
   */
  apiKey?: string;

  /**
   * Secret Key (ROOT LEVEL - database column, not configuration)
   */
  secretKey?: string;

  /**
   * Gateway-specific configuration (OnePay URLs, environment, etc)
   */
  configuration?: {
    webhook?: string;
    environment?: string;
    currencies?: string[];
    supportedMethods?: string[];
    [key: string]: any;
  };

  /**
   * Fee configuration
   */
  fees?: {
    percentage?: number;
    fixedAmount?: string;
    minimumFee?: string;
    maximumFee?: string;
  };
}

/**
 * Full NATS response type for legacy update gateway
 */
export type UpdateGatewayLegacyNatsResponse = NatsResponse<object>;

// ============ UPDATE GATEWAY WITH INHERITANCE (gateway.updateByLevel) ============

/**
 * NATS request to update gateway configuration at any level
 *
 * Supports updating at PLATFORM, CHAIN, or HOTEL levels.
 * When updating CHAIN level, optionally triggers auto-sync to hotels.
 *
 * @example
 * ```typescript
 * // Update hotel-level config
 * const hotelUpdate: UpdateGatewayRequest = {
 *   id: 'setting-123',
 *   tenantId: 'tenant-456',
 *   level: 'HOTEL',
 *   hotelId: 'hotel-789',
 *   configuration: {
 *     returnUrl: 'https://hotel.example.com/return'
 *   }
 * };
 *
 * // Update chain-level config with auto-sync to hotels
 * const chainUpdate: UpdateGatewayRequest = {
 *   id: 'setting-456',
 *   chainId: 'chain-123',
 *   tenantId: 'tenant-456',
 *   level: 'CHAIN',
 *   merchantId: 'new-merchant-id',
 *   autoSync: true
 * };
 * ```
 */
export interface UpdateGatewayRequest {
  /**
   * Payment setting ID to update
   */
  id: string;

  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Configuration level being updated
   * @default 'HOTEL'
   */
  level?: ConfigLevel | string;

  /**
   * Hotel ID (required if level is HOTEL)
   */
  hotelId?: string;

  /**
   * Chain ID (required if level is CHAIN)
   */
  chainId?: string;

  /**
   * Platform ID (required if level is PLATFORM)
   */
  platformId?: string;

  /**
   * Merchant ID for payment gateway
   */
  merchantId?: string;

  /**
   * API key for payment gateway
   */
  apiKey?: string;

  /**
   * Secret key for payment gateway
   */
  secretKey?: string;

  /**
   * Webhook URL
   */
  webhookUrl?: string;

  /**
   * Currency code
   */
  currency?: string;

  /**
   * Supported payment methods
   */
  paymentMethods?: string[];

  /**
   * Active status
   */
  isActive?: boolean;

  /**
   * Gateway-specific configuration updates
   */
  configuration?: {
    environment?: string;
    currencies?: string[];
    accessCode?: string;
    url?: string;
    returnUrl?: string;
    queryUrl?: string;
    refundUrl?: string;
    version?: string;
    locale?: string;
    feePercentage?: number;
    fixedAmount?: string;
    minimumFee?: string;
    maximumFee?: string;
    [key: string]: any;
  };

  /**
   * Fields to override (used at HOTEL level to mark what was explicitly set)
   * Examples: ['merchantId', 'configuration.returnUrl']
   */
  overrideFields?: string[];

  /**
   * Whether to trigger auto-sync to child levels
   * Only applicable when level is CHAIN or PLATFORM
   * @default false
   */
  autoSync?: boolean;

  /**
   * Optional sync options (only used if autoSync is true)
   */
  syncOptions?: {
    /**
     * Force sync even if fields are overridden
     * @default false
     */
    forceSync?: boolean;

    /**
     * Specific fields to sync (if not specified, syncs default fields)
     */
    syncFields?: string[];

    /**
     * Perform dry run without actual updates
     * @default false
     */
    dryRun?: boolean;
  };
}

/**
 * Full NATS response type for update gateway
 */
export type UpdateGatewayNatsResponse = NatsResponse<GatewayConfigData>;

// ============ SYNC CHAIN TO HOTELS (gateway.syncChainToHotels) ============

/**
 * Details of sync result for a single hotel
 */
export interface SyncResultDetail {
  /**
   * Hotel ID that was synced
   */
  hotelId: string;

  /**
   * Gateway type that was synced
   */
  gatewayType: string;

  /**
   * Result status
   */
  status: GatewaySyncStatus | string;

  /**
   * Reason for skip or failure
   * Example: 'Hotel has disabled inheritance', 'All fields are overridden'
   */
  reason?: string;

  /**
   * Fields that were synced (if successful)
   */
  syncedFields?: string[];

  /**
   * Error message (if failed)
   */
  error?: string;
}

/**
 * NATS request to sync chain-level config to all hotel configs
 *
 * @example
 * ```typescript
 * const request: SyncChainToHotelsRequest = {
 *   chainId: 'chain-123',
 *   tenantId: 'tenant-456',
 *   gatewayType: 'ONEPAY',
 *   options: {
 *     forceSync: false,
 *     dryRun: false
 *   }
 * };
 * ```
 */
export interface SyncChainToHotelsRequest {
  /**
   * Chain ID whose config to sync
   */
  chainId: string;

  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Optional: Sync only specific gateway type
   * If not provided, syncs all gateway types for the chain
   */
  gatewayType?: GatewayType | string;

  /**
   * Sync operation options
   */
  options?: {
    /**
     * Force sync even if hotels have disabled inheritance
     * @default false
     */
    forceSync?: boolean;

    /**
     * Specific fields to sync (if not specified, syncs default fields)
     */
    syncFields?: string[];

    /**
     * Perform dry run without actual updates
     * @default false
     */
    dryRun?: boolean;
  };
}

/**
 * NATS response for sync chain to hotels
 */
export interface SyncChainToHotelsResponse {
  /**
   * Chain ID that was synced
   */
  chainId: string;

  /**
   * Tenant ID
   */
  tenantId: string;

  /**
   * Total hotels processed
   */
  totalHotels: number;

  /**
   * Number of successful syncs
   */
  successful: number;

  /**
   * Number of skipped syncs
   */
  skipped: number;

  /**
   * Number of failed syncs
   */
  failed: number;

  /**
   * Details for each hotel sync
   */
  details: SyncResultDetail[];
}

/**
 * Full NATS response type for sync chain to hotels
 */
export type SyncChainToHotelsNatsResponse = NatsResponse<SyncChainToHotelsResponse>;

// ============ APPLY CHAIN TO HOTEL (gateway.applyChainToHotel) ============

/**
 * NATS request to apply chain-level gateway config to a specific hotel
 *
 * Creates or updates hotel config based on chain config
 *
 * @example
 * ```typescript
 * const request: ApplyChainToHotelGatewayRequest = {
 *   chainId: 'chain-123',
 *   tenantId: 'tenant-456',
 *   hotelId: 'hotel-789',
 *   gatewayType: 'ONEPAY'
 * };
 * ```
 */
export interface ApplyChainToHotelGatewayRequest {
  /**
   * Chain ID whose config to apply
   */
  chainId: string;

  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID to apply chain config to
   */
  hotelId: string;

  /**
   * Gateway type to apply
   */
  gatewayType: GatewayType | string;
}

/**
 * Full NATS response type for apply chain to hotel
 */
export type ApplyChainToHotelGatewayNatsResponse = NatsResponse<GatewayConfigData>;

// ============ BULK UPDATE GATEWAYS (gateway.bulk-update) ============

/**
 * Update fields for bulk gateway update operation
 */
export interface BulkGatewayUpdateFields {
  /**
   * Enable or disable gateways
   */
  isActive?: boolean;

  /**
   * Merchant ID for the gateway
   */
  merchantId?: string;

  /**
   * API key for gateway authentication
   */
  apiKey?: string;

  /**
   * Secret key for gateway authentication
   */
  secretKey?: string;

  /**
   * Webhook URL for callbacks
   */
  webhookUrl?: string;

  /**
   * Currency code(s) supported
   */
  currency?: string;

  /**
   * Payment methods supported by this gateway
   */
  paymentMethods?: string[];

  /**
   * Gateway-specific configuration
   */
  configuration?: Record<string, any>;
}

/**
 * NATS request to bulk update payment gateways
 *
 * Updates multiple gateway configurations at once
 *
 * @example
 * ```typescript
 * const request: BulkUpdatePaymentGatewayNatsRequest = {
 *   tenantId: 'tenant-123',
 *   hotelId: 'hotel-456',
 *   gatewayIds: ['gateway-1', 'gateway-2', 'gateway-3'],
 *   updates: {
 *     isActive: true,
 *     merchantId: 'new-merchant-id'
 *   }
 * };
 * ```
 */
export interface BulkUpdatePaymentGatewayNatsRequest {
  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID (optional - affects which gateways are updated)
   */
  hotelId?: string;

  /**
   * Array of gateway IDs to update
   */
  gatewayIds: string[];

  /**
   * Fields to update on each gateway
   */
  updates: BulkGatewayUpdateFields;
}

/**
 * Result for a single gateway in bulk update
 */
export interface BulkUpdateGatewayResult {
  /**
   * Gateway ID that was processed
   */
  gatewayId: string;

  /**
   * Whether the update succeeded for this gateway
   */
  success: boolean;

  /**
   * Error message if update failed
   */
  error?: string;

  /**
   * Error code if update failed
   */
  errorCode?: string;
}

/**
 * Response data for bulk update operation
 */
export interface BulkUpdateGatewayResponseData {
  /**
   * Number of gateways successfully updated
   */
  updatedCount: number;

  /**
   * Number of gateways that were skipped or failed
   */
  skippedCount: number;

  /**
   * Detailed results for gateways that failed
   */
  errors: BulkUpdateGatewayResult[];
}

/**
 * Full NATS response type for bulk update gateways
 */
export type BulkUpdatePaymentGatewayNatsResponse = NatsResponse<BulkUpdateGatewayResponseData>;
