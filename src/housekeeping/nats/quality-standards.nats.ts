/**
 * Quality Standards NATS Contracts
 * Patterns: housekeeping.quality-standards.*
 */

import { NatsResponse } from '../../common';

export interface QualityStandardItem {
  name: string;
  description?: string;
  category: string;
  isRequired: boolean;
  points: number;
  order: number;
}

export interface QualityStandard {
  id: string;
  name: string;
  description?: string;
  roomType: string;
  version: number;
  isActive: boolean;
  items: QualityStandardItem[];
  tenantId: string;
  hotelId: string;
  createdAt: string;
  updatedAt: string;
}

// CREATE
export interface CreateQualityStandardNatsRequest {
  createData: {
    name: string;
    description?: string;
    roomType: string;
    version: number;
    isActive: boolean;
    items: QualityStandardItem[];
    createdBy: string;
  };
  tenantId: string;
  hotelId: string;
}
export type CreateQualityStandardNatsResponse = NatsResponse<QualityStandard>;

// FIND-ALL (paginated)
export interface FindAllQualityStandardsNatsRequest {
  tenantId: string;
  hotelId: string;
  filters?: {
    page?: number;
    limit?: number;
    roomType?: string;
    isActive?: boolean;
  };
}
export interface QualityStandardsListData {
  data: QualityStandard[];
  total: number;
  page: number;
  limit: number;
}
export type FindAllQualityStandardsNatsResponse = NatsResponse<QualityStandardsListData>;

// STATISTICS
export interface QualityStandardsStatisticsNatsRequest {
  tenantId: string;
  hotelId: string;
  filters?: any;
}
export interface QualityStandardsStatistics {
  totalStandards: number;
  activeStandards: number;
  inactiveStandards?: number;
  byRoomType?: Record<string, number>;
}
export type QualityStandardsStatisticsNatsResponse = NatsResponse<QualityStandardsStatistics>;

// FIND-BY-ROOM-TYPE
export interface FindByRoomTypeNatsRequest {
  roomType: string;
  tenantId: string;
  hotelId: string;
}
export type FindByRoomTypeNatsResponse = NatsResponse<QualityStandard>;

// FIND-ONE
export interface FindOneQualityStandardNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
}
export type FindOneQualityStandardNatsResponse = NatsResponse<QualityStandard>;

// UPDATE
export interface UpdateQualityStandardNatsRequest {
  id: string;
  updateData: {
    name?: string;
    description?: string;
    roomType?: string;
    isActive?: boolean;
    items?: QualityStandardItem[];
    updatedBy: string;
  };
  tenantId: string;
  hotelId: string;
}
export type UpdateQualityStandardNatsResponse = NatsResponse<QualityStandard>;

// DEACTIVATE
export interface DeactivateQualityStandardNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
}
export type DeactivateQualityStandardNatsResponse = NatsResponse<QualityStandard>;

// DELETE
export interface DeleteQualityStandardNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
}
export type DeleteQualityStandardNatsResponse = NatsResponse<{ message: string }>;
