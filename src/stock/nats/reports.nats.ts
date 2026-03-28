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

// ─── Department Cost Report (Chi phi bo phan) ───

export class DepartmentCostRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiProperty() @IsDateString() dateFrom: string;
  @ApiProperty() @IsDateString() dateTo: string;
  @ApiPropertyOptional() @IsOptional() @IsString() department?: string;
}

export class DepartmentCostItem {
  @ApiProperty({ description: '"Không xác định" when department is null' })
  department: string;

  @ApiProperty()
  issueType: string;

  @ApiProperty()
  totalCost: number;

  @ApiProperty()
  issueCount: number;
}

export class DepartmentCostResponse {
  @ApiProperty() dateFrom: string;
  @ApiProperty() dateTo: string;
  @ApiProperty({ type: [DepartmentCostItem] }) items: DepartmentCostItem[];
  @ApiProperty() totalCost: number;
}

export type DepartmentCostNatsResponse = NatsResponse<DepartmentCostResponse>;

// ─── Movement Detail Report (Lich su xuat nhap) ───

export class MovementDetailRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiProperty() @IsDateString() dateFrom: string;
  @ApiProperty() @IsDateString() dateTo: string;
  @ApiPropertyOptional() @IsOptional() @IsString() itemId?: string;
  @ApiPropertyOptional({ description: 'RECEIPT | ISSUE | ADJUSTMENT | TRANSFER' })
  @IsOptional() @IsString() movementType?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() warehouseId?: string;
  @ApiPropertyOptional({ default: 1 }) @IsOptional() page?: number;
  @ApiPropertyOptional({ default: 50 }) @IsOptional() limit?: number;
}

export class MovementDetailItem {
  @ApiProperty() date: string;
  @ApiProperty() movementType: string;
  @ApiProperty() documentNumber: string;
  @ApiProperty() itemId: string;
  @ApiProperty() itemCode: string;
  @ApiProperty() itemName: string;
  @ApiProperty() unit: string;
  @ApiProperty() quantityIn: number;
  @ApiProperty() quantityOut: number;
  @ApiProperty() unitPrice: number;
  @ApiProperty() totalAmount: number;
  @ApiPropertyOptional() warehouseName?: string;
  @ApiPropertyOptional() supplierName?: string;
  @ApiPropertyOptional() department?: string;
  @ApiPropertyOptional() notes?: string;
}

export class MovementDetailResponse {
  @ApiProperty() dateFrom: string;
  @ApiProperty() dateTo: string;
  @ApiProperty({ type: [MovementDetailItem] }) items: MovementDetailItem[];
  @ApiProperty() total: number;
  @ApiProperty() page: number;
  @ApiProperty() limit: number;
}

export type MovementDetailNatsResponse = NatsResponse<MovementDetailResponse>;

// ─── Supplier Purchase History (Mua hang NCC) ───

export class SupplierHistoryRequest {
  @ApiProperty() @IsUUID() tenantId: string;
  @ApiProperty() @IsUUID() hotelId: string;
  @ApiProperty() @IsDateString() dateFrom: string;
  @ApiProperty() @IsDateString() dateTo: string;
  @ApiPropertyOptional() @IsOptional() @IsString() supplierId?: string;
}

export class SupplierHistoryItem {
  @ApiProperty() supplierId: string;
  @ApiProperty() supplierName: string;
  @ApiProperty() receiptCount: number;
  @ApiProperty() totalAmount: number;
  @ApiProperty() totalVat: number;
  @ApiPropertyOptional() lastReceiptDate?: string;
}

export class SupplierHistoryResponse {
  @ApiProperty() dateFrom: string;
  @ApiProperty() dateTo: string;
  @ApiProperty({ type: [SupplierHistoryItem] }) items: SupplierHistoryItem[];
  @ApiProperty() totalAmount: number;
}

export type SupplierHistoryNatsResponse = NatsResponse<SupplierHistoryResponse>;
