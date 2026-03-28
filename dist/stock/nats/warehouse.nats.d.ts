import { NatsResponse } from '../../common';
export declare class CreateWarehouseRequest {
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    isDefault?: boolean;
}
export declare class UpdateWarehouseRequest {
    tenantId: string;
    hotelId: string;
    id: string;
    name?: string;
    description?: string;
    isDefault?: boolean;
    isActive?: boolean;
}
export declare class FindWarehousesRequest {
    tenantId: string;
    hotelId: string;
    isActive?: boolean;
}
export declare class DeleteWarehouseRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export declare class GetItemWarehouseStockRequest {
    tenantId: string;
    hotelId: string;
    itemId: string;
}
export declare class WarehouseResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    isDefault: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class WarehouseStockItemResponse {
    warehouseId: string;
    warehouseName: string;
    currentStock: number;
    averageCostPrice: number;
}
export type CreateWarehouseNatsResponse = NatsResponse<WarehouseResponse>;
export type UpdateWarehouseNatsResponse = NatsResponse<WarehouseResponse>;
export type FindWarehousesNatsResponse = NatsResponse<WarehouseResponse[]>;
export type DeleteWarehouseNatsResponse = NatsResponse<{
    success: boolean;
}>;
export type GetItemWarehouseStockNatsResponse = NatsResponse<WarehouseStockItemResponse[]>;
//# sourceMappingURL=warehouse.nats.d.ts.map