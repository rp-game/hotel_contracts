export enum EInvoiceStatus {
  DRAFT = 'DRAFT',
  ISSUED = 'ISSUED',
  CANCELLED = 'CANCELLED',
  ADJUSTED = 'ADJUSTED',
  REPLACED = 'REPLACED',
  DELETED = 'DELETED',
  ERROR = 'ERROR',
}

export enum CustomerType {
  BUSINESS = 'BUSINESS',
  INDIVIDUAL = 'INDIVIDUAL',
}

export enum InvoicePaymentMethod {
  TM = 'TM',         // Tiền mặt (Cash)
  CK = 'CK',         // Chuyển khoản (Bank transfer)
  TM_CK = 'TM/CK',  // Cash + Transfer
  TTD = 'TTD',        // Không thanh toán (No payment / Debt)
}

export enum ProviderType {
  HILO = 'HILO',
  VIETTEL = 'VIETTEL',
  VNPT = 'VNPT',
  MISA = 'MISA',
}

export enum EInvoiceAction {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  ISSUED = 'ISSUED',
  CANCELLED = 'CANCELLED',
  ADJUSTED = 'ADJUSTED',
  REPLACED = 'REPLACED',
  DELETED = 'DELETED',
  ERROR = 'ERROR',
  RETRIED = 'RETRIED',
  PDF_DOWNLOADED = 'PDF_DOWNLOADED',
}
