import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsArray, ValidateNested, IsEnum, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse, NatsPaginatedResponse } from '../../common';

// ─── Enums ───

export enum RequisitionStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  APPROVED = 'APPROVED',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

export enum RequisitionUrgency {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  URGENT = 'URGENT',
}

// ─── Items ───

export class RequisitionItemDto {
  @ApiProperty() @IsUUID() itemId: string;
  @ApiProperty() @IsNumber() @Min(0.0001) quantity: number;
  @ApiPropertyOptional() @IsOptional() @IsString() notes?: string;
}

// ─── Create ───

export class CreateRequisitionRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiProperty({ description: 'Chain warehouse to request from' }) @IsUUID() chainWarehouseId: string;
  @ApiProperty() @IsUUID() requestedBy: string;
  @ApiPropertyOptional() @IsOptional() @IsString() requestedByName?: string;
  @ApiPropertyOptional({ enum: RequisitionUrgency, default: RequisitionUrgency.NORMAL })
  @IsOptional() @IsEnum(RequisitionUrgency) urgency?: RequisitionUrgency;
  @ApiPropertyOptional() @IsOptional() @IsString() notes?: string;

  @ApiProperty({ type: [RequisitionItemDto] })
  @IsArray() @ValidateNested({ each: true }) @Type(() => RequisitionItemDto)
  items: RequisitionItemDto[];
}

// ─── Workflow Actions ───

export class SubmitRequisitionRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() id: string;
}

export class ApproveRequisitionRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() id: string;
  @ApiProperty() @IsUUID() approvedBy: string;
  @ApiPropertyOptional() @IsOptional() @IsString() approvedByName?: string;
}

export class FulfillRequisitionRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() id: string;
}

export class RejectRequisitionRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() id: string;
  @ApiProperty() @IsUUID() rejectedBy: string;
  @ApiPropertyOptional() @IsOptional() @IsString() reason?: string;
}

// ─── Find ───

export class FindRequisitionsRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() hotelId?: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() chainWarehouseId?: string;
  @ApiPropertyOptional({ enum: RequisitionStatus }) @IsOptional() @IsEnum(RequisitionStatus) status?: RequisitionStatus;
  @ApiPropertyOptional({ default: 1 }) @IsOptional() page?: number;
  @ApiPropertyOptional({ default: 20 }) @IsOptional() limit?: number;
}

export class FindOneRequisitionRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() id: string;
}

// ─── Response ───

export class RequisitionItemResponse {
  @ApiProperty() id: string;
  @ApiProperty() itemId: string;
  @ApiProperty() itemCode: string;
  @ApiProperty() itemName: string;
  @ApiProperty() unit: string;
  @ApiProperty() quantity: number;
  @ApiPropertyOptional() notes?: string;
}

export class RequisitionResponse {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() requisitionNumber: string;
  @ApiProperty() hotelId: string;
  @ApiPropertyOptional() hotelName?: string;
  @ApiProperty() chainWarehouseId: string;
  @ApiPropertyOptional() chainWarehouseName?: string;
  @ApiProperty({ enum: RequisitionStatus }) status: RequisitionStatus;
  @ApiProperty({ enum: RequisitionUrgency }) urgency: RequisitionUrgency;
  @ApiProperty() requestedBy: string;
  @ApiPropertyOptional() requestedByName?: string;
  @ApiPropertyOptional() approvedBy?: string;
  @ApiPropertyOptional() approvedByName?: string;
  @ApiPropertyOptional() approvedAt?: string;
  @ApiPropertyOptional() fulfilledAt?: string;
  @ApiPropertyOptional() interHotelTransferId?: string;
  @ApiPropertyOptional() rejectedBy?: string;
  @ApiPropertyOptional() rejectedReason?: string;
  @ApiPropertyOptional() notes?: string;
  @ApiProperty({ type: [RequisitionItemResponse] }) items: RequisitionItemResponse[];
  @ApiProperty() createdAt: string;
}

export type CreateRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
export type FindRequisitionsNatsResponse = NatsPaginatedResponse<RequisitionResponse>;
export type FindOneRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
export type SubmitRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
export type ApproveRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
export type FulfillRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
export type RejectRequisitionNatsResponse = NatsResponse<RequisitionResponse>;
