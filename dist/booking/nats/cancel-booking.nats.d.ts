import { NatsResponse } from '../../common/nats-response.interface';
import { BookingResponseDto } from '../dto/booking-response.dto';
/**
 * NATS Pattern: booking.cancel
 */
export interface CancelBookingNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    reason?: string;
    cancelledBy?: string;
}
export type CancelBookingNatsResponse = NatsResponse<BookingResponseDto>;
//# sourceMappingURL=cancel-booking.nats.d.ts.map