/**
 * Travel Agent Response DTOs
 * Used for Swagger documentation and API responses
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TravelAgentResponseDto {
  @ApiProperty({ description: 'Travel agent ID' })
  id: string;

  @ApiProperty({ description: 'Auto-generated agent code (e.g. TA-001)' })
  agentCode: string;

  @ApiProperty({ description: 'Agent name' })
  agentName: string;

  @ApiPropertyOptional({ description: 'IATA number' })
  iataNumber?: string;

  @ApiPropertyOptional({ description: 'Tax code' })
  taxCode?: string;

  @ApiPropertyOptional({ description: 'Address' })
  address?: string;

  @ApiPropertyOptional({ description: 'Contact person name' })
  contactPerson?: string;

  @ApiPropertyOptional({ description: 'Email' })
  email?: string;

  @ApiPropertyOptional({ description: 'Phone' })
  phone?: string;

  @ApiProperty({ description: 'Commission rate' })
  commissionRate: number;

  @ApiProperty({ description: 'Commission type' })
  commissionType: string;

  @ApiProperty({ description: 'Payment term in days' })
  paymentTermDays: number;

  @ApiPropertyOptional({ description: 'Bank account number' })
  bankAccount?: string;

  @ApiPropertyOptional({ description: 'Bank name' })
  bankName?: string;

  @ApiPropertyOptional({ description: 'Contract number' })
  contractNumber?: string;

  @ApiPropertyOptional({ description: 'Contract start date' })
  contractStartDate?: string;

  @ApiPropertyOptional({ description: 'Contract end date' })
  contractEndDate?: string;

  @ApiProperty({ description: 'Status (ACTIVE, INACTIVE, SUSPENDED)' })
  status: string;

  @ApiPropertyOptional({ description: 'Sales person ID' })
  salesPersonId?: string;

  @ApiPropertyOptional({ description: 'Sales person name' })
  salesPersonName?: string;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Created by user name' })
  createdByName?: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: Date;
}

export class TravelAgentListResponseDto {
  @ApiProperty({ description: 'Travel agents', type: [TravelAgentResponseDto] })
  travelAgents: TravelAgentResponseDto[];

  @ApiProperty({ description: 'Total count' })
  total: number;

  @ApiProperty({ description: 'Page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiProperty({ description: 'Total pages' })
  totalPages: number;
}

export class CommissionRecordResponseDto {
  @ApiProperty({ description: 'Commission record ID' })
  id: string;

  @ApiProperty({ description: 'Travel agent ID' })
  travelAgentId: string;

  @ApiProperty({ description: 'Travel agent name' })
  travelAgentName: string;

  @ApiProperty({ description: 'Booking ID' })
  bookingId: string;

  @ApiProperty({ description: 'Booking code' })
  bookingCode: string;

  @ApiPropertyOptional({ description: 'Guest name' })
  guestName?: string;

  @ApiProperty({ description: 'Check-out date' })
  checkOutDate: string;

  @ApiProperty({ description: 'Commissionable amount (booking final amount)' })
  commissionableAmount: number;

  @ApiProperty({ description: 'Commission rate applied' })
  commissionRate: number;

  @ApiProperty({ description: 'Calculated commission amount' })
  commissionAmount: number;

  @ApiProperty({ description: 'Commission type used' })
  commissionType: string;

  @ApiProperty({ description: 'Status (PENDING, APPROVED, PAID, ON_HOLD, CANCELLED)' })
  status: string;

  @ApiPropertyOptional({ description: 'Paid date' })
  paidDate?: Date;

  @ApiPropertyOptional({ description: 'Payment reference' })
  paymentReference?: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;
}

export class CommissionRecordListResponseDto {
  @ApiProperty({ description: 'Commission records', type: [CommissionRecordResponseDto] })
  commissionRecords: CommissionRecordResponseDto[];

  @ApiProperty({ description: 'Total count' })
  total: number;

  @ApiProperty({ description: 'Page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiProperty({ description: 'Total pages' })
  totalPages: number;
}
