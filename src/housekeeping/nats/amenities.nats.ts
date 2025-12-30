/**
 * Amenities NATS Contracts
 * Patterns: housekeeping.amenities.*
 */

import { NatsResponse } from '../../common';

export interface Amenity {
  id: string;
  name: string;
  description?: string;
  category: string;
  quantity: number;
  unit: string;
  costPerUnit?: number;
  tenantId: string;
  hotelId: string;
  createdAt: string;
  updatedAt: string;
}

// CREATE
export interface CreateAmenityNatsRequest {
  name: string;
  description?: string;
  category: string;
  quantity: number;
  unit: string;
  costPerUnit?: number;
  tenantId: string;
  hotelId: string;
}
export type CreateAmenityNatsResponse = NatsResponse<Amenity>;

// FIND-ALL (paginated)
export interface FindAllAmenitiesNatsRequest {
  tenantId: string;
  hotelId: string;
  category?: string;
  page?: number;
  limit?: number;
}
export interface AmenitiesListData {
  data: Amenity[];
  total: number;
  page: number;
  limit: number;
}
export type FindAllAmenitiesNatsResponse = NatsResponse<AmenitiesListData>;

// FIND-ONE
export interface FindOneAmenityNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
}
export type FindOneAmenityNatsResponse = NatsResponse<Amenity>;

// UPDATE
export interface UpdateAmenityNatsRequest {
  id: string;
  updateAmenityDto: {
    name?: string;
    description?: string;
    category?: string;
    quantity?: number;
    unit?: string;
    costPerUnit?: number;
  };
  tenantId: string;
  hotelId: string;
}
export type UpdateAmenityNatsResponse = NatsResponse<Amenity>;

// REMOVE
export interface RemoveAmenityNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
}
export type RemoveAmenityNatsResponse = NatsResponse<null>;
