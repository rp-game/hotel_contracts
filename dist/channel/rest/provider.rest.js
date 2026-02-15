"use strict";
/**
 * Provider REST API DTOs
 *
 * Used by API Gateway for provider configuration endpoints
 * These are class-based DTOs with @ApiProperty decorators for Swagger
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
exports.TestConnectionResponseDto = exports.TestResultDto = exports.TestConnectionRequestDto = exports.ValidationResponseDto = exports.ValidateProviderConfigDto = exports.CreateProviderConfigDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const provider_type_enum_1 = require("../enums/provider-type.enum");
/**
 * Create Provider Configuration DTO
 * Used for POST /channel-management/providers
 */
class CreateProviderConfigDto {
    providerType;
    providerName;
    tenantId;
    hotelId;
    credentials; // StaahCredentialsDto | Beds24CredentialsDto | RateGainCredentialsDto | SiteminderCredentialsDto
    enableInventorySync;
    enableRateSync;
    enableBookingSync;
    settings; // ProviderSettingsDto
    endpoints; // ProviderEndpointsDto
    otaAccounts; // OTAAccountsConfigDto
    chainConfiguration;
}
exports.CreateProviderConfigDto = CreateProviderConfigDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider type', enum: provider_type_enum_1.ProviderType }),
    (0, class_validator_1.IsEnum)(provider_type_enum_1.ProviderType),
    __metadata("design:type", String)
], CreateProviderConfigDto.prototype, "providerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider display name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProviderConfigDto.prototype, "providerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID (auto-injected from req.user if not provided)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProviderConfigDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (auto-injected from req.user if not provided)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProviderConfigDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider credentials (structure varies by provider type)' }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateProviderConfigDto.prototype, "credentials", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable inventory sync' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProviderConfigDto.prototype, "enableInventorySync", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable rate sync' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProviderConfigDto.prototype, "enableRateSync", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable booking sync' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProviderConfigDto.prototype, "enableBookingSync", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider-specific settings' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateProviderConfigDto.prototype, "settings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider API endpoints configuration' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateProviderConfigDto.prototype, "endpoints", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA accounts configuration' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateProviderConfigDto.prototype, "otaAccounts", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel chain configuration' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateProviderConfigDto.prototype, "chainConfiguration", void 0);
/**
 * Validate Provider Configuration DTO
 * Used for POST /channel-management/providers/validate
 * Same structure as CreateProviderConfigDto but doesn't persist
 */
class ValidateProviderConfigDto extends CreateProviderConfigDto {
}
exports.ValidateProviderConfigDto = ValidateProviderConfigDto;
/**
 * Validation Response DTO
 * Returned from POST /channel-management/providers/validate
 */
class ValidationResponseDto {
    valid;
    errors;
    warnings;
    details;
}
exports.ValidationResponseDto = ValidationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether configuration is valid' }),
    __metadata("design:type", Boolean)
], ValidationResponseDto.prototype, "valid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Validation error messages', type: [String] }),
    __metadata("design:type", Array)
], ValidationResponseDto.prototype, "errors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Validation warning messages', type: [String] }),
    __metadata("design:type", Array)
], ValidationResponseDto.prototype, "warnings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional validation details' }),
    __metadata("design:type", Object)
], ValidationResponseDto.prototype, "details", void 0);
/**
 * Test Connection Request DTO
 * Used for POST /channel-management/providers/test-connection
 */
class TestConnectionRequestDto {
    providerType;
    credentials;
    endpoints;
    testTypes; // ['authentication', 'connection', 'api']
    timeoutMs;
}
exports.TestConnectionRequestDto = TestConnectionRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider type', enum: provider_type_enum_1.ProviderType }),
    (0, class_validator_1.IsEnum)(provider_type_enum_1.ProviderType),
    __metadata("design:type", String)
], TestConnectionRequestDto.prototype, "providerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider credentials to test' }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], TestConnectionRequestDto.prototype, "credentials", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider endpoints configuration' }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], TestConnectionRequestDto.prototype, "endpoints", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Types of tests to run', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], TestConnectionRequestDto.prototype, "testTypes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Test timeout in milliseconds' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TestConnectionRequestDto.prototype, "timeoutMs", void 0);
/**
 * Test Result DTO
 * Individual test result within TestConnectionResponseDto
 */
class TestResultDto {
    testType;
    success;
    message;
    details;
}
exports.TestResultDto = TestResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of test performed' }),
    __metadata("design:type", String)
], TestResultDto.prototype, "testType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether test passed' }),
    __metadata("design:type", Boolean)
], TestResultDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Test result message' }),
    __metadata("design:type", String)
], TestResultDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional test details' }),
    __metadata("design:type", Object)
], TestResultDto.prototype, "details", void 0);
/**
 * Test Connection Response DTO
 * Returned from POST /channel-management/providers/test-connection
 */
class TestConnectionResponseDto {
    success;
    message;
    executionTimeMs;
    testResults;
}
exports.TestConnectionResponseDto = TestConnectionResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether all tests passed' }),
    __metadata("design:type", Boolean)
], TestConnectionResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overall result message' }),
    __metadata("design:type", String)
], TestConnectionResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total execution time in milliseconds' }),
    __metadata("design:type", Number)
], TestConnectionResponseDto.prototype, "executionTimeMs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Individual test results', type: [TestResultDto] }),
    __metadata("design:type", Array)
], TestConnectionResponseDto.prototype, "testResults", void 0);
//# sourceMappingURL=provider.rest.js.map