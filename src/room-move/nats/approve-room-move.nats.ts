/**
 * Approve Room Move NATS Contract
 *
 * NATS Pattern: room-move.approve
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsBoolean, IsNumber } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

export class ApproveRoomMoveRequest {
  @ApiProperty({ description: 'Move request ID' })
  @IsUUID()
  @IsNotEmpty()
  moveRequestId: string;

  @ApiProperty({ description: 'Whether the move is approved (true) or rejected (false)' })
  @IsBoolean()
  @IsNotEmpty()
  approved: boolean;

  @ApiProperty({ description: 'User approving the move' })
  @IsString()
  @IsNotEmpty()
  approvedBy: string;

  @ApiPropertyOptional({ description: 'Name of user approving the move' })
  @IsOptional()
  @IsString()
  approvedByName?: string;

  @ApiPropertyOptional({ description: 'Approval notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Approval notes (alias)' })
  @IsOptional()
  @IsString()
  approvalNotes?: string;

  @ApiPropertyOptional({ description: 'Rejection reason (when approved=false)' })
  @IsOptional()
  @IsString()
  rejectionReason?: string;

  @ApiPropertyOptional({ description: 'Target room ID (override)' })
  @IsOptional()
  @IsUUID()
  targetRoomId?: string;

  @ApiPropertyOptional({ description: 'Target room number' })
  @IsOptional()
  @IsString()
  targetRoomNumber?: string;

  @ApiPropertyOptional({ description: 'Target room type ID' })
  @IsOptional()
  @IsUUID()
  targetRoomTypeId?: string;

  @ApiPropertyOptional({ description: 'Rate difference' })
  @IsOptional()
  @IsNumber()
  rateDifference?: number;

  @ApiPropertyOptional({ description: 'Additional charges' })
  @IsOptional()
  @IsNumber()
  additionalCharges?: number;

  @ApiPropertyOptional({ description: 'Refund amount' })
  @IsOptional()
  @IsNumber()
  refundAmount?: number;

  @ApiPropertyOptional({ description: 'Whether charges are required' })
  @IsOptional()
  @IsBoolean()
  isChargeRequired?: boolean;

  @ApiPropertyOptional({ description: 'Whether guest approval is required' })
  @IsOptional()
  @IsBoolean()
  guestApprovalRequired?: boolean;

  @ApiPropertyOptional({ description: 'Scheduled move time (ISO datetime)' })
  @IsOptional()
  @IsString()
  scheduledMoveTime?: string;

  @ApiPropertyOptional({ description: 'Estimated duration in minutes' })
  @IsOptional()
  @IsNumber()
  estimatedDurationMinutes?: number;

  @ApiPropertyOptional({ description: 'Whether porter is required' })
  @IsOptional()
  @IsBoolean()
  porterRequired?: boolean;

  @ApiPropertyOptional({ description: 'Assigned porter ID' })
  @IsOptional()
  @IsUUID()
  assignedPorterId?: string;

  @ApiPropertyOptional({ description: 'Assigned porter name' })
  @IsOptional()
  @IsString()
  assignedPorterName?: string;

  // Notification settings
  @ApiPropertyOptional({ description: 'Whether to notify guest' })
  @IsOptional()
  @IsBoolean()
  notifyGuest?: boolean;

  @ApiPropertyOptional({ description: 'Whether to notify housekeeping' })
  @IsOptional()
  @IsBoolean()
  notifyHousekeeping?: boolean;

  @ApiPropertyOptional({ description: 'Whether to generate key cards' })
  @IsOptional()
  @IsBoolean()
  generateKeyCards?: boolean;

  @ApiPropertyOptional({ description: 'Guest approval message' })
  @IsOptional()
  @IsString()
  guestApprovalMessage?: string;

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
export type ApproveRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
