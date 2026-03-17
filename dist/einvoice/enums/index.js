"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EInvoiceAction = exports.ProviderType = exports.InvoicePaymentMethod = exports.CustomerType = exports.EInvoiceStatus = void 0;
var EInvoiceStatus;
(function (EInvoiceStatus) {
    EInvoiceStatus["DRAFT"] = "DRAFT";
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
})(EInvoiceAction || (exports.EInvoiceAction = EInvoiceAction = {}));
//# sourceMappingURL=index.js.map