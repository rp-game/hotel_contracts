/**
 * Update Room Move Status NATS Contract
 *
 * NATS Pattern: room-move.update-status
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsEnum } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
import { RoomMoveStatus } from '../enums';

export class UpdateRoomMoveStatusRequest {
  @ApiProperty({ description: 'Move request ID' })
  @IsUUID()
  @IsNotEmpty()
  moveRequestId: string;

  @ApiProperty({ description: 'New status', enum: RoomMoveStatus })
  @IsEnum(RoomMoveStatus)
  @IsNotEmpty()
  status: RoomMoveStatus;

  @ApiProperty({ description: 'User updating the status' })
  @IsString()
  @IsNotEmpty()
  updatedBy: string;

  @ApiPropertyOptional({ description: 'Update notes' })
  @IsOptional()
  @IsString()
  notes?: string;

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
export type UpdateRoomMoveStatusNatsResponse = NatsResponse<RoomMoveDetails>;
