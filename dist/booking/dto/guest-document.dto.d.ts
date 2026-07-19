import { IdType } from '../enums/booking.enum';
/** Mặt ảnh giấy tờ. */
export declare enum GuestDocumentSide {
    FRONT = "FRONT",
    BACK = "BACK",
    OTHER = "OTHER"
}
/**
 * Ảnh giấy tờ (CCCD/hộ chiếu) của 1 khách — bản CLIENT-FACING (không có storageKey).
 * Dùng chung cho REST (swagger) + NATS response. storageKey là nội bộ, chỉ đi
 * trong request tạo và các NATS ref riêng (không lộ ra client).
 */
export declare class GuestDocumentDto {
    id: string;
    bookingGuestId: string;
    bookingId: string;
    bookingRoomId: string;
    side: GuestDocumentSide;
    docType?: IdType | null;
    mimeType: string;
    fileSize: number;
    uploadedBy: string;
    uploadedAt: string;
}
//# sourceMappingURL=guest-document.dto.d.ts.map