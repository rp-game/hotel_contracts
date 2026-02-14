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
exports.CustomerInteractionNatsResponse = exports.InteractionType = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Interaction Type Enum
 */
var InteractionType;
(function (InteractionType) {
    InteractionType["EMAIL"] = "EMAIL";
    InteractionType["CALL"] = "CALL";
    InteractionType["SMS"] = "SMS";
    InteractionType["IN_PERSON"] = "IN_PERSON";
    InteractionType["CHAT"] = "CHAT";
    InteractionType["SOCIAL_MEDIA"] = "SOCIAL_MEDIA";
    InteractionType["BOOKING"] = "BOOKING";
    InteractionType["FEEDBACK"] = "FEEDBACK";
    InteractionType["COMPLAINT"] = "COMPLAINT";
    InteractionType["INQUIRY"] = "INQUIRY";
})(InteractionType || (exports.InteractionType = InteractionType = {}));
/**
 * Customer Interaction Response
 */
class CustomerInteractionNatsResponse {
    id;
    tenantId;
    customerId;
    type;
    subject;
    description;
    channel;
    status;
    priority;
    assignedTo;
    metadata;
    createdAt;
    updatedAt;
    notes;
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
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: InteractionType, description: 'Interaction type' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Subject' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Communication channel' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Priority level' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned to user ID' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Metadata' }),
    __metadata("design:type", Object)
], CustomerInteractionNatsResponse.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Object)
], CustomerInteractionNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Object)
], CustomerInteractionNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    __metadata("design:type", String)
], CustomerInteractionNatsResponse.prototype, "notes", void 0);
//# sourceMappingURL=interactions.nats.js.map