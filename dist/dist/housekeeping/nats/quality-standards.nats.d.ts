/**
 * Quality Standards NATS Contracts
 * Patterns: housekeeping.quality-standards.*
 */
import { NatsResponse } from '../../common';
export declare class QualityStandardItem {
    name: string;
    description?: string;
    category: string;
    points: number;
    isCritical?: boolean;
    sortOrder: number;
    isActive?: boolean;
    instructions?: Record<string, any>;
    inspectorNotes?: string;
}
export declare class QualityStandard {
    id: string;
    name: string;
    description?: string;
    roomTypeId: string;
    roomTypeName?: string;
    version: number;
    isActive: boolean;
    items: QualityStandardItem[];
    passingScore?: number;
    configuration?: Record<string, any>;
    effectiveDate?: string | Date;
    expiryDate?: string | Date;
    createdBy: string;
    tenantId: string;
    hotelId: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
export interface CreateQualityStandardNatsRequest {
    createData: {
        name: string;
        description?: string;
        roomTypeId: string;
        passingScore: number;
        createdBy: string;
        items: QualityStandardItem[];
        configuration?: Record<string, any>;
        effectiveDate?: string | Date;
        expiryDate?: string | Date;
    };
    tenantId: string;
    hotelId: string;
}
export type CreateQualityStandardNatsResponse = NatsResponse<QualityStandard>;
export interface FindAllQualityStandardsNatsRequest {
    tenantId: string;
    hotelId: string;
    filters?: {
        page?: number;
        limit?: number;
        roomTypeId?: string;
        isActive?: boolean;
    };
}
export interface QualityStandardsListData {
    data: QualityStandard[];
    total: number;
    page: number;
    limit: number;
}
export type FindAllQualityStandardsNatsResponse = NatsResponse<QualityStandardsListData>;
export interface QualityStandardsStatisticsNatsRequest {
    tenantId: string;
    hotelId: string;
    filters?: any;
}
export declare class QualityStandardsStatistics {
    totalStandards: number;
    activeStandards: number;
    inactiveStandards?: number;
    averageScore: number;
    standardsByRoomType?: Record<string, number>;
    byRoomType?: Record<string, number>;
    averageItemsPerStandard?: number;
}
export type QualityStandardsStatisticsNatsResponse = NatsResponse<QualityStandardsStatistics>;
export interface FindByRoomTypeNatsRequest {
    roomTypeId: string;
    tenantId: string;
    hotelId: string;
}
export type FindByRoomTypeNatsResponse = NatsResponse<QualityStandard>;
export interface FindOneQualityStandardNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
export type FindOneQualityStandardNatsResponse = NatsResponse<QualityStandard>;
export interface UpdateQualityStandardNatsRequest {
    id: string;
    updateData: {
        name?: string;
        description?: string;
        roomTypeId?: string;
        passingScore?: number;
        configuration?: Record<string, any>;
        effectiveDate?: string | Date;
        expiryDate?: string | Date;
        updatedBy?: string;
        items?: QualityStandardItem[];
    };
    tenantId: string;
    hotelId: string;
}
export type UpdateQualityStandardNatsResponse = NatsResponse<QualityStandard>;
export interface DeactivateQualityStandardNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
export type DeactivateQualityStandardNatsResponse = NatsResponse<QualityStandard>;
export interface DeleteQualityStandardNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
export type DeleteQualityStandardNatsResponse = NatsResponse<{
    success: boolean;
    message: string;
}>;
//# sourceMappingURL=quality-standards.nats.d.ts.map