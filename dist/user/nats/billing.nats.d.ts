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
export declare enum SubscriptionPlan {
    BASIC = "BASIC",
    PREMIUM = "PREMIUM",
    ENTERPRISE = "ENTERPRISE"
}
export declare enum SubscriptionStatus {
    ACTIVE = "ACTIVE",
    PAST_DUE = "PAST_DUE",
    CANCELED = "CANCELED",
    TRIALING = "TRIALING",
    PAUSED = "PAUSED",
    INCOMPLETE = "INCOMPLETE",
    INCOMPLETE_EXPIRED = "INCOMPLETE_EXPIRED",
    UNPAID = "UNPAID"
}
export declare enum BillingCycle {
    MONTHLY = "MONTHLY",
    ANNUAL = "ANNUAL"
}
export declare enum PlanTemplateStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    ARCHIVED = "ARCHIVED"
}
export declare class SubscriptionTenantDto {
    id: string;
    name: string;
    domain?: string;
}
export declare class SubscriptionResponseDto {
    id: string;
    tenantId: string;
    tenant?: SubscriptionTenantDto;
    plan: SubscriptionPlan;
    status: SubscriptionStatus;
    billingCycle: BillingCycle;
    monthlyPrice: number;
    annualPrice: number;
    currentPrice: number;
    hotelLimit: number;
    roomLimit: number;
    userLimit: number;
    advancedReporting: boolean;
    apiAccess: boolean;
    whiteLabel: boolean;
    emailSupport: boolean;
    phoneSupport: boolean;
    prioritySupport: boolean;
    currentPeriodStart?: string;
    currentPeriodEnd?: string;
    trialEndsAt?: string;
    canceledAt?: string;
    cancelAtPeriodEnd?: boolean;
    createdAt: string;
    updatedAt: string;
    stripeSubscriptionId?: string;
}
export declare class SubscriptionListResponseDto {
    subscriptions: SubscriptionResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages?: number;
}
export declare class PlanTemplateResponseDto {
    id: string;
    planType: string;
    name: string;
    description?: string;
    monthlyPrice: number;
    annualPrice: number;
    hotelLimit: number;
    roomLimit: number;
    userLimit: number;
    advancedReporting: boolean;
    apiAccess: boolean;
    whiteLabel: boolean;
    emailSupport: boolean;
    phoneSupport: boolean;
    prioritySupport: boolean;
    features?: string;
    displayOrder: number;
    isPopular?: boolean;
    status: PlanTemplateStatus;
    createdAt: string;
    updatedAt: string;
}
export declare class SubscriptionAnalyticsOverviewDto {
    totalSubscriptions: number;
    activeSubscriptions: number;
    cancelledSubscriptions: number;
    pastDueSubscriptions: number;
    trialingSubscriptions: number;
}
export declare class PlanDistributionDto {
    plan: string;
    count: number;
}
export declare class SubscriptionRevenueDto {
    monthlyRecurring: number;
    annualRecurring: number;
    totalMRR: number;
}
export declare class SubscriptionAnalyticsDto {
    overview: SubscriptionAnalyticsOverviewDto;
    planDistribution: PlanDistributionDto[];
    revenue: SubscriptionRevenueDto;
}
export declare class RevenueDataPointDto {
    totalRevenue: string;
    subscriptionCount: string;
    billingCycle: string;
}
export declare class RevenueAnalyticsDto {
    period: {
        startDate?: string;
        endDate?: string;
        groupBy: string;
    };
    revenue: RevenueDataPointDto[];
}
export declare class CreateSubscriptionPayload {
    tenantId: string;
    plan: string;
    billingCycle: string;
    stripeCustomerId?: string;
    stripePriceId?: string;
    trialEndsAt?: string;
}
export declare class GetSubscriptionPayload {
    tenantId?: string;
    subscriptionId?: string;
}
export declare class UpdateSubscriptionPayload {
    subscriptionId: string;
    status?: SubscriptionStatus;
    plan?: SubscriptionPlan;
    billingCycle?: BillingCycle;
    hotelLimit?: number;
    roomLimit?: number;
    userLimit?: number;
    advancedReporting?: boolean;
    apiAccess?: boolean;
    whiteLabel?: boolean;
    cancelAtPeriodEnd?: boolean;
}
export declare class ChangePlanPayload {
    subscriptionId: string;
    newPlan: string;
    newBillingCycle?: string;
    immediate?: boolean;
}
export declare class CancelSubscriptionPayload {
    subscriptionId: string;
    cancelAtPeriodEnd?: boolean;
    reason?: string;
}
export declare class ReactivateSubscriptionPayload {
    subscriptionId: string;
}
export declare class ListSubscriptionsPayload {
    tenantId?: string;
    status?: string;
    plan?: string;
    page?: number;
    limit?: number;
}
export declare class TrackUsagePayload {
    tenantId: string;
    metric: string;
    quantity: number;
    metadata?: object;
}
export declare class GetUsagePayload {
    tenantId: string;
    metric?: string;
    period?: string;
}
export declare class CheckLimitsPayload {
    tenantId: string;
    metric: string;
}
export declare class EnforceLimitsPayload {
    tenantId: string;
    metric: string;
    currentUsage: number;
}
export declare class CreatePaymentMethodPayload {
    subscriptionId: string;
    type: string;
    stripePaymentMethodId?: string;
    isDefault?: boolean;
    billingInfo?: object;
}
export declare class GetPaymentMethodsPayload {
    subscriptionId: string;
}
export declare class SetDefaultPaymentMethodPayload {
    subscriptionId: string;
    paymentMethodId: string;
}
export declare class DeletePaymentMethodPayload {
    paymentMethodId: string;
}
export declare class CreateInvoicePayload {
    subscriptionId: string;
    type: string;
    periodStart: string;
    periodEnd: string;
    items: object[];
    dueDate?: string;
    taxRate?: number;
}
export declare class GetInvoicePayload {
    invoiceId: string;
}
export declare class ListInvoicesPayload {
    subscriptionId?: string;
    status?: string;
    type?: string;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
}
export declare class PayInvoicePayload {
    invoiceId: string;
    paymentMethod: string;
    amountPaid: number;
}
export declare class InvoicePaymentFailedPayload {
    invoiceId: string;
    failureReason: string;
}
export declare class StripeSubscriptionUpdatedPayload {
    stripeSubscriptionId: string;
    status: string;
    currentPeriodStart: string;
    currentPeriodEnd: string;
}
export declare class StripeInvoicePaymentSucceededPayload {
    stripeInvoiceId: string;
    amountPaid: number;
    paymentMethod: string;
}
export declare class StripeInvoicePaymentFailedPayload {
    stripeInvoiceId: string;
    failureReason: string;
}
export declare class ResourceEventPayload {
    tenantId: string;
    hotelId?: string;
    roomId?: string;
    userId?: string;
    bookingId?: string;
}
export declare class ApiCallPayload {
    tenantId: string;
    endpoint: string;
    method: string;
}
export declare class GetSubscriptionAnalyticsPayload {
}
export declare class GetRevenueAnalyticsPayload {
    startDate?: string;
    endDate?: string;
    groupBy?: string;
}
export declare class GetSubscriptionsListPayload {
    status?: string;
    plan?: string;
    tenantId?: string;
    billingCycle?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
export declare class FindSubscriptionByIdPayload {
    id: string;
}
export declare class GetTenantSubscriptionPayload {
    tenantId: string;
}
export declare class CreateSubscriptionDto {
    tenantId: string;
    plan: SubscriptionPlan;
    billingCycle: BillingCycle;
    stripeCustomerId?: string;
    stripePriceId?: string;
    trialEndsAt?: string;
}
export declare class UpdateSubscriptionDto {
    plan?: SubscriptionPlan;
    status?: SubscriptionStatus;
    billingCycle?: BillingCycle;
    hotelLimit?: number;
    roomLimit?: number;
    userLimit?: number;
    advancedReporting?: boolean;
    apiAccess?: boolean;
    whiteLabel?: boolean;
    cancelAtPeriodEnd?: boolean;
}
export declare class SubscriptionUsageDto {
    metric: string;
    currentUsage: number;
    limitValue: number;
    previousPeriodUsage: number;
    usagePercentage: number;
    limitExceeded: boolean;
    overageCharge?: number;
}
export declare class PlanChangeDto {
    newPlan: SubscriptionPlan;
    newBillingCycle?: BillingCycle;
    immediate?: boolean;
}
export declare class CancelSubscriptionDto {
    cancelAtPeriodEnd?: boolean;
    reason?: string;
}
export declare class CreatePlanTemplateDto {
    planType: string;
    name: string;
    description?: string;
    monthlyPrice: number;
    annualPrice: number;
    hotelLimit?: number;
    roomLimit?: number;
    userLimit?: number;
    advancedReporting?: boolean;
    apiAccess?: boolean;
    whiteLabel?: boolean;
    features?: string;
    displayOrder?: number;
    isPopular?: boolean;
}
export declare class UpdatePlanTemplateDto {
    name?: string;
    description?: string;
    monthlyPrice?: number;
    annualPrice?: number;
    hotelLimit?: number;
    roomLimit?: number;
    userLimit?: number;
    advancedReporting?: boolean;
    apiAccess?: boolean;
    whiteLabel?: boolean;
    features?: string;
    displayOrder?: number;
    isPopular?: boolean;
    status?: string;
}
export declare class SubscriptionQueryDto {
    status?: string;
    plan?: string;
    tenantId?: string;
    billingCycle?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
export declare class CreateSubscriptionWithTemplateDto extends CreateSubscriptionDto {
    planTemplateId?: string;
    currentPeriodStart?: string;
}
//# sourceMappingURL=billing.nats.d.ts.map