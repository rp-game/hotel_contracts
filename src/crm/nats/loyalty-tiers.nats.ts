/**
 * Loyalty Tiers NATS Contracts
 *
 * Patterns:
 * - crm.loyalty_tier.findOneById
 *
 * Handler: crm-service (LoyaltyTiersController)
 * Called by: api-gateway (CrmController)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * Tier Benefits
 */
export class TierBenefitsNatsResponse {
  @ApiPropertyOptional({ description: 'Room upgrade benefit' })
  roomUpgrade?: boolean;

  @ApiPropertyOptional({ description: 'Late checkout benefit' })
  lateCheckout?: boolean;

  @ApiPropertyOptional({ description: 'Discount percentage' })
  discountPercentage?: string;

  @ApiPropertyOptional({ type: [String], description: 'Free services' })
  freeServices?: string[];

  @ApiPropertyOptional({ description: 'Priority support benefit' })
  prioritySupport?: boolean;

  @ApiPropertyOptional({ description: 'Welcome gift benefit' })
  welcomeGift?: boolean;

  @ApiPropertyOptional({ description: 'Airport transfer benefit' })
  airportTransfer?: boolean;

  @ApiPropertyOptional({ description: 'Maximum number of guests' })
  maxGuests?: number;
}

/**
 * Loyalty Tier Response
 */
export class LoyaltyTierNatsResponse {
  @ApiProperty({ description: 'Tier ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Loyalty program ID' })
  programId!: string;

  @ApiProperty({ description: 'Tier name' })
  name!: string;

  @ApiProperty({ description: 'Minimum points required for this tier' })
  minimumPoints!: number;

  @ApiProperty({ description: 'Points multiplier for this tier' })
  pointsMultiplier!: number;

  @ApiPropertyOptional({ description: 'Legacy multiplier field' })
  multiplier?: number;

  @ApiPropertyOptional({ description: 'Tier benefits' })
  benefits?: TierBenefitsNatsResponse;

  @ApiProperty({ description: 'Tier display order' })
  order!: number;

  @ApiProperty({ description: 'Whether tier is active' })
  isActive!: boolean;

  @ApiProperty({ description: 'Creation timestamp', type: String })
  createdAt!: string | Date;

  @ApiProperty({ description: 'Last update timestamp', type: String })
  updatedAt!: string | Date;
}

/**
 * Find One Tier By Id Request
 * Pattern: crm.loyalty_tier.findOneById
 */
export interface FindOneTierByIdNatsRequest {
  tierId: string;
  tenantId: string;
}

/**
 * Find One Tier By Id Response
 */
export type FindOneTierByIdNatsResponse = NatsResponse<LoyaltyTierNatsResponse>;

/**
 * Find All Loyalty Tiers Response DTO
 * Used for both NATS messaging and REST API responses
 */
export class FindAllLoyaltyTiersDto {
  @ApiProperty({
    description: 'List of loyalty tiers with full details',
    type: [LoyaltyTierNatsResponse],
  })
  tiers!: LoyaltyTierNatsResponse[];

  @ApiProperty({
    description: 'Total number of tiers',
    type: 'number',
    example: 5
  })
  total!: number;
}
