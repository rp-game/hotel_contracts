/**
 * Task Photos NATS Contracts (Unified for NATS + REST)
 * Patterns: housekeeping.tasks.photos.*
 *
 * @unified These contracts are used by:
 * - NATS message handlers (housekeeping-service)
 * - API Gateway REST endpoints
 * - Frontend TypeScript client
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * Photo Category Enum
 */
export enum PhotoCategory {
  BEFORE = 'BEFORE',
  DURING = 'DURING',
  AFTER = 'AFTER',
  ISSUE = 'ISSUE',
  COMPLETED = 'COMPLETED',
}

/**
 * Photo Review Status Enum
 */
export enum PhotoReviewStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

/**
 * Task Photo Response
 */
export class TaskPhotoNatsResponse {
  @ApiProperty({ description: 'Photo ID' })
  id: string;

  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Photo URL' })
  url: string;

  @ApiPropertyOptional({ description: 'Photo description' })
  description?: string;

  @ApiProperty({ description: 'Photo category', enum: PhotoCategory })
  category: PhotoCategory;

  @ApiProperty({ description: 'Uploaded by user ID' })
  uploadedBy: string;

  @ApiProperty({ description: 'Upload timestamp (ISO datetime)' })
  uploadedAt: string;

  @ApiPropertyOptional({ description: 'Review status', enum: PhotoReviewStatus })
  reviewStatus?: PhotoReviewStatus;

  @ApiPropertyOptional({ description: 'Reviewed by user ID' })
  reviewedBy?: string;

  @ApiPropertyOptional({ description: 'Review notes' })
  reviewNotes?: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

/**
 * Photo Data for Upload
 */
export class PhotoDataDto {
  @ApiProperty({ description: 'Photo file (base64 or file object)' })
  file: any;

  @ApiProperty({
    description: 'Photo category',
    enum: PhotoCategory,
    example: PhotoCategory.AFTER
  })
  type: PhotoCategory;

  @ApiPropertyOptional({ description: 'Photo description' })
  description?: string;
}

/**
 * Upload Task Photos Request
 * @unified Used by both NATS requests and REST API body
 */
export class UploadTaskPhotosNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({
    description: 'Array of photo data',
    type: [PhotoDataDto]
  })
  photos: PhotoDataDto[];

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

/**
 * Upload Response Message
 */
export class UploadPhotosMessageNatsResponse {
  @ApiProperty({ description: 'Success message' })
  message: string;
}

export type UploadTaskPhotosNatsResponse = NatsResponse<UploadPhotosMessageNatsResponse>;

/**
 * Get Task Photos Request
 */
export class GetTaskPhotosNatsRequest {
  @ApiProperty({ description: 'Task ID' })
  taskId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Filter by category' })
  category?: string;
}

export type GetTaskPhotosNatsResponse = NatsResponse<TaskPhotoNatsResponse[]>;

/**
 * Get Photo By ID Request
 */
export class GetPhotoByIdNatsRequest {
  @ApiProperty({ description: 'Photo ID' })
  photoId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

export type GetPhotoByIdNatsResponse = NatsResponse<TaskPhotoNatsResponse>;

/**
 * Update Photo Data
 */
export class UpdatePhotoDataDto {
  @ApiPropertyOptional({ description: 'Photo description' })
  description?: string;

  @ApiPropertyOptional({ description: 'Photo category', enum: PhotoCategory })
  category?: PhotoCategory;
}

/**
 * Update Photo Request
 */
export class UpdatePhotoNatsRequest {
  @ApiProperty({ description: 'Photo ID' })
  photoId: string;

  @ApiProperty({ description: 'Update data', type: UpdatePhotoDataDto })
  updateData: UpdatePhotoDataDto;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

export type UpdatePhotoNatsResponse = NatsResponse<TaskPhotoNatsResponse>;

/**
 * Review Photo Data
 */
export class ReviewPhotoDataDto {
  @ApiProperty({ description: 'Approval status' })
  approved: boolean;

  @ApiPropertyOptional({ description: 'Review notes' })
  reviewNotes?: string;

  @ApiProperty({ description: 'Reviewer user ID' })
  reviewedBy: string;
}

/**
 * Review Photo Request
 */
export class ReviewPhotoNatsRequest {
  @ApiProperty({ description: 'Photo ID' })
  photoId: string;

  @ApiProperty({ description: 'Review data', type: ReviewPhotoDataDto })
  reviewData: ReviewPhotoDataDto;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

export type ReviewPhotoNatsResponse = NatsResponse<TaskPhotoNatsResponse>;

/**
 * Delete Photo Request
 */
export class DeletePhotoNatsRequest {
  @ApiProperty({ description: 'Photo ID' })
  photoId: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;
}

/**
 * Delete Response Message
 */
export class DeletePhotoMessageNatsResponse {
  @ApiProperty({ description: 'Success message' })
  message: string;
}

export type DeletePhotoNatsResponse = NatsResponse<DeletePhotoMessageNatsResponse>;

/**
 * Get Photo Statistics Request
 */
export class GetPhotoStatisticsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Start date filter (ISO format)' })
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date filter (ISO format)' })
  endDate?: string;
}

/**
 * Photo Statistics Response
 */
export class PhotoStatisticsNatsResponse {
  @ApiProperty({ description: 'Total number of photos' })
  totalPhotos: number;

  @ApiPropertyOptional({ description: 'Photos by category', type: Object })
  byCategory?: Record<string, number>;

  @ApiPropertyOptional({ description: 'Photos by review status', type: Object })
  byReviewStatus?: Record<string, number>;

  @ApiPropertyOptional({ description: 'Average photos per task' })
  averagePhotosPerTask?: number;

  @ApiPropertyOptional({ description: 'Recent uploads count' })
  recentUploads?: number;
}

export type GetPhotoStatisticsNatsResponse = NatsResponse<PhotoStatisticsNatsResponse>;
