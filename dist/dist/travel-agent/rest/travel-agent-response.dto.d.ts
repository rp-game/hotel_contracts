/**
 * Travel Agent Response DTOs
 * Used for Swagger documentation and API responses
 */
export declare class TravelAgentResponseDto {
    id: string;
    agentCode: string;
    agentName: string;
    iataNumber?: string;
    taxCode?: string;
    address?: string;
    contactPerson?: string;
    email?: string;
    phone?: string;
    commissionRate: number;
    commissionType: string;
    paymentTermDays: number;
    bankAccount?: string;
    bankName?: string;
    contractNumber?: string;
    contractStartDate?: string;
    contractEndDate?: string;
    status: string;
    salesPersonId?: string;
    salesPersonName?: string;
    notes?: string;
    createdByName?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class TravelAgentListResponseDto {
    travelAgents: TravelAgentResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export declare class CommissionRecordResponseDto {
    id: string;
    travelAgentId: string;
    travelAgentName: string;
    bookingId: string;
    bookingCode: string;
    guestName?: string;
    checkOutDate: string;
    commissionableAmount: number;
    commissionRate: number;
    commissionAmount: number;
    commissionType: string;
    status: string;
    paidDate?: Date;
    paymentReference?: string;
    createdAt: Date;
}
export declare class CommissionRecordListResponseDto {
    commissionRecords: CommissionRecordResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
//# sourceMappingURL=travel-agent-response.dto.d.ts.map