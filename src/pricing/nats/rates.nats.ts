/**
 * Rates Core NATS Contracts
 *
 * Handles base rate management, dynamic calculations, and bulk operations.
 * Core pricing module for room rates and restrictions.
 */

import { ApiProperty } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';
import { Rate, DynamicRateCalculation, BulkCreateRatesResult, BulkUpdateRatesResult } from '../types';

/**
 * NATS Pattern: pricing.rates.get
 *
 * Get rates with filtering and pagination
 */
export interface GetRatesRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId?: string;
  checkIn?: string;
  startDate?: string;
  checkOut?: string;
  endDate?: string;
  guests?: number;
  channel?: string;
  page?: number;
  limit?: number;
}

export class RateDetails {
  @ApiProperty({ description: 'Weekday rate' })
  weekdayRate: number;

  @ApiProperty({ description: 'Weekend rate' })
  weekendRate: number;

  @ApiProperty({ description: 'Extra person charge' })
  extraPersonCharge: number;
}

export class RoomRateResponse {
  @ApiProperty({ description: 'Rate ID (null if no base rate configured)', nullable: true })
  id: string | null;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name from inventory service' })
  roomTypeName: string;

  @ApiProperty({ description: 'Base rate price' })
  baseRate: number;

  @ApiProperty({ description: 'Current calculated rate' })
  currentRate: number;

  @ApiProperty({ description: 'Currency code (e.g., VND, USD)' })
  currency: string;

  @ApiProperty({ description: 'Number of available rooms' })
  availableRooms: number;

  @ApiProperty({ description: 'Detailed rate breakdown', type: RateDetails })
  rateDetails: RateDetails;
}

export class GetRatesResponse {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ type: [RoomRateResponse], description: 'List of room types with their rates' })
  roomTypes: RoomRateResponse[];
}

export type GetRatesNatsResponse = NatsResponse<GetRatesResponse>;

/**
 * NATS Pattern: pricing.rates.calculate
 *
 * Calculate rate for a booking with all adjustments applied
 */
export interface CalculateRateRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  checkIn: string;
  checkOut: string;
  guests?: number;
  channel?: string;
  promoCode?: string;
  promotionCodes?: string[]; // Array of promotion codes to apply
  corporateId?: string;
  loyaltyId?: string;
  bookingType?: string;
  startTime?: string;
  endTime?: string;
}

export class CalculateRateResponse {
  @ApiProperty({ description: 'Calculated rate details', type: DynamicRateCalculation })
  data: DynamicRateCalculation;
}

export type CalculateRateNatsResponse = NatsResponse<CalculateRateResponse>;

/**
 * NATS Pattern: pricing.rates.update
 */
export interface UpdateRateRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  ratePlanId?: string;
  baseRate: number;
  startDate: string;
  endDate: string;
}

export class UpdateRateResponse {
  @ApiProperty({ description: 'Updated rate data', type: Rate })
  data: Rate;
}

export type UpdateRateNatsResponse = NatsResponse<UpdateRateResponse>;

/**
 * NATS Pattern: pricing.rates.sync
 */
export interface SyncRatesRequest {
  tenantId: string;
  hotelId: string;
  roomTypeIds?: string[];
  source?: string;
  forceSync?: boolean;
}

export class SyncRatesData {
  @ApiProperty({ description: 'Number of synced rates' })
  synced: number;

  @ApiProperty({ description: 'Number of skipped rates' })
  skipped: number;

  @ApiProperty({ description: 'Number of errors' })
  errors: number;
}

export class SyncRatesResponse {
  @ApiProperty({ description: 'Sync status data', type: SyncRatesData })
  data: SyncRatesData;
}

export type SyncRatesNatsResponse = NatsResponse<SyncRatesResponse>;

/**
 * NATS Pattern: pricing.rates.getById
 */
export interface GetRateByIdRequest {
  id: string;
  tenantId: string;
}

export class GetRateByIdResponse {
  @ApiProperty({ description: 'Rate data', type: Rate })
  data: Rate;
}

export type GetRateByIdNatsResponse = NatsResponse<GetRateByIdResponse>;

/**
 * NATS Pattern: pricing.rates.create
 */
export interface CreateRateRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  ratePlanId?: string;
  baseRate: number;
  startDate: string;
  endDate: string;
  isActive?: boolean;
}

export class CreateRateResponse {
  @ApiProperty({ description: 'Created rate data', type: Rate })
  data: Rate;
}

export type CreateRateNatsResponse = NatsResponse<CreateRateResponse>;

/**
 * NATS Pattern: pricing.rates.updateById
 */
export interface UpdateRateByIdRequest {
  id: string;
  tenantId: string;
  hotelId: string;
  ratePlanId?: string;
  baseRate?: number;
  startDate?: string;
  endDate?: string;
}

export interface UpdateRateByIdResponse {
  data: Rate;
}

export type UpdateRateByIdNatsResponse = NatsResponse<UpdateRateByIdResponse>;

/**
 * NATS Pattern: pricing.rates.delete
 */
export interface DeleteRateRequest {
  id: string;
  tenantId: string;
}

export interface DeleteRateResponse {
  success: boolean;
  message: string;
}

export type DeleteRateNatsResponse = NatsResponse<DeleteRateResponse>;

/**
 * NATS Pattern: pricing.rates.getByRoomType
 */
export interface GetRatesByRoomTypeRequest {
  roomTypeId: string;
  query: {
    startDate?: string;
    endDate?: string;
    ratePlanId?: string;
  };
}

export interface GetRatesByRoomTypeResponse {
  data: Rate[];
}

export type GetRatesByRoomTypeNatsResponse = NatsResponse<GetRatesByRoomTypeResponse>;

/**
 * NATS Pattern: pricing.rates.bulk.create
 */
export interface BulkCreateRatesRequest {
  tenantId: string;
  hotelId: string;
  rates: Array<{
    roomTypeId: string;
    ratePlanId?: string;
    baseRate: number;
    dateFrom: string;
    dateTo: string;
    status?: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
  }>;
}

export interface BulkCreateRatesResponse {
  data: BulkCreateRatesResult;
}

export type BulkCreateRatesNatsResponse = NatsResponse<BulkCreateRatesResponse>;

/**
 * NATS Pattern: pricing.rates.bulk.update
 */
export interface BulkUpdateRatesRequest {
  tenantId: string;
  hotelId: string;
  updates: Array<{
    id: string;
    data: {
      baseRate?: number;
      effectiveFrom?: string;
      effectiveTo?: string;
    };
  }>;
}

export interface BulkUpdateRatesResponse {
  data: BulkUpdateRatesResult;
}

export type BulkUpdateRatesNatsResponse = NatsResponse<BulkUpdateRatesResponse>;

/**
 * NATS Pattern: pricing.rates.dynamic.calculate
 */
export interface CalculateDynamicRateRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  checkIn: string;
  checkOut: string;
  guests?: number;
}

export interface CalculateDynamicRateResponse {
  data: DynamicRateCalculation;
}

export type CalculateDynamicRateNatsResponse = NatsResponse<CalculateDynamicRateResponse>;

/**
 * NATS Pattern: pricing.rate.update
 */
export interface RateUpdateRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  ratePlanId: string;
  date: string;
  basePrice: number;
  extraAdultCharge?: number;
  extraChildCharge?: number;
  source: string;
  trackingId?: string;
}

export interface RateUpdateResponse {
  success: boolean;
  message: string;
  source: string;
}

export type RateUpdateNatsResponse = NatsResponse<RateUpdateResponse>;

/**
 * NATS Pattern: pricing.restrictions.update
 */
export interface RestrictionsUpdateRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  ratePlanId: string;
  date: string;
  restrictions: {
    minStay: number;
    maxStay: number;
    closedToArrival: boolean;
    closedToDeparture: boolean;
    stopSell: boolean;
  };
  source: string;
  trackingId?: string;
}

export interface RestrictionsUpdateResponse {
  success: boolean;
  message: string;
  source: string;
  reason?: string;
}

export type RestrictionsUpdateNatsResponse = NatsResponse<RestrictionsUpdateResponse>;
