/**
 * Hotel Chain Types
 */

/**
 * Hotel Chain Type Enum
 */
export enum ChainType {
  LUXURY = 'LUXURY',
  MIDSCALE = 'MIDSCALE',
  ECONOMY = 'ECONOMY',
  BOUTIQUE = 'BOUTIQUE',
  EXTENDED_STAY = 'EXTENDED_STAY',
  RESORT = 'RESORT',
}

/**
 * Hotel Chain Status Enum
 */
export enum HotelChainStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  SUSPENDED = 'SUSPENDED',
}

/**
 * Update Hotel Chain DTO
 * All fields are optional for partial updates
 */
export interface UpdateHotelChainDto {
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
