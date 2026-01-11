/**
 * Feedback NATS Contracts
 *
 * Patterns:
 * - crm.feedback.stats
 * - crm.feedback.findAll
 * - crm.feedback.findOne
 * - crm.feedback.create
 * - crm.feedback.respond
 * - crm.feedback.nps.findAll
 * - crm.feedback.nps.create
 * - crm.feedback.communication.create
 * - crm.feedback.communication.findByCustomer
 * - crm.feedback.analytics
 * - crm.feedback.dashboard
 * - feedback.satisfaction.average
 * - feedback.satisfaction.detailed
 * - feedback.churn.reasons
 *
 * Handler: crm-service (FeedbackController)
 * Called by: api-gateway (CrmController)
 */
import { NatsResponse } from '../../common';
/**
 * Feedback Status Enum
 */
export declare enum FeedbackStatus {
    NEW = "NEW",
    IN_PROGRESS = "IN_PROGRESS",
    RESOLVED = "RESOLVED",
    CLOSED = "CLOSED",
    ESCALATED = "ESCALATED"
}
/**
 * Create Feedback Request
 * Pattern: crm.feedback.create
 */
export interface CreateFeedbackNatsRequest {
    tenantId: string;
    customerId: string;
    feedbackType: string;
    category: string;
    priority: string;
    rating?: number;
    comment: string;
    incidentDate?: string;
}
/**
 * Customer Feedback Response
 */
export interface CustomerFeedbackNatsResponse {
    id: string;
    tenantId: string;
    customerId: string;
    feedbackType: string;
    category: string;
    priority: string;
    rating?: number;
    comment: string;
    status: FeedbackStatus;
    incidentDate?: string | Date;
    createdAt: string | Date;
    updatedAt: string | Date;
    assignedAt?: string | Date;
    acknowledgedAt?: string | Date;
    resolvedAt?: string | Date;
    followUpDate?: string | Date;
    assignedTo?: string;
    resolutionNotes?: string;
}
/**
 * Feedback Stats Response
 */
export interface FeedbackStatsNatsResponse {
    totalFeedback: number;
    pendingCount: number;
    averageRating: number;
    npsScore: number;
    responseTime: number;
    satisfaction: Record<string, number>;
}
/**
 * Stats Request
 * Pattern: crm.feedback.stats
 */
export interface GetFeedbackStatsNatsRequest {
    tenantId: string;
}
/**
 * Stats Response
 */
export type GetFeedbackStatsNatsResponse = NatsResponse<FeedbackStatsNatsResponse>;
/**
 * Find All Feedback Request
 * Pattern: crm.feedback.findAll
 */
export interface FindAllFeedbackNatsRequest {
    tenantId: string;
    status?: string;
    category?: string;
    priority?: string;
    createdFrom?: string;
    createdTo?: string;
    page?: number;
    limit?: number;
}
/**
 * Find All Feedback Response
 */
export type FindAllFeedbackNatsResponse = NatsResponse<{
    data: CustomerFeedbackNatsResponse[];
    total: number;
    page: number;
    limit: number;
}>;
/**
 * Find One Feedback Request
 * Pattern: crm.feedback.findOne
 */
export interface FindOneFeedbackNatsRequest {
    tenantId: string;
    feedbackId: string;
}
/**
 * Find One Feedback Response
 */
export type FindOneFeedbackNatsResponse = NatsResponse<CustomerFeedbackNatsResponse>;
/**
 * Respond To Feedback Request
 * Pattern: crm.feedback.respond
 */
export interface RespondToFeedbackNatsRequest {
    tenantId: string;
    feedbackId: string;
    status: FeedbackStatus;
    resolutionNotes?: string;
    assignedTo?: string;
}
/**
 * Respond To Feedback Response
 */
export type RespondToFeedbackNatsResponse = NatsResponse<CustomerFeedbackNatsResponse>;
/**
 * Create NPS Response Request
 * Pattern: crm.feedback.nps.create
 */
export interface CreateNpsResponseNatsRequest {
    tenantId: string;
    customerId: string;
    npsScore: number;
    comment?: string;
    respondentType?: string;
}
/**
 * NPS Response
 */
export interface NpsResponseNatsResponse {
    id: string;
    tenantId: string;
    customerId: string;
    npsScore: number;
    comment?: string;
    respondentType?: string;
    createdAt: string | Date;
}
/**
 * Create NPS Response Response
 */
export type CreateNpsResponseNatsResponse = NatsResponse<NpsResponseNatsResponse>;
/**
 * Find All NPS Responses Request
 * Pattern: crm.feedback.nps.findAll
 */
export interface FindAllNpsResponsesNatsRequest {
    tenantId: string;
    createdFrom?: string;
    createdTo?: string;
    page?: number;
    limit?: number;
}
/**
 * Find All NPS Responses Response
 */
export type FindAllNpsResponsesNatsResponse = NatsResponse<any>;
/**
 * Communication Log Response
 */
export interface CommunicationLogNatsResponse {
    id: string;
    tenantId: string;
    customerId: string;
    channel: string;
    subject?: string;
    message: string;
    sentAt: string | Date;
    createdAt: string | Date;
}
/**
 * Create Communication Log Request
 * Pattern: crm.feedback.communication.create
 */
export interface CreateCommunicationLogNatsRequest {
    tenantId: string;
    customerId: string;
    channel: string;
    subject?: string;
    message: string;
}
/**
 * Create Communication Log Response
 */
export type CreateCommunicationLogNatsResponse = NatsResponse<CommunicationLogNatsResponse>;
/**
 * Get Communication History Request
 * Pattern: crm.feedback.communication.findByCustomer
 */
export interface GetCommunicationHistoryNatsRequest {
    tenantId: string;
    customerId: string;
    limit?: number;
}
/**
 * Get Communication History Response
 */
export type GetCommunicationHistoryNatsResponse = NatsResponse<CommunicationLogNatsResponse[]>;
/**
 * Feedback Analytics Response
 */
export interface FeedbackAnalyticsNatsResponse {
    totalFeedback: number;
    averageRating: number;
    ratingDistribution: Record<string, number>;
    sentimentDistribution: Record<string, number>;
    categoryDistribution: Record<string, number>;
    resolutionMetrics: {
        pendingCount: number;
        averageResolutionTime: number;
    };
    [key: string]: any;
}
/**
 * Get Feedback Analytics Request
 * Pattern: crm.feedback.analytics
 */
export interface GetFeedbackAnalyticsNatsRequest {
    tenantId: string;
    dateFrom?: string;
    dateTo?: string;
}
/**
 * Get Feedback Analytics Response
 */
export type GetFeedbackAnalyticsNatsResponse = NatsResponse<FeedbackAnalyticsNatsResponse>;
/**
 * Dashboard Summary Response
 */
export interface FeedbackDashboardNatsResponse {
    overview: {
        totalFeedback: number;
        pendingCount: number;
        averageRating: number;
        npsScore: number;
    };
    recentFeedback: {
        highPriorityCount: number;
        urgentCount: number;
        unassignedCount: number;
    };
    trends: {
        feedbackTrend: string;
        satisfactionTrend: string;
        resolutionTimeTrend: string;
    };
}
/**
 * Get Feedback Dashboard Summary Request
 * Pattern: crm.feedback.dashboard
 */
export interface GetFeedbackDashboardSummaryNatsRequest {
    tenantId: string;
}
/**
 * Get Feedback Dashboard Summary Response
 */
export type GetFeedbackDashboardSummaryNatsResponse = NatsResponse<FeedbackDashboardNatsResponse>;
/**
 * Get Satisfaction Average Request
 * Pattern: feedback.satisfaction.average
 */
export interface GetSatisfactionAverageNatsRequest {
    hotelId: string;
    period: string;
}
/**
 * Get Satisfaction Average Response
 */
export interface SatisfactionAverageNatsResponse {
    averageSatisfaction: number;
    totalResponses: number;
    period: string;
}
/**
 * Get Satisfaction Average NATS Response
 */
export type GetSatisfactionAverageNatsResponse = NatsResponse<SatisfactionAverageNatsResponse>;
/**
 * Get Satisfaction Detailed Request
 * Pattern: feedback.satisfaction.detailed
 */
export interface GetSatisfactionDetailedNatsRequest {
    hotelId: string;
    period: string;
}
/**
 * Get Satisfaction Detailed Response
 */
export interface SatisfactionDetailedNatsResponse {
    averageRating: number;
    ratingDistribution: Record<string, any>;
    sentimentDistribution: Record<string, any>;
    categoryBreakdown: Record<string, any>;
    totalFeedback: number;
    period: string;
}
/**
 * Get Satisfaction Detailed NATS Response
 */
export type GetSatisfactionDetailedNatsResponse = NatsResponse<SatisfactionDetailedNatsResponse>;
/**
 * Get Churn Reasons Request
 * Pattern: feedback.churn.reasons
 */
export interface GetChurnReasonsNatsRequest {
    hotelId: string;
    period: string;
}
/**
 * Get Churn Reasons Response
 */
export interface ChurnReasonsNatsResponse {
    churnReasons: {
        serviceQuality: number;
        staffBehavior: number;
        facilities: number;
        pricing: number;
        cleanliness: number;
        other: number;
    };
    totalComplaints: number;
    period: string;
}
/**
 * Get Churn Reasons NATS Response
 */
export type GetChurnReasonsNatsResponse = NatsResponse<ChurnReasonsNatsResponse>;
//# sourceMappingURL=feedback.nats.d.ts.map