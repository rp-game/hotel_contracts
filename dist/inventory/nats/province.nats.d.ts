/**
 * Province NATS Contract
 *
 * Pattern: inventory.provinces.listByChain
 *
 * Returns provinces that have active hotels in a given chain.
 *
 * Handler: inventory-service
 * Called by: webshop
 */
export declare class ListProvincesByChainRequest {
    chainId: string;
}
export declare class ListProvincesByIdsRequest {
    provinceIds: number[];
}
export declare class ProvinceDto {
    id: number;
    name: string;
    nameEn: string;
    code: string;
    region?: string;
}
//# sourceMappingURL=province.nats.d.ts.map