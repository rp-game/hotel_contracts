/**
 * Hotel Chain Types
 */
/**
 * Hotel Chain Type Enum
 */
export declare enum ChainType {
    LUXURY = "LUXURY",
    MIDSCALE = "MIDSCALE",
    ECONOMY = "ECONOMY",
    BOUTIQUE = "BOUTIQUE",
    EXTENDED_STAY = "EXTENDED_STAY",
    RESORT = "RESORT"
}
/**
 * Hotel Chain Status Enum
 */
export declare enum HotelChainStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    PENDING = "PENDING",
    SUSPENDED = "SUSPENDED"
}
/**
 * Update Hotel Chain DTO
 * All fields are optional for partial updates
 */
export declare class UpdateHotelChainDto {
    name?: string;
    brand?: string;
    type?: ChainType;
    description?: string;
    headquartersCountry?: string;
    headquartersCity?: string;
    headquartersAddress?: string;
    websiteUrl?: string;
    logoUrl?: string;
    status?: HotelChainStatus;
    operatingRegions?: string[];
    targetMarkets?: string[];
    amenities?: string[];
    loyaltyProgram?: string;
    totalProperties?: number;
    totalRooms?: number;
}
/**
 * Hotel Chain Entity
 */
export interface HotelChain {
    id: string;
    name: string;
    brand?: string;
    type: ChainType;
    description?: string;
    headquartersCountry?: string;
    headquartersCity?: string;
    headquartersAddress?: string;
    websiteUrl?: string;
    logoUrl?: string;
    status: HotelChainStatus;
    operatingRegions?: string[];
    targetMarkets?: string[];
    amenities?: string[];
    loyaltyProgram?: string;
    totalProperties?: number;
    totalRooms?: number;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=hotel-chain.types.d.ts.map