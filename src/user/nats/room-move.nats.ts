/**
 * Room Move Event NATS Message Types
 * All room move-related event payloads
 * Exported from user-service
 */

/**
 * Room Move Event - Triggered when a room move is requested/approved/completed
 * Events: room.move.requested, room.move.approved, room.move.completed, room.move.cancelled
 */
export interface RoomMoveEvent {
  tenantId: string;
  hotelId: string;
  moveRequestId: string;
  bookingId: string;
  currentRoomId: string;
  targetRoomId?: string;
  oldRoomId?: string;
  status: string;
  reason: string;
  priority: string;
  requestedBy: string;
  requestedAt: string;
  scheduledMoveTime?: string;
  approvedBy?: string;
  cancelledBy?: string;
  porterId?: string;
  guestId?: string;
  guestApprovalRequired?: boolean;
  metadata?: any;
}
