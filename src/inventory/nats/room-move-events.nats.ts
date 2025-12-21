/**
 * Room Move Events NATS Contracts
 *
 * These are EVENT PATTERNS (Fire & Forget - No Response Expected)
 * Published by: booking-service
 * Consumed by: inventory-service
 *
 * Patterns:
 * - room.move.requested
 * - room.move.approved
 * - room.move.scheduled
 * - room.move.executed
 * - room.move.cancelled
 * - room.move.rejected
 */

/**
 * Room Move Requested Event
 * Pattern: room.move.requested
 * Fired when a guest or staff requests to move to a different room
 */
export interface RoomMoveRequestedEvent {
  moveRequestId: string;
  bookingId: string;
  currentRoomId: string;
  targetRoomId: string;
  reason: string;
  requestedBy: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT' | 'EMERGENCY';
  tenantId: string;
  hotelId: string;
  timestamp: string;
}

/**
 * Room Move Approved Event
 * Pattern: room.move.approved
 * Fired when a manager approves a room move request
 */
export interface RoomMoveApprovedEvent {
  moveRequestId: string;
  bookingId: string;
  currentRoomId: string;
  targetRoomId: string;
  approvedBy: string;
  approvalNotes?: string;
  tenantId: string;
  hotelId: string;
  timestamp: string;
}

/**
 * Room Move Scheduled Event
 * Pattern: room.move.scheduled
 * Fired when a room move is scheduled for a specific time
 */
export interface RoomMoveScheduledEvent {
  moveRequestId: string;
  bookingId: string;
  currentRoomId: string;
  targetRoomId: string;
  scheduledFor: string; // ISO datetime
  estimatedDuration?: number; // minutes
  notes?: string;
  tenantId: string;
  hotelId: string;
  timestamp: string;
}

/**
 * Room Move Executed Event
 * Pattern: room.move.executed
 * Fired when a room move is actually executed
 */
export interface RoomMoveExecutedEvent {
  moveRequestId: string;
  bookingId: string;
  currentRoomId: string;
  targetRoomId: string;
  executedBy: string;
  executedAt: string; // ISO datetime
  actualDuration?: number; // minutes
  notes?: string;
  tenantId: string;
  hotelId: string;
  timestamp: string;
}

/**
 * Room Move Cancelled Event
 * Pattern: room.move.cancelled
 * Fired when a room move is cancelled
 */
export interface RoomMoveCancelledEvent {
  moveRequestId: string;
  bookingId: string;
  currentRoomId: string;
  targetRoomId?: string;
  cancelledBy: string;
  cancellationReason: string;
  tenantId: string;
  hotelId: string;
  timestamp: string;
}

/**
 * Room Move Rejected Event
 * Pattern: room.move.rejected
 * Fired when a room move request is rejected by management
 */
export interface RoomMoveRejectedEvent {
  moveRequestId: string;
  bookingId: string;
  currentRoomId: string;
  targetRoomId: string;
  rejectedBy: string;
  rejectionReason: string;
  notes?: string;
  tenantId: string;
  hotelId: string;
  timestamp: string;
}
