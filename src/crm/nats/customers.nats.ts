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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * Enums
 */
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum NationalIdType {
  PASSPORT = 'PASSPORT',
  CITIZEN_ID = 'CITIZEN_ID',
  DRIVING_LICENSE = 'DRIVING_LICENSE',
}

export enum CommunicationChannel {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  APP_NOTIFICATION = 'APP_NOTIFICATION',
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
export class CreateCustomerNatsRequest {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;

  @ApiProperty({ description: 'First name' })
  firstName!: string;

  @ApiProperty({ description: 'Last name' })
  lastName!: string;

  @ApiPropertyOptional({ enum: Gender, description: 'Gender' })
  gender?: Gender;

  @ApiPropertyOptional({ description: 'Date of birth (YYYY-MM-DD)' })
  dateOfBirth?: string;

  @ApiPropertyOptional({ description: 'Email address' })
  email?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  phoneNumber?: string;

  @ApiPropertyOptional({ enum: NationalIdType, description: 'National ID type' })
  nationalIdType?: NationalIdType;

  @ApiPropertyOptional({ description: 'National ID number' })
  nationalIdNumber?: string;

  @ApiPropertyOptional({ description: 'Nationality' })
  nationality?: string;

  @ApiPropertyOptional({ description: 'Address information' })
  address?: AddressRequest;

  @ApiPropertyOptional({ type: [String], description: 'Language preferences' })
  languagePreferences?: string[];

  @ApiPropertyOptional({ description: 'Communication preferences' })
  communicationPreferences?: CommunicationPreferencesRequest;

  @ApiPropertyOptional({ type: [String], description: 'Tags' })
  tags?: string[];

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;
}

/**
 * Update Customer Request
 * Pattern: crm.customer.update
 */
export class UpdateCustomerNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Customer ID' })
  customerId!: string;

  @ApiProperty({ description: 'Customer update data' })
  updateDto!: Partial<CreateCustomerNatsRequest>;
}

/**
 * Update Customer Response
 */
export type UpdateCustomerNatsResponse = NatsResponse<CustomerNatsResponse>;

/**
 * Customer Response
 */
export class CustomerNatsResponse {
  @ApiProperty({ description: 'Customer ID' })
  id!: string;

  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Platform Customer ID' })
  platformCustomerId?: string;

  @ApiProperty({ description: 'First name' })
  firstName!: string;

  @ApiProperty({ description: 'Last name' })
  lastName!: string;

  @ApiPropertyOptional({ description: 'Full name' })
  fullName?: string;

  @ApiPropertyOptional({ enum: Gender, description: 'Gender' })
  gender?: Gender;

  @ApiPropertyOptional({ description: 'Date of birth' })
  dateOfBirth?: string;

  @ApiPropertyOptional({ description: 'Email address' })
  email?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  phoneNumber?: string;

  @ApiPropertyOptional({ enum: NationalIdType, description: 'National ID type' })
  nationalIdType?: NationalIdType;

  @ApiPropertyOptional({ description: 'National ID number' })
  nationalIdNumber?: string;

  @ApiPropertyOptional({ description: 'Nationality' })
  nationality?: string;

  @ApiPropertyOptional({ description: 'Address information' })
  address?: AddressRequest;

  @ApiPropertyOptional({ type: [String], description: 'Language preferences' })
  languagePreferences?: string[];

  @ApiPropertyOptional({ description: 'Communication preferences' })
  communicationPreferences?: CommunicationPreferencesRequest;

  @ApiPropertyOptional({ type: [String], description: 'Tags' })
  tags?: string[];

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiProperty({ description: 'Whether customer data is anonymized' })
  isAnonymized!: boolean;

  @ApiProperty({ description: 'Creation timestamp', type: String })
  createdAt!: string | Date;

  @ApiProperty({ description: 'Last update timestamp', type: String })
  updatedAt!: string | Date;

  @ApiPropertyOptional({ description: 'First seen timestamp' })
  firstSeenAt?: string | Date;

  @ApiPropertyOptional({ description: 'Last seen timestamp' })
  lastSeenAt?: string | Date;

  @ApiProperty({ description: 'Total number of bookings' })
  totalBookings!: number;

  @ApiProperty({ description: 'Total amount spent', example: '2500000.50' })
  totalSpent!: string;

  @ApiPropertyOptional({ description: 'Last booking date' })
  lastBookingDate?: string | Date;

  @ApiPropertyOptional({ enum: ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM'], description: 'Membership level' })
  membershipLevel?: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';

  @ApiProperty({ description: 'Loyalty points balance' })
  loyaltyPoints!: number;

  @ApiPropertyOptional({ type: 'array', description: 'Loyalty program memberships' })
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
export class CustomersListData {
  @ApiProperty({ description: 'List of customers', type: 'array' })
  data!: CustomerNatsResponse[];

  @ApiProperty({ description: 'Total number of customers' })
  total!: number;

  @ApiProperty({ description: 'Current page number' })
  page!: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit!: number;
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
export type RemoveCustomerNatsResponse = NatsResponse<{ success: boolean }>;

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
export class RecalculateBookingStatsData {
  @ApiProperty({ description: 'Total number of bookings' })
  totalBookings: number;

  @ApiProperty({ description: 'Total amount spent', example: '2500000.50' })
  totalSpent: string;

  @ApiPropertyOptional({ description: 'Last booking date' })
  lastBookingDate?: string | Date;

  @ApiPropertyOptional({ description: 'Current membership level' })
  membershipLevel?: string;

  @ApiProperty({ description: 'Previous total bookings count' })
  previousTotalBookings: number;

  @ApiProperty({ description: 'Previous total amount spent', example: '2000000.00' })
  previousTotalSpent: string;

  @ApiPropertyOptional({ description: 'Previous membership level' })
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
export class RecalculateAllBookingStatsResultItem {
  @ApiProperty({ description: 'Customer ID' })
  customerId!: string;

  @ApiPropertyOptional({ description: 'Customer email' })
  email?: string;

  @ApiProperty({ description: 'Whether the recalculation was successful' })
  success!: boolean;

  @ApiPropertyOptional({ description: 'Error message if failed' })
  error?: string;
}

/**
 * Recalculate All Booking Stats Data
 */
export class RecalculateAllBookingStatsData {
  @ApiProperty({ description: 'Total number of customers processed' })
  totalProcessed!: number;

  @ApiProperty({ description: 'Number of successful recalculations' })
  successful!: number;

  @ApiProperty({ description: 'Number of failed recalculations' })
  failed!: number;

  @ApiProperty({ description: 'Individual results for each customer', type: [RecalculateAllBookingStatsResultItem] })
  results!: RecalculateAllBookingStatsResultItem[];
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
 * Customer Stats Overview
 */
export class CustomerStatsOverview {
  @ApiProperty({ description: 'Total number of customers' })
  totalCustomers!: number;

  @ApiProperty({ description: 'Number of new customers in last 30 days' })
  newCustomersLast30Days!: number;

  @ApiProperty({ description: 'Average amount spent per customer' })
  averageSpent!: string;

  @ApiProperty({ description: 'Total revenue from all customers' })
  totalRevenue!: string;

  @ApiProperty({ description: 'Average number of bookings per customer' })
  averageBookings!: number;
}

/**
 * Membership Distribution
 */
export class MembershipDistribution {
  @ApiProperty({ description: 'Number of bronze members' })
  bronze!: number;

  @ApiProperty({ description: 'Number of silver members' })
  silver!: number;

  @ApiProperty({ description: 'Number of gold members' })
  gold!: number;

  @ApiProperty({ description: 'Number of platinum members' })
  platinum!: number;
}

/**
 * Top Customer Info
 */
export class TopCustomerInfo {
  @ApiProperty({ description: 'Customer ID' })
  id!: string;

  @ApiProperty({ description: 'Customer name' })
  name!: string;

  @ApiProperty({ description: 'Customer email' })
  email!: string;

  @ApiProperty({ description: 'Total amount spent' })
  totalSpent!: string;

  @ApiProperty({ description: 'Membership level' })
  membershipLevel!: string;
}

/**
 * Recent Customer Info
 */
export class RecentCustomerInfo {
  @ApiProperty({ description: 'Customer ID' })
  id!: string;

  @ApiProperty({ description: 'Customer name' })
  name!: string;

  @ApiProperty({ description: 'Customer email' })
  email!: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt!: string;
}

/**
 * Customer Stats Response Data
 */
export class CustomerStatsData {
  @ApiProperty({ description: 'Overview statistics', type: CustomerStatsOverview })
  overview!: CustomerStatsOverview;

  @ApiProperty({ description: 'Membership distribution', type: MembershipDistribution })
  membershipDistribution!: MembershipDistribution;

  @ApiProperty({ description: 'Top customers by spending', type: [TopCustomerInfo] })
  topCustomers!: TopCustomerInfo[];

  @ApiProperty({ description: 'Recently registered customers', type: [RecentCustomerInfo] })
  recentCustomers!: RecentCustomerInfo[];
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
export class ExportJobData {
  @ApiProperty({ description: 'Export job ID' })
  jobId!: string;

  @ApiProperty({ description: 'Export job status' })
  status!: string;

  @ApiProperty({ description: 'Total number of records to export' })
  totalRecords!: number;

  @ApiProperty({ description: 'Number of records processed' })
  processedRecords!: number;

  @ApiPropertyOptional({ description: 'Estimated completion time' })
  estimatedCompletion?: string;
}

/**
 * Export Status Data
 */
export class ExportStatusData {
  @ApiProperty({ description: 'Export job ID' })
  jobId!: string;

  @ApiProperty({ description: 'Export job status' })
  status!: string;

  @ApiProperty({ description: 'Export progress percentage (0-100)' })
  progress!: number;

  @ApiProperty({ description: 'Total number of records to export' })
  totalRecords!: number;

  @ApiProperty({ description: 'Number of records processed' })
  processedRecords!: number;

  @ApiPropertyOptional({ description: 'Download URL when completed' })
  downloadUrl?: string;

  @ApiPropertyOptional({ description: 'Error message if failed' })
  error?: string;

  @ApiProperty({ description: 'Export start timestamp' })
  startedAt!: string;

  @ApiPropertyOptional({ description: 'Export completion timestamp' })
  completedAt?: string;
}

/**
 * Export Download Data
 */
export class ExportDownloadData {
  @ApiProperty({ description: 'File buffer (base64 encoded)' })
  buffer!: string;

  @ApiProperty({ description: 'Export filename' })
  filename!: string;

  @ApiProperty({ description: 'File MIME type' })
  mimeType!: string;
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
