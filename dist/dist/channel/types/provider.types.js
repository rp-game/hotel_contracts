"use strict";
/**
 * Channel Provider Type Definitions
 *
 * Matches the ChannelProvider entity structure
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
exports.ChannelProvider = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../enums");
/**
 * Main ChannelProvider class
 * Represents a provider configuration for channel/PMS integration
 * Used for both NATS messages and REST API responses
 */
class ChannelProvider {
    id;
    tenantId;
    hotelId;
    chainId;
    providerType;
    name;
    description;
    configuration;
    credentials;
    isActive;
    isSandbox;
    lastSyncAt;
    syncStatus;
    syncErrors;
    createdAt;
    updatedAt;
    otaAccounts;
}
exports.ChannelProvider = ChannelProvider;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID', format: 'uuid' }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', format: 'uuid' }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', format: 'uuid' }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain ID for multi-hotel configurations', format: 'uuid' }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider type', enum: enums_1.ProviderType }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "providerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider name' }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider description' }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Provider configuration object containing all settings',
        type: 'object',
        additionalProperties: true
    }),
    __metadata("design:type", Object)
], ChannelProvider.prototype, "configuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Provider credentials (encrypted)',
        type: 'object',
        additionalProperties: true
    }),
    __metadata("design:type", Object)
], ChannelProvider.prototype, "credentials", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether provider is active' }),
    __metadata("design:type", Boolean)
], ChannelProvider.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether provider is in sandbox/test mode' }),
    __metadata("design:type", Boolean)
], ChannelProvider.prototype, "isSandbox", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last sync timestamp (ISO format)' }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "lastSyncAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current sync status' }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "syncStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Sync error details if any',
        type: 'object',
        additionalProperties: true
    }),
    __metadata("design:type", Object)
], ChannelProvider.prototype, "syncErrors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ISO format)' }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (ISO format)' }),
    __metadata("design:type", String)
], ChannelProvider.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'OTA accounts mapped from configuration.ota_accounts',
        type: 'object',
        additionalProperties: true
    }),
    __metadata("design:type", Object)
], ChannelProvider.prototype, "otaAccounts", void 0);
//# sourceMappingURL=provider.types.js.map