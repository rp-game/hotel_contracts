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
exports.GetRoomNightsResponseData = exports.GetRoomNightsRequest = exports.HotelOccupancyNatsResponseData = exports.GetHotelOccupancyNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * NATS Pattern: booking.occupancy.current
 */
class GetHotelOccupancyNatsRequest {
    tenantId;
    hotelId;
    date;
}
exports.GetHotelOccupancyNatsRequest = GetHotelOccupancyNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetHotelOccupancyNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetHotelOccupancyNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date in hotel timezone (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GetHotelOccupancyNatsRequest.prototype, "date", void 0);
class HotelOccupancyNatsResponseData {
    total;
    occupied;
    available;
    outOfOrder;
    checkingOut;
    checkingIn;
    cleaning;
}
exports.HotelOccupancyNatsResponseData = HotelOccupancyNatsResponseData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms in hotel' }),
    __metadata("design:type", Number)
], HotelOccupancyNatsResponseData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currently occupied rooms' }),
    __metadata("design:type", Number)
], HotelOccupancyNatsResponseData.prototype, "occupied", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Available rooms' }),
    __metadata("design:type", Number)
], HotelOccupancyNatsResponseData.prototype, "available", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Out of order rooms' }),
    __metadata("design:type", Number)
], HotelOccupancyNatsResponseData.prototype, "outOfOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rooms checking out today' }),
    __metadata("design:type", Number)
], HotelOccupancyNatsResponseData.prototype, "checkingOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rooms checking in today' }),
    __metadata("design:type", Number)
], HotelOccupancyNatsResponseData.prototype, "checkingIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rooms being cleaned' }),
    __metadata("design:type", Number)
], HotelOccupancyNatsResponseData.prototype, "cleaning", void 0);
/**
 * NATS Pattern: bookings.stats.roomNights
 * Returns total occupied room nights in a date range
 */
class GetRoomNightsRequest {
    tenantId;
    hotelId;
    dateFrom;
    dateTo;
}
exports.GetRoomNightsRequest = GetRoomNightsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetRoomNightsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetRoomNightsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period start (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GetRoomNightsRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period end (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GetRoomNightsRequest.prototype, "dateTo", void 0);
class GetRoomNightsResponseData {
    roomNights;
}
exports.GetRoomNightsResponseData = GetRoomNightsResponseData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total occupied room nights in the period' }),
    __metadata("design:type", Number)
], GetRoomNightsResponseData.prototype, "roomNights", void 0);
//# sourceMappingURL=occupancy.nats.js.map