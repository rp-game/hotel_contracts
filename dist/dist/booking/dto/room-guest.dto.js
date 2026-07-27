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
exports.RoomGuestActionResultDto = exports.UpsertRoomGuestBodyDto = exports.RoomGuestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const booking_enum_1 = require("../enums/booking.enum");
const guest_document_dto_1 = require("./guest-document.dto");
/**
 * Khách trong 1 phòng (booking_guests theo bookingRoomId) kèm ảnh giấy tờ —
 * dùng chung cho REST (swagger response) + NATS. Quản lý khai báo tạm trú.
 */
class RoomGuestDto {
    id;
    bookingId;
    bookingRoomId;
    guestId;
    isMainGuest;
    fullName;
    email;
    phone;
    idType;
    idNumber;
    idIssueDate;
    idExpiryDate;
    nationality;
    dateOfBirth;
    gender;
    address;
    documents;
}
exports.RoomGuestDto = RoomGuestDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RoomGuestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RoomGuestDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "bookingRoomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "guestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RoomGuestDto.prototype, "isMainGuest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RoomGuestDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: booking_enum_1.IdType, nullable: true }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "idType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "idNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true, description: 'YYYY-MM-DD' }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "idIssueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true, description: 'YYYY-MM-DD' }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "idExpiryDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true, description: 'YYYY-MM-DD' }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], RoomGuestDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [guest_document_dto_1.GuestDocumentDto] }),
    __metadata("design:type", Array)
], RoomGuestDto.prototype, "documents", void 0);
/**
 * Body upsert khách (REST). tenantId/hotelId/bookingId/bookingRoomId lấy từ JWT +
 * path param ở gateway, KHÔNG nhận từ body (chống IDOR).
 */
class UpsertRoomGuestBodyDto {
    id;
    fullName;
    email;
    phone;
    idType;
    idNumber;
    idIssueDate;
    idExpiryDate;
    nationality;
    dateOfBirth;
    gender;
    address;
}
exports.UpsertRoomGuestBodyDto = UpsertRoomGuestBodyDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Có id = cập nhật; không có = tạo mới' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: booking_enum_1.IdType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(booking_enum_1.IdType),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "idType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "idNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'YYYY-MM-DD' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "idIssueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'YYYY-MM-DD' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "idExpiryDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'YYYY-MM-DD' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpsertRoomGuestBodyDto.prototype, "address", void 0);
/** Kết quả thao tác đơn giản (xoá khách/ảnh). */
class RoomGuestActionResultDto {
    success;
}
exports.RoomGuestActionResultDto = RoomGuestActionResultDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RoomGuestActionResultDto.prototype, "success", void 0);
//# sourceMappingURL=room-guest.dto.js.map