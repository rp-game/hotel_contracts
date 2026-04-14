/**
 * Checkout REST DTOs
 * REST request/response shapes for checkout endpoints.
 * Request DTOs: what the controller @Body() receives (no tenantId/staffId — from headers/JWT)
 * Response DTOs: what Swagger shows (string dates, no internal fields)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray, IsNumber, IsBoolean, IsEnum, IsDateString, IsUUID, IsNumberString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CheckoutRoomItem, CheckoutBookingSummary } from '../nats/mobile-checkout.nats';

// ============= SHARED CHECKOUT DTO (used by api-gateway + booking-service) =============

export class FinalPaymentDto {
  @ApiProperty({ description: 'Payment amount' })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ description: 'Payment method' })
  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  @ApiPropertyOptional({ description: 'Payment notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Corporate account ID (required when paymentMethod = COMPANY_ACCOUNT)' })
  @IsOptional()
  @IsUUID()
  corporateAccountId?: string;
}

export class BillItemDto {
  @ApiPropertyOptional({ description: 'Item description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ description: 'Quantity' })
  @IsNumber()
  @IsOptional()
  quantity?: number;

  @ApiPropertyOptional({ description: 'Unit price' })
  @IsString()
  @IsOptional()
  unitPrice?: string;

  @ApiPropertyOptional({ description: 'Total price' })
  @IsString()
  @IsOptional()
  totalPrice?: string;

  @ApiPropertyOptional({ description: 'Item category', enum: ['ROOM', 'SERVICE', 'TAX', 'DEPOSIT'] })
  @IsString()
  @IsOptional()
  category?: 'ROOM' | 'SERVICE' | 'TAX' | 'DEPOSIT';
}

export class CheckOutBookingDto {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsUUID()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Booking ID' })
  @IsOptional()
  @IsUUID()
  bookingId?: string;

  @ApiPropertyOptional({ description: 'Actual check-out time' })
  @IsOptional()
  @IsString()
  actualCheckOutTime?: string;

  @ApiPropertyOptional({ description: 'Additional charges (net amount)' })
  @IsOptional()
  @IsNumber()
  additionalCharges?: number;

  @ApiPropertyOptional({ description: 'Special notes for check-out' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'User ID who processed check-out' })
  @IsOptional()
  @IsUUID()
  checkedOutBy?: string;

  @ApiPropertyOptional({ description: 'Final bill amount' })
  @IsOptional()
  @IsNumber()
  finalAmount?: number;

  @ApiPropertyOptional({ description: 'Final bill amount from frontend calculation', type: String })
  @IsOptional()
  @IsNumberString()
  finalBillAmount?: string | number;

  @ApiPropertyOptional({ description: 'Payment method for checkout' })
  @IsOptional()
  @IsString()
  paymentMethod?: string;

  @ApiPropertyOptional({ description: 'Payment amount collected at checkout' })
  @IsOptional()
  @IsNumber()
  paymentAmount?: number;

  @ApiPropertyOptional({ description: 'Corporate account ID (required when paymentMethod = COMPANY_ACCOUNT)' })
  @IsOptional()
  @IsUUID()
  corporateAccountId?: string;

  @ApiPropertyOptional({ description: 'Bill items breakdown', type: [BillItemDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BillItemDto)
  billItems?: BillItemDto[];

  @ApiPropertyOptional({ description: 'Room inspection notes from frontend' })
  @IsOptional()
  @IsString()
  roomInspectionNotes?: string;

  @ApiPropertyOptional({ description: 'Final payments breakdown', type: [FinalPaymentDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FinalPaymentDto)
  finalPayments?: FinalPaymentDto[];

  @ApiPropertyOptional({ description: 'Late check-out fee (net, pre-tax)', type: Number })
  @IsOptional()
  @IsNumber()
  lateCheckOutFee?: number;

  @ApiPropertyOptional({ description: 'Late check-out fee gross (including VAT + service charge)', type: Number })
  @IsOptional()
  @IsNumber()
  lateCheckOutFeeGross?: number;

  @ApiPropertyOptional({ description: 'VAT rate applied to late check-out fee', type: Number })
  @IsOptional()
  @IsNumber()
  lateCheckOutFeeVatRate?: number;

  @ApiPropertyOptional({ description: 'Service charge rate applied to late check-out fee', type: Number })
  @IsOptional()
  @IsNumber()
  lateCheckOutFeeServiceChargeRate?: number;
}

// ============= REQUEST DTOs =============

export class StartCheckoutRequestDto {
  @ApiProperty({ description: 'Booking ID' })
  @IsString()
  @IsNotEmpty()
  bookingId: string;
}

export class CompleteCheckoutRequestDto {
  @ApiProperty({ description: 'Booking ID' })
  @IsString()
  @IsNotEmpty()
  bookingId: string;

  @ApiPropertyOptional({ description: 'Checkout notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Damages list', type: [Object] })
  @IsOptional()
  @IsArray()
  damages?: Record<string, unknown>[];

  @ApiPropertyOptional({ description: 'Additional services', type: [Object] })
  @IsOptional()
  @IsArray()
  services?: Record<string, unknown>[];
}

// ============= RESPONSE DTOs (REST — serialized, no internal fields) =============

export class StartCheckoutResponseDto {
  @ApiProperty({ description: 'Booking ID' }) bookingId: string;
  @ApiProperty({ description: 'Checkout status' }) status: string;
  @ApiProperty({ description: 'Checkout start time (ISO string)' }) startTime: string;
  @ApiProperty({ description: 'Staff ID' }) staffId: string;
}

export class CompleteCheckoutResponseDto {
  @ApiProperty({ description: 'Booking ID' }) bookingId: string;
  @ApiProperty({ description: 'Checkout status' }) status: string;
  @ApiProperty({ description: 'Checkout completed time (ISO string)' }) completedTime: string;
  @ApiProperty({ description: 'Final amount' }) finalAmount: number;
}

// REST version of CheckoutDataItem — omits tenantId, hotelId, status, source (internal)
export class CheckoutHistoryItemDto {
  @ApiProperty({ description: 'Booking ID' }) id: string;
  @ApiProperty({ description: 'Booking code' }) bookingCode: string;
  @ApiProperty({ description: 'Guest name' }) guestName: string;
  @ApiPropertyOptional({ description: 'Guest email' }) guestEmail?: string;
  @ApiPropertyOptional({ description: 'Guest phone' }) guestPhone?: string;
  @ApiProperty({ description: 'Check-in date' }) checkInDate: string;
  @ApiProperty({ description: 'Check-out date' }) checkOutDate: string;
  @ApiProperty({ description: 'Total amount' }) totalAmount: number;
  @ApiProperty({ description: 'Paid amount' }) paidAmount: number;
  @ApiProperty({ description: 'Payment status' }) paymentStatus: string;
  @ApiProperty({ description: 'Number of rooms' }) roomCount: number;
  @ApiProperty({ description: 'Adult count' }) adultCount: number;
  @ApiProperty({ description: 'Child count' }) childCount: number;
  @ApiProperty({ description: 'Created date' }) createdAt: string;
  @ApiPropertyOptional({ description: 'Created by' }) createdBy?: string;
}

export class CheckoutHistoryResponseDto {
  @ApiProperty({ type: [CheckoutHistoryItemDto] })
  @Type(() => CheckoutHistoryItemDto)
  data: CheckoutHistoryItemDto[];

  @ApiProperty({ description: 'Total count' }) total: number;
  @ApiProperty({ description: 'Current page' }) page: number;
  @ApiProperty({ description: 'Items per page' }) limit: number;
}

export class CheckoutItemsResponseDto {
  @ApiProperty({ type: CheckoutBookingSummary })
  booking: CheckoutBookingSummary;

  @ApiProperty({ type: [CheckoutRoomItem] })
  rooms: CheckoutRoomItem[];

  @ApiProperty({ type: [Object], description: 'Additional services' })
  services: Record<string, unknown>[];

  @ApiProperty({ type: [Object], description: 'Damage reports' })
  damages: Record<string, unknown>[];

  @ApiPropertyOptional({ description: 'Special requests' })
  specialRequests?: string;
}

// ============= BATCH 6 REQUEST DTOs =============

export class ValidateQRCodeRequestDto {
  @ApiProperty({ description: 'QR code string' })
  @IsString()
  @IsNotEmpty()
  qrCode: string;
}

// ============= BATCH 6 RESPONSE DTOs =============

// SearchCheckoutsResponseDto — REST version uses CheckoutHistoryItemDto (sanitized)
// instead of NATS CheckoutDataItem (has internal tenantId/hotelId/status/source)
export class SearchCheckoutsResponseDto {
  @ApiProperty({ type: [CheckoutHistoryItemDto], description: 'Search results' })
  @Type(() => CheckoutHistoryItemDto)
  data: CheckoutHistoryItemDto[];

  @ApiProperty({ description: 'Total count' })
  total: number;
}

// ============= BATCH 7: ENUMS =============

export enum RoomCondition {
  GOOD = 'GOOD',
  DAMAGED = 'DAMAGED',
  NEEDS_ATTENTION = 'NEEDS_ATTENTION',
}

export enum CheckoutStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

// ============= BATCH 7: NESTED DTOs =============

export class DamageReportDto {
  @ApiProperty({ description: 'Item or area damaged' })
  @IsString()
  @IsNotEmpty()
  item: string;

  @ApiProperty({ description: 'Description of damage' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Severity level (1-5)' })
  @IsNumber()
  severity: number;

  @ApiPropertyOptional({ description: 'Estimated repair cost' })
  @IsOptional()
  @IsNumber()
  estimatedCost?: number;

  @ApiPropertyOptional({ description: 'Photos of damage', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  photos?: string[];
}

export class RoomInspectionDto {
  @ApiProperty({ description: 'Guest has departed' })
  @IsBoolean()
  guestDeparted: boolean;

  @ApiProperty({ description: 'Number of key cards returned' })
  @IsNumber()
  keyCardsReturned: number;

  @ApiProperty({ description: 'Room condition', enum: RoomCondition })
  @IsEnum(RoomCondition)
  roomCondition: RoomCondition;

  @ApiPropertyOptional({ description: 'List of damages found', type: [DamageReportDto] })
  @IsOptional()
  @IsArray()
  damages?: DamageReportDto[];

  @ApiPropertyOptional({ description: 'List of missing items', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  missingItems?: string[];

  @ApiPropertyOptional({ description: 'Inspection photos', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  photos?: string[];

  @ApiPropertyOptional({ description: 'Inspection notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class GpsLocationDto {
  @ApiProperty({ description: 'Latitude' })
  @IsNumber()
  latitude: number;

  @ApiProperty({ description: 'Longitude' })
  @IsNumber()
  longitude: number;

  @ApiProperty({ description: 'GPS accuracy in meters' })
  @IsNumber()
  accuracy: number;

  @ApiProperty({ description: 'Timestamp of GPS reading' })
  @IsString()
  timestamp: string;
}

// ============= BATCH 7: REQUEST DTOs =============

export class MobileCheckoutRequestDto {
  @ApiProperty({ description: 'Room number' })
  @IsString()
  @IsNotEmpty()
  roomNumber: string;

  @ApiProperty({ description: 'Guest name verification' })
  @IsString()
  @IsNotEmpty()
  guestName: string;

  @ApiProperty({ description: 'Expected checkout time' })
  @IsDateString()
  expectedCheckoutTime: string;

  @ApiProperty({ description: 'Actual checkout time' })
  @IsDateString()
  actualCheckoutTime: string;

  @ApiProperty({ description: 'Room inspection details', type: RoomInspectionDto })
  inspection: RoomInspectionDto;

  @ApiPropertyOptional({ description: 'GPS location for verification', type: GpsLocationDto })
  @IsOptional()
  location?: GpsLocationDto;

  @ApiPropertyOptional({ description: 'Additional notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class QRCheckoutRequestDto {
  @ApiProperty({ description: 'QR code data scanned from room' })
  @IsString()
  @IsNotEmpty()
  qrCodeData: string;

  @ApiProperty({ description: 'Room inspection details', type: RoomInspectionDto })
  inspection: RoomInspectionDto;

  @ApiProperty({ description: 'GPS location for verification', type: GpsLocationDto })
  location: GpsLocationDto;
}

// ============= BATCH 7: RESPONSE DTOs =============

export class CheckoutInfoResponseDto {
  @ApiProperty({ description: 'Booking ID' })
  id: string;

  @ApiProperty({ description: 'Room number' })
  roomNumber: string;

  @ApiProperty({ description: 'Guest name' })
  guestName: string;

  @ApiProperty({ description: 'Guest phone' })
  guestPhone: string;

  @ApiProperty({ description: 'Expected checkout time' })
  expectedCheckoutTime: string;

  @ApiProperty({ description: 'Check-in time' })
  checkInTime: string;

  @ApiProperty({ description: 'Total amount' })
  totalAmount: string;

  @ApiProperty({ description: 'Paid amount' })
  paidAmount: string;

  @ApiProperty({ description: 'Outstanding balance' })
  balance: string;

  @ApiProperty({ description: 'Number of adults' })
  adults: number;

  @ApiProperty({ description: 'Number of children' })
  children: number;

  @ApiPropertyOptional({ description: 'Additional services', type: [Object] })
  additionalServices?: any[];

  @ApiProperty({ description: 'Checkout status', enum: CheckoutStatus })
  status: CheckoutStatus;

  @ApiProperty({ description: 'Whether checkout is overdue' })
  isOverdue: boolean;
}

export class MobileCheckoutResponseDto {
  @ApiProperty({ description: 'Checkout operation status' })
  success: boolean;

  @ApiProperty({ description: 'Checkout ID' })
  checkoutId: string;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Updated booking status' })
  bookingStatus: string;

  @ApiProperty({ description: 'Room status after checkout' })
  roomStatus: string;

  @ApiPropertyOptional({ description: 'Generated housekeeping task ID' })
  housekeepingTaskId?: string;

  @ApiProperty({ description: 'Timestamp of checkout completion' })
  completedAt: string;
}
