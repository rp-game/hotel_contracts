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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
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
export class InheritanceConfig {
  @ApiPropertyOptional({ description: 'Whether to inherit from chain-level config', default: true })
  inherit_from_chain?: boolean;

  @ApiPropertyOptional({ description: 'Whether to inherit from platform-level config', default: true })
  inherit_from_platform?: boolean;

  @ApiPropertyOptional({ description: 'The chain ID this config inherits from' })
  chain_id?: string;

  @ApiPropertyOptional({ description: 'The platform ID this config inherits from' })
  platform_id?: string;

  @ApiPropertyOptional({ description: 'Fields that this level has explicitly overridden', type: [String] })
  override_settings?: string[];

  @ApiPropertyOptional({ description: 'When this config was last synced from parent' })
  last_synced_at?: string;

  @ApiPropertyOptional({ description: 'Version of sync to support rollback/versioning' })
  sync_version?: number;
}

/**
 * Metadata about resolved gateway configuration
 */
export class ResolvedConfigMetadata {
  @ApiProperty({ description: 'The inheritance chain that was followed to resolve config', type: [String] })
  inheritanceChain: string[];

  @ApiProperty({ description: 'The level at which this config is actually defined' })
  configLevel: ConfigLevel | string;

  @ApiProperty({ description: 'Whether this config is inherited from a parent level' })
  isInherited: boolean;

  @ApiProperty({ description: 'Whether this level can be overridden by child levels' })
  canOverride: boolean;

  @ApiProperty({ description: 'Fields that have been explicitly overridden at this level', type: [String] })
  overriddenFields: string[];

  @ApiProperty({ description: 'ISO timestamp when config was resolved' })
  resolvedAt: string;
}

/**
 * Gateway configuration nested object
 */
export class GatewayConfiguration {
  @ApiPropertyOptional({ description: 'Execution environment (SANDBOX, PRODUCTION)' })
  environment?: string;

  @ApiPropertyOptional({ description: 'Supported currencies', type: [String] })
  currencies?: string[];

  @ApiPropertyOptional({ description: 'OnePay-specific: access code' })
  accessCode?: string;

  @ApiPropertyOptional({ description: 'OnePay-specific: payment URL' })
  url?: string;

  @ApiPropertyOptional({ description: 'OnePay-specific: return URL after payment' })
  returnUrl?: string;

  @ApiPropertyOptional({ description: 'OnePay-specific: query URL for transaction status' })
  queryUrl?: string;

  @ApiPropertyOptional({ description: 'OnePay-specific: refund URL' })
  refundUrl?: string;

  @ApiPropertyOptional({ description: 'OnePay-specific: API version' })
  version?: string;

  @ApiPropertyOptional({ description: 'OnePay-specific: locale' })
  locale?: string;

  @ApiPropertyOptional({ description: 'Fee percentage' })
  feePercentage?: number;

  @ApiPropertyOptional({ description: 'Fixed amount fee' })
  fixedAmount?: string;

  @ApiPropertyOptional({ description: 'Minimum fee' })
  minimumFee?: string;

  @ApiPropertyOptional({ description: 'Maximum fee' })
  maximumFee?: string;

  @ApiPropertyOptional({ description: 'Last tested timestamp (ISO 8601)' })
  lastTestedAt?: string;

  @ApiPropertyOptional({ description: 'Last updated timestamp (ISO 8601)' })
  lastUpdatedAt?: string;

  @ApiPropertyOptional({ description: 'Inheritance configuration', type: () => InheritanceConfig })
  @ValidateNested()
  @Type(() => InheritanceConfig)
  inheritance?: InheritanceConfig;

  [key: string]: any;
}

/**
 * Gateway configuration response data
 */
export class GatewayConfigData {
  @ApiProperty({ description: 'Payment setting ID' })
  id: string;

  @ApiProperty({ description: 'Gateway type (ONEPAY, VNPAY, STRIPE, MOMO, PAYPAL)' })
  gatewayType: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID (null for platform/chain-level)' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Chain ID (null for hotel/platform-level)' })
  chainId?: string;

  @ApiPropertyOptional({ description: 'Platform ID (null for hotel/chain-level)' })
  platformId?: string;

  @ApiPropertyOptional({ description: 'Merchant ID for this gateway' })
  merchantId?: string;

  @ApiPropertyOptional({ description: 'API key for this gateway' })
  apiKey?: string;

  @ApiPropertyOptional({ description: 'Secret key for this gateway' })
  secretKey?: string;

  @ApiPropertyOptional({ description: 'Webhook URL for payment notifications' })
  webhookUrl?: string;

  @ApiProperty({ description: 'Default currency (VND, USD, EUR, etc.)' })
  currency: string;

  @ApiProperty({ description: 'Supported payment methods', type: [String] })
  paymentMethods: string[];

  @ApiProperty({ description: 'Whether this gateway is active' })
  isActive: boolean;

  @ApiPropertyOptional({ description: 'Gateway-specific configuration', type: () => GatewayConfiguration })
  @ValidateNested()
  @Type(() => GatewayConfiguration)
  configuration?: GatewayConfiguration;

  @ApiPropertyOptional({ description: 'Record creation timestamp (ISO 8601)' })
  createdAt?: string;

  @ApiPropertyOptional({ description: 'Record last update timestamp (ISO 8601)' })
  updatedAt?: string;
}

/**
 * Gateway statistics for dashboard display
 */
export class GatewayStatistics {
  @ApiProperty({ description: 'Total number of transactions' })
  totalTransactions: number;

  @ApiProperty({ description: 'Number of successful transactions' })
  successfulTransactions: number;

  @ApiProperty({ description: 'Success rate percentage (0-100)' })
  successRate: number;

  @ApiProperty({ description: 'Total transaction volume' })
  totalVolume: string;

  @ApiProperty({ description: 'Monthly transaction volume' })
  monthlyVolume: string;
}

/**
 * Resolved gateway configuration with inheritance metadata
 */
export class ResolvedGatewayConfigData extends GatewayConfigData {
  @ApiPropertyOptional({ description: 'Metadata about how this config was resolved through inheritance', type: () => ResolvedConfigMetadata })
  @ValidateNested()
  @Type(() => ResolvedConfigMetadata)
  _metadata?: ResolvedConfigMetadata;

  @ApiPropertyOptional({ description: 'Gateway statistics for display', type: () => GatewayStatistics })
  @ValidateNested()
  @Type(() => GatewayStatistics)
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
 * Fee configuration for legacy update payload
 */
export class UpdateGatewayFees {
  @ApiPropertyOptional({ description: 'Fee percentage' })
  percentage?: number;

  @ApiPropertyOptional({ description: 'Fixed amount fee' })
  fixedAmount?: string;

  @ApiPropertyOptional({ description: 'Minimum fee' })
  minimumFee?: string;

  @ApiPropertyOptional({ description: 'Maximum fee' })
  maximumFee?: string;
}

/**
 * Configuration for legacy update payload
 */
export class UpdateGatewayConfigPayload {
  @ApiPropertyOptional({ description: 'Webhook URL' })
  webhook?: string;

  @ApiPropertyOptional({ description: 'Environment (SANDBOX, PRODUCTION)' })
  environment?: string;

  @ApiPropertyOptional({ description: 'Supported currencies', type: [String] })
  currencies?: string[];

  @ApiPropertyOptional({ description: 'Supported payment methods', type: [String] })
  supportedMethods?: string[];

  [key: string]: any;
}

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
export class UpdateGatewayPayload {
  @ApiProperty({ description: 'Payment setting ID to update' })
  id: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID (optional)' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Chain ID (optional)' })
  chainId?: string;

  @ApiPropertyOptional({ description: 'Active/enabled status' })
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Merchant ID (ROOT LEVEL - database column)' })
  merchantId?: string;

  @ApiPropertyOptional({ description: 'API Key (ROOT LEVEL - database column)' })
  apiKey?: string;

  @ApiPropertyOptional({ description: 'Secret Key (ROOT LEVEL - database column)' })
  secretKey?: string;

  @ApiPropertyOptional({ description: 'Gateway-specific configuration', type: () => UpdateGatewayConfigPayload })
  @ValidateNested()
  @Type(() => UpdateGatewayConfigPayload)
  configuration?: UpdateGatewayConfigPayload;

  @ApiPropertyOptional({ description: 'Fee configuration', type: () => UpdateGatewayFees })
  @ValidateNested()
  @Type(() => UpdateGatewayFees)
  fees?: UpdateGatewayFees;
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
export class BulkGatewayUpdateFields {
  @ApiPropertyOptional({ description: 'Enable or disable gateways' })
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Merchant ID for the gateway' })
  merchantId?: string;

  @ApiPropertyOptional({ description: 'API key for gateway authentication' })
  apiKey?: string;

  @ApiPropertyOptional({ description: 'Secret key for gateway authentication' })
  secretKey?: string;

  @ApiPropertyOptional({ description: 'Webhook URL for callbacks' })
  webhookUrl?: string;

  @ApiPropertyOptional({ description: 'Currency code(s) supported' })
  currency?: string;

  @ApiPropertyOptional({ description: 'Payment methods supported by this gateway', type: [String] })
  paymentMethods?: string[];

  @ApiPropertyOptional({ description: 'Gateway-specific configuration' })
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
export class BulkUpdatePaymentGatewayNatsRequest {
  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID (optional - affects which gateways are updated)' })
  hotelId?: string;

  @ApiProperty({ description: 'Array of gateway IDs to update', type: [String] })
  gatewayIds: string[];

  @ApiProperty({ description: 'Fields to update on each gateway', type: () => BulkGatewayUpdateFields })
  @ValidateNested()
  @Type(() => BulkGatewayUpdateFields)
  updates: BulkGatewayUpdateFields;
}

/**
 * Result for a single gateway in bulk update
 */
export class BulkUpdateGatewayResult {
  @ApiProperty({ description: 'Gateway ID that was processed' })
  gatewayId: string;

  @ApiProperty({ description: 'Whether the update succeeded for this gateway' })
  success: boolean;

  @ApiPropertyOptional({ description: 'Error message if update failed' })
  error?: string;

  @ApiPropertyOptional({ description: 'Error code if update failed' })
  errorCode?: string;
}

/**
 * Response data for bulk update operation
 */
export class BulkUpdateGatewayResponseData {
  @ApiProperty({ description: 'Number of gateways successfully updated' })
  updatedCount: number;

  @ApiProperty({ description: 'Number of gateways that were skipped or failed' })
  skippedCount: number;

  @ApiProperty({ description: 'Detailed results for gateways that failed', type: [BulkUpdateGatewayResult] })
  @Type(() => BulkUpdateGatewayResult)
  errors: BulkUpdateGatewayResult[];
}

/**
 * Full NATS response type for bulk update gateways
 */
export type BulkUpdatePaymentGatewayNatsResponse = NatsResponse<BulkUpdateGatewayResponseData>;

// ============================================================================
// TEST PAYMENT GATEWAY
// ============================================================================

/**
 * Request payload for gateway.test pattern
 * Used to test a payment gateway connection and credentials
 */
export class TestPaymentGatewayNatsRequest {
  @ApiProperty({ description: 'Gateway ID to test' })
  id: string;

  @ApiProperty({ description: 'Test transaction amount' })
  amount: number;

  @ApiProperty({ description: 'Currency code for test' })
  currency: string;

  @ApiProperty({ description: 'Tenant ID (required)' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID (optional)' })
  hotelId?: string;
}

/**
 * Response data for gateway.test pattern
 * Contains test result details
 */
export class TestPaymentGatewayData {
  @ApiProperty({ description: 'Whether test was successful' })
  success: boolean;

  @ApiProperty({ description: 'Time taken to complete test (in milliseconds)' })
  responseTime: number;

  @ApiProperty({ description: 'Human-readable message about test result' })
  message: string;

  @ApiPropertyOptional({ description: 'Optional test transaction ID from gateway' })
  testTransactionId?: string;

  @ApiPropertyOptional({ description: 'Gateway provider name' })
  provider?: string;

  @ApiPropertyOptional({ description: 'Test timestamp (ISO 8601)' })
  testedAt?: string;
}

/**
 * Full NATS response type for test payment gateway
 */
export type TestPaymentGatewayNatsResponse = NatsResponse<TestPaymentGatewayData>;

// ============================================================================
// CONVENIENCE TYPE ALIASES FOR GROUP C GATEWAY OPERATIONS
// ============================================================================

/**
 * Get payment gateways with inheritance resolution
 * Alias for FindHotelGatewaysRequest with resolveInheritance: true
 */
export type GetPaymentGatewaysNatsRequest = FindHotelGatewaysRequest;
export type GetPaymentGatewaysNatsResponse = FindHotelGatewaysNatsResponse;

/**
 * Get hotel-specific payment gateways
 * Alias for FindHotelGatewaysNatsResponse
 */
export type GetHotelPaymentGatewaysNatsRequest = FindHotelGatewaysRequest;
export type GetHotelPaymentGatewaysNatsResponse = FindHotelGatewaysNatsResponse;

/**
 * Get chain-level payment gateways
 * Alias for FindChainGatewaysNatsResponse
 */
export type GetChainPaymentGatewaysNatsRequest = FindChainGatewaysRequest;
export type GetChainPaymentGatewaysNatsResponse = FindChainGatewaysNatsResponse;

/**
 * Update hotel-level payment gateway
 * Alias for UpdateGatewayRequest with hotelId
 */
export type UpdateHotelPaymentGatewayNatsRequest = UpdateGatewayRequest;
export type UpdateHotelPaymentGatewayNatsResponse = UpdateGatewayNatsResponse;

/**
 * Update chain-level payment gateway
 * Alias for UpdateGatewayRequest with chainId
 */
export type UpdateChainPaymentGatewayNatsRequest = UpdateGatewayRequest;
export type UpdateChainPaymentGatewayNatsResponse = UpdateGatewayNatsResponse;

/**
 * Update single payment gateway (generic update)
 * Alias for UpdateGatewayRequest
 */
export type UpdatePaymentGatewayNatsRequest = UpdateGatewayRequest;
export type UpdatePaymentGatewayNatsResponse = UpdateGatewayNatsResponse;
