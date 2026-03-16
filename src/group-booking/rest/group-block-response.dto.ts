/**
 * Group Block Response DTOs
 *
 * Wrapper classes for REST API responses with Swagger documentation.
 */

import { ApiProperty } from '@nestjs/swagger';
import { GroupBlockSummary, GroupBlockDetails } from '../types/group-block.types';

/**
 * Paginated list response for group blocks
 */
export class GroupBlockListResponseDto {
  @ApiProperty({ description: 'Array of group block summaries', type: [GroupBlockSummary] })
  data: GroupBlockSummary[];

  @ApiProperty({ description: 'Total number of group blocks matching filters', example: 100 })
  total: number;

  @ApiProperty({ description: 'Current page number (1-indexed)', example: 1 })
  page: number;

  @ApiProperty({ description: 'Number of items per page', example: 10 })
  limit: number;

  @ApiProperty({ description: 'Total number of pages', example: 10 })
  totalPages: number;
}

/**
 * Single group block response wrapper
 */
export class GroupBlockResponseDto {
  @ApiProperty({ description: 'Group block details', type: GroupBlockDetails })
  data: GroupBlockDetails;
}
