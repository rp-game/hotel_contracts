/**
 * Update Travel Agent NATS Contract
 *
 * NATS Pattern: travel-agent.update
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { CommissionType, TravelAgentStatus } from '../enums/travel-agent.enum';
export interface UpdateTravelAgentNatsRequest {
    tenantId: string;
    travelAgentId: string;
    agentName?: string;
    iataNumber?: string;
    taxCode?: string;
    address?: string;
    contactPerson?: string;
    email?: string;
    phone?: string;
    commissionRate?: number;
    commissionType?: CommissionType;
    paymentTermDays?: number;
    bankAccount?: string;
    bankName?: string;
    contractNumber?: string;
    contractStartDate?: string;
    contractEndDate?: string;
    status?: TravelAgentStatus;
    notes?: string;
    salesPersonId?: string;
    salesPersonName?: string;
    updatedBy: string;
}
export type UpdateTravelAgentNatsResult = NatsResponse<any>;
//# sourceMappingURL=update-travel-agent.nats.d.ts.map