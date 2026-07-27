/**
 * Pricing Audit Log NATS Contracts
 *
 * @nats_pattern pricing.audit-log.list
 */
export declare class RecordPricingAuditParams {
    tenantId: string;
    hotelId: string;
    resourceType: string;
    resourceId?: string | null;
    resourceName?: string | null;
    action: string;
    previousData?: Record<string, any> | null;
    newData?: Record<string, any> | null;
    performedBy?: string | null;
    performedByName?: string | null;
}
/**
 * NATS Pattern: pricing.audit-log.list
 */
export declare class ListPricingAuditLogRequest {
    tenantId: string;
    hotelId?: string;
    resourceType?: string;
    resourceId?: string;
    action?: string;
    from?: string;
    to?: string;
    page?: number;
    limit?: number;
}
export declare class PricingAuditLogEntry {
    id: string;
    tenantId: string;
    hotelId: string;
    resourceType: string;
    resourceId: string | null;
    resourceName: string | null;
    action: string;
    previousData: Record<string, any> | null;
    newData: Record<string, any> | null;
    performedBy: string | null;
    performedByName: string | null;
    createdAt: Date;
}
export declare class ListPricingAuditLogResponse {
    data: PricingAuditLogEntry[];
    total: number;
    page: number;
    limit: number;
}
//# sourceMappingURL=pricing-audit-log.nats.d.ts.map