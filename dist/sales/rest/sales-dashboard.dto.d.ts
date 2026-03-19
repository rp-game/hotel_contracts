/**
 * Sales Dashboard REST DTOs
 * Used by api-gateway controllers for request validation and Swagger docs
 */
export declare class GetSalesDashboardQueryDto {
    hotelId: string;
    year: number;
    month: number;
}
export declare class ChannelBreakdownDto {
    source: string;
    revenue: number;
    roomNights: number;
    bookingCount: number;
    percentage: number;
}
export declare class TopPerformerDto {
    salesPersonId: string;
    salesPersonName: string;
    revenue: number;
    roomNights: number;
    accountCount: number;
    achievementRate: number;
}
export declare class TopAccountDto {
    accountId: string;
    accountName: string;
    accountType: string;
    revenue: number;
    roomNights: number;
    bookingCount: number;
}
export declare class SalesDashboardResponseDto {
    hotelRevenue: number;
    salesAttributedRevenue: number;
    totalRoomNights: number;
    totalActiveAccounts: number;
    totalActivities: number;
    channelBreakdown: ChannelBreakdownDto[];
    topPerformers: TopPerformerDto[];
    topAccounts: TopAccountDto[];
}
//# sourceMappingURL=sales-dashboard.dto.d.ts.map