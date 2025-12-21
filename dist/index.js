"use strict";
/**
 * Hotel Contracts - Centralized Domain Contracts Repository
 *
 * This is the single source of truth for all microservice contracts
 * including NATS message definitions, REST DTOs, types, and enums.
 *
 * @packageDocumentation
 *
 * ## Installation
 *
 * ```bash
 * npm install @hotel/contracts@github:org/hotel-contracts#v1.0.0
 * ```
 *
 * ## Usage
 *
 * ```typescript
 * // Common contracts used by all services
 * import { NatsResponse, NatsPaginatedResponse } from '@hotel/contracts/common';
 *
 * // Domain-specific contracts
 * import { CreateBookingRequest } from '@hotel/contracts/booking/nats';
 * import { BookingStatus } from '@hotel/contracts/booking';
 *
 * // Wildcard imports for full domain
 * import * as BookingContracts from '@hotel/contracts/booking';
 * ```
 *
 * ## Domains
 *
 * - **common**: Shared interfaces (NatsResponse, pagination, errors)
 * - **booking**: Booking service contracts
 * - **pricing**: Pricing service contracts
 * - **inventory**: Inventory service contracts
 * - **housekeeping**: Housekeeping service contracts
 * - **user**: User service contracts
 * - **payment**: Payment service contracts
 * - **crm**: CRM service contracts
 * - **financial**: Financial service contracts
 * - **channel**: Channel integration contracts
 * - **notification**: Notification service contracts
 * - **report**: Report service contracts
 * - **platform**: Platform management contracts
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Common contracts - used across all services
__exportStar(require("./common"), exports);
// Domain-specific contracts
__exportStar(require("./booking"), exports);
__exportStar(require("./pricing"), exports);
__exportStar(require("./inventory"), exports);
__exportStar(require("./housekeeping"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./payment"), exports);
__exportStar(require("./crm"), exports);
__exportStar(require("./financial"), exports);
__exportStar(require("./channel"), exports);
__exportStar(require("./notification"), exports);
__exportStar(require("./report"), exports);
__exportStar(require("./platform"), exports);
__exportStar(require("./room-move"), exports);
//# sourceMappingURL=index.js.map