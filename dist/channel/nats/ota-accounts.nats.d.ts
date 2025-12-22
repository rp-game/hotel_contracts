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
import { AllOTAAccounts, TestOTAAccountRequest, TestOTAAccountResponse } from '../types';
/**
 * List OTA Accounts Request
 * Pattern: channel.ota.accounts.list
 */
export interface ListOTAAccountsNatsRequest {
    providerId: string;
    tenantId: string;
    hotelId?: string;
}
export type ListOTAAccountsNatsResponse = NatsResponse<AllOTAAccounts[]>;
/**
 * Configure OTA Account Request
 * Pattern: channel.ota.accounts.configure
 */
export interface ConfigureOTAAccountNatsRequest {
    providerId: string;
    otaName: string;
    credentials: Record<string, any>;
    tenantId: string;
    hotelId?: string;
}
export type ConfigureOTAAccountNatsResponse = NatsResponse<AllOTAAccounts>;
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
export type DisableOTAAccountNatsResponse = NatsResponse<AllOTAAccounts>;
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
export type TestOTAAccountNatsResponse = NatsResponse<TestOTAAccountResponse>;
//# sourceMappingURL=ota-accounts.nats.d.ts.map