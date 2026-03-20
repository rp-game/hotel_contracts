/**
 * Update Corporate Account NATS Contract
 *
 * NATS Pattern: corporate-account.update
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';
import { CorporateAccountStatus } from '../enums/sales.enum';

export interface UpdateCorporateAccountNatsRequest {
  tenantId: string;
  corporateAccountId: string;
  companyName?: string;
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
  status?: CorporateAccountStatus;
  notes?: string;
  contractStatus?: string;
  contractFileUrl?: string;
  contractNotes?: string;
  renewalReminderDays?: number;
  updatedBy: string;
}

export type UpdateCorporateAccountNatsResult = NatsResponse<any>;
