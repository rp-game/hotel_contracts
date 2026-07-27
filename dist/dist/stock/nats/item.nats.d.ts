import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { ItemCategory } from '../enums';
export declare class FindItemsRequest {
    tenantId: string;
    category?: ItemCategory;
    search?: string;
    lowStock?: boolean;
    isMinibarItem?: boolean;
    isActive?: boolean;
    page?: number;
    limit?: number;
}
export declare class ItemResponse {
    id: string;
    tenantId: string;
    code: string;
    name: string;
    category: ItemCategory;
    subCategory?: string;
    unit: string;
    averageCostPrice?: number;
    sellingPrice?: number;
    reorderLevel?: number;
    currentStock: number;
    storageLocation?: string;
    isActive: boolean;
    isMinibarItem?: boolean;
    isPerGuestAmenity?: boolean;
    hasExpiry?: boolean;
    imageUrl?: string;
    notes?: string;
    purchaseUnit?: string;
    purchaseConversionFactor?: number;
    createdAt: Date;
    updatedAt: Date;
}
export type FindItemsNatsResponse = NatsPaginatedResponse<ItemResponse>;
export declare class FindOneItemRequest {
    tenantId: string;
    id?: string;
}
export declare class ItemDetailResponse extends ItemResponse {
    movements?: any[];
}
export type FindOneItemNatsResponse = NatsResponse<ItemDetailResponse>;
export declare class CreateItemRequest {
    tenantId: string;
    code?: string;
    name: string;
    category: ItemCategory;
    subCategory?: string;
    unit: string;
    sellingPrice?: number;
    reorderLevel?: number;
    currentStock?: number;
    storageLocation?: string;
    isMinibarItem?: boolean;
    isPerGuestAmenity?: boolean;
    hasExpiry?: boolean;
    imageUrl?: string;
    notes?: string;
    purchaseUnit?: string;
    purchaseConversionFactor?: number;
}
export type CreateItemNatsResponse = NatsResponse<ItemResponse>;
export declare class UpdateItemRequest {
    tenantId: string;
    id: string;
    name?: string;
    category?: ItemCategory;
    subCategory?: string;
    unit?: string;
    sellingPrice?: number;
    reorderLevel?: number;
    storageLocation?: string;
    isMinibarItem?: boolean;
    isPerGuestAmenity?: boolean;
    hasExpiry?: boolean;
    imageUrl?: string;
    notes?: string;
    purchaseUnit?: string;
    purchaseConversionFactor?: number;
}
export type UpdateItemNatsResponse = NatsResponse<ItemResponse>;
export declare class DeleteItemRequest {
    tenantId: string;
    id: string;
}
export type DeleteItemNatsResponse = NatsResponse<{
    success: boolean;
}>;
//# sourceMappingURL=item.nats.d.ts.map