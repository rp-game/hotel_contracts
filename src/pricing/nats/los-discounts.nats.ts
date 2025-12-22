/**
 * LOS Discounts NATS Contracts (5 patterns)
 */

import { NatsResponse } from '../../common/nats-response.interface';
import { LosDiscount } from '../types';

export interface FindAllLosDiscountsRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId?: string;
}

export interface FindAllLosDiscountsResponse {
  data: LosDiscount[];
}

export type FindAllLosDiscountsNatsResponse = NatsResponse<FindAllLosDiscountsResponse>;

export interface FindLosDiscountByIdRequest {
  id: string;
  tenantId: string;
}

export interface FindLosDiscountByIdResponse {
  data: LosDiscount;
}

export type FindLosDiscountByIdNatsResponse = NatsResponse<FindLosDiscountByIdResponse>;

export interface CreateLosDiscountRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId?: string;
  minNights: number;
  maxNights?: number;
  discountType: 'PERCENTAGE' | 'FIXED';
  discountValue: number;
  description?: string;
  currency: string;
  validFrom?: string;
  validTo?: string;
  isActive?: boolean;
}

export interface CreateLosDiscountResponse {
  data: LosDiscount;
  message: string;
}

export type CreateLosDiscountNatsResponse = NatsResponse<CreateLosDiscountResponse>;

export interface UpdateLosDiscountRequest {
  id: string;
  tenantId: string;
  minNights?: number;
  maxNights?: number;
  discountType?: 'PERCENTAGE' | 'FIXED';
  discountValue?: number;
  description?: string;
  validFrom?: string;
  validTo?: string;
  isActive?: boolean;
}

export interface UpdateLosDiscountResponse {
  data: LosDiscount;
  message: string;
}

export type UpdateLosDiscountNatsResponse = NatsResponse<UpdateLosDiscountResponse>;

export interface DeleteLosDiscountRequest {
  id: string;
  tenantId: string;
}

export interface DeleteLosDiscountResponse {
  message: string;
}

export type DeleteLosDiscountNatsResponse = NatsResponse<DeleteLosDiscountResponse>;
