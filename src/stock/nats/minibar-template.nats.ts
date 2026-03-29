import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsBoolean, IsArray, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common';

// ─── Template Items ───

export class MinibarTemplateItemDto {
  @ApiProperty() @IsUUID() itemId: string;
  @ApiProperty({ description: 'Standard quantity per room' }) @IsNumber() @Min(1) standardQuantity: number;
  @ApiPropertyOptional({ description: 'Override selling price' }) @IsOptional() @IsNumber() sellingPrice?: number;
}

// ─── Create ───

export class CreateMinibarTemplateRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiProperty() @IsString() name: string;
  @ApiProperty() @IsUUID() roomTypeId: string;
  @ApiPropertyOptional() @IsOptional() @IsString() description?: string;
  @ApiProperty({ type: [MinibarTemplateItemDto] })
  @IsArray() @ValidateNested({ each: true }) @Type(() => MinibarTemplateItemDto)
  items: MinibarTemplateItemDto[];
}

// ─── Update ───

export class UpdateMinibarTemplateRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiProperty() @IsUUID() id: string;
  @ApiPropertyOptional() @IsOptional() @IsString() name?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() description?: string;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() isActive?: boolean;
  @ApiPropertyOptional({ type: [MinibarTemplateItemDto] })
  @IsOptional() @IsArray() @ValidateNested({ each: true }) @Type(() => MinibarTemplateItemDto)
  items?: MinibarTemplateItemDto[];
}

// ─── Find / Delete ───

export class FindMinibarTemplatesRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() hotelId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() roomTypeId?: string;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() isActive?: boolean;
}

export class FindOneMinibarTemplateRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiProperty() @IsUUID() id: string;
}

export class DeleteMinibarTemplateRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiProperty() @IsUUID() id: string;
}

// ─── Response ───

export class MinibarTemplateItemResponseItem {
  @ApiProperty() id: string;
  @ApiProperty() name: string;
  @ApiProperty() code: string;
  @ApiProperty() unit: string;
  @ApiPropertyOptional() sellingPrice?: number;
}

export class MinibarTemplateItemResponse {
  @ApiProperty() id: string;
  @ApiProperty() itemId: string;
  @ApiProperty() standardQuantity: number;
  @ApiProperty() sellingPrice: number;
  @ApiPropertyOptional({ type: () => MinibarTemplateItemResponseItem })
  item?: MinibarTemplateItemResponseItem;
}

export class MinibarTemplateResponse {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() name: string;
  @ApiProperty() roomTypeId: string;
  @ApiPropertyOptional() roomTypeName?: string;
  @ApiPropertyOptional() description?: string;
  @ApiProperty() isActive: boolean;
  @ApiProperty({ type: [MinibarTemplateItemResponse] }) items: MinibarTemplateItemResponse[];
  @ApiProperty() createdAt: string;
}

export type CreateMinibarTemplateNatsResponse = NatsResponse<MinibarTemplateResponse>;
export type FindMinibarTemplatesNatsResponse = NatsResponse<MinibarTemplateResponse[]>;
export type FindOneMinibarTemplateNatsResponse = NatsResponse<MinibarTemplateResponse>;
export type UpdateMinibarTemplateNatsResponse = NatsResponse<MinibarTemplateResponse>;
export type DeleteMinibarTemplateNatsResponse = NatsResponse<{ deleted: boolean }>;
