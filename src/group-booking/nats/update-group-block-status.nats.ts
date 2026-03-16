/**
 * Update Group Block Status NATS Contract
 *
 * NATS Pattern: group-block.update_status
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';
import { GroupBlockStatus } from '../enums/group-block.enum';

/**
 * NATS request to update group block status (state machine transitions)
 */
export interface UpdateGroupBlockStatusNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
  newStatus: GroupBlockStatus;
  reason?: string;
  userId: string;
  userName: string;
}

export type UpdateGroupBlockStatusNatsResponse = NatsResponse<any>;
