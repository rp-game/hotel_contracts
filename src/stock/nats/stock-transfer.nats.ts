import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsArray, ValidateNested, IsDateString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse, NatsPaginatedResponse } from '../../common';

// ─── Create Stock Transfer ───

export class StockTransferItemDto {
  @ApiProperty()
  @IsUUID()
  itemId: string;

  @ApiProperty({ description: 'Quantity to transfer (base units)' })
  @IsNumber()
  @Min(0.0001)
  quantity: number;
}

export class CreateStockTransferRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Source warehouse' })
  @IsUUID()
  fromWarehouseId: string;

  @ApiProperty({ description: 'Destination warehouse' })
  @IsUUID()
  toWarehouseId: string;

  @ApiProperty()
  @IsDateString()
  transferDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty()
  @IsUUID()
  transferredBy: string;

  @ApiPropertyOptional({ description: 'Staff name (denormalized)' })
  @IsOptional()
  @IsString()
  transferredByName?: string;

  @ApiProperty({ type: [StockTransferItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StockTransferItemDto)
  items: StockTransferItemDto[];
}

// ─── Response Types ───

export class StockTransferItemResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  itemId: string;

  @ApiPropertyOptional()
  itemName?: string;

  @ApiPropertyOptional()
  itemCode?: string;

  @ApiPropertyOptional()
  itemUnit?: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty({ description: 'WAC of source warehouse at time of transfer' })
  unitCost: number;
}

export class StockTransferResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  hotelId: string;

  @ApiProperty()
  transferNumber: string;

  @ApiProperty()
  fromWarehouseId: string;

  @ApiPropertyOptional()
  fromWarehouseName?: string;

  @ApiProperty()
  toWarehouseId: string;

  @ApiPropertyOptional()
  toWarehouseName?: string;

  @ApiProperty()
  transferDate: string;

  @ApiPropertyOptional()
  notes?: string;

  @ApiProperty()
  transferredBy: string;

  @ApiPropertyOptional()
  transferredByName?: string;

  @ApiProperty({ type: [StockTransferItemResponse] })
  items: StockTransferItemResponse[];

  @ApiProperty()
  createdAt: Date;
}

export type CreateStockTransferNatsResponse = NatsResponse<StockTransferResponse>;

// ─── Find Stock Transfers ───

export class FindStockTransfersRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  fromWarehouseId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  toWarehouseId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dateTo?: string;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ default: 20 })
  @IsOptional()
  @IsNumber()
  limit?: number;
}

export type FindStockTransfersNatsResponse = NatsPaginatedResponse<StockTransferResponse>;

// ─── Find One Stock Transfer ───

export class FindOneStockTransferRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty()
  @IsUUID()
  id: string;
}

export type FindOneStockTransferNatsResponse = NatsResponse<StockTransferResponse>;
