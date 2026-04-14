"use strict";
/**
 * Customer Service Alerts NATS Contracts
 *
 * Patterns:
 * - crm.service-alert.list
 * - crm.service-alert.create
 * - crm.service-alert.resolve
 * - crm.service-alert.delete
 *
 * Handler: crm-service
 * Called by: api-gateway
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
exports.DeleteServiceAlertNatsRequest = exports.ResolveServiceAlertNatsRequest = exports.CreateServiceAlertNatsRequest = exports.ListServiceAlertsNatsRequest = exports.ServiceAlertDto = exports.ServiceAlertType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var ServiceAlertType;
(function (ServiceAlertType) {
    ServiceAlertType["INFO"] = "INFO";
    ServiceAlertType["WARNING"] = "WARNING";
    ServiceAlertType["CRITICAL"] = "CRITICAL";
})(ServiceAlertType || (exports.ServiceAlertType = ServiceAlertType = {}));
// ─── Response DTO ───────────────────────────────────────────────────────────
class ServiceAlertDto {
    id;
    tenantId;
    customerId;
    type;
    content;
    resolved;
    resolvedAt;
    createdBy;
    createdAt;
}
exports.ServiceAlertDto = ServiceAlertDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceAlertDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceAlertDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceAlertDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ServiceAlertType }),
    __metadata("design:type", String)
], ServiceAlertDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceAlertDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ServiceAlertDto.prototype, "resolved", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ServiceAlertDto.prototype, "resolvedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ServiceAlertDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceAlertDto.prototype, "createdAt", void 0);
// ─── List ────────────────────────────────────────────────────────────────────
class ListServiceAlertsNatsRequest {
    tenantId;
    customerId;
}
exports.ListServiceAlertsNatsRequest = ListServiceAlertsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListServiceAlertsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListServiceAlertsNatsRequest.prototype, "customerId", void 0);
// ─── Create ──────────────────────────────────────────────────────────────────
class CreateServiceAlertNatsRequest {
    tenantId;
    customerId;
    type;
    content;
    createdBy;
}
exports.CreateServiceAlertNatsRequest = CreateServiceAlertNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceAlertNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceAlertNatsRequest.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ServiceAlertType }),
    (0, class_validator_1.IsEnum)(ServiceAlertType),
    __metadata("design:type", String)
], CreateServiceAlertNatsRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServiceAlertNatsRequest.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceAlertNatsRequest.prototype, "createdBy", void 0);
// ─── Resolve ─────────────────────────────────────────────────────────────────
class ResolveServiceAlertNatsRequest {
    tenantId;
    customerId;
    alertId;
}
exports.ResolveServiceAlertNatsRequest = ResolveServiceAlertNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ResolveServiceAlertNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ResolveServiceAlertNatsRequest.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ResolveServiceAlertNatsRequest.prototype, "alertId", void 0);
// ─── Delete ──────────────────────────────────────────────────────────────────
class DeleteServiceAlertNatsRequest {
    tenantId;
    customerId;
    alertId;
}
exports.DeleteServiceAlertNatsRequest = DeleteServiceAlertNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteServiceAlertNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteServiceAlertNatsRequest.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteServiceAlertNatsRequest.prototype, "alertId", void 0);
//# sourceMappingURL=service-alerts.nats.js.map