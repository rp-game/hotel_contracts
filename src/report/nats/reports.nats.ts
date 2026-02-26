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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common';

/**
 * Revenue Report Daily Breakdown Item
 */
export class RevenueReportDailyItem {
  @ApiProperty({ description: 'Date (ISO 8601)' })
  date: string;

  @ApiProperty({ description: 'Room revenue for the day' })
  roomRevenue: number;

  @ApiProperty({ description: 'Service revenue for the day' })
  serviceRevenue: number;

  @ApiProperty({ description: 'Total revenue for the day' })
  totalRevenue: number;
}

/**
 * Revenue Report Monthly Trend Item
 */
export class RevenueReportMonthlyItem {
  @ApiProperty({ description: 'Month (YYYY-MM)' })
  month: string;

  @ApiProperty({ description: 'Total revenue for the month' })
  revenue: number;

  @ApiProperty({ description: 'Growth rate (%)' })
  growthRate: number;
}

/**
 * Revenue Report Data
 */
export class RevenueReportData {
  @ApiProperty({ description: 'Total revenue amount' })
  totalRevenue: number;

  @ApiProperty({ description: 'Room revenue' })
  roomRevenue: number;

  @ApiProperty({ description: 'Service revenue' })
  serviceRevenue: number;

  @ApiProperty({ description: 'Tax revenue' })
  taxRevenue: number;

  @ApiProperty({ description: 'Average daily rate' })
  averageDailyRate: number;

  @ApiProperty({ description: 'Revenue per available room' })
  revenuePAR: number;

  @ApiProperty({ description: 'Revenue growth rate (%)' })
  growthRate: number;

  @ApiProperty({ description: 'Daily breakdown', type: [RevenueReportDailyItem] })
  @ValidateNested({ each: true })
  @Type(() => RevenueReportDailyItem)
  dailyBreakdown: RevenueReportDailyItem[];

  @ApiProperty({ description: 'Monthly trend', type: [RevenueReportMonthlyItem] })
  @ValidateNested({ each: true })
  @Type(() => RevenueReportMonthlyItem)
  monthlyTrend: RevenueReportMonthlyItem[];
}

/**
 * Revenue Report Response
 */
export class RevenueReportNatsResponse {
  @ApiProperty({ description: 'Response status' })
  status: string;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Revenue report data', type: RevenueReportData })
  @ValidateNested()
  @Type(() => RevenueReportData)
  data: RevenueReportData;
}

/**
 * Occupancy Report Period Data Item
 */
export class OccupancyReportPeriodItem {
  @ApiProperty({ description: 'Date (ISO 8601)' })
  date: string;

  @ApiProperty({ description: 'Occupied rooms on this date' })
  occupiedRooms: number;

  @ApiProperty({ description: 'Total rooms' })
  totalRooms: number;

  @ApiProperty({ description: 'Occupancy rate (%)' })
  occupancyRate: number;

  @ApiProperty({ description: 'Revenue for this date' })
  revenue: number;
}

/**
 * Occupancy Report Data
 */
export class OccupancyReportData {
  @ApiProperty({ description: 'Total number of rooms' })
  totalRooms: number;

  @ApiProperty({ description: 'Number of occupied rooms' })
  occupiedRooms: number;

  @ApiProperty({ description: 'Number of available rooms' })
  availableRooms: number;

  @ApiProperty({ description: 'Occupancy rate (%)' })
  occupancyRate: number;

  @ApiProperty({ description: 'Average daily rate' })
  averageDailyRate: number;

  @ApiProperty({ description: 'Revenue per available room' })
  revenuePAR: number;

  @ApiProperty({ description: 'Period data', type: [OccupancyReportPeriodItem] })
  @ValidateNested({ each: true })
  @Type(() => OccupancyReportPeriodItem)
  periodData: OccupancyReportPeriodItem[];
}

/**
 * Occupancy Report Response
 */
export class OccupancyReportNatsResponse {
  @ApiProperty({ description: 'Response status' })
  status: string;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Occupancy report data', type: OccupancyReportData })
  @ValidateNested()
  @Type(() => OccupancyReportData)
  data: OccupancyReportData;
}

/**
 * Guest Demographics Group Item
 */
export class GuestDemographicsItem {
  @ApiProperty({ description: 'Group label (age range, country, or type)' })
  label: string;

  @ApiProperty({ description: 'Count in this group' })
  count: number;

  @ApiProperty({ description: 'Percentage of total' })
  percentage: number;
}

/**
 * Guest Report Data
 */
export class GuestReportData {
  @ApiProperty({ description: 'Total number of guests' })
  totalGuests: number;

  @ApiProperty({ description: 'Number of new guests' })
  newGuests: number;

  @ApiProperty({ description: 'Number of returning guests' })
  returningGuests: number;

  @ApiProperty({ description: 'Average stay duration (days)' })
  averageStayDuration: number;

  @ApiProperty({ description: 'Guest satisfaction score (0-10)' })
  guestSatisfactionScore: number;

  @ApiProperty({ description: 'Guest age distribution', type: [GuestDemographicsItem] })
  @ValidateNested({ each: true })
  @Type(() => GuestDemographicsItem)
  ageGroups: GuestDemographicsItem[];

  @ApiProperty({ description: 'Guest country distribution', type: [GuestDemographicsItem] })
  @ValidateNested({ each: true })
  @Type(() => GuestDemographicsItem)
  countries: GuestDemographicsItem[];

  @ApiProperty({ description: 'Guest type distribution', type: [GuestDemographicsItem] })
  @ValidateNested({ each: true })
  @Type(() => GuestDemographicsItem)
  guestTypes: GuestDemographicsItem[];
}

/**
 * Guest Analytics Report Response
 */
export class GuestAnalyticsReportNatsResponse {
  @ApiProperty({ description: 'Response status' })
  status: string;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Guest analytics report data', type: GuestReportData })
  @ValidateNested()
  @Type(() => GuestReportData)
  data: GuestReportData;
}

/**
 * Financial Report Revenue Breakdown
 */
export class FinancialReportRevenueBreakdown {
  @ApiProperty({ description: 'Room revenue' })
  roomRevenue: number;

  @ApiProperty({ description: 'Food and beverage revenue' })
  foodBeverageRevenue: number;

  @ApiProperty({ description: 'Service revenue' })
  serviceRevenue: number;

  @ApiProperty({ description: 'Other revenue' })
  otherRevenue: number;
}

/**
 * Financial Report Expense Breakdown
 */
export class FinancialReportExpenseBreakdown {
  @ApiProperty({ description: 'Operational expenses' })
  operationalExpenses: number;

  @ApiProperty({ description: 'Staff costs' })
  staffCosts: number;

  @ApiProperty({ description: 'Marketing expenses' })
  marketingExpenses: number;

  @ApiProperty({ description: 'Maintenance expenses' })
  maintenanceExpenses: number;

  @ApiProperty({ description: 'Other expenses' })
  otherExpenses: number;
}

/**
 * Financial Report KPIs
 */
export class FinancialReportKPIs {
  @ApiProperty({ description: 'Gross operating profit per available room' })
  GOPPAR: number;

  @ApiProperty({ description: 'Total revenue per available room' })
  TRevPAR: number;

  @ApiProperty({ description: 'Cost per occupied room' })
  costPerOccupiedRoom: number;

  @ApiProperty({ description: 'Profit per available room' })
  profitPerAvailableRoom: number;
}

/**
 * Financial Report Data
 */
export class FinancialReportData {
  @ApiProperty({ description: 'Total revenue' })
  totalRevenue: number;

  @ApiProperty({ description: 'Total expenses' })
  totalExpenses: number;

  @ApiProperty({ description: 'Gross profit' })
  grossProfit: number;

  @ApiProperty({ description: 'Net profit' })
  netProfit: number;

  @ApiProperty({ description: 'Profit margin (%)' })
  profitMargin: number;

  @ApiProperty({ description: 'Revenue breakdown', type: FinancialReportRevenueBreakdown })
  @ValidateNested()
  @Type(() => FinancialReportRevenueBreakdown)
  revenueBreakdown: FinancialReportRevenueBreakdown;

  @ApiProperty({ description: 'Expense breakdown', type: FinancialReportExpenseBreakdown })
  @ValidateNested()
  @Type(() => FinancialReportExpenseBreakdown)
  expenseBreakdown: FinancialReportExpenseBreakdown;

  @ApiProperty({ description: 'Key performance indicators', type: FinancialReportKPIs })
  @ValidateNested()
  @Type(() => FinancialReportKPIs)
  kpis: FinancialReportKPIs;
}

/**
 * Financial Report Response
 */
export class FinancialReportNatsResponse {
  @ApiProperty({ description: 'Response status' })
  status: string;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Financial report data', type: FinancialReportData })
  @ValidateNested()
  @Type(() => FinancialReportData)
  data: FinancialReportData;
}

/**
 * Housekeeping Staff Performance Item
 */
export class HousekeepingStaffPerformanceItem {
  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Staff name' })
  staffName: string;

  @ApiProperty({ description: 'Number of rooms cleaned' })
  roomsCleaned: number;

  @ApiProperty({ description: 'Average cleaning time (minutes)' })
  averageTime: number;

  @ApiProperty({ description: 'Quality score (0-100)' })
  qualityScore: number;
}

/**
 * Housekeeping Room Status Item
 */
export class HousekeepingRoomStatusItem {
  @ApiProperty({ description: 'Room status' })
  status: string;

  @ApiProperty({ description: 'Count of rooms in this status' })
  count: number;

  @ApiProperty({ description: 'Percentage of total' })
  percentage: number;
}

/**
 * Housekeeping Report Data
 */
export class HousekeepingReportData {
  @ApiProperty({ description: 'Total number of rooms' })
  totalRooms: number;

  @ApiProperty({ description: 'Number of cleaned rooms' })
  cleanedRooms: number;

  @ApiProperty({ description: 'Number of pending rooms' })
  pendingRooms: number;

  @ApiProperty({ description: 'Number of maintenance rooms' })
  maintenanceRooms: number;

  @ApiProperty({ description: 'Average cleaning time (minutes)' })
  averageCleaningTime: number;

  @ApiProperty({ description: 'Efficiency score (0-100)' })
  efficiencyScore: number;

  @ApiProperty({ description: 'Staff performance', type: [HousekeepingStaffPerformanceItem] })
  @ValidateNested({ each: true })
  @Type(() => HousekeepingStaffPerformanceItem)
  staffPerformance: HousekeepingStaffPerformanceItem[];

  @ApiProperty({ description: 'Room status breakdown', type: [HousekeepingRoomStatusItem] })
  @ValidateNested({ each: true })
  @Type(() => HousekeepingRoomStatusItem)
  roomStatus: HousekeepingRoomStatusItem[];
}

/**
 * Housekeeping Report Response
 */
export class HousekeepingReportNatsResponse {
  @ApiProperty({ description: 'Response status' })
  status: string;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Housekeeping report data', type: HousekeepingReportData })
  @ValidateNested()
  @Type(() => HousekeepingReportData)
  data: HousekeepingReportData;
}

/**
 * Performance Report - Staff Performance Item
 */
export class StaffPerformanceItem {
  @ApiProperty({ description: 'Staff ID' })
  staffId: string;

  @ApiProperty({ description: 'Staff name' })
  staffName: string;

  @ApiProperty({ description: 'Department' })
  department: string;

  @ApiProperty({ description: 'Performance score (0-100)' })
  performanceScore: number;

  @ApiProperty({ description: 'Number of tasks completed' })
  tasksCompleted: number;
}

/**
 * Performance Report - Department Performance Item
 */
export class DepartmentPerformanceItem {
  @ApiProperty({ description: 'Department name' })
  department: string;

  @ApiProperty({ description: 'Number of staff in department' })
  staffCount: number;

  @ApiProperty({ description: 'Average performance score' })
  averageScore: number;

  @ApiProperty({ description: 'Total tasks completed' })
  tasksCompleted: number;

  @ApiProperty({ description: 'Efficiency rate (%)' })
  efficiency: number;
}

/**
 * Performance Report Data
 */
export class PerformanceReportData {
  @ApiProperty({ description: 'Total number of staff' })
  totalStaff: number;

  @ApiProperty({ description: 'Number of active staff' })
  activeStaff: number;

  @ApiProperty({ description: 'Average productivity score' })
  averageProductivityScore: number;

  @ApiProperty({ description: 'Total tasks completed' })
  totalTasksCompleted: number;

  @ApiProperty({ description: 'Average task completion time (hours)' })
  averageTaskCompletionTime: number;

  @ApiProperty({ description: 'Department performance', type: [DepartmentPerformanceItem] })
  @ValidateNested({ each: true })
  @Type(() => DepartmentPerformanceItem)
  departmentPerformance: DepartmentPerformanceItem[];

  @ApiProperty({ description: 'Top performers', type: [StaffPerformanceItem] })
  @ValidateNested({ each: true })
  @Type(() => StaffPerformanceItem)
  topPerformers: StaffPerformanceItem[];
}

/**
 * Performance Report Response
 */
export class PerformanceReportNatsResponse {
  @ApiProperty({ description: 'Response status' })
  status: string;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Performance report data', type: PerformanceReportData })
  @ValidateNested()
  @Type(() => PerformanceReportData)
  data: PerformanceReportData;
}

/**
 * Export Report Response Data
 */
export class ExportReportData {
  @ApiProperty({ description: 'Download URL for the exported file' })
  downloadUrl: string;

  @ApiProperty({ description: 'Filename of the exported report' })
  filename: string;

  @ApiProperty({ description: 'When the file expires (ISO 8601)' })
  expiresAt: string;
}

/**
 * Export Report Response (used directly, no need for status/message since NatsResponse adds them)
 */
export class ExportReportApiResponse {
  @ApiProperty({ description: 'Export report data', type: ExportReportData })
  @ValidateNested()
  @Type(() => ExportReportData)
  data: ExportReportData;
}

/**
 * Dashboard Data - KPI Data
 */
export class DashboardKPIData {
  @ApiProperty({ description: 'Metric name' })
  name: string;

  @ApiProperty({ description: 'Metric value' })
  value: number;

  @ApiProperty({ description: 'Metric unit' })
  unit: string;

  @ApiProperty({ description: 'Change percentage' })
  change: number;

  @ApiProperty({ description: 'Trend indicator (up, down, stable)' })
  trend: string;
}

/**
 * Dashboard Data
 */
export class DashboardReportData {
  @ApiProperty({ description: 'Key performance indicators', type: [DashboardKPIData] })
  @ValidateNested({ each: true })
  @Type(() => DashboardKPIData)
  kpis: DashboardKPIData[];

  @ApiPropertyOptional({ description: 'Revenue data', type: RevenueReportData })
  @ValidateNested()
  @Type(() => RevenueReportData)
  revenue?: RevenueReportData;

  @ApiPropertyOptional({ description: 'Occupancy data', type: OccupancyReportData })
  @ValidateNested()
  @Type(() => OccupancyReportData)
  occupancy?: OccupancyReportData;

  @ApiPropertyOptional({ description: 'Guest data', type: GuestReportData })
  @ValidateNested()
  @Type(() => GuestReportData)
  guests?: GuestReportData;
}

/**
 * Dashboard Report Response
 */
export class DashboardReportNatsResponse {
  @ApiProperty({ description: 'Response status' })
  status: string;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Dashboard report data', type: DashboardReportData })
  @ValidateNested()
  @Type(() => DashboardReportData)
  data: DashboardReportData;
}

/**
 * Comparative Report Period Data
 */
export class ComparativePeriodData {
  @ApiProperty({ description: 'Period label' })
  period: string;

  @ApiProperty({ description: 'Total revenue in this period' })
  totalRevenue: number;

  @ApiProperty({ description: 'Occupancy rate in this period' })
  occupancyRate: number;

  @ApiProperty({ description: 'Average daily rate' })
  averageDailyRate: number;

  @ApiProperty({ description: 'Number of guests' })
  guestCount: number;
}

/**
 * Comparative Report Variance Data
 */
export class ComparativeVarianceData {
  @ApiProperty({ description: 'Metric name' })
  metric: string;

  @ApiProperty({ description: 'Previous period value' })
  previousValue: number;

  @ApiProperty({ description: 'Current period value' })
  currentValue: number;

  @ApiProperty({ description: 'Percentage change' })
  percentageChange: number;

  @ApiProperty({ description: 'Absolute change' })
  absoluteChange: number;
}

/**
 * Comparative Report Data
 */
export class ComparativeReportData {
  @ApiProperty({ description: 'Current period data', type: ComparativePeriodData })
  @ValidateNested()
  @Type(() => ComparativePeriodData)
  currentPeriod: ComparativePeriodData;

  @ApiProperty({ description: 'Previous period data', type: ComparativePeriodData })
  @ValidateNested()
  @Type(() => ComparativePeriodData)
  previousPeriod: ComparativePeriodData;

  @ApiProperty({ description: 'Variance metrics', type: [ComparativeVarianceData] })
  @ValidateNested({ each: true })
  @Type(() => ComparativeVarianceData)
  variance: ComparativeVarianceData[];
}

/**
 * Comparative Report Response
 */
export class ComparativeReportNatsResponse {
  @ApiProperty({ description: 'Response status' })
  status: string;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Comparative report data', type: ComparativeReportData })
  @ValidateNested()
  @Type(() => ComparativeReportData)
  data: ComparativeReportData;
}

/**
 * Report Request Patterns DTOs
 */

export class GetRevenueReportNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Start date (YYYY-MM-DD)' })
  @IsString()
  startDate: string;

  @ApiProperty({ description: 'End date (YYYY-MM-DD)' })
  @IsString()
  endDate: string;

  @ApiPropertyOptional({ description: 'Group by period (daily, monthly, yearly)' })
  @IsOptional()
  @IsString()
  groupBy?: string;
}

export class GetOccupancyReportNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Start date (YYYY-MM-DD)' })
  @IsString()
  startDate: string;

  @ApiProperty({ description: 'End date (YYYY-MM-DD)' })
  @IsString()
  endDate: string;

  @ApiPropertyOptional({ description: 'Filter by room type ID' })
  @IsOptional()
  @IsString()
  roomTypeId?: string;
}

export class GetGuestAnalyticsReportNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Start date (YYYY-MM-DD)' })
  @IsString()
  startDate: string;

  @ApiProperty({ description: 'End date (YYYY-MM-DD)' })
  @IsString()
  endDate: string;

  @ApiPropertyOptional({ description: 'Filter by guest type' })
  @IsOptional()
  @IsString()
  guestType?: string;
}

export class GetFinancialReportNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Start date (YYYY-MM-DD)' })
  @IsString()
  startDate: string;

  @ApiProperty({ description: 'End date (YYYY-MM-DD)' })
  @IsString()
  endDate: string;

  @ApiPropertyOptional({ description: 'Report type' })
  @IsOptional()
  @IsString()
  reportType?: string;
}

export class GetPerformanceReportNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Start date (YYYY-MM-DD)' })
  @IsString()
  startDate: string;

  @ApiProperty({ description: 'End date (YYYY-MM-DD)' })
  @IsString()
  endDate: string;

  @ApiPropertyOptional({ description: 'Metric to filter by' })
  @IsOptional()
  @IsString()
  metric?: string;
}

export class ExportReportNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Report type' })
  @IsString()
  reportType: string;

  @ApiProperty({ description: 'Export format (pdf, excel, csv)' })
  @IsString()
  format: string;

  @ApiPropertyOptional({ description: 'Start date (YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date (YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  endDate?: string;
}

export class GetDashboardDataNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Time period (week, month, quarter, year)' })
  @IsOptional()
  @IsString()
  period?: string;

  @ApiPropertyOptional({ description: 'Specific metrics to include', type: [String] })
  @IsOptional()
  @IsString({ each: true })
  metrics?: string[];
}

export class GetComparativeReportNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Current period start date (YYYY-MM-DD)' })
  @IsString()
  startDate: string;

  @ApiProperty({ description: 'Current period end date (YYYY-MM-DD)' })
  @IsString()
  endDate: string;

  @ApiProperty({ description: 'Previous period start date (YYYY-MM-DD)' })
  @IsString()
  compareStartDate: string;

  @ApiProperty({ description: 'Previous period end date (YYYY-MM-DD)' })
  @IsString()
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
