import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsOptional, IsDateString, IsEnum, IsString } from 'class-validator';
import { NatsResponse } from '../../common';
import { ItemCategory } from '../enums';

// ─── In-Out Balance Report (Bao cao xuat nhap ton) ───

export class InOutBalanceRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty()
  @IsDateString()
  dateFrom: string;

  @ApiProperty()
  @IsDateString()
  dateTo: string;

  @ApiPropertyOptional({ enum: ItemCategory })
  @IsOptional()
  @IsEnum(ItemCategory)
  category?: ItemCategory;

  @ApiPropertyOptional({ description: 'Filter report by specific warehouse' })
  @IsOptional()
  @IsString()
  warehouseId?: string;
}

export class InOutBalanceItemRow {
  @ApiProperty()
  itemId: string;

  @ApiProperty()
  itemCode: string;

  @ApiProperty()
  itemName: string;

  @ApiProperty()
  unit: string;

  @ApiProperty({ enum: ItemCategory })
  category: ItemCategory;

  @ApiProperty({ description: 'Stock at beginning of period' })
  openingStock: number;

  @ApiProperty({ description: 'Total quantity received in period' })
  totalIn: number;

  @ApiProperty({ description: 'Total quantity issued in period' })
  totalOut: number;

  @ApiProperty({ description: 'Stock at end of period' })
  closingStock: number;

  @ApiProperty({ description: 'Closing value = closingStock x averageCostPrice' })
  closingValue: number;

  @ApiProperty()
  averageCostPrice: number;
}

export class InOutBalanceCategoryGroup {
  @ApiProperty({ enum: ItemCategory })
  category: ItemCategory;

  @ApiProperty({ type: [InOutBalanceItemRow] })
  items: InOutBalanceItemRow[];

  @ApiProperty()
  categoryTotalValue: number;
}

export class InOutBalanceResponse {
  @ApiProperty()
  dateFrom: string;

  @ApiProperty()
  dateTo: string;

  @ApiProperty({ type: [InOutBalanceCategoryGroup] })
  groups: InOutBalanceCategoryGroup[];

  @ApiProperty()
  grandTotalValue: number;
}

export type InOutBalanceNatsResponse = NatsResponse<InOutBalanceResponse>;

// ─── Low-Stock Report (Canh bao het hang) ───

export class LowStockReportRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ enum: ItemCategory })
  @IsOptional()
  @IsEnum(ItemCategory)
  category?: ItemCategory;
}

export class LowStockReportItem {
  @ApiProperty() itemId: string;
  @ApiProperty() itemCode: string;
  @ApiProperty() itemName: string;
  @ApiProperty() unit: string;
  @ApiProperty({ enum: ItemCategory }) category: ItemCategory;
  @ApiProperty() currentStock: number;
  @ApiProperty() reorderLevel: number;
  @ApiProperty() averageCostPrice: number;
  @ApiProperty({ description: 'currentStock × averageCostPrice' }) stockValue: number;
  @ApiPropertyOptional({ description: 'Estimated days of supply based on recent consumption' }) daysOfSupply?: number;
  @ApiPropertyOptional() supplierName?: string;
  @ApiPropertyOptional() supplierPhone?: string;
}

export class LowStockReportResponse {
  @ApiProperty({ type: [LowStockReportItem] })
  items: LowStockReportItem[];

  @ApiProperty()
  totalCount: number;

  @ApiProperty({ description: 'Total value of low-stock items' })
  totalValue: number;
}

export type LowStockReportNatsResponse = NatsResponse<LowStockReportResponse>;

// ─── Cost-per-Room-Night Report (Chi phi vat tu / dem phong) ───

export class CostPerRoomNightRequest {
  @ApiProperty()
  @IsUUID()
  tenantId: string;

  @ApiProperty()
  @IsUUID()
  hotelId: string;

  @ApiProperty()
  @IsDateString()
  dateFrom: string;

  @ApiProperty()
  @IsDateString()
  dateTo: string;

  @ApiPropertyOptional({ description: 'Filter by stock issue type' })
  @IsOptional()
  @IsString()
  issueType?: string;
}

export class CostPerRoomNightCategoryItem {
  @ApiProperty({ description: 'Issue type (ROOM_AMENITY, MINIBAR_CONSUMPTION, HOUSEKEEPING, etc.)' })
  issueType: string;

  @ApiProperty()
  totalCost: number;

  @ApiPropertyOptional()
  costPerRoomNight?: number;
}

export class CostPerRoomNightResponse {
  @ApiProperty() dateFrom: string;
  @ApiProperty() dateTo: string;
  @ApiProperty({ description: 'Total occupied room nights in period' }) roomNights: number;
  @ApiProperty({ description: 'Total stock issue cost in period' }) totalStockCost: number;
  @ApiProperty({ description: 'totalStockCost / roomNights' }) costPerRoomNight: number;
  @ApiProperty({ type: [CostPerRoomNightCategoryItem] }) byIssueType: CostPerRoomNightCategoryItem[];
}

export type CostPerRoomNightNatsResponse = NatsResponse<CostPerRoomNightResponse>;
