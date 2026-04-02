/**
 * Sales Win/Loss Report NATS Contracts
 *
 * Handler: booking-service
 * Called by: api-gateway
 */
/**
 * Shared report filters request - wraps ReportFiltersDto with tenantId
 * Used by all 5 report endpoints
 */
export declare class SalesReportNatsRequest {
    tenantId: string;
    startDate?: string;
    endDate?: string;
    hotelId?: string;
    staffId?: string;
}
/**
 * Mark Won NATS request - wraps MarkWonDto with tenantId + leadId
 */
export declare class MarkWonNatsRequest {
    tenantId: string;
    leadId: string;
    bookingId: string;
    wonValue: number;
    wonNotes?: string;
}
/**
 * Mark Lost NATS request - wraps MarkLostDto with tenantId + leadId
 */
export declare class MarkLostNatsRequest {
    tenantId: string;
    leadId: string;
    lossReasonId: string;
    lostNotes?: string;
}
/**
 * Get Loss Reasons NATS request
 */
export declare class GetLossReasonsNatsRequest {
    tenantId: string;
}
/**
 * Get Pending Leads NATS request
 */
export declare class GetPendingLeadsNatsRequest {
    tenantId: string;
    hotelId?: string;
    staffId?: string;
}
//# sourceMappingURL=sales-report.nats.d.ts.map