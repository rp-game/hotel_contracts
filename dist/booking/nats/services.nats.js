"use strict";
/**
 * Booking Services NATS Contracts
 *
 * Patterns:
 * - services.find_all
 * - services.find_one
 * - services.create
 * - services.update
 * - services.remove
 * - services.stats
 * - services.check_availability
 *
 * Handler: booking-service (ServiceBookingController)
 * Called by: api-gateway (GuestServicesController)
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
exports.BookingServiceStatsData = exports.FindAllServicesData = exports.CreateServiceNatsRequest = exports.BookingServiceNatsResponse = exports.BookingServiceStatus = exports.ServiceCategory = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Service Category Enum
 */
var ServiceCategory;
(function (ServiceCategory) {
    ServiceCategory["SPA"] = "SPA";
    ServiceCategory["FITNESS"] = "FITNESS";
    ServiceCategory["DINING"] = "DINING";
    ServiceCategory["ENTERTAINMENT"] = "ENTERTAINMENT";
    ServiceCategory["TRANSPORT"] = "TRANSPORT";
    ServiceCategory["BUSINESS"] = "BUSINESS";
    ServiceCategory["WELLNESS"] = "WELLNESS";
    ServiceCategory["TOURS"] = "TOURS";
    ServiceCategory["OTHER"] = "OTHER";
})(ServiceCategory || (exports.ServiceCategory = ServiceCategory = {}));
/**
 * Booking Service Status Enum
 */
var BookingServiceStatus;
(function (BookingServiceStatus) {
    BookingServiceStatus["ACTIVE"] = "ACTIVE";
    BookingServiceStatus["INACTIVE"] = "INACTIVE";
    BookingServiceStatus["ARCHIVED"] = "ARCHIVED";
})(BookingServiceStatus || (exports.BookingServiceStatus = BookingServiceStatus = {}));
/**
 * Booking Service Response (matches Service entity)
 */
class BookingServiceNatsResponse {
    id;
    tenantId;
    hotelId;
    // Core Fields
    name;
    description;
    category;
    status;
    // Pricing
    basePrice;
    currency;
    // Timing & Capacity
    durationMinutes;
    maxCapacity;
    advanceBookingHours;
    cancellationHours;
    // Requirements & Availability
    requiresApproval;
    availableDays;
    operatingHours;
    location;
    staffRequired;
    // Additional Details
    equipmentNeeded;
    specialInstructions;
    // Timestamps
    createdAt;
    updatedAt;
}
exports.BookingServiceNatsResponse = BookingServiceNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID' }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service name' }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service description' }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service category', enum: ServiceCategory }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service status', enum: BookingServiceStatus }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base price (decimal 10,2)' }),
    __metadata("design:type", Number)
], BookingServiceNatsResponse.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', default: 'USD' }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duration in minutes', default: 60 }),
    __metadata("design:type", Number)
], BookingServiceNatsResponse.prototype, "durationMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum capacity', default: 1 }),
    __metadata("design:type", Number)
], BookingServiceNatsResponse.prototype, "maxCapacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Advance booking hours required', default: 24 }),
    __metadata("design:type", Number)
], BookingServiceNatsResponse.prototype, "advanceBookingHours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cancellation hours before service', default: 2 }),
    __metadata("design:type", Number)
], BookingServiceNatsResponse.prototype, "cancellationHours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether service requires approval' }),
    __metadata("design:type", Boolean)
], BookingServiceNatsResponse.prototype, "requiresApproval", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Available days (0-6 for Sunday-Saturday)', type: [Number] }),
    __metadata("design:type", Array)
], BookingServiceNatsResponse.prototype, "availableDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Operating hours with start and end times (HH:mm format)' }),
    __metadata("design:type", Object)
], BookingServiceNatsResponse.prototype, "operatingHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service location' }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of staff required', default: 1 }),
    __metadata("design:type", Number)
], BookingServiceNatsResponse.prototype, "staffRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Equipment needed for service' }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "equipmentNeeded", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special instructions for staff' }),
    __metadata("design:type", String)
], BookingServiceNatsResponse.prototype, "specialInstructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Object)
], BookingServiceNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Object)
], BookingServiceNatsResponse.prototype, "updatedAt", void 0);
/**
 * Create Service Request
 * Pattern: services.create
 */
class CreateServiceNatsRequest {
    tenantId;
    hotelId;
    name;
    description;
    category;
    basePrice;
    currency;
    durationMinutes;
    maxCapacity;
    advanceBookingHours;
    cancellationHours;
    requiresApproval;
    availableDays;
    operatingHours;
    location;
    staffRequired;
    equipmentNeeded;
    specialInstructions;
    status;
}
exports.CreateServiceNatsRequest = CreateServiceNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateServiceNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CreateServiceNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service name' }),
    __metadata("design:type", String)
], CreateServiceNatsRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service description' }),
    __metadata("design:type", String)
], CreateServiceNatsRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service category', enum: ServiceCategory }),
    __metadata("design:type", String)
], CreateServiceNatsRequest.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base price' }),
    __metadata("design:type", Number)
], CreateServiceNatsRequest.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', default: 'USD' }),
    __metadata("design:type", String)
], CreateServiceNatsRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Duration in minutes', default: 60 }),
    __metadata("design:type", Number)
], CreateServiceNatsRequest.prototype, "durationMinutes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum capacity', default: 1 }),
    __metadata("design:type", Number)
], CreateServiceNatsRequest.prototype, "maxCapacity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Advance booking hours required', default: 24 }),
    __metadata("design:type", Number)
], CreateServiceNatsRequest.prototype, "advanceBookingHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation hours before service', default: 2 }),
    __metadata("design:type", Number)
], CreateServiceNatsRequest.prototype, "cancellationHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether service requires approval', default: false }),
    __metadata("design:type", Boolean)
], CreateServiceNatsRequest.prototype, "requiresApproval", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Available days (0-6 for Sunday-Saturday)', type: [Number] }),
    __metadata("design:type", Array)
], CreateServiceNatsRequest.prototype, "availableDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Operating hours with start and end times (HH:mm format)' }),
    __metadata("design:type", Object)
], CreateServiceNatsRequest.prototype, "operatingHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service location' }),
    __metadata("design:type", String)
], CreateServiceNatsRequest.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of staff required', default: 1 }),
    __metadata("design:type", Number)
], CreateServiceNatsRequest.prototype, "staffRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Equipment needed for service' }),
    __metadata("design:type", String)
], CreateServiceNatsRequest.prototype, "equipmentNeeded", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special instructions for staff' }),
    __metadata("design:type", String)
], CreateServiceNatsRequest.prototype, "specialInstructions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service status', enum: BookingServiceStatus, default: BookingServiceStatus.ACTIVE }),
    __metadata("design:type", String)
], CreateServiceNatsRequest.prototype, "status", void 0);
/**
 * Find All Services Response (paginated)
 */
class FindAllServicesData {
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.FindAllServicesData = FindAllServicesData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of booking services', type: [BookingServiceNatsResponse] }),
    __metadata("design:type", Array)
], FindAllServicesData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of services' }),
    __metadata("design:type", Number)
], FindAllServicesData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], FindAllServicesData.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], FindAllServicesData.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of pages' }),
    __metadata("design:type", Number)
], FindAllServicesData.prototype, "totalPages", void 0);
/**
 * Booking Service Statistics Response
 */
class BookingServiceStatsData {
    totalServices;
    activeServices;
    inactiveServices;
    archivedServices;
    byCategory;
    totalBookings;
    totalRevenue;
    averageRating;
}
exports.BookingServiceStatsData = BookingServiceStatsData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of services' }),
    __metadata("design:type", Number)
], BookingServiceStatsData.prototype, "totalServices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of active services' }),
    __metadata("design:type", Number)
], BookingServiceStatsData.prototype, "activeServices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of inactive services' }),
    __metadata("design:type", Number)
], BookingServiceStatsData.prototype, "inactiveServices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of archived services' }),
    __metadata("design:type", Number)
], BookingServiceStatsData.prototype, "archivedServices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Services count by category' }),
    __metadata("design:type", Object)
], BookingServiceStatsData.prototype, "byCategory", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total number of bookings' }),
    __metadata("design:type", Number)
], BookingServiceStatsData.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total revenue generated' }),
    __metadata("design:type", Number)
], BookingServiceStatsData.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Average service rating' }),
    __metadata("design:type", Number)
], BookingServiceStatsData.prototype, "averageRating", void 0);
//# sourceMappingURL=services.nats.js.map