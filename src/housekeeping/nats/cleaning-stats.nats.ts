/**
 * Housekeeping Cleaning Task Stats NATS Contracts
 *
 * Pattern: housekeeping.cleaning-tasks.stats
 *
 * Handler: housekeeping-service (CleaningTaskNatsController)
 * Called by: api-gateway (HousekeepingService)
 */

import { NatsResponse } from '../../common';

/**
 * Cleaning Task Statistics Response
 */
export interface CleaningTaskStatsData {
  total: number;
  completed: number;
  inProgress: number;
  pending: number;
  overdue: number;
  completionRate: number;
  averageDuration: number;
}

/**
 * Get Cleaning Task Stats Request
 * Pattern: housekeeping.cleaning-tasks.stats
 */
export interface TaskStatsPayload {
  tenantId: string;
  hotelId: string;
}

export type CleaningTaskStatsNatsResponse = NatsResponse<CleaningTaskStatsData>;
