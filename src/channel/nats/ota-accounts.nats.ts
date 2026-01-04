/**
 * OTA Accounts NATS Contracts
 *
 * Patterns:
 * - channel.ota.accounts.list
 * - channel.ota.accounts.configure
 * - channel.ota.accounts.disable
 * - channel.ota.accounts.test
 *
 * Handler: channel-service (ProvidersNatsController)
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common';
import {
  OTAAccountsListResponse,
  ConfigureOTAAccountRequest,
  AllOTAAccounts,
  TestOTAAccountRequest,
  TestOTAAccountResponse,
  OTAAccountConfigurationDto,
  OTAConnectionTestDto,
} from '../types';

/**
 * List OTA Accounts Request
 * Pattern: channel.ota.accounts.list
 */
export interface ListOTAAccountsNatsRequest {
  providerId: string;
  tenantId: string;
  hotelId?: string;
}

/**
 * List OTA Accounts Response
 * Returns array of OTA account configurations
 * Wrapped in NatsResponse by handler, unwrapped by API Gateway
 */
export type ListOTAAccountsNatsResponse = NatsResponse<OTAAccountConfigurationDto[]>;

/**
 * Configure OTA Account Request
 * Pattern: channel.ota.accounts.configure
 */
export interface ConfigureOTAAccountNatsRequest {
  providerId: string;
  otaName: string;
  credentials: Record<string, any>;
  enabled: boolean;
  tenantId: string;
  hotelId?: string;
}

/**
 * Configure OTA Account Response
 * Returns single OTA account configuration after update
 * Wrapped in NatsResponse by handler, unwrapped by API Gateway
 */
export type ConfigureOTAAccountNatsResponse = NatsResponse<OTAAccountConfigurationDto>;

/**
 * Disable OTA Account Request
 * Pattern: channel.ota.accounts.disable
 */
export interface DisableOTAAccountNatsRequest {
  providerId: string;
  otaName: string;
  tenantId: string;
  hotelId?: string;
}

/**
 * Disable OTA Account Response
 * Returns success message after disabling
 * Wrapped in NatsResponse by handler, unwrapped by API Gateway
 */
export type DisableOTAAccountNatsResponse = NatsResponse<{ message: string }>;

/**
 * Test OTA Account Connection Request
 * Pattern: channel.ota.accounts.test
 */
export interface TestOTAAccountNatsRequest extends TestOTAAccountRequest {
  providerId: string;
  otaName: string;
  tenantId: string;
  hotelId?: string;
}

/**
 * Test OTA Account Connection Response
 * Returns connection test results
 * Wrapped in NatsResponse by handler, unwrapped by API Gateway
 */
export type TestOTAAccountNatsResponse = NatsResponse<OTAConnectionTestDto>;
