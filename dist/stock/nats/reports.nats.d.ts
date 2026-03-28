import { NatsResponse } from '../../common';
import { ItemCategory } from '../enums';
export declare class InOutBalanceRequest {
    tenantId: string;
    hotelId: string;
    dateFrom: string;
    dateTo: string;
    category?: ItemCategory;
    warehouseId?: string;
}
export declare class InOutBalanceItemRow {
    itemId: string;
    itemCode: string;
    itemName: string;
    unit: string;
    category: ItemCategory;
    openingStock: number;
    totalIn: number;
    totalOut: number;
    closingStock: number;
    closingValue: number;
    averageCostPrice: number;
}
export declare class InOutBalanceCategoryGroup {
    category: ItemCategory;
    items: InOutBalanceItemRow[];
    categoryTotalValue: number;
}
export declare class InOutBalanceResponse {
    dateFrom: string;
    dateTo: string;
    groups: InOutBalanceCategoryGroup[];
    grandTotalValue: number;
}
export type InOutBalanceNatsResponse = NatsResponse<InOutBalanceResponse>;
export declare class LowStockReportRequest {
    tenantId: string;
    hotelId: string;
    category?: ItemCategory;
}
export declare class LowStockReportItem {
    itemId: string;
    itemCode: string;
    itemName: string;
    unit: string;
    category: ItemCategory;
    currentStock: number;
    reorderLevel: number;
    averageCostPrice: number;
    stockValue: number;
    daysOfSupply?: number;
    supplierName?: string;
    supplierPhone?: string;
}
export declare class LowStockReportResponse {
    items: LowStockReportItem[];
    totalCount: number;
    totalValue: number;
}
export type LowStockReportNatsResponse = NatsResponse<LowStockReportResponse>;
export declare class CostPerRoomNightRequest {
    tenantId: string;
    hotelId: string;
    dateFrom: string;
    dateTo: string;
    issueType?: string;
}
export declare class CostPerRoomNightCategoryItem {
    issueType: string;
    totalCost: number;
    costPerRoomNight?: number;
}
export declare class CostPerRoomNightResponse {
    dateFrom: string;
    dateTo: string;
    roomNights: number;
    totalStockCost: number;
    costPerRoomNight: number;
    byIssueType: CostPerRoomNightCategoryItem[];
}
export type CostPerRoomNightNatsResponse = NatsResponse<CostPerRoomNightResponse>;
//# sourceMappingURL=reports.nats.d.ts.map