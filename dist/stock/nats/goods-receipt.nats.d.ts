import { NatsResponse, NatsPaginatedResponse } from '../../common';
export declare class GoodsReceiptItemDto {
    itemId: string;
    quantity: number;
    unitPrice: number;
    expiryDate?: string;
}
export declare class CreateGoodsReceiptRequest {
    tenantId: string;
    hotelId: string;
    supplierId?: string;
    receiptDate: string;
    vatRate?: number;
    invoiceSerial?: string;
    invoiceNumber?: string;
    invoiceDate?: string;
    photoUrl?: string;
    notes?: string;
    receivedBy: string;
    receivedByName?: string;
    items: GoodsReceiptItemDto[];
}
export declare class GoodsReceiptItemResponse {
    id: string;
    itemId: string;
    itemName?: string;
    itemCode?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    expiryDate?: string;
}
export declare class GoodsReceiptResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    receiptNumber: string;
    supplierId?: string;
    supplierName?: string;
    receiptDate: string;
    totalAmount: number;
    vatRate?: number;
    vatAmount?: number;
    invoiceSerial?: string;
    invoiceNumber?: string;
    invoiceDate?: string;
    photoUrl?: string;
    notes?: string;
    receivedBy: string;
    receivedByName?: string;
    items: GoodsReceiptItemResponse[];
    createdAt: Date;
}
export type CreateGoodsReceiptNatsResponse = NatsResponse<GoodsReceiptResponse>;
export declare class FindGoodsReceiptsRequest {
    tenantId: string;
    hotelId: string;
    dateFrom?: string;
    dateTo?: string;
    supplierId?: string;
    page?: number;
    limit?: number;
}
export type FindGoodsReceiptsNatsResponse = NatsPaginatedResponse<GoodsReceiptResponse>;
export declare class FindOneGoodsReceiptRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export type FindOneGoodsReceiptNatsResponse = NatsResponse<GoodsReceiptResponse>;
//# sourceMappingURL=goods-receipt.nats.d.ts.map