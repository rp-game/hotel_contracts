/**
 * Sales Target REST DTOs
 * Used by api-gateway controllers for request validation
 */
export declare class CreateSalesTargetDto {
    hotelId: string;
    salesPersonId: string;
    salesPersonName: string;
    year: number;
    month: number;
    targetRevenue: number;
    targetRoomNights?: number;
    targetNewAccounts?: number;
    notes?: string;
}
export declare class UpdateSalesTargetDto {
    targetRevenue?: number;
    targetRoomNights?: number;
    targetNewAccounts?: number;
    notes?: string;
}
export declare class FindSalesTargetsQueryDto {
    hotelId?: string;
    salesPersonId?: string;
    year?: number;
    month?: number;
}
export declare class RecalculateSalesTargetsDto {
    hotelId: string;
    salesPersonId?: string;
    year?: number;
    month?: number;
}
//# sourceMappingURL=sales-target.dto.d.ts.map