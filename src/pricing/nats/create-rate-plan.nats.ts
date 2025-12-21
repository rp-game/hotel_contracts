/**
 * Create Rate Plan NATS Contract
 *
 * NATS Pattern: pricing.rate-plan.create
 * Handler: pricing-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';
import { RatePlanType, RatePlanStatus } from '../enums';
import { RatePlan } from '../types';

/**
 * NATS request to create a rate plan
 */
export interface CreateRatePlanRequest {
  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId: string;

  /**
   * Hotel ID
   */
  hotelId: string;

  /**
   * Rate plan name
   */
  name: string;

  /**
   * Description (optional)
   */
  description?: string;

  /**
   * Type of rate plan (NIGHTLY, HOURLY, DATE_RANGE, LOS, PACKAGE)
   */
  type: RatePlanType;

  /**
   * Base price for this rate plan
   */
  basePrice: number;

  /**
   * Currency code (e.g., VND, USD)
   */
  currency: string;

  /**
   * Room type ID this rate plan applies to
   */
  roomTypeId: string;

  /**
   * Valid from date (YYYY-MM-DD)
   */
  validFrom: string;

  /**
   * Valid to date (YYYY-MM-DD)
   */
  validTo: string;

  /**
   * Initial status (DRAFT or ACTIVE)
   */
  status?: RatePlanStatus;

  /**
   * Creator user ID
   */
  createdBy: string;
}

/**
 * NATS response after creating rate plan
 */
export interface CreateRatePlanResponse {
  /**
   * Created rate plan ID
   */
  id: string;

  /**
   * Full rate plan data
   */
  ratePlan: RatePlan;
}

/**
 * Type-safe NATS response wrapper
 */
export type CreateRatePlanNatsResponse = NatsResponse<CreateRatePlanResponse>;
