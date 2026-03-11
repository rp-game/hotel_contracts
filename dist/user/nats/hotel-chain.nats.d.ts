/**
 * Hotel Chain NATS Contracts
 *
 * Patterns:
 * - hotel-chains.findAll, findOne, create, update, remove
 * - hotel-chains.getHotels, addHotel, removeHotel
 * - hotel-chains.getAnalytics, getPerformance
 * - hotel-chains.setBrandStandards, getBrandStandards
 * - hotel-chains.syncLoyaltyPrograms
 *
 * Handler: user-service (HotelChainsNatsController)
 * Called by: api-gateway (HotelChainsService)
 */
import { NatsResponse } from '../../common';
import type { UpdateHotelChainDto, HotelChain } from '../types/hotel-chain.types';
import { BrandStandardsDto } from '../../tenants';
/**
 * Update Hotel Chain Request
 * Pattern: hotel-chains.update
 */
export declare class UpdateHotelChainNatsRequest {
    id: string;
    updateDto: UpdateHotelChainDto;
}
export type UpdateHotelChainNatsResponse = NatsResponse<HotelChain>;
export declare class FindHotelChainByIdPayload {
    id: string;
}
export declare class RemoveHotelChainPayload {
    id: string;
}
export declare class GetChainHotelsPayload {
    chainId: string;
}
export declare class AddHotelToChainPayload {
    chainId: string;
    hotelId: string;
}
export declare class RemoveHotelFromChainPayload {
    chainId: string;
    hotelId: string;
}
export declare class GetChainAnalyticsPayload {
    chainId: string;
}
export declare class GetChainPerformancePayload {
    chainId: string;
    startDate: string;
    endDate: string;
}
export declare class SetBrandStandardsPayload {
    chainId: string;
    standards: BrandStandardsDto;
}
export declare class GetBrandStandardsPayload {
    chainId: string;
}
export declare class SyncLoyaltyProgramsPayload {
    chainId: string;
}
export declare class QueryHotelChainDto {
    tenantId?: string;
    status?: string;
    region?: string;
    marketSegment?: string;
    page?: number;
    limit?: number;
}
export declare class TopPerformingHotelDto {
    hotelId: string;
    hotelName: string;
    revenue: number;
    occupancyRate: number;
}
export declare class HotelChainAnalyticsDto {
    totalRevenue: number;
    totalBookings: number;
    averageOccupancyRate: number;
    topPerformingHotels: TopPerformingHotelDto[];
}
//# sourceMappingURL=hotel-chain.nats.d.ts.map