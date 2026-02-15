/**
 * Hotel Chains Type Definitions
 *
 * Unified contracts for both NATS messaging and REST API
 * Converted to classes with @ApiProperty for Swagger documentation
 *
 * Note: Re-exports types from other modules to avoid duplication
 */
import { HotelChainStatus, ChainType } from '../../user/types/hotel-chain.types';
export { HotelChainStatus, ChainType } from '../../user/types/hotel-chain.types';
export { HotelDto, HotelListResponseDto } from '../../inventory/nats/hotel.nats';
/**
 * Create hotel chain DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
export declare class CreateHotelChainDto {
    name: string;
    brand: string;
    type: ChainType;
    description?: string;
    headquartersCountry: string;
    headquartersCity?: string;
    headquartersAddress?: string;
    websiteUrl?: string;
    logoUrl?: string;
    status: HotelChainStatus;
    operatingRegions?: string[];
    targetMarkets?: string[];
    amenities?: string[];
    loyaltyProgram?: string;
}
/**
 * Hotel chain response DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
export declare class HotelChainResponseDto {
    id: string;
    tenantId: string;
    name: string;
    brandName: string;
    description?: string;
    headquartersCountry?: string;
    headquartersCity?: string;
    headquartersAddress?: string;
    phone: string;
    email: string;
    status: HotelChainStatus;
    regions: string[];
    operatingRegions: string[];
    marketSegments: string[];
    targetMarkets: string[];
    amenities: string[];
    totalProperties?: number;
    totalRooms?: number;
    createdAt: string;
    updatedAt: string;
    hotelCount?: number;
    countries: string[];
    cities: string[];
}
/**
 * Hotel chains list response DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
export declare class HotelChainListResponseDto {
    data: HotelChainResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
/**
 * Create hotel DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
export declare class CreateHotelDto {
    name: string;
    description?: string;
    address: string;
    city: string;
    country: string;
    phone: string;
    email: string;
    website?: string;
    stars: number;
    status: string;
    amenities?: string[];
    checkInTime: string;
    checkOutTime: string;
    timezone?: string;
    currency?: string;
    tenantId?: string;
    chainId?: string;
    roomCount?: number;
    analytics?: Record<string, any>;
}
//# sourceMappingURL=hotel-chains.types.d.ts.map