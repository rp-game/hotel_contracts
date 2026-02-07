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

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt!: string | Date;

  @ApiProperty({ description: 'Last update timestamp' })
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
