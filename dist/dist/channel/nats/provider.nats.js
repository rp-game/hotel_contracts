"use strict";
/**
 * Channel Provider NATS Contracts
 *
 * Patterns:
 * - channel.providers.create
 * - channel.providers.get
 * - channel.providers.list
 * - channel.providers.findAll
 * - channel.providers.update
 * - channel.providers.delete
 * - channel.providers.test
 * - channel.providers.status
 * - channel.providers.performance
 *
 * Handler: channel-service (ProvidersNatsController)
 * Called by: api-gateway
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
exports.DeleteProviderResponse = exports.GetProviderNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Get Provider Request (Class-based for both REST and NATS)
 * Pattern: channel.providers.get
 * Used by: REST API (@ApiParam) and NATS messages
 */
class GetProviderNatsRequest {
    providerId;
    tenantId;
}
exports.GetProviderNatsRequest = GetProviderNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Provider ID',
        example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    __metadata("design:type", String)
], GetProviderNatsRequest.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tenant ID (optional for multi-tenant contexts)',
        example: '123e4567-e89b-12d3-a456-426614174001'
    }),
    __metadata("design:type", String)
], GetProviderNatsRequest.prototype, "tenantId", void 0);
/**
 * Delete Provider Response
 * Used for both NATS response and REST API response
 */
class DeleteProviderResponse {
    message;
    deletedAt;
}
exports.DeleteProviderResponse = DeleteProviderResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message' }),
    __metadata("design:type", String)
], DeleteProviderResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Deletion timestamp (ISO format)' }),
    __metadata("design:type", String)
], DeleteProviderResponse.prototype, "deletedAt", void 0);
//# sourceMappingURL=provider.nats.js.map