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
exports.ExportDownloadData = exports.ExportStatusData = exports.ExportJobData = exports.CustomerStatsData = exports.RecentCustomerInfo = exports.TopCustomerInfo = exports.MembershipDistribution = exports.CustomerStatsOverview = exports.RecalculateAllBookingStatsData = exports.RecalculateAllBookingStatsResultItem = exports.RecalculateBookingStatsData = exports.CustomersListData = exports.CustomerNatsResponse = exports.UpdateCustomerNatsRequest = exports.CreateCustomerNatsRequest = exports.CommunicationChannel = exports.NationalIdType = exports.Gender = void 0;
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