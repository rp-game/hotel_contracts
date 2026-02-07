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
exports.RecalculateBookingStatsData = exports.CustomersListData = exports.CustomerNatsResponse = exports.UpdateCustomerNatsRequest = exports.CreateCustomerNatsRequest = exports.CommunicationChannel = exports.NationalIdType = exports.Gender = void 0;
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
 * Create Customer Request
 * Pattern: crm.customer.create
 */
class CreateCustomerNatsRequest {
    tenantId;
    firstName;
    lastName;
    gender;
    dateOfBirth;
    email;
    phoneNumber;
    nationalIdType;
    nationalIdNumber;
    nationality;
    address;
    languagePreferences;
    communicationPreferences;
    tags;
    notes;
}
exports.CreateCustomerNatsRequest = CreateCustomerNatsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: Gender, description: 'Gender' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date of birth (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email address' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: NationalIdType, description: 'National ID type' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "nationalIdType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'National ID number' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "nationalIdNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nationality' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Address information' }),
    __metadata("design:type", Object)
], CreateCustomerNatsRequest.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], description: 'Language preferences' }),
    __metadata("design:type", Array)
], CreateCustomerNatsRequest.prototype, "languagePreferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Communication preferences' }),
    __metadata("design:type", Object)
], CreateCustomerNatsRequest.prototype, "communicationPreferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], description: 'Tags' }),
    __metadata("design:type", Array)
], CreateCustomerNatsRequest.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], CreateCustomerNatsRequest.prototype, "notes", void 0);
/**
 * Update Customer Request
 * Pattern: crm.customer.update
 */
class UpdateCustomerNatsRequest {
    tenantId;
    customerId;
    updateDto;
}
exports.UpdateCustomerNatsRequest = UpdateCustomerNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], UpdateCustomerNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], UpdateCustomerNatsRequest.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer update data' }),
    __metadata("design:type", Object)
], UpdateCustomerNatsRequest.prototype, "updateDto", void 0);
/**
 * Customer Response
 */
class CustomerNatsResponse {
    id;
    tenantId;
    platformCustomerId;
    firstName;
    lastName;
    fullName;
    gender;
    dateOfBirth;
    email;
    phoneNumber;
    nationalIdType;
    nationalIdNumber;
    nationality;
    address;
    languagePreferences;
    communicationPreferences;
    tags;
    notes;
    isAnonymized;
    createdAt;
    updatedAt;
    firstSeenAt;
    lastSeenAt;
    totalBookings;
    totalSpent;
    lastBookingDate;
    membershipLevel;
    loyaltyPoints;
    loyaltyMembers;
}
exports.CustomerNatsResponse = CustomerNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Platform Customer ID' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "platformCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Full name' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: Gender, description: 'Gender' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date of birth' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email address' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: NationalIdType, description: 'National ID type' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "nationalIdType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'National ID number' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "nationalIdNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nationality' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Address information' }),
    __metadata("design:type", Object)
], CustomerNatsResponse.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], description: 'Language preferences' }),
    __metadata("design:type", Array)
], CustomerNatsResponse.prototype, "languagePreferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Communication preferences' }),
    __metadata("design:type", Object)
], CustomerNatsResponse.prototype, "communicationPreferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], description: 'Tags' }),
    __metadata("design:type", Array)
], CustomerNatsResponse.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether customer data is anonymized' }),
    __metadata("design:type", Boolean)
], CustomerNatsResponse.prototype, "isAnonymized", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Object)
], CustomerNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Object)
], CustomerNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'First seen timestamp' }),
    __metadata("design:type", Object)
], CustomerNatsResponse.prototype, "firstSeenAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last seen timestamp' }),
    __metadata("design:type", Object)
], CustomerNatsResponse.prototype, "lastSeenAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of bookings' }),
    __metadata("design:type", Number)
], CustomerNatsResponse.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount spent', example: '2500000.50' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "totalSpent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last booking date' }),
    __metadata("design:type", Object)
], CustomerNatsResponse.prototype, "lastBookingDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM'], description: 'Membership level' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "membershipLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty points balance' }),
    __metadata("design:type", Number)
], CustomerNatsResponse.prototype, "loyaltyPoints", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: 'array', description: 'Loyalty program memberships' }),
    __metadata("design:type", Array)
], CustomerNatsResponse.prototype, "loyaltyMembers", void 0);
/**
 * Customers List Data (for paginated responses)
 */
class CustomersListData {
    data;
    total;
    page;
    limit;
}
exports.CustomersListData = CustomersListData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of customers', type: 'array' }),
    __metadata("design:type", Array)
], CustomersListData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of customers' }),
    __metadata("design:type", Number)
], CustomersListData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], CustomersListData.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], CustomersListData.prototype, "limit", void 0);
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