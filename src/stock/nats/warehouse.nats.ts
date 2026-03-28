import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';
import { NatsResponse, NatsPaginatedResponse } from '../../common';

// ─── Create Warehouse ───

export class CreateWarehouseRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;
}

// ─── Update Warehouse ───

export class UpdateWarehouseRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

// ─── Find Warehouses ───

export class FindWarehousesRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

// ─── Delete Warehouse ───

export class DeleteWarehouseRequest {
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

// ─── Get Item Warehouse Stock ───

export class GetItemWarehouseStockRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty()
  @IsUUID()
  itemId: string;
}

// ─── Response Types ───

export class WarehouseResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  hotelId: string;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  description?: string;

  @ApiProperty()
  isDefault: boolean;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class WarehouseStockItemResponse {
  @ApiProperty()
  warehouseId: string;

  @ApiProperty()
  warehouseName: string;

  @ApiProperty()
  currentStock: number;

  @ApiProperty()
  averageCostPrice: number;
}

export type CreateWarehouseNatsResponse = NatsResponse<WarehouseResponse>;
export type UpdateWarehouseNatsResponse = NatsResponse<WarehouseResponse>;
export type FindWarehousesNatsResponse = NatsResponse<WarehouseResponse[]>;
export type DeleteWarehouseNatsResponse = NatsResponse<{ success: boolean }>;
export type GetItemWarehouseStockNatsResponse = NatsResponse<WarehouseStockItemResponse[]>;
