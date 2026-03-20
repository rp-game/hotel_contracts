import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { ARTransactionType } from '../enums/sales.enum';

export class CreateARTransactionDto {
  @ApiProperty({ description: 'Hotel ID where this transaction applies' })
  @IsUUID()
  @IsNotEmpty()
  hotelId: string;

  @ApiProperty({
    description: 'Transaction type (PAYMENT, ADJUSTMENT, or WRITE_OFF only — CHARGE is auto-generated)',
    enum: [ARTransactionType.PAYMENT, ARTransactionType.ADJUSTMENT, ARTransactionType.WRITE_OFF],
  })
  @IsEnum([ARTransactionType.PAYMENT, ARTransactionType.ADJUSTMENT, ARTransactionType.WRITE_OFF], {
    message: 'transactionType must be PAYMENT, ADJUSTMENT, or WRITE_OFF. CHARGE is auto-generated on checkout.',
  })
  @IsNotEmpty()
  transactionType: ARTransactionType;

  @ApiProperty({ description: 'Transaction amount (positive value)', minimum: 0 })
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiPropertyOptional({ description: 'Reference number (receipt, check number, etc.)' })
  @IsString()
  @IsOptional()
  referenceNumber?: string;

  @ApiPropertyOptional({ description: 'Description / notes' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Transaction date (YYYY-MM-DD)' })
  @IsString()
  @IsNotEmpty()
  transactionDate: string;
}

export class FindARTransactionsQueryDto {
  @ApiPropertyOptional({ description: 'Filter by hotel' })
  @IsUUID()
  @IsOptional()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by transaction type', enum: ARTransactionType })
  @IsEnum(ARTransactionType)
  @IsOptional()
  transactionType?: ARTransactionType;

  @ApiPropertyOptional({ description: 'Date from (YYYY-MM-DD)' })
  @IsString()
  @IsOptional()
  dateFrom?: string;

  @ApiPropertyOptional({ description: 'Date to (YYYY-MM-DD)' })
  @IsString()
  @IsOptional()
  dateTo?: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  @IsOptional()
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 20 })
  @IsOptional()
  limit?: number;
}

export class GenerateStatementQueryDto {
  @ApiProperty({ description: 'Statement start date (YYYY-MM-DD)' })
  @IsString()
  @IsNotEmpty()
  dateFrom: string;

  @ApiProperty({ description: 'Statement end date (YYYY-MM-DD)' })
  @IsString()
  @IsNotEmpty()
  dateTo: string;
}
