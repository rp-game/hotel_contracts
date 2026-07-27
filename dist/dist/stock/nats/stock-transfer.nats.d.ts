import { NatsResponse, NatsPaginatedResponse } from '../../common';
export declare class StockTransferItemDto {
    itemId: string;
    quantity: number;
}
export declare class CreateStockTransferRequest {
    tenantId: string;
    hotelId: string;
    fromWarehouseId: string;
    toWarehouseId: string;
    transferDate: string;
    notes?: string;
    transferredBy: string;
    transferredByName?: string;
    items: StockTransferItemDto[];
}
export declare class StockTransferItemResponse {
    id: string;
    itemId: string;
    itemName?: string;
    itemCode?: string;
    itemUnit?: string;
    quantity: number;
    unitCost: number;
}
export declare class StockTransferResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    transferNumber: string;
    fromWarehouseId: string;
    fromWarehouseName?: string;
    toWarehouseId: string;
    toWarehouseName?: string;
    transferDate: string;
    notes?: string;
    transferredBy: string;
    transferredByName?: string;
    items: StockTransferItemResponse[];
    createdAt: Date;
}
export type CreateStockTransferNatsResponse = NatsResponse<StockTransferResponse>;
export declare class FindStockTransfersRequest {
    tenantId: string;
    hotelId: string;
    fromWarehouseId?: string;
    toWarehouseId?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export type FindStockTransfersNatsResponse = NatsPaginatedResponse<StockTransferResponse>;
export declare class FindOneStockTransferRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export type FindOneStockTransferNatsResponse = NatsResponse<StockTransferResponse>;
//# sourceMappingURL=stock-transfer.nats.d.ts.map