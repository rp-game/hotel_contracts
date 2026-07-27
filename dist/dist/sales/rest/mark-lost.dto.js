"use strict";
/**
 * Mark Lost DTO
 * Used to manually mark a sales lead as lost with reason
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
exports.MarkLostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class MarkLostDto {
    tenantId;
    leadId;
    lossReasonId;
    lostNotes;
}
exports.MarkLostDto = MarkLostDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID (injected by gateway)', example: 'tenant-001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkLostDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales Lead ID (from URL param)', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], MarkLostDto.prototype, "leadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Loss reason ID from sales_loss_reasons table (UUID)',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], MarkLostDto.prototype, "lossReasonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional notes explaining why the deal was lost',
        example: 'Client budget was reduced due to economic downturn',
        maxLength: 500,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkLostDto.prototype, "lostNotes", void 0);
//# sourceMappingURL=mark-lost.dto.js.map