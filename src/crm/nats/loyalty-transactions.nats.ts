/**
 * Loyalty Transactions NATS Contracts
 *
 * Patterns:
 * - crm.loyalty_transaction.create
 * - crm.loyalty_transaction.findAllByTenant
 * - crm.loyalty_transaction.findAllByMember
 * - crm.loyalty_transaction.findOneById
 * - crm.loyalty_transaction.findAllByCustomer
 * - crm.loyalty_transaction.findAllByProgram
 *
 * Handler: crm-service (LoyaltyTransactionsController)
 * Called by: api-gateway (CrmController)
 */

import { NatsResponse } from '../../common';

/**
 * Loyalty Transaction Type Enum
 */
export enum LoyaltyTransactionType {
  EARN = 'EARN',
  REDEEM = 'REDEEM',
  ADJUST = 'ADJUST',
  EXPIRE = 'EXPIRE',
  BONUS = 'BONUS',
}

/**
 * Create Loyalty Transaction Request
 * Pattern: crm.loyalty_transaction.create
 */
export interface CreateLoyaltyTransactionNatsRequest {
  tenantId: string;
  memberId: string;
  type: LoyaltyTransactionType;
  pointsAmount: number;
  description?: string;
  referenceId?: string;
  referenceType?: string;
  metadata?: Record<string, any>;
}

/**
 * Loyalty Transaction Response
 */
export interface LoyaltyTransactionNatsResponse {
  id: string;
  tenantId: string;
  memberId: string;
  programId: string;
  customerId: string;
  type: LoyaltyTransactionType;
  pointsAmount: number;
  description?: string;
  referenceId?: string;
  referenceType?: string;
  balance: number;
  balanceBefore: number;
  balanceAfter: number;
  metadata?: Record<string, any>;
  transactionDate: string | Date;
  pointsExpirationDate?: string | Date;
  relatedInteractionId?: string;
  staffId?: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

/**
 * List Loyalty Transactions Response
 */
export interface ListLoyaltyTransactionsNatsResponse {
  transactions: LoyaltyTransactionNatsResponse[];
  total: number;
  page?: number;
  limit?: number;
}

/**
 * Create Transaction Response
 */
export type CreateLoyaltyTransactionNatsResponse = NatsResponse<LoyaltyTransactionNatsResponse>;

/**
 * Find All Transactions By Tenant Request
 * Pattern: crm.loyalty_transaction.findAllByTenant
 */
export interface FindAllTransactionsByTenantNatsRequest {
  tenantId: string;
  page?: number;
  limit?: number;
  type?: LoyaltyTransactionType;
}

/**
 * Find All Transactions By Tenant Response
 */
export type FindAllTransactionsByTenantNatsResponse = NatsResponse<ListLoyaltyTransactionsNatsResponse>;

/**
 * Find All By Member Request
 * Pattern: crm.loyalty_transaction.findAllByMember
 */
export interface FindAllByMemberNatsRequest {
  tenantId: string;
  memberId: string;
  page?: number;
  limit?: number;
}

/**
 * Find All By Member Response
 */
export type FindAllByMemberNatsResponse = NatsResponse<LoyaltyTransactionNatsResponse[]>;

/**
 * Find One Transaction Request
 * Pattern: crm.loyalty_transaction.findOneById
 */
export interface FindOneTransactionNatsRequest {
  tenantId: string;
  transactionId: string;
}

/**
 * Find One Transaction Response
 */
export type FindOneTransactionNatsResponse = NatsResponse<LoyaltyTransactionNatsResponse>;

/**
 * Find All Transactions By Customer Request
 * Pattern: crm.loyalty_transaction.findAllByCustomer
 */
export interface FindAllTransactionsByCustomerNatsRequest {
  tenantId: string;
  customerId: string;
  page?: number;
  limit?: number;
}

/**
 * Find All Transactions By Customer Response
 */
export type FindAllTransactionsByCustomerNatsResponse = NatsResponse<ListLoyaltyTransactionsNatsResponse>;

/**
 * Find All By Program Request
 * Pattern: crm.loyalty_transaction.findAllByProgram
 */
export interface FindAllByProgramNatsRequest {
  tenantId: string;
  programId: string;
  type?: LoyaltyTransactionType;
  page?: number;
  limit?: number;
}

/**
 * Find All By Program Response
 */
export type FindAllByProgramNatsResponse = NatsResponse<ListLoyaltyTransactionsNatsResponse>;
