"use strict";
/**
 * Group Payment NATS Contracts (unified: deposits + settlement payments)
 *
 * NATS Patterns:
 *   group-block.payment.create  — record a payment (deposit or settlement)
 *   group-block.payment.void    — void a payment
 *   group-block.payment.list    — list payments with optional type filter
 *
 * Handler: booking-service
 * Called by: api-gateway
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=group-payment.nats.js.map