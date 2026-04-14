/**
 * Customer Service Alerts NATS Contracts
 *
 * Patterns:
 * - crm.service-alert.list
 * - crm.service-alert.create
 * - crm.service-alert.resolve
 * - crm.service-alert.delete
 *
 * Handler: crm-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsEnum, IsOptional, IsNotEmpty } from 'class-validator';
import { NatsResponse } from '../../common';

export enum ServiceAlertType {
  INFO = 'INFO',
  WARNING = 'WARNING',
  CRITICAL = 'CRITICAL',
}

// ─── Response DTO ───────────────────────────────────────────────────────────

export class ServiceAlertDto {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() customerId: string;
  @ApiProperty({ enum: ServiceAlertType }) type: string;
  @ApiProperty() content: string;
  @ApiProperty() resolved: boolean;
  @ApiPropertyOptional() resolvedAt?: string;
  @ApiPropertyOptional() createdBy?: string;
  @ApiProperty() createdAt: string;
}

// ─── List ────────────────────────────────────────────────────────────────────

export class ListServiceAlertsNatsRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() customerId: string;
}

export type ListServiceAlertsNatsResponse = NatsResponse<ServiceAlertDto[]>;

// ─── Create ──────────────────────────────────────────────────────────────────

export class CreateServiceAlertNatsRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() customerId: string;
  @ApiProperty({ enum: ServiceAlertType }) @IsEnum(ServiceAlertType) type: ServiceAlertType;
  @ApiProperty() @IsString() @IsNotEmpty() content: string;
  @ApiPropertyOptional() @IsOptional() @IsUUID() createdBy?: string;
}

export type CreateServiceAlertNatsResponse = NatsResponse<ServiceAlertDto>;

// ─── Resolve ─────────────────────────────────────────────────────────────────

export class ResolveServiceAlertNatsRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() customerId: string;
  @ApiProperty() @IsUUID() alertId: string;
}

export type ResolveServiceAlertNatsResponse = NatsResponse<ServiceAlertDto>;

// ─── Delete ──────────────────────────────────────────────────────────────────

export class DeleteServiceAlertNatsRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() customerId: string;
  @ApiProperty() @IsUUID() alertId: string;
}

export type DeleteServiceAlertNatsResponse = NatsResponse<{ deleted: boolean }>;
