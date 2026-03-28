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
