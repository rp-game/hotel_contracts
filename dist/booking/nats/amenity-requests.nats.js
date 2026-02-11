"use strict";
/**
 * Amenity Requests NATS Contracts
 *
 * Patterns:
 * - amenity_requests.find_all
 * - amenity_requests.find_one
 * - amenity_requests.create
 * - amenity_requests.update
 * - amenity_requests.assign
 * - amenity_requests.start
 * - amenity_requests.complete
 * - amenity_requests.cancel
 * - amenity_requests.stats
 * - amenity_requests.assess_feasibility
 * - amenity_requests.quality_check
 * - amenity_requests.request_guest_approval
 * - amenity_requests.coordinate_departments
 * - amenity_requests.get_special_request_categories
 *
 * Handler: booking-service (AmenityNatsController)
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
exports.UpdateAmenityRequestDto = exports.CreateAmenityRequestDto = exports.QualityCheckStatus = exports.FeasibilityStatus = exports.SpecialRequestCategory = exports.AmenityStatus = exports.AmenityPriority = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Amenity Priority Enum
 */
var AmenityPriority;
(function (AmenityPriority) {
    AmenityPriority["LOW"] = "LOW";
    AmenityPriority["MEDIUM"] = "MEDIUM";
    AmenityPriority["HIGH"] = "HIGH";
    AmenityPriority["URGENT"] = "URGENT";
})(AmenityPriority || (exports.AmenityPriority = AmenityPriority = {}));
/**
 * Amenity Status Enum
 */
var AmenityStatus;
(function (AmenityStatus) {
    AmenityStatus["PENDING"] = "PENDING";
    AmenityStatus["ASSIGNED"] = "ASSIGNED";
    AmenityStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AmenityStatus["COMPLETED"] = "COMPLETED";
    AmenityStatus["CANCELLED"] = "CANCELLED";
})(AmenityStatus || (exports.AmenityStatus = AmenityStatus = {}));
/**
 * Special Request Category Enum
 */
var SpecialRequestCategory;
(function (SpecialRequestCategory) {
    SpecialRequestCategory["ROOM_PREFERENCE"] = "ROOM_PREFERENCE";
    SpecialRequestCategory["ACCESSIBILITY_NEEDS"] = "ACCESSIBILITY_NEEDS";
    SpecialRequestCategory["DIETARY_REQUIREMENTS"] = "DIETARY_REQUIREMENTS";
    SpecialRequestCategory["CELEBRATION_SERVICES"] = "CELEBRATION_SERVICES";
    SpecialRequestCategory["BUSINESS_NEEDS"] = "BUSINESS_NEEDS";
    SpecialRequestCategory["AMENITIES"] = "AMENITIES";
    SpecialRequestCategory["SERVICES"] = "SERVICES";
})(SpecialRequestCategory || (exports.SpecialRequestCategory = SpecialRequestCategory = {}));
/**
 * Feasibility Status Enum
 */
var FeasibilityStatus;
(function (FeasibilityStatus) {
    FeasibilityStatus["PENDING"] = "PENDING";
    FeasibilityStatus["APPROVED"] = "APPROVED";
    FeasibilityStatus["REJECTED"] = "REJECTED";
    FeasibilityStatus["NEEDS_ASSESSMENT"] = "NEEDS_ASSESSMENT";
})(FeasibilityStatus || (exports.FeasibilityStatus = FeasibilityStatus = {}));
/**
 * Quality Check Status Enum
 */
var QualityCheckStatus;
(function (QualityCheckStatus) {
    QualityCheckStatus["NOT_STARTED"] = "NOT_STARTED";
    QualityCheckStatus["IN_PROGRESS"] = "IN_PROGRESS";
    QualityCheckStatus["PASSED"] = "PASSED";
    QualityCheckStatus["FAILED"] = "FAILED";
    QualityCheckStatus["GUEST_CONFIRMATION_PENDING"] = "GUEST_CONFIRMATION_PENDING";
})(QualityCheckStatus || (exports.QualityCheckStatus = QualityCheckStatus = {}));
/**
 * Create Amenity Request DTO
 * Pattern: amenity_requests.create
 * Used for both NATS messaging and REST API
 */
class CreateAmenityRequestDto {
    tenantId;
    hotelId;
    guestId;
    guestName;
    roomNumber;
    amenityType;
    requestCategory;
    description;
    priority;
    assignedTo;
    estimatedTime;
    staffNotes;
    estimatedCost;
    departmentsInvolved;
    guestApprovalRequired;
    customerPreferencesApplied;
}
exports.CreateAmenityRequestDto = CreateAmenityRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "guestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name', example: 'John Doe' }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number', example: '101' }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity type requested', example: 'Extra Towels' }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "amenityType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Request category', enum: SpecialRequestCategory }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "requestCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Request description', example: 'Need 2 extra towels for guests' }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Priority level', enum: AmenityPriority, default: AmenityPriority.MEDIUM }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned to staff ID' }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated time in minutes', example: 15 }),
    __metadata("design:type", Number)
], CreateAmenityRequestDto.prototype, "estimatedTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff notes' }),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "staffNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated cost', example: 0 }),
    __metadata("design:type", Number)
], CreateAmenityRequestDto.prototype, "estimatedCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Departments involved', type: [String] }),
    __metadata("design:type", Array)
], CreateAmenityRequestDto.prototype, "departmentsInvolved", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest approval required', default: false }),
    __metadata("design:type", Boolean)
], CreateAmenityRequestDto.prototype, "guestApprovalRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer preferences applied', type: [String] }),
    __metadata("design:type", Array)
], CreateAmenityRequestDto.prototype, "customerPreferencesApplied", void 0);
/**
 * Update Amenity Request DTO
 * Used for both NATS messaging and REST API
 */
class UpdateAmenityRequestDto {
    amenityType;
    description;
    priority;
    status;
    assignedTo;
    estimatedTime;
    staffNotes;
    guestRating;
    guestFeedback;
    estimatedCost;
}
exports.UpdateAmenityRequestDto = UpdateAmenityRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Amenity type requested', example: 'Extra Pillows' }),
    __metadata("design:type", String)
], UpdateAmenityRequestDto.prototype, "amenityType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Request description', example: 'Need 2 extra pillows' }),
    __metadata("design:type", String)
], UpdateAmenityRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Priority level', enum: AmenityPriority }),
    __metadata("design:type", String)
], UpdateAmenityRequestDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Request status', enum: AmenityStatus }),
    __metadata("design:type", String)
], UpdateAmenityRequestDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned to staff ID' }),
    __metadata("design:type", String)
], UpdateAmenityRequestDto.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated time in minutes', example: 15 }),
    __metadata("design:type", Number)
], UpdateAmenityRequestDto.prototype, "estimatedTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff notes' }),
    __metadata("design:type", String)
], UpdateAmenityRequestDto.prototype, "staffNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest rating (1-5)', minimum: 1, maximum: 5 }),
    __metadata("design:type", Number)
], UpdateAmenityRequestDto.prototype, "guestRating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest feedback' }),
    __metadata("design:type", String)
], UpdateAmenityRequestDto.prototype, "guestFeedback", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated cost', example: 0 }),
    __metadata("design:type", Number)
], UpdateAmenityRequestDto.prototype, "estimatedCost", void 0);
//# sourceMappingURL=amenity-requests.nats.js.map