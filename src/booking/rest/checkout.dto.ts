/**
 * Checkout REST DTOs
 * REST request/response shapes for checkout endpoints.
 * Request DTOs: what the controller @Body() receives (no tenantId/staffId — from headers/JWT)
 * Response DTOs: what Swagger shows (string dates, no internal fields)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { CheckoutRoomItem, CheckoutBookingSummary } from '../nats/mobile-checkout.nats';

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
