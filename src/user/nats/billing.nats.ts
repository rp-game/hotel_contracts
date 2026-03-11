/**
 * Billing Service NATS Message Types
 * All billing-related NATS message payloads and response DTOs
 * Exported from user-service
 *
 * Conventions:
 * - *Payload classes: NATS request messages
 * - *ResponseDto classes: NATS response data (also used as REST response DTOs)
 * - All classes use @ApiProperty for Swagger + OpenAPI generation
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// ============= Enums =============

export enum SubscriptionPlan {
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
  ENTERPRISE = 'ENTERPRISE',
}

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  PAST_DUE = 'PAST_DUE',
  CANCELED = 'CANCELED',
  TRIALING = 'TRIALING',
  PAUSED = 'PAUSED',
  INCOMPLETE = 'INCOMPLETE',
  INCOMPLETE_EXPIRED = 'INCOMPLETE_EXPIRED',
  UNPAID = 'UNPAID',
}

export enum BillingCycle {
  MONTHLY = 'MONTHLY',
  ANNUAL = 'ANNUAL',
}

export enum PlanTemplateStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ARCHIVED = 'ARCHIVED',
}

// ============= Response DTOs (source of truth: subscription.entity.ts) =============

export class SubscriptionTenantDto {
  @ApiProperty({ description: 'Tenant ID' })
  id: string;

  @ApiProperty({ description: 'Tenant name' })
  name: string;

  @ApiPropertyOptional({ description: 'Tenant domain' })
  domain?: string;
}

export class SubscriptionResponseDto {
  @ApiProperty({ description: 'Subscription ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Tenant info', type: () => SubscriptionTenantDto })
  tenant?: SubscriptionTenantDto;

  @ApiProperty({ description: 'Subscription plan', enum: SubscriptionPlan })
  plan: SubscriptionPlan;

  @ApiProperty({ description: 'Subscription status', enum: SubscriptionStatus })
  status: SubscriptionStatus;

  @ApiProperty({ description: 'Billing cycle', enum: BillingCycle })
  billingCycle: BillingCycle;

  @ApiProperty({ description: 'Monthly price' })
  monthlyPrice: number;

  @ApiProperty({ description: 'Annual price' })
  annualPrice: number;

  @ApiProperty({ description: 'Current active price' })
  currentPrice: number;

  @ApiProperty({ description: 'Hotel limit (-1 = unlimited)' })
  hotelLimit: number;

  @ApiProperty({ description: 'Room limit (-1 = unlimited)' })
  roomLimit: number;

  @ApiProperty({ description: 'User limit (-1 = unlimited)' })
  userLimit: number;

  @ApiProperty({ description: 'Advanced reporting feature enabled' })
  advancedReporting: boolean;

  @ApiProperty({ description: 'API access feature enabled' })
  apiAccess: boolean;

  @ApiProperty({ description: 'White label feature enabled' })
  whiteLabel: boolean;

  @ApiProperty({ description: 'Email support enabled' })
  emailSupport: boolean;

  @ApiProperty({ description: 'Phone support enabled' })
  phoneSupport: boolean;

  @ApiProperty({ description: 'Priority support enabled' })
  prioritySupport: boolean;

  @ApiPropertyOptional({ description: 'Current period start date' })
  currentPeriodStart?: string;

  @ApiPropertyOptional({ description: 'Current period end date' })
  currentPeriodEnd?: string;

  @ApiPropertyOptional({ description: 'Trial end date' })
  trialEndsAt?: string;

  @ApiPropertyOptional({ description: 'Cancellation date' })
  canceledAt?: string;

  @ApiPropertyOptional({ description: 'Cancel at period end flag' })
  cancelAtPeriodEnd?: boolean;

  @ApiProperty({ description: 'Creation date' })
  createdAt: string;

  @ApiProperty({ description: 'Last update date' })
  updatedAt: string;

  @ApiPropertyOptional({ description: 'Stripe subscription ID' })
  stripeSubscriptionId?: string;
}

export class SubscriptionListResponseDto {
  @ApiProperty({ description: 'List of subscriptions', type: [SubscriptionResponseDto] })
  subscriptions: SubscriptionResponseDto[];

  @ApiProperty({ description: 'Total count' })
  total: number;

  @ApiProperty({ description: 'Current page' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiPropertyOptional({ description: 'Total pages' })
  totalPages?: number;
}

export class PlanTemplateResponseDto {
  @ApiProperty({ description: 'Plan template ID' })
  id: string;

  @ApiProperty({ description: 'Plan type identifier' })
  planType: string;

  @ApiProperty({ description: 'Plan name' })
  name: string;

  @ApiPropertyOptional({ description: 'Plan description' })
  description?: string;

  @ApiProperty({ description: 'Monthly price' })
  monthlyPrice: number;

  @ApiProperty({ description: 'Annual price' })
  annualPrice: number;

  @ApiProperty({ description: 'Hotel limit (-1 = unlimited)' })
  hotelLimit: number;

  @ApiProperty({ description: 'Room limit (-1 = unlimited)' })
  roomLimit: number;

  @ApiProperty({ description: 'User limit (-1 = unlimited)' })
  userLimit: number;

  @ApiProperty({ description: 'Advanced reporting feature' })
  advancedReporting: boolean;

  @ApiProperty({ description: 'API access feature' })
  apiAccess: boolean;

  @ApiProperty({ description: 'White label feature' })
  whiteLabel: boolean;

  @ApiProperty({ description: 'Email support' })
  emailSupport: boolean;

  @ApiProperty({ description: 'Phone support' })
  phoneSupport: boolean;

  @ApiProperty({ description: 'Priority support' })
  prioritySupport: boolean;

  @ApiPropertyOptional({ description: 'Features list as JSON string' })
  features?: string;

  @ApiProperty({ description: 'Display order' })
  displayOrder: number;

  @ApiPropertyOptional({ description: 'Popular plan flag' })
  isPopular?: boolean;

  @ApiProperty({ description: 'Template status', enum: PlanTemplateStatus })
  status: PlanTemplateStatus;

  @ApiProperty({ description: 'Creation date' })
  createdAt: string;

  @ApiProperty({ description: 'Last update date' })
  updatedAt: string;
}

export class SubscriptionAnalyticsOverviewDto {
  @ApiProperty({ description: 'Total subscriptions count' })
  totalSubscriptions: number;

  @ApiProperty({ description: 'Active subscriptions count' })
  activeSubscriptions: number;

  @ApiProperty({ description: 'Cancelled subscriptions count' })
  cancelledSubscriptions: number;

  @ApiProperty({ description: 'Past due subscriptions count' })
  pastDueSubscriptions: number;

  @ApiProperty({ description: 'Trialing subscriptions count' })
  trialingSubscriptions: number;
}

export class PlanDistributionDto {
  @ApiProperty({ description: 'Plan name' })
  plan: string;

  @ApiProperty({ description: 'Count of subscriptions in this plan' })
  count: number;
}

export class SubscriptionRevenueDto {
  @ApiProperty({ description: 'Monthly recurring revenue' })
  monthlyRecurring: number;

  @ApiProperty({ description: 'Annual recurring revenue' })
  annualRecurring: number;

  @ApiProperty({ description: 'Total MRR' })
  totalMRR: number;
}

export class SubscriptionAnalyticsDto {
  @ApiProperty({ description: 'Overview statistics', type: () => SubscriptionAnalyticsOverviewDto })
  overview: SubscriptionAnalyticsOverviewDto;

  @ApiProperty({ description: 'Distribution by plan', type: () => [PlanDistributionDto] })
  planDistribution: PlanDistributionDto[];

  @ApiProperty({ description: 'Revenue metrics', type: () => SubscriptionRevenueDto })
  revenue: SubscriptionRevenueDto;
}

export class RevenueDataPointDto {
  @ApiProperty({ description: 'Total revenue as decimal string' })
  totalRevenue: string;

  @ApiProperty({ description: 'Subscription count as string' })
  subscriptionCount: string;

  @ApiProperty({ description: 'Billing cycle' })
  billingCycle: string;
}

export class RevenueAnalyticsDto {
  @ApiProperty({ description: 'Period info' })
  period: {
    startDate?: string;
    endDate?: string;
    groupBy: string;
  };

  @ApiProperty({ description: 'Revenue data points', type: () => [RevenueDataPointDto] })
  revenue: RevenueDataPointDto[];
}

// ============= Subscription NATS Payload Classes =============

export class CreateSubscriptionPayload {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Subscription plan', enum: SubscriptionPlan })
  plan: string;

  @ApiProperty({ description: 'Billing cycle', enum: BillingCycle })
  billingCycle: string;

  @ApiPropertyOptional({ description: 'Stripe customer ID' })
  stripeCustomerId?: string;

  @ApiPropertyOptional({ description: 'Stripe price ID' })
  stripePriceId?: string;

  @ApiPropertyOptional({ description: 'Trial end date' })
  trialEndsAt?: string;
}

export class GetSubscriptionPayload {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Subscription ID' })
  subscriptionId?: string;
}

export class UpdateSubscriptionPayload {
  @ApiProperty({ description: 'Subscription ID to update' })
  subscriptionId: string;

  @ApiPropertyOptional({ description: 'New status', enum: SubscriptionStatus })
  status?: SubscriptionStatus;

  @ApiPropertyOptional({ description: 'New plan', enum: SubscriptionPlan })
  plan?: SubscriptionPlan;

  @ApiPropertyOptional({ description: 'New billing cycle', enum: BillingCycle })
  billingCycle?: BillingCycle;

  @ApiPropertyOptional({ description: 'Hotel limit' })
  hotelLimit?: number;

  @ApiPropertyOptional({ description: 'Room limit' })
  roomLimit?: number;

  @ApiPropertyOptional({ description: 'User limit' })
  userLimit?: number;

  @ApiPropertyOptional({ description: 'Advanced reporting' })
  advancedReporting?: boolean;

  @ApiPropertyOptional({ description: 'API access' })
  apiAccess?: boolean;

  @ApiPropertyOptional({ description: 'White label' })
  whiteLabel?: boolean;

  @ApiPropertyOptional({ description: 'Cancel at period end' })
  cancelAtPeriodEnd?: boolean;
}

export class ChangePlanPayload {
  @ApiProperty({ description: 'Subscription ID' })
  subscriptionId: string;

  @ApiProperty({ description: 'New plan', enum: SubscriptionPlan })
  newPlan: string;

  @ApiPropertyOptional({ description: 'New billing cycle', enum: BillingCycle })
  newBillingCycle?: string;

  @ApiPropertyOptional({ description: 'Apply change immediately' })
  immediate?: boolean;
}

export class CancelSubscriptionPayload {
  @ApiProperty({ description: 'Subscription ID' })
  subscriptionId: string;

  @ApiPropertyOptional({ description: 'Cancel at period end' })
  cancelAtPeriodEnd?: boolean;

  @ApiPropertyOptional({ description: 'Cancellation reason' })
  reason?: string;
}

export class ReactivateSubscriptionPayload {
  @ApiProperty({ description: 'Subscription ID' })
  subscriptionId: string;
}

export class ListSubscriptionsPayload {
  @ApiPropertyOptional({ description: 'Filter by tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Filter by status', enum: SubscriptionStatus })
  status?: string;

  @ApiPropertyOptional({ description: 'Filter by plan', enum: SubscriptionPlan })
  plan?: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 10 })
  limit?: number;
}

// ============= Usage Tracking Payload Classes =============

export class TrackUsagePayload {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Usage metric name' })
  metric: string;

  @ApiProperty({ description: 'Usage quantity' })
  quantity: number;

  @ApiPropertyOptional({ description: 'Additional metadata' })
  metadata?: object;
}

export class GetUsagePayload {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Specific metric to query' })
  metric?: string;

  @ApiPropertyOptional({ description: 'Period: current or previous' })
  period?: string;
}

export class CheckLimitsPayload {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Metric to check' })
  metric: string;
}

export class EnforceLimitsPayload {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Metric to enforce' })
  metric: string;

  @ApiProperty({ description: 'Current usage value' })
  currentUsage: number;
}

// ============= Payment Method Payload Classes =============

export class CreatePaymentMethodPayload {
  @ApiProperty({ description: 'Subscription ID' })
  subscriptionId: string;

  @ApiProperty({ description: 'Payment method type' })
  type: string;

  @ApiPropertyOptional({ description: 'Stripe payment method ID' })
  stripePaymentMethodId?: string;

  @ApiPropertyOptional({ description: 'Set as default payment method' })
  isDefault?: boolean;

  @ApiPropertyOptional({ description: 'Billing information' })
  billingInfo?: object;
}

export class GetPaymentMethodsPayload {
  @ApiProperty({ description: 'Subscription ID' })
  subscriptionId: string;
}

export class SetDefaultPaymentMethodPayload {
  @ApiProperty({ description: 'Subscription ID' })
  subscriptionId: string;

  @ApiProperty({ description: 'Payment method ID' })
  paymentMethodId: string;
}

export class DeletePaymentMethodPayload {
  @ApiProperty({ description: 'Payment method ID' })
  paymentMethodId: string;
}

// ============= Invoice Payload Classes =============

export class CreateInvoicePayload {
  @ApiProperty({ description: 'Subscription ID' })
  subscriptionId: string;

  @ApiProperty({ description: 'Invoice type' })
  type: string;

  @ApiProperty({ description: 'Period start date' })
  periodStart: string;

  @ApiProperty({ description: 'Period end date' })
  periodEnd: string;

  @ApiProperty({ description: 'Invoice line items' })
  items: object[];

  @ApiPropertyOptional({ description: 'Due date' })
  dueDate?: string;

  @ApiPropertyOptional({ description: 'Tax rate percentage' })
  taxRate?: number;
}

export class GetInvoicePayload {
  @ApiProperty({ description: 'Invoice ID' })
  invoiceId: string;
}

export class ListInvoicesPayload {
  @ApiPropertyOptional({ description: 'Subscription ID' })
  subscriptionId?: string;

  @ApiPropertyOptional({ description: 'Filter by status' })
  status?: string;

  @ApiPropertyOptional({ description: 'Filter by type' })
  type?: string;

  @ApiPropertyOptional({ description: 'Start date filter' })
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date filter' })
  endDate?: string;

  @ApiPropertyOptional({ description: 'Page number' })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page' })
  limit?: number;
}

export class PayInvoicePayload {
  @ApiProperty({ description: 'Invoice ID' })
  invoiceId: string;

  @ApiProperty({ description: 'Payment method used' })
  paymentMethod: string;

  @ApiProperty({ description: 'Amount paid' })
  amountPaid: number;
}

export class InvoicePaymentFailedPayload {
  @ApiProperty({ description: 'Invoice ID' })
  invoiceId: string;

  @ApiProperty({ description: 'Failure reason' })
  failureReason: string;
}

// ============= Stripe Webhook Payload Classes =============

export class StripeSubscriptionUpdatedPayload {
  @ApiProperty({ description: 'Stripe subscription ID' })
  stripeSubscriptionId: string;

  @ApiProperty({ description: 'Updated status' })
  status: string;

  @ApiProperty({ description: 'Current period start' })
  currentPeriodStart: string;

  @ApiProperty({ description: 'Current period end' })
  currentPeriodEnd: string;
}

export class StripeInvoicePaymentSucceededPayload {
  @ApiProperty({ description: 'Stripe invoice ID' })
  stripeInvoiceId: string;

  @ApiProperty({ description: 'Amount paid in cents' })
  amountPaid: number;

  @ApiProperty({ description: 'Payment method used' })
  paymentMethod: string;
}

export class StripeInvoicePaymentFailedPayload {
  @ApiProperty({ description: 'Stripe invoice ID' })
  stripeInvoiceId: string;

  @ApiProperty({ description: 'Failure reason' })
  failureReason: string;
}

// ============= Event Payload Classes =============

export class ResourceEventPayload {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Room ID' })
  roomId?: string;

  @ApiPropertyOptional({ description: 'User ID' })
  userId?: string;

  @ApiPropertyOptional({ description: 'Booking ID' })
  bookingId?: string;
}

export class ApiCallPayload {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'API endpoint called' })
  endpoint: string;

  @ApiProperty({ description: 'HTTP method' })
  method: string;
}

// ============= Platform Subscription NATS Payload Classes =============

export class GetSubscriptionAnalyticsPayload {}

export class GetRevenueAnalyticsPayload {
  @ApiPropertyOptional({ description: 'Start date' })
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date' })
  endDate?: string;

  @ApiPropertyOptional({ description: 'Group by period' })
  groupBy?: string;
}

export class GetSubscriptionsListPayload {
  @ApiPropertyOptional({ description: 'Filter by status' })
  status?: string;

  @ApiPropertyOptional({ description: 'Filter by plan' })
  plan?: string;

  @ApiPropertyOptional({ description: 'Filter by tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Filter by billing cycle' })
  billingCycle?: string;

  @ApiPropertyOptional({ description: 'Page number' })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page' })
  limit?: number;

  @ApiPropertyOptional({ description: 'Sort field' })
  sortBy?: string;

  @ApiPropertyOptional({ description: 'Sort order' })
  sortOrder?: 'ASC' | 'DESC';
}

export class FindSubscriptionByIdPayload {
  @ApiProperty({ description: 'Subscription ID' })
  id: string;
}

export class GetTenantSubscriptionPayload {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;
}

// ============= Subscription REST DTOs (migrated from local) =============

import { IsUUID, IsEnum, IsNumber, IsString, IsBoolean, IsOptional, IsDateString, IsPositive, Min, Max } from 'class-validator';

export class CreateSubscriptionDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ enum: SubscriptionPlan, description: 'Subscription plan' })
  @IsEnum(SubscriptionPlan)
  plan: SubscriptionPlan;

  @ApiProperty({ enum: BillingCycle, description: 'Billing cycle' })
  @IsEnum(BillingCycle)
  billingCycle: BillingCycle;

  @ApiPropertyOptional({ description: 'Stripe customer ID' })
  @IsOptional()
  @IsString()
  stripeCustomerId?: string;

  @ApiPropertyOptional({ description: 'Stripe price ID' })
  @IsOptional()
  @IsString()
  stripePriceId?: string;

  @ApiPropertyOptional({ description: 'Trial end date' })
  @IsOptional()
  @IsDateString()
  trialEndsAt?: string;
}

export class UpdateSubscriptionDto {
  @ApiPropertyOptional({ enum: SubscriptionPlan, description: 'Subscription plan' })
  @IsOptional()
  @IsEnum(SubscriptionPlan)
  plan?: SubscriptionPlan;

  @ApiPropertyOptional({ enum: SubscriptionStatus, description: 'Subscription status' })
  @IsOptional()
  @IsEnum(SubscriptionStatus)
  status?: SubscriptionStatus;

  @ApiPropertyOptional({ enum: BillingCycle, description: 'Billing cycle' })
  @IsOptional()
  @IsEnum(BillingCycle)
  billingCycle?: BillingCycle;

  @ApiPropertyOptional({ description: 'Hotel limit' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  hotelLimit?: number;

  @ApiPropertyOptional({ description: 'Room limit' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  roomLimit?: number;

  @ApiPropertyOptional({ description: 'User limit' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  userLimit?: number;

  @ApiPropertyOptional({ description: 'Advanced reporting feature' })
  @IsOptional()
  @IsBoolean()
  advancedReporting?: boolean;

  @ApiPropertyOptional({ description: 'API access feature' })
  @IsOptional()
  @IsBoolean()
  apiAccess?: boolean;

  @ApiPropertyOptional({ description: 'White label feature' })
  @IsOptional()
  @IsBoolean()
  whiteLabel?: boolean;

  @ApiPropertyOptional({ description: 'Cancel at period end' })
  @IsOptional()
  @IsBoolean()
  cancelAtPeriodEnd?: boolean;
}

export class SubscriptionUsageDto {
  @ApiProperty({ description: 'Usage metric name' })
  metric: string;

  @ApiProperty({ description: 'Current usage' })
  currentUsage: number;

  @ApiProperty({ description: 'Limit value' })
  limitValue: number;

  @ApiProperty({ description: 'Previous period usage' })
  previousPeriodUsage: number;

  @ApiProperty({ description: 'Usage percentage' })
  usagePercentage: number;

  @ApiProperty({ description: 'Limit exceeded flag' })
  limitExceeded: boolean;

  @ApiPropertyOptional({ description: 'Overage charge' })
  overageCharge?: number;
}

export class PlanChangeDto {
  @ApiProperty({ enum: SubscriptionPlan, description: 'New subscription plan' })
  @IsEnum(SubscriptionPlan)
  newPlan: SubscriptionPlan;

  @ApiPropertyOptional({ enum: BillingCycle, description: 'New billing cycle' })
  @IsOptional()
  @IsEnum(BillingCycle)
  newBillingCycle?: BillingCycle;

  @ApiPropertyOptional({ description: 'Apply change immediately' })
  @IsOptional()
  @IsBoolean()
  immediate?: boolean;
}

export class CancelSubscriptionDto {
  @ApiPropertyOptional({ description: 'Cancel at period end instead of immediately' })
  @IsOptional()
  @IsBoolean()
  cancelAtPeriodEnd?: boolean;

  @ApiPropertyOptional({ description: 'Cancellation reason' })
  @IsOptional()
  @IsString()
  reason?: string;
}

export class CreatePlanTemplateDto {
  @ApiProperty({ description: 'Plan type' })
  @IsString()
  planType: string;

  @ApiProperty({ description: 'Plan name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Plan description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Monthly price' })
  @IsNumber()
  @IsPositive()
  monthlyPrice: number;

  @ApiProperty({ description: 'Annual price' })
  @IsNumber()
  @IsPositive()
  annualPrice: number;

  @ApiPropertyOptional({ description: 'Hotel limit' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  hotelLimit?: number;

  @ApiPropertyOptional({ description: 'Room limit' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  roomLimit?: number;

  @ApiPropertyOptional({ description: 'User limit' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  userLimit?: number;

  @ApiPropertyOptional({ description: 'Advanced reporting feature' })
  @IsOptional()
  @IsBoolean()
  advancedReporting?: boolean;

  @ApiPropertyOptional({ description: 'API access feature' })
  @IsOptional()
  @IsBoolean()
  apiAccess?: boolean;

  @ApiPropertyOptional({ description: 'White label feature' })
  @IsOptional()
  @IsBoolean()
  whiteLabel?: boolean;

  @ApiPropertyOptional({ description: 'Features list as JSON string' })
  @IsOptional()
  @IsString()
  features?: string;

  @ApiPropertyOptional({ description: 'Display order' })
  @IsOptional()
  @IsNumber()
  displayOrder?: number;

  @ApiPropertyOptional({ description: 'Is popular plan' })
  @IsOptional()
  @IsBoolean()
  isPopular?: boolean;
}

export class UpdatePlanTemplateDto {
  @ApiPropertyOptional({ description: 'Plan name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Plan description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Monthly price' })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  monthlyPrice?: number;

  @ApiPropertyOptional({ description: 'Annual price' })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  annualPrice?: number;

  @ApiPropertyOptional({ description: 'Hotel limit' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  hotelLimit?: number;

  @ApiPropertyOptional({ description: 'Room limit' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  roomLimit?: number;

  @ApiPropertyOptional({ description: 'User limit' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  userLimit?: number;

  @ApiPropertyOptional({ description: 'Advanced reporting feature' })
  @IsOptional()
  @IsBoolean()
  advancedReporting?: boolean;

  @ApiPropertyOptional({ description: 'API access feature' })
  @IsOptional()
  @IsBoolean()
  apiAccess?: boolean;

  @ApiPropertyOptional({ description: 'White label feature' })
  @IsOptional()
  @IsBoolean()
  whiteLabel?: boolean;

  @ApiPropertyOptional({ description: 'Features list as JSON string' })
  @IsOptional()
  @IsString()
  features?: string;

  @ApiPropertyOptional({ description: 'Display order' })
  @IsOptional()
  @IsNumber()
  displayOrder?: number;

  @ApiPropertyOptional({ description: 'Is popular plan' })
  @IsOptional()
  @IsBoolean()
  isPopular?: boolean;

  @ApiPropertyOptional({ description: 'Plan status' })
  @IsOptional()
  @IsString()
  status?: string;
}

export class SubscriptionQueryDto {
  @ApiPropertyOptional({ description: 'Filter by status' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Filter by plan' })
  @IsOptional()
  @IsString()
  plan?: string;

  @ApiPropertyOptional({ description: 'Filter by tenant ID' })
  @IsOptional()
  @IsUUID()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Filter by billing cycle' })
  @IsOptional()
  @IsString()
  billingCycle?: string;

  @ApiPropertyOptional({ description: 'Page number' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number;

  @ApiPropertyOptional({ description: 'Sort field' })
  @IsOptional()
  @IsString()
  sortBy?: string;

  @ApiPropertyOptional({ description: 'Sort order' })
  @IsOptional()
  @IsString()
  sortOrder?: 'ASC' | 'DESC';
}

export class CreateSubscriptionWithTemplateDto extends CreateSubscriptionDto {
  @ApiPropertyOptional({ description: 'Plan template ID to use for subscription setup' })
  @IsOptional()
  @IsUUID()
  planTemplateId?: string;

  @ApiPropertyOptional({ description: 'Current period start date' })
  @IsOptional()
  @IsDateString()
  currentPeriodStart?: string;
}
