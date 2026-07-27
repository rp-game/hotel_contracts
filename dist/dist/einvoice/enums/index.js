"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EInvoiceAction = exports.EInvoiceCheckoutMode = exports.ProviderType = exports.InvoicePaymentMethod = exports.CustomerType = exports.EInvoiceStatus = void 0;
var EInvoiceStatus;
(function (EInvoiceStatus) {
    EInvoiceStatus["DRAFT"] = "DRAFT";
    EInvoiceStatus["PENDING_APPROVAL"] = "PENDING_APPROVAL";
    EInvoiceStatus["ISSUED"] = "ISSUED";
    EInvoiceStatus["CANCELLED"] = "CANCELLED";
    EInvoiceStatus["ADJUSTED"] = "ADJUSTED";
    EInvoiceStatus["REPLACED"] = "REPLACED";
    EInvoiceStatus["DELETED"] = "DELETED";
    EInvoiceStatus["ERROR"] = "ERROR";
})(EInvoiceStatus || (exports.EInvoiceStatus = EInvoiceStatus = {}));
var CustomerType;
(function (CustomerType) {
    CustomerType["BUSINESS"] = "BUSINESS";
    CustomerType["INDIVIDUAL"] = "INDIVIDUAL";
})(CustomerType || (exports.CustomerType = CustomerType = {}));
var InvoicePaymentMethod;
(function (InvoicePaymentMethod) {
    InvoicePaymentMethod["TM"] = "TM";
    InvoicePaymentMethod["CK"] = "CK";
    InvoicePaymentMethod["TM_CK"] = "TM/CK";
    InvoicePaymentMethod["TTD"] = "TTD";
})(InvoicePaymentMethod || (exports.InvoicePaymentMethod = InvoicePaymentMethod = {}));
var ProviderType;
(function (ProviderType) {
    ProviderType["HILO"] = "HILO";
    ProviderType["VIETTEL"] = "VIETTEL";
    ProviderType["VNPT"] = "VNPT";
    ProviderType["MISA"] = "MISA";
})(ProviderType || (exports.ProviderType = ProviderType = {}));
/**
 * Hành vi xuất HĐĐT khi checkout (per hotel).
 * - ON_REQUEST: chỉ tạo nháp khi khách yêu cầu (mặc định, như hiện tại).
 * - ALL_DRAFT: tạo nháp mọi checkout (khách không lấy → "Khách lẻ").
 * - ALL_ISSUE: tạo + phát hành ngay mọi checkout (trừ khi requireApproval bật).
 */
var EInvoiceCheckoutMode;
(function (EInvoiceCheckoutMode) {
    EInvoiceCheckoutMode["ON_REQUEST"] = "ON_REQUEST";
    EInvoiceCheckoutMode["ALL_DRAFT"] = "ALL_DRAFT";
    EInvoiceCheckoutMode["ALL_ISSUE"] = "ALL_ISSUE";
})(EInvoiceCheckoutMode || (exports.EInvoiceCheckoutMode = EInvoiceCheckoutMode = {}));
var EInvoiceAction;
(function (EInvoiceAction) {
    EInvoiceAction["CREATED"] = "CREATED";
    EInvoiceAction["UPDATED"] = "UPDATED";
    EInvoiceAction["ISSUED"] = "ISSUED";
    EInvoiceAction["CANCELLED"] = "CANCELLED";
    EInvoiceAction["ADJUSTED"] = "ADJUSTED";
    EInvoiceAction["REPLACED"] = "REPLACED";
    EInvoiceAction["DELETED"] = "DELETED";
    EInvoiceAction["ERROR"] = "ERROR";
    EInvoiceAction["RETRIED"] = "RETRIED";
    EInvoiceAction["PDF_DOWNLOADED"] = "PDF_DOWNLOADED";
    EInvoiceAction["SUBMITTED"] = "SUBMITTED";
    EInvoiceAction["APPROVED"] = "APPROVED";
    EInvoiceAction["REJECTED"] = "REJECTED";
})(EInvoiceAction || (exports.EInvoiceAction = EInvoiceAction = {}));
//# sourceMappingURL=index.js.map