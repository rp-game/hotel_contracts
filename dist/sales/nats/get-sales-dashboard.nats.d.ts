/**
 * Sales Dashboard NATS Contract
 *
 * NATS Pattern: sales-dashboard.get
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
export interface GetSalesDashboardNatsRequest {
    tenantId: string;
    hotelId: string;
    year: number;
    month: number;
}
export interface ChannelBreakdownItem {
    source: string;
    revenue: number;
    roomNights: number;
    bookingCount: number;
    percentage: number;
}
export interface TopPerformerItem {
    salesPersonId: string;
    salesPersonName: string;
    revenue: number;
    roomNights: number;
    accountCount: number;
    achievementRate: number;
}
export interface TopAccountItem {
    accountId: string;
    accountName: string;
    accountType: 'CORPORATE' | 'TRAVEL_AGENT';
    revenue: number;
    roomNights: number;
    bookingCount: number;
}
export interface SalesDashboardData {
    hotelRevenue: number;
    salesAttributedRevenue: number;
    totalRoomNights: number;
    totalActiveAccounts: number;
    totalActivities: number;
    channelBreakdown: ChannelBreakdownItem[];
    topPerformers: TopPerformerItem[];
    topAccounts: TopAccountItem[];
}
export type GetSalesDashboardNatsResult = NatsResponse<SalesDashboardData>;
//# sourceMappingURL=get-sales-dashboard.nats.d.ts.map