/**
 * Corporate Account REST DTOs
 * Used by api-gateway controllers for request validation
 */
import { CorporateAccountStatus } from '../enums/sales.enum';
export declare class CreateCorporateAccountDto {
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
}
export declare class UpdateCorporateAccountDto {
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
}
export declare class FindCorporateAccountsQueryDto {
    search?: string;
    status?: CorporateAccountStatus;
    salesPersonId?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
//# sourceMappingURL=corporate-account.dto.d.ts.map