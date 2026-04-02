/**
 * Amenity SLA Configuration NATS Contracts
 * Patterns: housekeeping.amenity-sla-configs.*
 *
 * Manages hotel-level SLA configuration for amenity requests
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * SLA Configuration for amenity requests at hotel level
 * Global configuration per hotel (not per-amenity in Phase 1)
 */
export class AmenitySLAConfigData {
  @ApiProperty({ description: 'Configuration ID' })
  id!: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({
    description: 'Minutes to first response during peak hours (6-9am, 5-10pm)',
    type: Number,
    example: 10,
  })
  firstResponseMinutes!: number;

  @ApiProperty({
    description: 'Minutes to first response during off-peak hours',
    type: Number,
    example: 20,
  })
  firstResponseMinutesOffPeak!: number;

  @ApiProperty({
    description: 'Minutes to complete resolution',
    type: Number,
    example: 60,
  })
  resolutionMinutes!: number;

  @ApiProperty({
    description: 'Percentage of deadline for first escalation alert (WARNING)',
    type: Number,
    default: 50,
    example: 50,
  })
  escalationLevel1Percent!: number;

  @ApiProperty({
    description: 'Percentage of deadline for second escalation alert (ESCALATION_LEVEL_2)',
    type: Number,
    default: 75,
    example: 75,
  })
  escalationLevel2Percent!: number;

  @ApiPropertyOptional({
    description: 'Default priority for amenity requests',
    enum: ['LOW', 'MEDIUM', 'HIGH'],
    default: 'MEDIUM',
  })
  priority?: string;

  @ApiProperty({ description: 'Creation timestamp', type: String })
  createdAt!: string | Date;

  @ApiProperty({ description: 'Last update timestamp', type: String })
  updatedAt!: string | Date;
}

// ============================================
// CREATE/UPDATE SLA CONFIG
// ============================================

export class CreateAmenitySLAConfigNatsRequest {
  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({
    description: 'Minutes to first response during peak hours',
    type: Number,
    example: 10,
  })
  firstResponseMinutes!: number;

  @ApiProperty({
    description: 'Minutes to first response during off-peak hours',
    type: Number,
    example: 20,
  })
  firstResponseMinutesOffPeak!: number;

  @ApiProperty({
    description: 'Minutes to complete resolution',
    type: Number,
    example: 60,
  })
  resolutionMinutes!: number;

  @ApiPropertyOptional({
    description: 'Percentage for first escalation alert (50-90)',
    type: Number,
    default: 50,
  })
  escalationLevel1Percent?: number;

  @ApiPropertyOptional({
    description: 'Percentage for second escalation alert (60-99)',
    type: Number,
    default: 75,
  })
  escalationLevel2Percent?: number;

  @ApiPropertyOptional({
    description: 'Default priority',
    enum: ['LOW', 'MEDIUM', 'HIGH'],
  })
  priority?: string;
}

export type CreateAmenitySLAConfigNatsResponse = NatsResponse<AmenitySLAConfigData>;

// ============================================
// FIND SLA CONFIG BY HOTEL
// ============================================

export class FindAmenitySLAConfigNatsRequest {
  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;
}

export type FindAmenitySLAConfigNatsResponse = NatsResponse<AmenitySLAConfigData>;
