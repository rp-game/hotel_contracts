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
exports.BookingResponseDto = exports.FolioItemDto = exports.BookingServiceResponseDto = exports.BookingPaymentResponseDto = exports.BookingGuestResponseDto = exports.BookingRoomResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const booking_enum_1 = require("../enums/booking.enum");
const pricing_breakdown_dto_1 = require("./pricing-breakdown.dto");
class BookingRoomResponseDto {
    id;
    roomTypeId;
    roomTypeName;
    roomId;
    roomNumber;
    pricePerUnit;
    totalPrice;
    discountAmount;
    taxAmount;
    grossAmount;
    taxBreakdown;
    adultCount;
    childCount;
}
exports.BookingRoomResponseDto = BookingRoomResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], BookingRoomResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], BookingRoomResponseDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], BookingRoomResponseDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room ID' }),
    __metadata("design:type", String)
], BookingRoomResponseDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    __metadata("design:type", String)
], BookingRoomResponseDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price per unit' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "pricePerUnit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total price' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount amount' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "discountAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax amount for this room' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "taxAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gross amount (totalPrice + taxAmount)' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "grossAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax breakdown snapshot' }),
    __metadata("design:type", Object)
], BookingRoomResponseDto.prototype, "taxBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adult count' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Child count' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "childCount", void 0);
class BookingGuestResponseDto {
    id;
    isMainGuest;
    fullName;
    email;
    phone;
    idType;
    idNumber;
    nationality;
}
exports.BookingGuestResponseDto = BookingGuestResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest ID' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is main guest' }),
    __metadata("design:type", Boolean)
], BookingGuestResponseDto.prototype, "isMainGuest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email address' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID type' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "idType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID number' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "idNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nationality' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "nationality", void 0);
class BookingPaymentResponseDto {
    id;
    amount;
    paymentMethod;
    paymentStatus;
    paymentDate;
    transactionId;
    createdBy;
    payerName;
    notes;
}
exports.BookingPaymentResponseDto = BookingPaymentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment ID' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment amount' }),
    __metadata("design:type", Number)
], BookingPaymentResponseDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment status' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment date' }),
    __metadata("design:type", Date)
], BookingPaymentResponseDto.prototype, "paymentDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Transaction ID' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID who collected/created the payment' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payer name' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "payerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment notes' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "notes", void 0);
class BookingServiceResponseDto {
    id;
    serviceId;
    category;
    serviceName;
    quantity;
    price;
    totalPrice;
    taxRate;
    serviceChargeRate;
    taxAmount;
    grossAmount;
    serviceDate;
    isPaid;
}
exports.BookingServiceResponseDto = BookingServiceResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID' }),
    __metadata("design:type", String)
], BookingServiceResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service ID reference (null for ad-hoc charges)' }),
    __metadata("design:type", Object)
], BookingServiceResponseDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service category (e.g. ROOM_EXTENSION, EARLY_CHECKIN)' }),
    __metadata("design:type", Object)
], BookingServiceResponseDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service name' }),
    __metadata("design:type", String)
], BookingServiceResponseDto.prototype, "serviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity' }),
    __metadata("design:type", Number)
], BookingServiceResponseDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price (net, pre-tax)' }),
    __metadata("design:type", Number)
], BookingServiceResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Line total (net, pre-tax) = quantity × price' }),
    __metadata("design:type", Number)
], BookingServiceResponseDto.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'VAT rate (%) applied at creation time' }),
    __metadata("design:type", Number)
], BookingServiceResponseDto.prototype, "taxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service charge rate (%) applied at creation time' }),
    __metadata("design:type", Number)
], BookingServiceResponseDto.prototype, "serviceChargeRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax amount (SC + VAT) for this line' }),
    __metadata("design:type", Number)
], BookingServiceResponseDto.prototype, "taxAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gross amount = totalPrice + taxAmount' }),
    __metadata("design:type", Number)
], BookingServiceResponseDto.prototype, "grossAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service date' }),
    __metadata("design:type", Date)
], BookingServiceResponseDto.prototype, "serviceDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is paid' }),
    __metadata("design:type", Boolean)
], BookingServiceResponseDto.prototype, "isPaid", void 0);
class FolioItemDto {
    type;
    description;
    quantity;
    unitPrice;
    totalPrice;
    taxRate;
    taxAmount;
    netAmount;
    date;
    referenceId;
}
exports.FolioItemDto = FolioItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Line item type', enum: ['ROOM', 'SERVICE', 'DISCOUNT', 'TAX'] }),
    __metadata("design:type", String)
], FolioItemDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the line item' }),
    __metadata("design:type", String)
], FolioItemDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity' }),
    __metadata("design:type", Number)
], FolioItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price' }),
    __metadata("design:type", Number)
], FolioItemDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total price for this line item' }),
    __metadata("design:type", Number)
], FolioItemDto.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax rate applied' }),
    __metadata("design:type", Number)
], FolioItemDto.prototype, "taxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax amount for this line item' }),
    __metadata("design:type", Number)
], FolioItemDto.prototype, "taxAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Net amount before tax' }),
    __metadata("design:type", Number)
], FolioItemDto.prototype, "netAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date of the charge (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], FolioItemDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reference ID (room ID, service ID, etc.)' }),
    __metadata("design:type", String)
], FolioItemDto.prototype, "referenceId", void 0);
class BookingResponseDto {
    id;
    bookingCode;
    tenantId;
    hotelId;
    guestId;
    // Room assignment (for single room bookings - most common case)
    roomTypeId;
    roomId;
    roomNumber;
    assignmentStatus;
    // Booking information
    status;
    source;
    // Time information
    checkInDate;
    checkOutDate;
    estimatedCheckInTime;
    actualCheckInTime;
    actualCheckOutTime;
    // Payment information
    totalAmount;
    taxAmount;
    grossAmount;
    requiredDeposit;
    paidAmount;
    paymentStatus;
    // Other information
    specialRequests;
    notes;
    // Guest counts
    adultCount;
    childCount;
    // OTA information
    otaBookingId;
    otaBookingReference;
    // Related information
    rooms;
    guests;
    payments;
    services;
    // Folio: server-computed line items breakdown
    folio;
    grandTotal;
    balance;
    pricingBreakdown;
    ratePlanId;
    // Promotion info
    promoCode;
    promotionId;
    promotionDiscount;
    // Group booking info
    groupId;
    groupName;
    groupBlockCode;
    // Travel Agent info
    travelAgentId;
    travelAgentName;
    agentReference;
    // Corporate Account info
    corporateId;
    corporateName;
    salesPersonId;
    salesPersonName;
    // Metadata
    createdAt;
    updatedAt;
    createdBy;
    updatedBy;
}
exports.BookingResponseDto = BookingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID (UUID)' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking reference code' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest/Customer ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "guestId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room assignment status' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "assignmentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking status', enum: booking_enum_1.BookingStatus }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking source', enum: booking_enum_1.BookingSource }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated check-in time' }),
    __metadata("design:type", Date)
], BookingResponseDto.prototype, "estimatedCheckInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual check-in time' }),
    __metadata("design:type", Date)
], BookingResponseDto.prototype, "actualCheckInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual check-out time' }),
    __metadata("design:type", Date)
], BookingResponseDto.prototype, "actualCheckOutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total booking amount' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total tax amount across all rooms' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "taxAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gross total (totalAmount + taxAmount)' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "grossAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Required deposit amount (when rate plan requires DEPOSIT_REQUIRED)' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "requiredDeposit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount already paid' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment status', enum: booking_enum_1.PaymentStatus }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests from guest' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking notes' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of adults' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of children' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "childCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA booking ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "otaBookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA booking reference' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "otaBookingReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking rooms', type: [BookingRoomResponseDto] }),
    __metadata("design:type", Array)
], BookingResponseDto.prototype, "rooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking guests', type: [BookingGuestResponseDto] }),
    __metadata("design:type", Array)
], BookingResponseDto.prototype, "guests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking payments', type: [BookingPaymentResponseDto] }),
    __metadata("design:type", Array)
], BookingResponseDto.prototype, "payments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional services', type: [BookingServiceResponseDto] }),
    __metadata("design:type", Array)
], BookingResponseDto.prototype, "services", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Folio line items (rooms + services + discounts)', type: [FolioItemDto] }),
    __metadata("design:type", Array)
], BookingResponseDto.prototype, "folio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Grand total computed from folio (rooms + services)' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "grandTotal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Outstanding balance (totalAmount - paidAmount)' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pricing breakdown with adjustments, rules, and optional ratePlanSnapshot',
        type: pricing_breakdown_dto_1.PricingBreakdownDto,
    }),
    __metadata("design:type", pricing_breakdown_dto_1.PricingBreakdownDto)
], BookingResponseDto.prototype, "pricingBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate plan ID applied to this booking', format: 'uuid' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applied promotion/voucher code' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "promoCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applied promotion ID' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "promotionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Promotion discount amount' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "promotionDiscount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Group block ID' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "groupId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Group name' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "groupName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Group block code' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "groupBlockCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Travel Agent ID' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "travelAgentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Travel Agent name' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "travelAgentName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Agent reference code from TA' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "agentReference", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Corporate Account ID' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "corporateId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Corporate Account name' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "corporateName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales Person ID' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales Person name' }),
    __metadata("design:type", Object)
], BookingResponseDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created date' }),
    __metadata("design:type", Date)
], BookingResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated date' }),
    __metadata("design:type", Date)
], BookingResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Created by user ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Updated by user ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "updatedBy", void 0);
//# sourceMappingURL=booking-response.dto.js.map