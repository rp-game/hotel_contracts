/**
 * Audit Activity Event Contract
 * @description Shared types for cross-service audit logging
 * @usage Emitted by all services via NATS 'audit.activity', received by user-service
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

/** Categorize actions for filtering in admin UI */
export enum AuditCategory {
  AUTH = 'AUTH',
  BOOKING = 'BOOKING',
  FINANCIAL = 'FINANCIAL',
  CONFIGURATION = 'CONFIGURATION',
}

/** Severity/importance level for visual distinction */
export enum AuditSeverity {
  INFO = 'INFO',
  ACTION = 'ACTION',
  WARNING = 'WARNING',
  CRITICAL = 'CRITICAL',
}

/** Sentinel for automated/cron/system actions */
export const SYSTEM_USER_ID = '00000000-0000-0000-0000-000000000000';
export const SYSTEM_USER_NAME = 'System';

/** Fired by each service, consumed by user-service for central aggregation */
export interface AuditActivityEvent {
  tenantId: string;
  hotelId: string;
  userId: string;
  userName: string;

  service: string;
  category: AuditCategory;
  action: string;
  severity: AuditSeverity;

  resource: string;
  resourceId?: string;
  resourceName?: string;

  descriptionVi: string;
  descriptionEn: string;

  metadata?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  timestamp: string;
}

// --- NATS Query DTOs ---

export interface FindAuditLogsNatsRequest {
  tenantId: string;
  hotelId: string;
  userId?: string;
  action?: string;
  resource?: string;
  service?: string;
  category?: string;
  severity?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  limit?: number;
}

export interface FindAuditLogsByUserNatsRequest {
  tenantId: string;
  hotelId: string;
  userId: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  limit?: number;
}

// --- REST DTOs for API Gateway ---

export class FindAuditLogsQueryDto {
  @ApiPropertyOptional({ description: 'Filter by user ID' })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiPropertyOptional({ description: 'Filter by action type (e.g. LOGIN, PAYMENT_CREATED)' })
  @IsOptional()
  @IsString()
  action?: string;

  @ApiPropertyOptional({ description: 'Filter by resource (e.g. user, payment, rate_plan)' })
  @IsOptional()
  @IsString()
  resource?: string;

  @ApiPropertyOptional({ description: 'Filter by service (e.g. auth, payment, pricing)' })
  @IsOptional()
  @IsString()
  service?: string;

  @ApiPropertyOptional({ description: 'Filter by category', enum: AuditCategory })
  @IsOptional()
  @IsEnum(AuditCategory)
  category?: AuditCategory;

  @ApiPropertyOptional({ description: 'Filter by severity', enum: AuditSeverity })
  @IsOptional()
  @IsEnum(AuditSeverity)
  severity?: AuditSeverity;

  @ApiPropertyOptional({ description: 'Start date (ISO string)' })
  @IsOptional()
  @IsString()
  dateFrom?: string;

  @ApiPropertyOptional({ description: 'End date (ISO string)' })
  @IsOptional()
  @IsString()
  dateTo?: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number;
}

export class AuditLogResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() userId: string;
  @ApiProperty() userName: string;
  @ApiProperty() service: string;
  @ApiProperty({ enum: AuditCategory }) category: AuditCategory;
  @ApiProperty() action: string;
  @ApiProperty({ enum: AuditSeverity }) severity: AuditSeverity;
  @ApiProperty() resource: string;
  @ApiPropertyOptional() resourceId?: string;
  @ApiPropertyOptional() resourceName?: string;
  @ApiProperty() descriptionVi: string;
  @ApiProperty() descriptionEn: string;
  @ApiPropertyOptional() metadata?: Record<string, any>;
  @ApiPropertyOptional() ipAddress?: string;
  @ApiPropertyOptional() userAgent?: string;
  @ApiProperty() createdAt: string;
}

export class AuditLogListResponseDto {
  @ApiProperty({ type: [AuditLogResponseDto] })
  data: AuditLogResponseDto[];

  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
  @ApiProperty() totalPages: number;
}
