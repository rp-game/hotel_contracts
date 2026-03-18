import { NatsResponse, NatsPaginatedResponse } from '../../common';
export declare class SupplyKitItemDto {
    itemId: string;
    quantity: number;
}
export declare class CreateSupplyKitRequest {
    tenantId: string;
    hotelId: string;
    name: string;
    department?: string;
    items: SupplyKitItemDto[];
}
export declare class SupplyKitItemResponse {
    id: string;
    itemId: string;
    itemName?: string;
    itemCode?: string;
    itemUnit?: string;
    quantity: number;
}
export declare class SupplyKitResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    department?: string;
    isActive: boolean;
    items: SupplyKitItemResponse[];
    createdAt: Date;
    updatedAt: Date;
}
export type CreateSupplyKitNatsResponse = NatsResponse<SupplyKitResponse>;
export declare class FindSupplyKitsRequest {
    tenantId: string;
    hotelId: string;
    isActive?: boolean;
    page?: number;
    limit?: number;
}
export type FindSupplyKitsNatsResponse = NatsPaginatedResponse<SupplyKitResponse>;
export declare class FindOneSupplyKitRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export type FindOneSupplyKitNatsResponse = NatsResponse<SupplyKitResponse>;
export declare class UpdateSupplyKitRequest {
    tenantId: string;
    hotelId: string;
    id: string;
    name?: string;
    department?: string;
    items?: SupplyKitItemDto[];
}
export type UpdateSupplyKitNatsResponse = NatsResponse<SupplyKitResponse>;
export declare class DeleteSupplyKitRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export type DeleteSupplyKitNatsResponse = NatsResponse<{
    success: boolean;
}>;
//# sourceMappingURL=supply-kit.nats.d.ts.map