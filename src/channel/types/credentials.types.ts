import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsObject } from 'class-validator';

export class ProviderCredentials {
  @ApiPropertyOptional({ description: 'API key' })
  @IsOptional()
  @IsString()
  api_key?: string;

  @ApiPropertyOptional({ description: 'API secret' })
  @IsOptional()
  @IsString()
  api_secret?: string;

  @ApiPropertyOptional({ description: 'Username for basic auth' })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiPropertyOptional({ description: 'Password for basic auth' })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiPropertyOptional({ description: 'Provider property/hotel ID' })
  @IsOptional()
  @IsString()
  property_id?: string;

  @ApiPropertyOptional({
    description: 'Provider-specific fields (e.g. client_id, client_secret)',
    type: 'object',
    additionalProperties: true,
  })
  @IsOptional()
  @IsObject()
  extra?: Record<string, any>;
}

export class CredentialValidationResult {
  isValid: boolean;
  message?: string;
  testedAt?: string;
  provider?: string;
}
