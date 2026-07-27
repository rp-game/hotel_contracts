/**
 * Hotel Search NATS Contract
 *
 * Pattern: inventory.hotels.search
 *
 * Returns hotels in a chain with availability and lowest price
 * for a given date range. Used for hotel browsing/discovery.
 *
 * Handler: inventory-service
 * Called by: webshop (Go)
 */
import { NatsResponse } from '../../common';
export declare class SearchHotelsRequest {
    chainId?: string;
    provinceIds?: number[];
    checkInDate: string;
    checkOutDate: string;
    adults?: number;
    children?: number;
    provinceId?: number;
    stars?: number;
    sortBy?: 'price' | 'stars' | 'name';
    page?: number;
    limit?: number;
}
export declare class HotelSearchResultDto {
    id: string;
    name: string;
    description?: string;
    address: string;
    city: string;
    stars?: number;
    amenities: string[];
    images: string[];
    provinceId?: number;
    provinceName?: string;
    latitude?: number;
    longitude?: number;
    checkInTime: string;
    checkOutTime: string;
    currency: string;
    available: boolean;
    totalRoomTypes: number;
    availableRoomTypes: number;
    lowestPrice: number | null;
    lowestPricePerNight: number | null;
    lowestPriceRoomTypeName: string | null;
    numberOfNights: number;
    tenantId?: string;
}
export declare class SearchHotelsResponse {
    hotels: HotelSearchResultDto[];
    total: number;
    page: number;
    limit: number;
}
export type SearchHotelsNatsResponse = NatsResponse<SearchHotelsResponse>;
//# sourceMappingURL=hotel-search.nats.d.ts.map