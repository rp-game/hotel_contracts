/**
 * Guest Services NATS Contracts
 *
 * Patterns:
 * - guest-services.complaints.metrics
 * - guest_services.services.create
 * - guest_services.services.find_all
 * - guest_services.services.find_one
 * - guest_services.services.update
 * - guest_services.services.delete
 * - guest_services.services.stats
 * - guest_services.bookings.create
 * - guest_services.bookings.find_all
 * - guest_services.bookings.find_one
 *
 * Handler: crm-service (GuestServicesController)
 * Called by: api-gateway (CrmController)
 */
import { NatsResponse } from '../../common';
/**
 * Service Status Enum
 */
export declare enum ServiceStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    ARCHIVED = "ARCHIVED"
}
/**
 * Booking Status Enum
 */
export declare enum ServiceBookingStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
/**
 * Create Guest Service Request
 * Pattern: guest_services.services.create
 */
export interface CreateGuestServiceNatsRequest {
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    category: string;
    price: string;
    duration?: number;
    maxCapacity?: number;
    availability?: Record<string, any>;
    status?: ServiceStatus;
}
/**
 * Update Guest Service Request
 * Pattern: guest_services.services.update
 */
export interface UpdateGuestServiceNatsRequest {
    tenantId: string;
    serviceId: string;
    updateDto: Partial<CreateGuestServiceNatsRequest>;
}
/**
 * Guest Service Response
 */
export interface GuestServiceNatsResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    category: string;
    price: string;
    duration?: number;
    maxCapacity?: number;
    status: ServiceStatus;
    availability?: Record<string, any>;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Create Service Response
 */
export type CreateGuestServiceNatsResponse = NatsResponse<GuestServiceNatsResponse>;
/**
 * Find All Services Request
 * Pattern: guest_services.services.find_all
 */
export interface FindAllGuestServicesNatsRequest {
    tenantId: string;
    hotelId?: string;
    category?: string;
    status?: ServiceStatus;
    page?: number;
    limit?: number;
}
/**
 * Find All Services Response
 */
export type FindAllGuestServicesNatsResponse = NatsResponse<{
    data: GuestServiceNatsResponse[];
    total: number;
    page: number;
    limit: number;
}>;
/**
 * Find One Service Request
 * Pattern: guest_services.services.find_one
 */
export interface FindOneGuestServiceNatsRequest {
    tenantId: string;
    serviceId: string;
}
/**
 * Find One Service Response
 */
export type FindOneGuestServiceNatsResponse = NatsResponse<GuestServiceNatsResponse>;
/**
 * Update Service Response
 */
export type UpdateGuestServiceNatsResponse = NatsResponse<GuestServiceNatsResponse>;
/**
 * Delete Service Request
 * Pattern: guest_services.services.delete
 */
export interface DeleteGuestServiceNatsRequest {
    tenantId: string;
    serviceId: string;
}
/**
 * Delete Service Response
 */
export type DeleteGuestServiceNatsResponse = NatsResponse<{
    success: boolean;
}>;
/**
 * Service Stats Response
 */
export interface ServiceStatsNatsResponse {
    totalServices: number;
    activeServices: number;
    inactiveServices: number;
    totalBookings: number;
    totalRevenue: string;
    averageRating?: number;
}
/**
 * Stats Request
 * Pattern: guest_services.services.stats
 */
export interface GetServiceStatsNatsRequest {
    tenantId: string;
    hotelId?: string;
}
/**
 * Stats Response
 */
export type GetServiceStatsNatsResponse = NatsResponse<ServiceStatsNatsResponse>;
/**
 * Create Service Booking Request
 * Pattern: guest_services.bookings.create
 */
export interface CreateServiceBookingNatsRequest {
    tenantId: string;
    guestId: string;
    serviceId: string;
    bookingDate: string;
    bookingTime?: string;
    quantity: number;
    specialRequests?: string;
    price: string;
    status?: ServiceBookingStatus;
}
/**
 * Service Booking Response
 */
export interface ServiceBookingNatsResponse {
    id: string;
    tenantId: string;
    guestId: string;
    serviceId: string;
    bookingDate: string | Date;
    bookingTime?: string;
    quantity: number;
    specialRequests?: string;
    price: string;
    status: ServiceBookingStatus;
    totalAmount: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Create Booking Response
 */
export type CreateServiceBookingNatsResponse = NatsResponse<ServiceBookingNatsResponse>;
/**
 * Find All Bookings Request
 * Pattern: guest_services.bookings.find_all
 */
export interface FindAllServiceBookingsNatsRequest {
    tenantId: string;
    guestId?: string;
    serviceId?: string;
    status?: ServiceBookingStatus;
    page?: number;
    limit?: number;
}
/**
 * Find All Bookings Response
 */
export type FindAllServiceBookingsNatsResponse = NatsResponse<{
    data: ServiceBookingNatsResponse[];
    total: number;
    page: number;
    limit: number;
}>;
/**
 * Find One Booking Request
 * Pattern: guest_services.bookings.find_one
 */
export interface FindOneServiceBookingNatsRequest {
    tenantId: string;
    bookingId: string;
}
/**
 * Find One Booking Response
 */
export type FindOneServiceBookingNatsResponse = NatsResponse<ServiceBookingNatsResponse>;
/**
 * Complaints Metrics Response
 */
export interface ComplaintsMetricsNatsResponse {
    totalComplaints: number;
    resolvedComplaints: number;
    pendingComplaints: number;
    resolutionRate: number;
    averageResolutionTime: number;
    topComplainedServices: Array<{
        serviceId: string;
        serviceName: string;
        complaintCount: number;
    }>;
}
/**
 * Complaints Metrics Request
 * Pattern: guest-services.complaints.metrics
 */
export interface GetComplaintsMetricsNatsRequest {
    tenantId: string;
    hotelId?: string;
    period?: string;
}
/**
 * Complaints Metrics Response
 */
export type GetComplaintsMetricsNatsResponse = NatsResponse<ComplaintsMetricsNatsResponse>;
//# sourceMappingURL=guest-services.nats.d.ts.map