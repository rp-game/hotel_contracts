"use strict";
/**
 * Inventory Domain Types
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
exports.Room = exports.RoomType = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../enums");
/**
 * Room Type entity
 *
 * Note: basePrice is string because PostgreSQL decimal type is returned as string by TypeORM
 * to avoid precision loss. Frontend should parse to number if needed for calculations.
 */
class RoomType {
    id;
    tenantId;
    hotelId;
    name;
    description;
    capacity;
    numberOfBeds;
    basePrice;
    images;
    amenities;
    features;
    isActive;
    createdAt;
    updatedAt;
}
exports.RoomType = RoomType;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], RoomType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], RoomType.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], RoomType.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], RoomType.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type description', required: false }),
    __metadata("design:type", String)
], RoomType.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum occupancy capacity' }),
    __metadata("design:type", Number)
], RoomType.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of beds in this room type' }),
    __metadata("design:type", Number)
], RoomType.prototype, "numberOfBeds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base price per night (returned as string from PostgreSQL decimal to preserve precision)',
        type: String,
        example: '1000000.00'
    }),
    __metadata("design:type", String)
], RoomType.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room type images',
        type: [String],
        required: false,
        nullable: true
    }),
    __metadata("design:type", Object)
], RoomType.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room amenities',
        type: [String],
        required: false,
        nullable: true
    }),
    __metadata("design:type", Object)
], RoomType.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room feature tags (e.g., ["Non-smoking", "City View"])',
        type: [String],
        required: false,
        nullable: true
    }),
    __metadata("design:type", Object)
], RoomType.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the room type is active', required: false }),
    __metadata("design:type", Boolean)
], RoomType.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ISO format)' }),
    __metadata("design:type", String)
], RoomType.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (ISO format)' }),
    __metadata("design:type", String)
], RoomType.prototype, "updatedAt", void 0);
/**
 * Individual Room entity
 */
class Room {
    id;
    tenantId;
    hotelId;
    roomNumber;
    roomTypeId;
    roomTypeName;
    floor;
    status;
    currentStatus;
    lastCleanedAt;
    features;
    notes;
    createdAt;
    updatedAt;
    // Optional fields from associated RoomType (populated in API responses)
    capacity;
    price;
    numberOfBeds;
    amenities;
    // Booking statistics (populated on demand)
    bookingCount;
}
exports.Room = Room;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], Room.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], Room.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], Room.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    __metadata("design:type", String)
], Room.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], Room.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], Room.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Floor number' }),
    __metadata("design:type", Number)
], Room.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room status', enum: enums_1.RoomStatus }),
    __metadata("design:type", String)
], Room.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'String representation of status (may differ from enum)',
        required: false
    }),
    __metadata("design:type", String)
], Room.prototype, "currentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last cleaned timestamp (ISO format)',
        required: false
    }),
    __metadata("design:type", String)
], Room.prototype, "lastCleanedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room-specific features (JSONB)',
        required: false
    }),
    __metadata("design:type", Object)
], Room.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Operational notes about the room',
        required: false
    }),
    __metadata("design:type", String)
], Room.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ISO format)' }),
    __metadata("design:type", String)
], Room.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (ISO format)' }),
    __metadata("design:type", String)
], Room.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room capacity (from RoomType)',
        required: false
    }),
    __metadata("design:type", Number)
], Room.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room price (from RoomType)',
        required: false
    }),
    __metadata("design:type", Number)
], Room.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of beds (from RoomType)',
        required: false
    }),
    __metadata("design:type", Number)
], Room.prototype, "numberOfBeds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room amenities (from RoomType)',
        type: [String],
        required: false
    }),
    __metadata("design:type", Array)
], Room.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of bookings for this room',
        required: false
    }),
    __metadata("design:type", Number)
], Room.prototype, "bookingCount", void 0);
//# sourceMappingURL=room.types.js.map