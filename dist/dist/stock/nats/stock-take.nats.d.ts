import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { ItemCategory } from '../enums';
export declare class StockTakeItemDto {
    itemId: string;
    actualQuantity: number;
}
export declare class CreateStockTakeRequest {
    tenantId: string;
    hotelId: string;
    warehouseId?: string;
    category?: ItemCategory;
    takeDate: string;
    notes?: string;
    performedBy?: string;
    performedByName?: string;
    items: StockTakeItemDto[];
}
export declare class StockTakeItemResponse {
    id: string;
    itemId: string;
    itemCode: string;
    itemName: string;
    unit: string;
    systemQuantity: number;
    actualQuantity: number;
    variance: number;
    varianceValue: number;
}
export declare class StockTakeResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    takeNumber: string;
    takeDate: string;
    category?: ItemCategory;
    warehouseId?: string;
    warehouseName?: string;
    notes?: string;
    performedBy: string;
    performedByName?: string;
    status: string;
    items: StockTakeItemResponse[];
    totalVarianceValue: number;
    createdAt: string;
    approvedBy?: string;
    approvedByName?: string;
    approvedAt?: string;
}
export declare class FindStockTakesRequest {
    tenantId: string;
    hotelId: string;
    status?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class FindOneStockTakeRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export declare class ApproveStockTakeRequest {
    tenantId: string;
    hotelId: string;
    id: string;
    approvedBy?: string;
    approvedByName?: string;
}
export type CreateStockTakeNatsResponse = NatsResponse<StockTakeResponse>;
export type FindStockTakesNatsResponse = NatsPaginatedResponse<StockTakeResponse>;
export type FindOneStockTakeNatsResponse = NatsResponse<StockTakeResponse>;
export type ApproveStockTakeNatsResponse = NatsResponse<StockTakeResponse>;
//# sourceMappingURL=stock-take.nats.d.ts.map