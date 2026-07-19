import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { IdType } from '../enums/booking.enum';
import { GuestDocumentDto } from './guest-document.dto';

/**
 * Khách trong 1 phòng (booking_guests theo bookingRoomId) kèm ảnh giấy tờ —
 * dùng chung cho REST (swagger response) + NATS. Quản lý khai báo tạm trú.
 */
export class RoomGuestDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  bookingId: string;

  @ApiProperty({ type: String, nullable: true })
  bookingRoomId: string | null;

  @ApiPropertyOptional({ type: String, nullable: true })
  guestId?: string | null;

  @ApiProperty()
  isMainGuest: boolean;

  @ApiProperty()
  fullName: string;

  @ApiPropertyOptional({ type: String, nullable: true })
  email?: string | null;

  @ApiPropertyOptional({ type: String, nullable: true })
  phone?: string | null;

  @ApiPropertyOptional({ enum: IdType, nullable: true })
  idType?: IdType | null;

  @ApiPropertyOptional({ type: String, nullable: true })
  idNumber?: string | null;

  @ApiPropertyOptional({ type: String, nullable: true, description: 'YYYY-MM-DD' })
  idIssueDate?: string | null;

  @ApiPropertyOptional({ type: String, nullable: true, description: 'YYYY-MM-DD' })
  idExpiryDate?: string | null;

  @ApiPropertyOptional({ type: String, nullable: true })
  nationality?: string | null;

  @ApiPropertyOptional({ type: String, nullable: true, description: 'YYYY-MM-DD' })
  dateOfBirth?: string | null;

  @ApiPropertyOptional({ type: String, nullable: true })
  gender?: string | null;

  @ApiPropertyOptional({ type: String, nullable: true })
  address?: string | null;

  @ApiProperty({ type: [GuestDocumentDto] })
  documents: GuestDocumentDto[];
}

/**
 * Body upsert khách (REST). tenantId/hotelId/bookingId/bookingRoomId lấy từ JWT +
 * path param ở gateway, KHÔNG nhận từ body (chống IDOR).
 */
export class UpsertRoomGuestBodyDto {
  @ApiPropertyOptional({ description: 'Có id = cập nhật; không có = tạo mới' })
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiProperty()
  @IsString()
  @MaxLength(100)
  fullName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(100)
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @ApiPropertyOptional({ enum: IdType })
  @IsOptional()
  @IsEnum(IdType)
  idType?: IdType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(50)
  idNumber?: string;

  @ApiPropertyOptional({ description: 'YYYY-MM-DD' })
  @IsOptional()
  @IsDateString()
  idIssueDate?: string;

  @ApiPropertyOptional({ description: 'YYYY-MM-DD' })
  @IsOptional()
  @IsDateString()
  idExpiryDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(50)
  nationality?: string;

  @ApiPropertyOptional({ description: 'YYYY-MM-DD' })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(10)
  gender?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  address?: string;
}

/** Kết quả thao tác đơn giản (xoá khách/ảnh). */
export class RoomGuestActionResultDto {
  @ApiProperty()
  success: boolean;
}
