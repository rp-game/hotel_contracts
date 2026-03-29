import { NatsResponse } from '../../common';
export declare class MinibarTemplateItemDto {
    itemId: string;
    standardQuantity: number;
    sellingPrice?: number;
}
export declare class CreateMinibarTemplateRequest {
    tenantId: string;
    hotelId: string;
    name: string;
    roomTypeId: string;
    description?: string;
    items: MinibarTemplateItemDto[];
}
export declare class UpdateMinibarTemplateRequest {
    tenantId: string;
    hotelId: string;
    id: string;
    name?: string;
    description?: string;
    isActive?: boolean;
    items?: MinibarTemplateItemDto[];
}
export declare class FindMinibarTemplatesRequest {
    tenantId: string;
    hotelId?: string;
    roomTypeId?: string;
    isActive?: boolean;
}
export declare class FindOneMinibarTemplateRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export declare class DeleteMinibarTemplateRequest {
    tenantId: string;
    hotelId: string;
    id: string;
}
export declare class MinibarTemplateItemResponse {
    id: string;
    itemId: string;
    itemCode: string;
    itemName: string;
    unit: string;
    standardQuantity: number;
    sellingPrice: number;
}
export declare class MinibarTemplateResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    roomTypeId: string;
    roomTypeName?: string;
    description?: string;
    isActive: boolean;
    items: MinibarTemplateItemResponse[];
    createdAt: string;
}
export type CreateMinibarTemplateNatsResponse = NatsResponse<MinibarTemplateResponse>;
export type FindMinibarTemplatesNatsResponse = NatsResponse<MinibarTemplateResponse[]>;
export type FindOneMinibarTemplateNatsResponse = NatsResponse<MinibarTemplateResponse>;
export type UpdateMinibarTemplateNatsResponse = NatsResponse<MinibarTemplateResponse>;
export type DeleteMinibarTemplateNatsResponse = NatsResponse<{
    deleted: boolean;
}>;
//# sourceMappingURL=minibar-template.nats.d.ts.map