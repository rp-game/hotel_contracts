/**
 * Folio Group REST DTOs
 *
 * Request classes with @ApiProperty + class-validator (API Gateway validation).
 * Response classes mirror the NATS data shapes for Swagger.
 * Note: tenantId/hotelId are NOT included — injected from JWT by the controller.
 */
import { PaymentMethod } from '../../payment/enums/payment.enum';
import { CustomerType, InvoicePaymentMethod } from '../../einvoice/enums';
export declare class CreateFolioGroupDto {
    bookingIds: string[];
    name?: string;
}
export declare class AddBookingToFolioGroupDto {
    bookingId: string;
}
export declare class CollectFolioDto {
    amount: number;
    paymentMethod: PaymentMethod;
    payerName?: string;
    reference?: string;
    notes?: string;
}
export declare class ExportFolioGroupInvoiceDto {
    customerType: CustomerType;
    customerName?: string;
    customerTaxCode?: string;
    customerAddress?: string;
    buyerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    paymentMethod: InvoicePaymentMethod;
    arisingDate?: string;
}
export declare class FolioGroupBookingItemDto {
    bookingId: string;
    bookingCode: string;
    guestName: string;
    roomTypeName: string;
    roomNumber: string | null;
    checkInDate: string;
    checkOutDate: string;
    status: string;
    amountDue: number;
    paidAmount: number;
    balance: number;
}
export declare class FolioGroupSummarySectionDto {
    totalBookings: number;
    totalDue: number;
    totalPaid: number;
    totalBalance: number;
}
export declare class FolioGroupFolioDto {
    folioGroupId: string;
    code: string;
    name: string | null;
    hotelId: string;
    derivedStatus: 'OPEN' | 'SETTLED';
    bookings: FolioGroupBookingItemDto[];
    summary: FolioGroupSummarySectionDto;
}
export declare class FolioGroupListItemDto {
    folioGroupId: string;
    code: string;
    name: string | null;
    memberCount: number;
    totalDue: number;
    totalPaid: number;
    totalBalance: number;
    derivedStatus: 'OPEN' | 'SETTLED';
    createdAt: string;
}
//# sourceMappingURL=folio-group.dto.d.ts.map