"use strict";
/**
 * Group Block Response DTOs
 *
 * Wrapper classes for REST API responses with Swagger documentation.
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
exports.GroupBlockResponseDto = exports.GroupBlockListResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const group_block_types_1 = require("../types/group-block.types");
/**
 * Paginated list response for group blocks
 */
class GroupBlockListResponseDto {
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.GroupBlockListResponseDto = GroupBlockListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of group block summaries', type: [group_block_types_1.GroupBlockSummary] }),
    __metadata("design:type", Array)
], GroupBlockListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of group blocks matching filters', example: 100 }),
    __metadata("design:type", Number)
], GroupBlockListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number (1-indexed)', example: 1 }),
    __metadata("design:type", Number)
], GroupBlockListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page', example: 10 }),
    __metadata("design:type", Number)
], GroupBlockListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of pages', example: 10 }),
    __metadata("design:type", Number)
], GroupBlockListResponseDto.prototype, "totalPages", void 0);
/**
 * Single group block response wrapper
 */
class GroupBlockResponseDto {
    data;
}
exports.GroupBlockResponseDto = GroupBlockResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Group block details', type: group_block_types_1.GroupBlockDetails }),
    __metadata("design:type", group_block_types_1.GroupBlockDetails)
], GroupBlockResponseDto.prototype, "data", void 0);
//# sourceMappingURL=group-block-response.dto.js.map