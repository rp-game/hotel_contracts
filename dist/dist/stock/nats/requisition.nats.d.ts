import { NatsResponse, NatsPaginatedResponse } from '../../common';
export declare enum RequisitionStatus {
    DRAFT = "DRAFT",
    SUBMITTED = "SUBMITTED",
    APPROVED = "APPROVED",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"
}
export declare enum RequisitionUrgency {
    LOW = "LOW",
    NORMAL = "NORMAL",
    URGENT = "URGENT"
}
export declare class RequisitionItemDto {
    itemId: string;
    quantity: number;
    notes?: string;
}
export declare class CreateRequisitionRequest {
    tenantId: string;
    hotelId: string;
    chainWarehouseId: string;
    requestedBy: string;
    requestedByName?: string;
    urgency?: RequisitionUrgency;
    notes?: string;
    items: RequisitionItemDto[];
}
export declare class SubmitRequisitionRequest {
    tenantId: string;
    id: string;
}
export declare class ApproveRequisitionRequest {
    tenantId: string;
    id: string;
    approvedBy: string;
    approvedByName?: string;
}
export declare class FulfillRequisitionRequest {
    tenantId: string;
    id: string;
}
export declare class RejectRequisitionRequest {
    tenantId: string;
    id: string;
    rejectedBy: string;
    reason?: string;
}
export declare class FindRequisitionsRequest {
    tenantId: string;
    hotelId?: string;
    chainWarehouseId?: string;
    status?: RequisitionStatus;
    page?: number;
    limit?: number;
}
export declare class FindOneRequisitionRequest {
    tenantId: string;
    id: string;
}
export declare class RequisitionItemResponse {
    id: string;
    itemId: string;
    itemCode: string;
    itemName: string;
    unit: string;
    quantity: number;
    notes?: string;
}
export declare class RequisitionResponse {
    id: string;
    tenantId: string;
    requisitionNumber: string;
    hotelId: string;
    hotelName?: string;
    chainWarehouseId: string;
    chainWarehouseName?: string;
    status: RequisitionStatus;
    urgency: RequisitionUrgency;
    requestedBy: string;
    requestedByName?: string;
    approvedBy?: string;
    approvedByName?: string;
    approvedAt?: string;
    fulfilledAt?: string;
    interHotelTransferId?: string;
    rejectedBy?: string;
    rejectedReason?: string;
    notes?: string;
    items: RequisitionItemResponse[];
    createdAt: string;
}
export type CreateRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
export type FindRequisitionsNatsResponse = NatsPaginatedResponse<RequisitionResponse>;
export type FindOneRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
export type SubmitRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
export type ApproveRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
export type FulfillRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
export type RejectRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
//# sourceMappingURL=requisition.nats.d.ts.map