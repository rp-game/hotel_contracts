import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsBoolean, IsArray, ValidateNested, IsDateString, IsEnum, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { StockIssueType } from '../enums';

// ─── Create Stock Issue ───

export class StockIssueItemDto {
  @ApiProperty()
  @IsUUID()
  itemId: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiPropertyOptional({ description: 'Charge to guest folio' })
  @IsOptional()
  @IsBoolean()
  chargeToGuest?: boolean;

  @ApiPropertyOptional({ description: 'Selling price for guest charge' })
  @IsOptional()
  @IsNumber()
  sellingPrice?: number;

  @ApiPropertyOptional({ description: 'Complimentary (free) for guest' })
  @IsOptional()
  @IsBoolean()
  isComplimentary?: boolean;
}

export class CreateStockIssueRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty({ enum: StockIssueType })
  @IsEnum(StockIssueType)
  issueType: StockIssueType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  department?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  bookingId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  roomId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  roomNumber?: string;

  @ApiProperty()
  @IsDateString()
  issueDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty()
  @IsUUID()
  issuedBy: string;

  @ApiPropertyOptional({ description: 'Staff name (denormalized)' })
  @IsOptional()
  @IsString()
  issuedByName?: string;

  @ApiPropertyOptional({ description: 'Source warehouse (auto-resolves to default if not provided)' })
  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @ApiProperty({ type: [StockIssueItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StockIssueItemDto)
  items: StockIssueItemDto[];
}

export class StockIssueItemResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  itemId: string;

  @ApiPropertyOptional()
  itemName?: string;

  @ApiPropertyOptional()
  itemCode?: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  unitCost: number;

  @ApiProperty()
  totalCost: number;

  @ApiPropertyOptional()
  chargeToGuest?: boolean;

  @ApiPropertyOptional()
  sellingPrice?: number;

  @ApiPropertyOptional()
  isComplimentary?: boolean;
}

export class StockIssueResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  hotelId: string;

  @ApiProperty()
  issueNumber: string;

  @ApiProperty({ enum: StockIssueType })
  issueType: StockIssueType;

  @ApiPropertyOptional()
  department?: string;

  @ApiPropertyOptional()
  bookingId?: string;

  @ApiPropertyOptional()
  roomId?: string;

  @ApiPropertyOptional()
  roomNumber?: string;

  @ApiProperty()
  issueDate: string;

  @ApiPropertyOptional()
  notes?: string;

  @ApiProperty()
  issuedBy: string;

  @ApiPropertyOptional()
  issuedByName?: string;

  @ApiProperty()
  totalCost: number;

  @ApiPropertyOptional()
  warehouseId?: string;

  @ApiPropertyOptional()
  warehouseName?: string;

  @ApiProperty({ type: [StockIssueItemResponse] })
  items: StockIssueItemResponse[];

  @ApiProperty()
  createdAt: Date;
}

export type CreateStockIssueNatsResponse = NatsResponse<StockIssueResponse & { lowStockWarnings?: Array<{ itemId: string; itemName: string; currentStock: number; reorderLevel: number }> }>;

// ─── Issue Supply Kit ───

export class IssueSupplyKitRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty()
  @IsUUID()
  kitId: string;

  @ApiProperty()
  @IsUUID()
  issuedBy: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  department?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export type IssueSupplyKitNatsResponse = NatsResponse<StockIssueResponse>;

// ─── Find Stock Issues ───

export class FindStockIssuesRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ enum: StockIssueType })
  @IsOptional()
  @IsEnum(StockIssueType)
  issueType?: StockIssueType;

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

export type FindStockIssuesNatsResponse = NatsPaginatedResponse<StockIssueResponse>;

// ─── Find One Stock Issue ───

export class FindOneStockIssueRequest {
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

export type FindOneStockIssueNatsResponse = NatsResponse<StockIssueResponse>;
