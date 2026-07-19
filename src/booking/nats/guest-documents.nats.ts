import { NatsResponse } from '../../common/nats-response.interface';
import { IdType } from '../enums/booking.enum';
import { GuestDocumentDto, GuestDocumentSide } from '../dto/guest-document.dto';

/**
 * NATS Pattern: booking.guest-documents.create
 * Gateway đã PUT file lên private bucket, gọi pattern này để lưu metadata.
 * storageKey là request-only (nội bộ), KHÔNG nằm trong GuestDocumentDto trả client.
 */
export interface CreateGuestDocumentNatsRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  bookingRoomId: string;
  bookingGuestId: string;
  side: GuestDocumentSide;
  docType?: IdType | null;
  storageKey: string;
  mimeType: string;
  fileSize: number;
  uploadedBy: string;
}

export type CreateGuestDocumentNatsResponse = NatsResponse<GuestDocumentDto>;

/** Tham chiếu nội bộ để gateway stream/xoá object — KHÔNG lộ ra client. */
export interface GuestDocumentStorageRef {
  documentId: string;
  storageKey: string;
  mimeType: string;
}

/**
 * NATS Pattern: booking.guest-documents.get
 * Resolve documentId → storageKey/mimeType (scope theo tenant/hotel/booking) để
 * gateway stream ảnh. Client KHÔNG bao giờ cầm storageKey trực tiếp.
 */
export interface GetGuestDocumentNatsRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  documentId: string;
}

export type GetGuestDocumentNatsResponse = NatsResponse<GuestDocumentStorageRef>;

/**
 * NATS Pattern: booking.guest-documents.remove
 * Trả về storageKey để gateway xoá object trên S3 (đồng bộ).
 */
export interface RemoveGuestDocumentNatsRequest {
  tenantId: string;
  hotelId: string;
  documentId: string;
}

export interface RemoveGuestDocumentData {
  documentId: string;
  storageKey: string;
}

export type RemoveGuestDocumentNatsResponse = NatsResponse<RemoveGuestDocumentData>;
