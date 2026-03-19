/**
 * Create Travel Agent NATS Contract
 *
 * NATS Pattern: travel-agent.create
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { CommissionType } from '../enums/travel-agent.enum';
/**
 * NATS request to create a travel agent (chain-level, no hotelId)
 */
export interface CreateTravelAgentNatsRequest {
    tenantId: string;
    agentName: string;
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
    notes?: string;
    createdBy: string;
    createdByName?: string;
}
export interface CreateTravelAgentNatsResponse {
    id: string;
    agentCode: string;
    agentName: string;
    status: string;
    commissionRate: number;
    commissionType: string;
    createdAt: Date;
}
export type CreateTravelAgentNatsResult = NatsResponse<CreateTravelAgentNatsResponse>;
//# sourceMappingURL=create-travel-agent.nats.d.ts.map