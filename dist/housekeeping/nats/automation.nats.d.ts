/**
 * Housekeeping Automation NATS Contracts
 *
 * Patterns:
 * - housekeeping.automation.events.findAll
 *
 * Handler: housekeeping-service (AutomationController)
 * Called by: api-gateway (HousekeepingService)
 */
import { NatsResponse } from '../../common';
/**
 * Automation Event Item
 */
export interface AutomationEventItem {
    id: string;
    eventType: string;
    description: string;
    status: string;
    timestamp: string;
    tenantId: string;
    hotelId: string;
    metadata?: any;
    ruleKey: string;
}
/**
 * Paginated Automation Events Response
 */
export interface AutomationEventsData {
    data: AutomationEventItem[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Get Automation Events Request
 * Pattern: housekeeping.automation.events.findAll
 *
 * Retrieve automation events for a hotel with optional filtering.
 */
export interface GetAutomationEventsNatsRequest {
    tenantId: string;
    hotelId: string;
    limit?: number;
    page?: number;
    eventType?: string;
    status?: string;
}
export type GetAutomationEventsNatsResponse = NatsResponse<AutomationEventsData>;
//# sourceMappingURL=automation.nats.d.ts.map