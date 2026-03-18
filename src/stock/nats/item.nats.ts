import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsBoolean, IsEnum, Min } from 'class-validator';
import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { ItemCategory, ItemUnit } from '../enums';

// ─── Find Items ───

export class FindItemsRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ enum: ItemCategory })
  @IsOptional()
  @IsEnum(ItemCategory)
  category?: ItemCategory;

  @ApiPropertyOptional({ description: 'Search by name or code' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Filter items below reorder level' })
  @IsOptional()
  @IsBoolean()
  lowStock?: boolean;

  @ApiPropertyOptional({ description: 'Filter minibar items' })
  @IsOptional()
  @IsBoolean()
  isMinibarItem?: boolean;

  @ApiPropertyOptional({ description: 'Filter active/inactive' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ default: 20 })
  @IsOptional()
  @IsNumber()
  limit?: number;
}

export class ItemResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  hotelId: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ enum: ItemCategory })
  category: ItemCategory;

  @ApiPropertyOptional()
  subCategory?: string;

  @ApiProperty()
  unit: string;

  @ApiPropertyOptional()
  averageCostPrice?: number;

  @ApiPropertyOptional()
  sellingPrice?: number;

  @ApiPropertyOptional()
  reorderLevel?: number;

  @ApiProperty()
  currentStock: number;

  @ApiPropertyOptional()
  storageLocation?: string;

  @ApiProperty()
  isActive: boolean;

  @ApiPropertyOptional()
  isMinibarItem?: boolean;

  @ApiPropertyOptional()
  isPerGuestAmenity?: boolean;

  @ApiPropertyOptional()
  hasExpiry?: boolean;

  @ApiPropertyOptional()
  imageUrl?: string;

  @ApiPropertyOptional()
  notes?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export type FindItemsNatsResponse = NatsPaginatedResponse<ItemResponse>;

// ─── Find One Item ───

export class FindOneItemRequest {
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

export class ItemDetailResponse extends ItemResponse {
  @ApiPropertyOptional({ description: 'Recent stock movements' })
  movements?: any[];
}

export type FindOneItemNatsResponse = NatsResponse<ItemDetailResponse>;

// ─── Create Item ───

export class CreateItemRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'SKU code (auto-generated if not provided)' })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ enum: ItemCategory })
  @IsEnum(ItemCategory)
  category: ItemCategory;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  subCategory?: string;

  @ApiProperty({ enum: ItemUnit })
  @IsString()
  unit: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  sellingPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  reorderLevel?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  currentStock?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  storageLocation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isMinibarItem?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isPerGuestAmenity?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  hasExpiry?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export type CreateItemNatsResponse = NatsResponse<ItemResponse>;

// ─── Update Item ───

export class UpdateItemRequest {
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

  @ApiPropertyOptional({ enum: ItemCategory })
  @IsOptional()
  @IsEnum(ItemCategory)
  category?: ItemCategory;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  subCategory?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  unit?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  sellingPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  reorderLevel?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  storageLocation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isMinibarItem?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isPerGuestAmenity?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  hasExpiry?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export type UpdateItemNatsResponse = NatsResponse<ItemResponse>;

// ─── Delete Item ───

export class DeleteItemRequest {
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

export type DeleteItemNatsResponse = NatsResponse<{ success: boolean }>;
