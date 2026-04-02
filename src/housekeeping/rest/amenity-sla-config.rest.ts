/**
 * Amenity SLA Configuration REST API DTOs
 *
 * Shared classes used by both:
 * - Contracts (for type definitions)
 * - API Gateway REST endpoints (with @ApiProperty decorators)
 * - Housekeeping Service REST endpoints
 *
 * These are imported and used by both NATS handlers and REST controllers
 * to ensure consistency between NATS and REST contracts
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Amenity SLA Configuration Response DTO
 * Returned by GET /amenity-sla-configs
 */
export class AmenitySLAConfigResponseDto {
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

/**
 * Create Amenity SLA Configuration DTO
 * Used by POST /amenity-sla-configs
 */
export class CreateAmenitySLAConfigDto {
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
