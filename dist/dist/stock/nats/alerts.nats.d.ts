import { NatsResponse } from '../../common';
export declare class GetLowStockAlertsRequest {
    tenantId: string;
    hotelId: string;
}
export declare class LowStockAlertItem {
    itemId: string;
    itemCode: string;
    itemName: string;
    category: string;
    currentStock: number;
    reorderLevel: number;
    unit: string;
    supplierName?: string;
    supplierPhone?: string;
}
export declare class LowStockAlertsResponse {
    items: LowStockAlertItem[];
    totalCount: number;
}
export type GetLowStockAlertsNatsResponse = NatsResponse<LowStockAlertsResponse>;
export declare class GetExpiryAlertsRequest {
    tenantId: string;
    hotelId: string;
}
export declare class ExpiryAlertItem {
    itemId: string;
    itemCode: string;
    itemName: string;
    expiryDate: string;
    quantity: number;
    goodsReceiptId: string;
    goodsReceiptNumber: string;
    daysUntilExpiry: number;
}
export declare class ExpiryAlertsResponse {
    items: ExpiryAlertItem[];
    totalCount: number;
}
export type GetExpiryAlertsNatsResponse = NatsResponse<ExpiryAlertsResponse>;
//# sourceMappingURL=alerts.nats.d.ts.map