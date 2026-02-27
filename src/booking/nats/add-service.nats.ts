/**
 * Add Service to Booking NATS Contracts
 * Pattern: booking.add_service
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsUUID, Min } from 'class-validator';
import { NatsResponse } from '../../common';

export class AddServiceNatsRequest {
  @ApiProperty({ description: 'Booking ID', format: 'uuid' })
  @IsUUID()
  bookingId: string;

  @ApiProperty({ description: 'Service ID', format: 'uuid' })
  @IsUUID()
  serviceId: string;

  @ApiPropertyOptional({ description: 'Service name for display in booking folio' })
  @IsOptional()
  @IsString()
  serviceName?: string;

  @ApiProperty({ description: 'Number of units / guests' })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiPropertyOptional({ description: 'Unit price in hotel currency' })
  @IsOptional()
  @IsNumber()
  unitPrice?: number;

  @ApiPropertyOptional({ description: 'Additional notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Tenant ID', format: 'uuid' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', format: 'uuid' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Staff user ID who added the service', format: 'uuid' })
  @IsUUID()
  addedBy: string;

  @ApiPropertyOptional({ description: 'Booking room ID (if service is linked to specific room)', format: 'uuid' })
  @IsOptional()
  @IsUUID()
  bookingRoomId?: string;

  @ApiPropertyOptional({ description: 'Guest ID who is using the service', format: 'uuid' })
  @IsOptional()
  @IsUUID()
  guestId?: string;
}

export interface ServiceData {
  id: string;
  bookingId: string;
  serviceId: string;
  quantity: number;
  unitPrice?: number;
  notes?: string;
  addedBy: string;
  addedAt: string;
}

export interface AddServiceResponseData {
  booking: {
    id: string;
    bookingCode: string;
    status: string;
    totalAmount: number;
  };
  service: ServiceData;
}

export type AddServiceNatsResponse = NatsResponse<AddServiceResponseData>;
