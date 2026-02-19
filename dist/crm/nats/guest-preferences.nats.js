"use strict";
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
exports.GuestPreferenceNatsData = void 0;
const swagger_1 = require("@nestjs/swagger");
// ============================================================================
// GUEST PREFERENCES TYPES (Email-based customer preferences)
// ============================================================================
/**
 * Guest preferences data - shared between NATS and REST API
 * Used by:
 * - NATS pattern: crm.guest.preferences.find
 * - REST API: GET /crm/guest-preferences
 */
class GuestPreferenceNatsData {
    /**
     * Guest email address
     */
    email;
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId;
    /**
     * Hotel ID (optional, property reference)
     */
    hotelId;
    /**
     * General preferences (flexible key-value)
     */
    preferences;
    /**
     * Room-specific preferences
     */
    roomPreferences;
    /**
     * Service preferences
     */
    servicePreferences;
    /**
     * Dietary restrictions array
     */
    dietaryRestrictions;
    /**
     * Special occasions
     */
    specialOccasions;
    /**
     * Communication preferences
     */
    communicationPreferences;
    /**
     * Accessibility requirements
     */
    accessibilityRequirements;
    /**
     * Last update timestamp (ISO string)
     */
    updatedAt;
}
exports.GuestPreferenceNatsData = GuestPreferenceNatsData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest email address' }),
    __metadata("design:type", String)
], GuestPreferenceNatsData.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    __metadata("design:type", String)
], GuestPreferenceNatsData.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (optional, property reference)' }),
    __metadata("design:type", String)
], GuestPreferenceNatsData.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'General preferences', type: 'object', additionalProperties: true }),
    __metadata("design:type", Object)
], GuestPreferenceNatsData.prototype, "preferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room-specific preferences', type: 'object', additionalProperties: true }),
    __metadata("design:type", Object)
], GuestPreferenceNatsData.prototype, "roomPreferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service preferences', type: 'object', additionalProperties: true }),
    __metadata("design:type", Object)
], GuestPreferenceNatsData.prototype, "servicePreferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Dietary restrictions', type: [String] }),
    __metadata("design:type", Array)
], GuestPreferenceNatsData.prototype, "dietaryRestrictions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special occasions', type: [String] }),
    __metadata("design:type", Array)
], GuestPreferenceNatsData.prototype, "specialOccasions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Communication preferences', type: 'object', additionalProperties: true }),
    __metadata("design:type", Object)
], GuestPreferenceNatsData.prototype, "communicationPreferences", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Accessibility requirements', type: [String] }),
    __metadata("design:type", Array)
], GuestPreferenceNatsData.prototype, "accessibilityRequirements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (ISO string)' }),
    __metadata("design:type", String)
], GuestPreferenceNatsData.prototype, "updatedAt", void 0);
//# sourceMappingURL=guest-preferences.nats.js.map