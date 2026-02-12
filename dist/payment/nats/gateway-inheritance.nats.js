"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPaymentGatewayData = exports.TestPaymentGatewayNatsRequest = exports.BulkUpdateGatewayResponseData = exports.BulkUpdateGatewayResult = exports.BulkUpdatePaymentGatewayNatsRequest = exports.BulkGatewayUpdateFields = exports.UpdateGatewayPayload = exports.UpdateGatewayConfigPayload = exports.UpdateGatewayFees = exports.ResolvedGatewayConfigData = exports.GatewayStatistics = exports.GatewayConfigData = exports.GatewayConfiguration = exports.ResolvedConfigMetadata = exports.InheritanceConfig = exports.GatewaySyncStatus = exports.GatewayType = exports.ConfigLevel = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
// ============ ENUMS ============
/**
 * Configuration level hierarchy for payment gateways
 */
var ConfigLevel;
(function (ConfigLevel) {
    ConfigLevel["PLATFORM"] = "PLATFORM";
    ConfigLevel["CHAIN"] = "CHAIN";
    ConfigLevel["HOTEL"] = "HOTEL";
})(ConfigLevel || (exports.ConfigLevel = ConfigLevel = {}));
/**
 * Payment gateway types
 */
var GatewayType;
(function (GatewayType) {
    GatewayType["ONEPAY"] = "ONEPAY";
    GatewayType["VNPAY"] = "VNPAY";
    GatewayType["STRIPE"] = "STRIPE";
    GatewayType["MOMO"] = "MOMO";
    GatewayType["PAYPAL"] = "PAYPAL";
})(GatewayType || (exports.GatewayType = GatewayType = {}));
/**
 * Gateway sync result status for individual hotel
 */
var GatewaySyncStatus;
(function (GatewaySyncStatus) {
    GatewaySyncStatus["SUCCESS"] = "SUCCESS";
    GatewaySyncStatus["SKIPPED"] = "SKIPPED";
    GatewaySyncStatus["FAILED"] = "FAILED";
})(GatewaySyncStatus || (exports.GatewaySyncStatus = GatewaySyncStatus = {}));
// ============ INHERITANCE METADATA ============
/**
 * Inheritance configuration metadata stored in PaymentSetting.configuration
 */
class InheritanceConfig {
    inherit_from_chain;
    inherit_from_platform;
    chain_id;
    platform_id;
    override_settings;
    last_synced_at;
    sync_version;
}
exports.InheritanceConfig = InheritanceConfig;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to inherit from chain-level config', default: true }),
    __metadata("design:type", Boolean)
], InheritanceConfig.prototype, "inherit_from_chain", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to inherit from platform-level config', default: true }),
    __metadata("design:type", Boolean)
], InheritanceConfig.prototype, "inherit_from_platform", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'The chain ID this config inherits from' }),
    __metadata("design:type", String)
], InheritanceConfig.prototype, "chain_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'The platform ID this config inherits from' }),
    __metadata("design:type", String)
], InheritanceConfig.prototype, "platform_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fields that this level has explicitly overridden', type: [String] }),
    __metadata("design:type", Array)
], InheritanceConfig.prototype, "override_settings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When this config was last synced from parent' }),
    __metadata("design:type", String)
], InheritanceConfig.prototype, "last_synced_at", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Version of sync to support rollback/versioning' }),
    __metadata("design:type", Number)
], InheritanceConfig.prototype, "sync_version", void 0);
/**
 * Metadata about resolved gateway configuration
 */
class ResolvedConfigMetadata {
    inheritanceChain;
    configLevel;
    isInherited;
    canOverride;
    overriddenFields;
    resolvedAt;
}
exports.ResolvedConfigMetadata = ResolvedConfigMetadata;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The inheritance chain that was followed to resolve config', type: [String] }),
    __metadata("design:type", Array)
], ResolvedConfigMetadata.prototype, "inheritanceChain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The level at which this config is actually defined' }),
    __metadata("design:type", String)
], ResolvedConfigMetadata.prototype, "configLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether this config is inherited from a parent level' }),
    __metadata("design:type", Boolean)
], ResolvedConfigMetadata.prototype, "isInherited", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether this level can be overridden by child levels' }),
    __metadata("design:type", Boolean)
], ResolvedConfigMetadata.prototype, "canOverride", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fields that have been explicitly overridden at this level', type: [String] }),
    __metadata("design:type", Array)
], ResolvedConfigMetadata.prototype, "overriddenFields", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ISO timestamp when config was resolved' }),
    __metadata("design:type", String)
], ResolvedConfigMetadata.prototype, "resolvedAt", void 0);
/**
 * Gateway configuration nested object
 */
class GatewayConfiguration {
    environment;
    currencies;
    accessCode;
    url;
    returnUrl;
    queryUrl;
    refundUrl;
    version;
    locale;
    feePercentage;
    fixedAmount;
    minimumFee;
    maximumFee;
    lastTestedAt;
    lastUpdatedAt;
    inheritance;
}
exports.GatewayConfiguration = GatewayConfiguration;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Execution environment (SANDBOX, PRODUCTION)' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "environment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Supported currencies', type: [String] }),
    __metadata("design:type", Array)
], GatewayConfiguration.prototype, "currencies", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OnePay-specific: access code' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "accessCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OnePay-specific: payment URL' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OnePay-specific: return URL after payment' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "returnUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OnePay-specific: query URL for transaction status' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "queryUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OnePay-specific: refund URL' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "refundUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OnePay-specific: API version' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OnePay-specific: locale' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "locale", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fee percentage' }),
    __metadata("design:type", Number)
], GatewayConfiguration.prototype, "feePercentage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fixed amount fee' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "fixedAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum fee' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "minimumFee", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum fee' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "maximumFee", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last tested timestamp (ISO 8601)' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "lastTestedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last updated timestamp (ISO 8601)' }),
    __metadata("design:type", String)
], GatewayConfiguration.prototype, "lastUpdatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Inheritance configuration', type: () => InheritanceConfig }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => InheritanceConfig),
    __metadata("design:type", InheritanceConfig)
], GatewayConfiguration.prototype, "inheritance", void 0);
/**
 * Gateway configuration response data
 */
class GatewayConfigData {
    id;
    gatewayType;
    tenantId;
    hotelId;
    chainId;
    platformId;
    merchantId;
    apiKey;
    secretKey;
    webhookUrl;
    currency;
    paymentMethods;
    isActive;
    configuration;
    createdAt;
    updatedAt;
}
exports.GatewayConfigData = GatewayConfigData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment setting ID' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gateway type (ONEPAY, VNPAY, STRIPE, MOMO, PAYPAL)' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "gatewayType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (null for platform/chain-level)' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain ID (null for hotel/platform-level)' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Platform ID (null for hotel/chain-level)' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "platformId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Merchant ID for this gateway' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "merchantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'API key for this gateway' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "apiKey", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Secret key for this gateway' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "secretKey", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Webhook URL for payment notifications' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "webhookUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Default currency (VND, USD, EUR, etc.)' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Supported payment methods', type: [String] }),
    __metadata("design:type", Array)
], GatewayConfigData.prototype, "paymentMethods", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether this gateway is active' }),
    __metadata("design:type", Boolean)
], GatewayConfigData.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gateway-specific configuration', type: () => GatewayConfiguration }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => GatewayConfiguration),
    __metadata("design:type", GatewayConfiguration)
], GatewayConfigData.prototype, "configuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Record creation timestamp (ISO 8601)' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Record last update timestamp (ISO 8601)' }),
    __metadata("design:type", String)
], GatewayConfigData.prototype, "updatedAt", void 0);
/**
 * Gateway statistics for dashboard display
 */
class GatewayStatistics {
    totalTransactions;
    successfulTransactions;
    successRate;
    totalVolume;
    monthlyVolume;
}
exports.GatewayStatistics = GatewayStatistics;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of transactions' }),
    __metadata("design:type", Number)
], GatewayStatistics.prototype, "totalTransactions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of successful transactions' }),
    __metadata("design:type", Number)
], GatewayStatistics.prototype, "successfulTransactions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success rate percentage (0-100)' }),
    __metadata("design:type", Number)
], GatewayStatistics.prototype, "successRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total transaction volume' }),
    __metadata("design:type", String)
], GatewayStatistics.prototype, "totalVolume", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monthly transaction volume' }),
    __metadata("design:type", String)
], GatewayStatistics.prototype, "monthlyVolume", void 0);
/**
 * Resolved gateway configuration with inheritance metadata
 */
class ResolvedGatewayConfigData extends GatewayConfigData {
    _metadata;
    statistics;
}
exports.ResolvedGatewayConfigData = ResolvedGatewayConfigData;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Metadata about how this config was resolved through inheritance', type: () => ResolvedConfigMetadata }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ResolvedConfigMetadata),
    __metadata("design:type", ResolvedConfigMetadata)
], ResolvedGatewayConfigData.prototype, "_metadata", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gateway statistics for display', type: () => GatewayStatistics }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => GatewayStatistics),
    __metadata("design:type", GatewayStatistics)
], ResolvedGatewayConfigData.prototype, "statistics", void 0);
// ============ LEGACY UPDATE GATEWAY (gateway.update) ============
/**
 * Fee configuration for legacy update payload
 */
class UpdateGatewayFees {
    percentage;
    fixedAmount;
    minimumFee;
    maximumFee;
}
exports.UpdateGatewayFees = UpdateGatewayFees;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fee percentage' }),
    __metadata("design:type", Number)
], UpdateGatewayFees.prototype, "percentage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fixed amount fee' }),
    __metadata("design:type", String)
], UpdateGatewayFees.prototype, "fixedAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum fee' }),
    __metadata("design:type", String)
], UpdateGatewayFees.prototype, "minimumFee", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum fee' }),
    __metadata("design:type", String)
], UpdateGatewayFees.prototype, "maximumFee", void 0);
/**
 * Configuration for legacy update payload
 */
class UpdateGatewayConfigPayload {
    webhook;
    environment;
    currencies;
    supportedMethods;
}
exports.UpdateGatewayConfigPayload = UpdateGatewayConfigPayload;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Webhook URL' }),
    __metadata("design:type", String)
], UpdateGatewayConfigPayload.prototype, "webhook", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Environment (SANDBOX, PRODUCTION)' }),
    __metadata("design:type", String)
], UpdateGatewayConfigPayload.prototype, "environment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Supported currencies', type: [String] }),
    __metadata("design:type", Array)
], UpdateGatewayConfigPayload.prototype, "currencies", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Supported payment methods', type: [String] }),
    __metadata("design:type", Array)
], UpdateGatewayConfigPayload.prototype, "supportedMethods", void 0);
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
class UpdateGatewayPayload {
    id;
    tenantId;
    hotelId;
    chainId;
    isActive;
    merchantId;
    apiKey;
    secretKey;
    configuration;
    fees;
}
exports.UpdateGatewayPayload = UpdateGatewayPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment setting ID to update' }),
    __metadata("design:type", String)
], UpdateGatewayPayload.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    __metadata("design:type", String)
], UpdateGatewayPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (optional)' }),
    __metadata("design:type", String)
], UpdateGatewayPayload.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain ID (optional)' }),
    __metadata("design:type", String)
], UpdateGatewayPayload.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Active/enabled status' }),
    __metadata("design:type", Boolean)
], UpdateGatewayPayload.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Merchant ID (ROOT LEVEL - database column)' }),
    __metadata("design:type", String)
], UpdateGatewayPayload.prototype, "merchantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'API Key (ROOT LEVEL - database column)' }),
    __metadata("design:type", String)
], UpdateGatewayPayload.prototype, "apiKey", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Secret Key (ROOT LEVEL - database column)' }),
    __metadata("design:type", String)
], UpdateGatewayPayload.prototype, "secretKey", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gateway-specific configuration', type: () => UpdateGatewayConfigPayload }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateGatewayConfigPayload),
    __metadata("design:type", UpdateGatewayConfigPayload)
], UpdateGatewayPayload.prototype, "configuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fee configuration', type: () => UpdateGatewayFees }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateGatewayFees),
    __metadata("design:type", UpdateGatewayFees)
], UpdateGatewayPayload.prototype, "fees", void 0);
// ============ BULK UPDATE GATEWAYS (gateway.bulk-update) ============
/**
 * Update fields for bulk gateway update operation
 */
class BulkGatewayUpdateFields {
    isActive;
    merchantId;
    apiKey;
    secretKey;
    webhookUrl;
    currency;
    paymentMethods;
    configuration;
}
exports.BulkGatewayUpdateFields = BulkGatewayUpdateFields;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable or disable gateways' }),
    __metadata("design:type", Boolean)
], BulkGatewayUpdateFields.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Merchant ID for the gateway' }),
    __metadata("design:type", String)
], BulkGatewayUpdateFields.prototype, "merchantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'API key for gateway authentication' }),
    __metadata("design:type", String)
], BulkGatewayUpdateFields.prototype, "apiKey", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Secret key for gateway authentication' }),
    __metadata("design:type", String)
], BulkGatewayUpdateFields.prototype, "secretKey", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Webhook URL for callbacks' }),
    __metadata("design:type", String)
], BulkGatewayUpdateFields.prototype, "webhookUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code(s) supported' }),
    __metadata("design:type", String)
], BulkGatewayUpdateFields.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment methods supported by this gateway', type: [String] }),
    __metadata("design:type", Array)
], BulkGatewayUpdateFields.prototype, "paymentMethods", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gateway-specific configuration' }),
    __metadata("design:type", Object)
], BulkGatewayUpdateFields.prototype, "configuration", void 0);
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
class BulkUpdatePaymentGatewayNatsRequest {
    tenantId;
    hotelId;
    gatewayIds;
    updates;
}
exports.BulkUpdatePaymentGatewayNatsRequest = BulkUpdatePaymentGatewayNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    __metadata("design:type", String)
], BulkUpdatePaymentGatewayNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (optional - affects which gateways are updated)' }),
    __metadata("design:type", String)
], BulkUpdatePaymentGatewayNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of gateway IDs to update', type: [String] }),
    __metadata("design:type", Array)
], BulkUpdatePaymentGatewayNatsRequest.prototype, "gatewayIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fields to update on each gateway', type: () => BulkGatewayUpdateFields }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => BulkGatewayUpdateFields),
    __metadata("design:type", BulkGatewayUpdateFields)
], BulkUpdatePaymentGatewayNatsRequest.prototype, "updates", void 0);
/**
 * Result for a single gateway in bulk update
 */
class BulkUpdateGatewayResult {
    gatewayId;
    success;
    error;
    errorCode;
}
exports.BulkUpdateGatewayResult = BulkUpdateGatewayResult;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gateway ID that was processed' }),
    __metadata("design:type", String)
], BulkUpdateGatewayResult.prototype, "gatewayId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the update succeeded for this gateway' }),
    __metadata("design:type", Boolean)
], BulkUpdateGatewayResult.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Error message if update failed' }),
    __metadata("design:type", String)
], BulkUpdateGatewayResult.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Error code if update failed' }),
    __metadata("design:type", String)
], BulkUpdateGatewayResult.prototype, "errorCode", void 0);
/**
 * Response data for bulk update operation
 */
class BulkUpdateGatewayResponseData {
    updatedCount;
    skippedCount;
    errors;
}
exports.BulkUpdateGatewayResponseData = BulkUpdateGatewayResponseData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of gateways successfully updated' }),
    __metadata("design:type", Number)
], BulkUpdateGatewayResponseData.prototype, "updatedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of gateways that were skipped or failed' }),
    __metadata("design:type", Number)
], BulkUpdateGatewayResponseData.prototype, "skippedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detailed results for gateways that failed', type: [BulkUpdateGatewayResult] }),
    (0, class_transformer_1.Type)(() => BulkUpdateGatewayResult),
    __metadata("design:type", Array)
], BulkUpdateGatewayResponseData.prototype, "errors", void 0);
// ============================================================================
// TEST PAYMENT GATEWAY
// ============================================================================
/**
 * Request payload for gateway.test pattern
 * Used to test a payment gateway connection and credentials
 */
class TestPaymentGatewayNatsRequest {
    id;
    amount;
    currency;
    tenantId;
    hotelId;
}
exports.TestPaymentGatewayNatsRequest = TestPaymentGatewayNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gateway ID to test' }),
    __metadata("design:type", String)
], TestPaymentGatewayNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Test transaction amount' }),
    __metadata("design:type", Number)
], TestPaymentGatewayNatsRequest.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code for test' }),
    __metadata("design:type", String)
], TestPaymentGatewayNatsRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (required)' }),
    __metadata("design:type", String)
], TestPaymentGatewayNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (optional)' }),
    __metadata("design:type", String)
], TestPaymentGatewayNatsRequest.prototype, "hotelId", void 0);
/**
 * Response data for gateway.test pattern
 * Contains test result details
 */
class TestPaymentGatewayData {
    success;
    responseTime;
    message;
    testTransactionId;
    provider;
    testedAt;
}
exports.TestPaymentGatewayData = TestPaymentGatewayData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether test was successful' }),
    __metadata("design:type", Boolean)
], TestPaymentGatewayData.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Time taken to complete test (in milliseconds)' }),
    __metadata("design:type", Number)
], TestPaymentGatewayData.prototype, "responseTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Human-readable message about test result' }),
    __metadata("design:type", String)
], TestPaymentGatewayData.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Optional test transaction ID from gateway' }),
    __metadata("design:type", String)
], TestPaymentGatewayData.prototype, "testTransactionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gateway provider name' }),
    __metadata("design:type", String)
], TestPaymentGatewayData.prototype, "provider", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Test timestamp (ISO 8601)' }),
    __metadata("design:type", String)
], TestPaymentGatewayData.prototype, "testedAt", void 0);
//# sourceMappingURL=gateway-inheritance.nats.js.map