/**
 * Provider REST API DTOs
 *
 * Used by API Gateway for provider configuration endpoints
 * These are class-based DTOs with @ApiProperty decorators for Swagger
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsBoolean, IsObject, IsArray, IsNumber } from 'class-validator';
import { ProviderType } from '../enums/provider-type.enum';
import { ChainConfigurationDto } from '../types/chain-config.types';

/**
 * Create Provider Configuration DTO
 * Used for POST /channel-management/providers
 */
export class CreateProviderConfigDto {
  @ApiProperty({ description: 'Provider type', enum: ProviderType })
  @IsEnum(ProviderType)
  providerType: ProviderType;

  @ApiProperty({ description: 'Provider display name' })
  @IsString()
  providerName: string;

  @ApiPropertyOptional({ description: 'Tenant ID (auto-injected from req.user if not provided)' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID (auto-injected from req.user if not provided)' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiProperty({ description: 'Provider credentials (structure varies by provider type)' })
  @IsObject()
  credentials: any; // StaahCredentialsDto | Beds24CredentialsDto | RateGainCredentialsDto | SiteminderCredentialsDto

  @ApiPropertyOptional({ description: 'Enable inventory sync' })
  @IsOptional()
  @IsBoolean()
  enableInventorySync?: boolean;

  @ApiPropertyOptional({ description: 'Enable rate sync' })
  @IsOptional()
  @IsBoolean()
  enableRateSync?: boolean;

  @ApiPropertyOptional({ description: 'Enable booking sync' })
  @IsOptional()
  @IsBoolean()
  enableBookingSync?: boolean;

  @ApiPropertyOptional({ description: 'Provider-specific settings' })
  @IsOptional()
  @IsObject()
  settings?: any; // ProviderSettingsDto

  @ApiPropertyOptional({ description: 'Provider API endpoints configuration' })
  @IsOptional()
  @IsObject()
  endpoints?: any; // ProviderEndpointsDto

  @ApiPropertyOptional({ description: 'OTA accounts configuration' })
  @IsOptional()
  @IsObject()
  otaAccounts?: any; // OTAAccountsConfigDto

  @ApiPropertyOptional({ description: 'Hotel chain configuration' })
  @IsOptional()
  @IsObject()
  chainConfiguration?: ChainConfigurationDto;
}

/**
 * Validate Provider Configuration DTO
 * Used for POST /channel-management/providers/validate
 * Same structure as CreateProviderConfigDto but doesn't persist
 */
export class ValidateProviderConfigDto extends CreateProviderConfigDto {}

/**
 * Validation Response DTO
 * Returned from POST /channel-management/providers/validate
 */
export class ValidationResponseDto {
  @ApiProperty({ description: 'Whether configuration is valid' })
  valid: boolean;

  @ApiProperty({ description: 'Validation error messages', type: [String] })
  errors: string[];

  @ApiProperty({ description: 'Validation warning messages', type: [String] })
  warnings: string[];

  @ApiPropertyOptional({ description: 'Additional validation details' })
  details?: Record<string, any>;
}

/**
 * Test Connection Request DTO
 * Used for POST /channel-management/providers/test-connection
 */
export class TestConnectionRequestDto {
  @ApiProperty({ description: 'Provider type', enum: ProviderType })
  @IsEnum(ProviderType)
  providerType: ProviderType;

  @ApiProperty({ description: 'Provider credentials to test' })
  @IsObject()
  credentials: any;

  @ApiProperty({ description: 'Provider endpoints configuration' })
  @IsObject()
  endpoints: {
    baseUrl: string;
    authEndpoint?: string;
    [key: string]: any;
  };

  @ApiPropertyOptional({ description: 'Types of tests to run', type: [String] })
  @IsOptional()
  @IsArray()
  testTypes?: string[]; // ['authentication', 'connection', 'api']

  @ApiPropertyOptional({ description: 'Test timeout in milliseconds' })
  @IsOptional()
  @IsNumber()
  timeoutMs?: number;
}

/**
 * Test Result DTO
 * Individual test result within TestConnectionResponseDto
 */
export class TestResultDto {
  @ApiProperty({ description: 'Type of test performed' })
  testType: string;

  @ApiProperty({ description: 'Whether test passed' })
  success: boolean;

  @ApiProperty({ description: 'Test result message' })
  message: string;

  @ApiPropertyOptional({ description: 'Additional test details' })
  details?: any;
}

/**
 * Test Connection Response DTO
 * Returned from POST /channel-management/providers/test-connection
 */
export class TestConnectionResponseDto {
  @ApiProperty({ description: 'Whether all tests passed' })
  success: boolean;

  @ApiProperty({ description: 'Overall result message' })
  message: string;

  @ApiPropertyOptional({ description: 'Total execution time in milliseconds' })
  executionTimeMs?: number;

  @ApiProperty({ description: 'Individual test results', type: [TestResultDto] })
  testResults: TestResultDto[];
}
