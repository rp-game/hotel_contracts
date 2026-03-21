/**
 * E-Invoice Domain NATS Message Contracts
 *
 * Patterns:
 * - einvoice.create
 * - einvoice.create_from_invoice
 * - einvoice.update
 * - einvoice.issue
 * - einvoice.delete
 * - einvoice.find_all
 * - einvoice.find_one
 * - einvoice.get_pdf
 * - einvoice.get_html
 * - einvoice.provider_config.save
 * - einvoice.provider_config.get
 *
 * Handler: payment-service (einvoice module)
 */
import { NatsResponse, NatsPaginatedResponse } from '../../common/nats-response.interface';
import { EInvoiceStatus, CustomerType, InvoicePaymentMethod, ProviderType, EInvoiceAction } from '../enums';
/**
 * Input item for create/update requests (computed fields optional — service calculates them)
 */
export declare class EInvoiceItemInput {
    orderBy: number;
    code?: string;
    name: string;
    unit?: string;
    quantity: number;
    unitPrice: number;
    vatRate: number;
    discount?: number;
}
/**
 * Full item data with computed fields (for responses)
 */
export declare class EInvoiceItemData extends EInvoiceItemInput {
    subtotal: number;
    vatAmount: number;
    total: number;
    discountAmount?: number;
}
export declare class EInvoiceHistoryData {
    id: string;
    action: EInvoiceAction;
    performedBy?: string;
    performedByName?: string;
    details?: any;
    createdAt: string;
}
export declare class EInvoiceData {
    id: string;
    tenantId: string;
    hotelId: string;
    invoiceId?: string;
    invoiceCode: string;
    status: EInvoiceStatus;
    providerType: ProviderType;
    providerFkey: string;
    providerKey?: string;
    invoiceNumber?: string;
    pattern: string;
    serial: string;
    customerType: CustomerType;
    customerName?: string;
    customerTaxCode?: string;
    customerAddress?: string;
    customerEmail?: string;
    customerPhone?: string;
    buyerName?: string;
    paymentMethod: InvoicePaymentMethod;
    currency: string;
    subtotal: number;
    vatAmount: number;
    totalAmount: number;
    amountInWords?: string;
    arisingDate: string;
    issuedAt?: string;
    notes?: string;
    createdBy?: string;
    createdByName?: string;
    createdAt: string;
    updatedAt: string;
    items?: EInvoiceItemData[];
    history?: EInvoiceHistoryData[];
}
export declare class EInvoiceSummary {
    id: string;
    invoiceCode: string;
    status: EInvoiceStatus;
    invoiceNumber?: string;
    customerName?: string;
    buyerName?: string;
    customerType: CustomerType;
    totalAmount: number;
    arisingDate: string;
    paymentMethod: InvoicePaymentMethod;
    createdAt: string;
}
export declare class ProviderConfigData {
    id: string;
    tenantId: string;
    hotelId?: string;
    providerType: ProviderType;
    isActive: boolean;
    apiUrl: string;
    username: string;
    serialCert?: string;
    taxCode: string;
    companyName: string;
    companyAddress: string;
    pattern: string;
    serial: string;
    defaultCurrency?: string;
    defaultVatRate?: number;
}
export declare const EINVOICE_PATTERNS: {
    readonly CREATE: "einvoice.create";
    readonly CREATE_FROM_INVOICE: "einvoice.create_from_invoice";
    readonly UPDATE: "einvoice.update";
    readonly ISSUE: "einvoice.issue";
    readonly DELETE: "einvoice.delete";
    readonly FIND_ALL: "einvoice.find_all";
    readonly FIND_ONE: "einvoice.find_one";
    readonly GET_PDF: "einvoice.get_pdf";
    readonly GET_HTML: "einvoice.get_html";
    readonly PROVIDER_CONFIG_SAVE: "einvoice.provider_config.save";
    readonly PROVIDER_CONFIG_GET: "einvoice.provider_config.get";
    readonly PROVIDER_CONFIG_STATUS: "einvoice.provider_config.status";
    readonly PROVIDER_CONFIG_DELETE: "einvoice.provider_config.delete";
    readonly CANCEL: "einvoice.cancel";
    readonly ADJUST: "einvoice.adjust";
    readonly REPLACE: "einvoice.replace";
};
export declare class CreateEInvoiceNatsRequest {
    tenantId: string;
    hotelId: string;
    userId?: string;
    userName?: string;
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
    items: EInvoiceItemInput[];
}
export declare class CreateEInvoiceFromInvoiceNatsRequest {
    tenantId: string;
    hotelId: string;
    userId?: string;
    userName?: string;
    invoiceId: string;
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
export declare class UpdateEInvoiceNatsRequest {
    tenantId: string;
    hotelId: string;
    id: string;
    userId?: string;
    userName?: string;
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
    items?: EInvoiceItemInput[];
}
export declare class IssueEInvoiceNatsRequest {
    tenantId: string;
    hotelId: string;
    id: string;
    userId?: string;
    userName?: string;
}
export declare class DeleteEInvoiceNatsRequest {
    tenantId: string;
    hotelId: string;
    id: string;
    userId?: string;
    userName?: string;
}
export declare class FindEInvoicesNatsRequest {
    tenantId: string;
    hotelId?: string;
    status?: EInvoiceStatus;
    search?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class FindEInvoiceNatsRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export declare class GetEInvoicePdfNatsRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export declare class GetEInvoiceHtmlNatsRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export declare class SaveProviderConfigNatsRequest {
    tenantId: string;
    hotelId?: string;
    scope?: 'chain';
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
export declare class GetProviderConfigNatsRequest {
    tenantId: string;
    hotelId: string;
}
export declare class GetProviderConfigStatusNatsRequest {
    tenantId: string;
    hotelId: string;
}
export declare class DeleteProviderConfigNatsRequest {
    tenantId: string;
    hotelId: string;
}
export declare class ProviderConfigStatusData {
    source: 'HOTEL' | 'CHAIN' | 'NONE';
    config?: ProviderConfigData | null;
    chainConfig?: ProviderConfigData | null;
    hasOwnConfig: boolean;
}
export declare class CancelEInvoiceNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    reason: string;
    userId?: string;
    userName?: string;
}
export declare class AdjustEInvoiceNatsRequest {
    originalEInvoiceId: string;
    tenantId: string;
    hotelId: string;
    reason: string;
    items?: EInvoiceItemInput[];
    userId?: string;
    userName?: string;
}
export declare class ReplaceEInvoiceNatsRequest {
    originalEInvoiceId: string;
    tenantId: string;
    hotelId: string;
    reason: string;
    items?: EInvoiceItemInput[];
    customerName?: string;
    customerTaxCode?: string;
    customerAddress?: string;
    userId?: string;
    userName?: string;
}
export type CreateEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type CreateEInvoiceFromInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type UpdateEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type IssueEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type DeleteEInvoiceNatsResponse = NatsResponse<{
    id: string;
}>;
export type FindEInvoicesNatsResponse = NatsPaginatedResponse<EInvoiceSummary>;
export type FindEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type GetEInvoicePdfNatsResponse = NatsResponse<{
    pdf: string;
}>;
export type GetEInvoiceHtmlNatsResponse = NatsResponse<{
    html: string;
}>;
export type SaveProviderConfigNatsResponse = NatsResponse<ProviderConfigData>;
export type GetProviderConfigNatsResponse = NatsResponse<ProviderConfigData>;
export type GetProviderConfigStatusNatsResponse = NatsResponse<ProviderConfigStatusData>;
export type DeleteProviderConfigNatsResponse = NatsResponse<{
    deleted: boolean;
}>;
export type CancelEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type AdjustEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
export type ReplaceEInvoiceNatsResponse = NatsResponse<EInvoiceData>;
//# sourceMappingURL=index.d.ts.map