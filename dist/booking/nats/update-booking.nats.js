"use strict";
/**
 * Update Booking NATS Contract
 *
 * NATS Pattern: booking.update
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: calendar page to edit booking details
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
exports.UpdateBookingDto = exports.UpdateBookingRoomDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const booking_enum_1 = require("../enums/booking.enum");
/**
 * Room item for price override in UpdateBookingDto
 */
class UpdateBookingRoomDto {
    bookingRoomId;
    roomTypeId;
    priceOverride;
    perNightOverrideRates;
    checkInDate;
    checkOutDate;
}
exports.UpdateBookingRoomDto = UpdateBookingRoomDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking room ID (preferred identifier)', example: 'uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateBookingRoomDto.prototype, "bookingRoomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type ID (fallback if bookingRoomId not provided)', example: 'uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateBookingRoomDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Override price per unit (ADR — average of perNightOverrideRates if provided)', type: 'number', example: 500000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingRoomDto.prototype, "priceOverride", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Per-night price override (net, one value per night in stay order)', type: [Number], example: [500000, 600000, 500000] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], UpdateBookingRoomDto.prototype, "perNightOverrideRates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Per-room check-in date override (YYYY-MM-DD). Only applied when room not yet checked in.', example: '2024-05-27' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingRoomDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Per-room check-out date override (YYYY-MM-DD).', example: '2024-05-30' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingRoomDto.prototype, "checkOutDate", void 0);
/**
 * Unified UpdateBookingDto for both NATS and REST
 * Single source of truth for booking update operations
 * Used as request DTO for API Gateway and NATS request for booking-service
 *
 * All fields optional at contract level - let consumers (controller, handler) add validation
 *
 * @pattern booking.update
 * @handler booking-service
 * @caller api-gateway
 */
class UpdateBookingDto {
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId;
    /**
     * Hotel ID
     */
    hotelId;
    /**
     * Booking ID to update
     */
    bookingId;
    /**
     * Guest first name
     */
    guestName;
    /**
     * Guest email
     */
    guestEmail;
    /**
     * Guest phone number
     */
    phoneNumber;
    /**
     * New check-in date (YYYY-MM-DD)
     */
    checkInDate;
    /**
     * New check-out date (YYYY-MM-DD)
     */
    checkOutDate;
    /**
     * Room ID to assign
     */
    roomId;
    /**
     * Number of adults
     */
    adultCount;
    /**
     * Number of children
     */
    childCount;
    /**
     * Special requests from guest
     */
    specialRequests;
    /**
     * Internal notes about the booking
     */
    notes;
    /**
     * New booking status
     */
    status;
    /**
     * User ID who made the update
     */
    updatedBy;
    /**
     * Travel Agent ID
     */
    travelAgentId;
    /**
     * Agent reference code from travel agent
     */
    agentReference;
    /**
     * Additional metadata
     */
    metadata;
    requestInvoice;
    earlyCheckInFee;
    earlyCheckInFeeGross;
    earlyCheckInFeeVatRate;
    earlyCheckInFeeServiceChargeRate;
    lateCheckOutFee;
    lateCheckOutFeeGross;
    lateCheckOutFeeVatRate;
    lateCheckOutFeeServiceChargeRate;
    /**
     * Pricing mode when dates change:
     * - 'keep_rate_plan': recalculate using original rate plan (default)
     * - 'custom_rate_plan': use a different rate plan for new dates
     */
    pricingMode;
    /**
     * Rate plan ID to use when pricingMode = 'custom_rate_plan'
     */
    newRatePlanId;
    /**
     * Whether to keep applying original promotion to new dates
     */
    keepPromotion;
    /**
     * Backdate check-in reason — required when newCheckIn < oldCheckIn AND daysBack > 1.
     * Gateway forwards from request body; service enforces window theo userRoles.
     */
    backdateReasonCategory;
    backdateReasonNote;
    userRoles;
    /**
     * Full-backdate payment: khi user backdate cả check_in + check_out trên CHECKED_IN
     * booking (case ezCloud backfill), có thể đính kèm 1 payment record để record
     * khoản đã thu từ khách. Backend sẽ tạo BookingPayment + update paid_amount.
     * Số tiền default = remaining balance (frontend tính sẵn).
     */
    backdatePaymentAmount;
    backdatePaymentMethod;
    confirmBackdateCheckIn;
    confirmBackdateCheckOut;
    /**
     * Room price overrides — allows updating pricePerUnit for existing booking rooms
     */
    rooms;
    /**
     * Display name of the user who performed the override (for audit trail)
     */
    overriddenByName;
    /**
     * User confirm áp dụng giá mới khi đổi ngày riêng từng phòng (rooms[].checkInDate/
     * checkOutDate) trên booking ĐÃ CÓ paidAmount > 0 (PAID/PARTIALLY_PAID). Nếu chưa
     * true và giá thay đổi, BE trả requiresPriceConfirmation=true kèm giá cũ/mới thay vì
     * áp thẳng — tránh âm thầm đổi tổng tiền của booking đã thu tiền.
     */
    confirmPriceChange;
}
exports.UpdateBookingDto = UpdateBookingDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tenant ID (multi-tenant isolation)',
        example: '550e8400-e29b-41d4-a716-446655440001',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Hotel ID',
        example: 'htl-001',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Booking ID to update',
        example: 'bk-001',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Guest first name',
        example: 'John',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Guest email address',
        example: 'john@example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "guestEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Guest phone number',
        example: '+1234567890',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'New check-in date (YYYY-MM-DD)',
        example: '2024-02-15',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'New check-out date (YYYY-MM-DD)',
        example: '2024-02-17',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room ID to assign',
        example: 'room-001',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Number of adults',
        type: 'number',
        example: 2,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Number of children',
        type: 'number',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "childCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Special requests from guest',
        example: 'Early check-in requested',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Internal notes about the booking',
        example: 'VIP guest - ensure room upgrade',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'New booking status',
        enum: ['PENDING', 'CONFIRMED', 'CHECKED_IN', 'DEPARTED', 'CHECKED_OUT', 'CANCELLED'],
        example: 'CONFIRMED',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED']),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'User ID who made the update',
        example: '550e8400-e29b-41d4-a716-446655440002',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "updatedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Travel Agent ID',
        example: '550e8400-e29b-41d4-a716-446655440003',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "travelAgentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Agent reference code from travel agent',
        example: 'REF-2026-001',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "agentReference", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Additional metadata',
        type: 'object',
        additionalProperties: true,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateBookingDto.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Request VAT invoice on checkout' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateBookingDto.prototype, "requestInvoice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Early check-in fee (net/pre-tax)', type: 'number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "earlyCheckInFee", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Early check-in fee gross (post-tax)', type: 'number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "earlyCheckInFeeGross", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'VAT rate applied to early check-in fee', type: 'number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "earlyCheckInFeeVatRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service charge rate applied to early check-in fee', type: 'number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "earlyCheckInFeeServiceChargeRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Late check-out fee (net/pre-tax)', type: 'number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "lateCheckOutFee", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Late check-out fee gross (post-tax)', type: 'number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "lateCheckOutFeeGross", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'VAT rate applied to late check-out fee', type: 'number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "lateCheckOutFeeVatRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service charge rate applied to late check-out fee', type: 'number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "lateCheckOutFeeServiceChargeRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pricing recalculation mode when dates change',
        enum: ['keep_rate_plan', 'custom_rate_plan'],
        example: 'keep_rate_plan',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "pricingMode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate plan ID for custom pricing (when pricingMode = custom_rate_plan)',
        example: '550e8400-e29b-41d4-a716-446655440010',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "newRatePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Keep original promotion applied to new dates',
        example: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateBookingDto.prototype, "keepPromotion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lý do backdate check-in (required khi đổi checkInDate lùi > 1 ngày)',
        enum: booking_enum_1.BackdateReasonCategory,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(booking_enum_1.BackdateReasonCategory),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "backdateReasonCategory", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Ghi chú thêm cho backdate' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "backdateReasonNote", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Roles của user gọi API (gateway pass từ JWT để compute backdate window)',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateBookingDto.prototype, "userRoles", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Amount paid kèm full-backdate (tạo BookingPayment record)',
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookingDto.prototype, "backdatePaymentAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Payment method cho full-backdate payment (CASH/CREDIT_CARD/BANK_TRANSFER/...)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "backdatePaymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'User confirm backdate check-in. Khi true + booking PENDING/CONFIRMED, ' +
            'BE sẽ transition CHECKED_IN với actual_check_in_time=now.',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateBookingDto.prototype, "confirmBackdateCheckIn", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'User confirm backdate check-out. Khi true + booking CHECKED_IN, ' +
            'BE sẽ transition CHECKED_OUT với actual_check_out_time=now + tạo payment record (nếu backdatePaymentAmount > 0).',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateBookingDto.prototype, "confirmBackdateCheckOut", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room price overrides (requires OVERRIDE_PRICE role)',
        type: () => [UpdateBookingRoomDto],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => UpdateBookingRoomDto),
    __metadata("design:type", Array)
], UpdateBookingDto.prototype, "rooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Display name of user who performed price override', example: 'Giang Sazi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookingDto.prototype, "overriddenByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'User confirm áp giá mới khi đổi ngày riêng từng phòng trên booking đã thanh toán',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateBookingDto.prototype, "confirmPriceChange", void 0);
//# sourceMappingURL=update-booking.nats.js.map