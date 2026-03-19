/**
 * Find Corporate Accounts NATS Contract
 *
 * NATS Pattern: corporate-account.find_all
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
export interface FindCorporateAccountsNatsRequest {
    tenantId: string;
    search?: string;
    status?: string;
    salesPersonId?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
export type FindCorporateAccountsNatsResult = NatsResponse<any>;
//# sourceMappingURL=find-corporate-accounts.nats.d.ts.map