"use strict";
/**
 * OTA Account Type Definitions
 *
 * Centralized OTA account DTOs for both REST API and NATS messages
 * Handles configuration for multiple OTA (Online Travel Agency) accounts
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
exports.OTAConnectionTestDto = exports.TestOTAConnectionDto = exports.ConfigureOTAAccountDto = exports.OTAAccountConfigurationDto = exports.OTACredentialsDto = exports.OTAName = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * OTA Name Enum
 * Standard names for all supported OTA providers
 */
var OTAName;
(function (OTAName) {
    OTAName["BOOKING_COM"] = "booking_com";
    OTAName["EXPEDIA"] = "expedia";
    OTAName["AGODA"] = "agoda";
    OTAName["AIRBNB"] = "airbnb";
    OTAName["HOTELS_COM"] = "hotels_com";
    OTAName["PRICELINE"] = "priceline";
    OTAName["KAYAK"] = "kayak";
    OTAName["TRIVAGO"] = "trivago";
    OTAName["TRIPADVISOR"] = "tripadvisor";
})(OTAName || (exports.OTAName = OTAName = {}));
/**
 * OTA Credentials DTO
 * Credentials for OTA account authentication
 * Used in OTA account configuration
 */
class OTACredentialsDto {
    username;
    password;
    property_id;
    hotel_id;
    api_key;
    client_id;
}
exports.OTACredentialsDto = OTACredentialsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA username' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OTACredentialsDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA password' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OTACredentialsDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA property ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OTACredentialsDto.prototype, "property_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OTACredentialsDto.prototype, "hotel_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA API key' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OTACredentialsDto.prototype, "api_key", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA client ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OTACredentialsDto.prototype, "client_id", void 0);
/**
 * OTA Account Configuration DTO
 * Represents a single OTA account configuration
 * Returned by API Gateway endpoints
 * Used for both REST API responses and NATS messages
 */
class OTAAccountConfigurationDto {
    ota_name;
    provider_id;
    tenant_id;
    hotel_id;
    enabled;
    credentials;
    last_verified;
    ota_config;
}
exports.OTAAccountConfigurationDto = OTAAccountConfigurationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTA name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OTAAccountConfigurationDto.prototype, "ota_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], OTAAccountConfigurationDto.prototype, "provider_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], OTAAccountConfigurationDto.prototype, "tenant_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], OTAAccountConfigurationDto.prototype, "hotel_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether OTA account is enabled' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], OTAAccountConfigurationDto.prototype, "enabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTA credentials', type: OTACredentialsDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OTACredentialsDto),
    __metadata("design:type", OTACredentialsDto)
], OTAAccountConfigurationDto.prototype, "credentials", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last verification timestamp' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OTAAccountConfigurationDto.prototype, "last_verified", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional OTA-specific configuration' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], OTAAccountConfigurationDto.prototype, "ota_config", void 0);
/**
 * Configure OTA Account DTO
 * Request DTO for configuring OTA account
 * Used by API Gateway PUT /ota-accounts/:otaName endpoint
 */
class ConfigureOTAAccountDto {
    provider_id;
    tenant_id;
    hotel_id;
    enabled;
    credentials;
    ota_config;
}
exports.ConfigureOTAAccountDto = ConfigureOTAAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ConfigureOTAAccountDto.prototype, "provider_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ConfigureOTAAccountDto.prototype, "tenant_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ConfigureOTAAccountDto.prototype, "hotel_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether to enable the OTA account' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfigureOTAAccountDto.prototype, "enabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTA credentials', type: OTACredentialsDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OTACredentialsDto),
    __metadata("design:type", OTACredentialsDto)
], ConfigureOTAAccountDto.prototype, "credentials", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional OTA-specific configuration' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ConfigureOTAAccountDto.prototype, "ota_config", void 0);
/**
 * Test OTA Connection DTO
 * Request DTO for testing OTA connection
 * Used by API Gateway POST /ota-accounts/:otaName/test endpoint
 */
class TestOTAConnectionDto {
    provider_id;
    tenant_id;
    hotel_id;
}
exports.TestOTAConnectionDto = TestOTAConnectionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TestOTAConnectionDto.prototype, "provider_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TestOTAConnectionDto.prototype, "tenant_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TestOTAConnectionDto.prototype, "hotel_id", void 0);
/**
 * OTA Connection Test DTO
 * Response DTO for OTA connection test results
 * Returned by API Gateway test endpoint
 */
class OTAConnectionTestDto {
    connected;
    last_verified;
    error;
    response_time;
    test_details;
}
exports.OTAConnectionTestDto = OTAConnectionTestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Connection test success status' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], OTAConnectionTestDto.prototype, "connected", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last verification timestamp' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OTAConnectionTestDto.prototype, "last_verified", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Error message if connection failed' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OTAConnectionTestDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Response time in milliseconds' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], OTAConnectionTestDto.prototype, "response_time", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional test details' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], OTAConnectionTestDto.prototype, "test_details", void 0);
//# sourceMappingURL=ota-accounts.types.js.map