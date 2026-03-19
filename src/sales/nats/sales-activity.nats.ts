/**
 * Sales Activity NATS Contracts
 *
 * NATS Patterns:
 *   - sales-activity.create
 *   - sales-activity.find_all
 *   - sales-activity.find_one
 *   - sales-activity.update
 *   - sales-activity.delete
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';
import { SalesActivityType } from '../enums/sales.enum';

export interface CreateSalesActivityNatsRequest {
  tenantId: string;
  hotelId: string;
  salesPersonId: string;
  salesPersonName: string;
  activityType: SalesActivityType;
  subject: string;
  description?: string;
  activityDate: string;
  corporateAccountId?: string;
  travelAgentId?: string;
  contactName?: string;
  outcome?: string;
  followUpDate?: string;
  createdBy: string;
  createdByName?: string;
}

export interface FindSalesActivitiesNatsRequest {
  tenantId: string;
  hotelId?: string;
  salesPersonId?: string;
  activityType?: SalesActivityType;
  corporateAccountId?: string;
  travelAgentId?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface GetSalesActivityNatsRequest {
  tenantId: string;
  activityId: string;
}

export interface UpdateSalesActivityNatsRequest {
  tenantId: string;
  activityId: string;
  activityType?: SalesActivityType;
  subject?: string;
  description?: string;
  activityDate?: string;
  corporateAccountId?: string;
  travelAgentId?: string;
  contactName?: string;
  outcome?: string;
  followUpDate?: string;
}

export interface DeleteSalesActivityNatsRequest {
  tenantId: string;
  activityId: string;
}

export type CreateSalesActivityNatsResult = NatsResponse<any>;
export type FindSalesActivitiesNatsResult = NatsResponse<any>;
export type GetSalesActivityNatsResult = NatsResponse<any>;
export type UpdateSalesActivityNatsResult = NatsResponse<any>;
export type DeleteSalesActivityNatsResult = NatsResponse<any>;
