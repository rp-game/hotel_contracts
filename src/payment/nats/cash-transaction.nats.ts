/**
 * Cash Transaction NATS Contract
 *
 * NATS Patterns: cash-transaction.create, cash-transaction.list, cash-transaction.cancel
 * Handler: payment-service
 * Called by: api-gateway
 * Used by: recording cash drawer movements (thu/chi ngoài) not tied to guest payments —
 *          paid-out (taxi/ship hộ khách, mua vật tư, tạm ứng, nộp két, hoàn tiền mặt),
 *          paid-in (thu dịch vụ ngoài, bổ sung quỹ)
 */

import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Direction of the cash movement relative to the cash drawer
 */
export enum CashTransactionDirection {
  IN = 'IN',
  OUT = 'OUT',
}

/**
 * Trạng thái giao dịch. Mặc định ACTIVE khi tạo; CANCELLED khi bị huỷ (chỉ cho phép huỷ
 * khi ca còn OPEN). Row CANCELLED bị loại khỏi tính số dư ca và tổng thu/chi.
 */
export enum CashTransactionStatus {
  ACTIVE = 'ACTIVE',
  CANCELLED = 'CANCELLED',
}

/**
 * Category of the cash movement
 */
export enum CashTransactionCategory {
  PAID_OUT = 'PAID_OUT',
  SUPPLY = 'SUPPLY',
  ADVANCE = 'ADVANCE',
  CASH_DROP = 'CASH_DROP',
  REFUND = 'REFUND',
  CORRECTION = 'CORRECTION',
  MISC_EXPENSE = 'MISC_EXPENSE',
  MISC_INCOME = 'MISC_INCOME',
  CASH_TOPUP = 'CASH_TOPUP',
  MISC = 'MISC',
}

// ─── NATS Request Interfaces ────────────────────────────────────────

/**
 * NATS request to record a cash transaction (thu/chi ngoài) in the active shift
 * Pattern: cash-transaction.create
 */
export interface CreateCashTransactionNatsRequest {
  tenantId: string;
  hotelId: string;
  cashierShiftId: string;
  direction: CashTransactionDirection | string;
  category: CashTransactionCategory | string;
  amount: number;
  currency?: string;
  reason: string;
  referenceNumber?: string;
  performedBy: string;
  performedByName: string;
}

/**
 * NATS request to list cash transactions for a shift
 * Pattern: cash-transaction.list
 */
export interface ListCashTransactionsNatsRequest {
  tenantId: string;
  hotelId: string;
  cashierShiftId: string;
}

/**
 * NATS request to list cash transactions theo KHOẢNG NGÀY (toàn khách sạn, nhiều ca) — phục vụ
 * báo cáo thu/chi ngoài theo kỳ. dateFrom/dateTo dạng ISO date/datetime (bao gồm cả 2 đầu).
 * Pattern: cash-transaction.listByPeriod
 */
export interface ListCashTransactionsByPeriodNatsRequest {
  tenantId: string;
  hotelId: string;
  dateFrom: string;
  dateTo: string;
}

/**
 * NATS request to cancel (huỷ) a cash transaction. Chỉ huỷ được khi ca đang OPEN.
 * Pattern: cash-transaction.cancel
 * ownScopeOnly: true = actor chỉ được huỷ giao dịch thuộc ca của CHÍNH MÌNH (nhân viên
 * thường); false = huỷ được ca của người khác (quản lý). Do api-gateway suy ra từ Casbin
 * scope (own vs *) và truyền xuống.
 */
export interface CancelCashTransactionNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
  reason: string;
  cancelledBy: string;
  cancelledByName?: string;
  ownScopeOnly: boolean;
}

// ─── Response Data Interfaces ───────────────────────────────────────

export interface CashTransactionData {
  id: string;
  tenantId: string;
  hotelId: string;
  voucherNo?: string | null;
  cashierShiftId: string;
  direction: CashTransactionDirection | string;
  category: CashTransactionCategory | string;
  amount: number;
  currency: string;
  reason: string;
  referenceNumber?: string;
  performedBy: string;
  performedByName: string;
  createdAt: string;
  status: CashTransactionStatus | string;
  cancelledBy?: string | null;
  cancelledByName?: string | null;
  cancelledAt?: string | null;
  cancelReason?: string | null;
}

// ─── Response Type Aliases ──────────────────────────────────────────

export type CreateCashTransactionNatsResponse = NatsResponse<CashTransactionData>;
export type ListCashTransactionsNatsResponse = NatsResponse<CashTransactionData[]>;
export type CancelCashTransactionNatsResponse = NatsResponse<CashTransactionData>;
