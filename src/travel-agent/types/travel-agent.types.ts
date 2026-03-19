/**
 * Travel Agent Types
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TravelAgentSummary {
  @ApiProperty({ description: 'Travel agent ID' })
  id: string;

  @ApiProperty({ description: 'Agent code' })
  agentCode: string;

  @ApiProperty({ description: 'Agent name' })
  agentName: string;

  @ApiPropertyOptional({ description: 'Contact person' })
  contactPerson?: string;

  @ApiPropertyOptional({ description: 'Phone' })
  phone?: string;

  @ApiPropertyOptional({ description: 'Email' })
  email?: string;

  @ApiProperty({ description: 'Commission rate' })
  commissionRate: number;

  @ApiProperty({ description: 'Commission type' })
  commissionType: string;

  @ApiProperty({ description: 'Status' })
  status: string;
}

export class TravelAgentDetails extends TravelAgentSummary {
  @ApiPropertyOptional({ description: 'IATA number' })
  iataNumber?: string;

  @ApiPropertyOptional({ description: 'Tax code' })
  taxCode?: string;

  @ApiPropertyOptional({ description: 'Address' })
  address?: string;

  @ApiProperty({ description: 'Payment term in days' })
  paymentTermDays: number;

  @ApiPropertyOptional({ description: 'Bank account' })
  bankAccount?: string;

  @ApiPropertyOptional({ description: 'Bank name' })
  bankName?: string;

  @ApiPropertyOptional({ description: 'Contract number' })
  contractNumber?: string;

  @ApiPropertyOptional({ description: 'Contract start date' })
  contractStartDate?: string;

  @ApiPropertyOptional({ description: 'Contract end date' })
  contractEndDate?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Created by name' })
  createdByName?: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: Date;
}
