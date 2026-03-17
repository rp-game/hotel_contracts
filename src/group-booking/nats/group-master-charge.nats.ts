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
  category: string; // SERVICE | F_AND_B | OTHER
  description: string;
  amount: number;
  date: string; // YYYY-MM-DD
  taxRate?: number; // default 8
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
