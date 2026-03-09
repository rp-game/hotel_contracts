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
exports.OrganizerSettingsResponse = exports.UpdateMenuBody = exports.UpdatePageSettingsBody = exports.PageSectionDto = exports.UpdateOrganizerSettingsBody = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * Request body for updating organizer/webshop settings.
 * Performs a shallow merge of top-level keys into existing settings.
 */
class UpdateOrganizerSettingsBody {
    hotel_id;
    theme;
    pages;
    menus;
}
exports.UpdateOrganizerSettingsBody = UpdateOrganizerSettingsBody;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID associated with this organizer',
        required: false,
        example: '550e8400-e29b-41d4-a716-446655440001',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateOrganizerSettingsBody.prototype, "hotel_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Theme configuration (base_theme, sectionTypes, etc.)',
        required: false,
        type: Object,
        example: {
            base_theme: 'travel-agency',
            sectionTypes: { hero: { enabled: true }, gallery: { columns: 3 } },
        },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdateOrganizerSettingsBody.prototype, "theme", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Page-level settings keyed by page name',
        required: false,
        type: Object,
        example: {
            home: { hero_enabled: true, sections: ['hero', 'featured-rooms'] },
            about: { layout: 'full-width' },
        },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdateOrganizerSettingsBody.prototype, "pages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Navigation menus configuration',
        required: false,
        type: [Object],
        example: [
            { id: 'main', label: 'Main Menu', items: [{ label: 'Home', url: '/' }] },
            { id: 'footer', label: 'Footer Menu', items: [{ label: 'About', url: '/about' }] },
        ],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateOrganizerSettingsBody.prototype, "menus", void 0);
/**
 * A single section within a page config.
 */
class PageSectionDto {
    id;
    type;
    data;
    visible;
}
exports.PageSectionDto = PageSectionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique section identifier', example: 'hero1' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PageSectionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Section type key from theme', example: 'hero' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PageSectionDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Section-specific data/settings',
        required: false,
        type: Object,
        example: { heading: { en: 'Welcome' }, backgroundImage: { url: '/img/hero.jpg' } },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], PageSectionDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Section visibility (default: true). Set to false to hide section without deleting.',
        required: false,
        example: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PageSectionDto.prototype, "visible", void 0);
/**
 * Request body for updating a page config (PUT pages-settings/:name).
 * Mirrors riptik's PageConfigRequest struct.
 */
class UpdatePageSettingsBody {
    title;
    sections;
}
exports.UpdatePageSettingsBody = UpdatePageSettingsBody;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Page title in multiple languages',
        required: false,
        type: Object,
        example: { en: 'Home', vi: 'Trang chủ' },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdatePageSettingsBody.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ordered list of page sections',
        required: false,
        type: [PageSectionDto],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PageSectionDto),
    __metadata("design:type", Array)
], UpdatePageSettingsBody.prototype, "sections", void 0);
/**
 * Request body for updating a menu (PUT menus/:menuType).
 */
class UpdateMenuBody {
    items;
}
exports.UpdateMenuBody = UpdateMenuBody;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ordered list of menu items',
        type: [Object],
        example: [{ labels: { en: 'Home' }, type: 'route', url: '/', order: 0, visible: true }],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateMenuBody.prototype, "items", void 0);
/**
 * Response wrapper for organizer settings endpoints.
 */
class OrganizerSettingsResponse {
    settings;
}
exports.OrganizerSettingsResponse = OrganizerSettingsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The full merged settings object',
        type: Object,
        example: {
            hotel_id: '550e8400-e29b-41d4-a716-446655440001',
            theme: { base_theme: 'travel-agency', sectionTypes: {} },
            pages: { home: { hero_enabled: true } },
            menus: [{ id: 'main', label: 'Main Menu', items: [] }],
        },
    }),
    __metadata("design:type", Object)
], OrganizerSettingsResponse.prototype, "settings", void 0);
//# sourceMappingURL=organizer-settings.nats.js.map