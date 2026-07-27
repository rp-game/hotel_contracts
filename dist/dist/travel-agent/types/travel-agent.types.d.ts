/**
 * Travel Agent Types
 */
export declare class TravelAgentSummary {
    id: string;
    agentCode: string;
    agentName: string;
    contactPerson?: string;
    phone?: string;
    email?: string;
    commissionRate: number;
    commissionType: string;
    status: string;
}
export declare class TravelAgentDetails extends TravelAgentSummary {
    iataNumber?: string;
    taxCode?: string;
    address?: string;
    paymentTermDays: number;
    bankAccount?: string;
    bankName?: string;
    contractNumber?: string;
    contractStartDate?: string;
    contractEndDate?: string;
    notes?: string;
    createdByName?: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=travel-agent.types.d.ts.map