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
export declare enum SegmentType {
    RFM = "RFM",
    BEHAVIORAL = "BEHAVIORAL",
    DEMOGRAPHIC = "DEMOGRAPHIC",
    GEOGRAPHIC = "GEOGRAPHIC",
    VALUE_BASED = "VALUE_BASED",
    LIFECYCLE = "LIFECYCLE",
    CUSTOM = "CUSTOM"
}
/**
 * Segment Status Enum
 */
export declare enum SegmentStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    ARCHIVED = "ARCHIVED"
}
/**
 * Create Segment Request
 * Unified for both NATS messages and REST API requests
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.segments.create
 */
export declare class CreateSegmentNatsRequest {
    tenantId: string;
    userId: string;
    name: string;
    description?: string;
    type: string;
    status: SegmentStatus;
    criteria: Record<string, any>;
    autoUpdate?: boolean;
    [key: string]: any;
}
/**
 * Update Segment Request
 * Unified for both NATS messages and REST API requests
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.segments.update
 *
 * Note: All fields are optional except tenantId, segmentId, userId
 */
export declare class UpdateSegmentNatsRequest {
    tenantId: string;
    segmentId: string;
    userId: string;
    name?: string;
    description?: string;
    type?: string;
    status?: SegmentStatus;
    criteria?: Record<string, any>;
    autoUpdate?: boolean;
    [key: string]: any;
}
/**
 * Customer Segment Response
 */
export declare class CustomerSegmentNatsResponse {
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
 * Segments Response (Paginated list)
 * Unified for both NATS messages and REST API responses
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.segments.findAll
 */
export declare class SegmentsNatsResponse {
    data: CustomerSegmentNatsResponse[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Segment Performance Item
 * Used within SegmentationStatsDto
 */
export declare class SegmentPerformanceItemDto {
    name: string;
    customerCount: number;
}
/**
 * Segmentation Stats DTO
 * Unified for both NATS messages and REST API responses
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.stats
 */
export declare class SegmentationStatsDto {
    totalSegments: number;
    activeSegments: number;
    totalSegmentedCustomers: number;
    averageSegmentSize: number;
    segmentPerformance: SegmentPerformanceItemDto[];
}
/**
 * @deprecated Use SegmentationStatsDto directly
 */
export type SegmentationStatsNatsResponse = SegmentationStatsDto;
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
export type GetSegmentationStatsNatsResponse = NatsResponse<SegmentationStatsDto>;
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
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.segments.findOne
 */
export declare class FindSegmentByIdNatsRequest {
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
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.segments.delete
 */
export declare class DeleteSegmentNatsRequest {
    tenantId: string;
    segmentId: string;
}
/**
 * Delete Segment Response
 */
export type DeleteSegmentNatsResponse = NatsResponse<MessageResponseDto>;
/**
 * Recalculate Segment Request
 * Unified for both NATS messages and REST API requests
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.segments.recalculate
 */
export declare class RecalculateSegmentNatsRequest {
    tenantId: string;
    segmentId: string;
}
/**
 * Message Response DTO
 * Generic message response used by various operations
 */
export declare class MessageResponseDto {
    message: string;
}
/**
 * Recalculate Segment Response
 */
export type RecalculateSegmentNatsResponse = NatsResponse<MessageResponseDto>;
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
 * Segment Members Response (Paginated list of customers in a segment)
 * Unified for both NATS messages and REST API responses
 * Used by: NATS handler (crm-service), API Gateway REST endpoint
 * Pattern: crm.segmentation.segments.members
 *
 * Note: Returns full customer objects, not just membership metadata
 */
export declare class SegmentMembersNatsResponse {
    data: any[];
    total: number;
    page: number;
    limit: number;
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
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.analysis
 */
export declare class GetSegmentAnalysisNatsRequest {
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
        champions: {
            count: number;
            percentage: number;
        };
        loyal_customers: {
            count: number;
            percentage: number;
        };
        potential_loyalists: {
            count: number;
            percentage: number;
        };
        new_customers: {
            count: number;
            percentage: number;
        };
        promising: {
            count: number;
            percentage: number;
        };
        need_attention: {
            count: number;
            percentage: number;
        };
        about_to_sleep: {
            count: number;
            percentage: number;
        };
        at_risk: {
            count: number;
            percentage: number;
        };
        cannot_lose_them: {
            count: number;
            percentage: number;
        };
        hibernating: {
            count: number;
            percentage: number;
        };
        lost: {
            count: number;
            percentage: number;
        };
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
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.rfm.analysis
 */
export declare class GetRfmAnalysisNatsRequest {
    tenantId: string;
}
/**
 * Get RFM Analysis Response
 */
export type GetRfmAnalysisNatsResponse = NatsResponse<RfmAnalysisNatsResponse>;
/**
 * Create Predefined Segments Request
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.predefined.create
 */
export declare class CreatePredefinedSegmentsNatsRequest {
    tenantId: string;
}
/**
 * Create Predefined Segments Response
 */
export type CreatePredefinedSegmentsNatsResponse = NatsResponse<CustomerSegmentNatsResponse[]>;
/**
 * Bulk Update Segments Request
 * Unified for both NATS messages and REST API requests
 * Pattern: crm.segmentation.bulk-update
 */
export declare class BulkUpdateSegmentsNatsRequest {
    tenantId: string;
}
/**
 * Bulk Update Segments Response
 */
export type BulkUpdateSegmentsNatsResponse = NatsResponse<MessageResponseDto>;
//# sourceMappingURL=segmentation.nats.d.ts.map