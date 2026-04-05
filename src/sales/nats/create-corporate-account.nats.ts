/**
 * Create Corporate Account NATS Contract
 *
 * NATS Pattern: corporate-account.create
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';

/**
 * NATS request to create a corporate account (chain-level, no hotelId)
 */
export interface CreateCorporateAccountNatsRequest {
  tenantId: string;
  accountType?: string; // 'CORPORATE' | 'INDIVIDUAL', default 'CORPORATE'
  companyName: string;
  industry?: string;
  taxCode?: string;
  address?: string;
  contactPerson?: string;
  contactEmail?: string;
  contactPhone?: string;
  salesPersonId?: string;
  salesPersonName?: string;
  paymentMethod?: string;
  paymentTermDays?: number;
  creditLimit?: number;
  contractNumber?: string;
  contractStartDate?: string;
  contractEndDate?: string;
  projectedRoomNights?: number;
  notes?: string;
  contractStatus?: string;
  contractFileUrl?: string;
  contractNotes?: string;
  renewalReminderDays?: number;
  createdBy: string;
  createdByName?: string;
}

export interface CreateCorporateAccountNatsResponse {
  id: string;
  accountCode: string;
  companyName: string;
  status: string;
  createdAt: Date;
}

export type CreateCorporateAccountNatsResult = NatsResponse<CreateCorporateAccountNatsResponse>;
