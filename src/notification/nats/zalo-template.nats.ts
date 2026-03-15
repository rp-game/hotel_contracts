import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

// ============= ZALO TEMPLATE LIST =============

export class ListZaloTemplatesNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Offset for pagination', default: 0 })
  @IsOptional()
  @IsNumber()
  offset?: number;

  @ApiPropertyOptional({ description: 'Limit for pagination', default: 100 })
  @IsOptional()
  @IsNumber()
  limit?: number;

  @ApiPropertyOptional({ description: 'Filter by status (ENABLE, PENDING_REVIEW, REJECT, DISABLE)' })
  @IsOptional()
  @IsString()
  status?: string;
}

export class ZaloTemplateListItemDto {
  @ApiProperty({ description: 'Zalo template ID' })
  templateId: number;

  @ApiProperty({ description: 'Template name' })
  templateName: string;

  @ApiProperty({ description: 'Creation timestamp (ms)' })
  createdTime: number;

  @ApiProperty({ description: 'Template status (ENABLE, PENDING_REVIEW, REJECT, DISABLE)' })
  status: string;

  @ApiPropertyOptional({ description: 'Template quality rating' })
  templateQuality?: string;
}

export class ListZaloTemplatesNatsResponse {
  @ApiProperty({ description: 'Template list', type: [ZaloTemplateListItemDto] })
  data: ZaloTemplateListItemDto[];

  @ApiProperty({ description: 'Total count' })
  total: number;
}

// ============= ZALO TEMPLATE DETAIL =============

export class GetZaloTemplateDetailNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiProperty({ description: 'Zalo template ID' })
  @IsString()
  templateId: string;
}

export class ZaloTemplateParamDto {
  @ApiProperty({ description: 'Parameter name' })
  name: string;

  @ApiProperty({ description: 'Whether the parameter is required' })
  require: boolean;

  @ApiProperty({ description: 'Parameter type' })
  type: string;

  @ApiPropertyOptional({ description: 'Max length' })
  maxLength?: number;

  @ApiPropertyOptional({ description: 'Min length' })
  minLength?: number;

  @ApiPropertyOptional({ description: 'Accepted values' })
  acceptedValues?: string;
}

export class ZaloTemplateButtonDto {
  @ApiProperty({ description: 'Button title' })
  title: string;

  @ApiProperty({ description: 'Button type (1=URL, 2=Phone, 3=Deeplink)' })
  type: number;

  @ApiPropertyOptional({ description: 'Button payload/URL' })
  payload?: string;
}

export class ZaloTemplateDetailDto {
  @ApiProperty({ description: 'Template ID' })
  templateId: number;

  @ApiProperty({ description: 'Template name' })
  templateName: string;

  @ApiProperty({ description: 'Template status' })
  status: string;

  @ApiPropertyOptional({ description: 'Template parameters', type: [ZaloTemplateParamDto] })
  listParams?: ZaloTemplateParamDto[];

  @ApiPropertyOptional({ description: 'Template buttons/CTAs', type: [ZaloTemplateButtonDto] })
  listButtons?: ZaloTemplateButtonDto[];

  @ApiPropertyOptional({ description: 'Preview URL' })
  previewUrl?: string;

  @ApiPropertyOptional({ description: 'Template tag/category' })
  templateTag?: string;

  @ApiPropertyOptional({ description: 'Price per phone number (VND)' })
  price?: number;

  @ApiPropertyOptional({ description: 'Timeout in seconds' })
  timeout?: number;
}

export class GetZaloTemplateDetailNatsResponse {
  @ApiProperty({ description: 'Template detail', type: ZaloTemplateDetailDto })
  data: ZaloTemplateDetailDto;
}

// ============= ZALO TEMPLATE SAMPLE DATA =============

export class GetZaloTemplateSampleDataNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiProperty({ description: 'Zalo template ID' })
  @IsString()
  templateId: string;
}

export class GetZaloTemplateSampleDataNatsResponse {
  @ApiProperty({ description: 'Sample template data', type: Object })
  data: Record<string, any>;
}
