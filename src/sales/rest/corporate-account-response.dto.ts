/**
 * Corporate Account Response DTOs
 * Used for Swagger documentation and API responses
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CorporateAccountResponseDto {
  @ApiProperty({ description: 'Corporate account ID' })
  id: string;

  @ApiProperty({ description: 'Auto-generated account code (e.g. CA-001)' })
  accountCode: string;

  @ApiProperty({ description: 'Company name' })
  companyName: string;

  @ApiPropertyOptional({ description: 'Industry' })
  industry?: string;

  @ApiPropertyOptional({ description: 'Tax code' })
  taxCode?: string;

  @ApiPropertyOptional({ description: 'Address' })
  address?: string;

  @ApiPropertyOptional({ description: 'Contact person name' })
  contactPerson?: string;

  @ApiPropertyOptional({ description: 'Contact email' })
  contactEmail?: string;

  @ApiPropertyOptional({ description: 'Contact phone' })
  contactPhone?: string;

  @ApiPropertyOptional({ description: 'Sales person ID' })
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Sales person name' })
  salesPersonName?: string;

  @ApiPropertyOptional({ description: 'Payment method' })
  paymentMethod?: string;

  @ApiProperty({ description: 'Payment term in days' })
  paymentTermDays: number;

  @ApiPropertyOptional({ description: 'Credit limit' })
  creditLimit?: number;

  @ApiPropertyOptional({ description: 'Contract number' })
  contractNumber?: string;

  @ApiPropertyOptional({ description: 'Contract start date' })
  contractStartDate?: string;

  @ApiPropertyOptional({ description: 'Contract end date' })
  contractEndDate?: string;

  @ApiPropertyOptional({ description: 'Projected room nights per year' })
  projectedRoomNights?: number;

  @ApiProperty({ description: 'Status (ACTIVE, INACTIVE, SUSPENDED)' })
  status: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Contract status (DRAFT, ACTIVE, EXPIRED, RENEWED)' })
  contractStatus?: string;

  @ApiPropertyOptional({ description: 'Contract file URL' })
  contractFileUrl?: string;

  @ApiPropertyOptional({ description: 'Contract notes' })
  contractNotes?: string;

  @ApiPropertyOptional({ description: 'Days before contract end to send renewal reminder' })
  renewalReminderDays?: number;

  @ApiPropertyOptional({ description: 'Created by user name' })
  createdByName?: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: Date;
}

export class CorporateAccountListResponseDto {
  @ApiProperty({ description: 'Corporate accounts', type: [CorporateAccountResponseDto] })
  corporateAccounts: CorporateAccountResponseDto[];

  @ApiProperty({ description: 'Total count' })
  total: number;

  @ApiProperty({ description: 'Page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiProperty({ description: 'Total pages' })
  totalPages: number;
}
