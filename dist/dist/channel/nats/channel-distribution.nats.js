"use strict";
/**
 * Channel Distribution NATS Contracts
 *
 * Patterns:
 * - channel.distribution.list
 * - channel.distribution.listByHotel  (batch pre-warm for pricing-service)
 * - channel.distribution.getByRatePlan
 * - channel.distribution.getById
 * - channel.distribution.upsert
 * - channel.distribution.update
 * - channel.distribution.delete
 *
 * Event:
 * - channel.distribution.updated  (emitted on upsert/update/delete; pricing-service subscribes for cache invalidation)
 *
 * Handler: channel-service (ChannelDistributionNatsController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=channel-distribution.nats.js.map