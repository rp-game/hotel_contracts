/**
 * Execute Room Move NATS Contract
 *
 * NATS Pattern: room-move.execute
 * Handler: booking-service
 * Called by: api-gateway
 * Modes: standard, mobile-start, mobile-complete, quick-transfer
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsNumber, IsBoolean, IsArray } from 'class-validator';
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

  @ApiPropertyOptional({ description: 'Name of user executing the move' })
  @IsOptional()
  @IsString()
  executedByName?: string;

  @ApiPropertyOptional({ description: 'Execution mode', enum: ['standard', 'mobile-start', 'mobile-complete', 'quick-transfer'] })
  @IsOptional()
  @IsString()
  mode?: 'standard' | 'mobile-start' | 'mobile-complete' | 'quick-transfer';

  @ApiPropertyOptional({ description: 'Whether the move is completed' })
  @IsOptional()
  @IsBoolean()
  moveCompleted?: boolean;

  @ApiPropertyOptional({ description: 'Actual move start time (ISO datetime)' })
  @IsOptional()
  @IsString()
  actualMoveStartTime?: string;

  @ApiPropertyOptional({ description: 'Actual move end time (ISO datetime)' })
  @IsOptional()
  @IsString()
  actualMoveEndTime?: string;

  @ApiPropertyOptional({ description: 'Actual duration in minutes' })
  @IsOptional()
  @IsNumber()
  actualDuration?: number;

  @ApiPropertyOptional({ description: 'Whether guest is satisfied' })
  @IsOptional()
  @IsBoolean()
  guestSatisfied?: boolean;

  @ApiPropertyOptional({ description: 'Satisfaction rating (1-5)' })
  @IsOptional()
  @IsNumber()
  satisfactionRating?: number;

  @ApiPropertyOptional({ description: 'Guest feedback' })
  @IsOptional()
  @IsString()
  guestFeedback?: string;

  @ApiPropertyOptional({ description: 'Whether key cards were generated' })
  @IsOptional()
  @IsBoolean()
  keyCardsGenerated?: boolean;

  @ApiPropertyOptional({ description: 'Whether housekeeping was notified' })
  @IsOptional()
  @IsBoolean()
  housekeepingNotified?: boolean;

  @ApiPropertyOptional({ description: 'Execution notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  // Porter information
  @ApiPropertyOptional({ description: 'Porter ID' })
  @IsOptional()
  @IsUUID()
  porterId?: string;

  @ApiPropertyOptional({ description: 'Porter name' })
  @IsOptional()
  @IsString()
  porterName?: string;

  // Luggage and belongings
  @ApiPropertyOptional({ description: 'Whether luggage was transferred' })
  @IsOptional()
  @IsBoolean()
  luggageTransferred?: boolean;

  @ApiPropertyOptional({ description: 'Luggage transfer notes' })
  @IsOptional()
  @IsString()
  luggageTransferNotes?: string;

  @ApiPropertyOptional({ description: 'List of transferred items' })
  @IsOptional()
  @IsArray()
  transferredItems?: string[];

  // Room inspection
  @ApiPropertyOptional({ description: 'Whether room inspection was completed' })
  @IsOptional()
  @IsBoolean()
  roomInspectionCompleted?: boolean;

  @ApiPropertyOptional({ description: 'Room inspection notes' })
  @IsOptional()
  @IsString()
  roomInspectionNotes?: string;

  @ApiPropertyOptional({ description: 'Room issues found during inspection' })
  @IsOptional()
  @IsArray()
  roomIssues?: string[];

  // Completion details
  @ApiPropertyOptional({ description: 'Completion notes' })
  @IsOptional()
  @IsString()
  completionNotes?: string;

  @ApiPropertyOptional({ description: 'Issues encountered during move' })
  @IsOptional()
  @IsArray()
  issuesEncountered?: string[];

  @ApiPropertyOptional({ description: 'Whether follow-up is required' })
  @IsOptional()
  @IsBoolean()
  followUpRequired?: boolean;

  // Financial transactions
  @ApiPropertyOptional({ description: 'Whether charges were applied' })
  @IsOptional()
  @IsBoolean()
  chargesApplied?: boolean;

  @ApiPropertyOptional({ description: 'Amount of applied charges' })
  @IsOptional()
  @IsNumber()
  appliedCharges?: number;

  @ApiPropertyOptional({ description: 'Whether refund was processed' })
  @IsOptional()
  @IsBoolean()
  refundProcessed?: boolean;

  @ApiPropertyOptional({ description: 'Refund amount' })
  @IsOptional()
  @IsNumber()
  refundAmount?: number;

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
