/**
 * Loyalty Programs NATS Contracts
 *
 * Patterns:
 * - crm.loyalty_program.create
 * - crm.loyalty_program.findAll
 * - crm.loyalty_program.findOne
 * - crm.loyalty_program.update
 * - crm.loyalty_program.remove
 * - crm.loyalty_program.tier.add
 * - crm.loyalty_program.tier.update
 * - crm.loyalty_program.tier.remove
 * - crm.loyalty_tier.findAll
 * - crm.loyalty_program.stats
 * - loyalty.programs.sync
 *
 * Handler: crm-service (LoyaltyProgramsController)
 * Called by: api-gateway (CrmController)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDateString, IsEnum, IsInt, IsNumber, IsOptional, IsString, IsUUID, MaxLength, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common';
import { LoyaltyTierNatsResponse, FindAllLoyaltyTiersDto } from './loyalty-tiers.nats';

/**
 * Tier Basis — determines which points metric is used for tier qualification
 */
export enum TierBasis {
  LIFETIME_POINTS = 'LIFETIME_POINTS',
  POINTS_BALANCE = 'POINTS_BALANCE',
}

/**
 * Earning Rules
 */
export class EarningRulesRequest {
  @ApiPropertyOptional({ description: 'Points earned per dollar spent (decimal string)', example: '2.50' })
  @IsOptional()
  @IsString()
  pointsPerDollar?: string;

  @ApiPropertyOptional({ description: 'Points earned per visit/stay', example: 100 })
  @IsOptional()
  @IsInt()
  pointsPerVisit?: number;

  @ApiPropertyOptional({ description: 'Minimum spend to earn points (decimal string)', example: '10.00' })
  @IsOptional()
  @IsString()
  minimumSpendForPoints?: string;

  @ApiPropertyOptional({ description: 'Bonus points for referrals', example: 1000 })
  @IsOptional()
  @IsInt()
  referralBonus?: number;

  @ApiPropertyOptional({ description: 'Bonus point multiplier (decimal string)', example: '1.25' })
  @IsOptional()
  @IsString()
  bonusMultiplier?: string;
}

export type EarningRulesResponse = EarningRulesRequest;

/**
 * Redemption Rules
 */
export class RedemptionRulesRequest {
  @ApiPropertyOptional({ description: 'Minimum points required for redemption', example: 100 })
  @IsOptional()
  @IsInt()
  minimumPointsForRedemption?: number;

  @ApiPropertyOptional({ description: 'Cash value per point (decimal string)', example: '0.0100' })
  @IsOptional()
  @IsString()
  pointValue?: string;

  @ApiPropertyOptional({ description: 'Max bill percentage payable with points (decimal string)', example: '50.00' })
  @IsOptional()
  @IsString()
  maxRedemptionPercentage?: string;

  @ApiPropertyOptional({ type: [String], description: 'Categories where points can be redeemed' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  redemptionCategories?: string[];
}

export type RedemptionRulesResponse = RedemptionRulesRequest;

/**
 * Create Loyalty Program Request
 * Pattern: crm.loyalty_program.create
 */
export class CreateLoyaltyProgramNatsRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() hotelId?: string;

  @ApiProperty({ maxLength: 255 })
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiPropertyOptional() @IsOptional() @IsString() description?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() startDate?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() endDate?: string;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() isActive?: boolean;

  @ApiPropertyOptional({ type: () => EarningRulesRequest })
  @IsOptional()
  @ValidateNested()
  @Type(() => EarningRulesRequest)
  earningRules?: EarningRulesRequest;

  @ApiPropertyOptional({ type: () => RedemptionRulesRequest })
  @IsOptional()
  @ValidateNested()
  @Type(() => RedemptionRulesRequest)
  redemptionRules?: RedemptionRulesRequest;

  @ApiPropertyOptional({ description: 'Points validity period in months', minimum: 1 })
  @IsOptional()
  @IsInt()
  @Min(1)
  pointsValidityPeriod?: number;

  @ApiPropertyOptional({ enum: TierBasis, default: TierBasis.LIFETIME_POINTS })
  @IsOptional()
  @IsEnum(TierBasis)
  tierBasis?: TierBasis;

  @ApiPropertyOptional({ type: () => [CreateLoyaltyTierNatsRequest] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLoyaltyTierNatsRequest)
  tiers?: CreateLoyaltyTierNatsRequest[];
}

/**
 * Tier Benefits
 */
export class TierBenefitsRequest {
  @ApiPropertyOptional() @IsOptional() @IsBoolean() roomUpgrade?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() lateCheckout?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsString() discountPercentage?: string;
  @ApiPropertyOptional({ type: [String] }) @IsOptional() @IsArray() @IsString({ each: true }) freeServices?: string[];
  @ApiPropertyOptional() @IsOptional() @IsBoolean() prioritySupport?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() welcomeGift?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() airportTransfer?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsInt() maxGuests?: number;
}

/**
 * Create Loyalty Tier Request
 */
export class CreateLoyaltyTierNatsRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() programId: string;

  @ApiProperty({ maxLength: 100 })
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiProperty({ description: 'Minimum points required for this tier', minimum: 0 })
  @IsInt()
  @Min(0)
  minimumPoints: number;

  @ApiPropertyOptional({ description: 'Points multiplier for this tier' })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  pointsMultiplier?: number;

  @ApiPropertyOptional({ type: () => TierBenefitsRequest })
  @IsOptional()
  @ValidateNested()
  @Type(() => TierBenefitsRequest)
  benefits?: TierBenefitsRequest;

  @ApiPropertyOptional({ description: 'Display order', minimum: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Individual Loyalty Program Stats
 * Statistics for a single loyalty program - can be used in both NATS responses and REST API
 * Calculated from loyalty_members and loyalty_transactions tables
 */
export class IndividualProgramStats {
  @ApiPropertyOptional({
    description: 'Total members enrolled in this program',
    example: 1250,
    type: Number
  })
  @IsOptional()
  @IsNumber()
  totalMembers?: number;

  @ApiPropertyOptional({
    description: 'Active members (with activity in last 90 days)',
    example: 980,
    type: Number
  })
  @IsOptional()
  @IsNumber()
  activeMembers?: number;

  @ApiPropertyOptional({
    description: 'Total points issued to date (sum of all positive transactions)',
    example: 2500000,
    type: Number
  })
  @IsOptional()
  @IsNumber()
  totalPointsIssued?: number;

  @ApiPropertyOptional({
    description: 'Total points redeemed to date (sum of all negative transactions)',
    example: 750000,
    type: Number
  })
  @IsOptional()
  @IsNumber()
  totalPointsRedeemed?: number;

  @ApiPropertyOptional({
    description: 'Average points per member (totalPointsIssued / totalMembers)',
    example: 2040.8,
    type: Number
  })
  @IsOptional()
  @IsNumber()
  averagePointsPerMember?: number;
}

/**
 * Loyalty Program Response
 */
export class LoyaltyProgramNatsResponse {
  @ApiProperty({ description: 'Program ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;

  @ApiProperty({ description: 'Program name' })
  name!: string;

  @ApiPropertyOptional({ description: 'Program description' })
  description?: string;

  @ApiPropertyOptional({ description: 'Program start date', type: String })
  startDate?: string | Date;

  @ApiPropertyOptional({ description: 'Program end date', type: String })
  endDate?: string | Date;

  @ApiProperty({ description: 'Whether program is active' })
  isActive!: boolean;

  @ApiPropertyOptional({ description: 'Earning rules configuration' })
  earningRules?: EarningRulesResponse;

  @ApiPropertyOptional({ description: 'Redemption rules configuration' })
  redemptionRules?: RedemptionRulesResponse;

  @ApiPropertyOptional({ enum: TierBasis, default: TierBasis.LIFETIME_POINTS, description: 'Which points metric is used for tier qualification' })
  tierBasis?: TierBasis;

  @ApiPropertyOptional({ description: 'Program tiers', type: [LoyaltyTierNatsResponse] })
  tiers?: LoyaltyTierNatsResponse[];

  @ApiPropertyOptional({ description: 'Program statistics', type: () => IndividualProgramStats })
  stats?: IndividualProgramStats;

  @ApiProperty({ description: 'Creation timestamp', type: String })
  createdAt!: string | Date;

  @ApiProperty({ description: 'Last update timestamp', type: String })
  updatedAt!: string | Date;

  @ApiPropertyOptional({ description: 'Deletion timestamp', type: String })
  deletedAt?: string | Date;
}

/**
 * Create Program Response
 */
export type CreateLoyaltyProgramNatsResponse = NatsResponse<LoyaltyProgramNatsResponse>;

/**
 * Find All Programs Request
 * Pattern: crm.loyalty_program.findAll
 */
export interface FindAllProgramsNatsRequest {
  tenantId: string;
  page?: number;
  limit?: number;
}

/**
 * Find All Programs Response
 */
export type FindAllProgramsNatsResponse = NatsResponse<{
  data: LoyaltyProgramNatsResponse[];
  total: number;
  page: number;
  limit: number;
}>;

/**
 * Find One Program Request
 * Pattern: crm.loyalty_program.findOne
 */
export interface FindOneProgramNatsRequest {
  programId: string;
  tenantId: string;
}

/**
 * Find One Program Response
 */
export type FindOneProgramNatsResponse = NatsResponse<LoyaltyProgramNatsResponse>;

/**
 * Update Program Request
 * Pattern: crm.loyalty_program.update
 */
export interface UpdateProgramNatsRequest {
  programId: string;
  tenantId: string;
  updateDto: Partial<CreateLoyaltyProgramNatsRequest>;
}

/**
 * Update Program Response
 */
export type UpdateProgramNatsResponse = NatsResponse<LoyaltyProgramNatsResponse>;

/**
 * Remove Program Request
 * Pattern: crm.loyalty_program.remove
 */
export interface RemoveProgramNatsRequest {
  programId: string;
  tenantId: string;
}

/**
 * Remove Program Response
 */
export type RemoveProgramNatsResponse = NatsResponse<{ message: string }>;

/**
 * Add Tier Request
 * Pattern: crm.loyalty_program.tier.add
 */
export interface AddTierNatsRequest {
  programId: string;
  tenantId: string;
  createTierDto: CreateLoyaltyTierNatsRequest;
}

/**
 * Add Tier Response
 */
export type AddTierNatsResponse = NatsResponse<LoyaltyTierNatsResponse>;

/**
 * Update Tier Request
 * Pattern: crm.loyalty_program.tier.update
 */
export interface UpdateTierNatsRequest {
  programId: string;
  tierId: string;
  tenantId: string;
  updateTierDto: Partial<CreateLoyaltyTierNatsRequest>;
}

/**
 * Update Tier Response
 */
export type UpdateTierNatsResponse = NatsResponse<LoyaltyTierNatsResponse>;

/**
 * Remove Tier Request
 * Pattern: crm.loyalty_program.tier.remove
 */
export interface RemoveTierNatsRequest {
  programId: string;
  tierId: string;
  tenantId: string;
}

/**
 * Remove Tier Response
 */
export type RemoveTierNatsResponse = NatsResponse<{ message: string }>;

/**
 * Find All Tiers Request
 * Pattern: crm.loyalty_tier.findAll
 */
export interface FindAllTiersNatsRequest {
  tenantId: string;
  programId?: string;
}

/**
 * Find All Tiers Response
 */
export type FindAllTiersNatsResponse = NatsResponse<FindAllLoyaltyTiersDto>;

/**
 * Aggregate Loyalty Program Stats
 * Statistics for all loyalty programs combined (used in crm.loyalty_program.stats endpoint)
 */
export interface LoyaltyProgramStats {
  totalPrograms: number;           // Total number of loyalty programs
  activePrograms: number;          // Number of active programs
  totalMembers: number;            // Total members across all programs
  totalCustomersEligible: number;  // Customers eligible for enrollment
  redemptionRate: number;          // Redemption rate percentage (redeemed/awarded * 100)
}

/**
 * Stats Request
 * Pattern: crm.loyalty_program.stats
 */
export interface ProgramStatsNatsRequest {
  tenantId: string;
}

/**
 * Stats Response
 */
export type ProgramStatsNatsResponse = NatsResponse<LoyaltyProgramStats>;

/**
 * Program Sync — inline program summary
 */
export class LoyaltyProgramSyncSummary {
  @ApiProperty({ description: 'Program ID' })
  id: string;

  @ApiProperty({ description: 'Program name' })
  name: string;

  @ApiProperty({ description: 'Program type', example: 'points' })
  type: string;

  @ApiProperty({ description: 'Whether the program is active' })
  isActive: boolean;

  @ApiProperty({ description: 'Points earned per dollar spent' })
  pointsPerDollar: number;

  @ApiProperty({ description: 'Number of tiers' })
  tierCount: number;

  @ApiProperty({ description: 'Number of enrolled members' })
  memberCount: number;
}

/**
 * Program Sync Response data
 * Pattern: loyalty.programs.sync
 */
export class LoyaltyProgramsSyncData {
  @ApiProperty({ description: 'Total number of loyalty programs' })
  totalPrograms: number;

  @ApiProperty({ description: 'Number of active programs' })
  activePrograms: number;

  @ApiProperty({ type: () => [LoyaltyProgramSyncSummary] })
  programs: LoyaltyProgramSyncSummary[];

  @ApiProperty({ description: 'Total enrolled members' })
  totalMembers: number;

  @ApiProperty({ description: 'Total points issued across all programs' })
  totalPointsIssued: number;

  @ApiProperty({ description: 'Total points redeemed across all programs' })
  totalPointsRedeemed: number;

  @ApiProperty({ description: 'Reporting period' })
  period: string;
}

/**
 * Sync Programs Request
 * Pattern: loyalty.programs.sync
 */
export class SyncProgramsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Reporting period (e.g. monthly, yearly)' })
  period: string;
}

/**
 * Sync Programs Response
 */
export type SyncProgramsNatsResponse = NatsResponse<LoyaltyProgramsSyncData>;
