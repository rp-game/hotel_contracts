import { NatsResponse } from '../../common/nats-response.interface';
import { BookingResponseDto } from '../dto/booking-response.dto';
/**
 * NATS Pattern: booking.find_by_code
 */
export declare class FindByCodeNatsRequest {
    code: string;
    tenantId: string;
    hotelId: string;
}
export type FindByCodeNatsResponse = NatsResponse<BookingResponseDto>;
/**
 * NATS Pattern: booking.get_by_id / booking.find_by_id
 * Simple lookup without tenant/hotel context (internal use)
 */
export declare class GetBookingByIdSimpleNatsRequest {
    bookingId?: string;
    id?: string;
}
export type GetBookingByIdSimpleNatsResponse = NatsResponse<BookingResponseDto>;
/**
 * NATS Pattern: booking.get_by_room_and_guest
 */
export declare class GetBookingByRoomAndGuestNatsRequest {
    tenantId: string;
    hotelId: string;
    roomNumber?: string;
    guestName?: string;
    checkInDate?: string;
    checkOutDate?: string;
}
export type GetBookingByRoomAndGuestNatsResponse = NatsResponse<BookingResponseDto | null>;
/**
 * NATS Pattern: booking.bookings.findOne
 * Lookup with tenant/hotel context validation
 */
export declare class FindBookingByIdNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
export type FindBookingByIdNatsResponse = NatsResponse<BookingResponseDto>;
/**
 * NATS Pattern: booking.guests.findOne
 */
export declare class FindGuestByIdNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
/**
 * NATS Pattern: booking.rooms.byStatus
 */
export declare class GetRoomsByStatusNatsRequest {
    tenantId: string;
    hotelId: string;
    status: string;
}
/**
 * Single room item returned by booking.rooms.byStatus handler
 */
export declare class RoomByStatusItem {
    roomNumber: string;
    roomType: string;
    guestName: string;
    status: string;
    bookingId: string;
}
export type GetRoomsByStatusNatsResponse = NatsResponse<RoomByStatusItem[]>;
/**
 * Guest info returned by booking.guests.findOne handler
 */
export declare class GuestInfoNatsResponseData {
    id: string;
    name: string;
    email: string;
    phone: string;
    nationality: string;
    totalBookings: number;
}
export type FindGuestByIdNatsResponse = NatsResponse<GuestInfoNatsResponseData>;
//# sourceMappingURL=booking-lookup.nats.d.ts.map