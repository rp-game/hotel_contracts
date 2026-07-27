/**
 * Sales Activity Response DTOs
 * Used for Swagger documentation and API responses
 */
export declare class SalesActivityResponseDto {
    id: string;
    hotelId: string;
    salesPersonId: string;
    salesPersonName: string;
    activityType: string;
    subject: string;
    description?: string;
    activityDate: string;
    corporateAccountId?: string;
    travelAgentId?: string;
    leadId?: string;
    contactName?: string;
    outcome?: string;
    followUpDate?: string;
    status: string;
    createdByName?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class SalesActivityListResponseDto {
    activities: SalesActivityResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
//# sourceMappingURL=sales-activity-response.dto.d.ts.map