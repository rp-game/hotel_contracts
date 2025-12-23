/**
 * Loyalty Points Expiration Types
 * Used for managing points expiration rules, settings, and bulk operations
 */
/**
 * Expiration Statistics Overview
 */
export interface ExpirationStats {
    totalPointsExpiring: number;
    membersWithExpiringPoints: number;
    totalRevenueAtRisk: number;
    expirationTrend: 'increasing' | 'decreasing' | 'stable';
    averagePointsPerMember: number;
}
/**
 * Expiration Schedule Entry
 */
export interface ExpirationSchedule {
    daysUntilExpiration: number;
    count: number;
    totalPoints: number;
    estimatedRevenue: number;
    members: string[];
}
/**
 * Member Segment Statistics
 */
export interface MemberSegmentStats {
    segment: string;
    tier: string;
    memberCount: number;
    totalExpiringPoints: number;
    totalRevenueAtRisk: number;
    averageExpirationDays: number;
}
/**
 * Retention Opportunity
 */
export interface RetentionOpportunity {
    memberId: string;
    segment: string;
    expiringPoints: number;
    potentialRevenue: number;
    recommendedAction: string;
    priority: 'high' | 'medium' | 'low';
}
/**
 * Expiration Rule
 */
export interface ExpirationRule {
    id: string;
    tenantId: string;
    ruleName: string;
    expirationDays: number;
    applicationType: 'ALL' | 'TRANSACTION_TYPE' | 'TIER' | 'CAMPAIGN';
    appliesToTransactionType?: string;
    appliesToTier?: string;
    appliesToCampaignId?: string;
    allowExtension?: boolean;
    maxExtensions?: number;
    extensionDays?: number;
    extensionConditions?: any;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Expiration Settings
 */
export interface ExpirationSettings {
    tenantId: string;
    enableExpiration: boolean;
    enableNotifications: boolean;
    notificationSchedule?: any[];
    enableAutoExtension: boolean;
    autoExtensionRules?: any[];
    dailyProcessingTime?: string;
    timezone?: string;
    gracePeriodEnabled: boolean;
    gracePeriodDays?: number;
    updatedAt: Date;
}
/**
 * Batch Processing Result
 */
export interface BatchProcessingResult {
    success: boolean;
    batchId: number;
    message: string;
}
/**
 * Batch Notification Result
 */
export interface BatchNotificationResult {
    success: boolean;
    results: Array<{
        daysBefore: number;
        batchId: number;
        status: string;
    }>;
    message: string;
}
/**
 * Notification Send Result
 */
export interface NotificationSendResult {
    success: boolean;
    message: string;
    notificationId?: string;
    sentAt?: string;
}
/**
 * Batch History Entry
 */
export interface BatchHistoryEntry {
    id: number;
    batchId: number;
    tenantId: string;
    processedAt: string;
    totalRecords: number;
    successCount: number;
    failureCount: number;
    status: string;
}
/**
 * Notification History Entry
 */
export interface NotificationHistoryEntry {
    id: string;
    tenantId: string;
    memberId: string;
    notificationType: string;
    daysBeforeExpiry: number;
    sentAt: string;
    status: string;
    response?: any;
}
/**
 * Member's Expiring Points
 */
export interface MemberExpiringPoints {
    memberId: string;
    memberName: string;
    tier: string;
    expiringPoints: number;
    expirationDate: string;
    daysUntilExpiration: number;
}
/**
 * Daily Processing Job Result
 */
export interface DailyProcessingJobResult {
    success: boolean;
    batchId: number;
    message: string;
}
/**
 * Notification Reminders Job Result
 */
export interface NotificationRemindersJobResult {
    success: boolean;
    results: Array<{
        daysBefore: number;
        batchId: number;
        status: string;
    }>;
    message: string;
}
/**
 * Notification Effectiveness Metrics
 */
export interface NotificationEffectiveness {
    totalSent: number;
    opened: number;
    clicked: number;
    openRate: number;
    clickRate: number;
    conversionRate: number;
    averageResponseTime: number;
}
//# sourceMappingURL=points-expiration.types.d.ts.map