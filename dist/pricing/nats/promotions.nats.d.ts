/**
 * Promotions NATS Contracts (1 pattern)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { PromotionsPaginatedResponse, PromotionStatus } from '../types';
export interface GetPromotionsRequest {
    tenantId: string;
    hotelId: string;
    roomTypeId?: string;
    checkIn?: string;
    checkOut?: string;
    promoCode?: string;
    status?: PromotionStatus;
    page?: number;
    limit?: number;
}
export interface GetPromotionsResponse {
    data: PromotionsPaginatedResponse;
}
export type GetPromotionsNatsResponse = NatsResponse<GetPromotionsResponse>;
//# sourceMappingURL=promotions.nats.d.ts.map