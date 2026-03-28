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
export declare class DepartmentCostRequest {
    tenantId: string;
    hotelId: string;
    dateFrom: string;
    dateTo: string;
    department?: string;
}
export declare class DepartmentCostItem {
    department: string;
    issueType: string;
    totalCost: number;
    issueCount: number;
}
export declare class DepartmentCostResponse {
    dateFrom: string;
    dateTo: string;
    items: DepartmentCostItem[];
    totalCost: number;
}
export type DepartmentCostNatsResponse = NatsResponse<DepartmentCostResponse>;
export declare class MovementDetailRequest {
    tenantId: string;
    hotelId: string;
    dateFrom: string;
    dateTo: string;
    itemId?: string;
    movementType?: string;
    warehouseId?: string;
    page?: number;
    limit?: number;
}
export declare class MovementDetailItem {
    date: string;
    movementType: string;
    documentNumber: string;
    itemId: string;
    itemCode: string;
    itemName: string;
    unit: string;
    quantityIn: number;
    quantityOut: number;
    unitPrice: number;
    totalAmount: number;
    warehouseName?: string;
    supplierName?: string;
    department?: string;
    notes?: string;
}
export declare class MovementDetailResponse {
    dateFrom: string;
    dateTo: string;
    items: MovementDetailItem[];
    total: number;
    page: number;
    limit: number;
}
export type MovementDetailNatsResponse = NatsResponse<MovementDetailResponse>;
export declare class SupplierHistoryRequest {
    tenantId: string;
    hotelId: string;
    dateFrom: string;
    dateTo: string;
    supplierId?: string;
}
export declare class SupplierHistoryItem {
    supplierId: string;
    supplierName: string;
    receiptCount: number;
    totalAmount: number;
    totalVat: number;
    lastReceiptDate?: string;
}
export declare class SupplierHistoryResponse {
    dateFrom: string;
    dateTo: string;
    items: SupplierHistoryItem[];
    totalAmount: number;
}
export type SupplierHistoryNatsResponse = NatsResponse<SupplierHistoryResponse>;
export declare class MinibarRevenueRequest {
    tenantId: string;
    hotelId: string;
    dateFrom: string;
    dateTo: string;
}
export declare class MinibarRevenueItem {
    itemId: string;
    itemName: string;
    unit: string;
    consumedQty: number;
    restockedQty: number;
    costPrice: number;
    sellingPrice: number;
    totalCost: number;
    totalRevenue: number;
    profit: number;
}
export declare class MinibarRevenueResponse {
    dateFrom: string;
    dateTo: string;
    items: MinibarRevenueItem[];
    totalCost: number;
    totalRevenue: number;
    totalProfit: number;
}
export type MinibarRevenueNatsResponse = NatsResponse<MinibarRevenueResponse>;
export declare class VarianceReportRequest {
    tenantId: string;
    hotelId: string;
    dateFrom?: string;
    dateTo?: string;
    status?: string;
}
export declare class VarianceReportItem {
    takeNumber: string;
    takeDate: string;
    category?: string;
    status: string;
    totalItems: number;
    itemsWithVariance: number;
    totalPositiveVariance: number;
    totalNegativeVariance: number;
    totalVarianceValue: number;
}
export declare class VarianceReportResponse {
    items: VarianceReportItem[];
    totalVarianceValue: number;
}
export type VarianceReportNatsResponse = NatsResponse<VarianceReportResponse>;
export declare class ExpiryReportRequest {
    tenantId: string;
    hotelId: string;
    daysAhead?: number;
}
export declare class ExpiryReportItem {
    itemId: string;
    itemCode: string;
    itemName: string;
    unit: string;
    batchQuantity: number;
    expiryDate: string;
    daysUntilExpiry: number;
    receiptNumber?: string;
    receiptDate?: string;
    warehouseName?: string;
}
export declare class ExpiryReportResponse {
    items: ExpiryReportItem[];
    totalBatches: number;
    expiredCount: number;
    expiringCount: number;
}
export type ExpiryReportNatsResponse = NatsResponse<ExpiryReportResponse>;
//# sourceMappingURL=reports.nats.d.ts.map