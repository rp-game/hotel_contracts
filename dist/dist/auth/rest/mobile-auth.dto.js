"use strict";
/**
 * Mobile Auth Contract DTOs
 * @description Types for staff mobile authentication endpoints
 * @usage Used by API Gateway (REST) for mobile auth flows
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
exports.MobileAuthResponseDto = exports.AvailableHotelDto = exports.MobileAuthUserDto = exports.StaffHotelInfo = exports.SystemLoginDto = exports.SelectHotelDto = exports.LinkZaloAccountDto = exports.ZaloAuthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Zalo OAuth Authentication Request
 * @usage POST /api/staff/auth/zalo
 */
class ZaloAuthDto {
    code;
    accessToken;
    zaloUserId;
    name;
    phone;
    avatar;
}
exports.ZaloAuthDto = ZaloAuthDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zalo authorization code' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ZaloAuthDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zalo access token' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ZaloAuthDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zalo user ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ZaloAuthDto.prototype, "zaloUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User name from Zalo' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ZaloAuthDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Phone number from Zalo' }),
    (0, class_validator_1.IsPhoneNumber)('VN'),
    __metadata("design:type", String)
], ZaloAuthDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Avatar URL from Zalo' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ZaloAuthDto.prototype, "avatar", void 0);
/**
 * Link Zalo Account Request
 * @usage POST /api/staff/link-zalo-account
 */
class LinkZaloAccountDto {
    zaloUserId;
    zaloPhone;
    zaloName;
    staffEmployeeId;
    linkingCode;
    zaloAvatar;
}
exports.LinkZaloAccountDto = LinkZaloAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zalo user ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LinkZaloAccountDto.prototype, "zaloUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zalo phone number' }),
    (0, class_validator_1.IsPhoneNumber)('VN'),
    __metadata("design:type", String)
], LinkZaloAccountDto.prototype, "zaloPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zalo user name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LinkZaloAccountDto.prototype, "zaloName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff employee ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LinkZaloAccountDto.prototype, "staffEmployeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Admin generated linking code' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LinkZaloAccountDto.prototype, "linkingCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Zalo avatar URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LinkZaloAccountDto.prototype, "zaloAvatar", void 0);
/**
 * Select Hotel for Session
 * @usage POST /api/staff/select-hotel
 */
class SelectHotelDto {
    hotelId;
    tenantId;
}
exports.SelectHotelDto = SelectHotelDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID to select for current session' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SelectHotelDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SelectHotelDto.prototype, "tenantId", void 0);
/**
 * System Login Request (email/password)
 * @usage POST /api/staff/auth/system-login
 */
class SystemLoginDto {
    email;
    password;
    hotelId;
    tenantId;
}
exports.SystemLoginDto = SystemLoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff email address' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SystemLoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SystemLoginDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Specific hotel ID to login to' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SystemLoginDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Specific tenant ID to login to' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SystemLoginDto.prototype, "tenantId", void 0);
/**
 * Staff Hotel Info — response for accessible hotels
 * @usage GET /api/staff/hotels
 */
class StaffHotelInfo {
    id;
    name;
    address;
    tenantId;
    role;
    isDefault;
}
exports.StaffHotelInfo = StaffHotelInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StaffHotelInfo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel name' }),
    __metadata("design:type", String)
], StaffHotelInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel address' }),
    __metadata("design:type", String)
], StaffHotelInfo.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], StaffHotelInfo.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff role at this hotel' }),
    __metadata("design:type", String)
], StaffHotelInfo.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether this is the default hotel for staff' }),
    __metadata("design:type", Boolean)
], StaffHotelInfo.prototype, "isDefault", void 0);
/**
 * Extracted user object from auth response
 */
class MobileAuthUserDto {
    id;
    name;
    email;
    phone;
    roles;
    tenantId;
    hotelId;
    avatar;
}
exports.MobileAuthUserDto = MobileAuthUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], MobileAuthUserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User name' }),
    __metadata("design:type", String)
], MobileAuthUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User email' }),
    __metadata("design:type", String)
], MobileAuthUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User phone' }),
    __metadata("design:type", String)
], MobileAuthUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User roles', type: [String] }),
    __metadata("design:type", Array)
], MobileAuthUserDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], MobileAuthUserDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], MobileAuthUserDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Avatar URL' }),
    __metadata("design:type", String)
], MobileAuthUserDto.prototype, "avatar", void 0);
/**
 * Available hotel in auth response
 */
class AvailableHotelDto {
    id;
    name;
    address;
    tenantId;
}
exports.AvailableHotelDto = AvailableHotelDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], AvailableHotelDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel name' }),
    __metadata("design:type", String)
], AvailableHotelDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel address' }),
    __metadata("design:type", String)
], AvailableHotelDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], AvailableHotelDto.prototype, "tenantId", void 0);
/**
 * Mobile Auth Response
 * @usage Response from POST /api/staff/auth/zalo, POST /api/staff/auth/system-login
 */
class MobileAuthResponseDto {
    accessToken;
    refreshToken;
    user;
    availableHotels;
}
exports.MobileAuthResponseDto = MobileAuthResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'JWT access token' }),
    __metadata("design:type", String)
], MobileAuthResponseDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'JWT refresh token' }),
    __metadata("design:type", String)
], MobileAuthResponseDto.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User information', type: MobileAuthUserDto }),
    __metadata("design:type", MobileAuthUserDto)
], MobileAuthResponseDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Available hotels for staff', type: [AvailableHotelDto] }),
    __metadata("design:type", Array)
], MobileAuthResponseDto.prototype, "availableHotels", void 0);
//# sourceMappingURL=mobile-auth.dto.js.map