"use strict";
/**
 * Room Type NATS Contracts
 *
 * Patterns:
 * - inventory.roomTypes.findAll
 * - inventory.roomTypes.findOne
 * - inventory.roomTypes.create
 * - inventory.roomTypes.update
 * - inventory.roomTypes.delete
 * - inventory.room-types.get-by-ids
 *
 * Handler: inventory-service
 * Called by: api-gateway, pricing-service
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
exports.UpdateRoomTypeRequest = exports.CreateRoomTypeRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Create Room Type Request
 * Pattern: inventory.roomTypes.create
 */
class CreateRoomTypeRequest {
    tenantId;
    hotelId;
    name;
    description;
    baseRate;
    capacity;
    numberOfBeds;
    maxOccupancy;
    amenities;
    features;
    size;
    category;
    images;
}
exports.CreateRoomTypeRequest = CreateRoomTypeRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRoomTypeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRoomTypeRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoomTypeRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoomTypeRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate per night' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomTypeRequest.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum capacity' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateRoomTypeRequest.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of beds in this room type (default 1)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateRoomTypeRequest.prototype, "numberOfBeds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum occupancy (alias for capacity)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateRoomTypeRequest.prototype, "maxOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Standard amenities' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateRoomTypeRequest.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room feature tags (e.g., ["Non-smoking", "City View"])' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateRoomTypeRequest.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room size in square meters' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomTypeRequest.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room category (e.g., "Premium", "Standard")' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoomTypeRequest.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type images/photos' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateRoomTypeRequest.prototype, "images", void 0);
/**
 * Update Room Type Request
 * Pattern: inventory.roomTypes.update
 */
class UpdateRoomTypeRequest {
    id;
    tenantId;
    hotelId;
    name;
    description;
    baseRate;
    capacity;
    numberOfBeds;
    maxOccupancy;
    amenities;
    features;
    size;
    category;
    images;
    isActive;
}
exports.UpdateRoomTypeRequest = UpdateRoomTypeRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateRoomTypeRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateRoomTypeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateRoomTypeRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRoomTypeRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRoomTypeRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Base rate per night' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateRoomTypeRequest.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum capacity' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateRoomTypeRequest.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of beds in this room type (default 1)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateRoomTypeRequest.prototype, "numberOfBeds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum occupancy (alias for capacity)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateRoomTypeRequest.prototype, "maxOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Standard amenities' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateRoomTypeRequest.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room feature tags (e.g., ["Non-smoking", "City View"])' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateRoomTypeRequest.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room size in square meters' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateRoomTypeRequest.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room category (e.g., "Premium", "Standard")' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRoomTypeRequest.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type images/photos' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateRoomTypeRequest.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether the room type is active' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateRoomTypeRequest.prototype, "isActive", void 0);
//# sourceMappingURL=room-type.nats.js.map