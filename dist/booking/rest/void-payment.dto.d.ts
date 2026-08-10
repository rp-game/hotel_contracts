/**
 * Void Booking Payment REST DTO
 * Body cho POST /bookings/:id/payments/:paymentId/void (huỷ 1 thanh toán công nợ — đảo AR).
 * bookingId/paymentId lấy từ @Param; tenantId/hotelId/voidedBy auto-inject từ JWT ở gateway.
 */
export declare class VoidBookingPaymentDto {
    reason?: string;
    tenantId?: string;
    hotelId?: string;
    voidedBy?: string;
}
//# sourceMappingURL=void-payment.dto.d.ts.map