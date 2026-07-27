/**
 * Delete Corporate Account NATS Contract
 *
 * NATS Pattern: corporate-account.delete
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
export interface DeleteCorporateAccountNatsRequest {
    tenantId: string;
    corporateAccountId: string;
    deletedBy: string;
}
export type DeleteCorporateAccountNatsResult = NatsResponse<any>;
//# sourceMappingURL=delete-corporate-account.nats.d.ts.map