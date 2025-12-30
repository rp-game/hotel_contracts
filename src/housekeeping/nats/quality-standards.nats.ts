/**
 * Quality Standards NATS Contracts
 * Patterns: housekeeping.quality-standards.*
 */

import { NatsResponse } from '../../common';

// Note: Dates are strings because they're serialized over NATS
// Category in items is an enum string (InspectionItemCategory value)
export interface QualityStandardItem {
  name: string;
  description?: string;
  category: string;  // InspectionItemCategory enum value as string
  points: number;
  isCritical?: boolean;
  sortOrder: number;
  isActive?: boolean;
  instructions?: Record<string, any>;
  inspectorNotes?: string;
}

export interface QualityStandard {
  id: string;
  name: string;
  description?: string;
  roomType: string;  // RoomType enum value as string
  version: number;
  isActive: boolean;
  items: QualityStandardItem[];
  passingScore?: number;
  configuration?: Record<string, any>;
  effectiveDate?: string | Date;  // Accept both for compatibility during conversion
  expiryDate?: string | Date;     // Accept both for compatibility during conversion
  createdBy: string;
  tenantId: string;
  hotelId: string;
  createdAt: string | Date;  // Accept both for compatibility during conversion
  updatedAt: string | Date;  // Accept both for compatibility during conversion
}

// CREATE
export interface CreateQualityStandardNatsRequest {
  createData: {
    name: string;
    description?: string;
    roomType: string;  // RoomType enum value
    passingScore: number;
    items: QualityStandardItem[];
    createdBy: string;
    configuration?: Record<string, any>;
    effectiveDate?: string | Date;
    expiryDate?: string | Date;
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
    roomType?: string;  // RoomType enum value
    passingScore?: number;
    configuration?: Record<string, any>;
    effectiveDate?: string | Date;
    expiryDate?: string | Date;
    updatedBy?: string;
    items?: QualityStandardItem[];
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
