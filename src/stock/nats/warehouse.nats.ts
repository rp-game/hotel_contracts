import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsBoolean, IsNumber, IsEnum } from 'class-validator';
import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { WarehouseScope } from '../enums';

// ─── Create Warehouse ───

export class CreateWarehouseRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID (null for chain warehouse)' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

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

  @ApiPropertyOptional({ enum: WarehouseScope, default: WarehouseScope.HOTEL })
  @IsOptional()
  @IsEnum(WarehouseScope)
  scope?: WarehouseScope;

  @ApiPropertyOptional({ description: 'Location/city for chain warehouses' })
  @IsOptional()
  @IsString()
  location?: string;
}

// ─── Update Warehouse ───

export class UpdateWarehouseRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  hotelId?: string;

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

  @ApiPropertyOptional({ description: 'Location/city for chain warehouses' })
  @IsOptional()
  @IsString()
  location?: string;
}

// ─── Find Warehouses ───

export class FindWarehousesRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ enum: WarehouseScope })
  @IsOptional()
  @IsEnum(WarehouseScope)
  scope?: WarehouseScope;
}

// ─── Delete Warehouse ───

export class DeleteWarehouseRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  hotelId?: string;

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

  @ApiPropertyOptional()
  hotelId?: string;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  description?: string;

  @ApiProperty()
  isDefault: boolean;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty({ enum: WarehouseScope })
  scope: WarehouseScope;

  @ApiPropertyOptional()
  location?: string;

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

// ─── Get Items in Warehouse ───

export class GetWarehouseItemsRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() warehouseId: string;
  @ApiPropertyOptional() @IsOptional() @IsString() search?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() category?: string;
  @ApiPropertyOptional({ default: 1 }) @IsOptional() page?: number;
  @ApiPropertyOptional({ default: 50 }) @IsOptional() limit?: number;
}

export class WarehouseItemRow {
  @ApiProperty() itemId: string;
  @ApiProperty() itemCode: string;
  @ApiProperty() itemName: string;
  @ApiProperty() unit: string;
  @ApiProperty() category: string;
  @ApiProperty() currentStock: number;
  @ApiProperty() averageCostPrice: number;
  @ApiProperty() stockValue: number;
  @ApiPropertyOptional() reorderLevel?: number;
}

export class GetWarehouseItemsResponse {
  @ApiProperty({ type: [WarehouseItemRow] }) items: WarehouseItemRow[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
}

export type GetWarehouseItemsNatsResponse = NatsResponse<GetWarehouseItemsResponse>;
