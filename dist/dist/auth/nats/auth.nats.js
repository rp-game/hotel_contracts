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
exports.ValidationNatsResponse = exports.LoginNatsResponse = exports.ResetPasswordNatsRequest = exports.ChangePasswordNatsRequest = exports.CheckPermissionNatsRequest = exports.LogoutNatsRequest = exports.RefreshTokenNatsRequest = exports.CreateUserCredentialsNatsRequest = exports.LoginNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_nats_1 = require("../../user/nats/user.nats");
// ============= NATS Request DTOs =============
class LoginNatsRequest {
    email;
    password;
    ipAddress;
    userAgent;
}
exports.LoginNatsRequest = LoginNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address', example: 'john.doe@example.com' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginNatsRequest.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password', example: 'StrongP@ssw0rd', minLength: 8, maxLength: 100 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 100),
    __metadata("design:type", String)
], LoginNatsRequest.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Client IP address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginNatsRequest.prototype, "ipAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Client User-Agent' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginNatsRequest.prototype, "userAgent", void 0);
class CreateUserCredentialsNatsRequest {
    userId;
    email;
    hashedPassword;
    emailVerified;
}
exports.CreateUserCredentialsNatsRequest = CreateUserCredentialsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID from user-service' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserCredentialsNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserCredentialsNatsRequest.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hashed password' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserCredentialsNatsRequest.prototype, "hashedPassword", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether email is verified', default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateUserCredentialsNatsRequest.prototype, "emailVerified", void 0);
class RefreshTokenNatsRequest {
    refreshToken;
}
exports.RefreshTokenNatsRequest = RefreshTokenNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Refresh token' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RefreshTokenNatsRequest.prototype, "refreshToken", void 0);
class LogoutNatsRequest {
    refreshToken;
}
exports.LogoutNatsRequest = LogoutNatsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Refresh token to revoke' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LogoutNatsRequest.prototype, "refreshToken", void 0);
class CheckPermissionNatsRequest {
    userId;
    resource;
    action;
    tenantId;
    hotelId;
}
exports.CheckPermissionNatsRequest = CheckPermissionNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckPermissionNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Resource to check' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckPermissionNatsRequest.prototype, "resource", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action to check' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckPermissionNatsRequest.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckPermissionNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckPermissionNatsRequest.prototype, "hotelId", void 0);
class ChangePasswordNatsRequest {
    userId;
    currentPassword;
    newPassword;
}
exports.ChangePasswordNatsRequest = ChangePasswordNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current password' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordNatsRequest.prototype, "currentPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New password' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 100),
    __metadata("design:type", String)
], ChangePasswordNatsRequest.prototype, "newPassword", void 0);
class ResetPasswordNatsRequest {
    email;
}
exports.ResetPasswordNatsRequest = ResetPasswordNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ResetPasswordNatsRequest.prototype, "email", void 0);
// ============= NATS Response DTOs =============
class LoginNatsResponse {
    accessToken;
    refreshToken;
    tokenType;
    expiresIn;
    user;
}
exports.LoginNatsResponse = LoginNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'JWT access token' }),
    __metadata("design:type", String)
], LoginNatsResponse.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'JWT refresh token' }),
    __metadata("design:type", String)
], LoginNatsResponse.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Token type', example: 'Bearer' }),
    __metadata("design:type", String)
], LoginNatsResponse.prototype, "tokenType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expiration in seconds' }),
    __metadata("design:type", Number)
], LoginNatsResponse.prototype, "expiresIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User info', type: () => user_nats_1.UserResponseDto }),
    __metadata("design:type", user_nats_1.UserResponseDto)
], LoginNatsResponse.prototype, "user", void 0);
class ValidationNatsResponse {
    isValid;
    userId;
    permissions;
    tenantId;
    hotelId;
}
exports.ValidationNatsResponse = ValidationNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Permission validation result' }),
    __metadata("design:type", Boolean)
], ValidationNatsResponse.prototype, "isValid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], ValidationNatsResponse.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User permissions', type: [String] }),
    __metadata("design:type", Array)
], ValidationNatsResponse.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ValidationNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ValidationNatsResponse.prototype, "hotelId", void 0);
//# sourceMappingURL=auth.nats.js.map