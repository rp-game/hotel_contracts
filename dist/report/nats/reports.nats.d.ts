/**
 * Reports NATS Contracts
 *
 * Patterns:
 * - report.revenue
 * - report.occupancy
 * - report.guest-analytics
 * - report.financial
 * - report.performance
 * - report.export
 * - report.dashboard
 * - report.comparative
 *
 * Handler: crm-service (ReportsNatsController)
 * Called by: api-gateway (ReportController)
 */
import { NatsResponse } from '../../common';
/**
 * Revenue Report Daily Breakdown Item
 */
export declare class RevenueReportDailyItem {
    date: string;
    roomRevenue: number;
    serviceRevenue: number;
    totalRevenue: number;
}
/**
 * Revenue Report Monthly Trend Item
 */
export declare class RevenueReportMonthlyItem {
    month: string;
    revenue: number;
    growthRate: number;
}
/**
 * Revenue Report Data
 */
export declare class RevenueReportData {
    totalRevenue: number;
    roomRevenue: number;
    serviceRevenue: number;
    taxRevenue: number;
    averageDailyRate: number;
    revenuePAR: number;
    growthRate: number;
    dailyBreakdown: RevenueReportDailyItem[];
    monthlyTrend: RevenueReportMonthlyItem[];
}
/**
 * Revenue Report Response
 */
export declare class RevenueReportNatsResponse {
    status: string;
    message: string;
    data: RevenueReportData;
}
/**
 * Occupancy Report Period Data Item
 */
export declare class OccupancyReportPeriodItem {
    date: string;
    occupiedRooms: number;
    totalRooms: number;
    occupancyRate: number;
    revenue: number;
}
/**
 * Occupancy Report Data
 */
export declare class OccupancyReportData {
    totalRooms: number;
    occupiedRooms: number;
    availableRooms: number;
    occupancyRate: number;
    averageDailyRate: number;
    revenuePAR: number;
    periodData: OccupancyReportPeriodItem[];
}
/**
 * Occupancy Report Response
 */
export declare class OccupancyReportNatsResponse {
    status: string;
    message: string;
    data: OccupancyReportData;
}
/**
 * Guest Demographics Group Item
 */
export declare class GuestDemographicsItem {
    label: string;
    count: number;
    percentage: number;
}
/**
 * Guest Report Data
 */
export declare class GuestReportData {
    totalGuests: number;
    newGuests: number;
    returningGuests: number;
    averageStayDuration: number;
    guestSatisfactionScore: number;
    ageGroups: GuestDemographicsItem[];
    countries: GuestDemographicsItem[];
    guestTypes: GuestDemographicsItem[];
}
/**
 * Guest Analytics Report Response
 */
export declare class GuestAnalyticsReportNatsResponse {
    status: string;
    message: string;
    data: GuestReportData;
}
/**
 * Financial Report Revenue Breakdown
 */
export declare class FinancialReportRevenueBreakdown {
    roomRevenue: number;
    foodBeverageRevenue: number;
    serviceRevenue: number;
    otherRevenue: number;
}
/**
 * Financial Report Expense Breakdown
 */
export declare class FinancialReportExpenseBreakdown {
    operationalExpenses: number;
    staffCosts: number;
    marketingExpenses: number;
    maintenanceExpenses: number;
    otherExpenses: number;
}
/**
 * Financial Report KPIs
 */
export declare class FinancialReportKPIs {
    GOPPAR: number;
    TRevPAR: number;
    costPerOccupiedRoom: number;
    profitPerAvailableRoom: number;
}
/**
 * Financial Report Data
 */
export declare class FinancialReportData {
    totalRevenue: number;
    totalExpenses: number;
    grossProfit: number;
    netProfit: number;
    profitMargin: number;
    revenueBreakdown: FinancialReportRevenueBreakdown;
    expenseBreakdown: FinancialReportExpenseBreakdown;
    kpis: FinancialReportKPIs;
}
/**
 * Financial Report Response
 */
export declare class FinancialReportNatsResponse {
    status: string;
    message: string;
    data: FinancialReportData;
}
/**
 * Housekeeping Staff Performance Item
 */
export declare class HousekeepingStaffPerformanceItem {
    staffId: string;
    staffName: string;
    roomsCleaned: number;
    averageTime: number;
    qualityScore: number;
}
/**
 * Housekeeping Room Status Item
 */
export declare class HousekeepingRoomStatusItem {
    status: string;
    count: number;
    percentage: number;
}
/**
 * Housekeeping Report Data
 */
export declare class HousekeepingReportData {
    totalRooms: number;
    cleanedRooms: number;
    pendingRooms: number;
    maintenanceRooms: number;
    averageCleaningTime: number;
    efficiencyScore: number;
    staffPerformance: HousekeepingStaffPerformanceItem[];
    roomStatus: HousekeepingRoomStatusItem[];
}
/**
 * Housekeeping Report Response
 */
export declare class HousekeepingReportNatsResponse {
    status: string;
    message: string;
    data: HousekeepingReportData;
}
/**
 * Performance Report - Staff Performance Item
 */
export declare class StaffPerformanceItem {
    staffId: string;
    staffName: string;
    department: string;
    performanceScore: number;
    tasksCompleted: number;
}
/**
 * Performance Report - Department Performance Item
 */
export declare class DepartmentPerformanceItem {
    department: string;
    staffCount: number;
    averageScore: number;
    tasksCompleted: number;
    efficiency: number;
}
/**
 * Performance Report Data
 */
export declare class PerformanceReportData {
    totalStaff: number;
    activeStaff: number;
    averageProductivityScore: number;
    totalTasksCompleted: number;
    averageTaskCompletionTime: number;
    departmentPerformance: DepartmentPerformanceItem[];
    topPerformers: StaffPerformanceItem[];
}
/**
 * Performance Report Response
 */
export declare class PerformanceReportNatsResponse {
    status: string;
    message: string;
    data: PerformanceReportData;
}
/**
 * Export Report Response Data
 */
export declare class ExportReportData {
    downloadUrl: string;
    filename: string;
    expiresAt: string;
}
/**
 * Export Report Response (used directly, no need for status/message since NatsResponse adds them)
 */
export declare class ExportReportApiResponse {
    data: ExportReportData;
}
/**
 * Dashboard Data - KPI Data
 */
export declare class DashboardKPIData {
    name: string;
    value: number;
    unit: string;
    change: number;
    trend: string;
}
/**
 * Dashboard Data
 */
export declare class DashboardReportData {
    kpis: DashboardKPIData[];
    revenue?: RevenueReportData;
    occupancy?: OccupancyReportData;
    guests?: GuestReportData;
}
/**
 * Dashboard Report Response
 */
export declare class DashboardReportNatsResponse {
    status: string;
    message: string;
    data: DashboardReportData;
}
/**
 * Comparative Report Period Data
 */
export declare class ComparativePeriodData {
    period: string;
    totalRevenue: number;
    occupancyRate: number;
    averageDailyRate: number;
    guestCount: number;
}
/**
 * Comparative Report Variance Data
 */
export declare class ComparativeVarianceData {
    metric: string;
    previousValue: number;
    currentValue: number;
    percentageChange: number;
    absoluteChange: number;
}
/**
 * Comparative Report Data
 */
export declare class ComparativeReportData {
    currentPeriod: ComparativePeriodData;
    previousPeriod: ComparativePeriodData;
    variance: ComparativeVarianceData[];
}
/**
 * Comparative Report Response
 */
export declare class ComparativeReportNatsResponse {
    status: string;
    message: string;
    data: ComparativeReportData;
}
/**
 * Report Request Patterns DTOs
 */
export declare class GetRevenueReportNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
    groupBy?: string;
}
export declare class GetOccupancyReportNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
    roomTypeId?: string;
}
export declare class GetGuestAnalyticsReportNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
    guestType?: string;
}
export declare class GetFinancialReportNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
    reportType?: string;
}
export declare class GetPerformanceReportNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
    metric?: string;
}
export declare class ExportReportNatsRequest {
    tenantId: string;
    hotelId: string;
    reportType: string;
    format: string;
    startDate?: string;
    endDate?: string;
}
export declare class GetDashboardDataNatsRequest {
    tenantId: string;
    hotelId: string;
    period?: string;
    metrics?: string[];
}
export declare class GetComparativeReportNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
    compareStartDate: string;
    compareEndDate: string;
}
/**
 * Response Wrappers for NATS
 */
export type GetRevenueReportNatsResponse = NatsResponse<RevenueReportNatsResponse>;
export type GetOccupancyReportNatsResponse = NatsResponse<OccupancyReportNatsResponse>;
export type GetGuestAnalyticsReportNatsResponse = NatsResponse<GuestAnalyticsReportNatsResponse>;
export type GetFinancialReportNatsResponse = NatsResponse<FinancialReportNatsResponse>;
export type GetPerformanceReportNatsResponse = NatsResponse<PerformanceReportNatsResponse>;
export type ExportReportNatsResponse = NatsResponse<ExportReportApiResponse>;
export type GetDashboardDataNatsResponse = NatsResponse<DashboardReportNatsResponse>;
export type GetComparativeReportNatsResponse = NatsResponse<ComparativeReportNatsResponse>;
export type GuestMovementMode = 'arrivals' | 'checkedIn' | 'inHouse' | 'departures' | 'departed';
export declare class GetGuestMovementReportNatsRequest {
    tenantId: string;
    hotelId: string;
    mode: GuestMovementMode;
    from?: string;
    to?: string;
}
export declare class GuestMovementRow {
    bookingId: string;
    bookingCode: string;
    guestName: string;
    roomNumber?: string | null;
    roomTypeName?: string | null;
    checkIn?: string | null;
    checkOut?: string | null;
    adults: number;
    children: number;
    company?: string | null;
    source?: string | null;
    marketSegment?: string | null;
    note?: string | null;
}
export declare class GuestMovementTotals {
    bookings: number;
    rooms: number;
    adults: number;
    children: number;
}
export declare class GuestMovementReportData {
    rows: GuestMovementRow[];
    totals: GuestMovementTotals;
}
export declare class GetDailyPaymentReportNatsRequest {
    tenantId: string;
    hotelId: string;
    from: string;
    to: string;
}
export declare class DailyPaymentByCashier {
    cashier: string;
    cashIn: number;
    cashOut: number;
    total: number;
}
export declare class DailyPaymentByMethod {
    method: string;
    total: number;
}
export declare class DailyPaymentTxn {
    bookingId?: string | null;
    roomNumber?: string | null;
    roomName?: string | null;
    guestName?: string | null;
    paymentNo?: string | null;
    note?: string | null;
    amount: number;
    currency?: string | null;
    method?: string | null;
    time?: string | null;
    createdByName?: string | null;
    deletedAt?: string | null;
    deletedByName?: string | null;
}
export declare class DailyPaymentReportData {
    byCashier: DailyPaymentByCashier[];
    byMethod: DailyPaymentByMethod[];
    receipts: DailyPaymentTxn[];
    payouts: DailyPaymentTxn[];
    receiptTotal: number;
    payoutTotal: number;
    netTotal: number;
}
export declare class GetOccupancyByDateReportNatsRequest {
    tenantId: string;
    hotelId: string;
    from: string;
    to: string;
}
export declare class OccupancyByDateRow {
    date: string;
    totalRooms: number;
    sold: number;
    comp: number;
    occupancyPct: number;
    avgRateSold: number;
    avgRateAvailable: number;
    adults: number;
    children: number;
    roomRevenue: number;
    serviceRevenue: number;
    actualCollected: number;
    debt: number;
}
export declare class OccupancyByDateReportData {
    rows: OccupancyByDateRow[];
    totals: OccupancyByDateRow;
}
export type GetGuestMovementReportNatsResponse = NatsResponse<GuestMovementReportData>;
export type GetDailyPaymentReportNatsResponse = NatsResponse<DailyPaymentReportData>;
export type GetOccupancyByDateReportNatsResponse = NatsResponse<OccupancyByDateReportData>;
export declare class GetRevenueDetailReportNatsRequest {
    tenantId: string;
    hotelId: string;
    from: string;
    to: string;
    byCheckout?: boolean;
}
export declare class RevenueDetailRow {
    bookingCode: string;
    roomType?: string | null;
    roomName?: string | null;
    guestName?: string | null;
    checkIn?: string | null;
    checkOut?: string | null;
    roomCharge: number;
    serviceCharge: number;
    discount: number;
    totalRevenue: number;
    priorDebt: number;
    cash: number;
    card: number;
    bankTransfer: number;
    companyDebt: number;
    outstanding: number;
    idNo?: string | null;
    email?: string | null;
    phone?: string | null;
    company?: string | null;
    source?: string | null;
    marketSegment?: string | null;
    createdByName?: string | null;
    status?: string | null;
    nights: number;
    avgRate: number;
    invoiceNo?: string | null;
    cmsCode?: string | null;
    otaCode?: string | null;
}
export declare class RevenueDetailReportData {
    rows: RevenueDetailRow[];
    totals: RevenueDetailRow;
}
export declare class GetArReportNatsRequest {
    tenantId: string;
    hotelId: string;
    from: string;
    to: string;
}
export declare class ArSummaryRow {
    partner: string;
    representative?: string | null;
    phone?: string | null;
    opening: number;
    paidInPeriod: number;
    chargedInPeriod: number;
    closing: number;
}
export declare class ArSummaryReportData {
    rows: ArSummaryRow[];
    totals: ArSummaryRow;
}
export declare class ArDetailTxn {
    date?: string | null;
    docNo?: string | null;
    currency?: string | null;
    amount: number;
    detail?: string | null;
    paidInPeriod: number;
    chargedInPeriod: number;
    runningBalance: number;
}
export declare class ArDetailGroup {
    partner: string;
    opening: number;
    transactions: ArDetailTxn[];
    closing: number;
}
export declare class ArDetailReportData {
    groups: ArDetailGroup[];
}
export type GetRevenueDetailReportNatsResponse = NatsResponse<RevenueDetailReportData>;
export type GetArSummaryReportNatsResponse = NatsResponse<ArSummaryReportData>;
export type GetArDetailReportNatsResponse = NatsResponse<ArDetailReportData>;
//# sourceMappingURL=reports.nats.d.ts.map