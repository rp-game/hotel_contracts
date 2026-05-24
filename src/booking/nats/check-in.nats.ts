/**
 * Check-In & Check-Out NATS Contracts
 * Patterns: booking.check_in, booking.check_out, booking.pending_checkins
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';
import { BookingResponseDto } from '../dto/booking-response.dto';
import { BillItem } from './mobile-checkout.nats';
import { BackdateReasonCategory } from '../enums/booking.enum';

// ============= CHECK-IN =============

export interface PrimaryGuestData {
  fullName: string;
  email?: string;
  phone?: string;
  nationality?: string;
  address?: string;
  idType?: string;
  idNumber?: string;
  dateOfBirth?: string;
}

export interface CheckInBookingNatsRequest {
  id: string;  // bookingId
  tenantId: string;
  hotelId: string;
  actualCheckInTime?: string;
  primaryGuest?: PrimaryGuestData;
  additionalGuests?: any[];
  keyCardNumbers?: string;
  depositAmount?: number;
  notes?: string;
  checkedInBy: string;
  earlyCheckInFee?: number;
  lateCheckOutFee?: number;

  // Backdate check-in fields — optional. Gateway forwards from JWT/body.
  effectiveCheckInDate?: string;          // YYYY-MM-DD; default = today in hotel timezone
  backdateReasonCategory?: BackdateReasonCategory;
  backdateReasonNote?: string;
  userRoles?: string[];                   // Gateway pass roles từ JWT để service compute window

  // Phase 2 per-room mutation — optional. Empty/undefined → apply to all
  // booking_rooms matching transition status. Specific UUIDs → apply only
  // to those rooms.
  roomIds?: string[];
}

/**
 * REST DTO for check-in endpoint (shared across api-gateway and booking-service)
 */
export class CheckInBookingDto {
  @ApiPropertyOptional({ description: 'Tenant ID', format: 'uuid' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID', format: 'uuid' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Actual check-in time (ISO 8601)' })
  actualCheckInTime?: string;

  @ApiPropertyOptional({ description: 'Primary guest information' })
  primaryGuest?: PrimaryGuestData;

  @ApiPropertyOptional({ description: 'Additional guests', type: [Object] })
  additionalGuests?: any[];

  @ApiPropertyOptional({ description: 'Key card numbers issued' })
  keyCardNumbers?: string;

  @ApiPropertyOptional({ description: 'Deposit amount collected (VND)', minimum: 0 })
  depositAmount?: number;

  @ApiPropertyOptional({ description: 'Check-in notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'User ID who processed check-in', format: 'uuid' })
  checkedInBy?: string;

  @ApiPropertyOptional({
    description: 'Early check-in fee (VND). Overrides value set at booking creation. Set to 0 to waive.',
    minimum: 0,
  })
  earlyCheckInFee?: number;

  @ApiPropertyOptional({
    description: 'Late check-out fee (VND). Overrides value set at booking creation. Set to 0 to waive.',
    minimum: 0,
  })
  lateCheckOutFee?: number;

  @ApiPropertyOptional({
    description: 'Ngày nhận phòng thực tế (YYYY-MM-DD). Default = today in hotel timezone. ' +
      'Nếu < today → backdate check-in (yêu cầu quyền + reason theo role).',
  })
  effectiveCheckInDate?: string;

  @ApiPropertyOptional({
    description: 'Lý do backdate (required khi daysBack > 1)',
    enum: BackdateReasonCategory,
  })
  backdateReasonCategory?: BackdateReasonCategory;

  @ApiPropertyOptional({
    description: 'Phase 2 per-room check-in: array of booking_room IDs. ' +
      'Empty/undefined → apply to all rooms matching CONFIRMED→CHECKED_IN transition.',
    type: [String],
  })
  roomIds?: string[];

  @ApiPropertyOptional({ description: 'Ghi chú thêm cho backdate' })
  backdateReasonNote?: string;
}

export interface BookingData {
  id: string;
  bookingReference: string;
  tenantId: string;
  hotelId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkInDate: string;
  checkOutDate: string;
  roomTypeId: string;
  roomTypeName: string;
  roomId?: string;
  roomNumber?: string;
  status: string;
  actualCheckInTime?: string;
  actualCheckOutTime?: string;
  adults: number;
  children: number;
  totalAmount: number;
  depositAmount?: number;
  createdAt: string;
  updatedAt: string;
}

// Backward compatibility alias (deprecated, use BookingData instead)
export type CheckInBookingData = BookingData;

export type CheckInBookingNatsResponse = NatsResponse<CheckInBookingData>;

// ============= CHECK-OUT =============

export class CheckOutBookingNatsRequest {
  @ApiProperty() bookingId: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiPropertyOptional() actualCheckOutTime?: string;
  @ApiPropertyOptional() additionalCharges?: number;
  @ApiPropertyOptional() notes?: string;
  @ApiProperty() checkedOutBy: string;
  @ApiPropertyOptional() checkedOutByName?: string;
  @ApiPropertyOptional() finalAmount?: number;
  @ApiPropertyOptional() finalBillAmount?: string | number;
  @ApiPropertyOptional() paymentMethod?: string;
  @ApiPropertyOptional() paymentAmount?: number;
  @ApiPropertyOptional() corporateAccountId?: string;
  @ApiPropertyOptional({ type: () => Array }) billItems?: BillItem[];
  @ApiPropertyOptional() invoiceRequired?: boolean;
  @ApiPropertyOptional() invoiceCompanyName?: string;
  @ApiPropertyOptional() invoiceTaxCode?: string;
  @ApiPropertyOptional() invoiceAddress?: string;
  @ApiPropertyOptional() invoiceEmail?: string;
  @ApiPropertyOptional() isBackdate?: boolean;

  @ApiPropertyOptional({
    description: 'Phase 2 per-room: array of booking_room IDs to check out. Empty/undefined → all eligible rooms.',
    type: [String],
  })
  roomIds?: string[];
}

export type CheckOutBookingNatsResponse = NatsResponse<BookingResponseDto>;

// ============= PENDING CHECK-INS =============

export interface GetPendingCheckinsNatsRequest {
  tenantId: string;
  hotelId: string;
  date?: string;  // Check-in date (YYYY-MM-DD), defaults to today in hotel timezone
  page?: number;
  limit?: number;
  status?: string;
}

/**
 * Pending Check-in Booking Information
 * Used for both NATS response and REST API response
 * Single source of truth for check-in data structure
 */
export class PendingCheckinBooking {
  @ApiProperty({ description: 'Booking ID (UUID)' })
  id: string;

  @ApiProperty({ description: 'Booking reference code (unique, alphanumeric)' })
  bookingCode: string;

  @ApiProperty({ description: 'Guest full name' })
  guestName: string;

  @ApiProperty({ description: 'Guest email address' })
  guestEmail: string;

  @ApiProperty({ description: 'Guest phone number' })
  guestPhone: string;

  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD format)' })
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD format)' })
  checkOutDate: string;

  @ApiProperty({ description: 'Estimated check-in time (ISO 8601 format)', required: false })
  estimatedCheckInTime?: string;

  @ApiProperty({ description: 'Room type name' })
  roomType: string;

  @ApiProperty({ description: 'Room number or "Unassigned"' })
  roomNumber: string;

  @ApiProperty({ description: 'Room type ID (UUID)' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room ID (UUID), null if not yet assigned', required: false })
  roomId?: string;

  @ApiProperty({ description: 'Total guest count (adults + children)' })
  guestCount: number;

  @ApiProperty({ description: 'Booking status (CONFIRMED, PENDING, etc.)' })
  status: string;

  @ApiProperty({ description: 'Room assignment status (ASSIGNED, PENDING, UNASSIGNED)' })
  assignmentStatus: string;

  @ApiProperty({ description: 'Special requests from guest', required: false })
  specialRequests?: string;

  @ApiProperty({ description: 'Total booking amount (currency unit)' })
  totalAmount: number;

  @ApiProperty({ description: 'Amount already paid' })
  paidAmount: number;

  @ApiProperty({ description: 'Remaining amount to pay (totalAmount - paidAmount, calculated by backend)' })
  remainingAmount: number;

  @ApiProperty({ description: 'Customer loyalty points', required: false })
  loyaltyPoints?: number;

  @ApiProperty({ description: 'Customer loyalty tier (e.g., GOLD, SILVER, BRONZE)', required: false })
  loyaltyTier?: string;

  @ApiProperty({ description: 'CRM Customer ID (UUID) — used to lookup guest profile', required: false })
  customerId?: string;

  @ApiProperty({ description: 'Estimated check-out time (ISO 8601 format)', required: false })
  estimatedCheckOutTime?: string;

  @ApiProperty({ description: 'Early check-in fee captured at booking creation (will be posted to folio on check-in)', required: false, type: Number, nullable: true })
  earlyCheckInFee?: number | null;

  @ApiProperty({ description: 'Late check-out fee captured at booking creation (will be posted to folio on check-in)', required: false, type: Number, nullable: true })
  lateCheckOutFee?: number | null;
}

/**
 * Pending Check-ins List Response Data
 */
export class PendingCheckinsListData {
  @ApiProperty({ description: 'List of bookings pending check-in', type: [PendingCheckinBooking] })
  bookings: PendingCheckinBooking[];

  @ApiProperty({ description: 'Total number of pending check-ins across all pages' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit: number;
}

export type GetPendingCheckinsNatsResponse = NatsResponse<PendingCheckinsListData>;
