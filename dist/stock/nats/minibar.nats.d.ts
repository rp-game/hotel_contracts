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
    checkedBy: string;
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
//# sourceMappingURL=minibar.nats.d.ts.map