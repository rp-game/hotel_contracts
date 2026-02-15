/**
 * OTA Account Type Definitions
 *
 * Centralized OTA account DTOs for both REST API and NATS messages
 * Handles configuration for multiple OTA (Online Travel Agency) accounts
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean, IsUUID, IsOptional, ValidateNested, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * OTA Name Enum
 * Standard names for all supported OTA providers
 */
export enum OTAName {
  BOOKING_COM = 'booking_com',
  EXPEDIA = 'expedia',
  AGODA = 'agoda',
  AIRBNB = 'airbnb',
  HOTELS_COM = 'hotels_com',
  PRICELINE = 'priceline',
  KAYAK = 'kayak',
  TRIVAGO = 'trivago',
  TRIPADVISOR = 'tripadvisor'
}

/**
 * Generic OTA account configuration
 */
export interface BaseOTAConfig {
  enabled: boolean;
  last_verified?: string;
}

/**
 * Booking.com account configuration
 */
export interface BookingComConfig extends BaseOTAConfig {
  username?: string;
  password?: string;
  property_id?: string;
}

/**
 * Expedia account configuration
 */
export interface ExpediaConfig extends BaseOTAConfig {
  username?: string;
  password?: string;
  hotel_id?: string;
}

/**
 * Agoda account configuration
 */
export interface AgodaConfig extends BaseOTAConfig {
  api_key?: string;
  hotel_id?: string;
}

/**
 * Airbnb account configuration
 */
export interface AirbnbConfig extends BaseOTAConfig {
  api_key?: string;
  property_id?: string;
}

/**
 * Hotels.com account configuration
 */
export interface HotelsComConfig extends BaseOTAConfig {
  username?: string;
  password?: string;
  property_id?: string;
}

/**
 * Priceline account configuration
 */
export interface PricelineConfig extends BaseOTAConfig {
  api_key?: string;
  property_id?: string;
}

/**
 * Kayak account configuration
 */
export interface KayakConfig extends BaseOTAConfig {
  api_key?: string;
  property_id?: string;
}

/**
 * Trivago account configuration
 */
export interface TrivagoConfig extends BaseOTAConfig {
  api_key?: string;
  property_id?: string;
}

/**
 * TripAdvisor account configuration
 */
export interface TripAdvisorConfig extends BaseOTAConfig {
  api_key?: string;
  property_id?: string;
}

/**
 * All OTA accounts configuration
 */
export interface AllOTAAccounts {
  booking_com?: BookingComConfig;
  expedia?: ExpediaConfig;
  agoda?: AgodaConfig;
  airbnb?: AirbnbConfig;
  hotels_com?: HotelsComConfig;
  priceline?: PricelineConfig;
  kayak?: KayakConfig;
  trivago?: TrivagoConfig;
  tripadvisor?: TripAdvisorConfig;
}

/**
 * OTA account configuration request
 */
export interface ConfigureOTAAccountRequest {
  providerId: string;
  otaName: 'booking.com' | 'expedia' | 'agoda' | 'airbnb' | 'hotels.com' | 'priceline' | 'kayak' | 'trivago' | 'tripadvisor';
  configuration: BaseOTAConfig;
}

/**
 * OTA account test request
 */
export interface TestOTAAccountRequest {
  providerId: string;
  otaName: string;
}

/**
 * OTA account test response
 */
export interface TestOTAAccountResponse {
  otaName: string;
  isValid: boolean;
  message?: string;
  testedAt: string;
}

/**
 * OTA accounts list response
 */
export interface OTAAccountsListResponse {
  data: AllOTAAccounts;
  providerId: string;
  testedAt?: string;
}

/**
 * OTA Credentials DTO
 * Credentials for OTA account authentication
 * Used in OTA account configuration
 */
export class OTACredentialsDto {
  @ApiPropertyOptional({ description: 'OTA username' })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiPropertyOptional({ description: 'OTA password' })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiPropertyOptional({ description: 'OTA property ID' })
  @IsOptional()
  @IsString()
  property_id?: string;

  @ApiPropertyOptional({ description: 'OTA hotel ID' })
  @IsOptional()
  @IsString()
  hotel_id?: string;

  @ApiPropertyOptional({ description: 'OTA API key' })
  @IsOptional()
  @IsString()
  api_key?: string;

  @ApiPropertyOptional({ description: 'OTA client ID' })
  @IsOptional()
  @IsString()
  client_id?: string;
}

/**
 * OTA Account Configuration DTO
 * Represents a single OTA account configuration
 * Returned by API Gateway endpoints
 * Used for both REST API responses and NATS messages
 */
export class OTAAccountConfigurationDto {
  @ApiProperty({ description: 'OTA name' })
  @IsString()
  ota_name: string;

  @ApiProperty({ description: 'Provider ID' })
  @IsUUID()
  provider_id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenant_id: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotel_id: string;

  @ApiProperty({ description: 'Whether OTA account is enabled' })
  @IsBoolean()
  enabled: boolean;

  @ApiProperty({ description: 'OTA credentials', type: OTACredentialsDto })
  @ValidateNested()
  @Type(() => OTACredentialsDto)
  credentials: OTACredentialsDto;

  @ApiPropertyOptional({ description: 'Last verification timestamp' })
  @IsOptional()
  @IsString()
  last_verified?: string;

  @ApiPropertyOptional({ description: 'Additional OTA-specific configuration' })
  @IsOptional()
  @IsObject()
  ota_config?: Record<string, any>;
}

/**
 * Configure OTA Account DTO
 * Request DTO for configuring OTA account
 * Used by API Gateway PUT /ota-accounts/:otaName endpoint
 */
export class ConfigureOTAAccountDto {
  @ApiProperty({ description: 'Provider ID' })
  @IsUUID()
  provider_id: string;

  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsUUID()
  tenant_id?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotel_id?: string;

  @ApiProperty({ description: 'Whether to enable the OTA account' })
  @IsBoolean()
  enabled: boolean;

  @ApiProperty({ description: 'OTA credentials', type: OTACredentialsDto })
  @ValidateNested()
  @Type(() => OTACredentialsDto)
  credentials: OTACredentialsDto;

  @ApiPropertyOptional({ description: 'Additional OTA-specific configuration' })
  @IsOptional()
  @IsObject()
  ota_config?: Record<string, any>;
}

/**
 * Test OTA Connection DTO
 * Request DTO for testing OTA connection
 * Used by API Gateway POST /ota-accounts/:otaName/test endpoint
 */
export class TestOTAConnectionDto {
  @ApiProperty({ description: 'Provider ID' })
  @IsUUID()
  provider_id: string;

  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsUUID()
  tenant_id?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotel_id?: string;
}

/**
 * OTA Connection Test DTO
 * Response DTO for OTA connection test results
 * Returned by API Gateway test endpoint
 */
export class OTAConnectionTestDto {
  @ApiProperty({ description: 'Connection test success status' })
  @IsBoolean()
  connected: boolean;

  @ApiPropertyOptional({ description: 'Last verification timestamp' })
  @IsOptional()
  @IsString()
  last_verified?: string;

  @ApiPropertyOptional({ description: 'Error message if connection failed' })
  @IsOptional()
  @IsString()
  error?: string;

  @ApiPropertyOptional({ description: 'Response time in milliseconds' })
  @IsOptional()
  response_time?: number;

  @ApiPropertyOptional({ description: 'Additional test details' })
  @IsOptional()
  @IsObject()
  test_details?: Record<string, any>;
}
