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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';
import { NatsResponse } from '../../common';
import type { UpdateHotelChainDto, HotelChain } from '../types/hotel-chain.types';
import { BrandStandardsDto } from '../../tenants';

// ============= Existing Types (interface→class) =============

/**
 * Update Hotel Chain Request
 * Pattern: hotel-chains.update
 */
export class UpdateHotelChainNatsRequest {
  @ApiProperty({ description: 'Hotel chain ID' })
  id: string;

  @ApiProperty({ description: 'Update data' })
  updateDto: UpdateHotelChainDto;
}

export type UpdateHotelChainNatsResponse = NatsResponse<HotelChain>;

// ============= NATS Payload Classes =============

export class FindHotelChainByIdPayload {
  @ApiProperty({ description: 'Hotel chain ID' })
  id: string;
}

export class RemoveHotelChainPayload {
  @ApiProperty({ description: 'Hotel chain ID' })
  id: string;
}

export class GetChainHotelsPayload {
  @ApiProperty({ description: 'Chain ID' })
  chainId: string;
}

export class AddHotelToChainPayload {
  @ApiProperty({ description: 'Chain ID' })
  chainId: string;

  @ApiProperty({ description: 'Hotel ID to add' })
  hotelId: string;
}

export class RemoveHotelFromChainPayload {
  @ApiProperty({ description: 'Chain ID' })
  chainId: string;

  @ApiProperty({ description: 'Hotel ID to remove' })
  hotelId: string;
}

export class GetChainAnalyticsPayload {
  @ApiProperty({ description: 'Chain ID' })
  chainId: string;
}

export class GetChainPerformancePayload {
  @ApiProperty({ description: 'Chain ID' })
  chainId: string;

  @ApiProperty({ description: 'Start date' })
  startDate: string;

  @ApiProperty({ description: 'End date' })
  endDate: string;
}

export class SetBrandStandardsPayload {
  @ApiProperty({ description: 'Chain ID' })
  chainId: string;

  @ApiProperty({ description: 'Brand standards data' })
  standards: BrandStandardsDto;
}

export class GetBrandStandardsPayload {
  @ApiProperty({ description: 'Chain ID' })
  chainId: string;
}

export class SyncLoyaltyProgramsPayload {
  @ApiProperty({ description: 'Chain ID' })
  chainId: string;
}

// ============= DTOs =============

export class QueryHotelChainDto {
  @ApiPropertyOptional({ description: 'Filter by tenant ID' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Filter by status' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Filter by region' })
  @IsOptional()
  @IsString()
  region?: string;

  @ApiPropertyOptional({ description: 'Filter by market segment' })
  @IsOptional()
  @IsString()
  marketSegment?: string;

  @ApiPropertyOptional({ description: 'Page number' })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page' })
  @IsOptional()
  @IsNumber()
  limit?: number;
}

export class TopPerformingHotelDto {
  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Hotel name' })
  hotelName: string;

  @ApiProperty({ description: 'Revenue' })
  revenue: number;

  @ApiProperty({ description: 'Occupancy rate' })
  occupancyRate: number;
}

export class HotelChainAnalyticsDto {
  @ApiProperty({ description: 'Total revenue' })
  totalRevenue: number;

  @ApiProperty({ description: 'Total bookings' })
  totalBookings: number;

  @ApiProperty({ description: 'Average occupancy rate' })
  averageOccupancyRate: number;

  @ApiProperty({ description: 'Top performing hotels', type: [TopPerformingHotelDto] })
  topPerformingHotels: TopPerformingHotelDto[];
}
