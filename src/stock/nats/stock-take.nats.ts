import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsArray, ValidateNested, IsDateString, IsEnum, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { ItemCategory } from '../enums';

// ─── Create Stock Take ───

export class StockTakeItemDto {
  @ApiProperty() @IsUUID() itemId: string;
  @ApiProperty({ description: 'Physically counted quantity' }) @IsNumber() @Min(0) actualQuantity: number;
}

export class CreateStockTakeRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() warehouseId?: string;
  @ApiPropertyOptional({ enum: ItemCategory }) @IsOptional() @IsEnum(ItemCategory) category?: ItemCategory;
  @ApiProperty() @IsDateString() takeDate: string;
  @ApiPropertyOptional() @IsOptional() @IsString() notes?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() performedBy?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() performedByName?: string;
  @ApiProperty({ type: [StockTakeItemDto] })
  @IsArray() @ValidateNested({ each: true }) @Type(() => StockTakeItemDto)
  items: StockTakeItemDto[];
}

// ─── Response ───

export class StockTakeItemResponse {
  @ApiProperty() id: string;
  @ApiProperty() itemId: string;
  @ApiProperty() itemCode: string;
  @ApiProperty() itemName: string;
  @ApiProperty() unit: string;
  @ApiProperty({ description: 'System stock at time of take' }) systemQuantity: number;
  @ApiProperty({ description: 'Physically counted' }) actualQuantity: number;
  @ApiProperty({ description: 'actual - system' }) variance: number;
  @ApiProperty({ description: 'variance × averageCostPrice' }) varianceValue: number;
}

export class StockTakeResponse {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() takeNumber: string;
  @ApiProperty() takeDate: string;
  @ApiPropertyOptional({ enum: ItemCategory }) category?: ItemCategory;
  @ApiPropertyOptional() warehouseId?: string;
  @ApiPropertyOptional() warehouseName?: string;
  @ApiPropertyOptional() notes?: string;
  @ApiProperty() performedBy: string;
  @ApiPropertyOptional() performedByName?: string;
  @ApiProperty() status: string;
  @ApiProperty({ type: [StockTakeItemResponse] }) items: StockTakeItemResponse[];
  @ApiProperty() totalVarianceValue: number;
  @ApiProperty() createdAt: string;
  @ApiPropertyOptional() approvedBy?: string;
  @ApiPropertyOptional() approvedByName?: string;
  @ApiPropertyOptional() approvedAt?: string;
}

// ─── Find ───

export class FindStockTakesRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiPropertyOptional() @IsOptional() @IsString() status?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() dateFrom?: string;
  @ApiPropertyOptional() @IsOptional() @IsDateString() dateTo?: string;
  @ApiPropertyOptional({ default: 1 }) @IsOptional() page?: number;
  @ApiPropertyOptional({ default: 20 }) @IsOptional() limit?: number;
}

export class FindOneStockTakeRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiProperty() @IsUUID() id: string;
}

// ─── Approve ───

export class ApproveStockTakeRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiProperty() @IsUUID() id: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() approvedBy?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() approvedByName?: string;
}

export type CreateStockTakeNatsResponse = NatsResponse<StockTakeResponse>;
export type FindStockTakesNatsResponse = NatsPaginatedResponse<StockTakeResponse>;
export type FindOneStockTakeNatsResponse = NatsResponse<StockTakeResponse>;
export type ApproveStockTakeNatsResponse = NatsResponse<StockTakeResponse>;
