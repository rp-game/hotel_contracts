/**
 * Allotment NATS Contracts
 *
 * NATS Patterns:
 *   allotment.create, allotment.find_all, allotment.find_one,
 *   allotment.update, allotment.delete, allotment.release,
 *   allotment.stop-sell, allotment.pickup, allotment.check-availability,
 *   allotment.summary
 *
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
export interface AllotmentDetailInput {
    roomTypeId: string;
    roomTypeName: string;
    allottedRooms: number;
    daysOfWeek?: number[] | null;
}
export interface CreateAllotmentNatsRequest {
    tenantId: string;
    hotelId: string;
    partnerId: string;
    partnerType: string;
    partnerName: string;
    contractNumber?: string;
    startDate: string;
    endDate: string;
    releaseDays: number;
    inventoryControl: string;
    ratePlanId?: string;
    notes?: string;
    details: AllotmentDetailInput[];
    createdBy: string;
    createdByName?: string;
}
export interface UpdateAllotmentNatsRequest {
    tenantId: string;
    allotmentId: string;
    startDate?: string;
    endDate?: string;
    releaseDays?: number;
    inventoryControl?: string;
    ratePlanId?: string | null;
    status?: string;
    notes?: string;
}
export interface FindAllotmentsNatsRequest {
    tenantId: string;
    hotelId?: string;
    partnerId?: string;
    partnerType?: string;
    status?: string;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
}
export interface GetAllotmentNatsRequest {
    tenantId: string;
    allotmentId: string;
}
export interface DeleteAllotmentNatsRequest {
    tenantId: string;
    allotmentId: string;
}
export interface AllotmentReleaseNatsRequest {
    tenantId: string;
    allotmentId: string;
    dates: string[];
    roomTypeId?: string;
}
export interface AllotmentStopSellNatsRequest {
    tenantId: string;
    allotmentId: string;
    dates: string[];
    roomTypeId?: string;
    stopSell: boolean;
}
export interface GetAllotmentPickupNatsRequest {
    tenantId: string;
    allotmentId: string;
    startDate?: string;
    endDate?: string;
    roomTypeId?: string;
}
export interface CheckAllotmentAvailabilityNatsRequest {
    tenantId: string;
    hotelId: string;
    partnerId: string;
    partnerType: string;
    roomTypeId: string;
    stayDates: string[];
}
export interface GetAllotmentSummaryNatsRequest {
    tenantId: string;
    hotelId?: string;
}
export interface AllotmentResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    partnerId: string;
    partnerType: string;
    partnerName: string;
    contractNumber?: string;
    startDate: string;
    endDate: string;
    releaseDays: number;
    inventoryControl: string;
    ratePlanId?: string;
    status: string;
    notes?: string;
    totalAllottedRooms?: number;
    totalPickedUpRooms?: number;
    utilizationPercent?: number;
    details?: AllotmentDetailResponse[];
    createdByName?: string;
    createdAt: string;
    updatedAt: string;
}
export interface AllotmentDetailResponse {
    id: string;
    roomTypeId: string;
    roomTypeName: string;
    allottedRooms: number;
    daysOfWeek?: number[] | null;
}
export interface AllotmentDailyInventoryResponse {
    date: string;
    roomTypeId: string;
    roomTypeName?: string;
    allottedRooms: number;
    pickedUpRooms: number;
    releasedRooms: number;
    stopSell: boolean;
    available: number;
}
export interface AllotmentAvailabilityResponse {
    allotmentId: string | null;
    inventoryControl: string | null;
    availableDates: string[];
    unavailableDates: string[];
}
export interface AllotmentSummaryResponse {
    totalActiveAllotments: number;
    totalHeldRooms: number;
    totalPickedUpRooms: number;
    utilizationPercent: number;
    upcomingReleases: number;
}
export interface AllotmentInventoryBatchItem {
    roomTypeId: string;
    date: string;
    allotmentHeld: number;
}
export interface AllotmentInventoryBatchEvent {
    hotelId: string;
    items: AllotmentInventoryBatchItem[];
}
export type CreateAllotmentNatsResult = NatsResponse<AllotmentResponse>;
export type FindAllotmentsNatsResult = NatsResponse<{
    allotments: AllotmentResponse[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export type GetAllotmentNatsResult = NatsResponse<AllotmentResponse>;
export type GetAllotmentPickupNatsResult = NatsResponse<{
    daily: AllotmentDailyInventoryResponse[];
}>;
export type CheckAllotmentAvailabilityNatsResult = NatsResponse<AllotmentAvailabilityResponse>;
export type GetAllotmentSummaryNatsResult = NatsResponse<AllotmentSummaryResponse>;
//# sourceMappingURL=allotment.nats.d.ts.map