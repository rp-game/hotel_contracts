/**
 * Folio Group REST DTOs
 *
 * Request classes with @ApiProperty + class-validator (API Gateway validation).
 * Response classes mirror the NATS data shapes for Swagger.
 * Note: tenantId/hotelId are NOT included — injected from JWT by the controller.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsUUID,
  IsArray,
  ArrayNotEmpty,
  IsEnum,
  Min,
  MaxLength,
  ValidateIf,
} from 'class-validator';
import { PaymentMethod } from '../../payment/enums/payment.enum';
import { CustomerType, InvoicePaymentMethod } from '../../einvoice/enums';

// =================== Requests ===================

export class CreateFolioGroupDto {
  @ApiProperty({ description: 'Booking IDs to link into the folio group', type: [String] })
  @IsArray()
  @ArrayNotEmpty()
  @IsUUID('4', { each: true })
  bookingIds: string[];

  @ApiPropertyOptional({ description: 'Optional display name for the folio group' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  name?: string;
}

export class AddBookingToFolioGroupDto {
  @ApiProperty({ description: 'Booking ID to add to the folio group' })
  @IsUUID('4')
  bookingId: string;
}

export class CollectFolioDto {
  @ApiProperty({ description: 'Combined amount to collect (allocated fill-order across members)', minimum: 1 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty({ description: 'Payment method', enum: PaymentMethod })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiPropertyOptional({ description: 'Payer name' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  payerName?: string;

  @ApiPropertyOptional({ description: 'Payment reference' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  reference?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  notes?: string;
}

export class ExportFolioGroupInvoiceDto {
  @ApiProperty({ description: 'Customer type', enum: CustomerType })
  @IsEnum(CustomerType)
  customerType: CustomerType;

  // BUSINESS bắt buộc name+taxCode+address; INDIVIDUAL bắt buộc buyerName
  @ApiPropertyOptional({ description: 'Tên công ty (bắt buộc khi BUSINESS)' })
  @ValidateIf((o) => o.customerType === CustomerType.BUSINESS)
  @IsString()
  @IsNotEmpty()
  @MaxLength(400)
  customerName?: string;

  @ApiPropertyOptional({ description: 'MST (bắt buộc khi BUSINESS)' })
  @ValidateIf((o) => o.customerType === CustomerType.BUSINESS)
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  customerTaxCode?: string;

  @ApiPropertyOptional({ description: 'Địa chỉ (bắt buộc khi BUSINESS)' })
  @ValidateIf((o) => o.customerType === CustomerType.BUSINESS)
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  customerAddress?: string;

  @ApiPropertyOptional({ description: 'Tên người mua (bắt buộc khi INDIVIDUAL)' })
  @ValidateIf((o) => o.customerType === CustomerType.INDIVIDUAL)
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  buyerName?: string;

  @ApiPropertyOptional({ description: 'Email' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  customerEmail?: string;

  @ApiPropertyOptional({ description: 'Số điện thoại' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  customerPhone?: string;

  @ApiProperty({ description: 'Hình thức thanh toán', enum: InvoicePaymentMethod })
  @IsEnum(InvoicePaymentMethod)
  paymentMethod: InvoicePaymentMethod;

  @ApiPropertyOptional({ description: 'Ngày lập (YYYY-MM-DD), mặc định hôm nay' })
  @IsOptional()
  @IsString()
  arisingDate?: string;
}

// =================== Responses (Swagger) ===================

export class FolioGroupBookingItemDto {
  @ApiProperty() bookingId: string;
  @ApiProperty() bookingCode: string;
  @ApiProperty() guestName: string;
  @ApiProperty() roomTypeName: string;
  @ApiPropertyOptional({ type: String, nullable: true }) roomNumber: string | null;
  @ApiProperty() checkInDate: string;
  @ApiProperty() checkOutDate: string;
  @ApiProperty() status: string;
  @ApiProperty({ description: 'finalAmount ?? grossAmount' }) amountDue: number;
  @ApiProperty() paidAmount: number;
  @ApiProperty() balance: number;
}

export class FolioGroupSummarySectionDto {
  @ApiProperty() totalBookings: number;
  @ApiProperty() totalDue: number;
  @ApiProperty() totalPaid: number;
  @ApiProperty() totalBalance: number;
}

export class FolioGroupFolioDto {
  @ApiProperty() folioGroupId: string;
  @ApiProperty() code: string;
  @ApiPropertyOptional({ type: String, nullable: true }) name: string | null;
  @ApiProperty() hotelId: string;
  @ApiProperty({ enum: ['OPEN', 'SETTLED'] }) derivedStatus: 'OPEN' | 'SETTLED';
  @ApiProperty({ type: [FolioGroupBookingItemDto] }) bookings: FolioGroupBookingItemDto[];
  @ApiProperty({ type: FolioGroupSummarySectionDto }) summary: FolioGroupSummarySectionDto;
}

export class FolioGroupListItemDto {
  @ApiProperty() folioGroupId: string;
  @ApiProperty() code: string;
  @ApiPropertyOptional({ type: String, nullable: true }) name: string | null;
  @ApiProperty() memberCount: number;
  @ApiProperty() totalDue: number;
  @ApiProperty() totalPaid: number;
  @ApiProperty() totalBalance: number;
  @ApiProperty({ enum: ['OPEN', 'SETTLED'] }) derivedStatus: 'OPEN' | 'SETTLED';
  @ApiProperty() createdAt: string;
}
