/**
 * Room Type List & Detail NATS Contracts
 *
 * Patterns:
 *   inventory.room-types.findAll — list all active room types (no availability check)
 *   inventory.room-types.findOne — get single room type detail
 *
 * Price = basePrice with rate plan adjustment applied inline (no pricing-service call).
 *
 * Handler: inventory-service
 * Called by: api-gateway, booking UI
 */
import { NatsResponse } from '../../common';
export { CancellationPolicySummaryDto } from './room-type-search.nats';
export declare class ListRoomTypesRequest {
    tenantId: string;
    hotelId: string;
    page?: number;
    limit?: number;
}
export declare class GetRoomTypeRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
export declare class RatePlanSummaryDto {
    ratePlanId: string;
    ratePlanName: string;
    planType: string;
    derivationType?: string;
    derivationValue?: number;
    mealPlan: string | null;
    paymentType: string | null;
    cancellationPolicy: {
        type: string;
        deadlineHours?: number;
        penaltyPercent?: number;
        description?: string;
    } | null;
    pricePerUnit: number;
}
export declare class RoomTypeListItem {
    id: string;
    name: string;
    description: string | null;
    capacity: number;
    numberOfBeds: number;
    basePrice: number;
    amenities: string[];
    images: string[];
    ratePlans: RatePlanSummaryDto[];
}
export declare class ListRoomTypesResponse {
    roomTypes: RoomTypeListItem[];
    total: number;
    page: number;
    limit: number;
}
export type GetRoomTypeResponse = RoomTypeListItem;
export type ListRoomTypesNatsResponse = NatsResponse<ListRoomTypesResponse>;
export type GetRoomTypeNatsResponse = NatsResponse<GetRoomTypeResponse>;
//# sourceMappingURL=room-type-list.nats.d.ts.map