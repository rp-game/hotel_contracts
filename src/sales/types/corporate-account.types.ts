/**
 * Corporate Account Types
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CorporateAccountSummary {
  @ApiProperty({ description: 'Corporate account ID' })
  id: string;

  @ApiProperty({ description: 'Account code' })
  accountCode: string;

  @ApiProperty({ description: 'Company name' })
  companyName: string;

  @ApiPropertyOptional({ description: 'Contact person' })
  contactPerson?: string;

  @ApiPropertyOptional({ description: 'Contact phone' })
  contactPhone?: string;

  @ApiPropertyOptional({ description: 'Contact email' })
  contactEmail?: string;

  @ApiPropertyOptional({ description: 'Sales person name' })
  salesPersonName?: string;

  @ApiProperty({ description: 'Status' })
  status: string;
}

export class CorporateAccountDetails extends CorporateAccountSummary {
  @ApiPropertyOptional({ description: 'Industry' })
  industry?: string;

  @ApiPropertyOptional({ description: 'Tax code' })
  taxCode?: string;

  @ApiPropertyOptional({ description: 'Address' })
  address?: string;

  @ApiPropertyOptional({ description: 'Sales person ID' })
  salesPersonId?: string;

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

  @ApiPropertyOptional({ description: 'Projected room nights' })
  projectedRoomNights?: number;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Created by name' })
  createdByName?: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: Date;
}
