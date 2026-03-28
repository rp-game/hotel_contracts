import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsArray, ValidateNested, IsBoolean, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common';

// ─── Minibar Check (Submit consumed items) ───

export class MinibarCheckItemDto {
  @ApiProperty({ description: 'Stock item ID' })
  @IsUUID()
  itemId: string;

  @ApiProperty({ description: 'Quantity consumed' })
  @IsNumber()
  @Min(1)
  consumedQty: number;

  @ApiPropertyOptional({ description: 'Complimentary (free for guest)' })
  @IsOptional()
  @IsBoolean()
  isComplimentary?: boolean;
}

export class SubmitMinibarCheckRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Room ID' })
  @IsUUID()
  roomId: string;

  @ApiPropertyOptional({ description: 'Room number (denormalized)' })
  @IsOptional()
  @IsString()
  roomNumber?: string;

  @ApiPropertyOptional({ description: 'Booking ID for guest charge' })
  @IsOptional()
  @IsUUID()
  bookingId?: string;

  @ApiPropertyOptional({ description: 'Warehouse to deduct from (auto-resolves to default)' })
  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @ApiProperty({ type: [MinibarCheckItemDto], description: 'Consumed items' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MinibarCheckItemDto)
  items: MinibarCheckItemDto[];

  @ApiProperty({ description: 'Staff who performed the check' })
  @IsUUID()
  checkedBy: string;

  @ApiPropertyOptional({ description: 'Staff name (denormalized)' })
  @IsOptional()
  @IsString()
  checkedByName?: string;
}

// ─── Response ───

export class MinibarChargedItem {
  @ApiProperty() itemId: string;
  @ApiProperty() itemName: string;
  @ApiProperty() quantity: number;
  @ApiProperty() sellingPrice: number;
  @ApiProperty() totalCharge: number;
  @ApiProperty() isComplimentary: boolean;
}

export class MinibarCheckResponse {
  @ApiPropertyOptional({ description: 'Stock issue ID created' })
  issueId?: string;

  @ApiProperty({ type: [MinibarChargedItem] })
  chargedItems: MinibarChargedItem[];

  @ApiProperty({ description: 'Total amount charged to guest' })
  totalCharged: number;

  @ApiPropertyOptional({ description: 'Whether booking charge was successful' })
  bookingChargeSuccess?: boolean;
}

export type SubmitMinibarCheckNatsResponse = NatsResponse<MinibarCheckResponse>;
