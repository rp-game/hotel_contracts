/**
 * Travel Agent REST DTOs
 * Used by api-gateway controllers for request validation
 */
import { CommissionType, TravelAgentStatus } from '../enums/travel-agent.enum';
export declare class CreateTravelAgentDto {
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
}
export declare class UpdateTravelAgentDto {
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
}
export declare class FindTravelAgentsQueryDto {
    search?: string;
    status?: TravelAgentStatus;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
export declare class FindCommissionRecordsQueryDto {
    hotelId: string;
    status?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
//# sourceMappingURL=travel-agent.dto.d.ts.map