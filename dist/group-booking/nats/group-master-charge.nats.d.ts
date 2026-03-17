/**
 * Group Master Charge NATS Contracts
 *
 * NATS Patterns:
 *   group-block.master_charge.create  — post a charge to master folio
 *   group-block.master_charge.void    — void a master charge
 *
 * Handler: booking-service
 * Called by: api-gateway
 */
export interface PostGroupMasterChargeNatsRequest {
    tenantId: string;
    hotelId: string;
    groupBlockId: string;
    category: string;
    description: string;
    amount: number;
    date: string;
    taxRate?: number;
    reference?: string;
    userId: string;
    userName: string;
}
export interface VoidGroupMasterChargeNatsRequest {
    tenantId: string;
    hotelId: string;
    groupBlockId: string;
    chargeId: string;
    reason: string;
    userId: string;
    userName: string;
}
export interface GroupMasterChargeItem {
    id: string;
    groupBlockId: string;
    category: string;
    description: string;
    amount: number;
    date: string;
    taxRate: number;
    reference: string | null;
    createdBy: string;
    createdByName: string | null;
    voidedAt: string | null;
    voidReason: string | null;
    createdAt: string;
}
//# sourceMappingURL=group-master-charge.nats.d.ts.map