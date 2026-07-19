import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IdType } from '../enums/booking.enum';

/** Mặt ảnh giấy tờ. */
export enum GuestDocumentSide {
  FRONT = 'FRONT',
  BACK = 'BACK',
  OTHER = 'OTHER',
}

/**
 * Ảnh giấy tờ (CCCD/hộ chiếu) của 1 khách — bản CLIENT-FACING (không có storageKey).
 * Dùng chung cho REST (swagger) + NATS response. storageKey là nội bộ, chỉ đi
 * trong request tạo và các NATS ref riêng (không lộ ra client).
 */
export class GuestDocumentDto {
  @ApiProperty({ description: 'GuestDocument ID' })
  id: string;

  @ApiProperty({ description: 'BookingGuest ID' })
  bookingGuestId: string;

  @ApiProperty()
  bookingId: string;

  @ApiProperty()
  bookingRoomId: string;

  @ApiProperty({ enum: GuestDocumentSide })
  side: GuestDocumentSide;

  @ApiPropertyOptional({ enum: IdType, nullable: true })
  docType?: IdType | null;

  @ApiProperty()
  mimeType: string;

  @ApiProperty()
  fileSize: number;

  @ApiProperty()
  uploadedBy: string;

  @ApiProperty({ description: 'ISO timestamp' })
  uploadedAt: string;
}
