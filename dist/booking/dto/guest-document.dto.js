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
exports.GuestDocumentDto = exports.GuestDocumentSide = void 0;
const swagger_1 = require("@nestjs/swagger");
const booking_enum_1 = require("../enums/booking.enum");
/** Mặt ảnh giấy tờ. */
var GuestDocumentSide;
(function (GuestDocumentSide) {
    GuestDocumentSide["FRONT"] = "FRONT";
    GuestDocumentSide["BACK"] = "BACK";
    GuestDocumentSide["OTHER"] = "OTHER";
})(GuestDocumentSide || (exports.GuestDocumentSide = GuestDocumentSide = {}));
/**
 * Ảnh giấy tờ (CCCD/hộ chiếu) của 1 khách — bản CLIENT-FACING (không có storageKey).
 * Dùng chung cho REST (swagger) + NATS response. storageKey là nội bộ, chỉ đi
 * trong request tạo và các NATS ref riêng (không lộ ra client).
 */
class GuestDocumentDto {
    id;
    bookingGuestId;
    bookingId;
    bookingRoomId;
    side;
    docType;
    mimeType;
    fileSize;
    uploadedBy;
    uploadedAt;
}
exports.GuestDocumentDto = GuestDocumentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'GuestDocument ID' }),
    __metadata("design:type", String)
], GuestDocumentDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'BookingGuest ID' }),
    __metadata("design:type", String)
], GuestDocumentDto.prototype, "bookingGuestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GuestDocumentDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GuestDocumentDto.prototype, "bookingRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: GuestDocumentSide }),
    __metadata("design:type", String)
], GuestDocumentDto.prototype, "side", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: booking_enum_1.IdType, nullable: true }),
    __metadata("design:type", Object)
], GuestDocumentDto.prototype, "docType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GuestDocumentDto.prototype, "mimeType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GuestDocumentDto.prototype, "fileSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GuestDocumentDto.prototype, "uploadedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ISO timestamp' }),
    __metadata("design:type", String)
], GuestDocumentDto.prototype, "uploadedAt", void 0);
//# sourceMappingURL=guest-document.dto.js.map