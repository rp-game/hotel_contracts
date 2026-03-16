/**
 * Cancel Room Move NATS Contract
 *
 * NATS Pattern: room-move.cancel
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsBoolean } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

export class CancelRoomMoveRequest {
  @ApiProperty({ description: 'Move request ID' })
  @IsUUID()
  @IsNotEmpty()
  moveRequestId: string;

  @ApiProperty({ description: 'User cancelling the move' })
  @IsString()
  @IsNotEmpty()
  cancelledBy: string;

  @ApiProperty({ description: 'Cancellation reason' })
  @IsString()
  @IsNotEmpty()
  reason: string;

  @ApiPropertyOptional({ description: 'Whether refund is applicable' })
  @IsOptional()
  @IsBoolean()
  refundApplicable?: boolean;

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
export type CancelRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
