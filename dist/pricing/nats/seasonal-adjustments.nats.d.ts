/**
 * Seasonal Adjustments NATS Contracts (5 patterns)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { SeasonalAdjustment } from '../types';
export declare class FindAllSeasonalAdjustmentsRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
}
export declare class FindAllSeasonalAdjustmentsResponse {
    data: SeasonalAdjustment[];
}
export type FindAllSeasonalAdjustmentsNatsResponse = NatsResponse<FindAllSeasonalAdjustmentsResponse>;
export declare class FindSeasonalAdjustmentByIdRequest {
    id: string;
    tenantId: string;
}
export declare class FindSeasonalAdjustmentByIdResponse {
    data: SeasonalAdjustment;
}
export type FindSeasonalAdjustmentByIdNatsResponse = NatsResponse<FindSeasonalAdjustmentByIdResponse>;
export declare class CreateSeasonalAdjustmentRequest {
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
export declare class CreateSeasonalAdjustmentResponse {
    data: SeasonalAdjustment;
    message: string;
}
export type CreateSeasonalAdjustmentNatsResponse = NatsResponse<CreateSeasonalAdjustmentResponse>;
/**
 * Update DTO - nested structure for NATS message
 * Contains only the fields that can be updated
 */
export declare class UpdateSeasonalAdjustmentDto {
    seasonName?: string;
    startDate?: string;
    endDate?: string;
    adjustmentType?: 'PERCENTAGE' | 'FIXED';
    adjustmentValue?: number;
    description?: string;
    isActive?: boolean;
}
/**
 * Update request - contains ID, tenantId, and nested dto
 * This is the NATS message structure
 */
export declare class UpdateSeasonalAdjustmentRequest {
    id: string;
    tenantId: string;
    dto: UpdateSeasonalAdjustmentDto;
}
export declare class UpdateSeasonalAdjustmentResponse {
    data: SeasonalAdjustment;
    message: string;
}
export type UpdateSeasonalAdjustmentNatsResponse = NatsResponse<UpdateSeasonalAdjustmentResponse>;
export declare class DeleteSeasonalAdjustmentRequest {
    id: string;
    tenantId: string;
}
export declare class DeleteSeasonalAdjustmentResponse {
    message: string;
}
export type DeleteSeasonalAdjustmentNatsResponse = NatsResponse<DeleteSeasonalAdjustmentResponse>;
//# sourceMappingURL=seasonal-adjustments.nats.d.ts.map