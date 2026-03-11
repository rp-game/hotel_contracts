"use strict";
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
exports.CreatePlanTemplateDto = exports.CancelSubscriptionDto = exports.PlanChangeDto = exports.SubscriptionUsageDto = exports.UpdateSubscriptionDto = exports.CreateSubscriptionDto = exports.GetTenantSubscriptionPayload = exports.FindSubscriptionByIdPayload = exports.GetSubscriptionsListPayload = exports.GetRevenueAnalyticsPayload = exports.GetSubscriptionAnalyticsPayload = exports.ApiCallPayload = exports.ResourceEventPayload = exports.StripeInvoicePaymentFailedPayload = exports.StripeInvoicePaymentSucceededPayload = exports.StripeSubscriptionUpdatedPayload = exports.InvoicePaymentFailedPayload = exports.PayInvoicePayload = exports.ListInvoicesPayload = exports.GetInvoicePayload = exports.CreateInvoicePayload = exports.DeletePaymentMethodPayload = exports.SetDefaultPaymentMethodPayload = exports.GetPaymentMethodsPayload = exports.CreatePaymentMethodPayload = exports.EnforceLimitsPayload = exports.CheckLimitsPayload = exports.GetUsagePayload = exports.TrackUsagePayload = exports.ListSubscriptionsPayload = exports.ReactivateSubscriptionPayload = exports.CancelSubscriptionPayload = exports.ChangePlanPayload = exports.UpdateSubscriptionPayload = exports.GetSubscriptionPayload = exports.CreateSubscriptionPayload = exports.RevenueAnalyticsDto = exports.RevenueDataPointDto = exports.SubscriptionAnalyticsDto = exports.SubscriptionRevenueDto = exports.PlanDistributionDto = exports.SubscriptionAnalyticsOverviewDto = exports.PlanTemplateResponseDto = exports.SubscriptionListResponseDto = exports.SubscriptionResponseDto = exports.SubscriptionTenantDto = exports.PlanTemplateStatus = exports.BillingCycle = exports.SubscriptionStatus = exports.SubscriptionPlan = void 0;
exports.CreateSubscriptionWithTemplateDto = exports.SubscriptionQueryDto = exports.UpdatePlanTemplateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
// ============= Enums =============
var SubscriptionPlan;
(function (SubscriptionPlan) {
    SubscriptionPlan["BASIC"] = "BASIC";
    SubscriptionPlan["PREMIUM"] = "PREMIUM";
    SubscriptionPlan["ENTERPRISE"] = "ENTERPRISE";
})(SubscriptionPlan || (exports.SubscriptionPlan = SubscriptionPlan = {}));
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["ACTIVE"] = "ACTIVE";
    SubscriptionStatus["PAST_DUE"] = "PAST_DUE";
    SubscriptionStatus["CANCELED"] = "CANCELED";
    SubscriptionStatus["TRIALING"] = "TRIALING";
    SubscriptionStatus["PAUSED"] = "PAUSED";
    SubscriptionStatus["INCOMPLETE"] = "INCOMPLETE";
    SubscriptionStatus["INCOMPLETE_EXPIRED"] = "INCOMPLETE_EXPIRED";
    SubscriptionStatus["UNPAID"] = "UNPAID";
})(SubscriptionStatus || (exports.SubscriptionStatus = SubscriptionStatus = {}));
var BillingCycle;
(function (BillingCycle) {
    BillingCycle["MONTHLY"] = "MONTHLY";
    BillingCycle["ANNUAL"] = "ANNUAL";
})(BillingCycle || (exports.BillingCycle = BillingCycle = {}));
var PlanTemplateStatus;
(function (PlanTemplateStatus) {
    PlanTemplateStatus["ACTIVE"] = "ACTIVE";
    PlanTemplateStatus["INACTIVE"] = "INACTIVE";
    PlanTemplateStatus["ARCHIVED"] = "ARCHIVED";
})(PlanTemplateStatus || (exports.PlanTemplateStatus = PlanTemplateStatus = {}));
// ============= Response DTOs (source of truth: subscription.entity.ts) =============
class SubscriptionTenantDto {
    id;
    name;
    domain;
}
exports.SubscriptionTenantDto = SubscriptionTenantDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], SubscriptionTenantDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant name' }),
    __metadata("design:type", String)
], SubscriptionTenantDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant domain' }),
    __metadata("design:type", String)
], SubscriptionTenantDto.prototype, "domain", void 0);
class SubscriptionResponseDto {
    id;
    tenantId;
    tenant;
    plan;
    status;
    billingCycle;
    monthlyPrice;
    annualPrice;
    currentPrice;
    hotelLimit;
    roomLimit;
    userLimit;
    advancedReporting;
    apiAccess;
    whiteLabel;
    emailSupport;
    phoneSupport;
    prioritySupport;
    currentPeriodStart;
    currentPeriodEnd;
    trialEndsAt;
    canceledAt;
    cancelAtPeriodEnd;
    createdAt;
    updatedAt;
    stripeSubscriptionId;
}
exports.SubscriptionResponseDto = SubscriptionResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant info', type: () => SubscriptionTenantDto }),
    __metadata("design:type", SubscriptionTenantDto)
], SubscriptionResponseDto.prototype, "tenant", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription plan', enum: SubscriptionPlan }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription status', enum: SubscriptionStatus }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Billing cycle', enum: BillingCycle }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "billingCycle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monthly price' }),
    __metadata("design:type", Number)
], SubscriptionResponseDto.prototype, "monthlyPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Annual price' }),
    __metadata("design:type", Number)
], SubscriptionResponseDto.prototype, "annualPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current active price' }),
    __metadata("design:type", Number)
], SubscriptionResponseDto.prototype, "currentPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel limit (-1 = unlimited)' }),
    __metadata("design:type", Number)
], SubscriptionResponseDto.prototype, "hotelLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room limit (-1 = unlimited)' }),
    __metadata("design:type", Number)
], SubscriptionResponseDto.prototype, "roomLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User limit (-1 = unlimited)' }),
    __metadata("design:type", Number)
], SubscriptionResponseDto.prototype, "userLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Advanced reporting feature enabled' }),
    __metadata("design:type", Boolean)
], SubscriptionResponseDto.prototype, "advancedReporting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'API access feature enabled' }),
    __metadata("design:type", Boolean)
], SubscriptionResponseDto.prototype, "apiAccess", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'White label feature enabled' }),
    __metadata("design:type", Boolean)
], SubscriptionResponseDto.prototype, "whiteLabel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email support enabled' }),
    __metadata("design:type", Boolean)
], SubscriptionResponseDto.prototype, "emailSupport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Phone support enabled' }),
    __metadata("design:type", Boolean)
], SubscriptionResponseDto.prototype, "phoneSupport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Priority support enabled' }),
    __metadata("design:type", Boolean)
], SubscriptionResponseDto.prototype, "prioritySupport", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Current period start date' }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "currentPeriodStart", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Current period end date' }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "currentPeriodEnd", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Trial end date' }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "trialEndsAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation date' }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "canceledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancel at period end flag' }),
    __metadata("design:type", Boolean)
], SubscriptionResponseDto.prototype, "cancelAtPeriodEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation date' }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update date' }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Stripe subscription ID' }),
    __metadata("design:type", String)
], SubscriptionResponseDto.prototype, "stripeSubscriptionId", void 0);
class SubscriptionListResponseDto {
    subscriptions;
    total;
    page;
    limit;
    totalPages;
}
exports.SubscriptionListResponseDto = SubscriptionListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of subscriptions', type: [SubscriptionResponseDto] }),
    __metadata("design:type", Array)
], SubscriptionListResponseDto.prototype, "subscriptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], SubscriptionListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], SubscriptionListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], SubscriptionListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total pages' }),
    __metadata("design:type", Number)
], SubscriptionListResponseDto.prototype, "totalPages", void 0);
class PlanTemplateResponseDto {
    id;
    planType;
    name;
    description;
    monthlyPrice;
    annualPrice;
    hotelLimit;
    roomLimit;
    userLimit;
    advancedReporting;
    apiAccess;
    whiteLabel;
    emailSupport;
    phoneSupport;
    prioritySupport;
    features;
    displayOrder;
    isPopular;
    status;
    createdAt;
    updatedAt;
}
exports.PlanTemplateResponseDto = PlanTemplateResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan template ID' }),
    __metadata("design:type", String)
], PlanTemplateResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan type identifier' }),
    __metadata("design:type", String)
], PlanTemplateResponseDto.prototype, "planType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan name' }),
    __metadata("design:type", String)
], PlanTemplateResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Plan description' }),
    __metadata("design:type", String)
], PlanTemplateResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monthly price' }),
    __metadata("design:type", Number)
], PlanTemplateResponseDto.prototype, "monthlyPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Annual price' }),
    __metadata("design:type", Number)
], PlanTemplateResponseDto.prototype, "annualPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel limit (-1 = unlimited)' }),
    __metadata("design:type", Number)
], PlanTemplateResponseDto.prototype, "hotelLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room limit (-1 = unlimited)' }),
    __metadata("design:type", Number)
], PlanTemplateResponseDto.prototype, "roomLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User limit (-1 = unlimited)' }),
    __metadata("design:type", Number)
], PlanTemplateResponseDto.prototype, "userLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Advanced reporting feature' }),
    __metadata("design:type", Boolean)
], PlanTemplateResponseDto.prototype, "advancedReporting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'API access feature' }),
    __metadata("design:type", Boolean)
], PlanTemplateResponseDto.prototype, "apiAccess", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'White label feature' }),
    __metadata("design:type", Boolean)
], PlanTemplateResponseDto.prototype, "whiteLabel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email support' }),
    __metadata("design:type", Boolean)
], PlanTemplateResponseDto.prototype, "emailSupport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Phone support' }),
    __metadata("design:type", Boolean)
], PlanTemplateResponseDto.prototype, "phoneSupport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Priority support' }),
    __metadata("design:type", Boolean)
], PlanTemplateResponseDto.prototype, "prioritySupport", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Features list as JSON string' }),
    __metadata("design:type", String)
], PlanTemplateResponseDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Display order' }),
    __metadata("design:type", Number)
], PlanTemplateResponseDto.prototype, "displayOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Popular plan flag' }),
    __metadata("design:type", Boolean)
], PlanTemplateResponseDto.prototype, "isPopular", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template status', enum: PlanTemplateStatus }),
    __metadata("design:type", String)
], PlanTemplateResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation date' }),
    __metadata("design:type", String)
], PlanTemplateResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update date' }),
    __metadata("design:type", String)
], PlanTemplateResponseDto.prototype, "updatedAt", void 0);
class SubscriptionAnalyticsOverviewDto {
    totalSubscriptions;
    activeSubscriptions;
    cancelledSubscriptions;
    pastDueSubscriptions;
    trialingSubscriptions;
}
exports.SubscriptionAnalyticsOverviewDto = SubscriptionAnalyticsOverviewDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total subscriptions count' }),
    __metadata("design:type", Number)
], SubscriptionAnalyticsOverviewDto.prototype, "totalSubscriptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active subscriptions count' }),
    __metadata("design:type", Number)
], SubscriptionAnalyticsOverviewDto.prototype, "activeSubscriptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cancelled subscriptions count' }),
    __metadata("design:type", Number)
], SubscriptionAnalyticsOverviewDto.prototype, "cancelledSubscriptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Past due subscriptions count' }),
    __metadata("design:type", Number)
], SubscriptionAnalyticsOverviewDto.prototype, "pastDueSubscriptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Trialing subscriptions count' }),
    __metadata("design:type", Number)
], SubscriptionAnalyticsOverviewDto.prototype, "trialingSubscriptions", void 0);
class PlanDistributionDto {
    plan;
    count;
}
exports.PlanDistributionDto = PlanDistributionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan name' }),
    __metadata("design:type", String)
], PlanDistributionDto.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Count of subscriptions in this plan' }),
    __metadata("design:type", Number)
], PlanDistributionDto.prototype, "count", void 0);
class SubscriptionRevenueDto {
    monthlyRecurring;
    annualRecurring;
    totalMRR;
}
exports.SubscriptionRevenueDto = SubscriptionRevenueDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monthly recurring revenue' }),
    __metadata("design:type", Number)
], SubscriptionRevenueDto.prototype, "monthlyRecurring", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Annual recurring revenue' }),
    __metadata("design:type", Number)
], SubscriptionRevenueDto.prototype, "annualRecurring", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total MRR' }),
    __metadata("design:type", Number)
], SubscriptionRevenueDto.prototype, "totalMRR", void 0);
class SubscriptionAnalyticsDto {
    overview;
    planDistribution;
    revenue;
}
exports.SubscriptionAnalyticsDto = SubscriptionAnalyticsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overview statistics', type: () => SubscriptionAnalyticsOverviewDto }),
    __metadata("design:type", SubscriptionAnalyticsOverviewDto)
], SubscriptionAnalyticsDto.prototype, "overview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distribution by plan', type: () => [PlanDistributionDto] }),
    __metadata("design:type", Array)
], SubscriptionAnalyticsDto.prototype, "planDistribution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue metrics', type: () => SubscriptionRevenueDto }),
    __metadata("design:type", SubscriptionRevenueDto)
], SubscriptionAnalyticsDto.prototype, "revenue", void 0);
class RevenueDataPointDto {
    totalRevenue;
    subscriptionCount;
    billingCycle;
}
exports.RevenueDataPointDto = RevenueDataPointDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue as decimal string' }),
    __metadata("design:type", String)
], RevenueDataPointDto.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription count as string' }),
    __metadata("design:type", String)
], RevenueDataPointDto.prototype, "subscriptionCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Billing cycle' }),
    __metadata("design:type", String)
], RevenueDataPointDto.prototype, "billingCycle", void 0);
class RevenueAnalyticsDto {
    period;
    revenue;
}
exports.RevenueAnalyticsDto = RevenueAnalyticsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period info' }),
    __metadata("design:type", Object)
], RevenueAnalyticsDto.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue data points', type: () => [RevenueDataPointDto] }),
    __metadata("design:type", Array)
], RevenueAnalyticsDto.prototype, "revenue", void 0);
// ============= Subscription NATS Payload Classes =============
class CreateSubscriptionPayload {
    tenantId;
    plan;
    billingCycle;
    stripeCustomerId;
    stripePriceId;
    trialEndsAt;
}
exports.CreateSubscriptionPayload = CreateSubscriptionPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateSubscriptionPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription plan', enum: SubscriptionPlan }),
    __metadata("design:type", String)
], CreateSubscriptionPayload.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Billing cycle', enum: BillingCycle }),
    __metadata("design:type", String)
], CreateSubscriptionPayload.prototype, "billingCycle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Stripe customer ID' }),
    __metadata("design:type", String)
], CreateSubscriptionPayload.prototype, "stripeCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Stripe price ID' }),
    __metadata("design:type", String)
], CreateSubscriptionPayload.prototype, "stripePriceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Trial end date' }),
    __metadata("design:type", String)
], CreateSubscriptionPayload.prototype, "trialEndsAt", void 0);
class GetSubscriptionPayload {
    tenantId;
    subscriptionId;
}
exports.GetSubscriptionPayload = GetSubscriptionPayload;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetSubscriptionPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], GetSubscriptionPayload.prototype, "subscriptionId", void 0);
class UpdateSubscriptionPayload {
    subscriptionId;
    status;
    plan;
    billingCycle;
    hotelLimit;
    roomLimit;
    userLimit;
    advancedReporting;
    apiAccess;
    whiteLabel;
    cancelAtPeriodEnd;
}
exports.UpdateSubscriptionPayload = UpdateSubscriptionPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID to update' }),
    __metadata("design:type", String)
], UpdateSubscriptionPayload.prototype, "subscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New status', enum: SubscriptionStatus }),
    __metadata("design:type", String)
], UpdateSubscriptionPayload.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New plan', enum: SubscriptionPlan }),
    __metadata("design:type", String)
], UpdateSubscriptionPayload.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New billing cycle', enum: BillingCycle }),
    __metadata("design:type", String)
], UpdateSubscriptionPayload.prototype, "billingCycle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel limit' }),
    __metadata("design:type", Number)
], UpdateSubscriptionPayload.prototype, "hotelLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room limit' }),
    __metadata("design:type", Number)
], UpdateSubscriptionPayload.prototype, "roomLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User limit' }),
    __metadata("design:type", Number)
], UpdateSubscriptionPayload.prototype, "userLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Advanced reporting' }),
    __metadata("design:type", Boolean)
], UpdateSubscriptionPayload.prototype, "advancedReporting", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'API access' }),
    __metadata("design:type", Boolean)
], UpdateSubscriptionPayload.prototype, "apiAccess", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'White label' }),
    __metadata("design:type", Boolean)
], UpdateSubscriptionPayload.prototype, "whiteLabel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancel at period end' }),
    __metadata("design:type", Boolean)
], UpdateSubscriptionPayload.prototype, "cancelAtPeriodEnd", void 0);
class ChangePlanPayload {
    subscriptionId;
    newPlan;
    newBillingCycle;
    immediate;
}
exports.ChangePlanPayload = ChangePlanPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], ChangePlanPayload.prototype, "subscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New plan', enum: SubscriptionPlan }),
    __metadata("design:type", String)
], ChangePlanPayload.prototype, "newPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New billing cycle', enum: BillingCycle }),
    __metadata("design:type", String)
], ChangePlanPayload.prototype, "newBillingCycle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Apply change immediately' }),
    __metadata("design:type", Boolean)
], ChangePlanPayload.prototype, "immediate", void 0);
class CancelSubscriptionPayload {
    subscriptionId;
    cancelAtPeriodEnd;
    reason;
}
exports.CancelSubscriptionPayload = CancelSubscriptionPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], CancelSubscriptionPayload.prototype, "subscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancel at period end' }),
    __metadata("design:type", Boolean)
], CancelSubscriptionPayload.prototype, "cancelAtPeriodEnd", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation reason' }),
    __metadata("design:type", String)
], CancelSubscriptionPayload.prototype, "reason", void 0);
class ReactivateSubscriptionPayload {
    subscriptionId;
}
exports.ReactivateSubscriptionPayload = ReactivateSubscriptionPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], ReactivateSubscriptionPayload.prototype, "subscriptionId", void 0);
class ListSubscriptionsPayload {
    tenantId;
    status;
    plan;
    page;
    limit;
}
exports.ListSubscriptionsPayload = ListSubscriptionsPayload;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by tenant ID' }),
    __metadata("design:type", String)
], ListSubscriptionsPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status', enum: SubscriptionStatus }),
    __metadata("design:type", String)
], ListSubscriptionsPayload.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by plan', enum: SubscriptionPlan }),
    __metadata("design:type", String)
], ListSubscriptionsPayload.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    __metadata("design:type", Number)
], ListSubscriptionsPayload.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 10 }),
    __metadata("design:type", Number)
], ListSubscriptionsPayload.prototype, "limit", void 0);
// ============= Usage Tracking Payload Classes =============
class TrackUsagePayload {
    tenantId;
    metric;
    quantity;
    metadata;
}
exports.TrackUsagePayload = TrackUsagePayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], TrackUsagePayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Usage metric name' }),
    __metadata("design:type", String)
], TrackUsagePayload.prototype, "metric", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Usage quantity' }),
    __metadata("design:type", Number)
], TrackUsagePayload.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata' }),
    __metadata("design:type", Object)
], TrackUsagePayload.prototype, "metadata", void 0);
class GetUsagePayload {
    tenantId;
    metric;
    period;
}
exports.GetUsagePayload = GetUsagePayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetUsagePayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Specific metric to query' }),
    __metadata("design:type", String)
], GetUsagePayload.prototype, "metric", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Period: current or previous' }),
    __metadata("design:type", String)
], GetUsagePayload.prototype, "period", void 0);
class CheckLimitsPayload {
    tenantId;
    metric;
}
exports.CheckLimitsPayload = CheckLimitsPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CheckLimitsPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Metric to check' }),
    __metadata("design:type", String)
], CheckLimitsPayload.prototype, "metric", void 0);
class EnforceLimitsPayload {
    tenantId;
    metric;
    currentUsage;
}
exports.EnforceLimitsPayload = EnforceLimitsPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], EnforceLimitsPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Metric to enforce' }),
    __metadata("design:type", String)
], EnforceLimitsPayload.prototype, "metric", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current usage value' }),
    __metadata("design:type", Number)
], EnforceLimitsPayload.prototype, "currentUsage", void 0);
// ============= Payment Method Payload Classes =============
class CreatePaymentMethodPayload {
    subscriptionId;
    type;
    stripePaymentMethodId;
    isDefault;
    billingInfo;
}
exports.CreatePaymentMethodPayload = CreatePaymentMethodPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], CreatePaymentMethodPayload.prototype, "subscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method type' }),
    __metadata("design:type", String)
], CreatePaymentMethodPayload.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Stripe payment method ID' }),
    __metadata("design:type", String)
], CreatePaymentMethodPayload.prototype, "stripePaymentMethodId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Set as default payment method' }),
    __metadata("design:type", Boolean)
], CreatePaymentMethodPayload.prototype, "isDefault", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Billing information' }),
    __metadata("design:type", Object)
], CreatePaymentMethodPayload.prototype, "billingInfo", void 0);
class GetPaymentMethodsPayload {
    subscriptionId;
}
exports.GetPaymentMethodsPayload = GetPaymentMethodsPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], GetPaymentMethodsPayload.prototype, "subscriptionId", void 0);
class SetDefaultPaymentMethodPayload {
    subscriptionId;
    paymentMethodId;
}
exports.SetDefaultPaymentMethodPayload = SetDefaultPaymentMethodPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], SetDefaultPaymentMethodPayload.prototype, "subscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method ID' }),
    __metadata("design:type", String)
], SetDefaultPaymentMethodPayload.prototype, "paymentMethodId", void 0);
class DeletePaymentMethodPayload {
    paymentMethodId;
}
exports.DeletePaymentMethodPayload = DeletePaymentMethodPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method ID' }),
    __metadata("design:type", String)
], DeletePaymentMethodPayload.prototype, "paymentMethodId", void 0);
// ============= Invoice Payload Classes =============
class CreateInvoicePayload {
    subscriptionId;
    type;
    periodStart;
    periodEnd;
    items;
    dueDate;
    taxRate;
}
exports.CreateInvoicePayload = CreateInvoicePayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], CreateInvoicePayload.prototype, "subscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice type' }),
    __metadata("design:type", String)
], CreateInvoicePayload.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period start date' }),
    __metadata("design:type", String)
], CreateInvoicePayload.prototype, "periodStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period end date' }),
    __metadata("design:type", String)
], CreateInvoicePayload.prototype, "periodEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice line items' }),
    __metadata("design:type", Array)
], CreateInvoicePayload.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Due date' }),
    __metadata("design:type", String)
], CreateInvoicePayload.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax rate percentage' }),
    __metadata("design:type", Number)
], CreateInvoicePayload.prototype, "taxRate", void 0);
class GetInvoicePayload {
    invoiceId;
}
exports.GetInvoicePayload = GetInvoicePayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice ID' }),
    __metadata("design:type", String)
], GetInvoicePayload.prototype, "invoiceId", void 0);
class ListInvoicesPayload {
    subscriptionId;
    status;
    type;
    startDate;
    endDate;
    page;
    limit;
}
exports.ListInvoicesPayload = ListInvoicesPayload;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], ListInvoicesPayload.prototype, "subscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status' }),
    __metadata("design:type", String)
], ListInvoicesPayload.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by type' }),
    __metadata("design:type", String)
], ListInvoicesPayload.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date filter' }),
    __metadata("design:type", String)
], ListInvoicesPayload.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date filter' }),
    __metadata("design:type", String)
], ListInvoicesPayload.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number' }),
    __metadata("design:type", Number)
], ListInvoicesPayload.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], ListInvoicesPayload.prototype, "limit", void 0);
class PayInvoicePayload {
    invoiceId;
    paymentMethod;
    amountPaid;
}
exports.PayInvoicePayload = PayInvoicePayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice ID' }),
    __metadata("design:type", String)
], PayInvoicePayload.prototype, "invoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method used' }),
    __metadata("design:type", String)
], PayInvoicePayload.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount paid' }),
    __metadata("design:type", Number)
], PayInvoicePayload.prototype, "amountPaid", void 0);
class InvoicePaymentFailedPayload {
    invoiceId;
    failureReason;
}
exports.InvoicePaymentFailedPayload = InvoicePaymentFailedPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice ID' }),
    __metadata("design:type", String)
], InvoicePaymentFailedPayload.prototype, "invoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Failure reason' }),
    __metadata("design:type", String)
], InvoicePaymentFailedPayload.prototype, "failureReason", void 0);
// ============= Stripe Webhook Payload Classes =============
class StripeSubscriptionUpdatedPayload {
    stripeSubscriptionId;
    status;
    currentPeriodStart;
    currentPeriodEnd;
}
exports.StripeSubscriptionUpdatedPayload = StripeSubscriptionUpdatedPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stripe subscription ID' }),
    __metadata("design:type", String)
], StripeSubscriptionUpdatedPayload.prototype, "stripeSubscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated status' }),
    __metadata("design:type", String)
], StripeSubscriptionUpdatedPayload.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current period start' }),
    __metadata("design:type", String)
], StripeSubscriptionUpdatedPayload.prototype, "currentPeriodStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current period end' }),
    __metadata("design:type", String)
], StripeSubscriptionUpdatedPayload.prototype, "currentPeriodEnd", void 0);
class StripeInvoicePaymentSucceededPayload {
    stripeInvoiceId;
    amountPaid;
    paymentMethod;
}
exports.StripeInvoicePaymentSucceededPayload = StripeInvoicePaymentSucceededPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stripe invoice ID' }),
    __metadata("design:type", String)
], StripeInvoicePaymentSucceededPayload.prototype, "stripeInvoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount paid in cents' }),
    __metadata("design:type", Number)
], StripeInvoicePaymentSucceededPayload.prototype, "amountPaid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method used' }),
    __metadata("design:type", String)
], StripeInvoicePaymentSucceededPayload.prototype, "paymentMethod", void 0);
class StripeInvoicePaymentFailedPayload {
    stripeInvoiceId;
    failureReason;
}
exports.StripeInvoicePaymentFailedPayload = StripeInvoicePaymentFailedPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stripe invoice ID' }),
    __metadata("design:type", String)
], StripeInvoicePaymentFailedPayload.prototype, "stripeInvoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Failure reason' }),
    __metadata("design:type", String)
], StripeInvoicePaymentFailedPayload.prototype, "failureReason", void 0);
// ============= Event Payload Classes =============
class ResourceEventPayload {
    tenantId;
    hotelId;
    roomId;
    userId;
    bookingId;
}
exports.ResourceEventPayload = ResourceEventPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ResourceEventPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ResourceEventPayload.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room ID' }),
    __metadata("design:type", String)
], ResourceEventPayload.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID' }),
    __metadata("design:type", String)
], ResourceEventPayload.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], ResourceEventPayload.prototype, "bookingId", void 0);
class ApiCallPayload {
    tenantId;
    endpoint;
    method;
}
exports.ApiCallPayload = ApiCallPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ApiCallPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'API endpoint called' }),
    __metadata("design:type", String)
], ApiCallPayload.prototype, "endpoint", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'HTTP method' }),
    __metadata("design:type", String)
], ApiCallPayload.prototype, "method", void 0);
// ============= Platform Subscription NATS Payload Classes =============
class GetSubscriptionAnalyticsPayload {
}
exports.GetSubscriptionAnalyticsPayload = GetSubscriptionAnalyticsPayload;
class GetRevenueAnalyticsPayload {
    startDate;
    endDate;
    groupBy;
}
exports.GetRevenueAnalyticsPayload = GetRevenueAnalyticsPayload;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date' }),
    __metadata("design:type", String)
], GetRevenueAnalyticsPayload.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date' }),
    __metadata("design:type", String)
], GetRevenueAnalyticsPayload.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Group by period' }),
    __metadata("design:type", String)
], GetRevenueAnalyticsPayload.prototype, "groupBy", void 0);
class GetSubscriptionsListPayload {
    status;
    plan;
    tenantId;
    billingCycle;
    page;
    limit;
    sortBy;
    sortOrder;
}
exports.GetSubscriptionsListPayload = GetSubscriptionsListPayload;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status' }),
    __metadata("design:type", String)
], GetSubscriptionsListPayload.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by plan' }),
    __metadata("design:type", String)
], GetSubscriptionsListPayload.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by tenant ID' }),
    __metadata("design:type", String)
], GetSubscriptionsListPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by billing cycle' }),
    __metadata("design:type", String)
], GetSubscriptionsListPayload.prototype, "billingCycle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number' }),
    __metadata("design:type", Number)
], GetSubscriptionsListPayload.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], GetSubscriptionsListPayload.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort field' }),
    __metadata("design:type", String)
], GetSubscriptionsListPayload.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort order' }),
    __metadata("design:type", String)
], GetSubscriptionsListPayload.prototype, "sortOrder", void 0);
class FindSubscriptionByIdPayload {
    id;
}
exports.FindSubscriptionByIdPayload = FindSubscriptionByIdPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], FindSubscriptionByIdPayload.prototype, "id", void 0);
class GetTenantSubscriptionPayload {
    tenantId;
}
exports.GetTenantSubscriptionPayload = GetTenantSubscriptionPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetTenantSubscriptionPayload.prototype, "tenantId", void 0);
// ============= Subscription REST DTOs (migrated from local) =============
const class_validator_1 = require("class-validator");
class CreateSubscriptionDto {
    tenantId;
    plan;
    billingCycle;
    stripeCustomerId;
    stripePriceId;
    trialEndsAt;
}
exports.CreateSubscriptionDto = CreateSubscriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: SubscriptionPlan, description: 'Subscription plan' }),
    (0, class_validator_1.IsEnum)(SubscriptionPlan),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: BillingCycle, description: 'Billing cycle' }),
    (0, class_validator_1.IsEnum)(BillingCycle),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "billingCycle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Stripe customer ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "stripeCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Stripe price ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "stripePriceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Trial end date' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "trialEndsAt", void 0);
class UpdateSubscriptionDto {
    plan;
    status;
    billingCycle;
    hotelLimit;
    roomLimit;
    userLimit;
    advancedReporting;
    apiAccess;
    whiteLabel;
    cancelAtPeriodEnd;
}
exports.UpdateSubscriptionDto = UpdateSubscriptionDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: SubscriptionPlan, description: 'Subscription plan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(SubscriptionPlan),
    __metadata("design:type", String)
], UpdateSubscriptionDto.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: SubscriptionStatus, description: 'Subscription status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(SubscriptionStatus),
    __metadata("design:type", String)
], UpdateSubscriptionDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: BillingCycle, description: 'Billing cycle' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(BillingCycle),
    __metadata("design:type", String)
], UpdateSubscriptionDto.prototype, "billingCycle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel limit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateSubscriptionDto.prototype, "hotelLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room limit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateSubscriptionDto.prototype, "roomLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User limit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateSubscriptionDto.prototype, "userLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Advanced reporting feature' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateSubscriptionDto.prototype, "advancedReporting", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'API access feature' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateSubscriptionDto.prototype, "apiAccess", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'White label feature' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateSubscriptionDto.prototype, "whiteLabel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancel at period end' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateSubscriptionDto.prototype, "cancelAtPeriodEnd", void 0);
class SubscriptionUsageDto {
    metric;
    currentUsage;
    limitValue;
    previousPeriodUsage;
    usagePercentage;
    limitExceeded;
    overageCharge;
}
exports.SubscriptionUsageDto = SubscriptionUsageDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Usage metric name' }),
    __metadata("design:type", String)
], SubscriptionUsageDto.prototype, "metric", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current usage' }),
    __metadata("design:type", Number)
], SubscriptionUsageDto.prototype, "currentUsage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Limit value' }),
    __metadata("design:type", Number)
], SubscriptionUsageDto.prototype, "limitValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Previous period usage' }),
    __metadata("design:type", Number)
], SubscriptionUsageDto.prototype, "previousPeriodUsage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Usage percentage' }),
    __metadata("design:type", Number)
], SubscriptionUsageDto.prototype, "usagePercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Limit exceeded flag' }),
    __metadata("design:type", Boolean)
], SubscriptionUsageDto.prototype, "limitExceeded", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Overage charge' }),
    __metadata("design:type", Number)
], SubscriptionUsageDto.prototype, "overageCharge", void 0);
class PlanChangeDto {
    newPlan;
    newBillingCycle;
    immediate;
}
exports.PlanChangeDto = PlanChangeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: SubscriptionPlan, description: 'New subscription plan' }),
    (0, class_validator_1.IsEnum)(SubscriptionPlan),
    __metadata("design:type", String)
], PlanChangeDto.prototype, "newPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: BillingCycle, description: 'New billing cycle' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(BillingCycle),
    __metadata("design:type", String)
], PlanChangeDto.prototype, "newBillingCycle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Apply change immediately' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PlanChangeDto.prototype, "immediate", void 0);
class CancelSubscriptionDto {
    cancelAtPeriodEnd;
    reason;
}
exports.CancelSubscriptionDto = CancelSubscriptionDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancel at period end instead of immediately' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CancelSubscriptionDto.prototype, "cancelAtPeriodEnd", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation reason' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CancelSubscriptionDto.prototype, "reason", void 0);
class CreatePlanTemplateDto {
    planType;
    name;
    description;
    monthlyPrice;
    annualPrice;
    hotelLimit;
    roomLimit;
    userLimit;
    advancedReporting;
    apiAccess;
    whiteLabel;
    features;
    displayOrder;
    isPopular;
}
exports.CreatePlanTemplateDto = CreatePlanTemplateDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan type' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePlanTemplateDto.prototype, "planType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePlanTemplateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Plan description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePlanTemplateDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monthly price' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreatePlanTemplateDto.prototype, "monthlyPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Annual price' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreatePlanTemplateDto.prototype, "annualPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel limit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreatePlanTemplateDto.prototype, "hotelLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room limit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreatePlanTemplateDto.prototype, "roomLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User limit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreatePlanTemplateDto.prototype, "userLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Advanced reporting feature' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePlanTemplateDto.prototype, "advancedReporting", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'API access feature' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePlanTemplateDto.prototype, "apiAccess", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'White label feature' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePlanTemplateDto.prototype, "whiteLabel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Features list as JSON string' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePlanTemplateDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Display order' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePlanTemplateDto.prototype, "displayOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is popular plan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePlanTemplateDto.prototype, "isPopular", void 0);
class UpdatePlanTemplateDto {
    name;
    description;
    monthlyPrice;
    annualPrice;
    hotelLimit;
    roomLimit;
    userLimit;
    advancedReporting;
    apiAccess;
    whiteLabel;
    features;
    displayOrder;
    isPopular;
    status;
}
exports.UpdatePlanTemplateDto = UpdatePlanTemplateDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Plan name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePlanTemplateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Plan description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePlanTemplateDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Monthly price' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], UpdatePlanTemplateDto.prototype, "monthlyPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Annual price' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], UpdatePlanTemplateDto.prototype, "annualPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel limit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdatePlanTemplateDto.prototype, "hotelLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room limit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdatePlanTemplateDto.prototype, "roomLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User limit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdatePlanTemplateDto.prototype, "userLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Advanced reporting feature' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePlanTemplateDto.prototype, "advancedReporting", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'API access feature' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePlanTemplateDto.prototype, "apiAccess", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'White label feature' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePlanTemplateDto.prototype, "whiteLabel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Features list as JSON string' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePlanTemplateDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Display order' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdatePlanTemplateDto.prototype, "displayOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is popular plan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePlanTemplateDto.prototype, "isPopular", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Plan status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePlanTemplateDto.prototype, "status", void 0);
class SubscriptionQueryDto {
    status;
    plan;
    tenantId;
    billingCycle;
    page;
    limit;
    sortBy;
    sortOrder;
}
exports.SubscriptionQueryDto = SubscriptionQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubscriptionQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by plan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubscriptionQueryDto.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SubscriptionQueryDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by billing cycle' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubscriptionQueryDto.prototype, "billingCycle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SubscriptionQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], SubscriptionQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort field' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubscriptionQueryDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort order' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubscriptionQueryDto.prototype, "sortOrder", void 0);
class CreateSubscriptionWithTemplateDto extends CreateSubscriptionDto {
    planTemplateId;
    currentPeriodStart;
}
exports.CreateSubscriptionWithTemplateDto = CreateSubscriptionWithTemplateDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Plan template ID to use for subscription setup' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSubscriptionWithTemplateDto.prototype, "planTemplateId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Current period start date' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSubscriptionWithTemplateDto.prototype, "currentPeriodStart", void 0);
//# sourceMappingURL=billing.nats.js.map