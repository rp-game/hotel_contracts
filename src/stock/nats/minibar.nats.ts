import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsArray, ValidateNested, IsBoolean, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common';

// ─── Minibar Check (Submit consumed items) ───

export class MinibarCheckItemDto {
  @ApiProperty({ description: 'Stock item ID' })
  @IsUUID()
  itemId: string;

  @ApiProperty({ description: 'Quantity consumed (0 = not consumed / skip)' })
  @IsNumber()
  @Min(0)
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

  @ApiPropertyOptional({ description: 'Staff who performed the check (injected from JWT by gateway)' })
  @IsOptional()
  @IsUUID()
  checkedBy?: string;

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

export class MinibarRestockSuggestion {
  @ApiProperty() itemId: string;
  @ApiProperty() itemName: string;
  @ApiProperty() consumedQty: number;
  @ApiProperty() standardQty: number;
  @ApiProperty() suggestedRestockQty: number;
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

  @ApiPropertyOptional({ type: [MinibarRestockSuggestion], description: 'Restock suggestions based on minibar template' })
  restockSuggestions?: MinibarRestockSuggestion[];
}

export type SubmitMinibarCheckNatsResponse = NatsResponse<MinibarCheckResponse>;

// ─── Minibar Status ───

export class GetMinibarStatusRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Room ID' })
  @IsUUID()
  roomId: string;

  @ApiPropertyOptional({ description: 'Booking ID — exact match to avoid cross-booking false positive' })
  @IsOptional()
  @IsUUID()
  bookingId?: string;
}

export class MinibarStatusResponse {
  @ApiProperty({ description: 'Whether minibar has been checked for this booking/room' })
  checked: boolean;

  @ApiPropertyOptional({ description: 'When minibar was last checked (ISO timestamp)' })
  lastCheckedAt?: string;

  @ApiPropertyOptional({ description: 'Name of staff who performed the check' })
  lastCheckedBy?: string;

  @ApiPropertyOptional({ description: 'Total amount charged to guest' })
  totalCharged?: number;

  @ApiPropertyOptional({ description: 'Stock issue ID of the consumption record' })
  issueId?: string;
}

export type GetMinibarStatusNatsResponse = NatsResponse<MinibarStatusResponse>;

// ─── Minibar History ───

export class GetMinibarHistoryRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Filter by room ID' })
  @IsOptional()
  @IsUUID()
  roomId?: string;

  @ApiPropertyOptional({ description: 'Start date filter (ISO date string)' })
  @IsOptional()
  @IsString()
  dateFrom?: string;

  @ApiPropertyOptional({ description: 'End date filter (ISO date string)' })
  @IsOptional()
  @IsString()
  dateTo?: string;

  @ApiPropertyOptional({ minimum: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ minimum: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number;
}

export class MinibarHistoryEntry {
  @ApiProperty() issueId: string;
  @ApiProperty() roomId: string;
  @ApiPropertyOptional() roomNumber?: string;
  @ApiPropertyOptional() bookingId?: string;
  @ApiProperty() checkedAt: string;
  @ApiProperty() checkedBy: string;
  @ApiPropertyOptional() checkedByName?: string;
  @ApiProperty() totalCharged: number;
  @ApiProperty() itemCount: number;
}

export class MinibarHistoryResponse {
  @ApiProperty({ type: [MinibarHistoryEntry] })
  data: MinibarHistoryEntry[];

  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
}

export type GetMinibarHistoryNatsResponse = NatsResponse<MinibarHistoryResponse>;
