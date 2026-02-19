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
exports.ExportDownloadData = exports.ExportStatusData = exports.ExportJobData = exports.FindAdvancedCustomersNatsRequest = exports.AdvancedCustomersListData = exports.AdvancedCustomerDto = exports.SegmentMembershipSummary = exports.CustomerSegmentSummary = exports.CustomerStatsData = exports.RecentCustomerInfo = exports.TopCustomerInfo = exports.MembershipDistribution = exports.CustomerStatsOverview = exports.RecalculateAllBookingStatsData = exports.RecalculateAllBookingStatsResultItem = exports.RecalculateBookingStatsData = exports.UpdateCustomerStatsResponseData = exports.FindOneCustomerNatsRequest = exports.CustomersListData = exports.CustomerNatsResponse = exports.UpdateCustomerNatsRequest = exports.CreateCustomerNatsRequest = exports.LoyaltyMemberInfo = exports.LoyaltyTierInfo = exports.EmergencyContact = exports.CustomerPreferences = exports.IdentificationInfo = exports.AddressInfo = exports.CommunicationChannel = exports.NationalIdType = exports.IdentificationType = exports.CustomerType = exports.Gender = void 0;
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
var CustomerType;
(function (CustomerType) {
    CustomerType["BOOKING_USER"] = "BOOKING_USER";
    CustomerType["GUEST_USER"] = "GUEST_USER";
    CustomerType["CORPORATE"] = "CORPORATE";
    CustomerType["GROUP"] = "GROUP";
})(CustomerType || (exports.CustomerType = CustomerType = {}));
var IdentificationType;
(function (IdentificationType) {
    IdentificationType["PASSPORT"] = "PASSPORT";
    IdentificationType["ID_CARD"] = "ID_CARD";
    IdentificationType["DRIVING_LICENSE"] = "DRIVING_LICENSE";
})(IdentificationType || (exports.IdentificationType = IdentificationType = {}));
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
 * Nested DTOs
 */
class AddressInfo {
    street;
    city;
    state;
    stateProvince;
    postalCode;
    country;
}
exports.AddressInfo = AddressInfo;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Street address' }),
    __metadata("design:type", String)
], AddressInfo.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'City' }),
    __metadata("design:type", String)
], AddressInfo.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'State/Province' }),
    __metadata("design:type", String)
], AddressInfo.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'State/Province (alias)' }),
    __metadata("design:type", String)
], AddressInfo.prototype, "stateProvince", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Postal code' }),
    __metadata("design:type", String)
], AddressInfo.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Country' }),
    __metadata("design:type", String)
], AddressInfo.prototype, "country", void 0);
class IdentificationInfo {
    type;
    number;
    issueDate;
    expiryDate;
    issuePlace;
}
exports.IdentificationInfo = IdentificationInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: IdentificationType, description: 'Identification document type' }),
    __metadata("design:type", String)
], IdentificationInfo.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identification document number' }),
    __metadata("design:type", String)
], IdentificationInfo.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Issue date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], IdentificationInfo.prototype, "issueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Expiry date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], IdentificationInfo.prototype, "expiryDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Place of issue' }),
    __metadata("design:type", String)
], IdentificationInfo.prototype, "issuePlace", void 0);
class CustomerPreferences {
    roomType;
    floor;
    bedType;
    smoking;
    specialRequests;
}
exports.CustomerPreferences = CustomerPreferences;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Preferred room type' }),
    __metadata("design:type", String)
], CustomerPreferences.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Preferred floor' }),
    __metadata("design:type", String)
], CustomerPreferences.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Preferred bed type' }),
    __metadata("design:type", String)
], CustomerPreferences.prototype, "bedType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Smoking preference' }),
    __metadata("design:type", Boolean)
], CustomerPreferences.prototype, "smoking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], description: 'Special requests' }),
    __metadata("design:type", Array)
], CustomerPreferences.prototype, "specialRequests", void 0);
class EmergencyContact {
    name;
    phone;
    relationship;
}
exports.EmergencyContact = EmergencyContact;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Emergency contact name' }),
    __metadata("design:type", String)
], EmergencyContact.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Emergency contact phone' }),
    __metadata("design:type", String)
], EmergencyContact.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Relationship to customer' }),
    __metadata("design:type", String)
], EmergencyContact.prototype, "relationship", void 0);
class LoyaltyTierInfo {
    name;
    level;
    color;
}
exports.LoyaltyTierInfo = LoyaltyTierInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tier name' }),
    __metadata("design:type", String)
], LoyaltyTierInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tier level' }),
    __metadata("design:type", Number)
], LoyaltyTierInfo.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tier color (hex or name)' }),
    __metadata("design:type", String)
], LoyaltyTierInfo.prototype, "color", void 0);
class LoyaltyMemberInfo {
    id;
    membershipId;
    currentPoints;
    lifetimePoints;
    tier;
    status;
}
exports.LoyaltyMemberInfo = LoyaltyMemberInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty member ID' }),
    __metadata("design:type", String)
], LoyaltyMemberInfo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Membership ID/Number' }),
    __metadata("design:type", String)
], LoyaltyMemberInfo.prototype, "membershipId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current points balance' }),
    __metadata("design:type", Number)
], LoyaltyMemberInfo.prototype, "currentPoints", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Lifetime points earned' }),
    __metadata("design:type", Number)
], LoyaltyMemberInfo.prototype, "lifetimePoints", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Membership tier information' }),
    __metadata("design:type", LoyaltyTierInfo)
], LoyaltyMemberInfo.prototype, "tier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Membership status' }),
    __metadata("design:type", String)
], LoyaltyMemberInfo.prototype, "status", void 0);
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
    type;
    firstName;
    lastName;
    fullName;
    gender;
    dateOfBirth;
    email;
    phoneNumber;
    phone;
    language;
    nationalIdType;
    nationalIdNumber;
    identification;
    nationality;
    address;
    preferences;
    emergencyContact;
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
    averageStayDuration;
    satisfactionScore;
    membershipLevel;
    loyaltyPoints;
    loyaltyMember;
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
    (0, swagger_1.ApiPropertyOptional)({ enum: CustomerType, description: 'Customer type' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "type", void 0);
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
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date of birth (YYYY-MM-DD)' }),
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
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number (alias for phoneNumber)' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Primary language preference' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: NationalIdType, description: 'National ID type (legacy)' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "nationalIdType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'National ID number (legacy)' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "nationalIdNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Identification document information' }),
    __metadata("design:type", IdentificationInfo)
], CustomerNatsResponse.prototype, "identification", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nationality' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Address information' }),
    __metadata("design:type", AddressInfo)
], CustomerNatsResponse.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer preferences (room, floor, bed, smoking)' }),
    __metadata("design:type", CustomerPreferences)
], CustomerNatsResponse.prototype, "preferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Emergency contact information' }),
    __metadata("design:type", EmergencyContact)
], CustomerNatsResponse.prototype, "emergencyContact", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], description: 'Language preferences (multiple)' }),
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
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
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
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last booking date', type: String }),
    __metadata("design:type", Object)
], CustomerNatsResponse.prototype, "lastBookingDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Average stay duration in nights' }),
    __metadata("design:type", Number)
], CustomerNatsResponse.prototype, "averageStayDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer satisfaction score (0-5)', example: 4.5 }),
    __metadata("design:type", Number)
], CustomerNatsResponse.prototype, "satisfactionScore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM'], description: 'Membership level (legacy)' }),
    __metadata("design:type", String)
], CustomerNatsResponse.prototype, "membershipLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty points balance (legacy - use loyaltyMember.currentPoints)' }),
    __metadata("design:type", Number)
], CustomerNatsResponse.prototype, "loyaltyPoints", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Loyalty member information (single active membership)' }),
    __metadata("design:type", LoyaltyMemberInfo)
], CustomerNatsResponse.prototype, "loyaltyMember", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: 'array', description: 'Loyalty program memberships (legacy - multiple memberships)' }),
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
    (0, swagger_1.ApiProperty)({ description: 'List of customers', type: [CustomerNatsResponse] }),
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
 * Find One Customer Request
 * Pattern: crm.customer.findOne
 */
class FindOneCustomerNatsRequest {
    tenantId;
    customerId;
}
exports.FindOneCustomerNatsRequest = FindOneCustomerNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindOneCustomerNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], FindOneCustomerNatsRequest.prototype, "customerId", void 0);
/**
 * Update Stats Response
 */
/**
 * Update Stats Response Data
 */
class UpdateCustomerStatsResponseData {
    success;
    auditId;
}
exports.UpdateCustomerStatsResponseData = UpdateCustomerStatsResponseData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Operation success status' }),
    __metadata("design:type", Boolean)
], UpdateCustomerStatsResponseData.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Audit log ID for this update' }),
    __metadata("design:type", String)
], UpdateCustomerStatsResponseData.prototype, "auditId", void 0);
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
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last booking date', type: String }),
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
/**
 * Recalculate All Booking Stats Result Item
 */
class RecalculateAllBookingStatsResultItem {
    customerId;
    email;
    success;
    error;
}
exports.RecalculateAllBookingStatsResultItem = RecalculateAllBookingStatsResultItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], RecalculateAllBookingStatsResultItem.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer email' }),
    __metadata("design:type", String)
], RecalculateAllBookingStatsResultItem.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the recalculation was successful' }),
    __metadata("design:type", Boolean)
], RecalculateAllBookingStatsResultItem.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Error message if failed' }),
    __metadata("design:type", String)
], RecalculateAllBookingStatsResultItem.prototype, "error", void 0);
/**
 * Recalculate All Booking Stats Data
 */
class RecalculateAllBookingStatsData {
    totalProcessed;
    successful;
    failed;
    results;
}
exports.RecalculateAllBookingStatsData = RecalculateAllBookingStatsData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of customers processed' }),
    __metadata("design:type", Number)
], RecalculateAllBookingStatsData.prototype, "totalProcessed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of successful recalculations' }),
    __metadata("design:type", Number)
], RecalculateAllBookingStatsData.prototype, "successful", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of failed recalculations' }),
    __metadata("design:type", Number)
], RecalculateAllBookingStatsData.prototype, "failed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Individual results for each customer', type: [RecalculateAllBookingStatsResultItem] }),
    __metadata("design:type", Array)
], RecalculateAllBookingStatsData.prototype, "results", void 0);
/**
 * Customer Stats Overview
 */
class CustomerStatsOverview {
    totalCustomers;
    newCustomersLast30Days;
    averageSpent;
    totalRevenue;
    averageBookings;
}
exports.CustomerStatsOverview = CustomerStatsOverview;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of customers' }),
    __metadata("design:type", Number)
], CustomerStatsOverview.prototype, "totalCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of new customers in last 30 days' }),
    __metadata("design:type", Number)
], CustomerStatsOverview.prototype, "newCustomersLast30Days", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average amount spent per customer' }),
    __metadata("design:type", String)
], CustomerStatsOverview.prototype, "averageSpent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue from all customers' }),
    __metadata("design:type", String)
], CustomerStatsOverview.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average number of bookings per customer' }),
    __metadata("design:type", Number)
], CustomerStatsOverview.prototype, "averageBookings", void 0);
/**
 * Membership Distribution
 */
class MembershipDistribution {
    bronze;
    silver;
    gold;
    platinum;
}
exports.MembershipDistribution = MembershipDistribution;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of bronze members' }),
    __metadata("design:type", Number)
], MembershipDistribution.prototype, "bronze", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of silver members' }),
    __metadata("design:type", Number)
], MembershipDistribution.prototype, "silver", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of gold members' }),
    __metadata("design:type", Number)
], MembershipDistribution.prototype, "gold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of platinum members' }),
    __metadata("design:type", Number)
], MembershipDistribution.prototype, "platinum", void 0);
/**
 * Top Customer Info
 */
class TopCustomerInfo {
    id;
    name;
    email;
    totalSpent;
    membershipLevel;
}
exports.TopCustomerInfo = TopCustomerInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], TopCustomerInfo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer name' }),
    __metadata("design:type", String)
], TopCustomerInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer email' }),
    __metadata("design:type", String)
], TopCustomerInfo.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount spent' }),
    __metadata("design:type", String)
], TopCustomerInfo.prototype, "totalSpent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Membership level' }),
    __metadata("design:type", String)
], TopCustomerInfo.prototype, "membershipLevel", void 0);
/**
 * Recent Customer Info
 */
class RecentCustomerInfo {
    id;
    name;
    email;
    createdAt;
}
exports.RecentCustomerInfo = RecentCustomerInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], RecentCustomerInfo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer name' }),
    __metadata("design:type", String)
], RecentCustomerInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer email' }),
    __metadata("design:type", String)
], RecentCustomerInfo.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], RecentCustomerInfo.prototype, "createdAt", void 0);
/**
 * Customer Stats Response Data
 */
class CustomerStatsData {
    overview;
    membershipDistribution;
    topCustomers;
    recentCustomers;
}
exports.CustomerStatsData = CustomerStatsData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overview statistics', type: CustomerStatsOverview }),
    __metadata("design:type", CustomerStatsOverview)
], CustomerStatsData.prototype, "overview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Membership distribution', type: MembershipDistribution }),
    __metadata("design:type", MembershipDistribution)
], CustomerStatsData.prototype, "membershipDistribution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Top customers by spending', type: [TopCustomerInfo] }),
    __metadata("design:type", Array)
], CustomerStatsData.prototype, "topCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Recently registered customers', type: [RecentCustomerInfo] }),
    __metadata("design:type", Array)
], CustomerStatsData.prototype, "recentCustomers", void 0);
/**
 * Customer Segment Summary (for advanced customer response)
 */
class CustomerSegmentSummary {
    name;
    type;
    color;
}
exports.CustomerSegmentSummary = CustomerSegmentSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment name' }),
    __metadata("design:type", String)
], CustomerSegmentSummary.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment type', enum: ['RFM', 'BEHAVIORAL', 'DEMOGRAPHIC', 'GEOGRAPHIC', 'VALUE_BASED', 'LIFECYCLE', 'CUSTOM'] }),
    __metadata("design:type", String)
], CustomerSegmentSummary.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Segment display color' }),
    __metadata("design:type", String)
], CustomerSegmentSummary.prototype, "color", void 0);
/**
 * Segment Membership Summary (for advanced customer response)
 */
class SegmentMembershipSummary {
    segment;
}
exports.SegmentMembershipSummary = SegmentMembershipSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Segment information', type: () => CustomerSegmentSummary }),
    __metadata("design:type", CustomerSegmentSummary)
], SegmentMembershipSummary.prototype, "segment", void 0);
/**
 * Advanced Customer DTO - extends CustomerNatsResponse with enriched segment and VIP data
 */
class AdvancedCustomerDto extends CustomerNatsResponse {
    isVip;
    segmentMemberships;
    relationshipCount;
}
exports.AdvancedCustomerDto = AdvancedCustomerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the customer is a VIP (tier GOLD or PLATINUM)' }),
    __metadata("design:type", Boolean)
], AdvancedCustomerDto.prototype, "isVip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Active segment memberships', type: [SegmentMembershipSummary] }),
    __metadata("design:type", Array)
], AdvancedCustomerDto.prototype, "segmentMemberships", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of relationships (currently always 0, reserved for future use)', default: 0 }),
    __metadata("design:type", Number)
], AdvancedCustomerDto.prototype, "relationshipCount", void 0);
/**
 * Advanced Customers List Data (paginated)
 */
class AdvancedCustomersListData {
    data;
    total;
    page;
    limit;
}
exports.AdvancedCustomersListData = AdvancedCustomersListData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of advanced customers', type: [AdvancedCustomerDto] }),
    __metadata("design:type", Array)
], AdvancedCustomersListData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of customers' }),
    __metadata("design:type", Number)
], AdvancedCustomersListData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], AdvancedCustomersListData.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], AdvancedCustomersListData.prototype, "limit", void 0);
/**
 * Find All Advanced Customers Request
 * Pattern: crm.customer.findAllAdvanced
 */
class FindAdvancedCustomersNatsRequest {
    tenantId;
    page;
    limit;
    search;
    nationality;
    membershipLevel;
}
exports.FindAdvancedCustomersNatsRequest = FindAdvancedCustomersNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindAdvancedCustomersNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    __metadata("design:type", Number)
], FindAdvancedCustomersNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 25 }),
    __metadata("design:type", Number)
], FindAdvancedCustomersNatsRequest.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search text (name, email, phone)' }),
    __metadata("design:type", String)
], FindAdvancedCustomersNatsRequest.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by nationality' }),
    __metadata("design:type", String)
], FindAdvancedCustomersNatsRequest.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by membership level', enum: ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM'] }),
    __metadata("design:type", String)
], FindAdvancedCustomersNatsRequest.prototype, "membershipLevel", void 0);
/**
 * Export Job Data
 */
class ExportJobData {
    jobId;
    status;
    totalRecords;
    processedRecords;
    estimatedCompletion;
}
exports.ExportJobData = ExportJobData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Export job ID' }),
    __metadata("design:type", String)
], ExportJobData.prototype, "jobId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Export job status' }),
    __metadata("design:type", String)
], ExportJobData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of records to export' }),
    __metadata("design:type", Number)
], ExportJobData.prototype, "totalRecords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of records processed' }),
    __metadata("design:type", Number)
], ExportJobData.prototype, "processedRecords", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated completion time' }),
    __metadata("design:type", String)
], ExportJobData.prototype, "estimatedCompletion", void 0);
/**
 * Export Status Data
 */
class ExportStatusData {
    jobId;
    status;
    progress;
    totalRecords;
    processedRecords;
    downloadUrl;
    error;
    startedAt;
    completedAt;
}
exports.ExportStatusData = ExportStatusData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Export job ID' }),
    __metadata("design:type", String)
], ExportStatusData.prototype, "jobId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Export job status' }),
    __metadata("design:type", String)
], ExportStatusData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Export progress percentage (0-100)' }),
    __metadata("design:type", Number)
], ExportStatusData.prototype, "progress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of records to export' }),
    __metadata("design:type", Number)
], ExportStatusData.prototype, "totalRecords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of records processed' }),
    __metadata("design:type", Number)
], ExportStatusData.prototype, "processedRecords", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Download URL when completed' }),
    __metadata("design:type", String)
], ExportStatusData.prototype, "downloadUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Error message if failed' }),
    __metadata("design:type", String)
], ExportStatusData.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Export start timestamp' }),
    __metadata("design:type", String)
], ExportStatusData.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Export completion timestamp' }),
    __metadata("design:type", String)
], ExportStatusData.prototype, "completedAt", void 0);
/**
 * Export Download Data
 */
class ExportDownloadData {
    buffer;
    filename;
    mimeType;
}
exports.ExportDownloadData = ExportDownloadData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File buffer (base64 encoded)' }),
    __metadata("design:type", String)
], ExportDownloadData.prototype, "buffer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Export filename' }),
    __metadata("design:type", String)
], ExportDownloadData.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File MIME type' }),
    __metadata("design:type", String)
], ExportDownloadData.prototype, "mimeType", void 0);
//# sourceMappingURL=customers.nats.js.map