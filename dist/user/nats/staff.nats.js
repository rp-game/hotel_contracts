"use strict";
/**
 * Staff NATS Message Types
 * All staff-related NATS message payloads and responses
 * Exported from user-service
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
exports.StaffDto = void 0;
const swagger_1 = require("@nestjs/swagger");
// ============= NATS Response DTOs =============
/**
 * Staff DTO
 * Shared between NATS contracts and REST API
 * Single source of truth for staff data structure
 */
class StaffDto {
    id;
    email;
    fullName;
    phoneNumber;
    roles;
    departmentId;
    position;
    staffStatus;
    tenantId;
    hotelId;
    createdAt;
    updatedAt;
}
exports.StaffDto = StaffDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff member ID', type: String }),
    __metadata("design:type", String)
], StaffDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address', type: String }),
    __metadata("design:type", String)
], StaffDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name of staff member', type: String }),
    __metadata("design:type", String)
], StaffDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number', type: String }),
    __metadata("design:type", String)
], StaffDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User roles assigned to staff', type: [String] }),
    __metadata("design:type", Array)
], StaffDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Department ID', type: String }),
    __metadata("design:type", String)
], StaffDto.prototype, "departmentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Position/title', type: String }),
    __metadata("design:type", String)
], StaffDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff status', type: String }),
    __metadata("design:type", String)
], StaffDto.prototype, "staffStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', type: String }),
    __metadata("design:type", String)
], StaffDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID', type: String }),
    __metadata("design:type", String)
], StaffDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Record creation timestamp', type: Date }),
    __metadata("design:type", Date)
], StaffDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Record last update timestamp', type: Date }),
    __metadata("design:type", Date)
], StaffDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=staff.nats.js.map