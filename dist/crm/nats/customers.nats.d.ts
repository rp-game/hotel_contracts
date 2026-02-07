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
import { NatsResponse } from '../../common';
/**
 * Enums
 */
export declare enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}
export declare enum NationalIdType {
    PASSPORT = "PASSPORT",
    CITIZEN_ID = "CITIZEN_ID",
    DRIVING_LICENSE = "DRIVING_LICENSE"
}
export declare enum CommunicationChannel {
    EMAIL = "EMAIL",
    SMS = "SMS",
    APP_NOTIFICATION = "APP_NOTIFICATION"
}
/**
 * Nested DTOs
 */
export interface AddressRequest {
    street?: string;
    city?: string;
    stateProvince?: string;
    postalCode?: string;
    country?: string;
}
export interface CommunicationPreferencesRequest {
    allowEmailMarketing?: boolean;
    allowSmsMarketing?: boolean;
    preferredChannel?: CommunicationChannel;
}
/**
 * Create Customer Request
 * Pattern: crm.customer.create
 */
export interface CreateCustomerNatsRequest {
    tenantId?: string;
    firstName: string;
    lastName: string;
    gender?: Gender;
    dateOfBirth?: string;
    email?: string;
    phoneNumber?: string;
    nationalIdType?: NationalIdType;
    nationalIdNumber?: string;
    nationality?: string;
    address?: AddressRequest;
    languagePreferences?: string[];
    communicationPreferences?: CommunicationPreferencesRequest;
    tags?: string[];
    notes?: string;
}
/**
 * Update Customer Request
 * Pattern: crm.customer.update
 */
export interface UpdateCustomerNatsRequest {
    tenantId: string;
    customerId: string;
    updateDto: Partial<CreateCustomerNatsRequest>;
}
/**
 * Update Customer Response
 */
export type UpdateCustomerNatsResponse = NatsResponse<CustomerNatsResponse>;
/**
 * Customer Response
 */
export interface CustomerNatsResponse {
    id: string;
    tenantId?: string;
    platformCustomerId?: string;
    firstName: string;
    lastName: string;
    fullName?: string;
    gender?: Gender;
    dateOfBirth?: string;
    email?: string;
    phoneNumber?: string;
    nationalIdType?: NationalIdType;
    nationalIdNumber?: string;
    nationality?: string;
    address?: AddressRequest;
    languagePreferences?: string[];
    communicationPreferences?: CommunicationPreferencesRequest;
    tags?: string[];
    notes?: string;
    isAnonymized: boolean;
    createdAt: string | Date;
    updatedAt: string | Date;
    firstSeenAt?: string | Date;
    lastSeenAt?: string | Date;
    totalBookings: number;
    totalSpent: string;
    lastBookingDate?: string | Date;
    membershipLevel?: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';
    loyaltyPoints: number;
    loyaltyMembers?: any[];
}
/**
 * Create Customer Response
 */
export type CreateCustomerNatsResponse = NatsResponse<CustomerNatsResponse>;
/**
 * Find All Customers Request
 * Pattern: crm.customer.findAll
 */
export interface FindAllCustomersNatsRequest {
    tenantId: string;
    page?: number;
    limit?: number;
    search?: string;
    nationality?: string;
    membershipLevel?: string;
}
/**
 * Customers List Data (for paginated responses)
 */
export declare class CustomersListData {
    data: CustomerNatsResponse[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Find All Customers Response
 */
export type FindAllCustomersNatsResponse = NatsResponse<CustomersListData>;
/**
 * Find One Customer Request
 * Pattern: crm.customer.findOne
 */
export interface FindOneCustomerNatsRequest {
    tenantId: string;
    customerId: string;
}
/**
 * Find One Customer Response
 */
export type FindOneCustomerNatsResponse = NatsResponse<CustomerNatsResponse>;
/**
 * Remove Customer Request
 * Pattern: crm.customer.remove
 */
export interface RemoveCustomerNatsRequest {
    tenantId: string;
    customerId: string;
}
/**
 * Remove Customer Response
 */
export type RemoveCustomerNatsResponse = NatsResponse<{
    success: boolean;
}>;
/**
 * Find By Email Request
 * Pattern: crm.customer.findByEmail
 */
export interface FindByEmailNatsRequest {
    tenantId: string;
    email: string;
}
/**
 * Find By Email Response
 */
export type FindByEmailNatsResponse = NatsResponse<CustomerNatsResponse | null>;
/**
 * Find By Phone Request
 * Pattern: crm.customer.findByPhone
 */
export interface FindByPhoneNatsRequest {
    tenantId: string;
    phone: string;
}
/**
 * Find By Phone Response
 */
export type FindByPhoneNatsResponse = NatsResponse<CustomerNatsResponse | null>;
/**
 * Update Stats Request
 * Pattern: crm.customer.updateStats
 */
export interface UpdateStatsNatsRequest {
    tenantId: string;
    customerId: string;
    bookingAmount: string;
    lastBookingDate?: string;
    reason?: string;
    notes?: string;
    auditContext?: {
        userId: string;
        ipAddress: string;
        userAgent: string;
        timestamp: string;
    };
}
/**
 * Update Stats Response
 */
export type UpdateStatsNatsResponse = NatsResponse<{
    success: boolean;
    auditId: string;
}>;
/**
 * Recalculate Booking Stats Data
 */
export declare class RecalculateBookingStatsData {
    totalBookings: number;
    totalSpent: string;
    lastBookingDate?: string | Date;
    membershipLevel?: string;
    previousTotalBookings: number;
    previousTotalSpent: string;
    previousMembershipLevel?: string;
}
/**
 * Recalculate Booking Stats Request
 * Pattern: crm.customer.recalculateBookingStats
 */
export interface RecalculateBookingStatsNatsRequest {
    tenantId: string;
    customerId: string;
    userId?: string;
}
/**
 * Recalculate Booking Stats Response
 */
export type RecalculateBookingStatsNatsResponse = NatsResponse<RecalculateBookingStatsData>;
/**
 * Recalculate All Booking Stats Result Item
 */
export interface RecalculateAllBookingStatsResultItem {
    customerId: string;
    email?: string;
    success: boolean;
    error?: string;
}
/**
 * Recalculate All Booking Stats Data
 */
export interface RecalculateAllBookingStatsData {
    totalProcessed: number;
    successful: number;
    failed: number;
    results: RecalculateAllBookingStatsResultItem[];
}
/**
 * Recalculate All Booking Stats Request
 * Pattern: crm.customer.recalculateAllBookingStats
 */
export interface RecalculateAllBookingStatsNatsRequest {
    tenantId: string;
    userId?: string;
}
/**
 * Recalculate All Booking Stats Response
 */
export type RecalculateAllBookingStatsNatsResponse = NatsResponse<RecalculateAllBookingStatsData>;
/**
 * Customer Stats Request
 * Pattern: crm.customer.stats
 */
export interface CustomerStatsNatsRequest {
    tenantId: string;
    startDate?: string;
    endDate?: string;
    includeDetails?: boolean;
}
/**
 * Customer Stats Response
 */
export interface CustomerStatsData {
    overview: {
        totalCustomers: number;
        newCustomersLast30Days: number;
        averageSpent: string;
        totalRevenue: string;
        averageBookings: number;
    };
    membershipDistribution: {
        bronze: number;
        silver: number;
        gold: number;
        platinum: number;
    };
    topCustomers: Array<{
        id: string;
        name: string;
        email: string;
        totalSpent: string;
        membershipLevel: string;
    }>;
    recentCustomers: Array<{
        id: string;
        name: string;
        email: string;
        createdAt: string;
    }>;
}
export type CustomerStatsNatsResponse = NatsResponse<CustomerStatsData>;
/**
 * Find By Customer Loyalty Data
 */
export interface FindByCustomerLoyaltyData {
    customerId: string;
    loyaltyTier: string;
    loyaltyPoints: number;
    memberSince: string;
    benefits: string[];
}
/**
 * Find By Customer Request
 * Pattern: crm.loyalty.findByCustomer
 */
export interface FindByCustomerNatsRequest {
    tenantId: string;
    customerId: string;
}
/**
 * Find By Customer Response
 */
export type FindByCustomerNatsResponse = NatsResponse<FindByCustomerLoyaltyData>;
/**
 * Search Customers Request
 * Pattern: crm.customer.search
 */
export interface SearchCustomersNatsRequest {
    tenantId: string;
    q?: string;
    phone?: string;
    email?: string;
    limit?: number;
}
/**
 * Search Customers Response
 */
export type SearchCustomersNatsResponse = NatsResponse<CustomersListData>;
/**
 * Export Job Data
 */
export interface ExportJobData {
    jobId: string;
    status: string;
    totalRecords: number;
    processedRecords: number;
    estimatedCompletion?: string;
}
/**
 * Export Status Data
 */
export interface ExportStatusData {
    jobId: string;
    status: string;
    progress: number;
    totalRecords: number;
    processedRecords: number;
    downloadUrl?: string;
    error?: string;
    startedAt: string;
    completedAt?: string;
}
/**
 * Export Download Data
 */
export interface ExportDownloadData {
    buffer: string;
    filename: string;
    mimeType: string;
}
/**
 * Export Customers Request
 * Pattern: crm.customer.export
 */
export interface ExportCustomersNatsRequest {
    tenantId: string;
    format: 'excel' | 'csv';
    filters?: any;
    fields?: string[];
    includeSensitive?: boolean;
    chunkSize?: number;
}
/**
 * Export Customers Response
 */
export type ExportCustomersNatsResponse = NatsResponse<ExportJobData>;
/**
 * Export Status Request
 * Pattern: crm.customer.export.status
 */
export interface ExportStatusNatsRequest {
    tenantId: string;
    jobId: string;
}
/**
 * Export Status Response
 */
export type ExportStatusNatsResponse = NatsResponse<ExportStatusData>;
/**
 * Export Download Request
 * Pattern: crm.customer.export.download
 */
export interface ExportDownloadNatsRequest {
    tenantId: string;
    jobId: string;
}
/**
 * Export Download Response
 */
export type ExportDownloadNatsResponse = NatsResponse<ExportDownloadData>;
//# sourceMappingURL=customers.nats.d.ts.map