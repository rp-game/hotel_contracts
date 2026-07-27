/**
 * Amenity Request REST API DTOs
 *
 * Shared classes used by both:
 * - API Gateway REST endpoints (with @ApiProperty decorators)
 * - Housekeeping Service REST endpoints
 */
import { AmenityRequestStatus } from '../enums/amenity-request-status.enum';
/**
 * Create Housekeeping Amenity Request DTO
 * Used by POST /amenity-requests (housekeeping-service)
 * Separate from booking domain's CreateAmenityRequestDto
 */
export declare class CreateHousekeepingAmenityRequestDto {
    roomId: string;
    amenityId: string;
    quantity?: number;
    status?: AmenityRequestStatus;
    notes?: string;
    requestedById?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Update Housekeeping Amenity Request DTO
 * Used by PATCH /amenity-requests/:id (housekeeping-service)
 * Allows updating status, assigned staff, notes, and completion
 * Separate from booking domain's UpdateAmenityRequestDto
 */
export declare class UpdateHousekeepingAmenityRequestDto {
    amenityId?: string;
    requestedById?: string | null;
    fulfilledById?: string | null;
    status?: AmenityRequestStatus;
    assignedToId?: string | null;
    fulfilledAt?: string | null;
    notes?: string;
    photos?: string[];
}
/**
 * Housekeeping Amenity Request Response DTO
 * Returned by GET endpoints (housekeeping-service)
 */
export declare class HousekeepingAmenityRequestResponseDto {
    id: string;
    amenityId: string;
    roomId: string;
    tenantId: string;
    hotelId: string;
    status: AmenityRequestStatus;
    requestedById?: string;
    assignedToId?: string;
    assignedAt?: Date;
    fulfilledById?: string;
    requestedAt: Date;
    fulfilledAt?: Date;
    notes?: string;
    photos?: string[];
    slaDeadlineFirstResponse?: Date;
    slaDeadlineResolution?: Date;
    slaBreach?: boolean;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Housekeeping Amenity Request with SLA Status DTO
 * Extended response that includes computed SLA status
 * Used by supervisor and staff views
 */
export declare class HousekeepingAmenityRequestWithSLAStatusDto extends HousekeepingAmenityRequestResponseDto {
    slaStatus?: string;
    minutesUntilBreach?: number | null;
}
//# sourceMappingURL=amenity-request.rest.d.ts.map