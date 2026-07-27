/**
 * Amenity SLA Configuration REST API DTOs
 *
 * Shared classes used by both:
 * - Contracts (for type definitions)
 * - API Gateway REST endpoints (with @ApiProperty decorators)
 * - Housekeeping Service REST endpoints
 *
 * These are imported and used by both NATS handlers and REST controllers
 * to ensure consistency between NATS and REST contracts
 */
/**
 * Amenity SLA Configuration Response DTO
 * Returned by GET /amenity-sla-configs
 */
export declare class AmenitySLAConfigResponseDto {
    id: string;
    hotelId: string;
    tenantId: string;
    firstResponseMinutes: number;
    firstResponseMinutesOffPeak: number;
    resolutionMinutes: number;
    escalationLevel1Percent: number;
    escalationLevel2Percent: number;
    priority?: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Create Amenity SLA Configuration DTO
 * Used by POST /amenity-sla-configs
 */
export declare class CreateAmenitySLAConfigDto {
    hotelId: string;
    tenantId: string;
    firstResponseMinutes: number;
    firstResponseMinutesOffPeak: number;
    resolutionMinutes: number;
    escalationLevel1Percent?: number;
    escalationLevel2Percent?: number;
    priority?: string;
}
//# sourceMappingURL=amenity-sla-config.rest.d.ts.map