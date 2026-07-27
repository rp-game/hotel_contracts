import type { NatsResponse } from '../../common/nats-response.interface';
export declare class CreateSalesLeadRequest {
    tenantId?: string;
    hotelId?: string;
    companyName: string;
    contactPerson: string;
    contactEmail?: string;
    contactPhone?: string;
    source: string;
    stage?: string;
    estimatedRevenue?: number;
    estimatedRoomNights?: number;
    salesPersonId: string;
    salesPersonName: string;
    expectedCloseDate?: string;
    notes?: string;
    createdBy?: string;
    createdByName?: string;
}
export declare class UpdateSalesLeadDto {
    companyName?: string;
    contactPerson?: string;
    contactEmail?: string;
    contactPhone?: string;
    source?: string;
    stage?: string;
    estimatedRevenue?: number;
    estimatedRoomNights?: number;
    salesPersonId?: string;
    salesPersonName?: string;
    expectedCloseDate?: string;
    lostReason?: string;
    notes?: string;
}
export declare class UpdateSalesLeadRequest {
    tenantId?: string;
    id: string;
    dto: UpdateSalesLeadDto;
}
export declare class FindSalesLeadsRequest {
    tenantId?: string;
    hotelId?: string;
    stage?: string;
    source?: string;
    salesPersonId?: string;
    search?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
export declare class GetSalesLeadRequest {
    tenantId?: string;
    id: string;
}
export declare class DeleteSalesLeadRequest {
    tenantId?: string;
    id: string;
}
export declare class SalesLeadResponse {
    id: string;
    tenantId: string;
    hotelId?: string | null;
    companyName: string;
    contactPerson: string;
    contactEmail: string | null;
    contactPhone: string | null;
    source: string;
    stage: string;
    estimatedRevenue: number | null;
    estimatedRoomNights: number | null;
    salesPersonId: string;
    salesPersonName: string;
    expectedCloseDate: string | null;
    lostReason: string | null;
    convertedAccountId: string | null;
    notes: string | null;
    createdBy: string | null;
    createdByName: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export declare class SalesLeadListResponse {
    leads: SalesLeadResponse[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export declare class DeleteSalesLeadResponse {
    deleted: boolean;
}
export declare class ConvertSalesLeadResponse {
    lead: SalesLeadResponse;
    corporateAccount: any;
}
export declare class ConvertSalesLeadRequest {
    tenantId?: string;
    leadId: string;
    convertedBy?: string;
    convertedByName?: string;
}
export declare class PipelineSummaryRequest {
    tenantId?: string;
    hotelId?: string;
}
export declare class StageSummary {
    stage: string;
    count: number;
    estimatedRevenue: number;
}
export declare class PipelineSummaryResponse {
    stages: StageSummary[];
    totalLeads: number;
    totalEstimatedRevenue: number;
    conversionRate: number;
}
export type CreateSalesLeadNatsResponse = NatsResponse<SalesLeadResponse>;
export type UpdateSalesLeadNatsResponse = NatsResponse<SalesLeadResponse>;
export type GetSalesLeadNatsResponse = NatsResponse<SalesLeadResponse>;
export type FindSalesLeadsNatsResponse = NatsResponse<SalesLeadListResponse>;
export type DeleteSalesLeadNatsResponse = NatsResponse<{
    deleted: boolean;
}>;
export type ConvertSalesLeadNatsResponse = NatsResponse<{
    lead: SalesLeadResponse;
    corporateAccount: any;
}>;
export type PipelineSummaryNatsResponse = NatsResponse<PipelineSummaryResponse>;
//# sourceMappingURL=sales-lead.nats.d.ts.map