/**
 * Corporate Account REST DTOs
 * Used by api-gateway controllers for request validation
 */
import { CorporateAccountStatus, CorporateAccountType, ContractStatus } from '../enums/sales.enum';
export declare class CreateCorporateAccountDto {
    accountType?: CorporateAccountType;
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
    contractStatus?: ContractStatus;
    contractFileUrl?: string;
    contractNotes?: string;
    renewalReminderDays?: number;
}
export declare class UpdateCorporateAccountDto {
    accountType?: CorporateAccountType;
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
    contractStatus?: ContractStatus;
    contractFileUrl?: string;
    contractNotes?: string;
    renewalReminderDays?: number;
}
export declare class FindCorporateAccountsQueryDto {
    search?: string;
    accountType?: CorporateAccountType;
    status?: CorporateAccountStatus;
    salesPersonId?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
//# sourceMappingURL=corporate-account.dto.d.ts.map