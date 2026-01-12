/**
 * Loyalty Members NATS Contracts
 *
 * Patterns:
 * - crm.loyalty_member.enroll
 * - crm.loyalty_member.findAllByTenant
 * - crm.loyalty_member.findOneById
 * - crm.loyalty_member.findByMembershipId
 * - crm.loyalty_member.findAllByCustomer
 * - crm.loyalty_member.updateDetails
 * - crm.loyalty_member.removeMember
 * - crm.loyalty_member.stats
 *
 * Handler: crm-service (LoyaltyMembersController)
 * Called by: api-gateway (CrmController)
 */
import { NatsResponse } from '../../common';
/**
 * Enroll Member Request
 * Pattern: crm.loyalty_member.enroll
 */
export interface EnrollMemberNatsRequest {
    tenantId: string;
    customerId: string;
    programId: string;
    membershipId: string;
    joinDate: string;
    initialTierId?: string;
    isActive?: boolean;
}
/**
 * Loyalty Member Response
 */
export interface LoyaltyMemberNatsResponse {
    id: string;
    tenantId: string;
    customerId: string;
    programId: string;
    membershipId: string;
    currentTierId?: string;
    pointsBalance: number;
    lifetimePoints: number;
    joinDate: string | Date;
    tierAchievedDate?: string | Date;
    tierExpirationDate?: string | Date;
    lastActivityDate?: string | Date;
    isActive: boolean;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Enroll Member Response
 */
export type EnrollMemberNatsResponse = NatsResponse<LoyaltyMemberNatsResponse>;
/**
 * Find All By Tenant Request
 * Pattern: crm.loyalty_member.findAllByTenant
 */
export interface FindAllByTenantNatsRequest {
    tenantId: string;
    programId?: string;
    search?: string;
    isActive?: string;
    tierId?: string;
    page?: number;
    limit?: number;
}
/**
 * List Loyalty Members Data
 */
export interface ListLoyaltyMembersData {
    data: LoyaltyMemberNatsResponse[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Find All By Tenant Response
 */
export type FindAllByTenantNatsResponse = NatsResponse<ListLoyaltyMembersData>;
/**
 * Find One By Id Request
 * Pattern: crm.loyalty_member.findOneById
 */
export interface FindOneByIdNatsRequest {
    memberId: string;
    tenantId: string;
}
/**
 * Find One By Id Response
 */
export type FindOneByIdNatsResponse = NatsResponse<LoyaltyMemberNatsResponse>;
/**
 * Find By Membership Id Request
 * Pattern: crm.loyalty_member.findByMembershipId
 */
export interface FindByMembershipIdNatsRequest {
    membershipId: string;
    tenantId: string;
}
/**
 * Find By Membership Id Response
 */
export type FindByMembershipIdNatsResponse = NatsResponse<LoyaltyMemberNatsResponse>;
/**
 * Find All By Customer Request
 * Pattern: crm.loyalty_member.findAllByCustomer
 */
export interface FindAllByCustomerNatsRequest {
    customerId: string;
    tenantId: string;
    programId?: string;
    page?: number;
    limit?: number;
}
/**
 * Find All By Customer Response
 */
export type FindAllByCustomerNatsResponse = NatsResponse<ListLoyaltyMembersData>;
/**
 * Update Details Request
 * Pattern: crm.loyalty_member.updateDetails
 */
export interface UpdateDetailsNatsRequest {
    memberId: string;
    tenantId: string;
    updateDto: {
        currentTierId?: string;
        pointsBalance?: number;
        tierAchievedDate?: string;
        tierExpirationDate?: string;
        lastActivityDate?: string;
        isActive?: boolean;
    };
}
/**
 * Update Details Response
 */
export type UpdateDetailsNatsResponse = NatsResponse<LoyaltyMemberNatsResponse>;
/**
 * Remove Member Request
 * Pattern: crm.loyalty_member.removeMember
 */
export interface RemoveMemberNatsRequest {
    memberId: string;
    tenantId: string;
}
/**
 * Remove Member Response
 */
export type RemoveMemberNatsResponse = NatsResponse<{
    message: string;
}>;
/**
 * Loyalty Member Stats Data
 */
export interface LoyaltyMemberStatsData {
    totalMembers: number;
    activeMembers: number;
    totalPoints: number;
    averagePointsPerMember: number;
}
/**
 * Stats Request
 * Pattern: crm.loyalty_member.stats
 */
export interface StatsNatsRequest {
    tenantId: string;
}
/**
 * Stats Response
 */
export type StatsNatsResponse = NatsResponse<LoyaltyMemberStatsData>;
//# sourceMappingURL=loyalty-members.nats.d.ts.map