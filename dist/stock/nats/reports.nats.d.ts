import { NatsResponse } from '../../common';
import { ItemCategory } from '../enums';
export declare class InOutBalanceRequest {
    tenantId: string;
    hotelId: string;
    dateFrom: string;
    dateTo: string;
    category?: ItemCategory;
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
//# sourceMappingURL=reports.nats.d.ts.map