/**
 * Task Photos NATS Contracts (Unified for NATS + REST)
 * Patterns: housekeeping.tasks.photos.*
 *
 * @unified These contracts are used by:
 * - NATS message handlers (housekeeping-service)
 * - API Gateway REST endpoints
 * - Frontend TypeScript client
 */
import { NatsResponse } from '../../common';
/**
 * Photo Category Enum
 */
export declare enum PhotoCategory {
    BEFORE = "BEFORE",
    DURING = "DURING",
    AFTER = "AFTER",
    ISSUE = "ISSUE",
    COMPLETED = "COMPLETED"
}
/**
 * Photo Review Status Enum
 */
export declare enum PhotoReviewStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}
/**
 * Task Photo Response
 */
export declare class TaskPhotoNatsResponse {
    id: string;
    taskId: string;
    url: string;
    description?: string;
    category: PhotoCategory;
    uploadedBy: string;
    uploadedAt: string;
    reviewStatus?: PhotoReviewStatus;
    reviewedBy?: string;
    reviewNotes?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Upload Task Photos Request
 * @unified Used by both NATS requests and REST API body
 */
export declare class UploadTaskPhotosNatsRequest {
    taskId: string;
    photos: object[];
    tenantId: string;
    hotelId: string;
}
/**
 * Upload Response Message
 */
export declare class UploadPhotosMessageNatsResponse {
    message: string;
}
export type UploadTaskPhotosNatsResponse = NatsResponse<UploadPhotosMessageNatsResponse>;
/**
 * Get Task Photos Request
 */
export declare class GetTaskPhotosNatsRequest {
    taskId: string;
    tenantId: string;
    hotelId: string;
    category?: string;
}
export type GetTaskPhotosNatsResponse = NatsResponse<TaskPhotoNatsResponse[]>;
/**
 * Get Photo By ID Request
 */
export declare class GetPhotoByIdNatsRequest {
    photoId: string;
    tenantId: string;
    hotelId: string;
}
export type GetPhotoByIdNatsResponse = NatsResponse<TaskPhotoNatsResponse>;
/**
 * Update Photo Data
 */
export declare class UpdatePhotoDataDto {
    description?: string;
    category?: PhotoCategory;
}
/**
 * Update Photo Request
 */
export declare class UpdatePhotoNatsRequest {
    photoId: string;
    updateData: UpdatePhotoDataDto;
    tenantId: string;
    hotelId: string;
}
export type UpdatePhotoNatsResponse = NatsResponse<TaskPhotoNatsResponse>;
/**
 * Review Photo Data
 */
export declare class ReviewPhotoDataDto {
    approved: boolean;
    reviewNotes?: string;
    reviewedBy: string;
}
/**
 * Review Photo Request
 */
export declare class ReviewPhotoNatsRequest {
    photoId: string;
    reviewData: ReviewPhotoDataDto;
    tenantId: string;
    hotelId: string;
}
export type ReviewPhotoNatsResponse = NatsResponse<TaskPhotoNatsResponse>;
/**
 * Delete Photo Request
 */
export declare class DeletePhotoNatsRequest {
    photoId: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Delete Response Message
 */
export declare class DeletePhotoMessageNatsResponse {
    message: string;
}
export type DeletePhotoNatsResponse = NatsResponse<DeletePhotoMessageNatsResponse>;
/**
 * Get Photo Statistics Request
 */
export declare class GetPhotoStatisticsNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate?: string;
    endDate?: string;
}
/**
 * Photo Statistics Response
 */
export declare class PhotoStatisticsNatsResponse {
    totalPhotos: number;
    byCategory?: Record<string, number>;
    byReviewStatus?: Record<string, number>;
    averagePhotosPerTask?: number;
    recentUploads?: number;
}
export type GetPhotoStatisticsNatsResponse = NatsResponse<PhotoStatisticsNatsResponse>;
//# sourceMappingURL=task-photos.nats.d.ts.map