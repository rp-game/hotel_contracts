"use strict";
/**
 * Quality Standards NATS Contracts
 * Patterns: housekeeping.quality-standards.*
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
exports.QualityStandardsStatistics = exports.QualityStandard = exports.QualityStandardItem = void 0;
const swagger_1 = require("@nestjs/swagger");
// Note: Dates are strings because they're serialized over NATS
// Category in items is an enum string (InspectionItemCategory value)
class QualityStandardItem {
    name;
    description;
    category;
    points;
    isCritical;
    sortOrder;
    isActive;
    instructions;
    inspectorNotes;
}
exports.QualityStandardItem = QualityStandardItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Item name' }),
    __metadata("design:type", String)
], QualityStandardItem.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Item description' }),
    __metadata("design:type", String)
], QualityStandardItem.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'InspectionItemCategory enum value as string' }),
    __metadata("design:type", String)
], QualityStandardItem.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Points for this item' }),
    __metadata("design:type", Number)
], QualityStandardItem.prototype, "points", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is this a critical item' }),
    __metadata("design:type", Boolean)
], QualityStandardItem.prototype, "isCritical", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sort order' }),
    __metadata("design:type", Number)
], QualityStandardItem.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is item active' }),
    __metadata("design:type", Boolean)
], QualityStandardItem.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional instructions' }),
    __metadata("design:type", Object)
], QualityStandardItem.prototype, "instructions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Inspector notes' }),
    __metadata("design:type", String)
], QualityStandardItem.prototype, "inspectorNotes", void 0);
class QualityStandard {
    id;
    name;
    description;
    roomType;
    version;
    isActive;
    items;
    passingScore;
    configuration;
    effectiveDate;
    expiryDate;
    createdBy;
    tenantId;
    hotelId;
    createdAt;
    updatedAt;
}
exports.QualityStandard = QualityStandard;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quality standard ID' }),
    __metadata("design:type", String)
], QualityStandard.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Standard name' }),
    __metadata("design:type", String)
], QualityStandard.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Standard description' }),
    __metadata("design:type", String)
], QualityStandard.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'RoomType enum value as string' }),
    __metadata("design:type", String)
], QualityStandard.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Version number' }),
    __metadata("design:type", Number)
], QualityStandard.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is standard active' }),
    __metadata("design:type", Boolean)
], QualityStandard.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quality standard items', type: [QualityStandardItem] }),
    __metadata("design:type", Array)
], QualityStandard.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum passing score' }),
    __metadata("design:type", Number)
], QualityStandard.prototype, "passingScore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional configuration' }),
    __metadata("design:type", Object)
], QualityStandard.prototype, "configuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Effective date (string or Date for compatibility)', type: String }),
    __metadata("design:type", Object)
], QualityStandard.prototype, "effectiveDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Expiry date (string or Date for compatibility)', type: String }),
    __metadata("design:type", Object)
], QualityStandard.prototype, "expiryDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who created this standard' }),
    __metadata("design:type", String)
], QualityStandard.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], QualityStandard.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], QualityStandard.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (string or Date for compatibility)', type: String }),
    __metadata("design:type", Object)
], QualityStandard.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (string or Date for compatibility)', type: String }),
    __metadata("design:type", Object)
], QualityStandard.prototype, "updatedAt", void 0);
class QualityStandardsStatistics {
    totalStandards;
    activeStandards;
    inactiveStandards;
    averageScore;
    standardsByRoomType;
    byRoomType;
    averageItemsPerStandard;
}
exports.QualityStandardsStatistics = QualityStandardsStatistics;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of quality standards' }),
    __metadata("design:type", Number)
], QualityStandardsStatistics.prototype, "totalStandards", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of active quality standards' }),
    __metadata("design:type", Number)
], QualityStandardsStatistics.prototype, "activeStandards", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of inactive quality standards' }),
    __metadata("design:type", Number)
], QualityStandardsStatistics.prototype, "inactiveStandards", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average quality score across all standards' }),
    __metadata("design:type", Number)
], QualityStandardsStatistics.prototype, "averageScore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Standards count by room type' }),
    __metadata("design:type", Object)
], QualityStandardsStatistics.prototype, "standardsByRoomType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Standards count by room type (alternative field)' }),
    __metadata("design:type", Object)
], QualityStandardsStatistics.prototype, "byRoomType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Average number of items per standard' }),
    __metadata("design:type", Number)
], QualityStandardsStatistics.prototype, "averageItemsPerStandard", void 0);
//# sourceMappingURL=quality-standards.nats.js.map