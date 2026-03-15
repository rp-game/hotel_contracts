/**
 * Room Move REST DTOs
 * REST request/response shapes for room-move endpoints.
 * Request DTOs: what the controller @Body() receives (no tenantId/hotelId — from headers/JWT)
 * Response DTOs: what Swagger shows
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsUUID, IsBoolean, IsNumber, IsDateString } from 'class-validator';
import { RoomMovePriority, RoomMoveReason, RoomMoveStatus } from '../enums';

// ============= REQUEST DTOs =============

export class InitiateRoomMoveDto {
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

  @ApiProperty({ description: 'Reason for room move', enum: RoomMoveReason })
  @IsEnum(RoomMoveReason)
  @IsNotEmpty()
  reason: RoomMoveReason;

  @ApiPropertyOptional({ description: 'Move priority level', enum: RoomMovePriority })
  @IsOptional()
  @IsEnum(RoomMovePriority)
  priority?: RoomMovePriority;

  @ApiPropertyOptional({ description: 'Description / additional details' })
  @IsOptional()
  @IsString()
  description?: string;
}

export class ApproveRoomMoveDto {
  @ApiPropertyOptional({ description: 'Approval notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class RejectRoomMoveDto {
  @ApiProperty({ description: 'Rejection reason' })
  @IsString()
  @IsNotEmpty()
  reason: string;

  @ApiPropertyOptional({ description: 'Additional notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class ScheduleRoomMoveDto {
  @ApiProperty({ description: 'Scheduled move time (ISO 8601)' })
  @IsDateString()
  @IsNotEmpty()
  scheduledMoveTime: string;

  @ApiPropertyOptional({ description: 'Estimated duration in minutes' })
  @IsOptional()
  @IsNumber()
  estimatedDurationMinutes?: number;

  @ApiPropertyOptional({ description: 'Scheduling notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class ExecuteRoomMoveDto {
  @ApiPropertyOptional({ description: 'Execution notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class CancelRoomMoveDto {
  @ApiPropertyOptional({ description: 'Cancellation reason' })
  @IsOptional()
  @IsString()
  reason?: string;
}

export class QuickTransferRoomDto {
  @ApiProperty({ description: 'New room ID to transfer to' })
  @IsUUID()
  @IsNotEmpty()
  newRoomId: string;

  @ApiPropertyOptional({ description: 'Transfer notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class CalculateMovePricingDto {
  @ApiProperty({ description: 'Booking ID' })
  @IsUUID()
  @IsNotEmpty()
  bookingId: string;

  @ApiProperty({ description: 'Target room ID' })
  @IsUUID()
  @IsNotEmpty()
  targetRoomId: string;

  @ApiPropertyOptional({ description: 'Check-in date (ISO 8601)' })
  @IsOptional()
  @IsDateString()
  checkInDate?: string;

  @ApiPropertyOptional({ description: 'Check-out date (ISO 8601)' })
  @IsOptional()
  @IsDateString()
  checkOutDate?: string;
}

// ============= RESPONSE DTOs =============

export class RoomMoveResponseDto {
  @ApiProperty({ description: 'Move request ID' }) id: string;
  @ApiProperty({ description: 'Booking ID' }) bookingId: string;
  @ApiProperty({ description: 'Current room ID' }) currentRoomId: string;
  @ApiPropertyOptional({ description: 'Current room number' }) currentRoomNumber?: string;
  @ApiPropertyOptional({ description: 'Target room ID' }) targetRoomId?: string;
  @ApiPropertyOptional({ description: 'Target room number' }) targetRoomNumber?: string;
  @ApiProperty({ description: 'Move reason' }) reason: string;
  @ApiProperty({ description: 'Move status', enum: RoomMoveStatus }) status: RoomMoveStatus;
  @ApiProperty({ description: 'Move priority', enum: RoomMovePriority }) priority: RoomMovePriority;
  @ApiPropertyOptional({ description: 'Move type' }) moveType?: string;
  @ApiPropertyOptional({ description: 'Rate difference' }) rateDifference?: number;
  @ApiPropertyOptional({ description: 'Additional charges' }) additionalCharges?: number;
  @ApiPropertyOptional({ description: 'Refund amount' }) refundAmount?: number;
  @ApiProperty({ description: 'Requested by user ID' }) requestedBy: string;
  @ApiPropertyOptional({ description: 'Requested by user name' }) requestedByName?: string;
  @ApiProperty({ description: 'Request timestamp' }) requestedAt: string;
  @ApiPropertyOptional({ description: 'Approved by user ID' }) approvedBy?: string;
  @ApiPropertyOptional({ description: 'Approval timestamp' }) approvedAt?: string;
  @ApiPropertyOptional({ description: 'Scheduled move time' }) scheduledMoveTime?: string;
  @ApiPropertyOptional({ description: 'Executed by user ID' }) executedBy?: string;
  @ApiPropertyOptional({ description: 'Execution timestamp' }) executedAt?: string;
  @ApiPropertyOptional({ description: 'Description' }) description?: string;
}

export class RoomMoveSearchResponseDto {
  @ApiProperty({ type: [RoomMoveResponseDto] }) moves: RoomMoveResponseDto[];
  @ApiProperty({ description: 'Total count' }) total: number;
  @ApiProperty({ description: 'Current page' }) page: number;
  @ApiProperty({ description: 'Items per page' }) limit: number;
}

export class AvailableRoomResponseDto {
  @ApiProperty({ description: 'Room ID' }) roomId: string;
  @ApiProperty({ description: 'Room number' }) roomNumber: string;
  @ApiPropertyOptional({ description: 'Room type name' }) roomTypeName?: string;
  @ApiPropertyOptional({ description: 'Floor' }) floor?: number;
  @ApiPropertyOptional({ description: 'Base rate' }) baseRate?: number;
  @ApiPropertyOptional({ description: 'Rate difference from current' }) rateDifference?: number;
  @ApiPropertyOptional({ description: 'Is upgrade' }) isUpgrade?: boolean;
  @ApiPropertyOptional({ description: 'Room status' }) currentStatus?: string;
  @ApiPropertyOptional({ description: 'Amenities', type: [String] }) amenities?: string[];
}

export class RoomMovePricingResponseDto {
  @ApiProperty({ description: 'Original room price' }) originalPrice: number;
  @ApiProperty({ description: 'New room price' }) newRoomPrice: number;
  @ApiProperty({ description: 'Price difference' }) priceDifference: number;
  @ApiProperty({ description: 'Adjustment type' }) adjustmentType: string;
  @ApiProperty({ description: 'Refund amount' }) refundAmount: number;
  @ApiProperty({ description: 'Additional charges' }) additionalCharges: number;
  @ApiProperty({ description: 'Total amount' }) totalAmount: number;
  @ApiProperty({ description: 'Currency code' }) currency: string;
}

export class RoomMoveDashboardStatsDto {
  @ApiProperty({ description: 'Total room moves' }) totalMoves: number;
  @ApiProperty({ description: 'Pending approval count' }) pendingApproval: number;
  @ApiProperty({ description: 'Scheduled count' }) scheduled: number;
  @ApiProperty({ description: 'In progress count' }) inProgress: number;
  @ApiProperty({ description: 'Completed today count' }) completedToday: number;
  @ApiPropertyOptional({ description: 'Average duration in minutes' }) averageDuration?: number;
}
