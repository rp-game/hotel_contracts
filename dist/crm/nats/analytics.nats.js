"use strict";
/**
 * Analytics NATS Contracts
 *
 * Patterns:
 * - crm.analytics.overview
 * - crm.analytics.customer_analytics
 * - crm.analytics.export_customer_analytics
 * - crm.analytics.calculate_customer
 * - crm.analytics.bulk_calculate
 * - crm.analytics.segments
 * - crm.analytics.churn_analysis
 * - crm.analytics.clv_analysis
 *
 * Handler: crm-service (AnalyticsNatsController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatEnum = exports.ExportFormatEnum = void 0;
/**
 * Export Format Options
 */
var ExportFormatEnum;
(function (ExportFormatEnum) {
    ExportFormatEnum["CSV"] = "csv";
    ExportFormatEnum["XLSX"] = "xlsx";
    ExportFormatEnum["PDF"] = "pdf";
    ExportFormatEnum["JSON"] = "json";
})(ExportFormatEnum || (exports.ExportFormatEnum = ExportFormatEnum = {}));
/**
 * Date Format Options
 */
var DateFormatEnum;
(function (DateFormatEnum) {
    DateFormatEnum["ISO"] = "iso";
    DateFormatEnum["US"] = "us";
    DateFormatEnum["EU"] = "eu";
    DateFormatEnum["CUSTOM"] = "custom";
})(DateFormatEnum || (exports.DateFormatEnum = DateFormatEnum = {}));
//# sourceMappingURL=analytics.nats.js.map