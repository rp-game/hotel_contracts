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
exports.HotelHardDeleteNatsResponse = exports.HotelHardDeleteNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class HotelHardDeleteNatsRequest {
    hotelId;
    tenantId;
    requestedBy;
    timestamp;
}
exports.HotelHardDeleteNatsRequest = HotelHardDeleteNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelHardDeleteNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelHardDeleteNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelHardDeleteNatsRequest.prototype, "requestedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelHardDeleteNatsRequest.prototype, "timestamp", void 0);
class HotelHardDeleteNatsResponse {
    success;
    hotelId;
    deletedCount;
    message;
    error;
}
exports.HotelHardDeleteNatsResponse = HotelHardDeleteNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], HotelHardDeleteNatsResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelHardDeleteNatsResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HotelHardDeleteNatsResponse.prototype, "deletedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], HotelHardDeleteNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], HotelHardDeleteNatsResponse.prototype, "error", void 0);
//# sourceMappingURL=delete-hotel.nats.js.map