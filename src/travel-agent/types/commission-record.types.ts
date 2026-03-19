/**
 * Commission Record Types
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CommissionRecordSummary {
  @ApiProperty({ description: 'Commission record ID' })
  id: string;

  @ApiProperty({ description: 'Travel agent ID' })
  travelAgentId: string;

  @ApiProperty({ description: 'Booking ID' })
  bookingId: string;

  @ApiProperty({ description: 'Booking code' })
  bookingCode: string;

  @ApiPropertyOptional({ description: 'Guest name' })
  guestName?: string;

  @ApiProperty({ description: 'Check-out date' })
  checkOutDate: string;

  @ApiProperty({ description: 'Commissionable amount' })
  commissionableAmount: number;

  @ApiProperty({ description: 'Commission rate' })
  commissionRate: number;

  @ApiProperty({ description: 'Commission amount' })
  commissionAmount: number;

  @ApiProperty({ description: 'Commission type' })
  commissionType: string;

  @ApiProperty({ description: 'Status' })
  status: string;

  @ApiPropertyOptional({ description: 'Paid date' })
  paidDate?: Date;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;
}
