import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsArray, ValidateNested, IsDateString, IsEnum, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse, NatsPaginatedResponse } from '../../common';
import { InterHotelTransferStatus, TransferType } from '../enums';

// ─── Transfer Item ───

export class InterHotelTransferItemDto {
  @ApiProperty() @IsUUID() itemId: string;
  @ApiProperty() @IsNumber() @Min(0.0001) quantity: number;
}

// ─── Create ───

export class CreateInterHotelTransferRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() sourceHotelId: string;
  @ApiProperty() @IsUUID() sourceWarehouseId: string;
  @ApiProperty() @IsUUID() destinationHotelId: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() destinationWarehouseId?: string;
  @ApiProperty({ enum: TransferType }) @IsEnum(TransferType) transferType: TransferType;
  @ApiProperty() @IsUUID() requestedBy: string;
  @ApiPropertyOptional() @IsOptional() @IsString() requestedByName?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() notes?: string;

  @ApiProperty({ type: [InterHotelTransferItemDto] })
  @IsArray() @ValidateNested({ each: true }) @Type(() => InterHotelTransferItemDto)
  items: InterHotelTransferItemDto[];
}

// ─── Workflow Actions ───

export class ApproveInterHotelTransferRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() id: string;
  @ApiProperty() @IsUUID() approvedBy: string;
  @ApiPropertyOptional() @IsOptional() @IsString() approvedByName?: string;
}

export class ShipInterHotelTransferRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() id: string;
  @ApiProperty() @IsUUID() shippedBy: string;
  @ApiPropertyOptional() @IsOptional() @IsString() shippedByName?: string;
}

export class ReceiveInterHotelTransferItemDto {
  @ApiProperty() @IsUUID() itemId: string;
  @ApiProperty() @IsNumber() @Min(0) receivedQuantity: number;
}

export class ReceiveInterHotelTransferRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() id: string;
  @ApiProperty() @IsUUID() receivedBy: string;
  @ApiPropertyOptional() @IsOptional() @IsString() receivedByName?: string;

  @ApiPropertyOptional({ type: [ReceiveInterHotelTransferItemDto], description: 'Override received quantities (partial receive)' })
  @IsOptional() @IsArray() @ValidateNested({ each: true }) @Type(() => ReceiveInterHotelTransferItemDto)
  items?: ReceiveInterHotelTransferItemDto[];
}

export class RejectInterHotelTransferRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() id: string;
  @ApiProperty() @IsUUID() rejectedBy: string;
  @ApiPropertyOptional() @IsOptional() @IsString() reason?: string;
}

// ─── Find ───

export class FindInterHotelTransfersRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() sourceHotelId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() destinationHotelId?: string;
  @ApiPropertyOptional({ enum: InterHotelTransferStatus }) @IsOptional() @IsEnum(InterHotelTransferStatus) status?: InterHotelTransferStatus;
  @ApiPropertyOptional({ default: 1 }) @IsOptional() page?: number;
  @ApiPropertyOptional({ default: 20 }) @IsOptional() limit?: number;
}

export class FindOneInterHotelTransferRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() id: string;
}

// ─── Response ───

export class InterHotelTransferItemResponse {
  @ApiProperty() id: string;
  @ApiProperty() itemId: string;
  @ApiProperty() itemCode: string;
  @ApiProperty() itemName: string;
  @ApiProperty() unit: string;
  @ApiProperty() quantity: number;
  @ApiProperty() unitCost: number;
  @ApiProperty() totalCost: number;
  @ApiPropertyOptional() receivedQuantity?: number;
}

export class InterHotelTransferResponse {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() transferNumber: string;
  @ApiProperty() sourceHotelId: string;
  @ApiPropertyOptional() sourceHotelName?: string;
  @ApiProperty() sourceWarehouseId: string;
  @ApiPropertyOptional() sourceWarehouseName?: string;
  @ApiProperty() destinationHotelId: string;
  @ApiPropertyOptional() destinationHotelName?: string;
  @ApiPropertyOptional() destinationWarehouseId?: string;
  @ApiPropertyOptional() destinationWarehouseName?: string;
  @ApiProperty({ enum: InterHotelTransferStatus }) status: InterHotelTransferStatus;
  @ApiProperty({ enum: TransferType }) transferType: TransferType;
  @ApiProperty() requestedBy: string;
  @ApiPropertyOptional() requestedByName?: string;
  @ApiPropertyOptional() approvedBy?: string;
  @ApiPropertyOptional() approvedByName?: string;
  @ApiPropertyOptional() approvedAt?: string;
  @ApiPropertyOptional() shippedBy?: string;
  @ApiPropertyOptional() shippedByName?: string;
  @ApiPropertyOptional() shippedAt?: string;
  @ApiPropertyOptional() receivedBy?: string;
  @ApiPropertyOptional() receivedByName?: string;
  @ApiPropertyOptional() receivedAt?: string;
  @ApiPropertyOptional() rejectedBy?: string;
  @ApiPropertyOptional() rejectedReason?: string;
  @ApiPropertyOptional() notes?: string;
  @ApiProperty({ type: [InterHotelTransferItemResponse] }) items: InterHotelTransferItemResponse[];
  @ApiProperty() totalCost: number;
  @ApiProperty() createdAt: string;
}

export type CreateInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
export type FindInterHotelTransfersNatsResponse = NatsPaginatedResponse<InterHotelTransferResponse>;
export type FindOneInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
export type ApproveInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
export type ShipInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
export type ReceiveInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
export type RejectInterHotelTransferNatsResponse = NatsResponse<InterHotelTransferResponse>;
