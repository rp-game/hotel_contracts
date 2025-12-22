"use strict";
/**
 * Channel Event Listener NATS Contracts
 *
 * Patterns (Fire-and-Forget Events):
 * - booking.created
 * - booking.updated
 * - booking.cancelled
 * - inventory.room.availability.updated
 * - pricing.rate.updated
 *
 * Handler: channel-service (ProvidersNatsController)
 * Called by: booking-service, inventory-service, pricing-service
 *
 * Note: These are event listeners with no response.
 * Services publish events, channel-service listens and syncs to external channels.
 * Fire-and-forget pattern means handlers return void, not NatsResponse.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=events.nats.js.map