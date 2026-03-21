"use strict";
/**
 * Interactions NATS Contracts
 *
 * Patterns:
 * - crm.interaction.create
 * - crm.interaction.findAll
 * - crm.interaction.findOne
 * - crm.interaction.update
 * - crm.interaction.remove
 *
 * Handler: crm-service (InteractionsController)
 * Called by: api-gateway (CrmController)
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
exports.InteractionsListNatsResponse = exports.CustomerInteractionNatsResponse = exports.AttachmentNatsResponse = exports.CreateInteractionNatsRequest = exports.InteractionChannel = exports.InteractionType = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Interaction Type Enum — unified across all layers
 */
var InteractionType;
(function (InteractionType) {
    InteractionType["NOTE"] = "NOTE";
    InteractionType["INQUIRY"] = "INQUIRY";
    InteractionType["COMPLAINT"] = "COMPLAINT";
    InteractionType["FEEDBACK"] = "FEEDBACK";
    InteractionType["STAY"] = "STAY";
    InteractionType["SERVICE_USAGE"] = "SERVICE_USAGE";
    InteractionType["LOYALTY_ACTION"] = "LOYALTY_ACTION";
    InteractionType["MARKETING_ENGAGEMENT"] = "MARKETING_ENGAGEMENT";
})(InteractionType || (exports.InteractionType = InteractionType = {}));
/**
 * Interaction Channel Enum — unified across all layers
 */
var InteractionChannel;
(function (InteractionChannel) {
    InteractionChannel["PHONE_CALL"] = "PHONE_CALL";
    InteractionChannel["EMAIL"] = "EMAIL";
    InteractionChannel["WALK_IN"] = "WALK_IN";
    InteractionChannel["IN_PERSON"] = "IN_PERSON";
    InteractionChannel["CHAT"] = "CHAT";
    InteractionChannel["SOCIAL_MEDIA"] = "SOCIAL_MEDIA";
    InteractionChannel["SMS"] = "SMS";
})(InteractionChannel || (exports.InteractionChannel = InteractionChannel = {}));
/**
 * Create Interaction Request
 * Pattern: crm.interaction.create
 */
class CreateInteractionNatsRequest {
    tenantId;
    hotelId;
    customerId;
    interactionType;
    channel;
    interactionDate;
    subject;
    notes;
    staffId;
    staffName;
    satisfactionRating;
    resolutionStatus;
    followUpRequired;
    followUpDate;
    tags;
    createdBy;
}
exports.CreateInteractionNatsRequest = CreateInteractionNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of interaction', enum: InteractionType }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "interactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Interaction channel', enum: InteractionChannel }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Interaction date (ISO string)' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "interactionDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Subject/title' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Detailed notes' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff member ID' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff member name' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Satisfaction rating (1-5)', minimum: 1, maximum: 5 }),
    __metadata("design:type", Number)
], CreateInteractionNatsRequest.prototype, "satisfactionRating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Resolution status', enum: ['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'], default: 'OPEN' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "resolutionStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether follow-up is required' }),
    __metadata("design:type", Boolean)
], CreateInteractionNatsRequest.prototype, "followUpRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Follow-up date (ISO string)' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "followUpDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tags for categorization', type: [String] }),
    __metadata("design:type", Array)
], CreateInteractionNatsRequest.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user ID' }),
    __metadata("design:type", String)
], CreateInteractionNatsRequest.prototype, "createdBy", void 0);
/**
 * Attachment Response
 */
class AttachmentNatsResponse {
    id;
    filename;
    url;
    mimeType;
    size;
    description;
    uploadedAt;
}
exports.AttachmentNatsResponse = AttachmentNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Attachment ID' }),
    __metadata("design:type", String)
], AttachmentNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Original filename' }),
    __metadata("design:type", String)
], AttachmentNatsResponse.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File URL or path' }),
    __metadata("design:type", String)
], AttachmentNatsResponse.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File MIME type' }),
    __metadata("design:type", String)
], AttachmentNatsResponse.prototype, "mimeType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File size in bytes' }),
    __metadata("design:type", Number)
], AttachmentNatsResponse.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'File description' }),
    __metadata("design:type", String)
], AttachmentNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Upload timestamp' }),
    __metadata("design:type", String)
], AttachmentNatsResponse.prototype, "uploadedAt", void 0);
/**
 * Customer Interaction Response (Extended for API Gateway compatibility)
 */
class CustomerInteractionNatsResponse {
    id;
    tenantId;
    hotelId;
    customerId;
    interactionType;
    channel;
    interactionDate;
    subject;
    notes;
    staffId;
    staffName;
    satisfactionRating;
    followUpRequired;
    followUpDate;
    resolutionStatus;
    resolutionNotes;
    tags;
    attachments;
    createdAt;
    updatedAt;
    createdBy;
    updatedBy;
    // Legacy fields for backward compatibility
    type;
    description;
    status;
    priority;
    assignedTo;
    metadata;
}
exports.CustomerInteractionNatsResponse = CustomerInteractionNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Interaction ID' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Interaction type',
        enum: InteractionType,
    }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "interactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Interaction channel',
        enum: InteractionChannel,
    }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Interaction date (ISO string)' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "interactionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Interaction subject' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Detailed notes about the interaction' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff member ID who handled the interaction' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff member name' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Customer satisfaction rating (1-5 scale)',
        minimum: 1,
        maximum: 5
    }),
    __metadata("design:type", Number)
], CustomerInteractionNatsResponse.prototype, "satisfactionRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether follow-up is required' }),
    __metadata("design:type", Boolean)
], CustomerInteractionNatsResponse.prototype, "followUpRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Follow-up date (ISO string)' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "followUpDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Resolution status',
        enum: ['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'],
        default: 'OPEN'
    }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "resolutionStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Resolution notes' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "resolutionNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tags associated with the interaction', type: [String] }),
    __metadata("design:type", Array)
], CustomerInteractionNatsResponse.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'File attachments', type: [AttachmentNatsResponse] }),
    __metadata("design:type", Array)
], CustomerInteractionNatsResponse.prototype, "attachments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ISO string)', type: String }),
    __metadata("design:type", Object)
], CustomerInteractionNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (ISO string)', type: String }),
    __metadata("design:type", Object)
], CustomerInteractionNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user ID' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated by user ID' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "updatedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: InteractionType, description: 'Interaction type (legacy)' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description (legacy)' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status (legacy)' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Priority level (legacy)' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned to user ID (legacy)' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Metadata (legacy)' }),
    __metadata("design:type", Object)
], CustomerInteractionNatsResponse.prototype, "metadata", void 0);
/**
 * Interactions List Response (for CRM customer interactions endpoint)
 */
class InteractionsListNatsResponse {
    data;
    total;
    page;
    limit;
}
exports.InteractionsListNatsResponse = InteractionsListNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of customer interactions', type: [CustomerInteractionNatsResponse] }),
    __metadata("design:type", Array)
], InteractionsListNatsResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of interactions' }),
    __metadata("design:type", Number)
], InteractionsListNatsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], InteractionsListNatsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], InteractionsListNatsResponse.prototype, "limit", void 0);
//# sourceMappingURL=interactions.nats.js.map