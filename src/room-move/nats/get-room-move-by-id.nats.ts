/**
 * Get Room Move By ID NATS Contract
 *
 * NATS Pattern: room-move.get-by-id
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

export class GetRoomMoveByIdRequest {
  @ApiProperty({ description: 'Move request ID' })
  @IsUUID()
  @IsNotEmpty()
  moveRequestId: string;

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
export type GetRoomMoveByIdNatsResponse = NatsResponse<RoomMoveDetails>;
