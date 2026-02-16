/**
 * Service Bookings NATS Contracts
 *
 * Unified contracts for both NATS messages and REST DTOs
 * Matches database entity structure (camelCase)
 *
 * Pattern: additional-services.booking.*
 * Handler: financial-service
 * Database Entity: ServiceBooking (service_bookings table)
 */
import { NatsResponse } from '../../common';
/**
 * Financial Service Booking Status Enum
 * For additional services bookings (spa, restaurant, laundry, etc.)
 * Different from:
 * - BookingStatus (room bookings): has CHECKED_IN/CHECKED_OUT
 * - FinancialServiceBookingStatus (CRM service bookings): different domain
 */
export declare enum FinancialServiceBookingStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
    NO_SHOW = "NO_SHOW"
}
/**
 * Service Booking Response DTO
 * Used in both NATS responses and REST API responses
 * Matches ServiceBooking entity structure
 */
export declare class ServiceBookingResponseDto {
    id: string;
    tenantId: string;
    hotelId: string;
    serviceId: string;
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    bookingId?: string | null;
    roomNumber?: string | null;
    serviceDate: string;
    quantity: number;
    unitPrice: number;
    totalAmount: number;
    status: FinancialServiceBookingStatus;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
}
/**
 * Create Financial Service Booking DTO
 */
export declare class CreateFinancialServiceBookingDto {
    tenantId: string;
    hotelId: string;
    serviceId: string;
    customerId?: string;
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    bookingId?: string;
    roomNumber?: string;
    serviceDate: string;
    quantity: number;
    unitPrice: number;
    totalAmount: number;
    status?: FinancialServiceBookingStatus;
    notes?: string;
}
/**
 * Update Financial Service Booking DTO
 */
export declare class UpdateFinancialServiceBookingDto {
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    roomNumber?: string;
    serviceDate?: string;
    quantity?: number;
    unitPrice?: number;
    totalAmount?: number;
    status?: FinancialServiceBookingStatus;
    notes?: string;
}
/**
 * Service Booking List Response DTO
 */
export declare class FinancialServiceBookingListResponseDto {
    data: ServiceBookingResponseDto[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Find All Service Bookings Request DTO
 */
/**
 * Find All Service Bookings Request DTO
 * Used for findAll, findByCustomer, findByStatus queries
 */
export declare class FindAllServiceBookingsRequestDto {
    tenantId?: string;
    hotelId?: string;
    serviceId?: string;
    customerId?: string;
    bookingId?: string;
    status?: FinancialServiceBookingStatus;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
/**
 * Find One Service Booking Request DTO
 */
export declare class FindOneServiceBookingRequestDto {
    id: string;
    tenantId: string;
    hotelId?: string;
}
/**
 * Update Service Booking Request DTO (for NATS)
 * Combines routing info (id, tenantId, hotelId) with update fields
 */
export declare class UpdateFinancialServiceBookingRequestDto extends UpdateFinancialServiceBookingDto {
    id: string;
    tenantId: string;
    hotelId?: string;
}
/**
 * Delete Service Booking Request DTO
 */
export declare class DeleteServiceBookingRequestDto {
    id: string;
    tenantId: string;
    hotelId?: string;
}
/**
 * Financial Service Stats Response DTO
 */
export declare class FinancialServiceStatsResponseDto {
    totalServices: number;
    activeServices: number;
    totalBookings: number;
    totalRevenue: number;
    revenueByCategory?: Record<string, number>;
    popularServices?: Array<{
        serviceId: string;
        serviceName: string;
        bookingCount: number;
        revenue: number;
    }>;
}
/**
 * NATS Response Types
 */
export type FindAllFinancialServiceBookingsNatsResponse = NatsResponse<FinancialServiceBookingListResponseDto>;
export type FindOneFinancialServiceBookingNatsResponse = NatsResponse<ServiceBookingResponseDto>;
export type CreateFinancialServiceBookingNatsResponse = NatsResponse<ServiceBookingResponseDto>;
export type UpdateFinancialServiceBookingNatsResponse = NatsResponse<ServiceBookingResponseDto>;
export type DeleteFinancialServiceBookingNatsResponse = NatsResponse<{
    message: string;
    bookingId: string;
}>;
export type GetFinancialServiceStatsNatsResponse = NatsResponse<FinancialServiceStatsResponseDto>;
//# sourceMappingURL=service-bookings.nats.d.ts.map