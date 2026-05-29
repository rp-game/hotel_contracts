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