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

export enum CustomerType {
  BOOKING_USER = 'BOOKING_USER',
  GUEST_USER = 'GUEST_USER',
  CORPORATE = 'CORPORATE',
  GROUP = 'GROUP',
}

export enum IdentificationType {
  PASSPORT = 'PASSPORT',
  ID_CARD = 'ID_CARD',
  DRIVING_LICENSE = 'DRIVING_LICENSE',
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
export class AddressInfo {
  @ApiPropertyOptional({ description: 'Street address' })
  street?: string;

  @ApiPropertyOptional({ description: 'City' })
  city?: string;

  @ApiPropertyOptional({ description: 'State/Province' })
  state?: string;

  @ApiPropertyOptional({ description: 'State/Province (alias)' })
  stateProvince?: string;

  @ApiPropertyOptional({ description: 'Postal code' })
  postalCode?: string;

  @ApiPropertyOptional({ description: 'Country' })
  country?: string;
}

export interface AddressRequest {
  street?: string;
  city?: string;
  stateProvince?: string;
  postalCode?: string;
  country?: string;
}

export class IdentificationInfo {
  @ApiProperty({ enum: IdentificationType, description: 'Identification document type' })
  type!: IdentificationType;

  @ApiProperty({ description: 'Identification document number' })
  number!: string;

  @ApiPropertyOptional({ description: 'Issue date (YYYY-MM-DD)' })
  issueDate?: string;

  @ApiPropertyOptional({ description: 'Expiry date (YYYY-MM-DD)' })
  expiryDate?: string;

  @ApiPropertyOptional({ description: 'Place of issue' })
  issuePlace?: string;
}

export class CustomerPreferences {
  @ApiPropertyOptional({ description: 'Preferred room type' })
  roomType?: string;

  @ApiPropertyOptional({ description: 'Preferred floor' })
  floor?: string;

  @ApiPropertyOptional({ description: 'Preferred bed type' })
  bedType?: string;

  @ApiPropertyOptional({ description: 'Smoking preference' })
  smoking?: boolean;

  @ApiPropertyOptional({ type: [String], description: 'Special requests' })
  specialRequests?: string[];
}

export class EmergencyContact {
  @ApiProperty({ description: 'Emergency contact name' })
  name!: string;

  @ApiProperty({ description: 'Emergency contact phone' })
  phone!: string;

  @ApiProperty({ description: 'Relationship to customer' })
  relationship!: string;
}

export class LoyaltyTierInfo {
  @ApiProperty({ description: 'Tier name' })
  name!: string;

  @ApiProperty({ description: 'Tier level' })
  level!: number;

  @ApiProperty({ description: 'Tier color (hex or name)' })
  color!: string;
}

export class LoyaltyMemberInfo {
  @ApiProperty({ description: 'Loyalty member ID' })
  id!: string;

  @ApiProperty({ description: 'Membership ID/Number' })
  membershipId!: string;

  @ApiProperty({ description: 'Current points balance' })
  currentPoints!: number;

  @ApiProperty({ description: 'Lifetime points earned' })
  lifetimePoints!: number;

  @ApiProperty({ description: 'Membership tier information' })
  tier!: LoyaltyTierInfo;

  @ApiProperty({ description: 'Membership status' })
  status!: string;
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

  @ApiPropertyOptional({ enum: CustomerType, description: 'Customer type' })
  type?: CustomerType;

  @ApiProperty({ description: 'First name' })
  firstName!: string;

  @ApiProperty({ description: 'Last name' })
  lastName!: string;

  @ApiPropertyOptional({ description: 'Full name' })
  fullName?: string;

  @ApiPropertyOptional({ enum: Gender, description: 'Gender' })
  gender?: Gender;

  @ApiPropertyOptional({ description: 'Date of birth (YYYY-MM-DD)' })
  dateOfBirth?: string;

  @ApiPropertyOptional({ description: 'Email address' })
  email?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  phoneNumber?: string;

  @ApiPropertyOptional({ description: 'Phone number (alias for phoneNumber)' })
  phone?: string;

  @ApiPropertyOptional({ description: 'Primary language preference' })
  language?: string;

  @ApiPropertyOptional({ enum: NationalIdType, description: 'National ID type (legacy)' })
  nationalIdType?: NationalIdType;

  @ApiPropertyOptional({ description: 'National ID number (legacy)' })
  nationalIdNumber?: string;

  @ApiPropertyOptional({ description: 'Identification document information' })
  identification?: IdentificationInfo;

  @ApiPropertyOptional({ description: 'Nationality' })
  nationality?: string;

  @ApiPropertyOptional({ description: 'Address information' })
  address?: AddressInfo;

  @ApiPropertyOptional({ description: 'Customer preferences (room, floor, bed, smoking)' })
  preferences?: CustomerPreferences;

  @ApiPropertyOptional({ description: 'Emergency contact information' })
  emergencyContact?: EmergencyContact;

  @ApiPropertyOptional({ type: [String], description: 'Language preferences (multiple)' })
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
  createdAt!: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt!: string;

  @ApiPropertyOptional({ description: 'First seen timestamp', type: String })
  firstSeenAt?: string | Date;

  @ApiPropertyOptional({ description: 'Last seen timestamp', type: String })
  lastSeenAt?: string | Date;

  @ApiProperty({ description: 'Total number of bookings' })
  totalBookings!: number;

  @ApiProperty({ description: 'Total amount spent', example: '2500000.50' })
  totalSpent!: string;

  @ApiPropertyOptional({ description: 'Last booking date', type: String })
  lastBookingDate?: string | Date;

  @ApiPropertyOptional({ description: 'Average stay duration in nights' })
  averageStayDuration?: number;

  @ApiPropertyOptional({ description: 'Customer satisfaction score (0-5)', example: 4.5 })
  satisfactionScore?: number;

  @ApiPropertyOptional({ enum: ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM'], description: 'Membership level (legacy)' })
  membershipLevel?: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';

  @ApiProperty({ description: 'Loyalty points balance (legacy - use loyaltyMember.currentPoints)' })
  loyaltyPoints!: number;

  @ApiPropertyOptional({ description: 'Loyalty member information (single active membership)' })
  loyaltyMember?: LoyaltyMemberInfo;

  @ApiPropertyOptional({ type: 'array', description: 'Loyalty program memberships (legacy - multiple memberships)' })
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
  @ApiProperty({ description: 'List of customers', type: [CustomerNatsResponse] })
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
export class FindOneCustomerNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Customer ID' })
  customerId!: string;
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
/**
 * Update Stats Response Data
 */
export class UpdateCustomerStatsResponseData {
  @ApiProperty({ description: 'Operation success status' })
  success!: boolean;

  @ApiProperty({ description: 'Audit log ID for this update' })
  auditId!: string;
}

/**
 * Update Stats Response wrapped in NatsResponse (for NATS communication)
 */
export type UpdateStatsNatsResponse = NatsResponse<UpdateCustomerStatsResponseData>;

/**
 * Recalculate Booking Stats Data
 */
export class RecalculateBookingStatsData {
  @ApiProperty({ description: 'Total number of bookings' })
  totalBookings: number;

  @ApiProperty({ description: 'Total amount spent', example: '2500000.50' })
  totalSpent: string;

  @ApiPropertyOptional({ description: 'Last booking date', type: String })
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
 * Customer Segment Summary (for advanced customer response)
 */
export class CustomerSegmentSummary {
  @ApiProperty({ description: 'Segment name' })
  name!: string;

  @ApiProperty({ description: 'Segment type', enum: ['RFM', 'BEHAVIORAL', 'DEMOGRAPHIC', 'GEOGRAPHIC', 'VALUE_BASED', 'LIFECYCLE', 'CUSTOM'] })
  type!: string;

  @ApiPropertyOptional({ description: 'Segment display color' })
  color?: string;
}

/**
 * Segment Membership Summary (for advanced customer response)
 */
export class SegmentMembershipSummary {
  @ApiProperty({ description: 'Segment information', type: () => CustomerSegmentSummary })
  segment!: CustomerSegmentSummary;
}

/**
 * Advanced Customer DTO - extends CustomerNatsResponse with enriched segment and VIP data
 */
export class AdvancedCustomerDto extends CustomerNatsResponse {
  @ApiProperty({ description: 'Whether the customer is a VIP (tier GOLD or PLATINUM)' })
  isVip!: boolean;

  @ApiPropertyOptional({ description: 'Active segment memberships', type: [SegmentMembershipSummary] })
  segmentMemberships?: SegmentMembershipSummary[];

  @ApiProperty({ description: 'Number of relationships (currently always 0, reserved for future use)', default: 0 })
  relationshipCount!: number;
}

/**
 * Advanced Customers List Data (paginated)
 */
export class AdvancedCustomersListData {
  @ApiProperty({ description: 'List of advanced customers', type: [AdvancedCustomerDto] })
  data!: AdvancedCustomerDto[];

  @ApiProperty({ description: 'Total number of customers' })
  total!: number;

  @ApiProperty({ description: 'Current page number' })
  page!: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit!: number;
}

/**
 * Find All Advanced Customers Request
 * Pattern: crm.customer.findAllAdvanced
 */
export class FindAdvancedCustomersNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 25 })
  limit?: number;

  @ApiPropertyOptional({ description: 'Search text (name, email, phone)' })
  search?: string;

  @ApiPropertyOptional({ description: 'Filter by nationality' })
  nationality?: string;

  @ApiPropertyOptional({ description: 'Filter by membership level', enum: ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM'] })
  membershipLevel?: string;
}

/**
 * Find All Advanced Customers Response
 * Pattern: crm.customer.findAllAdvanced
 */
export type FindAdvancedCustomersNatsResponse = NatsResponse<AdvancedCustomersListData>;

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
