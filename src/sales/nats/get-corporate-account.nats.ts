/**
 * Get Corporate Account NATS Contract
 *
 * NATS Pattern: corporate-account.find_one
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';

export interface GetCorporateAccountNatsRequest {
  tenantId: string;
  corporateAccountId: string;
}

export type GetCorporateAccountNatsResult = NatsResponse<any>;
