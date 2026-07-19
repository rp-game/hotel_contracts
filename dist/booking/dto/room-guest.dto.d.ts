import { IdType } from '../enums/booking.enum';
import { GuestDocumentDto } from './guest-document.dto';
/**
 * Khách trong 1 phòng (booking_guests theo bookingRoomId) kèm ảnh giấy tờ —
 * dùng chung cho REST (swagger response) + NATS. Quản lý khai báo tạm trú.
 */
export declare class RoomGuestDto {
    id: string;
    bookingId: string;
    bookingRoomId: string | null;
    guestId?: string | null;
    isMainGuest: boolean;
    fullName: string;
    email?: string | null;
    phone?: string | null;
    idType?: IdType | null;
    idNumber?: string | null;
    idIssueDate?: string | null;
    idExpiryDate?: string | null;
    nationality?: string | null;
    dateOfBirth?: string | null;
    gender?: string | null;
    address?: string | null;
    documents: GuestDocumentDto[];
}
/**
 * Body upsert khách (REST). tenantId/hotelId/bookingId/bookingRoomId lấy từ JWT +
 * path param ở gateway, KHÔNG nhận từ body (chống IDOR).
 */
export declare class UpsertRoomGuestBodyDto {
    id?: string;
    fullName: string;
    email?: string;
    phone?: string;
    idType?: IdType;
    idNumber?: string;
    idIssueDate?: string;
    idExpiryDate?: string;
    nationality?: string;
    dateOfBirth?: string;
    gender?: string;
    address?: string;
}
/** Kết quả thao tác đơn giản (xoá khách/ảnh). */
export declare class RoomGuestActionResultDto {
    success: boolean;
}
//# sourceMappingURL=room-guest.dto.d.ts.map