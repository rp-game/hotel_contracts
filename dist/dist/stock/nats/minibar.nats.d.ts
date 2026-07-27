import { NatsResponse } from '../../common';
export declare class MinibarCheckItemDto {
    itemId: string;
    consumedQty: number;
    isComplimentary?: boolean;
}
export declare class SubmitMinibarCheckRequest {
    tenantId: string;
    hotelId: string;
    roomId: string;
    roomNumber?: string;
    bookingId?: string;
    warehouseId?: string;
    items: MinibarCheckItemDto[];
    checkedBy?: string;
    checkedByName?: string;
}
export declare class MinibarChargedItem {
    itemId: string;
    itemName: string;
    quantity: number;
    sellingPrice: number;
    totalCharge: number;
    isComplimentary: boolean;
}
export declare class MinibarRestockSuggestion {
    itemId: string;
    itemName: string;
    consumedQty: number;
    standardQty: number;
    suggestedRestockQty: number;
}
export declare class MinibarCheckResponse {
    issueId?: string;
    chargedItems: MinibarChargedItem[];
    totalCharged: number;
    bookingChargeSuccess?: boolean;
    restockSuggestions?: MinibarRestockSuggestion[];
}
export type SubmitMinibarCheckNatsResponse = NatsResponse<MinibarCheckResponse>;
export declare class GetMinibarStatusRequest {
    tenantId: string;
    hotelId: string;
    roomId: string;
    bookingId?: string;
}
export declare class MinibarStatusResponse {
    checked: boolean;
    lastCheckedAt?: string;
    lastCheckedBy?: string;
    totalCharged?: number;
    issueId?: string;
}
export type GetMinibarStatusNatsResponse = NatsResponse<MinibarStatusResponse>;
export declare class GetMinibarHistoryRequest {
    tenantId: string;
    hotelId: string;
    roomId?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class MinibarHistoryEntry {
    issueId: string;
    roomId: string;
    roomNumber?: string;
    bookingId?: string;
    checkedAt: string;
    checkedBy: string;
    checkedByName?: string;
    totalCharged: number;
    itemCount: number;
}
export declare class MinibarHistoryResponse {
    data: MinibarHistoryEntry[];
    total: number;
    page: number;
    limit: number;
}
export type GetMinibarHistoryNatsResponse = NatsResponse<MinibarHistoryResponse>;
//# sourceMappingURL=minibar.nats.d.ts.map