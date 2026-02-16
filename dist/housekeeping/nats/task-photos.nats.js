"use strict";
/**
 * Task Photos NATS Contracts (Unified for NATS + REST)
 * Patterns: housekeeping.tasks.photos.*
 *
 * @unified These contracts are used by:
 * - NATS message handlers (housekeeping-service)
 * - API Gateway REST endpoints
 * - Frontend TypeScript client
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoStatisticsNatsResponse = exports.GetPhotoStatisticsNatsRequest = exports.DeletePhotoMessageNatsResponse = exports.DeletePhotoNatsRequest = exports.ReviewPhotoNatsRequest = exports.ReviewPhotoDataDto = exports.UpdatePhotoNatsRequest = exports.UpdatePhotoDataDto = exports.GetPhotoByIdNatsRequest = exports.GetTaskPhotosNatsRequest = exports.UploadPhotosMessageNatsResponse = exports.UploadTaskPhotosNatsRequest = exports.PhotoDataDto = exports.TaskPhotoNatsResponse = exports.PhotoReviewStatus = exports.PhotoCategory = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Photo Category Enum
 */
var PhotoCategory;
(function (PhotoCategory) {
    PhotoCategory["BEFORE"] = "BEFORE";
    PhotoCategory["DURING"] = "DURING";
    PhotoCategory["AFTER"] = "AFTER";
    PhotoCategory["ISSUE"] = "ISSUE";
    PhotoCategory["COMPLETED"] = "COMPLETED";
})(PhotoCategory || (exports.PhotoCategory = PhotoCategory = {}));
/**
 * Photo Review Status Enum
 */
var PhotoReviewStatus;
(function (PhotoReviewStatus) {
    PhotoReviewStatus["PENDING"] = "PENDING";
    PhotoReviewStatus["APPROVED"] = "APPROVED";
    PhotoReviewStatus["REJECTED"] = "REJECTED";
})(PhotoReviewStatus || (exports.PhotoReviewStatus = PhotoReviewStatus = {}));
/**
 * Task Photo Response
 */
class TaskPhotoNatsResponse {
    id;
    taskId;
    url;
    description;
    category;
    uploadedBy;
    uploadedAt;
    reviewStatus;
    reviewedBy;
    reviewNotes;
    tenantId;
    hotelId;
}
exports.TaskPhotoNatsResponse = TaskPhotoNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Photo ID' }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Photo URL' }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photo description' }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Photo category', enum: PhotoCategory }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Uploaded by user ID' }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "uploadedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Upload timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "uploadedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Review status', enum: PhotoReviewStatus }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "reviewStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reviewed by user ID' }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "reviewedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Review notes' }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "reviewNotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], TaskPhotoNatsResponse.prototype, "hotelId", void 0);
/**
 * Photo Data for Upload
 */
class PhotoDataDto {
    file;
    type;
    description;
}
exports.PhotoDataDto = PhotoDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Photo file (base64 or file object)' }),
    __metadata("design:type", Object)
], PhotoDataDto.prototype, "file", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Photo category',
        enum: PhotoCategory,
        example: PhotoCategory.AFTER
    }),
    __metadata("design:type", String)
], PhotoDataDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photo description' }),
    __metadata("design:type", String)
], PhotoDataDto.prototype, "description", void 0);
/**
 * Upload Task Photos Request
 * @unified Used by both NATS requests and REST API body
 */
class UploadTaskPhotosNatsRequest {
    taskId;
    photos;
    tenantId;
    hotelId;
}
exports.UploadTaskPhotosNatsRequest = UploadTaskPhotosNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], UploadTaskPhotosNatsRequest.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of photo data',
        type: [PhotoDataDto]
    }),
    __metadata("design:type", Array)
], UploadTaskPhotosNatsRequest.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], UploadTaskPhotosNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], UploadTaskPhotosNatsRequest.prototype, "hotelId", void 0);
/**
 * Upload Response Message
 */
class UploadPhotosMessageNatsResponse {
    message;
}
exports.UploadPhotosMessageNatsResponse = UploadPhotosMessageNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message' }),
    __metadata("design:type", String)
], UploadPhotosMessageNatsResponse.prototype, "message", void 0);
/**
 * Get Task Photos Request
 */
class GetTaskPhotosNatsRequest {
    taskId;
    tenantId;
    hotelId;
    category;
}
exports.GetTaskPhotosNatsRequest = GetTaskPhotosNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], GetTaskPhotosNatsRequest.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetTaskPhotosNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetTaskPhotosNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by category' }),
    __metadata("design:type", String)
], GetTaskPhotosNatsRequest.prototype, "category", void 0);
/**
 * Get Photo By ID Request
 */
class GetPhotoByIdNatsRequest {
    photoId;
    tenantId;
    hotelId;
}
exports.GetPhotoByIdNatsRequest = GetPhotoByIdNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Photo ID' }),
    __metadata("design:type", String)
], GetPhotoByIdNatsRequest.prototype, "photoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetPhotoByIdNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetPhotoByIdNatsRequest.prototype, "hotelId", void 0);
/**
 * Update Photo Data
 */
class UpdatePhotoDataDto {
    description;
    category;
}
exports.UpdatePhotoDataDto = UpdatePhotoDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photo description' }),
    __metadata("design:type", String)
], UpdatePhotoDataDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photo category', enum: PhotoCategory }),
    __metadata("design:type", String)
], UpdatePhotoDataDto.prototype, "category", void 0);
/**
 * Update Photo Request
 */
class UpdatePhotoNatsRequest {
    photoId;
    updateData;
    tenantId;
    hotelId;
}
exports.UpdatePhotoNatsRequest = UpdatePhotoNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Photo ID' }),
    __metadata("design:type", String)
], UpdatePhotoNatsRequest.prototype, "photoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Update data', type: UpdatePhotoDataDto }),
    __metadata("design:type", UpdatePhotoDataDto)
], UpdatePhotoNatsRequest.prototype, "updateData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], UpdatePhotoNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], UpdatePhotoNatsRequest.prototype, "hotelId", void 0);
/**
 * Review Photo Data
 */
class ReviewPhotoDataDto {
    approved;
    reviewNotes;
    reviewedBy;
}
exports.ReviewPhotoDataDto = ReviewPhotoDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Approval status' }),
    __metadata("design:type", Boolean)
], ReviewPhotoDataDto.prototype, "approved", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Review notes' }),
    __metadata("design:type", String)
], ReviewPhotoDataDto.prototype, "reviewNotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reviewer user ID' }),
    __metadata("design:type", String)
], ReviewPhotoDataDto.prototype, "reviewedBy", void 0);
/**
 * Review Photo Request
 */
class ReviewPhotoNatsRequest {
    photoId;
    reviewData;
    tenantId;
    hotelId;
}
exports.ReviewPhotoNatsRequest = ReviewPhotoNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Photo ID' }),
    __metadata("design:type", String)
], ReviewPhotoNatsRequest.prototype, "photoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Review data', type: ReviewPhotoDataDto }),
    __metadata("design:type", ReviewPhotoDataDto)
], ReviewPhotoNatsRequest.prototype, "reviewData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ReviewPhotoNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ReviewPhotoNatsRequest.prototype, "hotelId", void 0);
/**
 * Delete Photo Request
 */
class DeletePhotoNatsRequest {
    photoId;
    tenantId;
    hotelId;
}
exports.DeletePhotoNatsRequest = DeletePhotoNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Photo ID' }),
    __metadata("design:type", String)
], DeletePhotoNatsRequest.prototype, "photoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], DeletePhotoNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], DeletePhotoNatsRequest.prototype, "hotelId", void 0);
/**
 * Delete Response Message
 */
class DeletePhotoMessageNatsResponse {
    message;
}
exports.DeletePhotoMessageNatsResponse = DeletePhotoMessageNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message' }),
    __metadata("design:type", String)
], DeletePhotoMessageNatsResponse.prototype, "message", void 0);
/**
 * Get Photo Statistics Request
 */
class GetPhotoStatisticsNatsRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
}
exports.GetPhotoStatisticsNatsRequest = GetPhotoStatisticsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetPhotoStatisticsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetPhotoStatisticsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date filter (ISO format)' }),
    __metadata("design:type", String)
], GetPhotoStatisticsNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date filter (ISO format)' }),
    __metadata("design:type", String)
], GetPhotoStatisticsNatsRequest.prototype, "endDate", void 0);
/**
 * Photo Statistics Response
 */
class PhotoStatisticsNatsResponse {
    totalPhotos;
    byCategory;
    byReviewStatus;
    averagePhotosPerTask;
    recentUploads;
}
exports.PhotoStatisticsNatsResponse = PhotoStatisticsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of photos' }),
    __metadata("design:type", Number)
], PhotoStatisticsNatsResponse.prototype, "totalPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photos by category', type: Object }),
    __metadata("design:type", Object)
], PhotoStatisticsNatsResponse.prototype, "byCategory", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photos by review status', type: Object }),
    __metadata("design:type", Object)
], PhotoStatisticsNatsResponse.prototype, "byReviewStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Average photos per task' }),
    __metadata("design:type", Number)
], PhotoStatisticsNatsResponse.prototype, "averagePhotosPerTask", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Recent uploads count' }),
    __metadata("design:type", Number)
], PhotoStatisticsNatsResponse.prototype, "recentUploads", void 0);
//# sourceMappingURL=task-photos.nats.js.map