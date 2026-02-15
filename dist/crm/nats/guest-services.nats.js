"use strict";
/**
 * Guest Services NATS Contracts
 *
 * Patterns:
 * - guest-services.complaints.metrics
 * - guest_services.services.create
 * - guest_services.services.find_all
 * - guest_services.services.find_one
 * - guest_services.services.update
 * - guest_services.services.delete
 * - guest_services.services.stats
 * - guest_services.bookings.create
 * - guest_services.bookings.find_all
 * - guest_services.bookings.find_one
 *
 * Handler: crm-service (GuestServicesController)
 * Called by: api-gateway (CrmController)
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
exports.ServiceBookingListDataDto = exports.FindAllServiceBookingsNatsRequest = exports.ServiceBookingNatsResponse = exports.CreateServiceBookingDto = exports.ServiceBookingStatus = exports.GuestServiceStatus = exports.ServiceType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * Service Type Enum (matches CRM GuestService entity)
 */
var ServiceType;
(function (ServiceType) {
    ServiceType["SPA"] = "SPA";
    ServiceType["RESTAURANT"] = "RESTAURANT";
    ServiceType["ROOM_SERVICE"] = "ROOM_SERVICE";
    ServiceType["LAUNDRY"] = "LAUNDRY";
    ServiceType["TRANSPORTATION"] = "TRANSPORTATION";
    ServiceType["TOUR"] = "TOUR";
    ServiceType["CONCIERGE"] = "CONCIERGE";
    ServiceType["FITNESS"] = "FITNESS";
    ServiceType["BUSINESS_CENTER"] = "BUSINESS_CENTER";
    ServiceType["OTHER"] = "OTHER";
})(ServiceType || (exports.ServiceType = ServiceType = {}));
/**
 * Guest Service Status Enum (matches CRM GuestService entity)
 */
var GuestServiceStatus;
(function (GuestServiceStatus) {
    GuestServiceStatus["ACTIVE"] = "ACTIVE";
    GuestServiceStatus["INACTIVE"] = "INACTIVE";
    GuestServiceStatus["MAINTENANCE"] = "MAINTENANCE";
})(GuestServiceStatus || (exports.GuestServiceStatus = GuestServiceStatus = {}));
/**
 * Booking Status Enum (matches CRM ServiceBooking entity)
 */
var ServiceBookingStatus;
(function (ServiceBookingStatus) {
    ServiceBookingStatus["PENDING"] = "PENDING";
    ServiceBookingStatus["CONFIRMED"] = "CONFIRMED";
    ServiceBookingStatus["COMPLETED"] = "COMPLETED";
    ServiceBookingStatus["CANCELLED"] = "CANCELLED";
    ServiceBookingStatus["NO_SHOW"] = "NO_SHOW";
})(ServiceBookingStatus || (exports.ServiceBookingStatus = ServiceBookingStatus = {}));
/**
 * Create Service Booking DTO
 * Pattern: guest_services.bookings.create
 *
 * Standardized contract used by both REST (API Gateway) and NATS (CRM Service) layers.
 * This class replaces both CreateGuestServiceBookingDto and CreateServiceBookingNatsRequest
 * to ensure field-level consistency across all layers.
 *
 * @standardized 2026-02-11
 * @contract_accuracy PERFECT (Field names unified)
 */
class CreateServiceBookingDto {
    tenantId;
    hotelId;
    serviceId;
    guestId;
    roomBookingId;
    roomNumber;
    bookingDateTime;
    durationMinutes;
    numberOfGuests;
    price;
    currency;
    specialRequests;
    notes;
    confirmationCode;
    paymentStatus;
    staffAssigned;
    status;
}
exports.CreateServiceBookingDto = CreateServiceBookingDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '550e8400-e29b-41d4-a716-446655440001',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Service ID to be booked',
        example: '550e8400-e29b-41d4-a716-446655440002',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Guest/Customer ID who is booking the service',
        example: '550e8400-e29b-41d4-a716-446655440003',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "guestId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room booking ID (if service is for a hotel guest)',
        example: '550e8400-e29b-41d4-a716-446655440004',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "roomBookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room number (if service is for a hotel guest)',
        example: '101',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Booking date and time in ISO 8601 format',
        example: '2026-02-15T14:30:00Z',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "bookingDateTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Duration of the service in minutes',
        example: 60,
    }),
    __metadata("design:type", Number)
], CreateServiceBookingDto.prototype, "durationMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of guests for the service',
        example: 2,
        minimum: 1,
    }),
    __metadata("design:type", Number)
], CreateServiceBookingDto.prototype, "numberOfGuests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Service price (if different from default service price)',
        example: 150.00,
    }),
    __metadata("design:type", Number)
], CreateServiceBookingDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Currency code (ISO 4217)',
        example: 'USD',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Special requests from the guest',
        example: 'Need wheelchair accessible spa room',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Internal notes for staff',
        example: 'VIP guest, prepare welcome amenity',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Confirmation code (auto-generated if not provided)',
        example: 'SPA-2026-001234',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "confirmationCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Payment status',
        example: 'PENDING',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Staff member assigned to this service',
        example: '550e8400-e29b-41d4-a716-446655440005',
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "staffAssigned", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Initial booking status',
        enum: ServiceBookingStatus,
        example: ServiceBookingStatus.PENDING,
    }),
    __metadata("design:type", String)
], CreateServiceBookingDto.prototype, "status", void 0);
/**
 * Service Booking Response (matches CRM ServiceBooking entity)
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @contract_accuracy PERFECT (Converted to class with @ApiProperty)
 */
class ServiceBookingNatsResponse {
    id;
    tenantId;
    hotelId;
    serviceId;
    guestId; // FIXED: Use guestId (frontend expectation) instead of customerId
    serviceName;
    guestName;
    roomBookingId;
    roomNumber;
    roomId;
    bookingId;
    status;
    bookingDateTime; // FIXED: Use bookingDateTime (frontend expectation) instead of bookingDate/serviceDate
    durationMinutes;
    numberOfGuests;
    totalPrice; // FIXED: Use totalPrice (frontend expectation) instead of price
    currency;
    specialRequests;
    notes;
    confirmationCode;
    paymentStatus;
    staffAssigned;
    createdAt; // FIXED: Use string only (not string | Date)
    updatedAt; // FIXED: Use string only (not string | Date)
    createdBy;
    updatedBy;
}
exports.ServiceBookingNatsResponse = ServiceBookingNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest/Customer ID' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "guestId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service name' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "serviceName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest name' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room booking ID' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "roomBookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room ID' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking ID reference' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking status', enum: ServiceBookingStatus }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking date and time' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "bookingDateTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Duration in minutes' }),
    __metadata("design:type", Number)
], ServiceBookingNatsResponse.prototype, "durationMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of guests' }),
    __metadata("design:type", Number)
], ServiceBookingNatsResponse.prototype, "numberOfGuests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total price' }),
    __metadata("design:type", Number)
], ServiceBookingNatsResponse.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal notes' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Confirmation code' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "confirmationCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment status' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned staff ID' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "staffAssigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user ID' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated by user ID' }),
    __metadata("design:type", String)
], ServiceBookingNatsResponse.prototype, "updatedBy", void 0);
/**
 * Find All Bookings Request
 * Pattern: guest_services.bookings.find_all
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
class FindAllServiceBookingsNatsRequest {
    tenantId;
    hotelId;
    guestId; // FIXED: Use guestId (frontend expectation)
    serviceId;
    status;
    serviceType;
    page;
    limit;
}
exports.FindAllServiceBookingsNatsRequest = FindAllServiceBookingsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllServiceBookingsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllServiceBookingsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest ID filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllServiceBookingsNatsRequest.prototype, "guestId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service ID filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllServiceBookingsNatsRequest.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking status filter', enum: ServiceBookingStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(ServiceBookingStatus),
    __metadata("design:type", String)
], FindAllServiceBookingsNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service type filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllServiceBookingsNatsRequest.prototype, "serviceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', minimum: 1, default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FindAllServiceBookingsNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', minimum: 1, maximum: 100, default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], FindAllServiceBookingsNatsRequest.prototype, "limit", void 0);
/**
 * Service Booking List Data
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
class ServiceBookingListDataDto {
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.ServiceBookingListDataDto = ServiceBookingListDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ServiceBookingNatsResponse], description: 'List of service bookings' }),
    __metadata("design:type", Array)
], ServiceBookingListDataDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], ServiceBookingListDataDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], ServiceBookingListDataDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], ServiceBookingListDataDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total pages' }),
    __metadata("design:type", Number)
], ServiceBookingListDataDto.prototype, "totalPages", void 0);
//# sourceMappingURL=guest-services.nats.js.map