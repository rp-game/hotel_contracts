/**
 * Sales Target NATS Contracts
 *
 * NATS Patterns:
 *   - sales-target.create
 *   - sales-target.find_all
 *   - sales-target.update
 *   - sales-target.delete
 *   - sales-target.recalculate
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
export interface CreateSalesTargetNatsRequest {
    tenantId: string;
    hotelId: string;
    salesPersonId: string;
    salesPersonName: string;
    year: number;
    month: number;
    targetRevenue: number;
    targetRoomNights?: number;
    targetNewAccounts?: number;
    notes?: string;
    createdBy: string;
    createdByName?: string;
}
export interface FindSalesTargetsNatsRequest {
    tenantId: string;
    hotelId?: string;
    salesPersonId?: string;
    year?: number;
    month?: number;
}
export interface UpdateSalesTargetNatsRequest {
    tenantId: string;
    targetId: string;
    targetRevenue?: number;
    targetRoomNights?: number;
    targetNewAccounts?: number;
    notes?: string;
}
export interface DeleteSalesTargetNatsRequest {
    tenantId: string;
    targetId: string;
}
export interface RecalculateSalesTargetNatsRequest {
    tenantId: string;
    hotelId: string;
    salesPersonId?: string;
    year?: number;
    month?: number;
}
export type CreateSalesTargetNatsResult = NatsResponse<any>;
export type FindSalesTargetsNatsResult = NatsResponse<any>;
export type UpdateSalesTargetNatsResult = NatsResponse<any>;
export type DeleteSalesTargetNatsResult = NatsResponse<any>;
export type RecalculateSalesTargetNatsResult = NatsResponse<any>;
//# sourceMappingURL=sales-target.nats.d.ts.map