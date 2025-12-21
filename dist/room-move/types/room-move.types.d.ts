import { RoomMoveStatus, RoomMovePriority } from '../enums';
/**
 * Complete room move details record
 * Contains all metadata and history of a room move request
 */
export interface RoomMoveDetails {
    moveRequestId: string;
    tenantId: string;
    hotelId: string;
    bookingId: string;
    currentRoomId: string;
    targetRoomId: string;
    reason: string;
    status: RoomMoveStatus;
    priority: RoomMovePriority;
    requestedBy: string;
    requestedAt: string;
    approvedBy?: string;
    approvedAt?: string;
    scheduledFor?: string;
    completedAt?: string;
    cancelledAt?: string;
    notes?: string;
    estimatedDuration?: number;
    actualDuration?: number;
}
/**
 * Minimal room move item for list views
 * Used in search results and dashboards
 */
export interface RoomMoveListItem {
    moveRequestId: string;
    bookingId: string;
    currentRoomId: string;
    targetRoomId: string;
    status: RoomMoveStatus;
    priority: RoomMovePriority;
    requestedAt: string;
    requestedBy: string;
}
/**
 * Paginated search results for room moves
 */
export interface RoomMoveSearchResult {
    items: RoomMoveListItem[];
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
}
/**
 * Available room details for assignment
 * Returned when searching for available rooms for room move
 */
export interface AvailableRoom {
    roomId: string;
    roomNumber: string;
    roomType: string;
    floor: number;
    currentStatus: 'available' | 'occupied' | 'dirty' | 'maintenance' | 'blocked';
    features?: string[];
    price?: number;
    currency?: string;
}
/**
 * Pricing calculation results for room moves
 * Contains pricing breakdown and additional charges
 */
export interface RoomMovePricingDetails {
    originalPrice: number;
    newRoomPrice: number;
    priceDifference: number;
    adjustmentType: 'upgrade' | 'downgrade' | 'no-change';
    refundAmount: number;
    additionalCharges: number;
    totalAmount: number;
    currency: string;
    calculatedAt: string;
    validUntil: string;
}
//# sourceMappingURL=room-move.types.d.ts.map