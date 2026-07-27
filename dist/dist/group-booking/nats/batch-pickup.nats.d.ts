/**
 * Batch Pickup NATS Contract
 *
 * NATS Pattern: group-block.batch_pickup
 * Handler: booking-service
 * Called by: api-gateway
 *
 * Creates multiple bookings from a group block allocation at once.
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Guest item for batch pickup
 */
export interface BatchPickupGuestItem {
    guestName?: string;
    guestPhone?: string;
}
/**
 * NATS request to batch pickup rooms from a group block allocation
 */
export interface BatchPickupNatsRequest {
    tenantId: string;
    hotelId: string;
    groupBlockId: string;
    blockAllocationId: string;
    numberOfRooms: number;
    guests: BatchPickupGuestItem[];
    userId: string;
    userName: string;
}
/**
 * Result for a single pickup booking creation
 */
export interface BatchPickupResultItem {
    bookingId: string;
    bookingCode: string;
    guestName: string;
    success: boolean;
    error?: string;
}
/**
 * Aggregated result of batch pickup
 */
export interface BatchPickupResult {
    total: number;
    succeeded: number;
    failed: number;
    results: BatchPickupResultItem[];
}
export type BatchPickupNatsResponse = NatsResponse<BatchPickupResult>;
//# sourceMappingURL=batch-pickup.nats.d.ts.map