export declare class ListZaloTemplatesNatsRequest {
    tenantId: string;
    hotelId?: string;
    offset?: number;
    limit?: number;
    status?: string;
}
export declare class ZaloTemplateListItemDto {
    templateId: number;
    templateName: string;
    createdTime: number;
    status: string;
    templateQuality?: string;
}
export declare class ListZaloTemplatesNatsResponse {
    data: ZaloTemplateListItemDto[];
    total: number;
}
export declare class GetZaloTemplateDetailNatsRequest {
    tenantId: string;
    hotelId?: string;
    templateId: string;
}
export declare class ZaloTemplateParamDto {
    name: string;
    require: boolean;
    type: string;
    maxLength?: number;
    minLength?: number;
    acceptedValues?: string;
}
export declare class ZaloTemplateButtonDto {
    title: string;
    type: number;
    payload?: string;
}
export declare class ZaloTemplateDetailDto {
    templateId: number;
    templateName: string;
    status: string;
    listParams?: ZaloTemplateParamDto[];
    listButtons?: ZaloTemplateButtonDto[];
    previewUrl?: string;
    templateTag?: string;
    price?: number;
    timeout?: number;
}
export declare class GetZaloTemplateDetailNatsResponse {
    data: ZaloTemplateDetailDto;
}
export declare class GetZaloTemplateSampleDataNatsRequest {
    tenantId: string;
    hotelId?: string;
    templateId: string;
}
export declare class GetZaloTemplateSampleDataNatsResponse {
    data: Record<string, any>;
}
//# sourceMappingURL=zalo-template.nats.d.ts.map