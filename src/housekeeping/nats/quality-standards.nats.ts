/**
 * Quality Standards NATS Contracts
 * Patterns: housekeeping.quality-standards.*
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

// Note: Dates are strings because they're serialized over NATS
// Category in items is an enum string (InspectionItemCategory value)
export class QualityStandardItem {
  @ApiProperty({ description: 'Item name' })
  name: string;

  @ApiPropertyOptional({ description: 'Item description' })
  description?: string;

  @ApiProperty({ description: 'InspectionItemCategory enum value as string' })
  category: string;

  @ApiProperty({ description: 'Points for this item' })
  points: number;

  @ApiPropertyOptional({ description: 'Is this a critical item' })
  isCritical?: boolean;

  @ApiProperty({ description: 'Sort order' })
  sortOrder: number;

  @ApiPropertyOptional({ description: 'Is item active' })
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Additional instructions' })
  instructions?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Inspector notes' })
  inspectorNotes?: string;
}

export class QualityStandard {
  @ApiProperty({ description: 'Quality standard ID' })
  id: string;

  @ApiProperty({ description: 'Standard name' })
  name: string;

  @ApiPropertyOptional({ description: 'Standard description' })
  description?: string;

  @ApiProperty({ description: 'RoomType enum value as string' })
  roomType: string;

  @ApiProperty({ description: 'Version number' })
  version: number;

  @ApiProperty({ description: 'Is standard active' })
  isActive: boolean;

  @ApiProperty({ description: 'Quality standard items', type: [QualityStandardItem] })
  items: QualityStandardItem[];

  @ApiPropertyOptional({ description: 'Minimum passing score' })
  passingScore?: number;

  @ApiPropertyOptional({ description: 'Additional configuration' })
  configuration?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Effective date (string or Date for compatibility)', type: String })
  effectiveDate?: string | Date;

  @ApiPropertyOptional({ description: 'Expiry date (string or Date for compatibility)', type: String })
  expiryDate?: string | Date;

  @ApiProperty({ description: 'User ID who created this standard' })
  createdBy: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Creation timestamp (string or Date for compatibility)', type: String })
  createdAt: string | Date;

  @ApiProperty({ description: 'Last update timestamp (string or Date for compatibility)', type: String })
  updatedAt: string | Date;
}

// CREATE
export interface CreateQualityStandardNatsRequest {
  createData: {
    name: string;
    description?: string;
    roomType: string;  // RoomType enum value
    passingScore: number;
    createdBy: string;  // User ID creating this standard - REQUIRED
    items: QualityStandardItem[];
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

export class QualityStandardsStatistics {
  @ApiProperty({ description: 'Total number of quality standards' })
  totalStandards: number;

  @ApiProperty({ description: 'Number of active quality standards' })
  activeStandards: number;

  @ApiPropertyOptional({ description: 'Number of inactive quality standards' })
  inactiveStandards?: number;

  @ApiProperty({ description: 'Average quality score across all standards' })
  averageScore: number;

  @ApiPropertyOptional({ description: 'Standards count by room type' })
  standardsByRoomType?: Record<string, number>;

  @ApiPropertyOptional({ description: 'Standards count by room type (alternative field)' })
  byRoomType?: Record<string, number>;

  @ApiPropertyOptional({ description: 'Average number of items per standard' })
  averageItemsPerStandard?: number;
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
export type DeleteQualityStandardNatsResponse = NatsResponse<{ success: boolean; message: string }>;
