/**
 * Sales Activity Response DTOs
 * Used for Swagger documentation and API responses
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SalesActivityResponseDto {
  @ApiProperty({ description: 'Activity ID' })
  id: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Sales person ID' })
  salesPersonId: string;

  @ApiProperty({ description: 'Sales person name' })
  salesPersonName: string;

  @ApiProperty({ description: 'Activity type' })
  activityType: string;

  @ApiProperty({ description: 'Subject/title' })
  subject: string;

  @ApiPropertyOptional({ description: 'Description' })
  description?: string;

  @ApiProperty({ description: 'Activity date' })
  activityDate: string;

  @ApiPropertyOptional({ description: 'Corporate account ID' })
  corporateAccountId?: string;

  @ApiPropertyOptional({ description: 'Travel agent ID' })
  travelAgentId?: string;

  @ApiPropertyOptional({ description: 'Sales lead ID' })
  leadId?: string;

  @ApiPropertyOptional({ description: 'Contact person name' })
  contactName?: string;

  @ApiPropertyOptional({ description: 'Outcome/result' })
  outcome?: string;

  @ApiPropertyOptional({ description: 'Follow-up date' })
  followUpDate?: string;

  @ApiProperty({ description: 'Status' })
  status: string;

  @ApiPropertyOptional({ description: 'Created by user name' })
  createdByName?: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: Date;
}

export class SalesActivityListResponseDto {
  @ApiProperty({ description: 'Sales activities', type: [SalesActivityResponseDto] })
  activities: SalesActivityResponseDto[];

  @ApiProperty({ description: 'Total count' })
  total: number;

  @ApiProperty({ description: 'Page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiProperty({ description: 'Total pages' })
  totalPages: number;
}
