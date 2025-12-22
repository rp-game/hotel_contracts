/**
 * Seasonal Adjustments NATS Contracts (5 patterns)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { SeasonalAdjustment } from '../types';
export interface FindAllSeasonalAdjustmentsRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
}
export interface FindAllSeasonalAdjustmentsResponse {
    data: SeasonalAdjustment[];
}
export type FindAllSeasonalAdjustmentsNatsResponse = NatsResponse<FindAllSeasonalAdjustmentsResponse>;
export interface FindSeasonalAdjustmentByIdRequest {
    id: string;
    tenantId: string;
}
export interface FindSeasonalAdjustmentByIdResponse {
    data: SeasonalAdjustment;
}
export type FindSeasonalAdjustmentByIdNatsResponse = NatsResponse<FindSeasonalAdjustmentByIdResponse>;
export interface CreateSeasonalAdjustmentRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId: string;
    seasonName: string;
    startDate: string;
    endDate: string;
    adjustmentType: 'PERCENTAGE' | 'FIXED';
    adjustmentValue: number;
    description?: string;
    isActive?: boolean;
}
export interface CreateSeasonalAdjustmentResponse {
    data: SeasonalAdjustment;
    message: string;
}
export type CreateSeasonalAdjustmentNatsResponse = NatsResponse<CreateSeasonalAdjustmentResponse>;
export interface UpdateSeasonalAdjustmentRequest {
    id: string;
    tenantId: string;
    dto: {
        seasonName?: string;
        startDate?: string;
        endDate?: string;
        adjustmentType?: 'PERCENTAGE' | 'FIXED';
        adjustmentValue?: number;
        description?: string;
        isActive?: boolean;
    };
}
export interface UpdateSeasonalAdjustmentResponse {
    data: SeasonalAdjustment;
    message: string;
}
export type UpdateSeasonalAdjustmentNatsResponse = NatsResponse<UpdateSeasonalAdjustmentResponse>;
export interface DeleteSeasonalAdjustmentRequest {
    id: string;
    tenantId: string;
}
export interface DeleteSeasonalAdjustmentResponse {
    message: string;
}
export type DeleteSeasonalAdjustmentNatsResponse = NatsResponse<DeleteSeasonalAdjustmentResponse>;
//# sourceMappingURL=seasonal-adjustments.nats.d.ts.map