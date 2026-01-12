/**
 * Segmentation NATS Contracts
 *
 * Patterns:
 * - crm.segmentation.stats
 * - crm.segmentation.segments.findAll
 * - crm.segmentation.segments.findOne
 * - crm.segmentation.segments.create
 * - crm.segmentation.segments.update
 * - crm.segmentation.segments.delete
 * - crm.segmentation.segments.recalculate
 * - crm.segmentation.segments.members
 * - crm.segmentation.analysis
 * - crm.segmentation.rfm.analysis
 * - crm.segmentation.predefined.create
 * - crm.segmentation.bulk-update
 *
 * Handler: crm-service (SegmentationController)
 * Called by: api-gateway (CrmController)
 */

import { NatsResponse } from '../../common';

/**
 * Segment Type Enum
 */
export enum SegmentType {
  RFM = 'RFM',
  BEHAVIORAL = 'BEHAVIORAL',
  DEMOGRAPHIC = 'DEMOGRAPHIC',
  GEOGRAPHIC = 'GEOGRAPHIC',
  VALUE_BASED = 'VALUE_BASED',
}

/**
 * Segment Status Enum
 */
export enum SegmentStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ARCHIVED = 'ARCHIVED',
}

/**
 * Create Segment Request
 * Pattern: crm.segmentation.segments.create
 */
export interface CreateSegmentNatsRequest {
  tenantId: string;
  userId: string;
  name: string;
  description?: string;
  type: string;
  status: SegmentStatus;
  criteria: Record<string, any>;
  autoUpdate?: boolean;
}

/**
 * Update Segment Request
 * Pattern: crm.segmentation.segments.update
 */
export interface UpdateSegmentNatsRequest {
  tenantId: string;
  segmentId: string;
  userId: string;
  updateDto: Partial<CreateSegmentNatsRequest>;
}

/**
 * Customer Segment Response
 */
export interface CustomerSegmentNatsResponse {
  id: string;
  tenantId: string;
  name: string;
  description?: string;
  type: string;
  status: SegmentStatus;
  criteria: Record<string, any>;
  autoUpdate?: boolean;
  memberCount: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  createdBy?: string;
  [key: string]: any;
}

/**
 * Segments Response
 */
export interface SegmentsNatsResponse {
  data: CustomerSegmentNatsResponse[];
  total: number;
  page: number;
  limit: number;
}

/**
 * Segmentation Stats Response
 */
export interface SegmentationStatsNatsResponse {
  totalSegments: number;
  activeSegments: number;
  totalSegmentedCustomers: number;
  averageSegmentSize: number;
  segmentPerformance: Array<{
    name: string;
    customerCount: number;
  }>;
}

/**
 * Stats Request
 * Pattern: crm.segmentation.stats
 */
export interface GetSegmentationStatsNatsRequest {
  tenantId: string;
}

/**
 * Stats Response
 */
export type GetSegmentationStatsNatsResponse = NatsResponse<SegmentationStatsNatsResponse>;

/**
 * Find All Segments Request
 * Pattern: crm.segmentation.segments.findAll
 */
export interface FindAllSegmentsNatsRequest {
  tenantId: string;
  type?: string;
  status?: SegmentStatus;
  page?: number;
  limit?: number;
}

/**
 * Find All Segments Response
 */
export type FindAllSegmentsNatsResponse = NatsResponse<SegmentsNatsResponse>;

/**
 * Find One Segment Request
 * Pattern: crm.segmentation.segments.findOne
 */
export interface FindSegmentByIdNatsRequest {
  tenantId: string;
  segmentId: string;
}

/**
 * Find One Segment Response
 */
export type FindSegmentByIdNatsResponse = NatsResponse<CustomerSegmentNatsResponse>;

/**
 * Create Segment Response
 */
export type CreateSegmentNatsResponse = NatsResponse<CustomerSegmentNatsResponse>;

/**
 * Update Segment Response
 */
export type UpdateSegmentNatsResponse = NatsResponse<CustomerSegmentNatsResponse>;

/**
 * Delete Segment Request
 * Pattern: crm.segmentation.segments.delete
 */
export interface DeleteSegmentNatsRequest {
  tenantId: string;
  segmentId: string;
}

/**
 * Delete Segment Response
 */
export type DeleteSegmentNatsResponse = NatsResponse<{ message: string }>;

/**
 * Recalculate Segment Request
 * Pattern: crm.segmentation.segments.recalculate
 */
export interface RecalculateSegmentNatsRequest {
  tenantId: string;
  segmentId: string;
}

/**
 * Recalculate Segment Response
 */
export type RecalculateSegmentNatsResponse = NatsResponse<{ message: string }>;

/**
 * Segment Membership Response
 */
export interface SegmentMembershipNatsResponse {
  id: string;
  segmentId: string;
  customerId: string;
  joinedAt: string | Date;
  lastEvaluatedAt?: string | Date;
}

/**
 * Segment Members Response
 */
export interface SegmentMembersNatsResponse {
  data: SegmentMembershipNatsResponse[];
  total: number;
  page?: number;
  limit?: number;
}

/**
 * Get Segment Members Request
 * Pattern: crm.segmentation.segments.members
 */
export interface GetSegmentMembersNatsRequest {
  tenantId: string;
  segmentId: string;
  page?: number;
  limit?: number;
}

/**
 * Get Segment Members Response
 */
export type GetSegmentMembersNatsResponse = NatsResponse<SegmentMembersNatsResponse>;

/**
 * Segment Analysis Response (exact copy from SegmentAnalysisDto in service)
 */
export interface SegmentAnalysisNatsResponse {
  segmentId: string;
  segmentName: string;
  customerCount: number;
  percentage: number;
  avgClv: number;
  totalRevenue: number;
  avgBookingFrequency: number;
  growthRate: number;
}

/**
 * Get Segment Analysis Request
 * Pattern: crm.segmentation.analysis
 */
export interface GetSegmentAnalysisNatsRequest {
  tenantId: string;
}

/**
 * Get Segment Analysis Response
 */
export type GetSegmentAnalysisNatsResponse = NatsResponse<SegmentAnalysisNatsResponse[]>;

/**
 * RFM Analysis Response
 */
export interface RfmAnalysisNatsResponse {
  rfm_grid: {
    champions: { count: number; percentage: number };
    loyal_customers: { count: number; percentage: number };
    potential_loyalists: { count: number; percentage: number };
    new_customers: { count: number; percentage: number };
    promising: { count: number; percentage: number };
    need_attention: { count: number; percentage: number };
    about_to_sleep: { count: number; percentage: number };
    at_risk: { count: number; percentage: number };
    cannot_lose_them: { count: number; percentage: number };
    hibernating: { count: number; percentage: number };
    lost: { count: number; percentage: number };
  };
  summary: {
    total_customers: number;
    high_value_customers: number;
    at_risk_customers: number;
    new_customers: number;
  };
  recommendations: string[];
}

/**
 * Get RFM Analysis Request
 * Pattern: crm.segmentation.rfm.analysis
 */
export interface GetRfmAnalysisNatsRequest {
  tenantId: string;
}

/**
 * Get RFM Analysis Response
 */
export type GetRfmAnalysisNatsResponse = NatsResponse<RfmAnalysisNatsResponse>;

/**
 * Create Predefined Segments Request
 * Pattern: crm.segmentation.predefined.create
 */
export interface CreatePredefinedSegmentsNatsRequest {
  tenantId: string;
}

/**
 * Create Predefined Segments Response
 */
export type CreatePredefinedSegmentsNatsResponse = NatsResponse<CustomerSegmentNatsResponse[]>;

/**
 * Bulk Update Segments Request
 * Pattern: crm.segmentation.bulk-update
 */
export interface BulkUpdateSegmentsNatsRequest {
  tenantId: string;
}

/**
 * Bulk Update Segments Response
 */
export type BulkUpdateSegmentsNatsResponse = NatsResponse<{ message: string }>;
