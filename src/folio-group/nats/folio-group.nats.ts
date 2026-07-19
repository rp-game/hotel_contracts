/**
 * Folio Group NATS Contracts
 *
 * A Folio Group links several independent bookings so a receptionist can settle
 * them with ONE combined collection. Model = ALLOCATE: a combined payment is
 * split (fill-order) into per-booking BookingPayments — member.paidAmount stays
 * real, so checkout / revenue / per-booking folio keep working unchanged.
 *
 * NATS Patterns (handler: booking-service, called by: api-gateway):
 *   folio-group.create          — link bookings into a new group, return folio
 *   folio-group.add_booking     — link one more booking, return folio
 *   folio-group.remove_booking  — unlink one booking (empty group is deleted)
 *   folio-group.get_folio       — combined folio (members + summary)
 *   folio-group.list            — list groups (aggregated, no N+1)
 *   folio-group.find_one        — basic group record
 *   folio-group.collect         — collect a combined amount, allocate to members
 */

import { NatsResponse } from '../../common/nats-response.interface';

export type FolioGroupDerivedStatus = 'OPEN' | 'SETTLED';

/** One member booking inside a folio group's combined view */
export interface FolioGroupBookingItem {
  bookingId: string;
  bookingCode: string;
  guestName: string;
  roomTypeName: string;
  roomNumber: string | null;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  /** amountDue = finalAmount ?? grossAmount (single source for display AND fill) */
  amountDue: number;
  paidAmount: number;
  balance: number;
}

/** Một lần thu gộp (log cấp folio — chỉ hiển thị/audit, không dùng kế toán) */
export interface FolioGroupPaymentItem {
  id: string;
  amount: number;
  paymentMethod: string;
  payerName: string | null;
  reference: string | null;
  notes: string | null;
  collectedByName: string | null;
  createdAt: string;
}

/** Combined folio returned by create/add/remove/get/collect */
export interface FolioGroupFolio {
  folioGroupId: string;
  code: string;
  name: string | null;
  hotelId: string;
  derivedStatus: FolioGroupDerivedStatus;
  bookings: FolioGroupBookingItem[];
  /** Nhật ký các lần thu gộp (mới nhất trước) */
  payments: FolioGroupPaymentItem[];
  summary: {
    totalBookings: number;
    totalDue: number;
    totalPaid: number;
    totalBalance: number;
  };
}

/** Lightweight row for the list view (aggregated) */
export interface FolioGroupSummary {
  folioGroupId: string;
  code: string;
  name: string | null;
  memberCount: number;
  totalDue: number;
  totalPaid: number;
  totalBalance: number;
  derivedStatus: FolioGroupDerivedStatus;
  createdAt: string;
}

// =================== Requests ===================

export interface CreateFolioGroupNatsRequest {
  tenantId: string;
  hotelId: string;
  bookingIds: string[];
  name?: string;
  createdBy: string;
}

export interface AddBookingToFolioGroupNatsRequest {
  tenantId: string;
  hotelId: string;
  folioGroupId: string;
  bookingId: string;
}

export interface RemoveBookingFromFolioGroupNatsRequest {
  tenantId: string;
  hotelId: string;
  folioGroupId: string;
  bookingId: string;
}

export interface GetFolioGroupNatsRequest {
  tenantId: string;
  hotelId: string;
  folioGroupId: string;
}

export interface ListFolioGroupsNatsRequest {
  tenantId: string;
  hotelId: string;
}

/** Collect one combined amount and allocate it across members (fill-order) */
export interface CollectFolioGroupNatsRequest {
  tenantId: string;
  hotelId: string;
  folioGroupId: string;
  amount: number;
  paymentMethod: string;
  payerName?: string;
  reference?: string;
  notes?: string;
  userId: string;
  userName: string;
}

/** Export ONE consolidated VAT e-invoice (DRAFT) for all members of a folio group */
export interface ExportFolioGroupInvoiceNatsRequest {
  tenantId: string;
  hotelId: string;
  folioGroupId: string;
  customerType: 'BUSINESS' | 'INDIVIDUAL';
  customerName?: string;
  customerTaxCode?: string;
  customerAddress?: string;
  customerEmail?: string;
  customerPhone?: string;
  buyerName?: string;
  paymentMethod: string; // InvoicePaymentMethod: TM | CK | TM/CK | TTD
  arisingDate?: string; // YYYY-MM-DD; default hôm nay
  userId: string;
  userName: string;
}

export interface FolioGroupInvoiceResult {
  einvoiceId: string;
  status: string; // EInvoiceStatus (DRAFT)
  invoiceCode?: string;
}

// =================== Responses ===================

export type FolioGroupFolioNatsResponse = NatsResponse<FolioGroupFolio>;
export type ListFolioGroupsNatsResponse = NatsResponse<FolioGroupSummary[]>;
export type FindFolioGroupNatsResponse = NatsResponse<FolioGroupSummary>;
export type ExportFolioGroupInvoiceNatsResponse = NatsResponse<FolioGroupInvoiceResult>;
