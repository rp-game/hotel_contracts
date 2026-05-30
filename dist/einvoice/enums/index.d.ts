export declare enum EInvoiceStatus {
    DRAFT = "DRAFT",
    PENDING_APPROVAL = "PENDING_APPROVAL",
    ISSUED = "ISSUED",
    CANCELLED = "CANCELLED",
    ADJUSTED = "ADJUSTED",
    REPLACED = "REPLACED",
    DELETED = "DELETED",
    ERROR = "ERROR"
}
export declare enum CustomerType {
    BUSINESS = "BUSINESS",
    INDIVIDUAL = "INDIVIDUAL"
}
export declare enum InvoicePaymentMethod {
    TM = "TM",// Tiền mặt (Cash)
    CK = "CK",// Chuyển khoản (Bank transfer)
    TM_CK = "TM/CK",// Cash + Transfer
    TTD = "TTD"
}
export declare enum ProviderType {
    HILO = "HILO",
    VIETTEL = "VIETTEL",
    VNPT = "VNPT",
    MISA = "MISA"
}
/**
 * Hành vi xuất HĐĐT khi checkout (per hotel).
 * - ON_REQUEST: chỉ tạo nháp khi khách yêu cầu (mặc định, như hiện tại).
 * - ALL_DRAFT: tạo nháp mọi checkout (khách không lấy → "Khách lẻ").
 * - ALL_ISSUE: tạo + phát hành ngay mọi checkout (trừ khi requireApproval bật).
 */
export declare enum EInvoiceCheckoutMode {
    ON_REQUEST = "ON_REQUEST",
    ALL_DRAFT = "ALL_DRAFT",
    ALL_ISSUE = "ALL_ISSUE"
}
export declare enum EInvoiceAction {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    ISSUED = "ISSUED",
    CANCELLED = "CANCELLED",
    ADJUSTED = "ADJUSTED",
    REPLACED = "REPLACED",
    DELETED = "DELETED",
    ERROR = "ERROR",
    RETRIED = "RETRIED",
    PDF_DOWNLOADED = "PDF_DOWNLOADED",
    SUBMITTED = "SUBMITTED",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}
//# sourceMappingURL=index.d.ts.map