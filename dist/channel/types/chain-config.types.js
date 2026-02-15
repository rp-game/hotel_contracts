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
exports.ChainSyncResponseDto = exports.ChainSyncResultDto = exports.SyncChainConfigDto = exports.ChainHotelConfigurationDto = exports.ApplyChainConfigDto = void 0;
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
//# sourceMappingURL=chain-config.types.js.map