/**
 * Corporate Account Types
 */
export declare class CorporateAccountSummary {
    id: string;
    accountCode: string;
    companyName: string;
    contactPerson?: string;
    contactPhone?: string;
    contactEmail?: string;
    salesPersonName?: string;
    status: string;
}
export declare class CorporateAccountDetails extends CorporateAccountSummary {
    industry?: string;
    taxCode?: string;
    address?: string;
    salesPersonId?: string;
    paymentMethod?: string;
    paymentTermDays: number;
    creditLimit?: number;
    contractNumber?: string;
    contractStartDate?: string;
    contractEndDate?: string;
    projectedRoomNights?: number;
    notes?: string;
    createdByName?: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=corporate-account.types.d.ts.map