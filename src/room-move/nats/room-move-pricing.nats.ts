/**
 * Room Move Pricing NATS Contracts
 *
 * NATS Patterns:
 * - room-move.pricing.calculate
 * - room-move.pricing.quick-estimate
 * Handler: pricing-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsDateString } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMovePricingDetails } from '../types';

/**
 * Calculate Room Move Pricing Request
 * Pattern: room-move.pricing.calculate
 */
export class CalculateRoomMovePricingRequest {
  @ApiProperty({ description: 'Booking ID' })
  @IsUUID()
  @IsNotEmpty()
  bookingId: string;

  @ApiProperty({ description: 'Current room ID' })
  @IsUUID()
  @IsNotEmpty()
  currentRoomId: string;

  @ApiProperty({ description: 'Target room ID' })
  @IsUUID()
  @IsNotEmpty()
  targetRoomId: string;

  @ApiPropertyOptional({ description: 'Check-in date (ISO date)' })
  @IsOptional()
  @IsDateString()
  checkInDate?: string;

  @ApiPropertyOptional({ description: 'Check-out date (ISO date)' })
  @IsOptional()
  @IsDateString()
  checkOutDate?: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  @IsNotEmpty()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  @IsNotEmpty()
  hotelId: string;
}

/**
 * Type-safe NATS response wrapper
 */
export type CalculateRoomMovePricingNatsResponse = NatsResponse<RoomMovePricingDetails>;

/**
 * Quick Room Move Pricing Estimate Request
 * Pattern: room-move.pricing.quick-estimate
 * Faster calculation with fewer details
 */
export class QuickRoomMovePricingEstimateRequest {
  @ApiProperty({ description: 'Current room ID' })
  @IsUUID()
  @IsNotEmpty()
  currentRoomId: string;

  @ApiProperty({ description: 'Target room ID' })
  @IsUUID()
  @IsNotEmpty()
  targetRoomId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  @IsNotEmpty()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  @IsNotEmpty()
  hotelId: string;
}

/**
 * Type-safe NATS response wrapper
 */
export type QuickRoomMovePricingEstimateNatsResponse = NatsResponse<RoomMovePricingDetails>;
