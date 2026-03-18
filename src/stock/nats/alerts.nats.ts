import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { NatsResponse } from '../../common';

// ─── Low Stock Alerts ───

export class GetLowStockAlertsRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;
}

export class LowStockAlertItem {
  @ApiProperty()
  itemId: string;

  @ApiProperty()
  itemCode: string;

  @ApiProperty()
  itemName: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  currentStock: number;

  @ApiProperty()
  reorderLevel: number;

  @ApiProperty()
  unit: string;

  @ApiPropertyOptional({ description: 'Preferred supplier name' })
  supplierName?: string;

  @ApiPropertyOptional({ description: 'Preferred supplier phone' })
  supplierPhone?: string;
}

export class LowStockAlertsResponse {
  @ApiProperty({ type: [LowStockAlertItem] })
  items: LowStockAlertItem[];

  @ApiProperty()
  totalCount: number;
}

export type GetLowStockAlertsNatsResponse = NatsResponse<LowStockAlertsResponse>;

// ─── Expiry Alerts ───

export class GetExpiryAlertsRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;
}

export class ExpiryAlertItem {
  @ApiProperty()
  itemId: string;

  @ApiProperty()
  itemCode: string;

  @ApiProperty()
  itemName: string;

  @ApiProperty()
  expiryDate: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  goodsReceiptId: string;

  @ApiProperty()
  goodsReceiptNumber: string;

  @ApiProperty({ description: 'Days until expiry (negative = already expired)' })
  daysUntilExpiry: number;
}

export class ExpiryAlertsResponse {
  @ApiProperty({ type: [ExpiryAlertItem] })
  items: ExpiryAlertItem[];

  @ApiProperty()
  totalCount: number;
}

export type GetExpiryAlertsNatsResponse = NatsResponse<ExpiryAlertsResponse>;
