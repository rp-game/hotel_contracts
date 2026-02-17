"use strict";
/**
 * Room NATS Contracts
 *
 * Patterns:
 * - inventory.rooms.findAll
 * - inventory.rooms.findOne
 * - inventory.rooms.create
 * - inventory.rooms.update
 * - inventory.rooms.delete
 * - inventory.rooms.status
 * - rooms.alternatives.get
 * - inventory.room.get
 * - inventory.rooms.get
 * - automation.room.status.changed (Event)
 *
 * Handler: inventory-service
 * Called by: api-gateway, booking-service
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
exports.RoomStatusByDateResponse = exports.RoomStatusRoomItem = exports.RoomStatusBreakdown = exports.FindAllRoomsResponse = exports.PaginatedRoomsResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("../types");
class PaginatedRoomsResponse {
    data;
    total;
    page;
    limit;
}
exports.PaginatedRoomsResponse = PaginatedRoomsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of room entities',
        type: [types_1.Room]
    }),
    __metadata("design:type", Array)
], PaginatedRoomsResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of rooms' }),
    __metadata("design:type", Number)
], PaginatedRoomsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], PaginatedRoomsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], PaginatedRoomsResponse.prototype, "limit", void 0);
class FindAllRoomsResponse extends PaginatedRoomsResponse {
}
exports.FindAllRoomsResponse = FindAllRoomsResponse;
class RoomStatusBreakdown {
    available;
    occupied;
    maintenance;
    cleaning;
}
exports.RoomStatusBreakdown = RoomStatusBreakdown;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of available rooms', example: 10 }),
    __metadata("design:type", Number)
], RoomStatusBreakdown.prototype, "available", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of occupied rooms', example: 5 }),
    __metadata("design:type", Number)
], RoomStatusBreakdown.prototype, "occupied", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rooms under maintenance', example: 2 }),
    __metadata("design:type", Number)
], RoomStatusBreakdown.prototype, "maintenance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rooms being cleaned', example: 3 }),
    __metadata("design:type", Number)
], RoomStatusBreakdown.prototype, "cleaning", void 0);
class RoomStatusRoomItem {
    id;
    roomNumber;
    status;
    roomType;
}
exports.RoomStatusRoomItem = RoomStatusRoomItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID (UUID)', example: 'uuid-room-123' }),
    __metadata("design:type", String)
], RoomStatusRoomItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number', example: '101' }),
    __metadata("design:type", String)
], RoomStatusRoomItem.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room status', example: 'AVAILABLE' }),
    __metadata("design:type", String)
], RoomStatusRoomItem.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name', example: 'Deluxe' }),
    __metadata("design:type", String)
], RoomStatusRoomItem.prototype, "roomType", void 0);
class RoomStatusByDateResponse {
    date;
    totalRooms;
    statusBreakdown;
    rooms;
}
exports.RoomStatusByDateResponse = RoomStatusByDateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date for status report (YYYY-MM-DD)', example: '2026-02-17' }),
    __metadata("design:type", String)
], RoomStatusByDateResponse.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of rooms', example: 20 }),
    __metadata("design:type", Number)
], RoomStatusByDateResponse.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status breakdown by category', type: () => RoomStatusBreakdown }),
    __metadata("design:type", RoomStatusBreakdown)
], RoomStatusByDateResponse.prototype, "statusBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of rooms with their current status', type: () => [RoomStatusRoomItem] }),
    __metadata("design:type", Array)
], RoomStatusByDateResponse.prototype, "rooms", void 0);
//# sourceMappingURL=room.nats.js.map