/**
 * Corporate Account Response DTOs
 * Used for Swagger documentation and API responses
 */
export declare class CorporateAccountResponseDto {
    id: string;
    accountCode: string;
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
    paymentTermDays: number;
    creditLimit?: number;
    contractNumber?: string;
    contractStartDate?: string;
    contractEndDate?: string;
    projectedRoomNights?: number;
    status: string;
    notes?: string;
    createdByName?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class CorporateAccountListResponseDto {
    corporateAccounts: CorporateAccountResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
//# sourceMappingURL=corporate-account-response.dto.d.ts.map