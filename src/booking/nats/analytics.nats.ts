/**
 * Booking Analytics NATS Contracts
 *
 * NATS Patterns:
 * - bookings.analytics.room_type_performance
 * - bookings.analytics.comprehensive_stats
 *
 * Handler: booking-service
 * Called by: crm-service, api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';

/**
 * NATS request for room type performance analytics
 *
 * @example
 * ```typescript
 * const request: RoomTypePerformanceRequest = {
 *   tenantId: 'tenant-123',
 *   hotelId: 'hotel-456',
 *   dateRange: {
 *     from: '2024-10-01T00:00:00Z',
 *     to: '2024-12-31T23:59:59Z'
 *   }
 * };
 * ```
 */
export interface RoomTypePerformanceRequest {
  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID (specific property)
   */
  hotelId: string;

  /**
   * Date range for analytics
   */
  dateRange: {
    /**
     * Start date (ISO format)
     */
    from: string;

    /**
     * End date (ISO format)
     */
    to: string;
  };

  /**
   * Optional room type filter
   */
  roomTypeId?: string;
}

/**
 * Room type performance item in response
 */
export interface RoomTypePerformanceItem {
  /**
   * Room type ID
   */
  roomTypeId: string;

  /**
   * Room type name
   */
  roomTypeName: string;

  /**
   * Number of bookings for this room type
   */
  bookingsCount: number;

  /**
   * Total revenue from this room type
   */
  totalRevenue: number;

  /**
   * Average nightly rate
   */
  avgNightlyRate: number;

  /**
   * Average stay duration in days
   */
  avgStayDuration: number;

  /**
   * Occupancy rate as percentage (0-100)
   */
  occupancyRate: number;
}

/**
 * NATS response for room type performance analytics
 *
 * @example
 * ```typescript
 * const response: NatsResponse<RoomTypePerformanceResponse> = {
 *   success: true,
 *   data: {
 *     data: [
 *       {
 *         roomTypeId: 'rt-123',
 *         roomTypeName: 'Standard Double',
 *         bookingsCount: 150,
 *         totalRevenue: 3000000,
 *         avgNightlyRate: 2000000,
 *         avgStayDuration: 2.5,
 *         occupancyRate: 85
 *       }
 *     ]
 *   }
 * };
 * ```
 */
export interface RoomTypePerformanceResponse {
  /**
   * Array of room type performance items
   */
  data: RoomTypePerformanceItem[];
}

/**
 * NATS request for comprehensive booking statistics
 *
 * @example
 * ```typescript
 * const request: ComprehensiveStatsRequest = {
 *   tenantId: 'tenant-123',
 *   hotelId: 'hotel-456',
 *   dateRange: {
 *     from: '2024-10-01T00:00:00Z',
 *     to: '2024-12-31T23:59:59Z'
 *   },
 *   groupBy: 'MONTH'
 * };
 * ```
 */
export interface ComprehensiveStatsRequest {
  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID (specific property)
   */
  hotelId: string;

  /**
   * Date range for analytics
   */
  dateRange: {
    /**
     * Start date (ISO format)
     */
    from: string;

    /**
     * End date (ISO format)
     */
    to: string;
  };

  /**
   * Grouping level for time-based aggregation
   * - DAY: Daily statistics
   * - WEEK: Weekly statistics
   * - MONTH: Monthly statistics
   */
  groupBy?: 'DAY' | 'WEEK' | 'MONTH';
}

/**
 * Monthly/weekly/daily statistics item
 */
export interface MonthlyStats {
  /**
   * Period identifier (format varies by groupBy: YYYY-MM for MONTH, YYYY-Www for WEEK, YYYY-MM-DD for DAY)
   */
  period: string;

  /**
   * Number of bookings in this period
   */
  bookingsCount: number;

  /**
   * Total revenue in this period
   */
  totalRevenue: number;

  /**
   * Unique customers count in this period
   */
  uniqueCustomers: number;

  /**
   * Average booking value in this period
   */
  avgBookingValue: number;
}

/**
 * NATS response for comprehensive booking statistics
 *
 * @example
 * ```typescript
 * const response: NatsResponse<ComprehensiveStatsResponse> = {
 *   success: true,
 *   data: {
 *     data: {
 *       byPeriod: [
 *         {
 *           period: '2024-10',
 *           bookingsCount: 200,
 *           totalRevenue: 5000000,
 *           uniqueCustomers: 150,
 *           avgBookingValue: 25000
 *         }
 *       ],
 *       totals: {
 *         bookings: 600,
 *         revenue: 15000000,
 *         customers: 450
 *       }
 *     }
 *   }
 * };
 * ```
 */
export interface ComprehensiveStatsResponse {
  /**
   * Statistics grouped by period
   */
  byPeriod: MonthlyStats[];

  /**
   * Aggregate totals for entire date range
   */
  totals: {
    /**
     * Total bookings in period
     */
    bookings: number;

    /**
     * Total revenue in period
     */
    revenue: number;

    /**
     * Total unique customers in period
     */
    customers: number;
  };
}


// Canonical aliases for NATS pattern naming consistency
export type GetComprehensiveStatsNatsRequest = ComprehensiveStatsRequest;
export type GetRoomTypePerformanceNatsRequest = RoomTypePerformanceRequest;

/**
 * NATS Pattern: bookings.analytics.room_type_stats
 */
export interface GetRoomTypeStatsNatsRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  dateRange: { from: string; to: string };
}

/**
 * NATS Pattern: bookings.analytics.top_performing_rooms
 */
export interface GetTopPerformingRoomsNatsRequest {
  hotelId: string;
  startDate: string;
  endDate: string;
  limit?: number;
}
