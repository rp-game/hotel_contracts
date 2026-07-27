import { QualityStandardItem } from '../nats/quality-standards.nats';
export declare class GetAllQualityStandardsQueryDto {
    tenantId?: string;
    hotelId?: string;
    roomTypeId?: string;
    isActive?: boolean;
    page?: number;
    limit?: number;
}
export declare class CreateQualityStandardDto {
    name: string;
    description?: string;
    roomTypeId: string;
    items: QualityStandardItem[];
    passingScore: number;
    configuration?: Record<string, any>;
    effectiveDate?: string;
    expiryDate?: string;
    isActive?: boolean;
    createdBy?: string;
}
export declare class UpdateQualityStandardDto {
    name?: string;
    description?: string;
    roomTypeId?: string;
    items?: QualityStandardItem[];
    passingScore?: number;
    configuration?: Record<string, any>;
    effectiveDate?: string;
    expiryDate?: string;
    updatedBy?: string;
}
export declare class GetQualityStandardsStatisticsQueryDto {
    tenantId?: string;
    hotelId?: string;
    startDate?: string;
    endDate?: string;
    roomTypeId?: string;
}
//# sourceMappingURL=quality-standards.rest.d.ts.map