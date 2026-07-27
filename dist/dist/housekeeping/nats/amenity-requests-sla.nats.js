"use strict";
/**
 * Amenity Requests SLA NATS Contracts
 * Patterns: housekeeping.amenity-requests.*
 *
 * Handles SLA tracking, auto-assignment, and status updates for guest amenity requests
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
exports.UpdateAmenityRequestStatusNatsRequest = exports.FindSupervisorAmenityRequestsNatsRequest = exports.FindMyAssignedAmenityRequestsNatsRequest = exports.AmenityAlertData = exports.AmenityRequestWithSLAStatus = exports.AmenityRequestData = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../enums");
/**
 * Amenity Request with SLA tracking information
 */
class AmenityRequestData {
    id;
    roomId;
    amenityId;
    quantity;
    status;
    notes;
    requestedById;
    requestedAt;
    assignedToId;
    assignedAt;
    acceptedAt;
    fulfilledById;
    fulfilledAt;
    slaConfigId;
    slaDeadlineFirstResponse;
    slaDeadlineResolution;
    slaBreach;
    tenantId;
    hotelId;
    createdAt;
    updatedAt;
}
exports.AmenityRequestData = AmenityRequestData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Request ID' }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Amenity ID' }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "amenityId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quantity requested' }),
    __metadata("design:type", Number)
], AmenityRequestData.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current request status', enum: enums_1.AmenityRequestStatus }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff ID who requested' }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "requestedById", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Request timestamp', type: String }),
    __metadata("design:type", Object)
], AmenityRequestData.prototype, "requestedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff ID assigned to fulfill' }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "assignedToId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assignment timestamp', type: String }),
    __metadata("design:type", Object)
], AmenityRequestData.prototype, "assignedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When staff accepted the request', type: String }),
    __metadata("design:type", Object)
], AmenityRequestData.prototype, "acceptedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff ID who fulfilled' }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "fulfilledById", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fulfillment timestamp', type: String }),
    __metadata("design:type", Object)
], AmenityRequestData.prototype, "fulfilledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'SLA config ID applied to this request' }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "slaConfigId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'First response deadline', type: String }),
    __metadata("design:type", Object)
], AmenityRequestData.prototype, "slaDeadlineFirstResponse", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Resolution deadline', type: String }),
    __metadata("design:type", Object)
], AmenityRequestData.prototype, "slaDeadlineResolution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether SLA was breached', type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], AmenityRequestData.prototype, "slaBreach", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], AmenityRequestData.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp', type: String }),
    __metadata("design:type", Object)
], AmenityRequestData.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp', type: String }),
    __metadata("design:type", Object)
], AmenityRequestData.prototype, "updatedAt", void 0);
/**
 * Amenity Request with computed SLA status
 */
class AmenityRequestWithSLAStatus extends AmenityRequestData {
    slaStatus;
    minutesUntilBreach;
}
exports.AmenityRequestWithSLAStatus = AmenityRequestWithSLAStatus;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Computed SLA status', enum: enums_1.AmenitySLAStatus }),
    __metadata("design:type", String)
], AmenityRequestWithSLAStatus.prototype, "slaStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minutes remaining until SLA breach' }),
    __metadata("design:type", Number)
], AmenityRequestWithSLAStatus.prototype, "minutesUntilBreach", void 0);
/**
 * SLA Alert record
 */
class AmenityAlertData {
    id;
    amenityRequestId;
    alertType;
    triggeredAt;
    sentAt;
    sentTo;
    status;
    acknowledgedAt;
    acknowledgedBy;
    tenantId;
    hotelId;
    createdAt;
}
exports.AmenityAlertData = AmenityAlertData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alert ID' }),
    __metadata("design:type", String)
], AmenityAlertData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amenity request ID' }),
    __metadata("design:type", String)
], AmenityAlertData.prototype, "amenityRequestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alert type', enum: enums_1.AmenityAlertType }),
    __metadata("design:type", String)
], AmenityAlertData.prototype, "alertType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Alert triggered timestamp', type: String }),
    __metadata("design:type", Object)
], AmenityAlertData.prototype, "triggeredAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Alert sent timestamp', type: String }),
    __metadata("design:type", Object)
], AmenityAlertData.prototype, "sentAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User IDs the alert was sent to', type: [String], default: [] }),
    __metadata("design:type", Array)
], AmenityAlertData.prototype, "sentTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alert status', enum: enums_1.AmenityAlertStatus, default: enums_1.AmenityAlertStatus.PENDING }),
    __metadata("design:type", String)
], AmenityAlertData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Alert acknowledged timestamp', type: String }),
    __metadata("design:type", Object)
], AmenityAlertData.prototype, "acknowledgedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID who acknowledged' }),
    __metadata("design:type", String)
], AmenityAlertData.prototype, "acknowledgedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], AmenityAlertData.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], AmenityAlertData.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp', type: String }),
    __metadata("design:type", Object)
], AmenityAlertData.prototype, "createdAt", void 0);
// ============================================
// FIND MY ASSIGNED REQUESTS
// ============================================
class FindMyAssignedAmenityRequestsNatsRequest {
    hotelId;
    tenantId;
    staffId;
    status;
    page;
    limit;
}
exports.FindMyAssignedAmenityRequestsNatsRequest = FindMyAssignedAmenityRequestsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], FindMyAssignedAmenityRequestsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindMyAssignedAmenityRequestsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID of the current user' }),
    __metadata("design:type", String)
], FindMyAssignedAmenityRequestsNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by request status',
        enum: enums_1.AmenityRequestStatus,
        isArray: true,
    }),
    __metadata("design:type", Array)
], FindMyAssignedAmenityRequestsNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pagination: page number', type: Number }),
    __metadata("design:type", Number)
], FindMyAssignedAmenityRequestsNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pagination: items per page', type: Number }),
    __metadata("design:type", Number)
], FindMyAssignedAmenityRequestsNatsRequest.prototype, "limit", void 0);
// ============================================
// FIND SUPERVISOR VIEW
// ============================================
class FindSupervisorAmenityRequestsNatsRequest {
    hotelId;
    tenantId;
    slaStatus;
    status;
    page;
    limit;
}
exports.FindSupervisorAmenityRequestsNatsRequest = FindSupervisorAmenityRequestsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], FindSupervisorAmenityRequestsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindSupervisorAmenityRequestsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by SLA status',
        enum: enums_1.AmenitySLAStatus,
    }),
    __metadata("design:type", String)
], FindSupervisorAmenityRequestsNatsRequest.prototype, "slaStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by request status',
        enum: enums_1.AmenityRequestStatus,
        isArray: true,
    }),
    __metadata("design:type", Array)
], FindSupervisorAmenityRequestsNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pagination: page number', type: Number }),
    __metadata("design:type", Number)
], FindSupervisorAmenityRequestsNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pagination: items per page', type: Number }),
    __metadata("design:type", Number)
], FindSupervisorAmenityRequestsNatsRequest.prototype, "limit", void 0);
// ============================================
// UPDATE AMENITY REQUEST
// ============================================
class UpdateAmenityRequestStatusNatsRequest {
    id;
    tenantId;
    hotelId;
    status;
    assignedToId;
    notes;
    fulfilledById;
}
exports.UpdateAmenityRequestStatusNatsRequest = UpdateAmenityRequestStatusNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Request ID' }),
    __metadata("design:type", String)
], UpdateAmenityRequestStatusNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], UpdateAmenityRequestStatusNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], UpdateAmenityRequestStatusNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'New status',
        enum: enums_1.AmenityRequestStatus,
    }),
    __metadata("design:type", String)
], UpdateAmenityRequestStatusNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reassign to different staff ID' }),
    __metadata("design:type", String)
], UpdateAmenityRequestStatusNatsRequest.prototype, "assignedToId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    __metadata("design:type", String)
], UpdateAmenityRequestStatusNatsRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff ID who fulfilled (for FULFILLED status)' }),
    __metadata("design:type", String)
], UpdateAmenityRequestStatusNatsRequest.prototype, "fulfilledById", void 0);
//# sourceMappingURL=amenity-requests-sla.nats.js.map