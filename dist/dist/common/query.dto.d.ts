/**
 * Common Query/Param DTOs
 *
 * Shared base classes for REST API query parameters and path parameters.
 * Used across all domains to avoid local DTO duplication in api-gateway.
 *
 * All DTOs are classes with @ApiProperty decorators for Swagger + class-validator decorators.
 */
/**
 * Base query DTO with optional tenantId and hotelId.
 * Used for endpoints where tenantId/hotelId may come from JWT context.
 */
export declare class BaseTenantHotelOptionalQueryDto {
    tenantId?: string;
    hotelId?: string;
}
/**
 * Query DTO with required tenantId and hotelId.
 * Used for most list/stats/detail endpoints.
 */
export declare class TenantHotelQueryDto {
    tenantId: string;
    hotelId: string;
}
/**
 * Query DTO with required tenantId and optional hotelId.
 * Used for cross-hotel queries (e.g., chain-level stats).
 */
export declare class TenantRequiredHotelOptionalQueryDto {
    tenantId: string;
    hotelId?: string;
}
/**
 * Path parameter DTO for endpoints with :id param.
 * Used across all CRUD endpoints.
 */
export declare class IdParamDto {
    id: string;
}
//# sourceMappingURL=query.dto.d.ts.map