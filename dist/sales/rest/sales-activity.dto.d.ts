/**
 * Sales Activity REST DTOs
 * Used by api-gateway controllers for request validation
 */
import { SalesActivityType } from '../enums/sales.enum';
export declare class CreateSalesActivityDto {
    hotelId: string;
    salesPersonId: string;
    salesPersonName: string;
    activityType: SalesActivityType;
    subject: string;
    description?: string;
    activityDate: string;
    corporateAccountId?: string;
    travelAgentId?: string;
    contactName?: string;
    outcome?: string;
    followUpDate?: string;
}
export declare class UpdateSalesActivityDto {
    activityType?: SalesActivityType;
    subject?: string;
    description?: string;
    activityDate?: string;
    corporateAccountId?: string;
    travelAgentId?: string;
    contactName?: string;
    outcome?: string;
    followUpDate?: string;
}
export declare class FindSalesActivitiesQueryDto {
    hotelId?: string;
    salesPersonId?: string;
    activityType?: SalesActivityType;
    corporateAccountId?: string;
    travelAgentId?: string;
    dateFrom?: string;
    dateTo?: string;
    search?: string;
    page?: number;
    limit?: number;
}
//# sourceMappingURL=sales-activity.dto.d.ts.map