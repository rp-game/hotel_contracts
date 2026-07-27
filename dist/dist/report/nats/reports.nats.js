"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComparativeReportNatsRequest = exports.GetDashboardDataNatsRequest = exports.ExportReportNatsRequest = exports.GetPerformanceReportNatsRequest = exports.GetFinancialReportNatsRequest = exports.GetGuestAnalyticsReportNatsRequest = exports.GetOccupancyReportNatsRequest = exports.GetRevenueReportNatsRequest = exports.ComparativeReportNatsResponse = exports.ComparativeReportData = exports.ComparativeVarianceData = exports.ComparativePeriodData = exports.DashboardReportNatsResponse = exports.DashboardReportData = exports.DashboardKPIData = exports.ExportReportApiResponse = exports.ExportReportData = exports.PerformanceReportNatsResponse = exports.PerformanceReportData = exports.DepartmentPerformanceItem = exports.StaffPerformanceItem = exports.HousekeepingReportNatsResponse = exports.HousekeepingReportData = exports.HousekeepingRoomStatusItem = exports.HousekeepingStaffPerformanceItem = exports.FinancialReportNatsResponse = exports.FinancialReportData = exports.FinancialReportKPIs = exports.FinancialReportExpenseBreakdown = exports.FinancialReportRevenueBreakdown = exports.GuestAnalyticsReportNatsResponse = exports.GuestReportData = exports.GuestDemographicsItem = exports.OccupancyReportNatsResponse = exports.OccupancyReportData = exports.OccupancyReportPeriodItem = exports.RevenueReportNatsResponse = exports.RevenueReportData = exports.RevenueReportMonthlyItem = exports.RevenueReportDailyItem = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * Revenue Report Daily Breakdown Item
 */
class RevenueReportDailyItem {
    date;
    roomRevenue;
    serviceRevenue;
    totalRevenue;
}
exports.RevenueReportDailyItem = RevenueReportDailyItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date (ISO 8601)' }),
    __metadata("design:type", String)
], RevenueReportDailyItem.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room revenue for the day' }),
    __metadata("design:type", Number)
], RevenueReportDailyItem.prototype, "roomRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service revenue for the day' }),
    __metadata("design:type", Number)
], RevenueReportDailyItem.prototype, "serviceRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue for the day' }),
    __metadata("design:type", Number)
], RevenueReportDailyItem.prototype, "totalRevenue", void 0);
/**
 * Revenue Report Monthly Trend Item
 */
class RevenueReportMonthlyItem {
    month;
    revenue;
    growthRate;
}
exports.RevenueReportMonthlyItem = RevenueReportMonthlyItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Month (YYYY-MM)' }),
    __metadata("design:type", String)
], RevenueReportMonthlyItem.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue for the month' }),
    __metadata("design:type", Number)
], RevenueReportMonthlyItem.prototype, "revenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Growth rate (%)' }),
    __metadata("design:type", Number)
], RevenueReportMonthlyItem.prototype, "growthRate", void 0);
/**
 * Revenue Report Data
 */
class RevenueReportData {
    totalRevenue;
    roomRevenue;
    serviceRevenue;
    taxRevenue;
    averageDailyRate;
    revenuePAR;
    growthRate;
    dailyBreakdown;
    monthlyTrend;
}
exports.RevenueReportData = RevenueReportData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue amount' }),
    __metadata("design:type", Number)
], RevenueReportData.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room revenue' }),
    __metadata("design:type", Number)
], RevenueReportData.prototype, "roomRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service revenue' }),
    __metadata("design:type", Number)
], RevenueReportData.prototype, "serviceRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax revenue' }),
    __metadata("design:type", Number)
], RevenueReportData.prototype, "taxRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average daily rate' }),
    __metadata("design:type", Number)
], RevenueReportData.prototype, "averageDailyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue per available room' }),
    __metadata("design:type", Number)
], RevenueReportData.prototype, "revenuePAR", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue growth rate (%)' }),
    __metadata("design:type", Number)
], RevenueReportData.prototype, "growthRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Daily breakdown', type: [RevenueReportDailyItem] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => RevenueReportDailyItem),
    __metadata("design:type", Array)
], RevenueReportData.prototype, "dailyBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monthly trend', type: [RevenueReportMonthlyItem] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => RevenueReportMonthlyItem),
    __metadata("design:type", Array)
], RevenueReportData.prototype, "monthlyTrend", void 0);
/**
 * Revenue Report Response
 */
class RevenueReportNatsResponse {
    status;
    message;
    data;
}
exports.RevenueReportNatsResponse = RevenueReportNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response status' }),
    __metadata("design:type", String)
], RevenueReportNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], RevenueReportNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue report data', type: RevenueReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => RevenueReportData),
    __metadata("design:type", RevenueReportData)
], RevenueReportNatsResponse.prototype, "data", void 0);
/**
 * Occupancy Report Period Data Item
 */
class OccupancyReportPeriodItem {
    date;
    occupiedRooms;
    totalRooms;
    occupancyRate;
    revenue;
}
exports.OccupancyReportPeriodItem = OccupancyReportPeriodItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date (ISO 8601)' }),
    __metadata("design:type", String)
], OccupancyReportPeriodItem.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupied rooms on this date' }),
    __metadata("design:type", Number)
], OccupancyReportPeriodItem.prototype, "occupiedRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms' }),
    __metadata("design:type", Number)
], OccupancyReportPeriodItem.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy rate (%)' }),
    __metadata("design:type", Number)
], OccupancyReportPeriodItem.prototype, "occupancyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue for this date' }),
    __metadata("design:type", Number)
], OccupancyReportPeriodItem.prototype, "revenue", void 0);
/**
 * Occupancy Report Data
 */
class OccupancyReportData {
    totalRooms;
    occupiedRooms;
    availableRooms;
    occupancyRate;
    averageDailyRate;
    revenuePAR;
    periodData;
}
exports.OccupancyReportData = OccupancyReportData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of rooms' }),
    __metadata("design:type", Number)
], OccupancyReportData.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of occupied rooms' }),
    __metadata("design:type", Number)
], OccupancyReportData.prototype, "occupiedRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of available rooms' }),
    __metadata("design:type", Number)
], OccupancyReportData.prototype, "availableRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy rate (%)' }),
    __metadata("design:type", Number)
], OccupancyReportData.prototype, "occupancyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average daily rate' }),
    __metadata("design:type", Number)
], OccupancyReportData.prototype, "averageDailyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue per available room' }),
    __metadata("design:type", Number)
], OccupancyReportData.prototype, "revenuePAR", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period data', type: [OccupancyReportPeriodItem] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => OccupancyReportPeriodItem),
    __metadata("design:type", Array)
], OccupancyReportData.prototype, "periodData", void 0);
/**
 * Occupancy Report Response
 */
class OccupancyReportNatsResponse {
    status;
    message;
    data;
}
exports.OccupancyReportNatsResponse = OccupancyReportNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response status' }),
    __metadata("design:type", String)
], OccupancyReportNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], OccupancyReportNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy report data', type: OccupancyReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OccupancyReportData),
    __metadata("design:type", OccupancyReportData)
], OccupancyReportNatsResponse.prototype, "data", void 0);
/**
 * Guest Demographics Group Item
 */
class GuestDemographicsItem {
    label;
    count;
    percentage;
}
exports.GuestDemographicsItem = GuestDemographicsItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Group label (age range, country, or type)' }),
    __metadata("design:type", String)
], GuestDemographicsItem.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Count in this group' }),
    __metadata("design:type", Number)
], GuestDemographicsItem.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Percentage of total' }),
    __metadata("design:type", Number)
], GuestDemographicsItem.prototype, "percentage", void 0);
/**
 * Guest Report Data
 */
class GuestReportData {
    totalGuests;
    newGuests;
    returningGuests;
    averageStayDuration;
    guestSatisfactionScore;
    ageGroups;
    countries;
    guestTypes;
}
exports.GuestReportData = GuestReportData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of guests' }),
    __metadata("design:type", Number)
], GuestReportData.prototype, "totalGuests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of new guests' }),
    __metadata("design:type", Number)
], GuestReportData.prototype, "newGuests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of returning guests' }),
    __metadata("design:type", Number)
], GuestReportData.prototype, "returningGuests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average stay duration (days)' }),
    __metadata("design:type", Number)
], GuestReportData.prototype, "averageStayDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest satisfaction score (0-10)' }),
    __metadata("design:type", Number)
], GuestReportData.prototype, "guestSatisfactionScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest age distribution', type: [GuestDemographicsItem] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => GuestDemographicsItem),
    __metadata("design:type", Array)
], GuestReportData.prototype, "ageGroups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest country distribution', type: [GuestDemographicsItem] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => GuestDemographicsItem),
    __metadata("design:type", Array)
], GuestReportData.prototype, "countries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest type distribution', type: [GuestDemographicsItem] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => GuestDemographicsItem),
    __metadata("design:type", Array)
], GuestReportData.prototype, "guestTypes", void 0);
/**
 * Guest Analytics Report Response
 */
class GuestAnalyticsReportNatsResponse {
    status;
    message;
    data;
}
exports.GuestAnalyticsReportNatsResponse = GuestAnalyticsReportNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response status' }),
    __metadata("design:type", String)
], GuestAnalyticsReportNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], GuestAnalyticsReportNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest analytics report data', type: GuestReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => GuestReportData),
    __metadata("design:type", GuestReportData)
], GuestAnalyticsReportNatsResponse.prototype, "data", void 0);
/**
 * Financial Report Revenue Breakdown
 */
class FinancialReportRevenueBreakdown {
    roomRevenue;
    foodBeverageRevenue;
    serviceRevenue;
    otherRevenue;
}
exports.FinancialReportRevenueBreakdown = FinancialReportRevenueBreakdown;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room revenue' }),
    __metadata("design:type", Number)
], FinancialReportRevenueBreakdown.prototype, "roomRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Food and beverage revenue' }),
    __metadata("design:type", Number)
], FinancialReportRevenueBreakdown.prototype, "foodBeverageRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service revenue' }),
    __metadata("design:type", Number)
], FinancialReportRevenueBreakdown.prototype, "serviceRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Other revenue' }),
    __metadata("design:type", Number)
], FinancialReportRevenueBreakdown.prototype, "otherRevenue", void 0);
/**
 * Financial Report Expense Breakdown
 */
class FinancialReportExpenseBreakdown {
    operationalExpenses;
    staffCosts;
    marketingExpenses;
    maintenanceExpenses;
    otherExpenses;
}
exports.FinancialReportExpenseBreakdown = FinancialReportExpenseBreakdown;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Operational expenses' }),
    __metadata("design:type", Number)
], FinancialReportExpenseBreakdown.prototype, "operationalExpenses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff costs' }),
    __metadata("design:type", Number)
], FinancialReportExpenseBreakdown.prototype, "staffCosts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Marketing expenses' }),
    __metadata("design:type", Number)
], FinancialReportExpenseBreakdown.prototype, "marketingExpenses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maintenance expenses' }),
    __metadata("design:type", Number)
], FinancialReportExpenseBreakdown.prototype, "maintenanceExpenses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Other expenses' }),
    __metadata("design:type", Number)
], FinancialReportExpenseBreakdown.prototype, "otherExpenses", void 0);
/**
 * Financial Report KPIs
 */
class FinancialReportKPIs {
    GOPPAR;
    TRevPAR;
    costPerOccupiedRoom;
    profitPerAvailableRoom;
}
exports.FinancialReportKPIs = FinancialReportKPIs;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gross operating profit per available room' }),
    __metadata("design:type", Number)
], FinancialReportKPIs.prototype, "GOPPAR", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue per available room' }),
    __metadata("design:type", Number)
], FinancialReportKPIs.prototype, "TRevPAR", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cost per occupied room' }),
    __metadata("design:type", Number)
], FinancialReportKPIs.prototype, "costPerOccupiedRoom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profit per available room' }),
    __metadata("design:type", Number)
], FinancialReportKPIs.prototype, "profitPerAvailableRoom", void 0);
/**
 * Financial Report Data
 */
class FinancialReportData {
    totalRevenue;
    totalExpenses;
    grossProfit;
    netProfit;
    profitMargin;
    revenueBreakdown;
    expenseBreakdown;
    kpis;
}
exports.FinancialReportData = FinancialReportData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue' }),
    __metadata("design:type", Number)
], FinancialReportData.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total expenses' }),
    __metadata("design:type", Number)
], FinancialReportData.prototype, "totalExpenses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gross profit' }),
    __metadata("design:type", Number)
], FinancialReportData.prototype, "grossProfit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Net profit' }),
    __metadata("design:type", Number)
], FinancialReportData.prototype, "netProfit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profit margin (%)' }),
    __metadata("design:type", Number)
], FinancialReportData.prototype, "profitMargin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue breakdown', type: FinancialReportRevenueBreakdown }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => FinancialReportRevenueBreakdown),
    __metadata("design:type", FinancialReportRevenueBreakdown)
], FinancialReportData.prototype, "revenueBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expense breakdown', type: FinancialReportExpenseBreakdown }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => FinancialReportExpenseBreakdown),
    __metadata("design:type", FinancialReportExpenseBreakdown)
], FinancialReportData.prototype, "expenseBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Key performance indicators', type: FinancialReportKPIs }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => FinancialReportKPIs),
    __metadata("design:type", FinancialReportKPIs)
], FinancialReportData.prototype, "kpis", void 0);
/**
 * Financial Report Response
 */
class FinancialReportNatsResponse {
    status;
    message;
    data;
}
exports.FinancialReportNatsResponse = FinancialReportNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response status' }),
    __metadata("design:type", String)
], FinancialReportNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], FinancialReportNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Financial report data', type: FinancialReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => FinancialReportData),
    __metadata("design:type", FinancialReportData)
], FinancialReportNatsResponse.prototype, "data", void 0);
/**
 * Housekeeping Staff Performance Item
 */
class HousekeepingStaffPerformanceItem {
    staffId;
    staffName;
    roomsCleaned;
    averageTime;
    qualityScore;
}
exports.HousekeepingStaffPerformanceItem = HousekeepingStaffPerformanceItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], HousekeepingStaffPerformanceItem.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff name' }),
    __metadata("design:type", String)
], HousekeepingStaffPerformanceItem.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rooms cleaned' }),
    __metadata("design:type", Number)
], HousekeepingStaffPerformanceItem.prototype, "roomsCleaned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average cleaning time (minutes)' }),
    __metadata("design:type", Number)
], HousekeepingStaffPerformanceItem.prototype, "averageTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quality score (0-100)' }),
    __metadata("design:type", Number)
], HousekeepingStaffPerformanceItem.prototype, "qualityScore", void 0);
/**
 * Housekeeping Room Status Item
 */
class HousekeepingRoomStatusItem {
    status;
    count;
    percentage;
}
exports.HousekeepingRoomStatusItem = HousekeepingRoomStatusItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room status' }),
    __metadata("design:type", String)
], HousekeepingRoomStatusItem.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Count of rooms in this status' }),
    __metadata("design:type", Number)
], HousekeepingRoomStatusItem.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Percentage of total' }),
    __metadata("design:type", Number)
], HousekeepingRoomStatusItem.prototype, "percentage", void 0);
/**
 * Housekeeping Report Data
 */
class HousekeepingReportData {
    totalRooms;
    cleanedRooms;
    pendingRooms;
    maintenanceRooms;
    averageCleaningTime;
    efficiencyScore;
    staffPerformance;
    roomStatus;
}
exports.HousekeepingReportData = HousekeepingReportData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of rooms' }),
    __metadata("design:type", Number)
], HousekeepingReportData.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of cleaned rooms' }),
    __metadata("design:type", Number)
], HousekeepingReportData.prototype, "cleanedRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of pending rooms' }),
    __metadata("design:type", Number)
], HousekeepingReportData.prototype, "pendingRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of maintenance rooms' }),
    __metadata("design:type", Number)
], HousekeepingReportData.prototype, "maintenanceRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average cleaning time (minutes)' }),
    __metadata("design:type", Number)
], HousekeepingReportData.prototype, "averageCleaningTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Efficiency score (0-100)' }),
    __metadata("design:type", Number)
], HousekeepingReportData.prototype, "efficiencyScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff performance', type: [HousekeepingStaffPerformanceItem] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => HousekeepingStaffPerformanceItem),
    __metadata("design:type", Array)
], HousekeepingReportData.prototype, "staffPerformance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room status breakdown', type: [HousekeepingRoomStatusItem] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => HousekeepingRoomStatusItem),
    __metadata("design:type", Array)
], HousekeepingReportData.prototype, "roomStatus", void 0);
/**
 * Housekeeping Report Response
 */
class HousekeepingReportNatsResponse {
    status;
    message;
    data;
}
exports.HousekeepingReportNatsResponse = HousekeepingReportNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response status' }),
    __metadata("design:type", String)
], HousekeepingReportNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], HousekeepingReportNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Housekeeping report data', type: HousekeepingReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => HousekeepingReportData),
    __metadata("design:type", HousekeepingReportData)
], HousekeepingReportNatsResponse.prototype, "data", void 0);
/**
 * Performance Report - Staff Performance Item
 */
class StaffPerformanceItem {
    staffId;
    staffName;
    department;
    performanceScore;
    tasksCompleted;
}
exports.StaffPerformanceItem = StaffPerformanceItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StaffPerformanceItem.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff name' }),
    __metadata("design:type", String)
], StaffPerformanceItem.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department' }),
    __metadata("design:type", String)
], StaffPerformanceItem.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Performance score (0-100)' }),
    __metadata("design:type", Number)
], StaffPerformanceItem.prototype, "performanceScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of tasks completed' }),
    __metadata("design:type", Number)
], StaffPerformanceItem.prototype, "tasksCompleted", void 0);
/**
 * Performance Report - Department Performance Item
 */
class DepartmentPerformanceItem {
    department;
    staffCount;
    averageScore;
    tasksCompleted;
    efficiency;
}
exports.DepartmentPerformanceItem = DepartmentPerformanceItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department name' }),
    __metadata("design:type", String)
], DepartmentPerformanceItem.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of staff in department' }),
    __metadata("design:type", Number)
], DepartmentPerformanceItem.prototype, "staffCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average performance score' }),
    __metadata("design:type", Number)
], DepartmentPerformanceItem.prototype, "averageScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks completed' }),
    __metadata("design:type", Number)
], DepartmentPerformanceItem.prototype, "tasksCompleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Efficiency rate (%)' }),
    __metadata("design:type", Number)
], DepartmentPerformanceItem.prototype, "efficiency", void 0);
/**
 * Performance Report Data
 */
class PerformanceReportData {
    totalStaff;
    activeStaff;
    averageProductivityScore;
    totalTasksCompleted;
    averageTaskCompletionTime;
    departmentPerformance;
    topPerformers;
}
exports.PerformanceReportData = PerformanceReportData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of staff' }),
    __metadata("design:type", Number)
], PerformanceReportData.prototype, "totalStaff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of active staff' }),
    __metadata("design:type", Number)
], PerformanceReportData.prototype, "activeStaff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average productivity score' }),
    __metadata("design:type", Number)
], PerformanceReportData.prototype, "averageProductivityScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks completed' }),
    __metadata("design:type", Number)
], PerformanceReportData.prototype, "totalTasksCompleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average task completion time (hours)' }),
    __metadata("design:type", Number)
], PerformanceReportData.prototype, "averageTaskCompletionTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department performance', type: [DepartmentPerformanceItem] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => DepartmentPerformanceItem),
    __metadata("design:type", Array)
], PerformanceReportData.prototype, "departmentPerformance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Top performers', type: [StaffPerformanceItem] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => StaffPerformanceItem),
    __metadata("design:type", Array)
], PerformanceReportData.prototype, "topPerformers", void 0);
/**
 * Performance Report Response
 */
class PerformanceReportNatsResponse {
    status;
    message;
    data;
}
exports.PerformanceReportNatsResponse = PerformanceReportNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response status' }),
    __metadata("design:type", String)
], PerformanceReportNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], PerformanceReportNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Performance report data', type: PerformanceReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PerformanceReportData),
    __metadata("design:type", PerformanceReportData)
], PerformanceReportNatsResponse.prototype, "data", void 0);
/**
 * Export Report Response Data
 */
class ExportReportData {
    downloadUrl;
    filename;
    expiresAt;
}
exports.ExportReportData = ExportReportData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Download URL for the exported file' }),
    __metadata("design:type", String)
], ExportReportData.prototype, "downloadUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Filename of the exported report' }),
    __metadata("design:type", String)
], ExportReportData.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'When the file expires (ISO 8601)' }),
    __metadata("design:type", String)
], ExportReportData.prototype, "expiresAt", void 0);
/**
 * Export Report Response (used directly, no need for status/message since NatsResponse adds them)
 */
class ExportReportApiResponse {
    data;
}
exports.ExportReportApiResponse = ExportReportApiResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Export report data', type: ExportReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ExportReportData),
    __metadata("design:type", ExportReportData)
], ExportReportApiResponse.prototype, "data", void 0);
/**
 * Dashboard Data - KPI Data
 */
class DashboardKPIData {
    name;
    value;
    unit;
    change;
    trend;
}
exports.DashboardKPIData = DashboardKPIData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Metric name' }),
    __metadata("design:type", String)
], DashboardKPIData.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Metric value' }),
    __metadata("design:type", Number)
], DashboardKPIData.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Metric unit' }),
    __metadata("design:type", String)
], DashboardKPIData.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Change percentage' }),
    __metadata("design:type", Number)
], DashboardKPIData.prototype, "change", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Trend indicator (up, down, stable)' }),
    __metadata("design:type", String)
], DashboardKPIData.prototype, "trend", void 0);
/**
 * Dashboard Data
 */
class DashboardReportData {
    kpis;
    revenue;
    occupancy;
    guests;
}
exports.DashboardReportData = DashboardReportData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Key performance indicators', type: [DashboardKPIData] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => DashboardKPIData),
    __metadata("design:type", Array)
], DashboardReportData.prototype, "kpis", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Revenue data', type: RevenueReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => RevenueReportData),
    __metadata("design:type", RevenueReportData)
], DashboardReportData.prototype, "revenue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Occupancy data', type: OccupancyReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OccupancyReportData),
    __metadata("design:type", OccupancyReportData)
], DashboardReportData.prototype, "occupancy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest data', type: GuestReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => GuestReportData),
    __metadata("design:type", GuestReportData)
], DashboardReportData.prototype, "guests", void 0);
/**
 * Dashboard Report Response
 */
class DashboardReportNatsResponse {
    status;
    message;
    data;
}
exports.DashboardReportNatsResponse = DashboardReportNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response status' }),
    __metadata("design:type", String)
], DashboardReportNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], DashboardReportNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dashboard report data', type: DashboardReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DashboardReportData),
    __metadata("design:type", DashboardReportData)
], DashboardReportNatsResponse.prototype, "data", void 0);
/**
 * Comparative Report Period Data
 */
class ComparativePeriodData {
    period;
    totalRevenue;
    occupancyRate;
    averageDailyRate;
    guestCount;
}
exports.ComparativePeriodData = ComparativePeriodData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period label' }),
    __metadata("design:type", String)
], ComparativePeriodData.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue in this period' }),
    __metadata("design:type", Number)
], ComparativePeriodData.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy rate in this period' }),
    __metadata("design:type", Number)
], ComparativePeriodData.prototype, "occupancyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average daily rate' }),
    __metadata("design:type", Number)
], ComparativePeriodData.prototype, "averageDailyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of guests' }),
    __metadata("design:type", Number)
], ComparativePeriodData.prototype, "guestCount", void 0);
/**
 * Comparative Report Variance Data
 */
class ComparativeVarianceData {
    metric;
    previousValue;
    currentValue;
    percentageChange;
    absoluteChange;
}
exports.ComparativeVarianceData = ComparativeVarianceData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Metric name' }),
    __metadata("design:type", String)
], ComparativeVarianceData.prototype, "metric", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Previous period value' }),
    __metadata("design:type", Number)
], ComparativeVarianceData.prototype, "previousValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current period value' }),
    __metadata("design:type", Number)
], ComparativeVarianceData.prototype, "currentValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Percentage change' }),
    __metadata("design:type", Number)
], ComparativeVarianceData.prototype, "percentageChange", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Absolute change' }),
    __metadata("design:type", Number)
], ComparativeVarianceData.prototype, "absoluteChange", void 0);
/**
 * Comparative Report Data
 */
class ComparativeReportData {
    currentPeriod;
    previousPeriod;
    variance;
}
exports.ComparativeReportData = ComparativeReportData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current period data', type: ComparativePeriodData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ComparativePeriodData),
    __metadata("design:type", ComparativePeriodData)
], ComparativeReportData.prototype, "currentPeriod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Previous period data', type: ComparativePeriodData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ComparativePeriodData),
    __metadata("design:type", ComparativePeriodData)
], ComparativeReportData.prototype, "previousPeriod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Variance metrics', type: [ComparativeVarianceData] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ComparativeVarianceData),
    __metadata("design:type", Array)
], ComparativeReportData.prototype, "variance", void 0);
/**
 * Comparative Report Response
 */
class ComparativeReportNatsResponse {
    status;
    message;
    data;
}
exports.ComparativeReportNatsResponse = ComparativeReportNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response status' }),
    __metadata("design:type", String)
], ComparativeReportNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], ComparativeReportNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comparative report data', type: ComparativeReportData }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ComparativeReportData),
    __metadata("design:type", ComparativeReportData)
], ComparativeReportNatsResponse.prototype, "data", void 0);
/**
 * Report Request Patterns DTOs
 */
class GetRevenueReportNatsRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
    groupBy;
}
exports.GetRevenueReportNatsRequest = GetRevenueReportNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRevenueReportNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRevenueReportNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRevenueReportNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRevenueReportNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Group by period (daily, monthly, yearly)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRevenueReportNatsRequest.prototype, "groupBy", void 0);
class GetOccupancyReportNatsRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
    roomTypeId;
}
exports.GetOccupancyReportNatsRequest = GetOccupancyReportNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOccupancyReportNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOccupancyReportNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOccupancyReportNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOccupancyReportNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by room type ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOccupancyReportNatsRequest.prototype, "roomTypeId", void 0);
class GetGuestAnalyticsReportNatsRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
    guestType;
}
exports.GetGuestAnalyticsReportNatsRequest = GetGuestAnalyticsReportNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetGuestAnalyticsReportNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetGuestAnalyticsReportNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetGuestAnalyticsReportNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetGuestAnalyticsReportNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by guest type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetGuestAnalyticsReportNatsRequest.prototype, "guestType", void 0);
class GetFinancialReportNatsRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
    reportType;
}
exports.GetFinancialReportNatsRequest = GetFinancialReportNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetFinancialReportNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetFinancialReportNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetFinancialReportNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetFinancialReportNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Report type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetFinancialReportNatsRequest.prototype, "reportType", void 0);
class GetPerformanceReportNatsRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
    metric;
}
exports.GetPerformanceReportNatsRequest = GetPerformanceReportNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetPerformanceReportNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetPerformanceReportNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetPerformanceReportNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetPerformanceReportNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Metric to filter by' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetPerformanceReportNatsRequest.prototype, "metric", void 0);
class ExportReportNatsRequest {
    tenantId;
    hotelId;
    reportType;
    format;
    startDate;
    endDate;
}
exports.ExportReportNatsRequest = ExportReportNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExportReportNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExportReportNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Report type' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExportReportNatsRequest.prototype, "reportType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Export format (pdf, excel, csv)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExportReportNatsRequest.prototype, "format", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExportReportNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExportReportNatsRequest.prototype, "endDate", void 0);
class GetDashboardDataNatsRequest {
    tenantId;
    hotelId;
    period;
    metrics;
}
exports.GetDashboardDataNatsRequest = GetDashboardDataNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetDashboardDataNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetDashboardDataNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Time period (week, month, quarter, year)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetDashboardDataNatsRequest.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Specific metrics to include', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], GetDashboardDataNatsRequest.prototype, "metrics", void 0);
class GetComparativeReportNatsRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
    compareStartDate;
    compareEndDate;
}
exports.GetComparativeReportNatsRequest = GetComparativeReportNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetComparativeReportNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetComparativeReportNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current period start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetComparativeReportNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current period end date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetComparativeReportNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Previous period start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetComparativeReportNatsRequest.prototype, "compareStartDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Previous period end date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetComparativeReportNatsRequest.prototype, "compareEndDate", void 0);
//# sourceMappingURL=reports.nats.js.map