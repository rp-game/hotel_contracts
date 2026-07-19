import { NatsResponse } from '../../common/nats-response.interface';
import { IdType } from '../enums/booking.enum';
import { RoomGuestDto } from '../dto/room-guest.dto';

/**
 * NATS Pattern: booking.room-guests.list
 * Trả tất cả khách của 1 phòng (gồm khách chính + phụ) kèm documents.
 */
export interface ListRoomGuestsNatsRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  bookingRoomId: string;
}

export type ListRoomGuestsNatsResponse = NatsResponse<RoomGuestDto[]>;

/**
 * NATS Pattern: booking.room-guests.upsert
 * Tạo (không có id) hoặc cập nhật (có id) 1 khách gắn bookingRoomId.
 * Khách thêm mới luôn isMainGuest=false. Upsert khách đầu tiên của phòng sẽ
 * backfill bookingRoomId cho khách chính của phòng đó.
 */
export interface UpsertRoomGuestNatsRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  bookingRoomId: string;
  /** Có id = update; không có = tạo mới. */
  id?: string;
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
}

export type UpsertRoomGuestNatsResponse = NatsResponse<RoomGuestDto>;

/**
 * NATS Pattern: booking.room-guests.remove
 * Chặn xoá khách chính. Trả về storageKeys của các ảnh để gateway xoá object S3.
 */
export interface RemoveRoomGuestNatsRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  guestId: string;
}

export interface RemoveRoomGuestData {
  guestId: string;
  storageKeys: string[];
}

export type RemoveRoomGuestNatsResponse = NatsResponse<RemoveRoomGuestData>;
