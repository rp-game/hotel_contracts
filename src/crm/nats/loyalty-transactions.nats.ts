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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * Loyalty Transaction Type Enum
 * Matches entity transaction types for proper database queries
 */
export enum LoyaltyTransactionType {
  EARN_POINTS = 'EARN_POINTS',
  REDEEM_POINTS = 'REDEEM_POINTS',
  ADJUSTMENT_ADD = 'ADJUSTMENT_ADD',
  ADJUSTMENT_DEDUCT = 'ADJUSTMENT_DEDUCT',
  EXPIRE_POINTS = 'EXPIRE_POINTS',
  TIER_UPGRADE = 'TIER_UPGRADE',
  TIER_DOWNGRADE = 'TIER_DOWNGRADE',
  JOIN_PROGRAM = 'JOIN_PROGRAM',
}

/**
 * Create Loyalty Transaction Request
 * Pattern: crm.loyalty_transaction.create
 */
export interface CreateLoyaltyTransactionNatsRequest {
  tenantId: string;
  memberId: string;
  transactionType: LoyaltyTransactionType;
  pointsChanged: number;
  transactionDate: string; // ISO format date string
  description?: string;
  relatedInteractionId?: string;
  staffId?: string;
  pointsExpirationDate?: string; // ISO format date string
  referenceId?: string;
  referenceType?: string;
  metadata?: Record<string, any>;
}

/**
 * Loyalty Transaction Response
 */
export class LoyaltyTransactionNatsResponse {
  @ApiProperty({ description: 'Transaction ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Loyalty member ID' })
  memberId!: string;

  @ApiProperty({ description: 'Loyalty program ID' })
  programId!: string;

  @ApiProperty({ description: 'Customer ID' })
  customerId!: string;

  @ApiProperty({ enum: LoyaltyTransactionType, description: 'Transaction type' })
  transactionType!: LoyaltyTransactionType;

  @ApiProperty({ description: 'Points changed (positive or negative)' })
  pointsChanged!: number;

  @ApiPropertyOptional({ description: 'Transaction description' })
  description?: string;

  @ApiPropertyOptional({ description: 'Reference ID (booking, order, etc)' })
  referenceId?: string;

  @ApiPropertyOptional({ description: 'Reference type' })
  referenceType?: string;

  @ApiProperty({ description: 'Current balance' })
  balance!: number;

  @ApiProperty({ description: 'Balance before transaction' })
  balanceBefore!: number;

  @ApiProperty({ description: 'Balance after transaction' })
  balanceAfter!: number;

  @ApiPropertyOptional({ description: 'Additional metadata' })
  metadata?: Record<string, any>;

  @ApiProperty({ description: 'Transaction date' })
  transactionDate!: string;

  @ApiPropertyOptional({ description: 'Points expiration date' })
  pointsExpirationDate?: string;

  @ApiPropertyOptional({ description: 'Related interaction ID' })
  relatedInteractionId?: string;

  @ApiPropertyOptional({ description: 'Staff ID who performed the transaction' })
  staffId?: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt!: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt!: string;
}

/**
 * List Loyalty Transactions Response
 */
export class ListLoyaltyTransactionsNatsResponse {
  @ApiProperty({ type: [LoyaltyTransactionNatsResponse], description: 'List of transactions' })
  transactions!: LoyaltyTransactionNatsResponse[];

  @ApiProperty({ description: 'Total number of transactions' })
  total!: number;

  @ApiPropertyOptional({ description: 'Current page number' })
  page?: number;

  @ApiPropertyOptional({ description: 'Number of items per page' })
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
