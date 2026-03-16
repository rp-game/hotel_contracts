/**
 * Execute Room Move NATS Contract
 *
 * NATS Pattern: room-move.execute
 * Handler: booking-service
 * Called by: api-gateway
 * Modes: standard, mobile-start, mobile-complete, quick-transfer
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsNumber } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

export class ExecuteRoomMoveRequest {
  @ApiProperty({ description: 'Move request ID' })
  @IsUUID()
  @IsNotEmpty()
  moveRequestId: string;

  @ApiProperty({ description: 'User executing the move' })
  @IsString()
  @IsNotEmpty()
  executedBy: string;

  @ApiPropertyOptional({ description: 'Execution mode', enum: ['standard', 'mobile-start', 'mobile-complete', 'quick-transfer'] })
  @IsOptional()
  @IsString()
  mode?: 'standard' | 'mobile-start' | 'mobile-complete' | 'quick-transfer';

  @ApiPropertyOptional({ description: 'Actual duration in minutes' })
  @IsOptional()
  @IsNumber()
  actualDuration?: number;

  @ApiPropertyOptional({ description: 'Execution notes' })
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
export type ExecuteRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
