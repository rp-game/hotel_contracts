/**
 * Customer Service Alerts NATS Contracts
 *
 * Patterns:
 * - crm.service-alert.list
 * - crm.service-alert.create
 * - crm.service-alert.resolve
 * - crm.service-alert.delete
 *
 * Handler: crm-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common';
export declare enum ServiceAlertType {
    INFO = "INFO",
    WARNING = "WARNING",
    CRITICAL = "CRITICAL"
}
export declare class ServiceAlertDto {
    id: string;
    tenantId: string;
    customerId: string;
    type: string;
    content: string;
    resolved: boolean;
    resolvedAt?: string;
    createdBy?: string;
    createdAt: string;
}
export declare class ListServiceAlertsNatsRequest {
    tenantId: string;
    customerId: string;
}
export type ListServiceAlertsNatsResponse = NatsResponse<ServiceAlertDto[]>;
export declare class CreateServiceAlertNatsRequest {
    tenantId: string;
    customerId: string;
    type: ServiceAlertType;
    content: string;
    createdBy?: string;
}
export type CreateServiceAlertNatsResponse = NatsResponse<ServiceAlertDto>;
export declare class ResolveServiceAlertNatsRequest {
    tenantId: string;
    customerId: string;
    alertId: string;
}
export type ResolveServiceAlertNatsResponse = NatsResponse<ServiceAlertDto>;
export declare class DeleteServiceAlertNatsRequest {
    tenantId: string;
    customerId: string;
    alertId: string;
}
export type DeleteServiceAlertNatsResponse = NatsResponse<{
    deleted: boolean;
}>;
//# sourceMappingURL=service-alerts.nats.d.ts.map