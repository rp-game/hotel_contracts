"use strict";
/**
 * Mobile Checkout NATS Contracts
 * Patterns:
 *   - booking.checkout.todayStats - Today's checkout statistics
 *   - booking.checkout.history - Checkout history with pagination
 *   - booking.checkout.search - Search checkouts
 *   - booking.checkout.validateQR - Validate QR code for checkout
 *   - booking.checkout.readyRooms - Rooms ready for checkout
 *   - booking.checkout.items - Get checkout items/charges
 *   - booking.checkout.start - Start checkout process
 *   - booking.checkout.complete - Complete checkout process
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
exports.CompleteCheckoutData = exports.CompleteCheckoutNatsRequest = exports.StartCheckoutData = exports.StartCheckoutNatsRequest = exports.CheckoutItemsData = exports.CheckoutBookingSummary = exports.GetCheckoutItemsNatsRequest = exports.ReadyRoomsData = exports.ReadyRoom = exports.GetReadyRoomsNatsRequest = exports.ValidateQRData = exports.ValidateQRCheckoutData = exports.ValidateCheckoutQRNatsRequest = exports.SearchCheckoutsData = exports.SearchCheckoutsNatsRequest = exports.CheckoutHistoryData = exports.GetCheckoutHistoryNatsRequest = exports.CheckoutStatsData = exports.GetTodayCheckoutStatsNatsRequest = exports.CheckoutDataItem = exports.CheckoutRoomItem = exports.BillItem = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ============= SHARED TYPES =============
class BillItem {
    description;
    quantity;
    unitPrice;
    totalPrice;
    category;
}
exports.BillItem = BillItem;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Item description' }),
    __metadata("design:type", String)
], BillItem.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quantity' }),
    __metadata("design:type", Number)
], BillItem.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Unit price' }),
    __metadata("design:type", String)
], BillItem.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total price' }),
    __metadata("design:type", String)
], BillItem.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Item category', enum: ['ROOM', 'SERVICE', 'TAX', 'DEPOSIT'] }),
    __metadata("design:type", String)
], BillItem.prototype, "category", void 0);
// Matches getBookingByIdSimple() return shape for rooms
class CheckoutRoomItem {
    id;
    roomTypeId;
    roomTypeName;
    roomId;
    roomNumber;
    pricePerNight;
    totalPrice;
    discountAmount;
    adultCount;
    childCount;
}
exports.CheckoutRoomItem = CheckoutRoomItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room record ID' }),
    __metadata("design:type", String)
], CheckoutRoomItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], CheckoutRoomItem.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], CheckoutRoomItem.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Physical room ID' }),
    __metadata("design:type", String)
], CheckoutRoomItem.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    __metadata("design:type", String)
], CheckoutRoomItem.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price per night' }),
    __metadata("design:type", Number)
], CheckoutRoomItem.prototype, "pricePerNight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total price for this room' }),
    __metadata("design:type", Number)
], CheckoutRoomItem.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discount amount' }),
    __metadata("design:type", Number)
], CheckoutRoomItem.prototype, "discountAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adult count' }),
    __metadata("design:type", Number)
], CheckoutRoomItem.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Child count' }),
    __metadata("design:type", Number)
], CheckoutRoomItem.prototype, "childCount", void 0);
// Matches findBookings() mapped result shape — used in history/search
class CheckoutDataItem {
    id;
    bookingCode;
    tenantId;
    hotelId;
    status;
    source;
    guestName;
    guestEmail;
    guestPhone;
    checkInDate;
    checkOutDate;
    totalAmount;
    paidAmount;
    paymentStatus;
    roomCount;
    adultCount;
    childCount;
    createdAt;
    createdBy;
}
exports.CheckoutDataItem = CheckoutDataItem;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "guestEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "guestPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutDataItem.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutDataItem.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutDataItem.prototype, "roomCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutDataItem.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutDataItem.prototype, "childCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CheckoutDataItem.prototype, "createdBy", void 0);
// ============= TODAY'S STATS =============
class GetTodayCheckoutStatsNatsRequest {
    tenantId;
    hotelId;
    date;
}
exports.GetTodayCheckoutStatsNatsRequest = GetTodayCheckoutStatsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetTodayCheckoutStatsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetTodayCheckoutStatsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetTodayCheckoutStatsNatsRequest.prototype, "date", void 0);
class CheckoutStatsData {
    totalCheckouts;
    completedCheckouts;
    pendingCheckouts;
    revenue;
    averageCheckoutTime;
}
exports.CheckoutStatsData = CheckoutStatsData;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutStatsData.prototype, "totalCheckouts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutStatsData.prototype, "completedCheckouts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutStatsData.prototype, "pendingCheckouts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutStatsData.prototype, "revenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutStatsData.prototype, "averageCheckoutTime", void 0);
// ============= CHECKOUT HISTORY =============
class GetCheckoutHistoryNatsRequest {
    tenantId;
    hotelId;
    staffId;
    page;
    limit;
    startDate;
    endDate;
}
exports.GetCheckoutHistoryNatsRequest = GetCheckoutHistoryNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCheckoutHistoryNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCheckoutHistoryNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCheckoutHistoryNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCheckoutHistoryNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCheckoutHistoryNatsRequest.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCheckoutHistoryNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCheckoutHistoryNatsRequest.prototype, "endDate", void 0);
class CheckoutHistoryData {
    data;
    total;
    page;
    limit;
}
exports.CheckoutHistoryData = CheckoutHistoryData;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CheckoutDataItem] }),
    __metadata("design:type", Array)
], CheckoutHistoryData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutHistoryData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutHistoryData.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutHistoryData.prototype, "limit", void 0);
// ============= SEARCH CHECKOUTS =============
class SearchCheckoutsNatsRequest {
    tenantId;
    hotelId;
    query;
    filters;
}
exports.SearchCheckoutsNatsRequest = SearchCheckoutsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchCheckoutsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchCheckoutsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchCheckoutsNatsRequest.prototype, "query", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SearchCheckoutsNatsRequest.prototype, "filters", void 0);
class SearchCheckoutsData {
    data;
    total;
}
exports.SearchCheckoutsData = SearchCheckoutsData;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CheckoutDataItem] }),
    __metadata("design:type", Array)
], SearchCheckoutsData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SearchCheckoutsData.prototype, "total", void 0);
// ============= VALIDATE QR =============
class ValidateCheckoutQRNatsRequest {
    qrCode;
    tenantId;
    hotelId;
}
exports.ValidateCheckoutQRNatsRequest = ValidateCheckoutQRNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ValidateCheckoutQRNatsRequest.prototype, "qrCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidateCheckoutQRNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidateCheckoutQRNatsRequest.prototype, "hotelId", void 0);
class ValidateQRCheckoutData {
    id;
    bookingCode;
    guestName;
    guestEmail;
    roomNumber;
    checkOutDate;
    status;
    totalAmount;
}
exports.ValidateQRCheckoutData = ValidateQRCheckoutData;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ValidateQRCheckoutData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ValidateQRCheckoutData.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ValidateQRCheckoutData.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ValidateQRCheckoutData.prototype, "guestEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ValidateQRCheckoutData.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ValidateQRCheckoutData.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ValidateQRCheckoutData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ValidateQRCheckoutData.prototype, "totalAmount", void 0);
class ValidateQRData {
    isValid;
    bookingId;
    roomNumber;
    guestName;
    checkoutData;
    message;
}
exports.ValidateQRData = ValidateQRData;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ValidateQRData.prototype, "isValid", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ValidateQRData.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ValidateQRData.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ValidateQRData.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: ValidateQRCheckoutData }),
    __metadata("design:type", ValidateQRCheckoutData)
], ValidateQRData.prototype, "checkoutData", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ValidateQRData.prototype, "message", void 0);
// ============= READY ROOMS =============
class GetReadyRoomsNatsRequest {
    tenantId;
    hotelId;
    date;
}
exports.GetReadyRoomsNatsRequest = GetReadyRoomsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetReadyRoomsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetReadyRoomsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetReadyRoomsNatsRequest.prototype, "date", void 0);
class ReadyRoom {
    roomNumber;
    guestName;
    checkOutTime;
    status;
    bookingId;
}
exports.ReadyRoom = ReadyRoom;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReadyRoom.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReadyRoom.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReadyRoom.prototype, "checkOutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['overdue', 'pending'] }),
    __metadata("design:type", String)
], ReadyRoom.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReadyRoom.prototype, "bookingId", void 0);
class ReadyRoomsData {
    data;
    total;
}
exports.ReadyRoomsData = ReadyRoomsData;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ReadyRoom] }),
    __metadata("design:type", Array)
], ReadyRoomsData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReadyRoomsData.prototype, "total", void 0);
// ============= CHECKOUT ITEMS =============
class GetCheckoutItemsNatsRequest {
    bookingId;
    tenantId;
    hotelId;
}
exports.GetCheckoutItemsNatsRequest = GetCheckoutItemsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetCheckoutItemsNatsRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCheckoutItemsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCheckoutItemsNatsRequest.prototype, "hotelId", void 0);
class CheckoutBookingSummary {
    id;
    bookingCode;
    guestName;
    totalAmount;
    paymentStatus;
}
exports.CheckoutBookingSummary = CheckoutBookingSummary;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutBookingSummary.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutBookingSummary.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutBookingSummary.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CheckoutBookingSummary.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckoutBookingSummary.prototype, "paymentStatus", void 0);
class CheckoutItemsData {
    booking;
    rooms;
    services;
    damages;
    specialRequests;
}
exports.CheckoutItemsData = CheckoutItemsData;
__decorate([
    (0, swagger_1.ApiProperty)({ type: CheckoutBookingSummary }),
    __metadata("design:type", CheckoutBookingSummary)
], CheckoutItemsData.prototype, "booking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CheckoutRoomItem], description: 'Rooms in this booking' }),
    __metadata("design:type", Array)
], CheckoutItemsData.prototype, "rooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object], description: 'Additional services' }),
    __metadata("design:type", Array)
], CheckoutItemsData.prototype, "services", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object], description: 'Damage reports' }),
    __metadata("design:type", Array)
], CheckoutItemsData.prototype, "damages", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests' }),
    __metadata("design:type", String)
], CheckoutItemsData.prototype, "specialRequests", void 0);
// ============= START CHECKOUT =============
class StartCheckoutNatsRequest {
    bookingId;
    staffId;
    tenantId;
    hotelId;
    startTime;
}
exports.StartCheckoutNatsRequest = StartCheckoutNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StartCheckoutNatsRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StartCheckoutNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StartCheckoutNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StartCheckoutNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Checkout start time' }),
    __metadata("design:type", Object)
], StartCheckoutNatsRequest.prototype, "startTime", void 0);
class StartCheckoutData {
    bookingId;
    status;
    startTime;
    staffId;
}
exports.StartCheckoutData = StartCheckoutData;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StartCheckoutData.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StartCheckoutData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], StartCheckoutData.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StartCheckoutData.prototype, "staffId", void 0);
// ============= COMPLETE CHECKOUT (Mobile) =============
class CompleteCheckoutNatsRequest {
    bookingId;
    staffId;
    tenantId;
    hotelId;
    completedTime;
    notes;
    damages;
    services;
}
exports.CompleteCheckoutNatsRequest = CompleteCheckoutNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CompleteCheckoutNatsRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompleteCheckoutNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompleteCheckoutNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompleteCheckoutNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CompleteCheckoutNatsRequest.prototype, "completedTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompleteCheckoutNatsRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Damage reports', type: [Object] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CompleteCheckoutNatsRequest.prototype, "damages", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional services', type: [Object] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CompleteCheckoutNatsRequest.prototype, "services", void 0);
class CompleteCheckoutData {
    bookingId;
    status;
    completedTime;
    finalAmount;
}
exports.CompleteCheckoutData = CompleteCheckoutData;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompleteCheckoutData.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompleteCheckoutData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CompleteCheckoutData.prototype, "completedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CompleteCheckoutData.prototype, "finalAmount", void 0);
//# sourceMappingURL=mobile-checkout.nats.js.map