"use strict";
/**
 * Customers NATS Contracts
 *
 * Patterns:
 * - crm.customer.create
 * - crm.customer.findAll
 * - crm.customer.findOne
 * - crm.customer.update
 * - crm.customer.remove
 * - crm.customer.findByEmail
 * - crm.customer.findByPhone
 * - crm.customer.updateStats
 * - crm.customer.recalculateBookingStats
 * - crm.customer.recalculateAllBookingStats
 * - crm.customer.stats
 * - crm.loyalty.findByCustomer
 * - crm.customer.search
 * - crm.customer.export
 * - crm.customer.export.status
 * - crm.customer.export.download
 *
 * Handler: crm-service (CustomersController)
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
exports.RecalculateBookingStatsData = exports.CommunicationChannel = exports.NationalIdType = exports.Gender = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Enums
 */
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender || (exports.Gender = Gender = {}));
var NationalIdType;
(function (NationalIdType) {
    NationalIdType["PASSPORT"] = "PASSPORT";
    NationalIdType["CITIZEN_ID"] = "CITIZEN_ID";
    NationalIdType["DRIVING_LICENSE"] = "DRIVING_LICENSE";
})(NationalIdType || (exports.NationalIdType = NationalIdType = {}));
var CommunicationChannel;
(function (CommunicationChannel) {
    CommunicationChannel["EMAIL"] = "EMAIL";
    CommunicationChannel["SMS"] = "SMS";
    CommunicationChannel["APP_NOTIFICATION"] = "APP_NOTIFICATION";
})(CommunicationChannel || (exports.CommunicationChannel = CommunicationChannel = {}));
/**
 * Recalculate Booking Stats Data
 */
class RecalculateBookingStatsData {
    totalBookings;
    totalSpent;
    lastBookingDate;
    membershipLevel;
    previousTotalBookings;
    previousTotalSpent;
    previousMembershipLevel;
}
exports.RecalculateBookingStatsData = RecalculateBookingStatsData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of bookings' }),
    __metadata("design:type", Number)
], RecalculateBookingStatsData.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount spent', example: '2500000.50' }),
    __metadata("design:type", String)
], RecalculateBookingStatsData.prototype, "totalSpent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last booking date' }),
    __metadata("design:type", Object)
], RecalculateBookingStatsData.prototype, "lastBookingDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Current membership level' }),
    __metadata("design:type", String)
], RecalculateBookingStatsData.prototype, "membershipLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Previous total bookings count' }),
    __metadata("design:type", Number)
], RecalculateBookingStatsData.prototype, "previousTotalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Previous total amount spent', example: '2000000.00' }),
    __metadata("design:type", String)
], RecalculateBookingStatsData.prototype, "previousTotalSpent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Previous membership level' }),
    __metadata("design:type", String)
], RecalculateBookingStatsData.prototype, "previousMembershipLevel", void 0);
//# sourceMappingURL=customers.nats.js.map