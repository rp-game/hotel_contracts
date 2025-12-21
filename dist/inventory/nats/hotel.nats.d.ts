/**
 * Hotel NATS Contracts
 *
 * Patterns:
 * - hotels.findAll
 * - hotels.findOne
 * - hotels.create
 * - hotels.update
 * - hotels.delete
 * - hotels.updateStatus
 * - hotels.findByChain
 * - hotels.analytics.occupancy
 * - hotels.analytics.revenue
 * - hotels.analytics.occupancy.aggregate
 * - hotels.analytics.revenue.aggregate
 * - hotels.performance
 * - hotels.settings.updated
 * - hotels.standards.apply
 * - rooms.findByHotel
 * - hotels.room-status.update
 * - hotels.availability.check
 * - hotels.rates.get
 * - hotels.inventory.summary
 * - tenant.hotel.sync (Event)
 * - hotels.updateChainId
 *
 * Handler: inventory-service
 * Called by: api-gateway, user-service
 */
import { NatsResponse } from '../../common';
export interface Hotel {
    id: string;
    tenantId: string;
    name: string;
    address?: string;
    chainId?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
}
/**
 * Find All Hotels Request
 * Pattern: hotels.findAll
 */
export interface FindAllHotelsRequest {
    filters?: any;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
export type FindAllHotelsResponse = Hotel[];
export type FindAllHotelsNatsResponse = NatsResponse<FindAllHotelsResponse>;
/**
 * Find One Hotel Request
 * Pattern: hotels.findOne
 */
export interface FindOneHotelRequest {
    id: string;
}
export type FindOneHotelResponse = Hotel | null;
export type FindOneHotelNatsResponse = NatsResponse<FindOneHotelResponse>;
/**
 * Create Hotel Request
 * Pattern: hotels.create
 */
export interface CreateHotelRequest {
    hotelData: any;
}
export type CreateHotelResponse = Hotel;
export type CreateHotelNatsResponse = NatsResponse<CreateHotelResponse>;
/**
 * Update Hotel Request
 * Pattern: hotels.update
 */
export interface UpdateHotelRequest {
    id: string;
    updateData: any;
}
export type UpdateHotelResponse = Hotel | null;
export type UpdateHotelNatsResponse = NatsResponse<UpdateHotelResponse>;
/**
 * Delete Hotel Request
 * Pattern: hotels.delete
 */
export interface DeleteHotelRequest {
    id: string;
}
export interface DeleteHotelResponse {
    message: string;
}
export type DeleteHotelNatsResponse = NatsResponse<DeleteHotelResponse>;
/**
 * Update Hotel Status Request
 * Pattern: hotels.updateStatus
 */
export interface UpdateHotelStatusRequest {
    id: string;
    status: string;
}
export type UpdateHotelStatusResponse = Hotel;
export type UpdateHotelStatusNatsResponse = NatsResponse<UpdateHotelStatusResponse>;
/**
 * Find Hotels By Chain Request
 * Pattern: hotels.findByChain
 */
export interface FindHotelsByChainRequest {
    chainId: string;
}
export type FindHotelsByChainResponse = Hotel[];
export type FindHotelsByChainNatsResponse = NatsResponse<FindHotelsByChainResponse>;
/**
 * Get Occupancy Analytics Request
 * Pattern: hotels.analytics.occupancy
 */
export interface GetOccupancyAnalyticsRequest {
    hotelId: string;
    period: string;
}
export interface OccupancyAnalytics {
    hotelId: string;
    period: string;
    occupancyRate: number;
    totalRooms: number;
    occupiedRooms: number;
    data?: any[];
}
export type GetOccupancyAnalyticsResponse = OccupancyAnalytics;
export type GetOccupancyAnalyticsNatsResponse = NatsResponse<GetOccupancyAnalyticsResponse>;
/**
 * Get Revenue Analytics Request
 * Pattern: hotels.analytics.revenue
 */
export interface GetRevenueAnalyticsRequest {
    hotelId: string;
    period: string;
}
export interface RevenueAnalytics {
    hotelId: string;
    period: string;
    totalRevenue: number;
    averageNightlyRate: number;
    revenuePerAvailableRoom: number;
    data?: any[];
}
export type GetRevenueAnalyticsResponse = RevenueAnalytics;
export type GetRevenueAnalyticsNatsResponse = NatsResponse<GetRevenueAnalyticsResponse>;
/**
 * Get Aggregated Occupancy Analytics Request
 * Pattern: hotels.analytics.occupancy.aggregate
 */
export interface GetAggregatedOccupancyAnalyticsRequest {
    hotelIds: string[];
    period: string;
}
export interface AggregatedOccupancyAnalytics {
    hotelIds: string[];
    period: string;
    aggregatedOccupancyRate: number;
    data?: any[];
}
export type GetAggregatedOccupancyAnalyticsResponse = AggregatedOccupancyAnalytics;
export type GetAggregatedOccupancyAnalyticsNatsResponse = NatsResponse<GetAggregatedOccupancyAnalyticsResponse>;
/**
 * Get Aggregated Revenue Analytics Request
 * Pattern: hotels.analytics.revenue.aggregate
 */
export interface GetAggregatedRevenueAnalyticsRequest {
    hotelIds: string[];
    period: string;
}
export interface AggregatedRevenueAnalytics {
    hotelIds: string[];
    period: string;
    aggregatedRevenue: number;
    data?: any[];
}
export type GetAggregatedRevenueAnalyticsResponse = AggregatedRevenueAnalytics;
export type GetAggregatedRevenueAnalyticsNatsResponse = NatsResponse<GetAggregatedRevenueAnalyticsResponse>;
/**
 * Get Hotel Performance Request
 * Pattern: hotels.performance
 */
export interface GetHotelPerformanceRequest {
    hotelId: string;
    metric: string;
}
export interface PerformanceMetrics {
    hotelId: string;
    metric: string;
    value: number;
    trend?: string;
}
export type GetHotelPerformanceResponse = PerformanceMetrics;
export type GetHotelPerformanceNatsResponse = NatsResponse<GetHotelPerformanceResponse>;
/**
 * Hotel Settings Updated Request
 * Pattern: hotels.settings.updated
 */
export interface HotelSettingsUpdatedRequest {
    hotelId: string;
    settings: any;
}
export interface HotelSettingsUpdatedResponse {
    success: boolean;
    message: string;
}
export type HotelSettingsUpdatedNatsResponse = NatsResponse<HotelSettingsUpdatedResponse>;
/**
 * Apply Brand Standards Request
 * Pattern: hotels.standards.apply
 */
export interface ApplyBrandStandardsRequest {
    hotelId: string;
    standards: any;
}
export interface ApplyBrandStandardsResponse {
    success: boolean;
    applied: string[];
    skipped?: string[];
}
export type ApplyBrandStandardsNatsResponse = NatsResponse<ApplyBrandStandardsResponse>;
/**
 * Find Rooms By Hotel Request
 * Pattern: rooms.findByHotel
 */
export interface FindRoomsByHotelRequest {
    hotelId: string;
}
export interface RoomData {
    id: string;
    roomNumber: string;
    status: string;
}
export type FindRoomsByHotelResponse = RoomData[];
export type FindRoomsByHotelNatsResponse = NatsResponse<FindRoomsByHotelResponse>;
/**
 * Update Room Status (Hotel) Request
 * Pattern: hotels.room-status.update
 */
export interface UpdateRoomStatusHotelRequest {
    roomId: string;
    hotelId: string;
    status: string;
}
export interface UpdateRoomStatusHotelResponse {
    success: boolean;
    message: string;
}
export type UpdateRoomStatusHotelNatsResponse = NatsResponse<UpdateRoomStatusHotelResponse>;
/**
 * Check Availability Request
 * Pattern: hotels.availability.check
 */
export interface CheckAvailabilityRequest {
    hotelId: string;
}
export interface AvailabilityStatus {
    hotelId: string;
    status: string;
    availableCount?: number;
}
export type CheckAvailabilityResponse = AvailabilityStatus;
export type CheckAvailabilityNatsResponse = NatsResponse<CheckAvailabilityResponse>;
/**
 * Get Hotel Rates Request
 * Pattern: hotels.rates.get
 */
export interface GetHotelRatesRequest {
    hotelId: string;
}
export interface RateInfo {
    roomTypeId: string;
    baseRate: number;
}
export type GetHotelRatesResponse = RateInfo[];
export type GetHotelRatesNatsResponse = NatsResponse<GetHotelRatesResponse>;
/**
 * Get Inventory Summary Request
 * Pattern: hotels.inventory.summary
 */
export interface GetInventorySummaryRequest {
    hotelId: string;
    date?: string;
}
export interface InventorySummary {
    hotelId: string;
    totalRooms: number;
    availableRooms: number;
    occupiedRooms: number;
    maintenanceRooms?: number;
}
export type GetInventorySummaryResponse = InventorySummary;
export type GetInventorySummaryNatsResponse = NatsResponse<GetInventorySummaryResponse>;
/**
 * Tenant Hotel Sync Event
 * Pattern: tenant.hotel.sync
 * Type: EventPattern (Fire & Forget)
 */
export interface TenantHotelSyncEvent {
    tenantId: string;
    hotelId: string;
    syncData: any;
}
/**
 * Update Chain ID Request
 * Pattern: hotels.updateChainId
 */
export interface UpdateChainIdRequest {
    hotelId: string;
    chainId: string;
}
export type UpdateChainIdResponse = Hotel;
export type UpdateChainIdNatsResponse = NatsResponse<UpdateChainIdResponse>;
//# sourceMappingURL=hotel.nats.d.ts.map