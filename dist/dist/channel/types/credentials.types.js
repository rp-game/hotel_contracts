"use strict";
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
exports.CredentialValidationResult = exports.ProviderCredentials = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ProviderCredentials {
    api_key;
    api_secret;
    username;
    password;
    property_id;
    extra;
}
exports.ProviderCredentials = ProviderCredentials;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'API key' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProviderCredentials.prototype, "api_key", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'API secret' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProviderCredentials.prototype, "api_secret", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Username for basic auth' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProviderCredentials.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Password for basic auth' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProviderCredentials.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider property/hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProviderCredentials.prototype, "property_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Provider-specific fields (e.g. client_id, client_secret)',
        type: 'object',
        additionalProperties: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ProviderCredentials.prototype, "extra", void 0);
class CredentialValidationResult {
    isValid;
    message;
    testedAt;
    provider;
}
exports.CredentialValidationResult = CredentialValidationResult;
//# sourceMappingURL=credentials.types.js.map