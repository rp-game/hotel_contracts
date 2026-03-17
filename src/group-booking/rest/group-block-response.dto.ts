/**
 * Group Block Response DTOs
 *
 * Wrapper classes for REST API responses with Swagger documentation.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GroupBlockSummary, GroupBlockDetails } from '../types/group-block.types';

/**
 * Paginated list response for group blocks
 */
export class GroupBlockListResponseDto {
  @ApiProperty({ description: 'Array of group block summaries', type: [GroupBlockSummary] })
  data: GroupBlockSummary[];

  @ApiProperty({ description: 'Total number of group blocks matching filters', example: 100 })
  total: number;

  @ApiProperty({ description: 'Current page number (1-indexed)', example: 1 })
  page: number;

  @ApiProperty({ description: 'Number of items per page', example: 10 })
  limit: number;

  @ApiProperty({ description: 'Total number of pages', example: 10 })
  totalPages: number;
}

/**
 * Single group block response wrapper
 */
export class GroupBlockResponseDto {
  @ApiProperty({ description: 'Group block details', type: GroupBlockDetails })
  data: GroupBlockDetails;
}

// =================== Group Block Bookings ===================

export class GroupBlockBookingSummaryDto {
  @ApiProperty() id: string;
  @ApiProperty() bookingCode: string;
  @ApiProperty() guestName: string;
  @ApiProperty() guestPhone: string;
  @ApiProperty() roomTypeName: string;
  @ApiPropertyOptional({ type: String, nullable: true }) roomNumber: string | null;
  @ApiPropertyOptional({ type: String, nullable: true, description: 'Room ID for room assignment' }) roomId: string | null;
  @ApiPropertyOptional({ type: String, nullable: true, description: 'Room type ID for filtering available rooms' }) roomTypeId: string | null;
  @ApiProperty() checkInDate: string;
  @ApiProperty() checkOutDate: string;
  @ApiProperty() status: string;
  @ApiProperty() totalAmount: number;
  @ApiProperty() adultCount: number;
  @ApiProperty() childCount: number;
  @ApiPropertyOptional({ type: String, nullable: true, description: 'Pre-registration status: NOT_STARTED | PARTIAL | COMPLETE' }) preRegistrationStatus: string | null;
}

// =================== Batch Check-In ===================

export class BatchCheckInResultItemDto {
  @ApiProperty() bookingId: string;
  @ApiProperty() bookingCode: string;
  @ApiProperty() success: boolean;
  @ApiPropertyOptional() error?: string;
}

export class BatchCheckInResultDto {
  @ApiProperty() total: number;
  @ApiProperty() succeeded: number;
  @ApiProperty() failed: number;
  @ApiProperty({ type: [BatchCheckInResultItemDto] }) results: BatchCheckInResultItemDto[];
}

// =================== Batch Room Assignment ===================

export class BatchRoomAssignResultItemDto {
  @ApiProperty() bookingId: string;
  @ApiProperty() roomId: string;
  @ApiProperty() roomNumber: string;
  @ApiProperty() success: boolean;
  @ApiPropertyOptional() error?: string;
}

export class BatchRoomAssignResultDto {
  @ApiProperty() total: number;
  @ApiProperty() succeeded: number;
  @ApiProperty() failed: number;
  @ApiProperty({ type: [BatchRoomAssignResultItemDto] }) results: BatchRoomAssignResultItemDto[];
}

// =================== Batch Pickup ===================

export class BatchPickupResultItemDto {
  @ApiProperty() bookingId: string;
  @ApiProperty() bookingCode: string;
  @ApiProperty() guestName: string;
  @ApiProperty() success: boolean;
  @ApiPropertyOptional() error?: string;
}

export class BatchPickupResultDto {
  @ApiProperty() total: number;
  @ApiProperty() succeeded: number;
  @ApiProperty() failed: number;
  @ApiProperty({ type: [BatchPickupResultItemDto] }) results: BatchPickupResultItemDto[];
}

// =================== Master Folio ===================

export class GroupFolioBookingItemDto {
  @ApiProperty() bookingId: string;
  @ApiProperty() bookingCode: string;
  @ApiProperty() guestName: string;
  @ApiProperty() roomTypeName: string;
  @ApiPropertyOptional({ type: String, nullable: true }) roomNumber: string | null;
  @ApiProperty() checkInDate: string;
  @ApiProperty() checkOutDate: string;
  @ApiProperty() status: string;
  @ApiProperty() totalAmount: number;
  @ApiProperty() taxAmount: number;
  @ApiProperty() grossAmount: number;
  @ApiProperty() paidAmount: number;
  @ApiProperty() balance: number;
}

export class GroupFolioSummaryDto {
  @ApiProperty() totalBookings: number;
  @ApiProperty() totalRoomCharges: number;
  @ApiProperty() totalTaxAmount: number;
  @ApiProperty() totalGrossAmount: number;
  @ApiProperty() totalPaidAmount: number;
  @ApiProperty() totalBalance: number;
}

export class GroupMasterFolioDto {
  @ApiProperty() groupBlockId: string;
  @ApiProperty() blockCode: string;
  @ApiProperty() groupName: string;
  @ApiProperty({ type: [GroupFolioBookingItemDto] }) bookings: GroupFolioBookingItemDto[];
  @ApiProperty({ type: GroupFolioSummaryDto }) summary: GroupFolioSummaryDto;
}

// =================== Deposit Payments ===================

export class GroupDepositPaymentDto {
  @ApiProperty() id: string;
  @ApiProperty() groupBlockId: string;
  @ApiProperty() amount: number;
  @ApiProperty() paymentMethod: string;
  @ApiPropertyOptional({ type: String, nullable: true }) reference: string | null;
  @ApiPropertyOptional({ type: String, nullable: true }) notes: string | null;
  @ApiProperty() status: string;
  @ApiProperty() receivedBy: string;
  @ApiPropertyOptional({ type: String, nullable: true }) receivedByName: string | null;
  @ApiPropertyOptional({ type: String, nullable: true }) voidedAt: string | null;
  @ApiPropertyOptional({ type: String, nullable: true }) voidReason: string | null;
  @ApiProperty() createdAt: string;
}

export class GroupDepositListResponseDto {
  @ApiProperty({ type: [GroupDepositPaymentDto] }) deposits: GroupDepositPaymentDto[];
  @ApiProperty() totalDeposited: number;
  @ApiProperty() totalVoided: number;
  @ApiProperty() netDeposited: number;
}
