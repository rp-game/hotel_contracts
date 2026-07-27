/**
 * Sales Target Response DTOs
 * Used for Swagger documentation and API responses
 */
export declare class SalesTargetResponseDto {
    id: string;
    hotelId: string;
    salesPersonId: string;
    salesPersonName: string;
    year: number;
    month: number;
    targetRevenue: number;
    targetRoomNights?: number;
    targetNewAccounts?: number;
    actualRevenue: number;
    actualRoomNights: number;
    actualNewAccounts: number;
    achievementRate: number;
    status: string;
    notes?: string;
    createdByName?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class SalesTargetListResponseDto {
    targets: SalesTargetResponseDto[];
    total: number;
}
//# sourceMappingURL=sales-target-response.dto.d.ts.map