"use strict";
/**
 * Amenities NATS Contracts
 * Patterns: housekeeping.amenities.*
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
exports.AmenitiesListData = exports.Amenity = void 0;
const swagger_1 = require("@nestjs/swagger");
// Note: Dates are strings because they're serialized over NATS
class Amenity {
    id;
    name;
    description;
    category;
    cost;
    estimatedTime;
    isAvailable;
    tenantId;
    hotelId;
    createdAt; // Accept both for compatibility during conversion
    updatedAt; // Accept both for compatibility during conversion
}
exports.Amenity = Amenity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity ID' }),
    __metadata("design:type", String)
], Amenity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity name' }),
    __metadata("design:type", String)
], Amenity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Amenity description' }),
    __metadata("design:type", String)
], Amenity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Amenity category' }),
    __metadata("design:type", String)
], Amenity.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Amenity cost' }),
    __metadata("design:type", Number)
], Amenity.prototype, "cost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated time in minutes' }),
    __metadata("design:type", Number)
], Amenity.prototype, "estimatedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether amenity is available' }),
    __metadata("design:type", Boolean)
], Amenity.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], Amenity.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], Amenity.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp', type: String }),
    __metadata("design:type", Object)
], Amenity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp', type: String }),
    __metadata("design:type", Object)
], Amenity.prototype, "updatedAt", void 0);
class AmenitiesListData {
    data;
    total;
    page;
    limit;
}
exports.AmenitiesListData = AmenitiesListData;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Amenity], description: 'List of amenities' }),
    __metadata("design:type", Array)
], AmenitiesListData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of amenities' }),
    __metadata("design:type", Number)
], AmenitiesListData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], AmenitiesListData.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], AmenitiesListData.prototype, "limit", void 0);
//# sourceMappingURL=amenities.nats.js.map