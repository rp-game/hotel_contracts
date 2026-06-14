/**
 * Grid Pricing NATS Contracts
 *
 * Patterns:
 * - pricing.override.set / pricing.override.delete / pricing.override.list  (cell overrides)
 * - pricing.rate-room-type.set / pricing.rate-room-type.list                (rate × room ticks)
 * - pricing.grid.get                                                        (listed-price grid, batch)
 */
import { NatsResponse } from '../../common/nats-response.interface';
/** Upsert one cell override (rate × room × date) — manual price overriding the formula. */
export declare class SetCellOverrideRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    roomTypeId: string;
    date: string;
    price: number;
    currency?: string;
}
/** Delete a cell override → cell reverts to the formula. */
export declare class DeleteCellOverrideRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    roomTypeId: string;
    date: string;
}
/** List cell overrides for a hotel (+ optional rate plan) over a date range. */
export declare class ListCellOverrideRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId?: string;
    dateFrom: string;
    dateTo: string;
}
export declare class CellOverrideDto {
    id: string;
    ratePlanId: string;
    roomTypeId: string;
    date: string;
    price: number;
    currency: string;
}
export declare class DeleteCellOverrideResult {
    deleted: boolean;
}
export type SetCellOverrideNatsResponse = NatsResponse<CellOverrideDto>;
export type DeleteCellOverrideNatsResponse = NatsResponse<DeleteCellOverrideResult>;
export type ListCellOverrideNatsResponse = NatsResponse<CellOverrideDto[]>;
/** Set a tick for (rate × room). Absence of a row = active; only OFF rows are stored. */
export declare class SetRateRoomTypeRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId: string;
    roomTypeId: string;
    isActive: boolean;
}
/** List rate × room ticks (only OFF rows; absence = active). */
export declare class ListRateRoomTypeRequest {
    tenantId: string;
    hotelId: string;
    ratePlanId?: string;
}
export declare class RateRoomTypeDto {
    id: string;
    ratePlanId: string;
    roomTypeId: string;
    isActive: boolean;
}
export declare class SetRateRoomTypeActiveResult {
    active: true;
}
export type SetRateRoomTypeNatsResponse = NatsResponse<RateRoomTypeDto | SetRateRoomTypeActiveResult>;
export type ListRateRoomTypeNatsResponse = NatsResponse<RateRoomTypeDto[]>;
/** Request the listed-price grid for a hotel over a date range. */
export declare class GetPricingGridRequest {
    tenantId: string;
    hotelId: string;
    dateFrom: string;
    dateTo: string;
    roomTypeIds: string[];
    ratePlanIds?: string[];
}
export declare class PricingGridCell {
    price: number;
    source: string;
}
/** {ratePlanId → roomTypeId → {date → {price, source}}} */
export type PricingGrid = Record<string, Record<string, Record<string, PricingGridCell>>>;
export type GetPricingGridNatsResponse = NatsResponse<PricingGrid>;
//# sourceMappingURL=grid-pricing.nats.d.ts.map