/**
 * Group Folio NATS Contracts
 *
 * NATS Pattern: group-block.master_folio
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';

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
  bookings: GroupFolioBookingItem[];
  summary: {
    totalBookings: number;
    totalRoomCharges: number;
    totalTaxAmount: number;
    totalGrossAmount: number;
    totalPaidAmount: number;
    totalBalance: number;
  };
}

export type GetGroupMasterFolioNatsResponse = NatsResponse<GroupMasterFolio>;
