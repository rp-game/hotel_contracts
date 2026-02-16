"use strict";
/**
 * Service Bookings NATS Contracts
 *
 * Unified contracts for both NATS messages and REST DTOs
 * Matches database entity structure (camelCase)
 *
 * Pattern: additional-services.booking.*
 * Handler: financial-service
 * Database Entity: ServiceBooking (service_bookings table)
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
exports.FinancialServiceStatsResponseDto = exports.DeleteServiceBookingRequestDto = exports.UpdateFinancialServiceBookingRequestDto = exports.FindOneServiceBookingRequestDto = exports.FindAllServiceBookingsRequestDto = exports.FinancialServiceBookingListResponseDto = exports.UpdateFinancialServiceBookingDto = exports.CreateFinancialServiceBookingDto = exports.ServiceBookingResponseDto = exports.FinancialServiceBookingStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Financial Service Booking Status Enum
 */
var FinancialServiceBookingStatus;
(function (FinancialServiceBookingStatus) {
    FinancialServiceBookingStatus["PENDING"] = "PENDING";
    FinancialServiceBookingStatus["CONFIRMED"] = "CONFIRMED";
    FinancialServiceBookingStatus["IN_PROGRESS"] = "IN_PROGRESS";
    FinancialServiceBookingStatus["COMPLETED"] = "COMPLETED";
    FinancialServiceBookingStatus["CANCELLED"] = "CANCELLED";
})(FinancialServiceBookingStatus || (exports.FinancialServiceBookingStatus = FinancialServiceBookingStatus = {}));
/**
 * Service Booking Response DTO
 * Used in both NATS responses and REST API responses
 * Matches ServiceBooking entity structure
 */
class ServiceBookingResponseDto {
    id;
    tenantId;
    hotelId;
    serviceId;
    // NOTE: Removed 'service' property to avoid circular dependency with AdditionalServiceResponseDto
    // Use serviceId to fetch service details if needed
    customerName;
    customerEmail;
    customerPhone;
    bookingId;
    roomNumber;
    serviceDate;
    quantity;
    unitPrice;
    totalAmount;
    status;
    notes;
    createdAt;
    updatedAt;
}
exports.ServiceBookingResponseDto = ServiceBookingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer email' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related booking ID (if booking-related)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", Object)
], ServiceBookingResponseDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number (if applicable)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], ServiceBookingResponseDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service date (ISO 8601 date)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "serviceDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity booked' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ServiceBookingResponseDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ServiceBookingResponseDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ServiceBookingResponseDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking status', enum: FinancialServiceBookingStatus }),
    (0, class_validator_1.IsEnum)(FinancialServiceBookingStatus),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], ServiceBookingResponseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at timestamp' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at timestamp' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ServiceBookingResponseDto.prototype, "updatedAt", void 0);
/**
 * Create Financial Service Booking DTO
 */
class CreateFinancialServiceBookingDto {
    tenantId;
    hotelId;
    serviceId;
    customerName;
    customerEmail;
    customerPhone;
    bookingId;
    roomNumber;
    serviceDate;
    quantity;
    unitPrice;
    totalAmount;
    status;
    notes;
}
exports.CreateFinancialServiceBookingDto = CreateFinancialServiceBookingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer email' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related booking ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service date (ISO 8601 date)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "serviceDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity to book' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateFinancialServiceBookingDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateFinancialServiceBookingDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateFinancialServiceBookingDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Initial status', enum: FinancialServiceBookingStatus, default: FinancialServiceBookingStatus.PENDING }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(FinancialServiceBookingStatus),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFinancialServiceBookingDto.prototype, "notes", void 0);
/**
 * Update Financial Service Booking DTO
 */
class UpdateFinancialServiceBookingDto {
    customerName;
    customerEmail;
    customerPhone;
    roomNumber;
    serviceDate;
    quantity;
    unitPrice;
    totalAmount;
    status;
    notes;
}
exports.UpdateFinancialServiceBookingDto = UpdateFinancialServiceBookingDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFinancialServiceBookingDto.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer email' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateFinancialServiceBookingDto.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFinancialServiceBookingDto.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFinancialServiceBookingDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service date (ISO 8601 date)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateFinancialServiceBookingDto.prototype, "serviceDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quantity' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateFinancialServiceBookingDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Unit price' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateFinancialServiceBookingDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total amount' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateFinancialServiceBookingDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking status', enum: FinancialServiceBookingStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(FinancialServiceBookingStatus),
    __metadata("design:type", String)
], UpdateFinancialServiceBookingDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFinancialServiceBookingDto.prototype, "notes", void 0);
/**
 * Service Booking List Response DTO
 */
class FinancialServiceBookingListResponseDto {
    data;
    total;
    page;
    limit;
}
exports.FinancialServiceBookingListResponseDto = FinancialServiceBookingListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of bookings', type: [ServiceBookingResponseDto] }),
    __metadata("design:type", Array)
], FinancialServiceBookingListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of bookings' }),
    __metadata("design:type", Number)
], FinancialServiceBookingListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], FinancialServiceBookingListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], FinancialServiceBookingListResponseDto.prototype, "limit", void 0);
/**
 * Find All Service Bookings Request DTO
 */
/**
 * Find All Service Bookings Request DTO
 * Used for findAll, findByCustomer, findByStatus queries
 */
class FindAllServiceBookingsRequestDto {
    tenantId;
    hotelId;
    serviceId;
    customerId;
    bookingId;
    status;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindAllServiceBookingsRequestDto = FindAllServiceBookingsRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllServiceBookingsRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllServiceBookingsRequestDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by service ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllServiceBookingsRequestDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by customer ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllServiceBookingsRequestDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by booking ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllServiceBookingsRequestDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status', enum: FinancialServiceBookingStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(FinancialServiceBookingStatus),
    __metadata("design:type", String)
], FindAllServiceBookingsRequestDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by service date from (ISO 8601 date)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindAllServiceBookingsRequestDto.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by service date to (ISO 8601 date)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindAllServiceBookingsRequestDto.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindAllServiceBookingsRequestDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindAllServiceBookingsRequestDto.prototype, "limit", void 0);
/**
 * Find One Service Booking Request DTO
 */
class FindOneServiceBookingRequestDto {
    id;
    tenantId;
    hotelId;
}
exports.FindOneServiceBookingRequestDto = FindOneServiceBookingRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneServiceBookingRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneServiceBookingRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneServiceBookingRequestDto.prototype, "hotelId", void 0);
/**
 * Update Service Booking Request DTO (for NATS)
 * Combines routing info (id, tenantId, hotelId) with update fields
 */
class UpdateFinancialServiceBookingRequestDto extends UpdateFinancialServiceBookingDto {
    id;
    tenantId;
    hotelId;
}
exports.UpdateFinancialServiceBookingRequestDto = UpdateFinancialServiceBookingRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateFinancialServiceBookingRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateFinancialServiceBookingRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateFinancialServiceBookingRequestDto.prototype, "hotelId", void 0);
/**
 * Delete Service Booking Request DTO
 */
class DeleteServiceBookingRequestDto {
    id;
    tenantId;
    hotelId;
}
exports.DeleteServiceBookingRequestDto = DeleteServiceBookingRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteServiceBookingRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteServiceBookingRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteServiceBookingRequestDto.prototype, "hotelId", void 0);
/**
 * Financial Service Stats Response DTO
 */
class FinancialServiceStatsResponseDto {
    totalServices;
    activeServices;
    totalBookings;
    totalRevenue;
    revenueByCategory;
    popularServices;
}
exports.FinancialServiceStatsResponseDto = FinancialServiceStatsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of services' }),
    __metadata("design:type", Number)
], FinancialServiceStatsResponseDto.prototype, "totalServices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active services count' }),
    __metadata("design:type", Number)
], FinancialServiceStatsResponseDto.prototype, "activeServices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total bookings count' }),
    __metadata("design:type", Number)
], FinancialServiceStatsResponseDto.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue' }),
    __metadata("design:type", Number)
], FinancialServiceStatsResponseDto.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Revenue by category' }),
    __metadata("design:type", Object)
], FinancialServiceStatsResponseDto.prototype, "revenueByCategory", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Popular services' }),
    __metadata("design:type", Array)
], FinancialServiceStatsResponseDto.prototype, "popularServices", void 0);
//# sourceMappingURL=service-bookings.nats.js.map