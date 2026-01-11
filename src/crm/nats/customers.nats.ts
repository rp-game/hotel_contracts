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
import type { LoyaltyMemberNatsResponse } from './loyalty-members.nats';

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
  ID_CARD = 'ID_CARD',
  DRIVER_LICENSE = 'DRIVER_LICENSE',
  OTHER = 'OTHER',
}

export enum CommunicationChannel {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
  IN_APP = 'IN_APP',
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
 * Find All Customers Response
 */
export type FindAllCustomersNatsResponse = NatsResponse<{
  data: CustomerNatsResponse[];
  total: number;
  page: number;
  limit: number;
}>;

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
export type RecalculateBookingStatsNatsResponse = NatsResponse<any>;

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
export type RecalculateAllBookingStatsNatsResponse = NatsResponse<any>;

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
  totalCustomers: number;
  activeCustomers: number;
  newCustomersThisMonth: number;
  totalSpent: string;
  averageSpentPerCustomer: string;
  recentCustomers?: Array<{
    id: string;
    name: string;
    email: string;
    createdAt: string | Date;
  }>;
  [key: string]: any;
}

export type CustomerStatsNatsResponse = NatsResponse<CustomerStatsData>;

/**
 * Find By Customer Request
 * Pattern: crm.loyalty.findByCustomer
 */
export interface FindByCustomerNatsRequest {
  tenantId: string;
  customerId: string;
  loyaltyProgramId?: string;
}

/**
 * Find By Customer Response
 * (Uses LoyaltyMemberNatsResponse from loyalty-members.nats)
 */
export type FindByCustomerNatsResponse = NatsResponse<LoyaltyMemberNatsResponse | LoyaltyMemberNatsResponse[]>;

/**
 * Search Customers Request
 * Pattern: crm.customer.search
 */
export interface SearchCustomersNatsRequest {
  tenantId: string;
  query: string;
  fields?: string[];
  page?: number;
  limit?: number;
  filters?: {
    membershipLevel?: string;
    nationality?: string;
    createdAfter?: string;
    createdBefore?: string;
    [key: string]: any;
  };
}

/**
 * Search Customers Response
 */
export type SearchCustomersNatsResponse = NatsResponse<{
  data: CustomerNatsResponse[];
  total: number;
  page: number;
  limit: number;
}>;

/**
 * Export Customers Request
 * Pattern: crm.customer.export
 */
export interface ExportCustomersNatsRequest {
  tenantId: string;
  format: 'csv' | 'excel' | 'json';
  filters?: {
    membershipLevel?: string;
    nationality?: string;
    createdAfter?: string;
    createdBefore?: string;
    [key: string]: any;
  };
  userId?: string;
  dateRange?: {
    startDate: string;
    endDate: string;
  };
}

/**
 * Export Customers Response
 */
export type ExportCustomersNatsResponse = NatsResponse<{
  exportId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: string;
  expiresAt: string;
  downloadUrl?: string;
}>;

/**
 * Export Status Request
 * Pattern: crm.customer.export.status
 */
export interface ExportStatusNatsRequest {
  tenantId: string;
  exportId: string;
}

/**
 * Export Status Response
 */
export type ExportStatusNatsResponse = NatsResponse<{
  exportId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress?: number;
  totalRecords?: number;
  processedRecords?: number;
  errorMessage?: string;
  completedAt?: string;
  expiresAt: string;
  downloadUrl?: string;
}>;

/**
 * Export Download Request
 * Pattern: crm.customer.export.download
 */
export interface ExportDownloadNatsRequest {
  tenantId: string;
  exportId: string;
}

/**
 * Export Download Response
 */
export type ExportDownloadNatsResponse = NatsResponse<{
  fileName: string;
  fileSize: number;
  fileType: string;
  downloadUrl: string;
  expiresAt: string;
}>;
