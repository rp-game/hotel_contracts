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
exports.RejectOfflinePaymentDto = exports.ConfirmOfflinePaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Request body for confirming a pending offline payment (bank transfer)
 * Used by accountant to confirm BANK_TRANSFER payments in VERIFIED mode
 */
class ConfirmOfflinePaymentDto {
    confirmedBy;
    transactionId;
    notes;
}
exports.ConfirmOfflinePaymentDto = ConfirmOfflinePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who confirmed the payment', format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConfirmOfflinePaymentDto.prototype, "confirmedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank transaction ID (reference from bank statement)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConfirmOfflinePaymentDto.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes for this confirmation' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConfirmOfflinePaymentDto.prototype, "notes", void 0);
/**
 * Request body for rejecting a pending offline payment (bank transfer)
 */
class RejectOfflinePaymentDto {
    rejectedBy;
    notes;
}
exports.RejectOfflinePaymentDto = RejectOfflinePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who rejected the payment', format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RejectOfflinePaymentDto.prototype, "rejectedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reason for rejection' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RejectOfflinePaymentDto.prototype, "notes", void 0);
//# sourceMappingURL=offline-payment.dto.js.map