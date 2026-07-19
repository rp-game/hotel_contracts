import { NatsResponse } from '../../common/nats-response.interface';
import { IdType } from '../enums/booking.enum';

/**
 * Ảnh giấy tờ (CCCD/hộ chiếu...) của 1 khách trong phòng. Lưu ở booking-service
 * dưới dạng metadata + storageKey; file thật nằm ở private bucket do gateway quản.
 */
export enum GuestDocumentSide {
  FRONT = 'FRONT',
  BACK = 'BACK',
  OTHER = 'OTHER',
}

export interface GuestDocumentDto {
  id: string;
  bookingGuestId: string;
  bookingId: string;
  bookingRoomId: string;
  side: GuestDocumentSide;
  docType?: IdType | null;
  /** Key object trên private bucket — KHÔNG phải URL public. */
  storageKey: string;
  mimeType: string;
  fileSize: number;
  uploadedBy: string;
  uploadedAt: string;
}

/**
 * NATS Pattern: booking.guest-documents.create
 * Gateway đã PUT file lên private bucket, gọi pattern này để lưu metadata.
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

export type GetGuestDocumentNatsResponse = NatsResponse<GuestDocumentDto>;

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
