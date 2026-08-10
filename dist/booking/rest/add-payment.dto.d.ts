/**
 * Add Payment REST DTO
 * Body shape for POST /bookings/:id/payment (ghi nhận thanh toán bổ sung giữa kỳ).
 * bookingId lấy từ @Param; tenantId/hotelId/addedBy auto-inject từ JWT ở gateway.
 */
import { PaymentMethod } from '../../payment/enums/payment.enum';
export declare class AddPaymentDto {
    amount: number;
    paymentMethod: PaymentMethod;
    corporateAccountId?: string;
    transactionId?: string;
    notes?: string;
    payerName?: string;
    tenantId?: string;
    hotelId?: string;
    addedBy?: string;
}
//# sourceMappingURL=add-payment.dto.d.ts.map