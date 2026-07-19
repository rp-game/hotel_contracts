"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestDocumentSide = void 0;
/**
 * Ảnh giấy tờ (CCCD/hộ chiếu...) của 1 khách trong phòng. Lưu ở booking-service
 * dưới dạng metadata + storageKey; file thật nằm ở private bucket do gateway quản.
 */
var GuestDocumentSide;
(function (GuestDocumentSide) {
    GuestDocumentSide["FRONT"] = "FRONT";
    GuestDocumentSide["BACK"] = "BACK";
    GuestDocumentSide["OTHER"] = "OTHER";
})(GuestDocumentSide || (exports.GuestDocumentSide = GuestDocumentSide = {}));
//# sourceMappingURL=guest-documents.nats.js.map