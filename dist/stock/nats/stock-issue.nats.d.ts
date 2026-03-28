import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { StockIssueType } from '../enums';
export declare class StockIssueItemDto {
    itemId: string;
    quantity: number;
    chargeToGuest?: boolean;
    sellingPrice?: number;
    isComplimentary?: boolean;
}
export declare class CreateStockIssueRequest {
    tenantId: string;
    hotelId: string;
    issueType: StockIssueType;
    department?: string;
    bookingId?: string;
    roomId?: string;
    roomNumber?: string;
    issueDate: string;
    notes?: string;
    issuedBy: string;
    issuedByName?: string;
    warehouseId?: string;
    items: StockIssueItemDto[];
}
export declare class StockIssueItemResponse {
    id: string;
    itemId: string;
    itemName?: string;
    itemCode?: string;
    quantity: number;
    unitCost: number;
    totalCost: number;
    chargeToGuest?: boolean;
    sellingPrice?: number;
    isComplimentary?: boolean;
}
export declare class StockIssueResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    issueNumber: string;
    issueType: StockIssueType;
    department?: string;
    bookingId?: string;
    roomId?: string;
    roomNumber?: string;
    issueDate: string;
    notes?: string;
    issuedBy: string;
    issuedByName?: string;
    totalCost: number;
    warehouseId?: string;
    warehouseName?: string;
    items: StockIssueItemResponse[];
    createdAt: Date;
}
export type CreateStockIssueNatsResponse = NatsResponse<StockIssueResponse & {
    lowStockWarnings?: Array<{
        itemId: string;
        itemName: string;
        currentStock: number;
        reorderLevel: number;
    }>;
}>;
export declare class IssueSupplyKitRequest {
    tenantId: string;
    hotelId: string;
    kitId: string;
    issuedBy: string;
    department?: string;
    notes?: string;
}
export type IssueSupplyKitNatsResponse = NatsResponse<StockIssueResponse>;
export declare class FindStockIssuesRequest {
    tenantId: string;
    hotelId: string;
    issueType?: StockIssueType;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export type FindStockIssuesNatsResponse = NatsPaginatedResponse<StockIssueResponse>;
export declare class FindOneStockIssueRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export type FindOneStockIssueNatsResponse = NatsResponse<StockIssueResponse>;
//# sourceMappingURL=stock-issue.nats.d.ts.map