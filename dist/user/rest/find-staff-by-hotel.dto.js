"use strict";
/**
 * Unified DTO for FindStaffByHotel operations
 * Used for both REST API requests and NATS message payloads
 * Ensures consistency between frontend requests and backend NATS contracts
 *
 * @pattern: Single source of truth for request structure
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
exports.FindStaffByHotelQueryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums");
/**
 * Request DTO for finding staff by hotel
 *
 * Used in:
 * 1. REST API: GET /housekeeping/staff
 * 2. NATS Message: 'users.staff.findByHotel'
 *
 * All fields are optional to allow flexible filtering
 */
class FindStaffByHotelQueryDto {
    hotelId;
    roles;
    status;
    role;
    department;
    /**
     * NATS payload conversion
     * Extracts only fields needed for NATS message
     */
    toNatsPayload() {
        return {
            hotelId: this.hotelId || '',
            ...(this.roles && { roles: this.roles.split(',').map(r => r.trim()) }),
            ...(this.status && { status: this.status }),
        };
    }
}
exports.FindStaffByHotelQueryDto = FindStaffByHotelQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (required for operation)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindStaffByHotelQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Comma-separated list of roles to filter by',
        example: 'HOUSEKEEPING_STAFF,HOUSEKEEPING_MANAGER'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindStaffByHotelQueryDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by staff status',
        enum: enums_1.StaffStatus
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.StaffStatus),
    __metadata("design:type", String)
], FindStaffByHotelQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by staff role' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindStaffByHotelQueryDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by department' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindStaffByHotelQueryDto.prototype, "department", void 0);
//# sourceMappingURL=find-staff-by-hotel.dto.js.map