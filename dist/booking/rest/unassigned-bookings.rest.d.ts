/**
 * Unassigned Bookings REST API DTOs
 *
 * Used by API Gateway for REST endpoints
 * These are class-based DTOs with @ApiProperty decorators for Swagger documentation
 *
 * Endpoints: GET /bookings/unassigned
 */
/**
 * Unassigned Booking Item DTO
 * Response for unassigned bookings list
 */
export declare class UnassignedBookingItemDto {
    bookingId: string;
    guestName: string;
    roomType: string;
    roomTypeId: string;
    checkIn: string;
    checkOut: string;
    duration: number;
    guestCount: number;
    specialRequests?: string;
    assignmentStatus: string;
    bookingType: string;
}
/**
 * Get Unassigned Bookings Response DTO
 */
export declare class GetUnassignedBookingsResponseDto {
    data: UnassignedBookingItemDto[];
    total: number;
    page: number;
    limit: number;
}
//# sourceMappingURL=unassigned-bookings.rest.d.ts.map