/**
 * Promotions NATS Contracts (1 pattern)
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { Promotion, PromotionStatus } from '../types';
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
/**
 * Get Promotions Response
 * Fixed: Removed double data nesting - now returns paginated data directly
 */
export interface GetPromotionsResponse {
    data: Promotion[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export type GetPromotionsNatsResponse = NatsResponse<GetPromotionsResponse>;
//# sourceMappingURL=promotions.nats.d.ts.map