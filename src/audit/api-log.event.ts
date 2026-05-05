import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

/** Fired by any service after calling a 3rd-party API, consumed by user-service */
export interface ApiLogEvent {
  /** Which internal service fired this (e.g. 'einvoice', 'payment', 'channel') */
  service: string;
  /** 3rd-party provider name (e.g. 'HILO', 'VNPAY', 'STAAH') */
  provider: string;
  /** tenantId that owns this call */
  tenantId: string;
  /** hotelId if applicable */
  hotelId?: string;

  /** HTTP method of outbound call */
  method: string;
  /** Full URL called */
  url: string;
  /** All request headers (server-to-server, no browser cookies) */
  requestHeaders?: Record<string, string>;
  /** Request body (full, caller responsible for redacting secrets before emit) */
  requestBody?: any;

  /** HTTP status code received */
  responseStatus: number;
  /** All response headers */
  responseHeaders?: Record<string, string>;
  /** Response body (full) */
  responseBody?: any;

  /** ms from request sent to response received */
  durationMs: number;
  /** ISO timestamp when request was sent */
  requestedAt: string;
  /** ISO timestamp when response was received */
  respondedAt: string;

  /** true if responseStatus < 400 and no network error */
  success: boolean;
  /** Error message if network/timeout error (not HTTP error) */
  errorMessage?: string;

  /** Optional correlation id for tracing */
  correlationId?: string;
}

// ── NATS request/response ─────────────────────────────────────────────────

export interface FindApiLogsNatsRequest {
  /** Required for platform-admin scope */
  tenantId?: string;
  hotelId?: string;
  service?: string;
  provider?: string;
  method?: string;
  /** Filter by success/failure */
  success?: boolean;
  /** Filter responseStatus >= this value (e.g. 400 to see errors) */
  statusMin?: number;
  /** Filter responseStatus <= this value */
  statusMax?: number;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  limit?: number;
}

// ── REST DTOs ─────────────────────────────────────────────────────────────

export class FindApiLogsQueryDto {
  @ApiPropertyOptional() @IsOptional() @IsString() tenantId?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() hotelId?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() service?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() provider?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() method?: string;
  @ApiPropertyOptional({ type: Boolean }) @IsOptional() success?: boolean;
  @ApiPropertyOptional() @IsOptional() @Type(() => Number) @IsNumber() statusMin?: number;
  @ApiPropertyOptional() @IsOptional() @Type(() => Number) @IsNumber() statusMax?: number;
  @ApiPropertyOptional() @IsOptional() @IsString() dateFrom?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() dateTo?: string;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional() @Type(() => Number) @IsNumber() @Min(1)
  page?: number;

  @ApiPropertyOptional({ default: 20 })
  @IsOptional() @Type(() => Number) @IsNumber() @Min(1) @Max(100)
  limit?: number;
}

export class ApiLogResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() service: string;
  @ApiProperty() provider: string;
  @ApiProperty() tenantId: string;
  @ApiPropertyOptional() hotelId?: string;
  @ApiProperty() method: string;
  @ApiProperty() url: string;
  @ApiPropertyOptional() requestHeaders?: Record<string, string>;
  @ApiPropertyOptional() requestBody?: any;
  @ApiProperty() responseStatus: number;
  @ApiPropertyOptional() responseHeaders?: Record<string, string>;
  @ApiPropertyOptional() responseBody?: any;
  @ApiProperty() durationMs: number;
  @ApiProperty() requestedAt: string;
  @ApiProperty() respondedAt: string;
  @ApiProperty() success: boolean;
  @ApiPropertyOptional() errorMessage?: string;
  @ApiPropertyOptional() correlationId?: string;
}

export class ApiLogListResponseDto {
  @ApiProperty({ type: [ApiLogResponseDto] }) data: ApiLogResponseDto[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
  @ApiProperty() totalPages: number;
}
