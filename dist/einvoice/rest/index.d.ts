/**
 * E-Invoice REST DTOs
 * Used by API Gateway for Swagger documentation and request validation
 */
import { EInvoiceStatus, CustomerType, InvoicePaymentMethod, ProviderType } from '../enums';
export declare class CreateEInvoiceItemDto {
    orderBy: number;
    code?: string;
    name: string;
    unit?: string;
    quantity: number;
    unitPrice: number;
    vatRate: number;
    discount?: number;
}
export declare class CreateEInvoiceDto {
    customerType: CustomerType;
    customerName?: string;
    customerTaxCode?: string;
    customerAddress?: string;
    customerEmail?: string;
    customerPhone?: string;
    buyerName?: string;
    paymentMethod: InvoicePaymentMethod;
    arisingDate: string;
    notes?: string;
    items: CreateEInvoiceItemDto[];
}
export declare class CreateEInvoiceFromInvoiceDto {
    customerType: CustomerType;
    customerName?: string;
    customerTaxCode?: string;
    customerAddress?: string;
    customerEmail?: string;
    customerPhone?: string;
    buyerName?: string;
    paymentMethod: InvoicePaymentMethod;
    arisingDate?: string;
    notes?: string;
}
export declare class UpdateEInvoiceDto {
    customerType?: CustomerType;
    customerName?: string;
    customerTaxCode?: string;
    customerAddress?: string;
    customerEmail?: string;
    customerPhone?: string;
    buyerName?: string;
    paymentMethod?: InvoicePaymentMethod;
    arisingDate?: string;
    notes?: string;
    items?: CreateEInvoiceItemDto[];
}
export declare class FindEInvoicesQueryDto {
    status?: EInvoiceStatus;
    search?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class SaveProviderConfigDto {
    providerType: ProviderType;
    apiUrl: string;
    username: string;
    password: string;
    serialCert?: string;
    taxCode: string;
    companyName: string;
    companyAddress: string;
    pattern: string;
    serial: string;
    defaultCurrency?: string;
    defaultVatRate?: number;
}
export declare class CancelEInvoiceBodyDto {
    reason: string;
}
export declare class AdjustEInvoiceBodyDto {
    reason: string;
    items?: CreateEInvoiceItemDto[];
}
export declare class ReplaceEInvoiceBodyDto {
    reason: string;
    items?: CreateEInvoiceItemDto[];
    customerName?: string;
    customerTaxCode?: string;
    customerAddress?: string;
}
export { EInvoiceData as EInvoiceResponseDto } from '../nats';
export { EInvoiceSummary as EInvoiceSummaryDto } from '../nats';
export { ProviderConfigData as ProviderConfigResponseDto } from '../nats';
export { ProviderConfigStatusData as ProviderConfigStatusDto } from '../nats';
//# sourceMappingURL=index.d.ts.map