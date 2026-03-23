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
exports.PaymentMethodResponse = exports.CreatePaymentMethodNatsRequest = exports.PAYMENT_METHOD_PATTERNS = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Payment Method NATS Contracts
 * Handler: payment-service
 */
exports.PAYMENT_METHOD_PATTERNS = {
    CREATE: 'payment.payment-methods.create',
    FIND_ALL: 'payment.payment-methods.findAll',
};
// ─── Create Payment Method ───
class CreatePaymentMethodNatsRequest {
    tenantId;
    hotelId;
    name;
    description;
    isActive;
}
exports.CreatePaymentMethodNatsRequest = CreatePaymentMethodNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePaymentMethodNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePaymentMethodNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method name', maxLength: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentMethodNatsRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentMethodNatsRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Active status', default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePaymentMethodNatsRequest.prototype, "isActive", void 0);
class PaymentMethodResponse {
    id;
    tenantId;
    hotelId;
    name;
    description;
    isActive;
    createdAt;
    updatedAt;
}
exports.PaymentMethodResponse = PaymentMethodResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PaymentMethodResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PaymentMethodResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PaymentMethodResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PaymentMethodResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], PaymentMethodResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PaymentMethodResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PaymentMethodResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PaymentMethodResponse.prototype, "updatedAt", void 0);
//# sourceMappingURL=payment-methods.nats.js.map