/**
 * Add Service to Booking NATS Contracts
 * Pattern: booking.add_service
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsUUID, IsEnum, Min, Max, IsIn } from 'class-validator';
import { ServiceCategory } from './services.nats';
import { NatsResponse } from '../../common';

export type PriceInputMode = 'pre_tax' | 'post_tax';

export class AddServiceNatsRequest {
  @ApiProperty({ description: 'Booking ID', format: 'uuid' })
  @IsUUID()
  bookingId: string;

  @ApiPropertyOptional({ description: 'Service ID (omit for ad-hoc charges like early check-in/late check-out)', format: 'uuid' })
  @IsOptional()
  @IsUUID()
  serviceId?: string;

  @ApiPropertyOptional({ description: 'Service category (for ad-hoc charges without serviceId)', enum: ServiceCategory })
  @IsOptional()
  @IsEnum(ServiceCategory)
  serviceCategory?: ServiceCategory;

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

  @ApiPropertyOptional({ description: 'Override VAT rate (%). If omitted, falls back to service catalog then hotel default.' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  taxRate?: number;

  @ApiPropertyOptional({ description: 'Override service charge rate (%). If omitted, falls back to service catalog then hotel default.' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  serviceChargeRate?: number;

  @ApiPropertyOptional({ description: 'Whether unitPrice is pre-tax (net) or post-tax (gross). Default: pre_tax.', enum: ['pre_tax', 'post_tax'] })
  @IsOptional()
  @IsIn(['pre_tax', 'post_tax'])
  priceInputMode?: PriceInputMode;
}

export interface ServiceData {
  id: string;
  bookingId: string;
  serviceId?: string | null;
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
