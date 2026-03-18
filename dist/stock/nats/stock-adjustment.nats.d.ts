import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { StockAdjustmentType } from '../enums';
export declare class StockAdjustmentItemDto {
    itemId: string;
    quantityChange: number;
    unitCost?: number;
    reason?: string;
}
export declare class CreateStockAdjustmentRequest {
    tenantId: string;
    hotelId: string;
    adjustmentType: StockAdjustmentType;
    referenceId?: string;
    supplierId?: string;
    adjustmentDate: string;
    notes?: string;
    performedBy: string;
    items: StockAdjustmentItemDto[];
}
export declare class StockAdjustmentItemResponse {
    id: string;
    itemId: string;
    itemName?: string;
    itemCode?: string;
    quantityChange: number;
    unitCost: number;
    reason?: string;
}
export declare class StockAdjustmentResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    adjustmentNumber: string;
    adjustmentType: StockAdjustmentType;
    referenceId?: string;
    supplierId?: string;
    supplierName?: string;
    adjustmentDate: string;
    notes?: string;
    performedBy: string;
    items: StockAdjustmentItemResponse[];
    createdAt: Date;
}
export type CreateStockAdjustmentNatsResponse = NatsResponse<StockAdjustmentResponse>;
export declare class FindStockAdjustmentsRequest {
    tenantId: string;
    hotelId: string;
    adjustmentType?: StockAdjustmentType;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export type FindStockAdjustmentsNatsResponse = NatsPaginatedResponse<StockAdjustmentResponse>;
export declare class FindOneStockAdjustmentRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export type FindOneStockAdjustmentNatsResponse = NatsResponse<StockAdjustmentResponse>;
//# sourceMappingURL=stock-adjustment.nats.d.ts.map