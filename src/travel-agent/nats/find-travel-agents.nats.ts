/**
 * Find Travel Agents NATS Contract
 *
 * NATS Pattern: travel-agent.find_all
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';

export interface FindTravelAgentsNatsRequest {
  tenantId: string;
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

export type FindTravelAgentsNatsResult = NatsResponse<any>;
