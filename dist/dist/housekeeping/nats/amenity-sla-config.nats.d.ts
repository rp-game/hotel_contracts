/**
 * Amenity SLA Configuration NATS Contracts
 * Patterns: housekeeping.amenity-sla-configs.*
 *
 * Manages hotel-level SLA configuration for amenity requests
 */
import { NatsResponse } from '../../common';
/**
 * SLA Configuration for amenity requests at hotel level
 * Global configuration per hotel (not per-amenity in Phase 1)
 */
export declare class AmenitySLAConfigData {
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
export declare class CreateAmenitySLAConfigNatsRequest {
    hotelId: string;
    tenantId: string;
    firstResponseMinutes: number;
    firstResponseMinutesOffPeak: number;
    resolutionMinutes: number;
    escalationLevel1Percent?: number;
    escalationLevel2Percent?: number;
    priority?: string;
}
export type CreateAmenitySLAConfigNatsResponse = NatsResponse<AmenitySLAConfigData>;
export declare class FindAmenitySLAConfigNatsRequest {
    hotelId: string;
    tenantId: string;
}
export type FindAmenitySLAConfigNatsResponse = NatsResponse<AmenitySLAConfigData>;
//# sourceMappingURL=amenity-sla-config.nats.d.ts.map