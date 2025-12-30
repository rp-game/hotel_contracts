/**
 * Task Photos NATS Contracts
 * Patterns: housekeeping.tasks.photos.*
 */
import { NatsResponse } from '../../common';
export interface TaskPhoto {
    id: string;
    taskId: string;
    url: string;
    description?: string;
    category: 'BEFORE' | 'DURING' | 'AFTER' | 'ISSUE' | 'COMPLETED';
    uploadedBy: string;
    uploadedAt: string;
    reviewStatus?: 'PENDING' | 'APPROVED' | 'REJECTED';
    reviewedBy?: string;
    reviewNotes?: string;
    tenantId: string;
    hotelId: string;
}
export interface UploadTaskPhotosNatsRequest {
    taskId: string;
    photos: object[];
    tenantId: string;
    hotelId: string;
}
export type UploadTaskPhotosNatsResponse = NatsResponse<{
    message: string;
}>;
export interface GetTaskPhotosNatsRequest {
    taskId: string;
    tenantId: string;
    hotelId: string;
    category?: string;
}
export type GetTaskPhotosNatsResponse = NatsResponse<TaskPhoto[]>;
export interface GetPhotoByIdNatsRequest {
    photoId: string;
    tenantId: string;
    hotelId: string;
}
export type GetPhotoByIdNatsResponse = NatsResponse<TaskPhoto>;
export interface UpdatePhotoNatsRequest {
    photoId: string;
    updateData: {
        description?: string;
        category?: 'BEFORE' | 'DURING' | 'AFTER' | 'ISSUE' | 'COMPLETED';
    };
    tenantId: string;
    hotelId: string;
}
export type UpdatePhotoNatsResponse = NatsResponse<TaskPhoto>;
export interface ReviewPhotoNatsRequest {
    photoId: string;
    reviewData: {
        approved: boolean;
        reviewNotes?: string;
        reviewedBy: string;
    };
    tenantId: string;
    hotelId: string;
}
export type ReviewPhotoNatsResponse = NatsResponse<TaskPhoto>;
export interface DeletePhotoNatsRequest {
    photoId: string;
    tenantId: string;
    hotelId: string;
}
export type DeletePhotoNatsResponse = NatsResponse<{
    message: string;
}>;
export interface GetPhotoStatisticsNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate?: string;
    endDate?: string;
}
export interface PhotoStatistics {
    totalPhotos: number;
    byCategory?: Record<string, number>;
    byReviewStatus?: Record<string, number>;
    averagePhotosPerTask?: number;
    recentUploads?: number;
}
export type GetPhotoStatisticsNatsResponse = NatsResponse<PhotoStatistics>;
//# sourceMappingURL=task-photos.nats.d.ts.map