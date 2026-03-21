/**
 * E-Invoice shared types (non-DTO, non-NATS)
 */

export interface ProviderInvoiceResult {
  success: boolean;
  fkey?: string;
  key?: string;
  invoiceNumber?: string;
  pattern?: string;
  serial?: string;
  taxOfCode?: string;
  taxAuthorityCode?: string;
  digitalSignatureSerial?: string;
  errorCode?: string;
  errorMessage?: string;
  rawResponse?: any;
}

export interface HiloResponse {
  success: boolean;
  Code?: number;
  error?: string;
  messages?: string;
  Message?: string;
  lstXmlData?: string | null;
  data?: HiloInvoiceResult[];
}

export interface HiloInvoiceResult {
  fkey: string;
  key: string;
  pattern: string;
  serial: string;
  no: string;
  TaxOfCode?: string;
  detailError?: string;
  detailMessages?: string;
}
