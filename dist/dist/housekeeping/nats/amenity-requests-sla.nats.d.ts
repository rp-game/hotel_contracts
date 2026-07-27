/**
 * Amenity Requests SLA NATS Contracts
 * Patterns: housekeeping.amenity-requests.*
 *
 * Handles SLA tracking, auto-assignment, and status updates for guest amenity requests
 */
import { NatsResponse } from '../../common';
import { AmenityRequestStatus, AmenityAlertType, AmenityAlertStatus, AmenitySLAStatus } from '../enums';
/**
 * Amenity Request with SLA tracking information
 */
export declare class AmenityRequestData {
    id: string;
    roomId: string;
    amenityId?: string;
    quantity?: number;
    status: AmenityRequestStatus;
    notes?: string;
    requestedById?: string;
    requestedAt?: string | Date;
    assignedToId?: string;
    assignedAt?: string | Date;
    acceptedAt?: string | Date;
    fulfilledById?: string;
    fulfilledAt?: string | Date;
    slaConfigId?: string;
    slaDeadlineFirstResponse?: string | Date;
    slaDeadlineResolution?: string | Date;
    slaBreach: boolean;
    tenantId: string;
    hotelId: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Amenity Request with computed SLA status
 */
export declare class AmenityRequestWithSLAStatus extends AmenityRequestData {
    slaStatus?: AmenitySLAStatus;
    minutesUntilBreach?: number;
}
/**
 * SLA Alert record
 */
export declare class AmenityAlertData {
    id: string;
    amenityRequestId: string;
    alertType: AmenityAlertType;
    triggeredAt?: string | Date;
    sentAt?: string | Date;
    sentTo: string[];
    status: AmenityAlertStatus;
    acknowledgedAt?: string | Date;
    acknowledgedBy?: string;
    tenantId: string;
    hotelId: string;
    createdAt: string | Date;
}
export declare class FindMyAssignedAmenityRequestsNatsRequest {
    hotelId: string;
    tenantId: string;
    staffId: string;
    status?: AmenityRequestStatus[];
    page?: number;
    limit?: number;
}
export type FindMyAssignedAmenityRequestsNatsResponse = NatsResponse<AmenityRequestWithSLAStatus[]>;
export declare class FindSupervisorAmenityRequestsNatsRequest {
    hotelId: string;
    tenantId: string;
    slaStatus?: AmenitySLAStatus;
    status?: AmenityRequestStatus[];
    page?: number;
    limit?: number;
}
export type FindSupervisorAmenityRequestsNatsResponse = NatsResponse<AmenityRequestWithSLAStatus[]>;
export declare class UpdateAmenityRequestStatusNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    status?: AmenityRequestStatus;
    assignedToId?: string;
    notes?: string;
    fulfilledById?: string;
}
export type UpdateAmenityRequestStatusNatsResponse = NatsResponse<AmenityRequestWithSLAStatus>;
//# sourceMappingURL=amenity-requests-sla.nats.d.ts.map