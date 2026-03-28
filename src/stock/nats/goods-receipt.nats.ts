import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional, IsNumber, IsArray, ValidateNested, IsDateString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse, NatsPaginatedResponse } from '../../common';

// ─── Create Goods Receipt ───

export class GoodsReceiptItemDto {
  @ApiProperty()
  @IsUUID()
  itemId: string;

  @ApiPropertyOptional({ description: 'Base unit qty. Required if purchaseQty is not provided.' })
  @IsOptional()
  @IsNumber()
  @Min(0.0001)
  quantity?: number;

  @ApiPropertyOptional({ description: 'Qty in purchase unit (e.g. 3 thùng). Auto-converted to base units by service. Required if quantity is not provided.' })
  @IsOptional()
  @IsNumber()
  @Min(0.0001)
  purchaseQty?: number;

  @ApiProperty({ description: 'Price per purchase unit when purchaseQty is used, or price per base unit otherwise' })
  @IsNumber()
  @Min(0)
  unitPrice: number;

  @ApiPropertyOptional({ description: 'Expiry date for perishable items' })
  @IsOptional()
  @IsDateString()
  expiryDate?: string;
}

export class CreateGoodsReceiptRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  supplierId?: string;

  @ApiProperty()
  @IsDateString()
  receiptDate: string;

  @ApiPropertyOptional({ description: 'VAT rate: 0, 8, or 10 (%)' })
  @IsOptional()
  @IsNumber()
  vatRate?: number;

  @ApiPropertyOptional({ description: 'Supplier invoice serial' })
  @IsOptional()
  @IsString()
  invoiceSerial?: string;

  @ApiPropertyOptional({ description: 'Supplier invoice number' })
  @IsOptional()
  @IsString()
  invoiceNumber?: string;

  @ApiPropertyOptional({ description: 'Supplier invoice date' })
  @IsOptional()
  @IsDateString()
  invoiceDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  photoUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty()
  @IsUUID()
  receivedBy: string;

  @ApiPropertyOptional({ description: 'Staff name (denormalized)' })
  @IsOptional()
  @IsString()
  receivedByName?: string;

  @ApiPropertyOptional({ description: 'Target warehouse (auto-resolves to default if not provided)' })
  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @ApiProperty({ type: [GoodsReceiptItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GoodsReceiptItemDto)
  items: GoodsReceiptItemDto[];
}

export class GoodsReceiptItemResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  itemId: string;

  @ApiPropertyOptional()
  itemName?: string;

  @ApiPropertyOptional()
  itemCode?: string;

  @ApiProperty()
  quantity: number;

  @ApiPropertyOptional({ description: 'Original purchase qty (e.g. 3 thùng)' })
  purchaseQty?: number;

  @ApiPropertyOptional({ description: 'Purchase unit at time of receipt (e.g. "thùng")' })
  purchaseUnit?: string;

  @ApiProperty()
  unitPrice: number;

  @ApiProperty()
  totalPrice: number;

  @ApiPropertyOptional()
  expiryDate?: string;
}

export class GoodsReceiptResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  hotelId: string;

  @ApiProperty()
  receiptNumber: string;

  @ApiPropertyOptional()
  supplierId?: string;

  @ApiPropertyOptional()
  supplierName?: string;

  @ApiProperty()
  receiptDate: string;

  @ApiProperty()
  totalAmount: number;

  @ApiPropertyOptional()
  vatRate?: number;

  @ApiPropertyOptional()
  vatAmount?: number;

  @ApiPropertyOptional()
  invoiceSerial?: string;

  @ApiPropertyOptional()
  invoiceNumber?: string;

  @ApiPropertyOptional()
  invoiceDate?: string;

  @ApiPropertyOptional()
  photoUrl?: string;

  @ApiPropertyOptional()
  notes?: string;

  @ApiProperty()
  receivedBy: string;

  @ApiPropertyOptional()
  receivedByName?: string;

  @ApiPropertyOptional()
  warehouseId?: string;

  @ApiPropertyOptional()
  warehouseName?: string;

  @ApiProperty({ type: [GoodsReceiptItemResponse] })
  items: GoodsReceiptItemResponse[];

  @ApiProperty()
  createdAt: Date;
}

export type CreateGoodsReceiptNatsResponse = NatsResponse<GoodsReceiptResponse>;

// ─── Find Goods Receipts ───

export class FindGoodsReceiptsRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dateTo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  supplierId?: string;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ default: 20 })
  @IsOptional()
  @IsNumber()
  limit?: number;
}

export type FindGoodsReceiptsNatsResponse = NatsPaginatedResponse<GoodsReceiptResponse>;

// ─── Find One Goods Receipt ───

export class FindOneGoodsReceiptRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty()
  @IsUUID()
  id: string;
}

export type FindOneGoodsReceiptNatsResponse = NatsResponse<GoodsReceiptResponse>;
