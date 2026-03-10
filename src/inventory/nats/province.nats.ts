/**
 * Province NATS Contract
 *
 * Pattern: inventory.provinces.listByChain
 *
 * Returns provinces that have active hotels in a given chain.
 *
 * Handler: inventory-service
 * Called by: webshop
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

// ============================================================================
// REQUEST
// ============================================================================

export class ListProvincesByChainRequest {
  @ApiProperty({ description: 'Chain ID (from hotel entity chainId)' })
  @IsUUID()
  chainId: string;
}

// ============================================================================
// RESPONSE
// ============================================================================

export class ProvinceDto {
  @ApiProperty({ description: 'Province ID', example: 1 })
  id: number;

  @ApiProperty({ description: 'Province name (Vietnamese)', example: 'Hà Nội' })
  name: string;

  @ApiProperty({ description: 'Province name (English)', example: 'Ha Noi' })
  nameEn: string;

  @ApiProperty({ description: 'Province code', example: 'HN' })
  code: string;

  @ApiPropertyOptional({ description: 'Region', example: 'Bắc Bộ' })
  region?: string;
}
