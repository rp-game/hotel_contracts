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
exports.GetSpecialRequestCategoriesResponseDto = exports.SpecialRequestCategoryInfoDto = exports.GetSpecialRequestCategoriesNatsDto = exports.CoordinateDepartmentsNatsRequest = exports.RequestGuestApprovalNatsRequest = exports.PerformQualityCheckNatsRequest = exports.AssessFeasibilityNatsRequest = exports.GetAmenityRequestStatsNatsRequest = exports.AmenityRequestStatsNatsResponse = exports.CancelAmenityRequestNatsRequest = exports.CompleteAmenityRequestNatsRequest = exports.StartAmenityRequestNatsRequest = exports.AssignAmenityRequestNatsRequest = exports.UpdateAmenityRequestNatsRequest = exports.UpdateAmenityRequestDto = exports.FindOneAmenityRequestNatsRequest = exports.FindAllAmenityRequestsNatsRequest = exports.CreateAmenityRequestDto = exports.QualityCheckStatus = exports.FeasibilityStatus = exports.SpecialRequestCategory = exports.AmenityStatus = exports.AmenityPriority = void 0;
const common_1 = require("../../common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
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
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "guestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name', example: 'John Doe' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number', example: '101' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity type requested', example: 'Extra Towels' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "amenityType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Request category', enum: SpecialRequestCategory }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(SpecialRequestCategory),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "requestCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Request description', example: 'Need 2 extra towels for guests' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Priority level', enum: AmenityPriority, default: AmenityPriority.MEDIUM }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(AmenityPriority),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned to staff ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated time in minutes', example: 15 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAmenityRequestDto.prototype, "estimatedTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAmenityRequestDto.prototype, "staffNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated cost', example: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAmenityRequestDto.prototype, "estimatedCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Departments involved', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateAmenityRequestDto.prototype, "departmentsInvolved", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest approval required', default: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateAmenityRequestDto.prototype, "guestApprovalRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer preferences applied', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateAmenityRequestDto.prototype, "customerPreferencesApplied", void 0);
/**
 * Find All Amenity Requests Request
 * Pattern: amenity_requests.find_all
 *
 * UNIFIED CONTRACT - Used by both NATS handlers and REST API (api-gateway @Query())
 * @standardized 2026-02-25
 */
class FindAllAmenityRequestsNatsRequest {
    tenantId;
    hotelId;
    status;
    priority;
    search;
    amenityType;
    assignedTo;
    requestCategory;
    startDate;
    endDate;
    page;
    limit;
    sortBy;
    sortOrder;
}
exports.FindAllAmenityRequestsNatsRequest = FindAllAmenityRequestsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by request status', enum: AmenityStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value === '' ? undefined : value)),
    (0, class_validator_1.IsEnum)(AmenityStatus),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by priority', enum: AmenityPriority }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value === '' ? undefined : value)),
    (0, class_validator_1.IsEnum)(AmenityPriority),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search by guest name, room number, or description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by amenity type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "amenityType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by assigned staff' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by request category', enum: SpecialRequestCategory }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value === '' ? undefined : value)),
    (0, class_validator_1.IsEnum)(SpecialRequestCategory),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "requestCategory", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by start date (ISO 8601 format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by end date (ISO 8601 format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', minimum: 1, default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FindAllAmenityRequestsNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', minimum: 1, maximum: 100, default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], FindAllAmenityRequestsNatsRequest.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort field', enum: ['requestedAt', 'status', 'amenityType', 'roomNumber', 'createdAt'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort order', enum: ['ASC', 'DESC'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value === '' ? undefined : value)),
    (0, class_validator_1.IsEnum)(['ASC', 'DESC']),
    __metadata("design:type", String)
], FindAllAmenityRequestsNatsRequest.prototype, "sortOrder", void 0);
/**
 * Find One Amenity Request Request
 * Pattern: amenity_requests.find_one
 */
class FindOneAmenityRequestNatsRequest {
    id;
    tenantId;
    hotelId;
}
exports.FindOneAmenityRequestNatsRequest = FindOneAmenityRequestNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneAmenityRequestNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneAmenityRequestNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneAmenityRequestNatsRequest.prototype, "hotelId", void 0);
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
    actualTime;
    assignedAt;
    completedAt;
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
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual time taken in minutes' }),
    __metadata("design:type", Number)
], UpdateAmenityRequestDto.prototype, "actualTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Timestamp when request was assigned (ISO 8601)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateAmenityRequestDto.prototype, "assignedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Timestamp when request was completed (ISO 8601)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateAmenityRequestDto.prototype, "completedAt", void 0);
/**
 * Update Amenity Request NATS Request
 * Pattern: amenity_requests.update
 */
class UpdateAmenityRequestNatsRequest {
    id;
    tenantId;
    hotelId;
    updateDto;
}
exports.UpdateAmenityRequestNatsRequest = UpdateAmenityRequestNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateAmenityRequestNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateAmenityRequestNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateAmenityRequestNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Update data' }),
    __metadata("design:type", UpdateAmenityRequestDto)
], UpdateAmenityRequestNatsRequest.prototype, "updateDto", void 0);
/**
 * Assign Amenity Request Request
 * Pattern: amenity_requests.assign
 */
class AssignAmenityRequestNatsRequest {
    id;
    tenantId;
    hotelId;
    assignedTo;
    estimatedTime;
}
exports.AssignAmenityRequestNatsRequest = AssignAmenityRequestNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    __metadata("design:type", String)
], AssignAmenityRequestNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], AssignAmenityRequestNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], AssignAmenityRequestNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Assigned staff ID' }),
    __metadata("design:type", String)
], AssignAmenityRequestNatsRequest.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated time in minutes' }),
    __metadata("design:type", Number)
], AssignAmenityRequestNatsRequest.prototype, "estimatedTime", void 0);
/**
 * Start Amenity Request Request
 * Pattern: amenity_requests.start
 */
class StartAmenityRequestNatsRequest {
    id;
    tenantId;
    hotelId;
}
exports.StartAmenityRequestNatsRequest = StartAmenityRequestNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    __metadata("design:type", String)
], StartAmenityRequestNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], StartAmenityRequestNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StartAmenityRequestNatsRequest.prototype, "hotelId", void 0);
/**
 * Complete Amenity Request Request
 * Pattern: amenity_requests.complete
 */
class CompleteAmenityRequestNatsRequest {
    id;
    tenantId;
    hotelId;
    actualTime;
    guestRating;
    guestFeedback;
}
exports.CompleteAmenityRequestNatsRequest = CompleteAmenityRequestNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    __metadata("design:type", String)
], CompleteAmenityRequestNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CompleteAmenityRequestNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CompleteAmenityRequestNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual time spent in minutes' }),
    __metadata("design:type", Number)
], CompleteAmenityRequestNatsRequest.prototype, "actualTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest rating (1-5)' }),
    __metadata("design:type", Number)
], CompleteAmenityRequestNatsRequest.prototype, "guestRating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest feedback' }),
    __metadata("design:type", String)
], CompleteAmenityRequestNatsRequest.prototype, "guestFeedback", void 0);
/**
 * Cancel Amenity Request Request
 * Pattern: amenity_requests.cancel
 */
class CancelAmenityRequestNatsRequest {
    id;
    tenantId;
    hotelId;
    reason;
}
exports.CancelAmenityRequestNatsRequest = CancelAmenityRequestNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    __metadata("design:type", String)
], CancelAmenityRequestNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CancelAmenityRequestNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CancelAmenityRequestNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation reason' }),
    __metadata("design:type", String)
], CancelAmenityRequestNatsRequest.prototype, "reason", void 0);
/**
 * Amenity Request Stats Response
 */
class AmenityRequestStatsNatsResponse {
    total;
    byStatus;
    byPriority;
    byAmenityType;
    averageCompletionTime;
    averageRating;
    totalEstimatedCost;
    totalActualCost;
}
exports.AmenityRequestStatsNatsResponse = AmenityRequestStatsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total requests' }),
    __metadata("design:type", Number)
], AmenityRequestStatsNatsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Breakdown by status' }),
    __metadata("design:type", Object)
], AmenityRequestStatsNatsResponse.prototype, "byStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Breakdown by priority' }),
    __metadata("design:type", Object)
], AmenityRequestStatsNatsResponse.prototype, "byPriority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Breakdown by amenity type' }),
    __metadata("design:type", Object)
], AmenityRequestStatsNatsResponse.prototype, "byAmenityType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Average completion time in minutes' }),
    __metadata("design:type", Number)
], AmenityRequestStatsNatsResponse.prototype, "averageCompletionTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Average guest rating' }),
    __metadata("design:type", Number)
], AmenityRequestStatsNatsResponse.prototype, "averageRating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total estimated cost' }),
    __metadata("design:type", Number)
], AmenityRequestStatsNatsResponse.prototype, "totalEstimatedCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total actual cost' }),
    __metadata("design:type", Number)
], AmenityRequestStatsNatsResponse.prototype, "totalActualCost", void 0);
/**
 * Get Amenity Request Stats Request
 * Pattern: amenity_requests.stats
 */
class GetAmenityRequestStatsNatsRequest extends common_1.TenantHotelQueryDto {
}
exports.GetAmenityRequestStatsNatsRequest = GetAmenityRequestStatsNatsRequest;
/**
 * Assess Feasibility Request
 * Pattern: amenity_requests.assess_feasibility
 */
class AssessFeasibilityNatsRequest {
    id;
    tenantId;
    hotelId;
    feasibilityStatus;
    estimatedCost;
    feasibilityNotes;
    assessedBy;
}
exports.AssessFeasibilityNatsRequest = AssessFeasibilityNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    __metadata("design:type", String)
], AssessFeasibilityNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], AssessFeasibilityNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], AssessFeasibilityNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Feasibility status' }),
    __metadata("design:type", String)
], AssessFeasibilityNatsRequest.prototype, "feasibilityStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated cost' }),
    __metadata("design:type", Number)
], AssessFeasibilityNatsRequest.prototype, "estimatedCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Feasibility notes' }),
    __metadata("design:type", String)
], AssessFeasibilityNatsRequest.prototype, "feasibilityNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assessed by staff ID' }),
    __metadata("design:type", String)
], AssessFeasibilityNatsRequest.prototype, "assessedBy", void 0);
/**
 * Perform Quality Check Request
 * Pattern: amenity_requests.quality_check
 */
class PerformQualityCheckNatsRequest {
    id;
    tenantId;
    hotelId;
    qualityCheckStatus;
    qualityNotes;
    checkedBy;
}
exports.PerformQualityCheckNatsRequest = PerformQualityCheckNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    __metadata("design:type", String)
], PerformQualityCheckNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], PerformQualityCheckNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], PerformQualityCheckNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quality check status' }),
    __metadata("design:type", String)
], PerformQualityCheckNatsRequest.prototype, "qualityCheckStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quality notes' }),
    __metadata("design:type", String)
], PerformQualityCheckNatsRequest.prototype, "qualityNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Checked by staff ID' }),
    __metadata("design:type", String)
], PerformQualityCheckNatsRequest.prototype, "checkedBy", void 0);
/**
 * Request Guest Approval Request
 * Pattern: amenity_requests.request_guest_approval
 */
class RequestGuestApprovalNatsRequest {
    id;
    tenantId;
    hotelId;
    approvalMessage;
}
exports.RequestGuestApprovalNatsRequest = RequestGuestApprovalNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    __metadata("design:type", String)
], RequestGuestApprovalNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], RequestGuestApprovalNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], RequestGuestApprovalNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Approval message' }),
    __metadata("design:type", String)
], RequestGuestApprovalNatsRequest.prototype, "approvalMessage", void 0);
/**
 * Coordinate Departments Request
 * Pattern: amenity_requests.coordinate_departments
 */
class CoordinateDepartmentsNatsRequest {
    id;
    tenantId;
    hotelId;
    departments;
    coordinationNotes;
}
exports.CoordinateDepartmentsNatsRequest = CoordinateDepartmentsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    __metadata("design:type", String)
], CoordinateDepartmentsNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CoordinateDepartmentsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CoordinateDepartmentsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department names to coordinate with', type: [String] }),
    __metadata("design:type", Array)
], CoordinateDepartmentsNatsRequest.prototype, "departments", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Coordination notes' }),
    __metadata("design:type", String)
], CoordinateDepartmentsNatsRequest.prototype, "coordinationNotes", void 0);
/**
 * Get Special Request Categories Request
 * Pattern: amenity_requests.special_categories
 */
class GetSpecialRequestCategoriesNatsDto {
    tenantId;
    hotelId;
}
exports.GetSpecialRequestCategoriesNatsDto = GetSpecialRequestCategoriesNatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetSpecialRequestCategoriesNatsDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetSpecialRequestCategoriesNatsDto.prototype, "hotelId", void 0);
class SpecialRequestCategoryInfoDto {
    displayName;
    description;
    subTypes;
    requiredDepartments;
    guestApprovalRequired;
}
exports.SpecialRequestCategoryInfoDto = SpecialRequestCategoryInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SpecialRequestCategoryInfoDto.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SpecialRequestCategoryInfoDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], SpecialRequestCategoryInfoDto.prototype, "subTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], SpecialRequestCategoryInfoDto.prototype, "requiredDepartments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], SpecialRequestCategoryInfoDto.prototype, "guestApprovalRequired", void 0);
class GetSpecialRequestCategoriesResponseDto {
    categories;
}
exports.GetSpecialRequestCategoriesResponseDto = GetSpecialRequestCategoriesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'object', additionalProperties: { $ref: '#/components/schemas/SpecialRequestCategoryInfoDto' } }),
    __metadata("design:type", Object)
], GetSpecialRequestCategoriesResponseDto.prototype, "categories", void 0);
//# sourceMappingURL=amenity-requests.nats.js.map