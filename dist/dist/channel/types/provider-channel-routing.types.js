"use strict";
/**
 * Provider-Channel Routing Type Definitions
 *
 * Records which OTA channels each CMS provider serves.
 * One CMS aggregator (STAAH, eviivo, SiteMinder) typically dispatches
 * to many channels (Booking, Agoda, Expedia, Trip, Traveloka).
 *
 * Owned by channel-service. Drives the channel dropdown in distribution UI:
 * after a user picks a provider, the channel dropdown is filtered to those
 * channels the provider has enabled.
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
exports.ListProviderChannelRoutingQuery = exports.UpsertProviderChannelRoutingRequest = exports.ProviderChannelRouting = void 0;
const swagger_1 = require("@nestjs/swagger");
class ProviderChannelRouting {
    id;
    providerId;
    channelName;
    isEnabled;
    createdAt;
    updatedAt;
}
exports.ProviderChannelRouting = ProviderChannelRouting;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Routing ID', format: 'uuid' }),
    __metadata("design:type", String)
], ProviderChannelRouting.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID', format: 'uuid' }),
    __metadata("design:type", String)
], ProviderChannelRouting.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name', example: 'Booking.com' }),
    __metadata("design:type", String)
], ProviderChannelRouting.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the provider has this channel enabled', example: true }),
    __metadata("design:type", Boolean)
], ProviderChannelRouting.prototype, "isEnabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at (ISO 8601)' }),
    __metadata("design:type", String)
], ProviderChannelRouting.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at (ISO 8601)' }),
    __metadata("design:type", String)
], ProviderChannelRouting.prototype, "updatedAt", void 0);
class UpsertProviderChannelRoutingRequest {
    providerId;
    channelName;
    isEnabled;
}
exports.UpsertProviderChannelRoutingRequest = UpsertProviderChannelRoutingRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID', format: 'uuid' }),
    __metadata("design:type", String)
], UpsertProviderChannelRoutingRequest.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name' }),
    __metadata("design:type", String)
], UpsertProviderChannelRoutingRequest.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enabled flag', default: true }),
    __metadata("design:type", Boolean)
], UpsertProviderChannelRoutingRequest.prototype, "isEnabled", void 0);
class ListProviderChannelRoutingQuery {
    providerId;
    channelName;
    isEnabled;
}
exports.ListProviderChannelRoutingQuery = ListProviderChannelRoutingQuery;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider ID' }),
    __metadata("design:type", String)
], ListProviderChannelRoutingQuery.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Channel name' }),
    __metadata("design:type", String)
], ListProviderChannelRoutingQuery.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enabled filter' }),
    __metadata("design:type", Boolean)
], ListProviderChannelRoutingQuery.prototype, "isEnabled", void 0);
//# sourceMappingURL=provider-channel-routing.types.js.map