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
 * Service Type Enum (matches CRM GuestService entity)
 */
export declare enum ServiceType {
    SPA = "SPA",
    RESTAURANT = "RESTAURANT",
    ROOM_SERVICE = "ROOM_SERVICE",
    LAUNDRY = "LAUNDRY",
    TRANSPORTATION = "TRANSPORTATION",
    TOUR = "TOUR",
    CONCIERGE = "CONCIERGE",
    FITNESS = "FITNESS",
    BUSINESS_CENTER = "BUSINESS_CENTER",
    OTHER = "OTHER"
}
/**
 * Guest Service Status Enum (matches CRM GuestService entity)
 */
export declare enum GuestServiceStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    MAINTENANCE = "MAINTENANCE"
}
/**
 * Booking Status Enum (matches CRM ServiceBooking entity)
 */
export declare enum ServiceBookingStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
    NO_SHOW = "NO_SHOW"
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
    serviceType: ServiceType;
    price?: number;
    currency?: string;
    durationMinutes?: number;
    maxCapacity?: number;
    requiresBooking?: boolean;
    advanceBookingHours?: number;
    operatingHours?: string;
    location?: string;
    contactInfo?: string;
    amenities?: string[];
    specialRequirements?: string;
    status?: GuestServiceStatus;
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
 * Guest Service Response (matches CRM GuestService entity)
 */
export interface GuestServiceNatsResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    serviceType: ServiceType;
    status: GuestServiceStatus;
    price?: number;
    currency?: string;
    durationMinutes?: number;
    maxCapacity?: number;
    advanceBookingHours?: number;
    requiresBooking: boolean;
    operatingHours?: string;
    location?: string;
    contactInfo?: string;
    amenities?: string[];
    specialRequirements?: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    createdBy?: string;
    updatedBy?: string;
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
    serviceType?: ServiceType;
    status?: GuestServiceStatus;
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
 * Guest Service Stats Response
 */
export interface GuestServiceStatsNatsResponse {
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
export interface GetGuestServiceStatsNatsRequest {
    tenantId: string;
    hotelId?: string;
}
/**
 * Stats Response
 */
export type GetGuestServiceStatsNatsResponse = NatsResponse<GuestServiceStatsNatsResponse>;
/**
 * Create Service Booking DTO
 * Pattern: guest_services.bookings.create
 *
 * Standardized contract used by both REST (API Gateway) and NATS (CRM Service) layers.
 * This class replaces both CreateGuestServiceBookingDto and CreateServiceBookingNatsRequest
 * to ensure field-level consistency across all layers.
 *
 * @standardized 2026-02-11
 * @contract_accuracy PERFECT (Field names unified)
 */
export declare class CreateServiceBookingDto {
    tenantId: string;
    hotelId: string;
    serviceId: string;
    guestId: string;
    roomBookingId?: string;
    roomNumber?: string;
    bookingDateTime: string;
    durationMinutes?: number;
    numberOfGuests: number;
    price?: number;
    currency?: string;
    specialRequests?: string;
    notes?: string;
    confirmationCode?: string;
    paymentStatus?: string;
    staffAssigned?: string;
    status?: ServiceBookingStatus;
}
/**
 * Service Booking Response (matches CRM ServiceBooking entity)
 */
export interface ServiceBookingNatsResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    serviceId: string;
    customerId: string;
    roomBookingId?: string;
    roomNumber?: string;
    status: ServiceBookingStatus;
    bookingDate: string | Date;
    serviceDate: string | Date;
    durationMinutes?: number;
    numberOfGuests: number;
    price?: number;
    currency?: string;
    specialRequests?: string;
    notes?: string;
    confirmationCode?: string;
    paymentStatus: string;
    staffAssigned?: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    createdBy?: string;
    updatedBy?: string;
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
    customerId?: string;
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