/**
 * Image Management NATS Contracts
 *
 * NATS Pattern: cms.image.*
 * Handler: cms-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { MultilingualContent } from './common';
/**
 * Image resolution information (for different sizes)
 */
export interface ImageResolution {
    width: number;
    height: number;
    path: string;
    size: number;
    url: string;
}
/**
 * Image domain model
 */
export interface Image {
    id: string;
    organizerId: string;
    filename: string;
    mimeType: string;
    size: number;
    width: number;
    height: number;
    resolutions: Record<string, ImageResolution>;
    s3Bucket: string;
    s3Path: string;
    altText: MultilingualContent;
    collectionId?: string;
    createdAt: string;
    updatedAt: string;
    originalFilename: string;
    createdBy?: string;
    urls: Record<string, string>;
}
/**
 * NATS request: List images
 * Pattern: cms.image.list
 */
export interface ListImagesRequest {
    organizerId: string;
    collectionId?: string;
    limit: number;
    offset: number;
}
export type ListImagesResponse = NatsResponse<{
    images: Image[];
    total: number;
    count: number;
}>;
/**
 * NATS request: Get image by ID
 * Pattern: cms.image.get
 */
export interface GetImageRequest {
    id: string;
}
export type GetImageResponse = NatsResponse<Image>;
/**
 * NATS request: Upload image (binary data)
 * Pattern: cms.image.upload
 */
export interface UploadImageRequest {
    organizerId: string;
    filename: string;
    imageData: any;
    altText: MultilingualContent;
    collectionId?: string;
}
export type UploadImageResponse = NatsResponse<Image>;
/**
 * NATS request: Create image (metadata only, S3 paths provided)
 * Pattern: cms.image.create
 */
export interface CreateImageRequest {
    organizerId: string;
    filename: string;
    mimeType: string;
    size: number;
    width: number;
    height: number;
    resolutions: Record<string, ImageResolution>;
    s3Bucket: string;
    s3Path: string;
    altText: MultilingualContent;
    collectionId?: string;
}
export type CreateImageResponse = NatsResponse<Image>;
/**
 * NATS request: Update image
 * Pattern: cms.image.update
 */
export interface UpdateImageRequest {
    id: string;
    altText?: MultilingualContent;
    collectionId?: string;
}
export type UpdateImageResponse = NatsResponse<Image>;
/**
 * NATS request: Delete image
 * Pattern: cms.image.delete
 */
export interface DeleteImageRequest {
    id: string;
}
export type DeleteImageResponse = NatsResponse<{
    success: boolean;
}>;
/**
 * Image NATS Contract - Groups all image operations
 */
export interface ImageContract {
    'cms.image.list': {
        input: ListImagesRequest;
        output: ListImagesResponse;
    };
    'cms.image.get': {
        input: GetImageRequest;
        output: GetImageResponse;
    };
    'cms.image.upload': {
        input: UploadImageRequest;
        output: UploadImageResponse;
    };
    'cms.image.create': {
        input: CreateImageRequest;
        output: CreateImageResponse;
    };
    'cms.image.update': {
        input: UpdateImageRequest;
        output: UpdateImageResponse;
    };
    'cms.image.delete': {
        input: DeleteImageRequest;
        output: DeleteImageResponse;
    };
}
//# sourceMappingURL=image.nats.d.ts.map