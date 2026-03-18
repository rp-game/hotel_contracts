import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsArray, ValidateNested, IsDateString, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { StockAdjustmentType } from '../enums';

// ─── Create Stock Adjustment ───

export class StockAdjustmentItemDto {
  @ApiProperty()
  @IsUUID()
  itemId: string;

  @ApiProperty({ description: 'Positive = stock increase, Negative = stock decrease' })
  @IsNumber()
  quantityChange: number;

  @ApiPropertyOptional({ description: 'Cost per unit at time of adjustment' })
  @IsOptional()
  @IsNumber()
  unitCost?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  reason?: string;
}

export class CreateStockAdjustmentRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty({ enum: StockAdjustmentType })
  @IsEnum(StockAdjustmentType)
  adjustmentType: StockAdjustmentType;

  @ApiPropertyOptional({ description: 'Reference to original document (e.g. StockIssue ID for returns)' })
  @IsOptional()
  @IsUUID()
  referenceId?: string;

  @ApiPropertyOptional({ description: 'Supplier for return to supplier' })
  @IsOptional()
  @IsUUID()
  supplierId?: string;

  @ApiProperty()
  @IsDateString()
  adjustmentDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty()
  @IsUUID()
  performedBy: string;

  @ApiPropertyOptional({ description: 'Staff name (denormalized)' })
  @IsOptional()
  @IsString()
  performedByName?: string;

  @ApiProperty({ type: [StockAdjustmentItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StockAdjustmentItemDto)
  items: StockAdjustmentItemDto[];
}

export class StockAdjustmentItemResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  itemId: string;

  @ApiPropertyOptional()
  itemName?: string;

  @ApiPropertyOptional()
  itemCode?: string;

  @ApiProperty()
  quantityChange: number;

  @ApiProperty()
  unitCost: number;

  @ApiPropertyOptional()
  reason?: string;
}

export class StockAdjustmentResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  hotelId: string;

  @ApiProperty()
  adjustmentNumber: string;

  @ApiProperty({ enum: StockAdjustmentType })
  adjustmentType: StockAdjustmentType;

  @ApiPropertyOptional()
  referenceId?: string;

  @ApiPropertyOptional()
  supplierId?: string;

  @ApiPropertyOptional()
  supplierName?: string;

  @ApiProperty()
  adjustmentDate: string;

  @ApiPropertyOptional()
  notes?: string;

  @ApiProperty()
  performedBy: string;

  @ApiPropertyOptional()
  performedByName?: string;

  @ApiProperty({ type: [StockAdjustmentItemResponse] })
  items: StockAdjustmentItemResponse[];

  @ApiProperty()
  createdAt: Date;
}

export type CreateStockAdjustmentNatsResponse = NatsResponse<StockAdjustmentResponse>;

// ─── Find Stock Adjustments ───

export class FindStockAdjustmentsRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ enum: StockAdjustmentType })
  @IsOptional()
  @IsEnum(StockAdjustmentType)
  adjustmentType?: StockAdjustmentType;

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

export type FindStockAdjustmentsNatsResponse = NatsPaginatedResponse<StockAdjustmentResponse>;

// ─── Find One Stock Adjustment ───

export class FindOneStockAdjustmentRequest {
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

export type FindOneStockAdjustmentNatsResponse = NatsResponse<StockAdjustmentResponse>;
