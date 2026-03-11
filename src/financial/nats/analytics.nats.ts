/**
 * Financial Analytics NATS Contracts
 *
 * NATS Pattern: financial.analytics.service_revenue
 * Handler: financial-service
 * Called by: inventory-service (room-timeline analytics)
 */

export interface GetServiceRevenueNatsRequest {
  hotelId: string;
  startDate: string;
  endDate: string;
}

export interface ServiceRevenueResponse {
  /** Revenue from SERVICE + FEE category service bookings */
  serviceRevenue: number;
  /** Revenue from FOOD_BEVERAGE category service bookings */
  fbRevenue: number;
  /** Revenue from remaining categories */
  otherRevenue: number;
}
