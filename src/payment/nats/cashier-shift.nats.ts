/**
 * Cashier Shift NATS Contract
 *
 * NATS Patterns: cashier-shift.open, cashier-shift.close, cashier-shift.force-close,
 *                cashier-shift.find, cashier-shift.findById, cashier-shift.findActive
 * Handler: payment-service
 * Called by: api-gateway
 * Used by: managing cashier shifts for reception staff cash reconciliation
 */

import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Cashier shift status
 */
export enum CashierShiftStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  FORCE_CLOSED = 'FORCE_CLOSED',
}

/**
 * Cashier shift type (time of day)
 */
export enum CashierShiftType {
  MORNING = 'MORNING',
  AFTERNOON = 'AFTERNOON',
  NIGHT = 'NIGHT',
}

// ─── NATS Request Interfaces ────────────────────────────────────────

/**
 * NATS request to open a new cashier shift
 * Pattern: cashier-shift.open
 */
export interface ShiftTimeRange {
  start: string; // HH:mm
  end: string;   // HH:mm
  label?: string;
}

export interface ShiftConfig {
  morning?: ShiftTimeRange;
  afternoon?: ShiftTimeRange;
  night?: ShiftTimeRange;
}

export interface OpenCashierShiftNatsRequest {
  tenantId: string;
  hotelId: string;
  staffId: string;
  staffName: string;
  openingBalance: number;
  timezone?: string;
  shiftConfig?: ShiftConfig;
}

/**
 * NATS request to close a cashier shift
 * Pattern: cashier-shift.close
 */
export interface CloseCashierShiftNatsRequest {
  tenantId: string;
  hotelId: string;
  shiftId: string;
  closingBalance: number;
  notes?: string;
  closedBy: string;
}

/**
 * NATS request to force-close a cashier shift (manager action)
 * Pattern: cashier-shift.force-close
 */
export interface ForceCloseCashierShiftNatsRequest {
  tenantId: string;
  hotelId: string;
  shiftId: string;
  closingBalance?: number;
  reason: string;
  closedBy: string;
}

/**
 * NATS request to get a cashier shift by ID
 * Pattern: cashier-shift.findById
 */
export interface GetCashierShiftNatsRequest {
  tenantId: string;
  hotelId: string;
  id: string;
}

/**
 * NATS request to find cashier shifts with filters
 * Pattern: cashier-shift.find
 */
export interface FindCashierShiftsNatsRequest {
  tenantId: string;
  hotelId: string;
  staffId?: string;
  status?: CashierShiftStatus | string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  limit?: number;
}

/**
 * NATS request to get the active (OPEN) shift for a staff member
 * Pattern: cashier-shift.findActive
 */
export interface GetActiveCashierShiftNatsRequest {
  tenantId: string;
  hotelId: string;
  staffId: string;
}

// ─── Response Data Interfaces ───────────────────────────────────────

/**
 * Payment summary breakdown by method
 */
export interface CashierShiftPaymentSummary {
  method: string;
  count: number;
  total: number;
}

/**
 * Cashier shift response data
 */
export interface CashierShiftData {
  id: string;
  tenantId: string;
  hotelId: string;
  staffId: string;
  staffName: string;
  shiftDate: string;
  shiftType: CashierShiftType | string;
  openedAt: string;
  closedAt?: string;
  openingBalance: number;
  closingBalance?: number;
  expectedBalance?: number;
  discrepancy?: number;
  status: CashierShiftStatus | string;
  notes?: string;
  closedBy?: string;
  forceCloseReason?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Cashier shift detail data with payment summary
 */
export interface CashierShiftDetailData extends CashierShiftData {
  paymentSummary: CashierShiftPaymentSummary[];
  totalCashPayments: number;
  totalPaymentsCount: number;
}

// ─── Response Type Aliases ──────────────────────────────────────────

export type OpenCashierShiftNatsResponse = NatsResponse<CashierShiftData>;
export type CloseCashierShiftNatsResponse = NatsResponse<CashierShiftData>;
export type ForceCloseCashierShiftNatsResponse = NatsResponse<CashierShiftData>;
export type GetCashierShiftNatsResponse = NatsResponse<CashierShiftDetailData>;
export type FindCashierShiftsNatsResponse = NatsResponse<CashierShiftData[]>;
export type GetActiveCashierShiftNatsResponse = NatsResponse<CashierShiftData | null>;
