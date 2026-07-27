/**
 * Group Folio NATS Contracts
 *
 * NATS Pattern: group-block.master_folio
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { GroupMasterChargeItem } from './group-master-charge.nats';
import { GroupPaymentItem } from './group-payment.nats';
/**
 * NATS request to get aggregated master folio for a group block
 */
export interface GetGroupMasterFolioNatsRequest {
    groupBlockId: string;
    tenantId: string;
    hotelId: string;
}
export interface GroupFolioBookingItem {
    bookingId: string;
    bookingCode: string;
    guestName: string;
    roomTypeName: string;
    roomNumber: string | null;
    checkInDate: string;
    checkOutDate: string;
    status: string;
    totalAmount: number;
    taxAmount: number;
    grossAmount: number;
    paidAmount: number;
    balance: number;
}
export interface GroupMasterFolio {
    groupBlockId: string;
    blockCode: string;
    groupName: string;
    billingMode: string;
    bookings: GroupFolioBookingItem[];
    masterCharges: GroupMasterChargeItem[];
    deposits: GroupPaymentItem[];
    payments: GroupPaymentItem[];
    summary: {
        totalBookings: number;
        totalRoomCharges: number;
        totalTaxAmount: number;
        totalGrossAmount: number;
        totalMasterCharges: number;
        totalDepositPaid: number;
        totalPaymentPaid: number;
        totalPaidAmount: number;
        totalBalance: number;
        creditBalance: number;
    };
}
export type GetGroupMasterFolioNatsResponse = NatsResponse<GroupMasterFolio>;
//# sourceMappingURL=group-folio.nats.d.ts.map