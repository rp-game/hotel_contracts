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
    currentTierId?: string;
    enrollmentDate?: string;
    statusExpiryDate?: string;
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
    currentTierId: string;
    enrollmentDate: string | Date;
    statusExpiryDate?: string | Date;
    totalPoints: number;
    redeemedPoints: number;
    availablePoints: number;
    joinDate: string | Date;
    isActive: boolean;
    createdAt: string | Date;
    updatedAt: string | Date;
    [key: string]: any;
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
 * List Loyalty Members Response
 */
export interface ListLoyaltyMembersNatsResponse {
    data: LoyaltyMemberNatsResponse[];
    total: number;
    page?: number;
    limit?: number;
}
/**
 * Find All By Tenant Response
 */
export type FindAllByTenantNatsResponse = NatsResponse<ListLoyaltyMembersNatsResponse>;
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
export type FindAllByCustomerNatsResponse = NatsResponse<ListLoyaltyMembersNatsResponse>;
/**
 * Update Details Request
 * Pattern: crm.loyalty_member.updateDetails
 */
export interface UpdateDetailsNatsRequest {
    memberId: string;
    tenantId: string;
    updateDto: Partial<EnrollMemberNatsRequest>;
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
 * Loyalty Member Stats
 */
export interface LoyaltyMemberStats {
    totalMembers: number;
    activeMembers: number;
    totalPoints: number;
    redeemedPoints: number;
    availablePoints: number;
    [key: string]: any;
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
export type StatsNatsResponse = NatsResponse<LoyaltyMemberStats>;
//# sourceMappingURL=loyalty-members.nats.d.ts.map