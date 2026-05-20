"use strict";
/**
 * Booking Timeline Action NATS Contracts
 *
 * Patterns:
 * - booking.timeline.action
 *
 * Handler: booking-service (TimelineController)
 * Called by: api-gateway (TimelineService)
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
exports.TimelineActionData = exports.TimelineActionGuestDetails = void 0;
const swagger_1 = require("@nestjs/swagger");
class TimelineActionGuestDetails {
    firstName;
    lastName;
    email;
    phone;
    nationality;
    idNumber;
}
exports.TimelineActionGuestDetails = TimelineActionGuestDetails;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], TimelineActionGuestDetails.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], TimelineActionGuestDetails.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], TimelineActionGuestDetails.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], TimelineActionGuestDetails.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], TimelineActionGuestDetails.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], TimelineActionGuestDetails.prototype, "idNumber", void 0);
class TimelineActionData {
    notes;
    reason;
    extendToDate;
    extensionPricePerNight;
    guestDetails;
}
exports.TimelineActionData = TimelineActionData;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], TimelineActionData.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], TimelineActionData.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New checkout date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], TimelineActionData.prototype, "extendToDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Net price per night for extension nights' }),
    __metadata("design:type", Number)
], TimelineActionData.prototype, "extensionPricePerNight", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => TimelineActionGuestDetails }),
    __metadata("design:type", TimelineActionGuestDetails)
], TimelineActionData.prototype, "guestDetails", void 0);
//# sourceMappingURL=timeline-action.nats.js.map