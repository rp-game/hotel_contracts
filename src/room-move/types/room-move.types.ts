import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RoomMoveStatus, RoomMovePriority } from '../enums';

/**
 * Complete room move details record
 * Contains all metadata and history of a room move request
 */
export class RoomMoveDetails {
  @ApiProperty({ description: 'Move request ID' })
  moveRequestId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Booking ID' })
  bookingId: string;

  @ApiProperty({ description: 'Current room ID' })
  currentRoomId: string;

  @ApiProperty({ description: 'Target room ID' })
  targetRoomId: string;

  @ApiProperty({ description: 'Move reason' })
  reason: string;

  @ApiProperty({ description: 'Move status', enum: RoomMoveStatus })
  status: RoomMoveStatus;

  @ApiProperty({ description: 'Move priority', enum: RoomMovePriority })
  priority: RoomMovePriority;

  @ApiProperty({ description: 'Requested by user ID' })
  requestedBy: string;

  @ApiProperty({ description: 'Request timestamp (ISO datetime)' })
  requestedAt: string;

  @ApiPropertyOptional({ description: 'Approved by user ID' })
  approvedBy?: string;

  @ApiPropertyOptional({ description: 'Approval timestamp (ISO datetime)' })
  approvedAt?: string;

  @ApiPropertyOptional({ description: 'Scheduled move time (ISO datetime)' })
  scheduledFor?: string;

  @ApiPropertyOptional({ description: 'Completion timestamp (ISO datetime)' })
  completedAt?: string;

  @ApiPropertyOptional({ description: 'Cancellation timestamp (ISO datetime)' })
  cancelledAt?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Estimated duration in minutes' })
  estimatedDuration?: number;

  @ApiPropertyOptional({ description: 'Actual duration in minutes' })
  actualDuration?: number;
}

/**
 * Minimal room move item for list views
 * Used in search results and dashboards
 */
export class RoomMoveListItem {
  @ApiProperty({ description: 'Move request ID' })
  moveRequestId: string;

  @ApiProperty({ description: 'Booking ID' })
  bookingId: string;

  @ApiProperty({ description: 'Current room ID' })
  currentRoomId: string;

  @ApiProperty({ description: 'Target room ID' })
  targetRoomId: string;

  @ApiProperty({ description: 'Move status', enum: RoomMoveStatus })
  status: RoomMoveStatus;

  @ApiProperty({ description: 'Move priority', enum: RoomMovePriority })
  priority: RoomMovePriority;

  @ApiProperty({ description: 'Request timestamp (ISO datetime)' })
  requestedAt: string;

  @ApiProperty({ description: 'Requested by user ID' })
  requestedBy: string;
}

/**
 * Paginated search results for room moves
 */
export class RoomMoveSearchResult {
  @ApiProperty({ description: 'Room move items', type: [RoomMoveListItem] })
  items: RoomMoveListItem[];

  @ApiProperty({ description: 'Total count' })
  total: number;

  @ApiProperty({ description: 'Current page' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiProperty({ description: 'Whether more results exist' })
  hasMore: boolean;
}

/**
 * Available room details for assignment
 * Returned when searching for available rooms for room move
 */
export class AvailableRoom {
  @ApiProperty({ description: 'Room ID' })
  roomId: string;

  @ApiProperty({ description: 'Room number' })
  roomNumber: string;

  @ApiProperty({ description: 'Room type' })
  roomType: string;

  @ApiProperty({ description: 'Floor number' })
  floor: number;

  @ApiProperty({ description: 'Current room status', enum: ['available', 'occupied', 'dirty', 'maintenance', 'blocked'] })
  currentStatus: 'available' | 'occupied' | 'dirty' | 'maintenance' | 'blocked';

  @ApiPropertyOptional({ description: 'Room features', type: [String] })
  features?: string[];

  @ApiPropertyOptional({ description: 'Room price' })
  price?: number;

  @ApiPropertyOptional({ description: 'Currency code' })
  currency?: string;
}

/**
 * Pricing calculation results for room moves
 * Contains pricing breakdown and additional charges
 */
export class RoomMovePricingDetails {
  @ApiProperty({ description: 'Original room price' })
  originalPrice: number;

  @ApiProperty({ description: 'New room price' })
  newRoomPrice: number;

  @ApiProperty({ description: 'Price difference' })
  priceDifference: number;

  @ApiProperty({ description: 'Adjustment type', enum: ['upgrade', 'downgrade', 'no-change'] })
  adjustmentType: 'upgrade' | 'downgrade' | 'no-change';

  @ApiProperty({ description: 'Refund amount' })
  refundAmount: number;

  @ApiProperty({ description: 'Additional charges' })
  additionalCharges: number;

  @ApiProperty({ description: 'Total amount' })
  totalAmount: number;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ description: 'Calculation timestamp (ISO datetime)' })
  calculatedAt: string;

  @ApiProperty({ description: 'Valid until timestamp (ISO datetime)' })
  validUntil: string;
}
