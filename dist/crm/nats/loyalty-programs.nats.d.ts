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
import { NatsResponse } from '../../common';
import type { LoyaltyTierNatsResponse } from './loyalty-tiers.nats';
/**
 * Earning Rules
 */
export interface EarningRulesRequest {
    pointsPerDollar?: string;
    pointsPerVisit?: number;
    minimumSpendForPoints?: string;
    referralBonus?: number;
    bonusMultiplier?: string;
}
export type EarningRulesResponse = EarningRulesRequest;
/**
 * Redemption Rules
 */
export interface RedemptionRulesRequest {
    minimumPointsForRedemption?: number;
    pointValue?: string;
    maxRedemptionPercentage?: string;
    redemptionCategories?: string[];
}
export type RedemptionRulesResponse = RedemptionRulesRequest;
/**
 * Create Loyalty Program Request
 * Pattern: crm.loyalty_program.create
 */
export interface CreateLoyaltyProgramNatsRequest {
    tenantId: string;
    hotelId?: string;
    name: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    isActive?: boolean;
    earningRules?: EarningRulesRequest;
    redemptionRules?: RedemptionRulesRequest;
}
/**
 * Tier Benefits
 */
export interface TierBenefitsRequest {
    roomUpgrade?: boolean;
    lateCheckout?: boolean;
    discountPercentage?: string;
    freeServices?: string[];
    prioritySupport?: boolean;
    welcomeGift?: boolean;
    airportTransfer?: boolean;
    maxGuests?: number;
}
/**
 * Create Loyalty Tier Request
 */
export interface CreateLoyaltyTierNatsRequest {
    tenantId: string;
    programId: string;
    name: string;
    minimumPoints: number;
    pointsMultiplier?: number;
    benefits?: TierBenefitsRequest;
    order?: number;
    isActive?: boolean;
}
/**
 * Loyalty Program Response
 */
export interface LoyaltyProgramNatsResponse {
    id: string;
    tenantId: string;
    hotelId?: string;
    name: string;
    description?: string;
    startDate?: string | Date;
    endDate?: string | Date;
    isActive: boolean;
    earningRules?: EarningRulesResponse;
    redemptionRules?: RedemptionRulesResponse;
    tiers?: LoyaltyTierNatsResponse[];
    stats?: LoyaltyProgramStats;
    createdAt: string | Date;
    updatedAt: string | Date;
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
export type RemoveProgramNatsResponse = NatsResponse<{
    message: string;
}>;
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
export type RemoveTierNatsResponse = NatsResponse<{
    message: string;
}>;
/**
 * Find All Tiers Request
 * Pattern: crm.loyalty_tier.findAll
 */
export interface FindAllTiersNatsRequest {
    tenantId: string;
}
/**
 * Find All Tiers Response
 */
export type FindAllTiersNatsResponse = NatsResponse<{
    tiers: LoyaltyTierNatsResponse[];
    total: number;
}>;
/**
 * Loyalty Program Stats
 */
export interface LoyaltyProgramStats {
    totalMembers: number;
    activeMembers: number;
    totalPointsAwarded: number;
    totalPointsRedeemed: number;
    averagePointsPerMember: number;
    tierDistribution: Record<string, number>;
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
 * Program Sync Response
 */
export interface LoyaltyProgramsSyncData {
    totalPrograms: number;
    activePrograms: number;
    programs: Array<{
        id: string;
        name: string;
        type: string;
        isActive: boolean;
        pointsPerDollar: any;
        tierCount: number;
        memberCount: number;
    }>;
    totalMembers: number;
    totalPointsIssued: number;
    totalPointsRedeemed: number;
    period: string;
}
/**
 * Sync Programs Request
 * Pattern: loyalty.programs.sync
 */
export interface SyncProgramsNatsRequest {
    hotelId: string;
    period: string;
}
/**
 * Sync Programs Response
 */
export type SyncProgramsNatsResponse = NatsResponse<LoyaltyProgramsSyncData>;
//# sourceMappingURL=loyalty-programs.nats.d.ts.map