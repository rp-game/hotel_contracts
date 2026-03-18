import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsArray, ValidateNested, IsBoolean, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse, NatsPaginatedResponse } from '../../common';

// ─── Supply Kit Item ───

export class SupplyKitItemDto {
  @ApiProperty()
  @IsUUID()
  itemId: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  quantity: number;
}

// ─── Create Supply Kit ───

export class CreateSupplyKitRequest {
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
  department?: string;

  @ApiProperty({ type: [SupplyKitItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SupplyKitItemDto)
  items: SupplyKitItemDto[];
}

export class SupplyKitItemResponse {
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
}

export class SupplyKitResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  hotelId: string;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  department?: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty({ type: [SupplyKitItemResponse] })
  items: SupplyKitItemResponse[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export type CreateSupplyKitNatsResponse = NatsResponse<SupplyKitResponse>;

// ─── Find Supply Kits ───

export class FindSupplyKitsRequest {
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

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ default: 20 })
  @IsOptional()
  @IsNumber()
  limit?: number;
}

export type FindSupplyKitsNatsResponse = NatsPaginatedResponse<SupplyKitResponse>;

// ─── Find One Supply Kit ───

export class FindOneSupplyKitRequest {
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

export type FindOneSupplyKitNatsResponse = NatsResponse<SupplyKitResponse>;

// ─── Update Supply Kit ───

export class UpdateSupplyKitRequest {
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
  department?: string;

  @ApiPropertyOptional({ type: [SupplyKitItemDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SupplyKitItemDto)
  items?: SupplyKitItemDto[];
}

export type UpdateSupplyKitNatsResponse = NatsResponse<SupplyKitResponse>;

// ─── Delete Supply Kit ───

export class DeleteSupplyKitRequest {
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

export type DeleteSupplyKitNatsResponse = NatsResponse<{ success: boolean }>;
