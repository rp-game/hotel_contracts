import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { InterHotelTransferStatus, TransferType } from '../enums';
export declare class InterHotelTransferItemDto {
    itemId: string;
    quantity: number;
}
export declare class CreateInterHotelTransferRequest {
    tenantId: string;
    sourceHotelId: string;
    sourceWarehouseId: string;
    destinationHotelId: string;
    destinationWarehouseId?: string;
    transferType: TransferType;
    requestedBy: string;
    requestedByName?: string;
    notes?: string;
    items: InterHotelTransferItemDto[];
}
export declare class ApproveInterHotelTransferRequest {
    tenantId: string;
    id: string;
    approvedBy: string;
    approvedByName?: string;
}
export declare class ShipInterHotelTransferRequest {
    tenantId: string;
    id: string;
    shippedBy: string;
    shippedByName?: string;
}
export declare class ReceiveInterHotelTransferItemDto {
    itemId: string;
    receivedQuantity: number;
}
export declare class ReceiveInterHotelTransferRequest {
    tenantId: string;
    id: string;
    receivedBy: string;
    receivedByName?: string;
    items?: ReceiveInterHotelTransferItemDto[];
}
export declare class RejectInterHotelTransferRequest {
    tenantId: string;
    id: string;
    rejectedBy: string;
    reason?: string;
}
export declare class FindInterHotelTransfersRequest {
    tenantId: string;
    sourceHotelId?: string;
    destinationHotelId?: string;
    status?: InterHotelTransferStatus;
    page?: number;
    limit?: number;
}
export declare class FindOneInterHotelTransferRequest {
    tenantId: string;
    id: string;
}
export declare class InterHotelTransferItemResponse {
    id: string;
    itemId: string;
    itemCode: string;
    itemName: string;
    unit: string;
    quantity: number;
    unitCost: number;
    totalCost: number;
    receivedQuantity?: number;
}
export declare class InterHotelTransferResponse {
    id: string;
    tenantId: string;
    transferNumber: string;
    sourceHotelId: string;
    sourceHotelName?: string;
    sourceWarehouseId: string;
    sourceWarehouseName?: string;
    destinationHotelId: string;
    destinationHotelName?: string;
    destinationWarehouseId?: string;
    destinationWarehouseName?: string;
    status: InterHotelTransferStatus;
    transferType: TransferType;
    requestedBy: string;
    requestedByName?: string;
    approvedBy?: string;
    approvedByName?: string;
    approvedAt?: string;
    shippedBy?: string;
    shippedByName?: string;
    shippedAt?: string;
    receivedBy?: string;
    receivedByName?: string;
    receivedAt?: string;
    rejectedBy?: string;
    rejectedReason?: string;
    notes?: string;
    items: InterHotelTransferItemResponse[];
    totalCost: number;
    createdAt: string;
}
export type CreateInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
export type FindInterHotelTransfersNatsResponse = NatsPaginatedResponse<InterHotelTransferResponse>;
export type FindOneInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
export type ApproveInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
export type ShipInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
export type ReceiveInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
export type RejectInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
//# sourceMappingURL=inter-hotel-transfer.nats.d.ts.map