/**
 * Common Query/Param DTOs
 *
 * Shared base classes for REST API query parameters and path parameters.
 * Used across all domains to avoid local DTO duplication in api-gateway.
 *
 * All DTOs are classes with @ApiProperty decorators for Swagger + class-validator decorators.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

/**
 * Base query DTO with optional tenantId and hotelId.
 * Used for endpoints where tenantId/hotelId may come from JWT context.
 */
export class BaseTenantHotelOptionalQueryDto {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsUUID()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;
}

/**
 * Query DTO with required tenantId and hotelId.
 * Used for most list/stats/detail endpoints.
 */
export class TenantHotelQueryDto {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsNotEmpty()
  @IsUUID()
  hotelId: string;
}

/**
 * Query DTO with required tenantId and optional hotelId.
 * Used for cross-hotel queries (e.g., chain-level stats).
 */
export class TenantRequiredHotelOptionalQueryDto {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;
}

/**
 * Path parameter DTO for endpoints with :id param.
 * Used across all CRUD endpoints.
 */
export class IdParamDto {
  @ApiProperty({ description: 'Resource ID', example: '550e8400-e29b-41d4-a716-446655440003' })
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
