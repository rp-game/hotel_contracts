/**
 * Audit Activity Event Contract
 * @description Shared types for cross-service audit logging
 * @usage Emitted by all services via NATS 'audit.activity', received by user-service
 */
/** Categorize actions for filtering in admin UI */
export declare enum AuditCategory {
    AUTH = "AUTH",
    BOOKING = "BOOKING",
    FINANCIAL = "FINANCIAL",
    CONFIGURATION = "CONFIGURATION"
}
/** Severity/importance level for visual distinction */
export declare enum AuditSeverity {
    INFO = "INFO",
    ACTION = "ACTION",
    WARNING = "WARNING",
    CRITICAL = "CRITICAL"
}
/** Sentinel for automated/cron/system actions */
export declare const SYSTEM_USER_ID = "00000000-0000-0000-0000-000000000000";
export declare const SYSTEM_USER_NAME = "System";
/** Fired by each service, consumed by user-service for central aggregation */
export interface AuditActivityEvent {
    tenantId: string;
    hotelId: string;
    userId: string;
    userName: string;
    service: string;
    category: AuditCategory;
    action: string;
    severity: AuditSeverity;
    resource: string;
    resourceId?: string;
    resourceName?: string;
    descriptionVi: string;
    descriptionEn: string;
    metadata?: Record<string, any>;
    ipAddress?: string;
    userAgent?: string;
    timestamp: string;
}
export interface FindAuditLogsNatsRequest {
    tenantId: string;
    hotelId: string;
    userId?: string;
    action?: string;
    resource?: string;
    service?: string;
    category?: string;
    severity?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export interface FindAuditLogsByUserNatsRequest {
    tenantId: string;
    hotelId: string;
    userId: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class FindAuditLogsQueryDto {
    userId?: string;
    action?: string;
    resource?: string;
    service?: string;
    category?: AuditCategory;
    severity?: AuditSeverity;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class AuditLogResponseDto {
    id: string;
    tenantId: string;
    hotelId: string;
    userId: string;
    userName: string;
    service: string;
    category: AuditCategory;
    action: string;
    severity: AuditSeverity;
    resource: string;
    resourceId?: string;
    resourceName?: string;
    descriptionVi: string;
    descriptionEn: string;
    metadata?: Record<string, any>;
    ipAddress?: string;
    userAgent?: string;
    createdAt: string;
}
export declare class AuditLogListResponseDto {
    data: AuditLogResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
//# sourceMappingURL=audit-activity.event.d.ts.map