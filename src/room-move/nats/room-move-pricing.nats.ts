import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMovePricingDetails } from '../types';

/**
 * Calculate Room Move Pricing Request
 * Pattern: room-move.pricing.calculate
 * Handler: pricing-service
 */
export interface CalculateRoomMovePricingRequest {
  bookingId: string;
  currentRoomId: string;
  targetRoomId: string;
  checkInDate?: string; // ISO date
  checkOutDate?: string; // ISO date
  tenantId: string;
  hotelId: string;
}

/**
 * Calculate Room Move Pricing Response
 */
export interface CalculateRoomMovePricingNatsResponse extends NatsResponse<RoomMovePricingDetails> {}

/**
 * Quick Room Move Pricing Estimate Request
 * Pattern: room-move.pricing.quick-estimate
 * Handler: pricing-service
 * Faster calculation with fewer details
 */
export interface QuickRoomMovePricingEstimateRequest {
  currentRoomId: string;
  targetRoomId: string;
  tenantId: string;
  hotelId: string;
}

/**
 * Quick Room Move Pricing Estimate Response
 */
export interface QuickRoomMovePricingEstimateNatsResponse extends NatsResponse<RoomMovePricingDetails> {}
