/**
 * Provider REST API DTOs
 *
 * Used by API Gateway for provider configuration endpoints
 * These are class-based DTOs with @ApiProperty decorators for Swagger
 */
import { ProviderType } from '../enums/provider-type.enum';
import { ChainConfigurationDto } from '../types/chain-config.types';
/**
 * Create Provider Configuration DTO
 * Used for POST /channel-management/providers
 */
export declare class CreateProviderConfigDto {
    providerType: ProviderType;
    providerName: string;
    tenantId?: string;
    hotelId?: string;
    credentials: any;
    enableInventorySync?: boolean;
    enableRateSync?: boolean;
    enableBookingSync?: boolean;
    settings?: any;
    endpoints?: any;
    otaAccounts?: any;
    chainConfiguration?: ChainConfigurationDto;
}
/**
 * Validate Provider Configuration DTO
 * Used for POST /channel-management/providers/validate
 * Same structure as CreateProviderConfigDto but doesn't persist
 */
export declare class ValidateProviderConfigDto extends CreateProviderConfigDto {
}
/**
 * Validation Response DTO
 * Returned from POST /channel-management/providers/validate
 */
export declare class ValidationResponseDto {
    valid: boolean;
    errors: string[];
    warnings: string[];
    details?: Record<string, any>;
}
/**
 * Test Connection Request DTO
 * Used for POST /channel-management/providers/test-connection
 */
export declare class TestConnectionRequestDto {
    providerType: ProviderType;
    credentials: any;
    endpoints: {
        baseUrl: string;
        authEndpoint?: string;
        [key: string]: any;
    };
    testTypes?: string[];
    timeoutMs?: number;
}
/**
 * Test Result DTO
 * Individual test result within TestConnectionResponseDto
 */
export declare class TestResultDto {
    testType: string;
    success: boolean;
    message: string;
    details?: any;
}
/**
 * Test Connection Response DTO
 * Returned from POST /channel-management/providers/test-connection
 */
export declare class TestConnectionResponseDto {
    success: boolean;
    message: string;
    executionTimeMs?: number;
    testResults: TestResultDto[];
}
//# sourceMappingURL=provider.rest.d.ts.map