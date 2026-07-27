"use strict";
/**
 * Chain Configuration Type Definitions
 *
 * Unified contracts for both NATS messaging and REST API
 * Uses snake_case to match database entities and REST API conventions
 * Converted to classes with @ApiProperty for Swagger documentation
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
exports.UpdateChainConfigurationDto = exports.ChainChannelConfigurationDto = exports.ChainInheritanceRulesDto = exports.ChainProviderTemplateDto = exports.ChainSyncResponseDto = exports.ChainSyncResultDto = exports.SyncChainConfigDto = exports.ChainHotelConfigurationDto = exports.ApplyChainConfigDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Apply chain configuration to hotel request DTO
 * Used for both REST API and NATS messaging
 */
class ApplyChainConfigDto {
    hotel_id;
    inherit_settings;
    override_settings;
    force_apply;
}
exports.ApplyChainConfigDto = ApplyChainConfigDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID to apply configuration to' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApplyChainConfigDto.prototype, "hotel_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Settings to inherit from chain', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ApplyChainConfigDto.prototype, "inherit_settings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel-specific setting overrides' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ApplyChainConfigDto.prototype, "override_settings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to force apply even if hotel has existing config' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ApplyChainConfigDto.prototype, "force_apply", void 0);
/**
 * Chain hotel configuration response DTO
 * Used for both REST API and NATS messaging
 */
class ChainHotelConfigurationDto {
    hotel_id;
    hotel_name;
    inherits_from_chain;
    inherited_settings;
    hotel_overrides;
    active_providers;
    status;
    last_chain_sync;
}
exports.ChainHotelConfigurationDto = ChainHotelConfigurationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ChainHotelConfigurationDto.prototype, "hotel_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainHotelConfigurationDto.prototype, "hotel_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether hotel inherits from chain' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ChainHotelConfigurationDto.prototype, "inherits_from_chain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Inherited settings from chain', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ChainHotelConfigurationDto.prototype, "inherited_settings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel-specific overrides' }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ChainHotelConfigurationDto.prototype, "hotel_overrides", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active provider configurations for this hotel' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ChainHotelConfigurationDto.prototype, "active_providers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel configuration status' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainHotelConfigurationDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last sync timestamp with chain configuration' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainHotelConfigurationDto.prototype, "last_chain_sync", void 0);
/**
 * Sync chain configuration to hotels request DTO
 * Used for both REST API and NATS messaging
 */
class SyncChainConfigDto {
    hotel_ids;
    settings_to_sync;
    force_override;
    only_unconfigured_hotels;
}
exports.SyncChainConfigDto = SyncChainConfigDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Specific hotels to sync (if empty, sync all)', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('all', { each: true }),
    __metadata("design:type", Array)
], SyncChainConfigDto.prototype, "hotel_ids", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Settings to sync (if empty, sync all allowed)', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SyncChainConfigDto.prototype, "settings_to_sync", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to override hotel-specific settings' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SyncChainConfigDto.prototype, "force_override", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether to only sync to hotels without existing config' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SyncChainConfigDto.prototype, "only_unconfigured_hotels", void 0);
/**
 * Chain sync result for individual hotel
 */
class ChainSyncResultDto {
    hotel_id;
    hotel_name;
    success;
    error;
    synced_settings;
    skipped_settings;
}
exports.ChainSyncResultDto = ChainSyncResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ChainSyncResultDto.prototype, "hotel_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainSyncResultDto.prototype, "hotel_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether sync was successful' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ChainSyncResultDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Error message if sync failed' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainSyncResultDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Settings that were synced', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ChainSyncResultDto.prototype, "synced_settings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Settings that were skipped due to conflicts', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ChainSyncResultDto.prototype, "skipped_settings", void 0);
/**
 * Chain sync response DTO
 * Used for both REST API and NATS messaging
 */
class ChainSyncResponseDto {
    chain_id;
    sync_id;
    success;
    total_hotels;
    successful_syncs;
    failed_syncs;
    results;
    timestamp;
}
exports.ChainSyncResponseDto = ChainSyncResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ChainSyncResponseDto.prototype, "chain_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync operation ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainSyncResponseDto.prototype, "sync_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overall sync success status' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ChainSyncResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of hotels processed' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ChainSyncResponseDto.prototype, "total_hotels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of successfully synced hotels' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ChainSyncResponseDto.prototype, "successful_syncs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of failed syncs' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ChainSyncResponseDto.prototype, "failed_syncs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detailed results for each hotel', type: [ChainSyncResultDto] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ChainSyncResponseDto.prototype, "results", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sync operation timestamp' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainSyncResponseDto.prototype, "timestamp", void 0);
/**
 * Chain provider template for multi-hotel configuration
 */
class ChainProviderTemplateDto {
    provider_type;
    provider_name;
    api_credentials_template;
    endpoints;
    default_settings;
    ota_account_templates;
    active;
}
exports.ChainProviderTemplateDto = ChainProviderTemplateDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider type' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainProviderTemplateDto.prototype, "provider_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainProviderTemplateDto.prototype, "provider_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'API credentials template' }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ChainProviderTemplateDto.prototype, "api_credentials_template", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Endpoints configuration' }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ChainProviderTemplateDto.prototype, "endpoints", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Default settings for chain hotels' }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ChainProviderTemplateDto.prototype, "default_settings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTA account templates' }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ChainProviderTemplateDto.prototype, "ota_account_templates", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether this template is active' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ChainProviderTemplateDto.prototype, "active", void 0);
/**
 * Chain inheritance rules configuration
 */
class ChainInheritanceRulesDto {
    required_settings;
    optional_settings;
    hotel_overrides_allowed;
    force_inheritance;
}
exports.ChainInheritanceRulesDto = ChainInheritanceRulesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Settings that must be inherited from chain', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ChainInheritanceRulesDto.prototype, "required_settings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Optional settings that can be inherited', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ChainInheritanceRulesDto.prototype, "optional_settings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Settings that hotels can override', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ChainInheritanceRulesDto.prototype, "hotel_overrides_allowed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether to force inheritance for all hotels' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ChainInheritanceRulesDto.prototype, "force_inheritance", void 0);
/**
 * Complete chain channel configuration
 */
class ChainChannelConfigurationDto {
    chain_id;
    chain_name;
    provider_templates;
    inheritance_rules;
    global_settings;
    created_at;
    updated_at;
}
exports.ChainChannelConfigurationDto = ChainChannelConfigurationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ChainChannelConfigurationDto.prototype, "chain_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainChannelConfigurationDto.prototype, "chain_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider configuration templates', type: [ChainProviderTemplateDto] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ChainChannelConfigurationDto.prototype, "provider_templates", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Inheritance rules', type: ChainInheritanceRulesDto }),
    __metadata("design:type", ChainInheritanceRulesDto)
], ChainChannelConfigurationDto.prototype, "inheritance_rules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Global chain settings for channel management' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ChainChannelConfigurationDto.prototype, "global_settings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Configuration created timestamp' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainChannelConfigurationDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Configuration last updated timestamp' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChainChannelConfigurationDto.prototype, "updated_at", void 0);
/**
 * Update chain configuration request DTO
 */
class UpdateChainConfigurationDto {
    provider_templates;
    inheritance_rules;
    global_settings;
}
exports.UpdateChainConfigurationDto = UpdateChainConfigurationDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider configuration templates', type: [ChainProviderTemplateDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateChainConfigurationDto.prototype, "provider_templates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Inheritance rules', type: ChainInheritanceRulesDto }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", ChainInheritanceRulesDto)
], UpdateChainConfigurationDto.prototype, "inheritance_rules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Global chain settings for channel management' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdateChainConfigurationDto.prototype, "global_settings", void 0);
//# sourceMappingURL=chain-config.types.js.map