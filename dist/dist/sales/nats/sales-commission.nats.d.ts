import { SalesCommissionAppliesTo } from '../enums/sales.enum';
import type { NatsResponse } from '../../common/nats-response.interface';
export declare class CreateSalesCommissionRuleRequest {
    tenantId?: string;
    hotelId?: string;
    salesPersonId: string;
    salesPersonName: string;
    commissionRate: number;
    appliesTo: SalesCommissionAppliesTo;
    isActive?: boolean;
    createdBy?: string;
    createdByName?: string;
}
export declare class UpdateSalesCommissionRuleDto {
    commissionRate?: number;
    appliesTo?: SalesCommissionAppliesTo;
    isActive?: boolean;
    salesPersonName?: string;
}
export declare class UpdateSalesCommissionRuleRequest {
    tenantId?: string;
    id: string;
    dto: UpdateSalesCommissionRuleDto;
}
export declare class FindSalesCommissionRulesRequest {
    tenantId?: string;
    hotelId?: string;
    salesPersonId?: string;
    appliesTo?: SalesCommissionAppliesTo;
    isActive?: boolean;
    page?: number;
    limit?: number;
}
export declare class GetSalesCommissionRuleRequest {
    tenantId?: string;
    id: string;
}
export declare class DeleteSalesCommissionRuleRequest {
    tenantId?: string;
    id: string;
}
export declare class SalesCommissionRuleResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    salesPersonId: string;
    salesPersonName: string;
    commissionRate: number;
    appliesTo: string;
    isActive: boolean;
    createdBy: string | null;
    createdByName: string | null;
    createdAt: Date;
}
export declare class SalesCommissionRuleListResponse {
    rules: SalesCommissionRuleResponse[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export declare class DeleteSalesCommissionRuleResponse {
    deleted: boolean;
}
export declare class FindSalesCommissionRecordsRequest {
    tenantId?: string;
    hotelId?: string;
    salesPersonId?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class SalesCommissionRecordResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    salesPersonId: string;
    salesPersonName: string;
    bookingId: string;
    bookingCode: string;
    commissionableAmount: number;
    commissionRate: number;
    commissionAmount: number;
    createdAt: Date;
}
export declare class SalesCommissionRecordListResponse {
    records: SalesCommissionRecordResponse[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export declare class SalesCommissionSummaryRequest {
    tenantId?: string;
    hotelId?: string;
    salesPersonId?: string;
    dateFrom?: string;
    dateTo?: string;
}
export declare class SalesPersonCommissionSummary {
    salesPersonId: string;
    salesPersonName: string;
    totalCommission: number;
    recordCount: number;
}
export declare class SalesCommissionSummaryResponse {
    totalCommission: number;
    recordCount: number;
    bySalesPerson: SalesPersonCommissionSummary[];
}
export type CreateSalesCommissionRuleNatsResponse = NatsResponse<SalesCommissionRuleResponse>;
export type UpdateSalesCommissionRuleNatsResponse = NatsResponse<SalesCommissionRuleResponse>;
export type GetSalesCommissionRuleNatsResponse = NatsResponse<SalesCommissionRuleResponse>;
export type FindSalesCommissionRulesNatsResponse = NatsResponse<SalesCommissionRuleListResponse>;
export type DeleteSalesCommissionRuleNatsResponse = NatsResponse<DeleteSalesCommissionRuleResponse>;
export type FindSalesCommissionRecordsNatsResponse = NatsResponse<SalesCommissionRecordListResponse>;
export type SalesCommissionSummaryNatsResponse = NatsResponse<SalesCommissionSummaryResponse>;
export declare class SalesProductionRequest {
    tenantId?: string;
    hotelId?: string;
    salesPersonId?: string;
    dateFrom: string;
    dateTo: string;
}
export declare class SalesPersonProduction {
    salesPersonId: string;
    salesPersonName: string;
    totalRevenue: number;
    totalRoomNights: number;
    bookingCount: number;
    totalCommission: number;
    corporateBookings: number;
    taBookings: number;
    directBookings: number;
}
export declare class SalesProductionResponse {
    totalRevenue: number;
    totalRoomNights: number;
    totalBookings: number;
    totalCommission: number;
    bySalesPerson: SalesPersonProduction[];
}
export type SalesProductionNatsResponse = NatsResponse<SalesProductionResponse>;
//# sourceMappingURL=sales-commission.nats.d.ts.map