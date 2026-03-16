/**
 * Group Block Response Types
 *
 * Classes with @ApiProperty for Swagger documentation.
 * Used by both NATS responses and REST API responses.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GroupBlockStatus, GroupBillingMode, InventoryControlMode, GroupBlockAction } from '../enums/group-block.enum';

/**
 * Block allocation details for display
 */
export class BlockAllocationDetails {
  @ApiProperty({ description: 'Allocation ID' })
  id: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name' })
  roomTypeName: string;

  @ApiProperty({ description: 'Number of rooms allotted' })
  allottedRooms: number;

  @ApiProperty({ description: 'Number of rooms picked up' })
  pickedUpRooms: number;

  @ApiPropertyOptional({ description: 'Rate override for this allocation' })
  rateOverride?: number;

  @ApiProperty({ description: 'Start date (YYYY-MM-DD)' })
  startDate: string;

  @ApiProperty({ description: 'End date (YYYY-MM-DD)' })
  endDate: string;
}

/**
 * Group block history entry for audit trail
 */
export class GroupBlockHistoryEntry {
  @ApiProperty({ description: 'History entry ID' })
  id: string;

  @ApiProperty({ description: 'Action performed', enum: GroupBlockAction })
  action: GroupBlockAction;

  @ApiPropertyOptional({ description: 'User who performed the action' })
  performedBy?: string;

  @ApiPropertyOptional({ description: 'Name of user who performed the action' })
  performedByName?: string;

  @ApiPropertyOptional({ description: 'Previous data snapshot' })
  previousData?: Record<string, any>;

  @ApiPropertyOptional({ description: 'New data snapshot' })
  newData?: Record<string, any>;

  @ApiProperty({ description: 'Timestamp of the action' })
  createdAt: string;
}

/**
 * Group block summary for list views (flat, independent class)
 */
export class GroupBlockSummary {
  @ApiProperty({ description: 'Group block ID' })
  id: string;

  @ApiProperty({ description: 'Unique block code (e.g., GB-20260316-001)' })
  blockCode: string;

  @ApiProperty({ description: 'Group name' })
  groupName: string;

  @ApiProperty({ description: 'Block status', enum: GroupBlockStatus })
  status: GroupBlockStatus;

  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD)' })
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD)' })
  checkOutDate: string;

  @ApiProperty({ description: 'Total rooms allotted across all allocations' })
  totalRooms: number;

  @ApiProperty({ description: 'Total rooms picked up (booked)' })
  pickedUpRooms: number;

  @ApiProperty({ description: 'Total rooms cancelled' })
  cancelledRooms: number;

  @ApiPropertyOptional({ description: 'Organizer name' })
  organizerName?: string;

  @ApiPropertyOptional({ description: 'Organizer email' })
  organizerEmail?: string;

  @ApiProperty({ description: 'Billing mode', enum: GroupBillingMode })
  billingMode: GroupBillingMode;

  @ApiProperty({ description: 'Created timestamp' })
  createdAt: string;
}

/**
 * Group block full details for detail view (flat, independent class — NOT extending Summary)
 */
export class GroupBlockDetails {
  @ApiProperty({ description: 'Group block ID' })
  id: string;

  @ApiProperty({ description: 'Unique block code' })
  blockCode: string;

  @ApiProperty({ description: 'Group name' })
  groupName: string;

  @ApiProperty({ description: 'Block status', enum: GroupBlockStatus })
  status: GroupBlockStatus;

  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD)' })
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD)' })
  checkOutDate: string;

  @ApiPropertyOptional({ description: 'Cutoff date for pickup' })
  cutoffDate?: string;

  @ApiProperty({ description: 'Total rooms allotted' })
  totalRooms: number;

  @ApiProperty({ description: 'Total rooms picked up' })
  pickedUpRooms: number;

  @ApiProperty({ description: 'Total rooms cancelled' })
  cancelledRooms: number;

  // Organizer info
  @ApiPropertyOptional({ description: 'Organizer name' })
  organizerName?: string;

  @ApiPropertyOptional({ description: 'Organizer email' })
  organizerEmail?: string;

  @ApiPropertyOptional({ description: 'Organizer phone' })
  organizerPhone?: string;

  @ApiPropertyOptional({ description: 'Associated company ID' })
  companyId?: string;

  // Settings
  @ApiProperty({ description: 'Billing mode', enum: GroupBillingMode })
  billingMode: GroupBillingMode;

  @ApiProperty({ description: 'Inventory control mode', enum: InventoryControlMode })
  inventoryControl: InventoryControlMode;

  // Financial
  @ApiProperty({ description: 'Whether deposit is required' })
  depositRequired: boolean;

  @ApiPropertyOptional({ description: 'Required deposit amount' })
  depositAmount?: number;

  @ApiProperty({ description: 'Deposit amount already paid' })
  depositPaidAmount: number;

  @ApiPropertyOptional({ description: 'Commission percentage' })
  commissionPercentage?: number;

  @ApiPropertyOptional({ description: 'Complimentary room ratio (e.g., "1:20")' })
  compRoomRatio?: string;

  @ApiPropertyOptional({ description: 'Credit term in days' })
  creditTermDays?: number;

  @ApiPropertyOptional({ description: 'Contract number' })
  contractNumber?: string;

  // Notes
  @ApiPropertyOptional({ description: 'Internal notes' })
  internalNotes?: string;

  @ApiPropertyOptional({ description: 'Special requests' })
  specialRequests?: string;

  // Creator info
  @ApiProperty({ description: 'Created by user ID' })
  createdBy: string;

  @ApiPropertyOptional({ description: 'Created by user name' })
  createdByName?: string;

  @ApiProperty({ description: 'Created timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Updated timestamp' })
  updatedAt: string;

  // Relations
  @ApiProperty({ description: 'Room type allocations', type: [BlockAllocationDetails] })
  allocations: BlockAllocationDetails[];

  @ApiProperty({ description: 'Audit history', type: [GroupBlockHistoryEntry] })
  history: GroupBlockHistoryEntry[];
}

/**
 * Group block statistics by status
 */
export class GroupBlockStatusStat {
  @ApiProperty({ description: 'Block status', enum: GroupBlockStatus })
  status: GroupBlockStatus;

  @ApiProperty({ description: 'Number of blocks in this status' })
  count: number;

  @ApiProperty({ description: 'Total rooms allotted in this status' })
  totalRooms: number;

  @ApiProperty({ description: 'Total rooms picked up in this status' })
  pickedUpRooms: number;
}

export class GroupBlockStats {
  @ApiProperty({ description: 'Stats broken down by status', type: [GroupBlockStatusStat] })
  byStatus: GroupBlockStatusStat[];

  @ApiProperty({ description: 'Total number of group blocks' })
  totalBlocks: number;

  @ApiProperty({ description: 'Total rooms across all blocks' })
  totalRooms: number;

  @ApiProperty({ description: 'Total rooms picked up across all blocks' })
  totalPickedUp: number;
}
